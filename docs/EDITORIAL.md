# 编辑规约与数据契约

## 每期先做什么

先读系统时刻，明确北京时间日期和早/晚版截稿。先从可读热榜、新闻门户和公开社区发现主题，再按主题搜索当事人、现场、专业解释、质疑、利益相关者体验和轻松表达。RSS 只是补充；不能把固定三个订阅源当作完成综合发现。每个平台都记录“已观察/受限/未观察”，不伪造成功覆盖。

不设总条数或账号配额。优先级参考平台内排名、两次真实观测的上升、持续时间、跨平台共振与内容增量。高质量原创长文走独立阅读池，不因热度低而排除。国内公共事务、经济、国际、科技文化、人物自然和轻读要有合理跨度，但不拿过时稿件强行填栏目。

## 候选导入

浏览器观察可存为 JSON，顶层有 candidates 与 channelReports。候选最少包括 url、title、platform、publisher、timeEvidence、observedAt、excerpt、access: public；有精确原文时间再加 publishedAt（带时区）。只有日期且明确是北京时间时，可填 publishedDate 和 timezone: Asia/Shanghai；必须在截稿前已观察到，不能据此推定当天几点首发。不要写登录 Cookie、请求头或私密内容。

discovery 可记录榜单 url、kind: ranking、rank 和 evidence；没有可见数值就不填 rank。channelReports 记录 platform、url、status、reason 与 observedAt。单独导入不会自动采集其他平台。storyHint 是编辑给出的同题标识，不是判定声音相同的理由。

## 正式期号字段

具体字段见 lib/types.ts。保留 title/details/section/format/source/sourceType/time/href；新加的来源结构不是要求逐条找官方背书，只是保留“谁在什么原文中说了什么”的可追溯记录。

| 对象 | 必填/关键字段 | 用途 |
| --- | --- | --- |
| 期号 | id、editionDate、status、cutoffAt、generatedAt、headline | 自然日、截稿时刻与历史版本 |
| sources | id、url、platform、publisher、publishedAt 或 publishedDate、observedAt、timeEvidence、excerpt、access: public、evidenceKind: page | 原始页面可见时间和短证据 |
| 更新来源 | updatedAt、updateNote、updateEvidence | 当天明确的新进展；不能只用模板更新时间 |
| items | sourceIds、freshnessSourceId、selectionReason、evidence | 来源引用、该条时效依据、独立信息增量、正文段落对应原文 |
| evidence | detailIndex、sourceIds | 每个 details 段落对应哪些原文 |
| voices | sourceId、role、text、angle | 发布者原意和独立角度；来源必须有 author |
| stories | id、multiVoice、discoverySignals | 合并事件，不合并不同立场 |
| images | path、alt、caption、sourceUrl、originalUrl、kind、relevance | 配图、原始出处、画面语境与关联理由 |
| editorialReview | reviewedAt、imageRelevance、voiceDiversity、readingOrder、coverage | 阅读原文/看图后的具体复核说明，不写空泛“全部通过” |

time 必须含来源的北京时间 YYYY-MM-DD。日期检查不相信手写 time，而从 freshnessSourceId 指向的原始时间计算；至少 70% 为本期当天。旧稿只能作背景、回顾、长期阅读，labels 和 time 均明确标注，总量不超过 30%。当天更新需在条目 updateNote 和正文写出具体新进展，并在 time 中写出更新时间。未知日期不算当天。

同一原文不能用多个 ID 或追踪参数伪造多声部。多声部通常 3—8 条，没有上限；只有两条时，story.voiceSelectionNote 解释信息量和取舍。需要两个平台的热度发现记录，或单平台持续高热的实际依据。social 必须有可追溯 voices。互动量按来源中的 engagement 保存 kind/value/observedAt/evidence；不可见则省略。

图片优先原始报道/原帖的现场与关键画面，每张写明来源、替代文字和关联说明；background 的图注须含“资料图”。禁止喷嚏网搬图、全文截图和无关配图。原始来源可访问不等于具有任意转载权；只使用适当授权/许可或符合具体引用语境的必要画面。图片入 public/images，检查记录由源页与素材原始地址组成；正文来源和图片出处不要混淆。

图片检查按文件内容去重。常规目标 16—20 张，或独立图片覆盖约 70% 条目；同一图重复出现不增加独立数量，数据卡片不算图片。不够就继续找相关原图或减少条目；日期优先，绝不拿旧稿补图。

## 编排和出刊前复核

数组顺序就是长卷顺序，section 只是标签。brief 一段，visual 先看图，feature 保留背景和 recommendation 原文看点，social 保留谁说了什么。长短、图文、观点、深读自然交错；同题声音可以连续形成小组，不能把四个栏目机械分成四块。不同声音有独立信息量，不给所有立场写一个统一结论。

标题来自当天最有记忆点的现场/图像/观点，不能脱离原文夸张。最后一条是人物、自然与轻读。比较上一期，重复故事只有明确新进展或新角度才重收，写清 selectionReason。阅读全文与图像后再填写 editorialReview，不把自动检查当作编辑判断的替代品。

执行 npm test。发布日期、图片、来源不合格时，修复真实内容，不放宽检查。充分搜索后仍不够 70% 当天内容，视为采集失败，不入库、不推送。通过检查后仅发布 GitHub main，确认工作流成功、线上期号与提交一致、远端 main 指向本轮提交。
