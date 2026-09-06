import assert from "node:assert/strict";
import test from "node:test";
import { readFile, mkdtemp, mkdir, writeFile, cp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { beijingDate, canonicalUrl, editionOrder, isInstant, validateEdition } from "../lib/editorial.mjs";
import { checkFile, imageSize, validateAssets } from "../lib/content-files.mjs";
import { parsePreferences } from "../lib/preferences.mjs";

const now = "2026-09-06T12:10:00Z";
function fixture(today = 7) {
  const sources = Array.from({length:10}, (_, i) => ({id:`s${i}`, url:`https://example.org/post/${i}`, platform:"测试平台", publisher:`发布者${i}`, author:`账号${i}`, publishedAt:i < today ? "2026-09-06T08:00:00+08:00" : "2026-09-05T08:00:00+08:00", observedAt:now, timeEvidence:"页面可见时间", excerpt:"原文短摘录", evidenceKind:"page", access:"public"}));
  return {schemaVersion:1, id:"2026-09-06-evening", editionDate:"2026-09-06", status:"published", generatedAt:now, cutoffAt:"2026-09-06T20:00:00+08:00", headline:"测试期号",
    editorialReview:{reviewedAt:now, imageRelevance:"逐图检查", voiceDiversity:"独立角度", readingOrder:"长短交错", coverage:"公共事务与轻读"},
    sources, items:sources.map((s, i) => ({id:`entry-${i}`, title:`测试${i}`, section:i === 9 ? "人物、自然与轻读" : "今日焦点", format:"brief", source:s.publisher, sourceType:"媒体", sourceKind:"media-report", time:s.publishedAt.slice(0,10) + (i >= today ? " · 背景" : ""), labels:i >= today ? ["背景"] : [], href:s.url, details:[s.publisher + "认为这是一条独立信息"], blocks:[{kind:"text", text:s.publisher + "认为这是一条独立信息", sourceIds:[s.id]}], sourceIds:[s.id], freshnessSourceId:s.id, selectionReason:"独立信息", evidence:[{detailIndex:0, sourceIds:[s.id]}]}))};
}
const check = edition => validateEdition(edition, {forPublication:true, now});
test("时区、非法日期和早晚版顺序", () => {
  assert.equal(beijingDate("2026-09-05T16:01:00Z"), "2026-09-06");
  assert.equal(isInstant("2026-02-30T01:00:00Z"), false);
  assert.equal(isInstant("2026-09-06T08:00:00"), false);
  assert.ok(editionOrder("2026-09-06-evening") > editionOrder("2026-09-06-morning"));
});
test("70% 为来源日期计算，改展示文案不能变成当天", () => {
  assert.deepEqual(check(fixture()).errors, []);
  const edition = fixture(6);
  edition.items.forEach(i => { i.time = "2026-09-06 今天"; });
  assert.equal(check(edition).counts.today, 6);
  assert.ok(check(edition).errors.some(s => s.includes("不足 70%")));
  assert.ok(check(edition).errors.some(s => s.includes("展示时间")));
});
test("首发日、更新日、采集时刻不能互相冒充", () => {
  const edition = fixture();
  edition.sources[0].evidenceKind = "feed";
  edition.sources[1].updatedAt = "2026-09-06T10:00:00+08:00";
  edition.sources[2].publishedAt = "2026-09-06T21:00:00+08:00";
  const errors = check(edition).errors.join("\n");
  assert.match(errors, /RSS\/搜索日期/);
  assert.match(errors, /更新缺少新进展/);
  assert.match(errors, /原文晚于本期截稿/);
});
test("不能用不同 ID 或追踪参数复制来源来凑多声部", () => {
  const edition = fixture();
  edition.sources[1].url = edition.sources[0].url + "?utm_source=x";
  edition.items[1].href = edition.sources[1].url;
  assert.match(check(edition).errors.join("\n"), /伪装成多个来源/);
  assert.equal(canonicalUrl("https://example.org/a?b=2&utm_source=x#a"), "https://example.org/a?b=2");
});
test("多声部必须有不同原文、不同角度及可见热度依据", () => {
  const edition = fixture();
  const item = edition.items[0];
  item.storyId = "one";
  item.format = "social";
  item.sourceIds = ["s0", "s1", "s2"];
  item.voices = ["s0", "s1", "s2"].map((sourceId, i) => ({sourceId, role:"ordinary-user", text:"观点" + i, angle:"相同观点"}));
  edition.stories = [{id:"one", multiVoice:true, discoverySignals:[{platform:"微博", url:"https://s.weibo.com/top/summary", observedAt:now, evidence:"榜单第 2"}, {platform:"百度", url:"https://top.baidu.com/board", observedAt:now, evidence:"榜单第 4"}]}];
  assert.match(check(edition).errors.join("\n"), /不同角度/);
  item.voices.forEach((v, i) => { v.angle = "角度" + i; });
  assert.deepEqual(check(edition).errors, []);
});
test("正文来源和轻读结尾为发布要求", () => {
  const edition = fixture();
  edition.items[0].evidence = [];
  edition.items.at(-1).section = "今日焦点";
  assert.match(check(edition).errors.join("\n"), /正文段落缺少来源/);
  assert.match(check(edition).errors.join("\n"), /最后一条/);
});
test("新一期不能使用 legacy 或过期日期绕过时效检查", async () => {
  const report = await checkFile("content/editions/2026-08-30-evening.json", {forPublication:true, now});
  assert.ok(report.errors.length > 0);
  const edition = fixture();
  assert.match(validateEdition(edition, {forPublication:true, now:"2026-09-07T12:00:00Z"}).errors.join("\n"), /不是本次北京时间日期/);
});
test("图片按内容哈希去重，不按文件名凑数量", async () => {
  const temp = await mkdtemp(join(tmpdir(), "digest-images-"));
  try {
    await mkdir(join(temp, "images"));
    const image = "public/images/20260830/jilong-rescue-01.png";
    await cp(image, join(temp, "images/a.png")); await cp(image, join(temp, "images/b.png"));
    const edition = {status:"published", items:[{id:"a", images:[{path:"/images/a.png"}]}, {id:"b", images:[{path:"/images/b.png"}]}]};
    const report = await validateAssets(edition, temp);
    assert.equal(report.counts.uniqueImages, 1);
    assert.equal(report.counts.coverage, 0.5);
    assert.match(report.errors.join("\n"), /未达到/);
    await writeFile(join(temp, "images/b.png"), "not an image");
    assert.match((await validateAssets(edition, temp)).errors.join("\n"), /格式损坏/);
    edition.items[0].images[0].path = "/images/../../private.png";
    assert.match((await validateAssets(edition, temp)).errors.join("\n"), /不安全/);
    assert.ok(imageSize(await readFile(image))[0] > 160);
  } finally { await rm(temp, {recursive:true, force:true}); }
});
test("损坏或非法阅读设置不会阻断页面", () => {
  for (const raw of ["{bad", "null", "42", '{"theme":"red","focusMode":"false"}']) assert.deepEqual(parsePreferences(raw), {theme:"light", fontSize:"normal", readingWidth:"normal", focusMode:false});
  assert.equal(parsePreferences('{"theme":"dark"}').theme, "dark");
});
