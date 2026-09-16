import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { newsroomReport, productFingerprint, reviewDimensions, validateAcceptance } from "../lib/newsroom.mjs";

const [command, input, extra] = process.argv.slice(2);
if (!["import", "status", "review", "seal"].includes(command) || !input) throw new Error("用法：node scripts/newsroom.mjs import|status|review|seal .cache/drafts/期号.json [采集目录或验收文件]");
const path = resolve(input);
if (!path.startsWith(resolve(".cache/drafts") + sep) || !path.endsWith(".json")) throw new Error("工作台只修改 .cache/drafts 中的草稿");
const edition = JSON.parse(await readFile(path));
if (edition.status !== "draft") throw new Error("只接受 draft，不改写历史成品");
const save = () => writeFile(path, JSON.stringify(edition, null, 2) + "\n");

if (command === "import") {
  if (!extra) throw new Error("需要 collect.py 输出目录");
  const report = JSON.parse(await readFile(resolve(extra, "report.json")));
  if (report.beijingDate !== edition.editionDate) throw new Error("不能把旧采集记录当作本期发现");
  const rows = (await readFile(resolve(extra, "candidates.jsonl"), "utf8")).trim().split("\n").filter(Boolean).map(line => JSON.parse(line));
  const desk = edition.newsroom ??= {version:1, observations:[], candidates:[], topics:[]};
  const addObservation = observation => {
    const previous = desk.observations.find(o => o.url === observation.url && o.observedAt === observation.observedAt && o.platform === observation.platform && o.evidence === observation.evidence && o.kind === observation.kind);
    if (previous) return previous.id;
    const id = `observation-${desk.observations.length + 1}`;
    desk.observations.push({...observation, id});
    return id;
  };
  for (const row of rows) {
    const observationIds = (row.sightings ?? []).map(s => addObservation({platform:s.platform, url:s.url, kind:s.kind === "feed" ? "feed" : s.kind || "topic-search", status:"read", observedAt:s.observedAt, evidence:s.evidence || (s.kind === "feed" ? "RSS 候选，原页尚未读取" : ""), ...(s.rank !== undefined ? {rank:s.rank} : {})}));
    const previous = desk.candidates.find(c => c.url === row.url);
    if (previous) previous.observationIds = [...new Set([...previous.observationIds, ...observationIds])];
    else desk.candidates.push({id:row.id, url:row.url, title:row.title, evidenceKind:row.evidenceKind, timeEvidence:row.timeEvidence, observationIds});
  }
  for (const channel of report.channels.filter(c => c.observedAt && c.evidence || ["unavailable", "restricted", "failed"].includes(c.status))) {
    addObservation({platform:channel.platform || channel.id, url:channel.url, kind:channel.kind || "feed", status:["ok", "read"].includes(channel.status) ? "read" : channel.status === "restricted" ? "restricted" : "failed", observedAt:channel.observedAt || report.startedAt, evidence:channel.evidence || channel.reason});
  }
  desk.unobservedPlatforms = [...new Set([...(desk.unobservedPlatforms ?? []), ...(report.unobservedPlatforms ?? [])])].filter(platform => !desk.observations.some(o => o.platform === platform));
  edition.editorialReview.decision = "revise";
  delete edition.editorialReview.acceptance;
  await save();
  console.log(`已导入 ${rows.length} 个发现线索；未自动选题、未自动改写为新闻。`);
}
const report = newsroomReport(edition);
if (command === "status" || command === "import") {
  console.log(JSON.stringify(report, null, 2));
  if (command === "status" && report.errors.length) process.exitCode = 1;
} else if (command === "review") {
  if (report.errors.length) throw new Error(report.errors.join("\n"));
  const fingerprint = await productFingerprint(edition);
  await mkdir(".cache/reviews", {recursive:true});
  const reviewPath = `.cache/reviews/${edition.id}-${fingerprint.slice(0, 12)}.json`;
  const review = {fingerprint, contentFingerprint:await productFingerprint(edition, resolve("."), false), decision:"revise", reviewer:"", reviewedAt:"", assessments:Object.fromEntries(reviewDimensions.map(key => [key, {verdict:"revise", itemIds:[], evidence:""}])), screens:["desktop", "mobile"].map(viewport => ({viewport, verdict:"revise", itemIds:[], evidence:""})), findings:[], omissions:[], diagnostic:report};
  await writeFile(reviewPath, JSON.stringify(review, null, 2) + "\n", {flag:"wx"});
  console.log(`待阅读验收：${reviewPath}。须实际读原文和桌面/手机成品；此命令不会批准。`);
} else if (command === "seal") {
  if (!extra) throw new Error("需要实际完成的验收文件");
  const acceptance = JSON.parse(await readFile(extra));
  edition.editorialReview.acceptance = acceptance;
  const errors = [...report.errors, ...validateAcceptance(edition, await productFingerprint(edition))];
  errors.push(...validateAcceptance(edition, await productFingerprint(edition, resolve("."), false), {archival:true}));
  if (errors.length) throw new Error(errors.join("\n"));
  edition.editorialReview.decision = "approved";
  edition.editorialReview.reviewedAt = acceptance.reviewedAt;
  await save();
  console.log("验收已绑定本版成品；后续内容/配图/渲染修改会使验收失效。尚未发布。");
}
