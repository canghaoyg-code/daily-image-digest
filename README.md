# 每日图读

公开来源的连续图文长卷。唯一公开发布目标：[GitHub Pages](https://canghaoyg-code.github.io/daily-image-digest/)。不向旧 Sites 站点部署。

## 新流程

发现线索 → 追读原帖/现场/回应/图表 → 选择材料 → 最少必要写作与编排 → 真实性检查 → 正式页面阅读验收 → GitHub Pages 验证。

编辑规则见 [docs/EDITORIAL.md](docs/EDITORIAL.md)，成品验收见 [docs/ACCEPTANCE.md](docs/ACCEPTANCE.md)。规则与代码完成不等于出刊成功；必须交付经过实际阅读检查的完整一期。原始材料不足时回到采集，不通过增加字段、改CSS或补旧稿替代选材。

- `config/discovery.json` 是可替换的 RSS 起点，不是固定采集范围。社交平台、热榜和账号按当天话题变化。
- `scripts/collect.py` 读取公开 RSS/Atom，也接收浏览器读取的公开原文观测。输出保存在忽略提交的 `.cache/collection/`；不会直接写入正式内容。
- `content/editions/YYYY-MM-DD-morning|evening.json` 保存每一期。原文、图片与发言分别建模；`content/catalog.json` 指定最新期号和往期列表。
- `app/briefing-data.ts` 现在只是读取器，**不要再在这里手写每日数组**。
- 历史 2026-08-30 晚间版按原样归档，明确显示历史提示；哈希锁定，不把旧日期/旧图片当作已通过新规则。

## 运行环境

Node.js >=22.13、Python >=3.10，首次运行 `npm ci`。不新增抓取服务或收费 API；本地不保存登录凭据。

```sh
npm run collect
# 当期可另提供一个 feeds/discoveryPlatforms 配置：
python3 scripts/collect.py --sources .cache/today-sources.json
# 公开浏览器观测导入，可与 RSS 合并或单独导入：
python3 scripts/collect.py --import .cache/browser-observations.json
python3 scripts/collect.py --import-only --import .cache/browser-observations.json
npm run edition:new -- morning
# 编辑生成的 .cache/drafts/当日期号.json，并阅读 docs/EDITORIAL.md
node scripts/preview-edition.mjs .cache/drafts/当日期号.json
# 本机正式渲染器验收后再入库；预览不会修改最新期号
npm run edition:publish -- .cache/drafts/当日期号.json
npm test
```

`edition:publish` 只把合格草稿加入本地期号库；不执行网络发布。允许替换当天晚间版，不覆盖历史期。若检查失败，不修改最新期号。所有日期都以执行时的 Asia/Shanghai 自然日为准，早版截稿不晚于 07:00，晚版不晚于 20:00。编辑结束时更新 generatedAt 与 editorialReview.reviewedAt。

`npm test` 包含单元测试、Python 采集测试、内容/图片检查、lint、前端类型检查、生产构建、静态输出、所有本地链接及图片资源存在性检查。前端类型检查只覆盖 app/lib，保留的旧 Worker/D1 示例不是 GitHub Pages 运行部分。

## 候选与热度的边界

RSS 时间只标作 `evidenceKind: feed`，原文未读就不能发布。脚本不从 RSS 顺序猜热度，不把爬到的今天误当作发布时间，也不把网页统一更新时间误当成新闻新进展。

同一规范链接合并观测，不同链接保留。标题相同或明确的 storyHint 只生成归组建议，不删除独立发言。热榜记录至少包括平台、榜单地址、可见名次、观测时刻和证据；仅同一平台同一榜单的两次观测计算名次变化，不比较不同平台的点赞绝对值。持续时间需要多次真实观测，单次采集不得编造上升速度或持续热度。

报告明确区分来源失败、空结果与未观测平台。遇到登录、403/429、robots 禁止或挑战页就停止该入口，不绕过。脚本不自动追随重定向；先确认公开新地址再修改来源配置。网络受限时可通过获准的浏览器/搜索读取公开原文，再导入观测。**RSS 成功不代表社交平台已接通，更不代表全网覆盖。**

## 发布

只提交编辑后的期号、原始配图及代码；不提交 `.cache`、`_site`、`dist`、Cookie、凭据或密钥。没有内容变化不建空提交。

在确认远端后，将本轮提交推送到 `github` 远端的 `main`（仓库 canghaoyg-code/daily-image-digest）。Actions 检查本轮新增/修改期号的日期，运行完整测试，再构建与部署。部署后脚本比对线上 `release.json` 的提交号，并检查首页和每个永久页的期号。

```sh
node scripts/check-deployment.mjs <本轮完整提交SHA>
git ls-remote github refs/heads/main
```

静态网站有首页、往期列表和每期永久链接；生成目录已处理 GitHub Pages 子路径，无需替换 HTML 中所有斜线链接。既有历史内容仍可重建，但不能伪装成新一期发布。采集充分后仍达不到当天 70%，就停止发布并报告，不拿旧内容补版面。

## 不能靠程序判断的部分

来源证据的忠实性、不同观点是否有信息增量、图片是否真正对应现场、幽默是否脱离语境，需要编辑者或编辑代理阅读原文并逐图审视，写入 editorialReview。程序只检验记录完整性和可计算约束，不冒充事实核验，不保证来源观点正确。图片哈希只能识别完全相同文件，裁剪/压缩后的近似图片仍要人工识别；图片格式检查是文件头、尺寸与结束标记检查，不是完整解码/语义识别。
