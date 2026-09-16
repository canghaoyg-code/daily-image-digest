# 每日图读工作约定

- 改代码使用 karpathy-guidelines：最小必要改动，保留无关用户修改，完成验证再交付。
- 每日编辑先读 README.md 和 docs/EDITORIAL.md。数据在 content/editions；app/briefing-data.ts 是读取器，不再手写数组。
- 执行开始读取系统时间和 Asia/Shanghai 日期。运行公开 RSS 候选采集，也必须从当期可读热榜、公开社区与主题搜索发现独立原文；不能把配置中的订阅源视为固定全网来源。
- 浏览器公开观测可通过 scripts/collect.py --import 导入；保留失败/受限和未观测平台，不绕过权限、登录、付费墙或反爬。
- 用户已授权读取微博登录后可见的公开帖子与评论；优先复用当前浏览器的有效登录状态，不重复要求登录。会话失效时请用户在浏览器自行登录；不读取、保存或导出账号密码、Cookie 或令牌，不访问私信，不发布内容或修改账号设置。
- 使用 sources / stories / voices / images 建立可追溯记录。日期由原文可见证据而非抓取时间决定，不把不同意见去重成一条摘要。
- 创建 .cache/drafts 草稿，按 docs/NEWSROOM.md 运行 newsroom 的 import/status/review/seal，再经 scripts/publish-edition.mjs 检查入库。先列议题与材料缺口，后写条目；不能跳过选题、隐去重点缺料或沿用修改前的批准。至少 70% 为北京时间当天；宁可少选，也不拿旧稿或无关图凑数。历史期不得重写为当天。
- 选材/配图/阅读节奏需实际编辑复核并记录 editorialReview。不得为过测试而编造来源、时间、互动量或关联说明。
- 发布前 npm test；只推送 GitHub 的 canghaoyg-code/daily-image-digest main。禁止向 origin 对应的旧 Sites 站点发布，禁止调用 Sites 发布工具。构建产物、候选缓存、凭据和密钥不提交。
- GitHub Actions 成功后，运行 scripts/check-deployment.mjs 比对本轮 SHA 和线上期号，再确认远端 main。采集或部署失败时保留上一期并报告，不宣称成功。
