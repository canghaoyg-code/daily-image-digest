import test from "node:test";
import assert from "node:assert/strict";
import { readFile, mkdtemp, mkdir, writeFile, cp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { newsroomReport, productFingerprint, reviewDimensions, validateAcceptance } from "../lib/newsroom.mjs";
import { checkFile } from "../lib/content-files.mjs";

const now = "2026-09-16T15:30:00Z";
function fixture() {
  return {editionDate:"2026-09-16", generatedAt:now, status:"draft", sources:[{id:"source", url:"https://example.org/post/1", publisher:"发布者"}], items:[{id:"entry", sourceIds:["source"], freshnessSourceId:"source", blocks:[{kind:"quote", sourceId:"source", text:"原声", presentation:"excerpt"}]}], newsroom:{version:1, observations:[{id:"obs", platform:"公开社区", kind:"community", url:"https://example.org/hot", status:"read", observedAt:now, evidence:"实际读到的话题讨论"}], candidates:[{id:"candidate", url:"https://example.org/post/1", title:"原帖", observationIds:["obs"]}], topics:[{id:"topic", title:"重点议题", priority:"focus", decision:"selected", reason:"讨论的具体问题", observationIds:["obs"], candidateIds:["candidate"], itemIds:["entry"], materials:[{kind:"voice", status:"ready", purpose:"当事人的叙述", sourceIds:["source"]}]}]}};
}
function approval() {
  return {fingerprint:"product", contentFingerprint:"content", decision:"approved", reviewer:"测试编辑", reviewedAt:now, assessments:Object.fromEntries(reviewDimensions.map(key => [key, {verdict:"pass", itemIds:["entry"], evidence:"测试中的具体成品观察"}])), screens:["desktop", "mobile"].map(viewport => ({viewport, verdict:"pass", itemIds:["entry"], evidence:"测试页面观察"})), findings:[], omissions:[]};
}

test("采集、选题、原始材料与条目形成闭环", () => {
  const edition = fixture();
  assert.deepEqual(newsroomReport(edition, {now}).errors, []);
  edition.newsroom.topics[0].candidateIds = [];
  assert.match(newsroomReport(edition, {now}).errors.join("\n"), /未关联候选原文|没有进入该议题候选池/);
  delete edition.newsroom;
  assert.match(newsroomReport(edition, {now}).errors.join("\n"), /缺少选题工作台/);
});
test("只有 RSS、旧发现或来源绕过选择都不能发布", () => {
  const edition = fixture();
  edition.newsroom.observations[0].kind = "feed";
  edition.newsroom.observations[0].observedAt = "2026-09-15T12:00:00Z";
  edition.items[0].sourceIds.push("unselected");
  const errors = newsroomReport(edition, {now}).errors.join("\n");
  assert.match(errors, /只有订阅源/);
  assert.match(errors, /不是本次北京时间当天/);
  assert.match(errors, /未经过材料选择/);
});
test("重点缺料不能被隐去，舍弃重点须在验收再次交代", () => {
  const edition = fixture();
  const topic = edition.newsroom.topics[0];
  topic.materials[0] = {kind:"voice", status:"missing", purpose:"现场当事人", nextAction:"追读公开原帖"};
  assert.match(newsroomReport(edition, {now}).errors.join("\n"), /缺少现场当事人/);
  topic.decision = "held";
  topic.itemIds = [];
  topic.disposition = "原帖需要登录";
  assert.match(newsroomReport(edition, {now}).errors.join("\n"), /重点议题材料仍缺失/);
  topic.decision = "dropped";
  edition.editorialReview = {acceptance:approval()};
  assert.match(validateAcceptance(edition, "product", {now}).join("\n"), /遗漏未入选的重点议题/);
});
test("材料 ready 不能代替实际声音和图片，条目不能跳过选题", () => {
  const edition = fixture();
  edition.items[0].blocks = [];
  edition.items.push({id:"extra", sourceIds:[]});
  edition.newsroom.topics[0].materials.push({kind:"image", purpose:"现场图", status:"ready", sourceIds:["source"], imagePaths:["/images/absent.jpg"]});
  const errors = newsroomReport(edition, {now}).errors.join("\n");
  assert.match(errors, /声音任务未进入/);
  assert.match(errors, /图片任务未进入/);
  assert.match(errors, /条目绕过议题选择/);
});
test("批准、具体成品证据、移动端检查和问题解决缺一不可", () => {
  const edition = fixture();
  edition.editorialReview = {decision:"approved"};
  assert.match(validateAcceptance(edition, "product", {now}).join("\n"), /不能只填写 approved/);
  edition.editorialReview.acceptance = approval();
  assert.deepEqual(validateAcceptance(edition, "product", {now}), []);
  assert.match(validateAcceptance(edition, "other", {now}).join("\n"), /成品已改变/);
  edition.editorialReview.acceptance.assessments.images.itemIds = ["invented"];
  edition.editorialReview.acceptance.screens.pop();
  edition.editorialReview.acceptance.findings.push({problem:"图片看不清", status:"open"});
  const errors = validateAcceptance(edition, "product", {now}).join("\n");
  assert.match(errors, /images/); assert.match(errors, /mobile/); assert.match(errors, /未解决/);
});
test("内容、图片字节和渲染改变会使批准失效；发布补尺寸不会", async () => {
  const temp = await mkdtemp(join(tmpdir(), "digest-desk-"));
  try {
    for (const dir of ["public/images", "app", "lib"]) await mkdir(join(temp, dir), {recursive:true});
    for (const file of ["app/digest.tsx", "app/globals.css", "lib/types.ts", "lib/site.ts"]) await writeFile(join(temp, file), "fixture");
    await cp("public/images/20260830/jilong-rescue-01.png", join(temp, "public/images/photo.png"));
    const edition = fixture();
    edition.items[0].images = [{path:"/images/photo.png", alt:"照片"}];
    const product = await productFingerprint(edition, temp);
    const content = await productFingerprint(edition, temp, false);
    edition.status = "published";
    edition.items[0].images[0].width = 640;
    edition.editorialReview = {acceptance:approval()};
    assert.equal(await productFingerprint(edition, temp), product);
    await writeFile(join(temp, "app/globals.css"), "changed");
    assert.notEqual(await productFingerprint(edition, temp), product);
    assert.equal(await productFingerprint(edition, temp, false), content, "旧刊不因后来改样式而失效");
    edition.items[0].blocks[0].text = "changed";
    assert.notEqual(await productFingerprint(edition, temp, false), content);
    edition.items[0].blocks[0].text = "原声";
    await writeFile(join(temp, "public/images/photo.png"), "different bytes");
    assert.notEqual(await productFingerprint(edition, temp, false), content);
  } finally { await rm(temp, {recursive:true, force:true}); }
});
test("CI 新刊检查也拒绝没有工作台的期号，历史刊仍可构建", async () => {
  const path = "content/editions/2026-09-13-evening.json";
  const edition = JSON.parse(await readFile(path));
  const archive = await checkFile(path, {now});
  assert.deepEqual(archive.errors, []);
  const publishing = await checkFile(path, {forPublication:true, now:edition.generatedAt});
  assert.match(publishing.errors.join("\n"), /缺少选题工作台/);
});
