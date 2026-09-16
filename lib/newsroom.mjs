import { createHash } from "node:crypto";
import { readFile, realpath } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { beijingDate, canonicalUrl, contentImages, isInstant } from "./editorial.mjs";

export const reviewDimensions = ["voices", "images", "agenda", "reading"];
const digest = value => createHash("sha256").update(value).digest("hex");
const nonempty = value => typeof value === "string" && value.trim().length > 0;
const webUrl = value => { try { canonicalUrl(value); return true; } catch { return false; } };
const canonicalJSON = value => JSON.stringify(value, function(key, entry) {
  return entry && typeof entry === "object" && !Array.isArray(entry)
    ? Object.fromEntries(Object.keys(entry).sort().map(k => [k, entry[k]])) : entry;
});

// Bind acceptance to the actual product, including local image bytes and renderer.
// Publishing adds dimensions/status, neither changes editorial meaning.
export async function productFingerprint(edition, root = resolve("."), includeRenderer = true) {
  const copy = structuredClone(edition);
  delete copy.editorialReview;
  delete copy.status;
  const assets = {};
  const publicRoot = await realpath(resolve(root, "public"));
  for (const item of copy.items ?? []) for (const img of contentImages(item)) {
    delete img.width; delete img.height;
    if (/^https?:/.test(img.path)) assets[img.path] = "remote: requires visible browser review";
    else {
      const path = await realpath(resolve(publicRoot, "." + img.path));
      if (!path.startsWith(publicRoot + sep)) throw new Error("图片越出 public 目录");
      assets[img.path] = digest(await readFile(path));
    }
  }
  const renderer = {};
  for (const path of includeRenderer ? ["app/digest.tsx", "app/globals.css", "lib/types.ts", "lib/site.ts"] : []) {
    renderer[path] = digest(await readFile(resolve(root, path)));
  }
  return digest(canonicalJSON({edition:copy, assets, renderer}));
}

export function newsroomReport(edition, {now = new Date().toISOString()} = {}) {
  const errors = [], warnings = [], next = [];
  const need = (ok, message) => { if (!ok) errors.push(message); };
  const desk = edition.newsroom;
  if (!desk) return {errors:["缺少选题工作台：先导入发现记录，再建立议题和材料任务"], warnings, next};
  need(desk.version === 1, "未知工作台版本");
  const observations = new Map(), candidates = new Map(), topics = new Set(), assigned = new Set();
  for (const observation of desk.observations ?? []) {
    need(nonempty(observation.id) && !observations.has(observation.id), "发现记录 ID 缺失或重复");
    observations.set(observation.id, observation);
    need(webUrl(observation.url) && nonempty(observation.platform) && nonempty(observation.evidence), "发现记录缺少入口、平台或实际观察");
    need(["feed", "ranking", "community", "topic-search"].includes(observation.kind) && ["read", "restricted", "failed"].includes(observation.status), "发现记录类型或读取状态无效");
    need(isInstant(observation.observedAt) && Date.parse(observation.observedAt) <= Date.parse(now) && beijingDate(observation.observedAt) === edition.editionDate, "发现记录不是本次北京时间当天观测");
  }
  need([...observations.values()].some(o => o.status === "read" && ["ranking", "community", "topic-search"].includes(o.kind)), "只有订阅源：尚未完成当天热点/社区/主题发现");
  for (const candidate of desk.candidates ?? []) {
    need(candidate.id && !candidates.has(candidate.id) && webUrl(candidate.url) && nonempty(candidate.title), "候选缺少唯一 ID、标题或原文入口");
    candidates.set(candidate.id, candidate);
    need(candidate.observationIds?.length && candidate.observationIds.every(id => observations.has(id)), "候选没有可追溯发现记录：" + candidate.id);
  }
  const sources = new Map((edition.sources ?? []).map(s => [s.id, s]));
  const items = new Map((edition.items ?? []).map(i => [i.id, i]));
  need(desk.topics?.length, "尚未形成议题清单，不能直接按文章填版");
  for (const topic of desk.topics ?? []) {
    const label = topic.title || topic.id;
    need(topic.id && !topics.has(topic.id) && nonempty(topic.title) && nonempty(topic.reason), "议题缺少唯一标识、标题或选择理由");
    topics.add(topic.id);
    need(["focus", "support", "reserve"].includes(topic.priority), "议题优先级无效：" + label);
    need(["selected", "held", "dropped"].includes(topic.decision), "议题尚未作出选择：" + label);
    need(topic.observationIds?.length && topic.observationIds.every(id => observations.get(id)?.status === "read"), "议题未关联实际读到的发现记录：" + label);
    need(Array.isArray(topic.candidateIds) && topic.candidateIds.every(id => candidates.has(id)) && (topic.decision !== "selected" || topic.candidateIds.length), "议题未关联候选原文：" + label);
    if (topic.decision !== "selected") {
      need(nonempty(topic.disposition), "暂缓/舍弃议题须交代具体原因：" + label);
      need(!topic.itemIds?.length, "未选议题不得关联已编排条目：" + label);
      if (topic.priority === "focus" && topic.decision === "held") errors.push("重点议题材料仍缺失：" + label);
      next.push(`${label}：${topic.disposition || "补充取舍说明"}`);
      continue;
    }
    need(topic.itemIds?.length && topic.itemIds.every(id => items.has(id)), "入选议题没有成品条目：" + label);
    for (const id of topic.itemIds ?? []) {
      need(!assigned.has(id), "同一条目分配给多个议题：" + id);
      assigned.add(id);
    }
    need(topic.materials?.length, "入选议题没有原始材料任务：" + label);
    const usedSources = new Set((topic.itemIds ?? []).flatMap(id => items.get(id)?.sourceIds ?? []));
    const materialSources = new Set();
    for (const material of topic.materials ?? []) {
      need(nonempty(material.purpose) && ["report", "voice", "image", "feature", "light"].includes(material.kind), "材料任务缺少具体用途/类型：" + label);
      if (material.status !== "ready") {
        need(material.status === "missing" && nonempty(material.nextAction), "缺料必须记录下一步：" + label);
        errors.push(`${label}：缺少${material.purpose}`);
        next.push(material.nextAction || material.purpose);
        continue;
      }
      need(material.sourceIds?.length && material.sourceIds.every(id => sources.has(id) && usedSources.has(id)), "材料未对应实际使用的原文：" + label);
      for (const id of material.sourceIds ?? []) {
        materialSources.add(id);
        need((topic.candidateIds ?? []).some(cid => {
          try { return canonicalUrl(candidates.get(cid)?.url) === canonicalUrl(sources.get(id)?.url); } catch { return false; }
        }), "原文没有进入该议题候选池：" + id);
      }
      const topicItems = (topic.itemIds ?? []).map(id => items.get(id)).filter(Boolean);
      if (material.kind === "voice") need(topicItems.some(i => (i.blocks ?? []).some(b => b.kind === "quote" && material.sourceIds?.includes(b.sourceId))), "声音任务未进入成品：" + label);
      if (material.kind === "image") need(topicItems.some(i => contentImages(i).some(img => material.imagePaths?.includes(img.path))), "图片任务未进入成品：" + label);
    }
    for (const id of usedSources) need(materialSources.has(id), "成品来源未经过材料选择：" + id);
  }
  for (const id of items.keys()) need(assigned.has(id), "条目绕过议题选择：" + id);
  const blocks = (edition.items ?? []).flatMap(i => i.blocks ?? []);
  const voices = blocks.filter(b => b.kind === "quote");
  const paraphrases = voices.filter(v => !v.presentation || v.presentation === "paraphrase").length;
  const publishers = {};
  for (const item of items.values()) {
    const publisher = sources.get(item.freshnessSourceId)?.publisher || "未知";
    publishers[publisher] = (publishers[publisher] || 0) + 1;
    if (item.details?.some(t => /值得留下的|这组采访的余味|本条|本期收录|这篇.{0,8}值得/.test(t))) warnings.push("检查是否把选材理由写进正文：" + item.id);
  }
  if (paraphrases && paraphrases === voices.length) warnings.push("所有声音都是编辑转述，需复核是否抹平语气");
  return {errors, warnings, next, inventory:{topics:topics.size, entries:items.size, voiceBlocks:voices.length, paraphrases, publishers}};
}

