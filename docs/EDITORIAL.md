# 编辑规约：材料先行

每日图读是一份有出处的公共信息剪报。让读者直接看到值得关注的现场、表达和讨论；编辑负责选择、连接和必要解释，不把全网不同的声音重写成同一种摘要口吻。

对照样本包括用户指定的 [2026-09-16 图卦](https://www.dapenti.com/blog/more-new-v5.asp?name=xilei&id=195560) 与此前的 [2026-09-11 图卦](https://www.dapenti.com/blog/more-new-v5.asp?name=xilei&id=195464)。学习它们的材料密度、原声、篇幅主次和阅读余味，不复制文章或图片，也不沿用它们的日期口径、广告和打赏。

## 工作顺序与停止条件

1. **发现线索**：公开热榜、社区、新闻门户并行观察；独立文章和人物自然作品另行发现。RSS 是补充，不是全网采集的代称。
2. **追到材料**：对值得展开的线索追读当事人原帖、相关回应、现场图、创作者作品或关键图表。每份候选先留下原文短证据、发布时间、发布者、直接入口和图片语境，再写编辑正文。没有看到的内容不靠摘要补全。
3. **选材再编排**：判断每份材料能让读者多看到什么。保留独立视角，丢弃同义转述；一个主题可以包含多份材料，不先按栏目或格式填空。
4. **最少必要写作**：图片、短句、引语可以独立成条。可辨识的表达优先适量短引；译文注明译摘。转述用普通正文明确归属，不放进代表原话的引语块。不要解释笑话、替人物概括情绪，或逐条添加升华结尾。
5. **两道验收**：先检查真实性底线，再按 docs/ACCEPTANCE.md 实看整期。程序通过、格式齐全、无横向溢出，都不能代替编辑验收。材料不足就回到第2步；不得通过降低标准、删无图条目凑比例、补旧稿或重写框架掩盖缺口。

不设固定总条数、固定账号、固定领域配额或轮流出现的格式公式。允许连续国际短讯、同题多声部与明显较长的重点条目；篇幅取决于材料价值。整期应有公共事务、经济、国际、科技文化与人物自然的合理跨度，而不是把某一个入口易采集的内容误当成当天世界。

一张图是否必要，要问删去它会损失什么：现场、数据、表达、作品细节都算信息；仅仅说明“这是谁”“这是某公司”通常不够。优先使用原始、合法可引用的图像；帖子只截必要片段，不搬全文截图。配图在起草正文前实际查看，发布前再验证解码和显示，不等最后补图。

以下日期、归属、访问、版权和发布要求为不可放宽的底线。正文保持阅读性，采集失败、审核过程和验收记录放在草稿工作记录或独立报告中；来源与理解材料必需的语境仍在条目附近显示。

## 每期先做什么

可执行步骤见 [NEWSROOM.md](NEWSROOM.md)。候选必须通过议题和材料任务关联到条目；status 检查缺口，review/seal 记录实际成品验收。不能先拼文章、再补一张空泛选题表来声称已完成流程。候选池和发现渠道随当期调整，程序不按固定账号或总条数自动填版。

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
| voices | sourceId、role、text、angle；可选 speaker、presentation | 发布者原意和独立角度；来源必须有 author，受访者不冒充记者 |
| stories | id、multiVoice、discoverySignals | 合并事件，不合并不同立场 |
| images | path、alt、caption、sourceUrl、originalUrl、kind、relevance | 配图、原始出处、画面语境与关联理由 |
| editorialReview | decision、reviewedAt、imageRelevance、voiceDiversity、readingOrder、coverage | 默认 revise；实看原文、图片与页面后才可 approved，不写空泛“全部通过” |

time 必须含来源的北京时间 YYYY-MM-DD。日期检查不相信手写 time，而从 freshnessSourceId 指向的原始时间计算；至少 70% 为本期当天。旧稿只能作背景、回顾、长期阅读，labels 和 time 均明确标注，总量不超过 30%。当天更新需在条目 updateNote 和正文写出具体新进展，并在 time 中写出更新时间。未知日期不算当天。

同一原文不能用多个 ID 或追踪参数伪造多声部。多声部通常 3—8 条，没有上限；只有两条时，story.voiceSelectionNote 解释信息量和取舍。需要两个平台的热度发现记录，或单平台持续高热的实际依据。social 必须有可追溯 voices。互动量按来源中的 engagement 保存 kind/value/observedAt/evidence；不可见则省略。

图片优先原始报道/原帖的现场与关键画面，每张写明来源、替代文字和关联说明；background 的图注须含“资料图”。禁止喷嚏网搬图、全文截图和无关配图。原始来源可访问不等于具有任意转载权；只使用适当授权/许可或符合具体引用语境的必要画面。图片入 public/images，检查记录由源页与素材原始地址组成；正文来源和图片出处不要混淆。

图片检查按文件内容去重。常规目标 16—20 张，或独立图片覆盖约 70% 条目；同一图重复出现不增加独立数量，数据卡片不算图片。不够就继续找相关原图；不能仅为提高带图比例删除有独立价值的无图条目。日期优先，绝不拿旧稿补图。

转载页显示今天，不等于原始报道今天更新。沿页面标明的来源找首发；如首发是昨天且没有今天的新采访或进展，按背景收录或放弃。今天刊发的回访可以入选，但必须写明事件发生日与本次采访/更新日，不能把回顾的事件写成今天刚发生。

同篇报道的不同受访者共用一个 sources 记录，quote/voices 的 speaker 写实际发言人，来源 author 保留记者；不能将同一报道复制成多个独立来源。presentation 使用 excerpt（原文短引）、translation（忠实译摘）或 paraphrase（转述，默认），禁止用引号把编辑改写伪装成原话。多声部独立原帖仍须分别记录原文入口与时间。

## 编排和出刊前复核

数组顺序就是长卷顺序，section 只是小标签，不自动分组。blocks 是实际阅读顺序，不让格式名称重排材料。brief 一段，visual 以图为主体，feature 保留必要背景与原文看点，social 展示可追溯的不同表达。不要强行给图片、短句补满三段背景；不要为所有条目起抽象评论式标题。标题可直接点出人物、事情或原文短句。同题声音可以连续形成小组，不给不同立场写统一结论。

标题来自当天最有记忆点的现场/图像/观点，不能脱离原文夸张。最后一条是人物、自然与轻读。比较上一期，重复故事只有明确新进展或新角度才重收，写清 selectionReason。阅读全文与图像后再填写 editorialReview，不把自动检查当作编辑判断的替代品。

执行 npm test。发布日期、图片、来源不合格时，修复真实内容，不放宽检查。充分搜索后仍不够 70% 当天内容，视为采集失败，不入库、不推送。通过检查后仅发布 GitHub main，确认工作流成功、线上期号与提交一致、远端 main 指向本轮提交。
