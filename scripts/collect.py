"""Public-feed discovery + browser observations. No login, proxy or paywall bypass.

The output is a candidate pool, never a publishable edition. Page-visible dates,
voices, original images and editorial selection still need explicit review.
"""
import argparse
from collections import Counter
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
import hashlib
import html
import json
from pathlib import Path
import re
import sys
import time
from urllib.error import HTTPError
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit
from urllib.request import Request, build_opener, HTTPRedirectHandler
from urllib.robotparser import RobotFileParser
import xml.etree.ElementTree as ET
from zoneinfo import ZoneInfo

AGENT = "DailyImageDigest/1.0 (+https://github.com/canghaoyg-code/daily-image-digest)"
BEIJING = ZoneInfo("Asia/Shanghai")
LIMIT = 4 * 1024 * 1024


def canonical(url):
    parts = urlsplit(url)
    if parts.scheme not in ("http", "https") or not parts.hostname or parts.username or parts.password:
        raise ValueError("invalid public URL")
    query = sorted((k, v) for k, v in parse_qsl(parts.query, keep_blank_values=True)
                   if not k.lower().startswith("utm_") and k.lower() not in ("fbclid", "gclid"))
    return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), parts.path or "/", urlencode(query), ""))


def parse_time(raw):
    if not raw:
        return None
    try:
        date = datetime.fromisoformat(raw.replace("Z", "+00:00"))
    except ValueError:
        try:
            date = parsedate_to_datetime(raw)
        except (TypeError, ValueError, OverflowError):
            return None
    # Do not silently assign a timezone to dates a publisher left ambiguous.
    return date.astimezone(timezone.utc).isoformat() if date.tzinfo else None


def plain(value):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value or ""))).strip()


def parse_feed(data, feed, observed):
    if b"<!DOCTYPE" in data.upper() or b"<!ENTITY" in data.upper():
        raise ValueError("XML entity declarations are not accepted")
    root = ET.fromstring(data)
    if root.tag.rsplit("}", 1)[-1] not in ("rss", "feed", "RDF"):
        raise ValueError("not an RSS/Atom feed; possibly a login/challenge page")
    result = []
    for element in root.iter():
        if element.tag.rsplit("}", 1)[-1] not in ("item", "entry"):
            continue
        children = list(element)
        def field(*names):
            return next((c.text or "" for c in children if c.tag.rsplit("}", 1)[-1] in names), "")
        link = field("link")
        if not link:
            link = next((c.get("href") for c in children if c.tag.rsplit("}", 1)[-1] == "link" and c.get("rel", "alternate") == "alternate"), "")
        title = plain(field("title"))
        if not title or not link:
            continue
        try:
            url = canonical(link)
        except ValueError:
            continue
        raw_time = field("pubDate", "published", "date")
        result.append({"url": url, "title": title, "platform": feed["platform"],
                       "publisher": feed["platform"], "lane": feed.get("lane"),
                       "publishedAt": parse_time(raw_time), "timeEvidence": raw_time or None,
                       "feedUpdatedAt": parse_time(field("updated")), "evidenceKind": "feed",
                       "observedAt": observed, "access": "public", "needsPageReview": True,
                       "discovery": {"url": feed["url"], "kind": "feed"}})
    return result


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def read_public(url):
    """No automatic redirects to authentication or another unreviewed host."""
    canonical(url)
    with build_opener(NoRedirect()).open(Request(url, headers={"User-Agent": AGENT, "Accept": "application/rss+xml, application/atom+xml, text/xml, text/plain"}), timeout=18) as response:
        data = response.read(LIMIT + 1)
        if len(data) > LIMIT:
            raise ValueError("response exceeds safe size limit")
        return data


def fetch_feed(feed, observed, robots_cache):
    parts = urlsplit(canonical(feed["url"]))
    origin = f"{parts.scheme}://{parts.netloc}"
    if origin not in robots_cache:
        policy = RobotFileParser()
        try:
            policy.parse(read_public(origin + "/robots.txt").decode("utf-8", errors="replace").splitlines())
        except HTTPError as error:
            if error.code == 404:
                policy.parse([])
            else:
                raise
        robots_cache[origin] = policy
    policy = robots_cache[origin]
    if not policy.can_fetch(AGENT, feed["url"]):
        raise PermissionError("robots.txt does not permit this feed")
    delay = policy.crawl_delay(AGENT) or 1
    if delay > 10:
        raise PermissionError("crawl delay requires a later scheduled observation")
    time.sleep(delay)
    data = read_public(feed["url"])
    return parse_feed(data, feed, observed), hashlib.sha256(data).hexdigest()