export function validateAcceptance(edition, fingerprint, {now = new Date().toISOString(), archival = false} = {}) {
  const errors = [], review = edition.editorialReview?.acceptance;
  const need = (ok, text) => { if (!ok) errors.push(text); };
  if (!review) return ["缺少与本版成品绑定的阅读验收，不能只填写 approved"];
  need((archival ? review.contentFingerprint : review.fingerprint) === fingerprint, "成品已改变：选题、正文、配图或渲染器修改后必须重新阅读验收");
  need(review.decision === "approved" && nonempty(review.reviewer), "阅读验收未批准或未记录执行者");
  need(isInstant(review.reviewedAt) && Date.parse(review.reviewedAt) <= Date.parse(now) && Date.parse(review.reviewedAt) >= Date.parse(edition.generatedAt), "阅读验收时刻无效或早于成品生成");
  const items = new Set((edition.items ?? []).map(i => i.id));
  for (const dimension of reviewDimensions) {
    const assessment = review.assessments?.[dimension];
    need(assessment?.verdict === "pass" && nonempty(assessment.evidence) && assessment.itemIds?.length && assessment.itemIds.every(id => items.has(id)), "编辑验收缺少具体成品证据或仍需返工：" + dimension);
  }
  for (const viewport of ["desktop", "mobile"]) {
    const check = review.screens?.find(s => s.viewport === viewport);
    need(check?.verdict === "pass" && nonempty(check.evidence) && check.itemIds?.length && check.itemIds.every(id => items.has(id)), "尚未完成实际页面检查：" + viewport);
  }
  need(Array.isArray(review.findings) && review.findings.every(f => f.status === "resolved" && nonempty(f.problem) && nonempty(f.resolution)), "仍有未解决的成品问题");
  const focusOmissions = (edition.newsroom?.topics ?? []).filter(t => t.priority === "focus" && t.decision !== "selected");
  for (const topic of focusOmissions) need(review.omissions?.some(o => o.topicId === topic.id && nonempty(o.reason)), "验收遗漏未入选的重点议题：" + topic.title);
  return errors;
}
