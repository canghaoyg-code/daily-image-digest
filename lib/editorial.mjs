export const sections = ["今日焦点", "世界与新知", "值得细读", "人物、自然与轻读"];
export const formats = ["brief", "standard", "feature", "visual", "social"];
export const roles = ["official", "eyewitness", "expert", "stakeholder", "critic", "ordinary-user", "humor"];
export const editionOrder = id => id.replace(/morning$/, "0").replace(/evening$/, "1");

export function beijingDate(value) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(value));
}

export function isInstant(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value) && isDay(value.slice(0, 10)) && Number.isFinite(Date.parse(value));
}

export function isDay(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}

export function canonicalUrl(value) {
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) throw new Error("来源必须为无凭据的 HTTP(S) 地址");
  url.hash = "";
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_|fbclid$|gclid$)/i.test(key)) url.searchParams.delete(key);
  }
  url.searchParams.sort();
  return url.href;
}

export function directUrl(value) {
  try {
    const url = new URL(canonicalUrl(value));
    return !/(^|\/)search(\/|$)|archives-du-monde|\/hashtag\/|\/topics?\//i.test(url.pathname) &&
      !url.hostname.startsWith("s.weibo.") && !url.searchParams.has("q");
  } catch { return false; }
}

export function itemImages(item) {
  return item.images ?? (item.image ? [{ path: item.image, alt: item.imageAlt, caption: item.imageCaption, kind: "background" }] : []);
}

export function contentImages(item) {
  return [...itemImages(item), ...(item.blocks ?? []).filter(block => block.kind === "image").map(block => block.image)];
}

// A timestamp in a feed is discovery metadata, not automatically publication evidence.
export function sourceDay(source) {
  if (isInstant(source?.updatedAt) && source.updateNote && source.updateEvidence) return beijingDate(source.updatedAt);
  if (isInstant(source?.publishedAt)) return beijingDate(source.publishedAt);
  if (isDay(source?.publishedDate) && source.timezone === "Asia/Shanghai") return source.publishedDate;
  return null;
}