def merge_candidates(rows, previous):
    pool = {}
    for row in rows:
        url = canonical(row["url"])
        record = pool.setdefault(url, {**row, "url": url, "id": hashlib.sha256(url.encode()).hexdigest()[:16], "sightings": []})
        if row.get("evidenceKind") == "page" and record.get("evidenceKind") != "page":
            record.update({k: v for k, v in row.items() if k not in ("url", "sightings", "id")})
        record["sightings"].append({"platform": row["platform"], "observedAt": row["observedAt"], **row.get("discovery", {})})
    for url, row in pool.items():
        old = previous.get(url, {})
        row["firstSeenAt"] = old.get("firstSeenAt", row["observedAt"])
        row["seenRuns"] = old.get("seenRuns", 0) + 1
        row["previousSightings"] = old.get("sightings", [])
        # Only compare ranks within the very same list; RSS order is not heat.
        for signal in row["sightings"]:
            prior = next((s for s in old.get("sightings", []) if s.get("platform") == signal.get("platform") and s.get("url") == signal.get("url") and s.get("kind") == "ranking"), None)
            if prior and type(prior.get("rank")) is int and type(signal.get("rank")) is int:
                elapsed = (datetime.fromisoformat(signal["observedAt"]) - datetime.fromisoformat(prior["observedAt"])).total_seconds()
                if elapsed > 0:
                    signal["rankRise"] = prior["rank"] - signal["rank"]
                    signal["elapsedSeconds"] = elapsed
    return list(pool.values())


def run(args):
    started = datetime.now(timezone.utc)
    observed = started.isoformat()
    day = started.astimezone(BEIJING).date().isoformat()
    print(f"UTC {observed}; 北京时间 {started.astimezone(BEIJING).isoformat()}")
    config = json.loads(Path(args.sources).read_text())
    rows, reports, policies = [], [], {}
    if not args.import_only:
        for feed in config.get("feeds", []):
            try:
                found, digest = fetch_feed(feed, datetime.now(timezone.utc).isoformat(), policies)
                rows.extend(found)
                reports.append({"id": feed["id"], "url": feed["url"], "status": "ok" if found else "empty", "candidates": len(found), "responseSha256": digest})
            except Exception as error:
                reports.append({"id": feed["id"], "url": feed["url"], "status": "unavailable", "reason": str(error)})
    for path in args.import_file:
        bundle = json.loads(Path(path).read_text())
        for row in bundle.get("candidates", []):
            if row.get("access") != "public" or not all(row.get(k) for k in ("title", "publisher", "platform", "timeEvidence", "observedAt", "excerpt")):
                raise ValueError("browser imports require a public original, publisher, excerpt and visible date evidence")
            canonical(row["url"])
            if not parse_time(row["observedAt"]):
                raise ValueError("observation must have an explicit timezone")
            # Keep only the editorial fields. Never import browser cookies or headers.
            fields = ("url", "title", "publisher", "platform", "author", "timeEvidence", "publishedAt", "publishedDate", "timezone", "updatedAt", "updateEvidence", "updateNote", "observedAt", "excerpt", "discovery", "engagement", "storyHint", "images", "access")
            rows.append({**{k: row[k] for k in fields if k in row}, "evidenceKind": "page", "needsPageReview": False})
        reports.extend(bundle.get("channelReports", []))
    cache = Path(".cache/collection")
    cache.mkdir(parents=True, exist_ok=True)
    index = cache / "index.json"
    previous = json.loads(index.read_text()) if index.exists() else {}
    merged = merge_candidates(rows, previous)
    dates = Counter()
    for row in merged:
        timestamp = parse_time(row.get("publishedAt"))
        date = datetime.fromisoformat(timestamp).astimezone(BEIJING).date().isoformat() if timestamp else None
        dates["today" if date == day else "older" if date and date < day else "unknownOrFuture"] += 1
    # Suggest exact-title/storyHint groups; never delete separate voices/URLs.
    groups = {}
    for row in merged:
        key = row.get("storyHint") or re.sub(r"[\W_]", "", row["title"]).casefold()
        groups.setdefault(key, []).append(row["id"])
    output = cache / started.strftime("%Y%m%dT%H%M%S%fZ")
    output.mkdir()
    (output / "candidates.jsonl").write_text("".join(json.dumps(row, ensure_ascii=False) + "\n" for row in merged))
    report = {"startedAt": observed, "beijingDate": day, "candidateDatesNotPublicationProof": dict(dates), "candidates": len(merged), "channels": reports,
              "unobservedPlatforms": [p for p in config.get("discoveryPlatforms", []) if p not in {r.get("platform") for r in reports}],
              "storySuggestions": [v for v in groups.values() if len(v) > 1], "publishable": False}
    (output / "report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    previous.update({r["url"]: {k: r[k] for k in ("firstSeenAt", "seenRuns", "sightings")} for r in merged})
    temp = cache / f"index-{started.strftime('%H%M%S%f')}.tmp"
    temp.write_text(json.dumps(previous, ensure_ascii=False))
    temp.replace(index)
    print(json.dumps({"output": str(output), **report}, ensure_ascii=False, indent=2))
    return 0 if merged else 1


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sources", default="config/discovery.json")
    parser.add_argument("--import", dest="import_file", action="append", default=[])
    parser.add_argument("--import-only", action="store_true")
    sys.exit(run(parser.parse_args()))
