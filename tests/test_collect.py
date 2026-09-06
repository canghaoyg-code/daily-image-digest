import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location("collect", Path(__file__).parents[1] / "scripts/collect.py")
collect = importlib.util.module_from_spec(spec)
spec.loader.exec_module(collect)


class CollectorTests(unittest.TestCase):
    def test_feed_is_discovery_not_page_proof(self):
        xml = b'<rss><channel><item><title>Test</title><link>https://example.org/a</link><pubDate>Sat, 05 Sep 2026 16:05:00 GMT</pubDate></item></channel></rss>'
        row = collect.parse_feed(xml, {"platform":"test", "url":"https://example.org/feed"}, "2026-09-05T17:00:00+00:00")[0]
        self.assertEqual(row["publishedAt"], "2026-09-05T16:05:00+00:00")
        self.assertEqual(row["evidenceKind"], "feed")
        self.assertTrue(row["needsPageReview"])

    def test_ambiguous_dates_and_login_pages_are_not_news(self):
        self.assertIsNone(collect.parse_time("2026-09-06"))
        self.assertIsNone(collect.parse_time("yesterday"))
        with self.assertRaises(ValueError):
            collect.parse_feed(b'<html><body>Sign in</body></html>', {}, "now")

    def test_atom_links_and_updated_not_treated_as_new_publication(self):
        xml = b'<feed xmlns="http://www.w3.org/2005/Atom"><entry><title>A</title><link href="https://example.org/a"/><updated>2026-09-06T03:00:00Z</updated></entry></feed>'
        row = collect.parse_feed(xml, {"platform":"test", "url":"https://example.org/feed"}, "2026-09-06T04:00:00+00:00")[0]
        self.assertIsNone(row["publishedAt"])
        self.assertIsNotNone(row["feedUpdatedAt"])

    def test_merge_urls_not_different_voices(self):
        row = {"url":"https://example.org/a", "title":"Same event", "platform":"P", "observedAt":"2026-09-06T01:00:00+00:00"}
        merged = collect.merge_candidates([row, {**row,"url":row["url"]+"?utm_source=x"}, {**row,"url":"https://example.org/b"}], {})
        self.assertEqual(len(merged), 2)
        self.assertEqual(len(merged[0]["sightings"]), 2)

    def test_rank_rise_only_with_same_platform_and_list(self):
        row = {"url":"https://example.org/a", "title":"A", "platform":"P", "observedAt":"2026-09-06T02:00:00+00:00", "discovery":{"url":"https://example.org/top", "kind":"ranking", "rank":2}}
        old = {row["url"]:{"sightings":[{"url":"https://example.org/top", "platform":"P", "kind":"ranking", "rank":8, "observedAt":"2026-09-06T01:00:00+00:00"}]}}
        signal = collect.merge_candidates([row], old)[0]["sightings"][0]
        self.assertEqual(signal["rankRise"], 6)
        self.assertEqual(signal["elapsedSeconds"], 3600)
        row["platform"] = "Different"
        self.assertNotIn("rankRise", collect.merge_candidates([row], old)[0]["sightings"][0])


if __name__ == "__main__":
    unittest.main()