export function validateEdition(edition, { forPublication = false, now = new Date().toISOString() } = {}) {
  const errors = [], warnings = [];
  const need = (condition, message) => { if (!condition) errors.push(message); };
  need(edition.schemaVersion === 1, "未知内容格式版本");
  need(isDay(edition.editionDate), "期号必须为有效 YYYY-MM-DD");
  need(typeof edition.id === "string" && /^\d{4}-\d{2}-\d{2}-(morning|evening)$/.test(edition.id) && edition.id.startsWith(edition.editionDate), "期号 ID 与日期不符");
  need(["legacy", "draft", "published"].includes(edition.status), "无效期号状态");
  need(Boolean(edition.headline), "缺少主标题");
  const items = Array.isArray(edition.items) ? edition.items : [];
  need(items.length > 0, "没有编辑条目");
  const legacy = edition.status === "legacy";
  if (forPublication) {
    need(!legacy && edition.status === "published", "历史版/草稿不可作为新一期发布");
    need(edition.editionDate === beijingDate(now), "新一期日期不是本次北京时间日期");
  }
  if (!legacy) {
    need(isInstant(edition.generatedAt) && isInstant(edition.cutoffAt), "缺少带时区的生成/截稿时刻");
    if (isInstant(edition.cutoffAt)) {
      need(beijingDate(edition.cutoffAt) === edition.editionDate, "截稿日与期号日期不符");
      need(Date.parse(edition.cutoffAt) <= Date.parse(now), "截稿时刻晚于执行时刻");
      const hour = Number(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Shanghai", hour: "2-digit", hourCycle: "h23" }).format(new Date(edition.cutoffAt)));
      const boundary = edition.editionDate + (edition.id.endsWith("morning") ? "T07:00:00+08:00" : "T20:00:00+08:00");
      need(hour >= 0 && Date.parse(edition.cutoffAt) <= Date.parse(boundary), "超过本期 07:00/20:00 截稿时刻");
    }
    need(Date.parse(edition.generatedAt) >= Date.parse(edition.cutoffAt) && Date.parse(edition.generatedAt) <= Date.parse(now), "生成时刻必须在截稿与执行时刻之间");
  } else warnings.push("历史期仅做结构检查；原始日期、图片关联和互动数据未重新核实");
  if (!legacy) need(!edition.displayUpdatedAt, "新期更新显示由结构化时刻生成，不接受手写更新时间");
  const sources = new Map(), sourceUrls = new Set();
  for (const source of edition.sources ?? []) {
    need(source.id && !sources.has(source.id), "来源 ID 重复或缺失");
    sources.set(source.id, source);
    need(directUrl(source.url), "来源必须指向直接原文：" + source.id);
    if (directUrl(source.url)) {
      const url = canonicalUrl(source.url);
      need(!sourceUrls.has(url), "同一原文不得伪装成多个来源：" + source.id);
      sourceUrls.add(url);
    }
    need(source.platform && source.publisher && source.excerpt && source.timeEvidence, "来源缺少发布者、摘录或页面可见时间证据：" + source.id);
    need(source.evidenceKind === "page", "RSS/搜索日期只能用于发现，需读取原文可见时间：" + source.id);
    need(isInstant(source.observedAt) && Date.parse(source.observedAt) <= Date.parse(now), "来源缺少有效采集时刻：" + source.id);
    need(source.access === "public", "来源不是公开内容：" + source.id);
    if (source.publishedAt) need(isInstant(source.publishedAt), "无效发布时间：" + source.id);
    if (source.publishedDate) {
      need(isDay(source.publishedDate) && source.timezone === "Asia/Shanghai", "仅日期来源需明确北京时间语境：" + source.id);
      if (!source.publishedAt) need(Date.parse(source.observedAt) <= Date.parse(edition.cutoffAt), "仅日期原文须在截稿前已读到，不能推定具体首发时刻：" + source.id);
    }
    if (source.updatedAt) need(isInstant(source.updatedAt) && source.updateNote && source.updateEvidence, "更新缺少新进展和时间证据：" + source.id);
    const latest = source.updatedAt || source.publishedAt;
    if (latest && isInstant(latest)) {
      need(Date.parse(latest) <= Date.parse(edition.cutoffAt), "原文晚于本期截稿：" + source.id);
      need(Date.parse(latest) <= Date.parse(source.observedAt), "来源发布时间晚于采集：" + source.id);
    }
    if (source.updatedAt && source.publishedAt) need(Date.parse(source.updatedAt) >= Date.parse(source.publishedAt), "更新早于首发：" + source.id);
    for (const metric of source.engagement ?? []) {
      need(["likes", "shares", "comments", "views", "votes"].includes(metric.kind) && Number.isFinite(metric.value) && metric.value >= 0 && isInstant(metric.observedAt) && Date.parse(metric.observedAt) <= Date.parse(now) && metric.evidence, "互动量缺少数值、采集时刻或可见证据：" + source.id);
    }
  }
  const ids = new Set(), titles = new Set(), primaryLinks = new Set(), groups = new Map();
  const counts = { today: 0, yesterday: 0, older: 0, unknown: 0, entries: items.length, imagePlacements: 0 };
  const yesterday = isDay(edition.editionDate) ? new Date(Date.parse(edition.editionDate + "T00:00:00Z") - 86400000).toISOString().slice(0, 10) : "";
  for (const item of items) {
    need(/^[a-z0-9][a-z0-9-]*$/.test(item.id ?? "") && !ids.has(item.id), "条目 ID 重复或不是安全锚点"); ids.add(item.id);
    need(item.title && !titles.has(item.title), "标题重复或缺失"); titles.add(item.title);
    need(sections.includes(item.section) && formats.includes(item.format), "标签/版式无效：" + item.id);
    need(item.source && item.sourceType && item.time && item.href && item.details?.length, "条目缺少必填字段：" + item.id);
    if (!legacy) {
      need(directUrl(item.href), "条目未链接直接原文：" + item.id);
      const references = item.sourceIds ?? [];
      need(references.length > 0 && references.every(id => sources.has(id)), "条目缺少有效来源引用：" + item.id);
      need(references.some(id => sources.get(id)?.url === item.href), "主链接没有来源记录：" + item.id);
      const proofs = item.evidence ?? [];
      for (let i = 0; i < (item.details ?? []).length; i++) {
        need(proofs.some(p => p.detailIndex === i && p.sourceIds?.length && p.sourceIds.every(id => references.includes(id))), "正文段落缺少来源映射：" + item.id + "/" + i);
      }
      need(Array.isArray(item.blocks) && item.blocks.length > 0, "新条目必须由可自由编排的 blocks 组成：" + item.id);
      for (const block of item.blocks ?? []) {
        need(["text", "image", "quote", "stat"].includes(block.kind), "内容块类型无效：" + item.id);
        if (block.kind === "text" || block.kind === "stat") need(block.text || block.value, "内容块缺少正文：" + item.id);
        if (block.kind === "quote") need(block.text && sources.has(block.sourceId) && roles.includes(block.role), "原话块缺少原文来源或角色：" + item.id);
        if (block.kind === "image") need(block.image?.path && block.image.alt && block.image.caption, "图片块缺少图片说明：" + item.id);
        for (const id of block.sourceIds ?? []) need(references.includes(id), "内容块引用了条目外来源：" + item.id);
      }
      const fresh = sources.get(item.freshnessSourceId);
      need(references.includes(item.freshnessSourceId) && item.selectionReason, "缺少时效来源/独立信息增量说明：" + item.id);
      const day = sourceDay(fresh);
      if (day === edition.editionDate) counts.today++;
      else if (day === yesterday) counts.yesterday++;
      else if (day && day < edition.editionDate) counts.older++;
      else counts.unknown++;
      need(day && day <= edition.editionDate, "发布时间不明或来自未来：" + item.id);
      need(day && item.time.includes(day), "展示时间必须含来源的北京时间日期：" + item.id);
      if (day && day !== edition.editionDate) need((item.labels ?? []).some(x => ["背景", "回顾", "长期阅读"].includes(x)) && /背景|回顾|长期阅读/.test(item.time), "旧内容缺少明确背景标记：" + item.id);
      if (isInstant(fresh?.updatedAt)) {
        need(item.updateNote && item.details.some(t => t.includes(item.updateNote)), "更新条目正文未说明新进展：" + item.id);
        const clock = new Intl.DateTimeFormat("en-GB", {timeZone:"Asia/Shanghai", hour:"2-digit", minute:"2-digit", hourCycle:"h23"}).format(new Date(fresh.updatedAt));
        need(item.time.includes(clock), "更新条目须展示北京时间的具体更新时分：" + item.id);
      }
      for (const related of item.relatedSources ?? []) need(related.label && directUrl(related.href), "同题阅读须为可辨认的直接原文：" + item.id);
      for (const voice of item.voices ?? []) {
        const source = sources.get(voice.sourceId);
        need(source?.author && references.includes(voice.sourceId) && roles.includes(voice.role) && voice.text && voice.angle, "声音缺少账号、原文或独立角度：" + item.id);
      }
      if (item.format === "social") need(item.voices?.length, "social 缺少可追溯发言：" + item.id);
      if (item.format === "brief") need(item.details.length === 1, "短讯只保留一个正文段落：" + item.id);
      if (item.format === "feature") need(Boolean(item.recommendation), "深读缺少原文看点：" + item.id);
      let link;
      try { link = canonicalUrl(item.href); } catch { link = item.href; }
      if (primaryLinks.has(link)) warnings.push("同一原文重复使用，需检查独立信息增量：" + item.id);
      primaryLinks.add(link);
    } else counts.unknown++;
    const images = contentImages(item);
    counts.imagePlacements += images.length;
    for (const img of images) {
        need(typeof img.path === "string" && ((/^\/images\/[a-zA-Z0-9/_.-]+$/.test(img.path) && !img.path.includes("..")) || /^https?:\/\/[^\s]+$/.test(img.path)) && img.alt && img.caption, "图片缺少安全路径、替代文本或图注：" + item.id);
      if (!legacy) {
        need(directUrl(img.sourceUrl) && directUrl(img.originalUrl) && ["original", "background", "cover", "screenshot"].includes(img.kind) && img.relevance, "图片缺少原始来源、类型或关联说明：" + item.id);
        need(img.kind !== "background" || /资料图/.test(img.caption), "资料图必须明示：" + item.id);
        need(![img.sourceUrl, img.originalUrl].some(url => { try { return /(^|\.)dapenti\.com$/.test(new URL(url).hostname); } catch { return false; } }), "不得使用喷嚏网搬运图片：" + item.id);
      }
    }
    if (item.storyId) {
      const group = groups.get(item.storyId) ?? []; group.push(item); groups.set(item.storyId, group);
    }
  }
  if (!legacy) {
    need(counts.today / items.length >= 0.7, "当天内容不足 70%");
    const review = edition.editorialReview;
    need(review?.imageRelevance && review?.voiceDiversity && review?.readingOrder && review?.coverage && isInstant(review?.reviewedAt) && Date.parse(review.reviewedAt) <= Date.parse(now), "缺少人工/编辑代理的配图关联、观点增量、编排和领域覆盖复核记录");
    for (const story of edition.stories ?? []) {
      const group = groups.get(story.id) ?? [];
      need(group.length > 0, "故事没有编辑条目：" + story.id);
      if (story.multiVoice) {
        const voices = group.flatMap(i => i.voices ?? []);
        const minimum = story.voiceSelectionNote ? 2 : 3;
        need(new Set(voices.map(v => v.sourceId)).size >= minimum && new Set(voices.map(v => v.angle)).size >= minimum, "多声部热点缺少可追溯且不同角度的发言（通常至少三条；两条需说明信息量与取舍）：" + story.id);
        const signals = story.discoverySignals ?? [];
        need(signals.length >= 1 && signals.every(s => s.platform && (() => { try { return !!canonicalUrl(s.url); } catch { return false; } })() && isInstant(s.observedAt) && Date.parse(s.observedAt) <= Date.parse(edition.generatedAt) && s.evidence), "多声部缺少热度发现记录：" + story.id);
        need(new Set(signals.map(s => s.platform)).size >= 2 || story.sustainedHeatEvidence, "缺少跨平台共振或单平台持续高热依据：" + story.id);
      }
    }
    for (const id of groups.keys()) need((edition.stories ?? []).some(s => s.id === id), "缺少故事记录：" + id);
  }
  need(items.at(-1)?.section === "人物、自然与轻读", "最后一条必须为轻读");
  return { errors, warnings, counts };
}
