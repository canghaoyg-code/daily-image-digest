# 选题工作台：先补材料，再写成品

这是现有 sources / stories / items 前的一层编辑工作记录，不是另一个内容库，也不会出现在读者正文。保存于草稿的 `newsroom`，随合格期号归档。只保存公开发现与必要摘录，不保存账号、密码、Cookie、令牌或请求头。

## 一次出刊

1. `collect.py` 采集公开订阅候选；通过浏览器观察当期热榜与社区，并用 `--import` 导入原文。热榜没有可读原帖时，也保存 channelReports 的观测证据与受限情况。
2. `newsroom.mjs import 草稿 采集目录` 导入线索和可追溯入口。只生成候选，不自动选择或写摘要。
3. 先编辑 `topics`，明确议题、优先级、需要的材料和取舍；再追读材料。重要议题读不到原帖就保留缺口，不让易采集的文章悄悄顶替。
4. `newsroom.mjs status 草稿` 列出尚缺原声/配图、跳过选题的条目、未处理的重点，并显示来源分布和转述情况。警告是复核提示，不是机械配额。
5. 原文和正式页面都读完后，`review 草稿` 生成默认返工的验收文件。逐项填写具体条目观察，桌面和手机分别检查；有问题先改内容，再重新生成验收。`seal 草稿 验收文件` 只接受本版、无待解决问题的记录。
6. `publish-edition.mjs` 再做完整日期、来源、图片与工作台检查。随后测试、提交到 GitHub main，并确认 Pages 部署和线上期号。

## 工作台字段

- `version: 1`。
- `observations`：`id/platform/url/kind/status/observedAt/evidence`。kind 为 feed、ranking、community、topic-search；status 为 read、restricted、failed。可见名次放 rank；观察在截稿后发生也如实记录，不能反推截稿前热度或原文时间。
- `candidates`：`id/url/title/observationIds`，另可保留 evidenceKind 和 timeEvidence。候选不是已核读原文；正式 sources 仍须原页日期与摘录。
- `topics`：`id/title/priority/reason/observationIds/candidateIds/decision/itemIds/materials`。priority 为 focus、support、reserve，由实际讨论和信息价值决定，不按平台预设。decision 为 selected、held、dropped。
- 每份 `materials` 有 `kind/purpose/status/sourceIds`；kind 为 report、voice、image、feature、light。ready 必须映射到真实使用的来源，voice 和 image 还要进入成品块；图片任务列 imagePaths。missing 写 nextAction，不能批准发布。
- 暂缓或舍弃议题写 `disposition`，itemIds 留空。尚未找到原文时 candidateIds 可以为空。focus + held 会阻止发布；若有真实编辑理由舍弃重点，验收 omissions 必须再说明，不可用“无法读取”掩盖整期公共议题缺失。

```json
{
  "id": "tea-labor",
  "title": "员工维权争议",
  "priority": "focus",
  "reason": "两个公开榜单出现；争议涉及本人叙述、门店回应与劳动体验",
  "observationIds": ["实际榜单观察ID"],
  "candidateIds": ["实际原帖候选ID"],
  "decision": "selected",
  "itemIds": ["实际条目ID"],
  "materials": [
    {"kind":"voice","purpose":"当事人的具体诉求","status":"ready","sourceIds":["实际来源ID"]},
    {"kind":"voice","purpose":"有独立增量的相关回应","status":"missing","nextAction":"追读公开回应原帖，不用同义转发代替"}
  ]
}
```

示例不可直接当作观测证据。没有实际跨平台记录就不能写“两平台出现”；多声部的热度、独立来源和不同角度继续由 stories 与 voices 检查。一个采访里三个受访者仍是一个原文来源。

## 验收绑定的边界

`editorialReview.acceptance` 记录 reviewer、reviewedAt、四项 assessments（voices/images/agenda/reading）、desktop/mobile screens、findings 和 omissions。每项结论须引用实际 itemIds 并写观察，不能仅填“全部通过”。待解决问题会阻止发布。

`fingerprint` 对应本版内容、本地图片和渲染代码；`contentFingerprint` 用于历史完整性。批准后改正文、原文、议题或本地图片，必须重新验收。发布器补充尺寸和状态不影响指纹。

指纹不是外部签名，也不证明来源正确或编辑有品味；不能防止有意伪造审核记录。远程图片只能绑定 URL，可能被源站替换，仍须实际浏览器加载审视。脚本负责让缺口和旧批准无法悄悄混过去，编辑负责材料价值与忠实性。
