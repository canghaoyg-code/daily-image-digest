export type SourceKind = "official" | "media-report" | "interview" | "post" | "comment" | "ruling";

export const sourceKindLabels: Record<SourceKind, string> = {
  official: "官方消息", "media-report": "媒体报道", interview: "采访原话",
  post: "原帖／原视频", comment: "评论", ruling: "裁决／文件",
};

export type BriefingItem = {
  title: string;
  section: "今日焦点" | "世界与新知" | "值得细读" | "人物、自然与轻读";
  format: "brief" | "standard" | "feature" | "visual" | "social";
  source: string; sourceType: string; sourceKind: SourceKind;
  author?: string; engagement?: string; time: string; href: string;
  discovery?: string; discoveryHref?: string; topic?: string; labels?: string[];
  recommendation?: string; verificationNote?: string;
  relatedSources?: Array<{ label: string; href: string }>;
  details: string[];
  visualStat?: { label: string; value: string; note: string };
  image?: string; imageAlt?: string; imageCaption?: string;
};

export const briefingMeta = {
  dateCode: "20260830",
  headline: "七分钟冲过边境，百兆比特穿过地月之间",
  updatedAt: "2026 年 8 月 30 日 · 当日更新 · 公开来源综合读讯",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "吉隆泥石流最新发布：16 人遇难、546 人失联，搜救仍在继续",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "feature",
    source: "新华社／中国新闻网／界面新闻", sourceType: "新闻发布会／救援进展", sourceKind: "media-report",
    time: "8 月 30 日 08:18—09:27", href: "https://www.news.cn/20260830/1a1e0e0371aa412a82f10acb63e2a5b2/c.html",
    discovery: "微博热搜：吉隆口岸小邬警官确认平安", discoveryHref: "https://s.weibo.com/weibo?q=%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%B0%8F%E9%AC%AF%E8%AD%A6%E5%AE%98%E7%A1%AE%E5%B9%B3%E5%AE%89", labels: ["持续更新", "跨境灾害"],
    image: "/images/20260830/jilong-rescue-01.png", imageAlt: "西藏吉隆泥石流灾区的救援人员和受损道路", imageCaption: "资料图：救援人员向吉隆口岸方向挺进。图片来源：澎湃新闻／央视新闻",
    visualStat: { label: "截至 8 月 29 日 18 时", value: "16 / 546", note: "中国境内 16 人遇难、546 人失联；遗体转运和身份识别加快推进" },
    details: ["新华社 8 月 30 日报道，西藏自治区人民政府新闻办公室通报：截至 8 月 29 日 18 时，吉隆泥石流灾害已造成 16 人遇难、546 人失联。", "界面新闻转述发布会信息称，冰岩崩从发生到冲击吉隆口岸约 6 至 7 分钟，约 0.7 平方公里、27 处建筑及附属设施被夷为平地；这些是报道中的现场与调查口径，不替报道外推结论。"],
    verificationNote: "本条采用 30 日发布会的最新时点；与前一日数字不同，是因为统计时点和发布口径更新。",
    relatedSources: [{ label: "中国新闻网：西藏吉隆泥石流灾害造成 16 人遇难 546 人失联", href: "https://www.chinanews.com.cn/sh/2026/08-30/10686625.shtml" }, { label: "界面新闻：口岸设施被夷为平地", href: "https://www.jiemian.com/article/15029243.html" }],
  },
  {
    title: "发布会现场：搜救尚未再发现幸存者，次生灾害风险仍被反复提及",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "中国新闻网／西藏自治区人民政府新闻办公室", sourceType: "新闻发布会", sourceKind: "official", author: "发布会现场信息",
    time: "8 月 30 日", href: "https://www.chinanews.com.cn/sh/2026/08-30/10686625.shtml", labels: ["现场信息", "搜救进展"],
    image: "/images/20260830/jilong-rescue-02.png", imageAlt: "救援人员在西藏吉隆泥石流灾区开展现场勘察", imageCaption: "资料图：救援人员沿受灾路段踏勘。图片来源：澎湃新闻／央视新闻",
    details: ["公开发布会信息显示，搜救工作尚未再发现幸存者，遗体转运、身份识别和失联人员排查仍在推进；堰塞湖、山体和雨水情监测也被列为后续工作。这里保留的是发布会对当时现场的说明。"],
  },
  {
    title: "“不觉得西藏泥石流受灾的热度少得可怜吗？”",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "Reddit · r/China_irl", sourceType: "公开讨论原帖", sourceKind: "post", author: "页面未显示发布者姓名",
    time: "页面显示 8 月 30 日", href: "https://www.reddit.com/r/China_irl/comments/1w1l7b3/", labels: ["原帖", "热度讨论"],
    details: ["这条公开讨论把问题放在‘灾情为什么没有持续占据注意力’上，评论里既有人认为国内平台一直在播报，也有人认为普通用户接触到的信息仍然有限。它记录的是讨论本身，不替任何一方判断热度高低。"],
  },
  {
    title: "“尼泊尔可以第一时间发布现场视频和捐助信息”",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "Reddit · r/KanagawaWave", sourceType: "公开讨论原帖", sourceKind: "post", author: "页面未显示发布者姓名", engagement: "页面可见 +1 票",
    time: "页面显示 8 月 30 日", href: "https://www.reddit.com/r/KanagawaWave/comments/1w1cfl9/", labels: ["原帖", "跨平台视角"],
    image: "/images/20260830/jilong-rescue-02.png", imageAlt: "泥石流灾区救援人员在受损道路旁开展工作", imageCaption: "资料图：泥石流灾区救援现场。图片来源：澎湃新闻／央视新闻",
    details: ["发帖者把尼泊尔一侧的现场视频、跨境捐助和信息传播方式拿来与中国一侧比较，表达了对灾害报道与援助可见度的担忧。它是个人观点，原帖没有提供可验证的完整背景。"],
  },
  {
    title: "尼泊尔一侧死亡 675 人、2498 人失联：同一场山洪的另一份账本",
    topic: "尼泊尔洪灾", section: "今日焦点", format: "feature",
    source: "美联社／尼泊尔国家灾害风险降低与管理局", sourceType: "灾情报道／救援现场", sourceKind: "media-report",
    time: "8 月 29 日—30 日", href: "https://apnews.com/article/fde34c839b648f93f6aa011f044deb00", labels: ["跨境灾害", "国际现场"],
    image: "/images/20260830/rain-warning.jpeg", imageAlt: "洪水和泥石流灾害后的救援现场资料图", imageCaption: "资料图：洪水预警与受灾区域示意。图片来源：中国天气网／新华网",
    visualStat: { label: "尼泊尔方面截至 29 日晚", value: "675 / 2498", note: "死亡人数与失联人数；美联社另称已有超过 3700 人获救" },
    details: ["美联社报道，尼泊尔国家灾害风险降低与管理局在 8 月 29 日晚公布的数字为 675 人死亡、2498 人失联；救援中心里，失联者家属等待消息，直升机向受灾地区运送衣物、方便面、饼干和大米。", "这与中国境内的 16 人遇难、546 人失联构成同一场跨境灾害的两份统计。数字仍随排查推进变化，本文保留各自发布机构和时间点。"],
    relatedSources: [{ label: "央视新闻：尼泊尔山洪遇难人数升至 675 人", href: "https://news.cctv.com/2026/08/29/ARTIj45ZuQGeUCMaAcrynyVx260829.shtml" }],
  },
  {
    title: "卫星图像给出另一条线索：冰川和山体基岩同时崩塌，洪水随后冲入谷地",
    topic: "尼泊尔洪灾", section: "世界与新知", format: "visual", source: "美联社／地球科学家 Kristen Cook、Dan Shugar", sourceType: "卫星图像／专家解读", sourceKind: "media-report",
    time: "8 月 27 日", href: "https://apnews.com/article/b3eda9410f9941f69add384944047bc3", labels: ["自然灾害", "卫星观察"],
    image: "/images/20260830/jilong-rescue-01.png", imageAlt: "高山灾害区域和救援路线的现场资料图", imageCaption: "资料图：高山灾害救援现场。图片来源：澎湃新闻／央视新闻",
    details: ["美联社援引地貌学家对卫星影像的初步阅读：先是蓝塘里壤峰附近一部分冰川断裂，随后更大的山体基岩也发生崩塌，冰块、巨石和泥水沿谷地奔涌。云层和尘埃曾遮挡早期影像，清晰图像出现后，灾害链条才更容易被拼起来。"],
    recommendation: "原文看点：它把一场灾难从‘洪水来了’还原为冰川、基岩、河谷和道路连续失稳的过程。",
  },
  {
    title: "地月之间打通‘信息高速路’：上行 1.25Mbps、下行 100Mbps",
    topic: "地月激光通信", section: "世界与新知", format: "visual", source: "中国科学院空间应用中心／中国新闻网／央视新闻", sourceType: "科研进展", sourceKind: "official",
    time: "8 月 26 日—29 日报道", href: "https://www.cas.cn/cm/202608/t20260827_5119121.shtml", labels: ["深空通信", "中国科研"],
    visualStat: { label: "试验初步速率", value: "1.25 / 100 Mbps", note: "上行 1.25Mbps、下行 100Mbps；链路距离超过 40 万公里" },
    details: ["中国科学院空间应用工程与技术中心牵头的试验任务，建立了超过 40 万公里的地月双向激光链路。科研团队需要同时处理远距离、光束瞄准、信号衰减和传输速率等问题。", "中国科学院发布的报道以 8K 月面高清图像举例：100Mbps 激光通信下传约需 12 秒，而 5Mbps 微波链路约需 4 至 5 分钟。相关团队把它看作载人登月、月球科研站和深空探测的数据基础。"],
    relatedSources: [{ label: "央视新闻：我国首次实现地月双向高速激光通信", href: "https://big5.cctv.com/gate/big5/news.cctv.cn/2026/08/29/ARTI5VCpTLO3uEE7368aWjYA260829.shtml" }],
  },
  {
    title: "245 万 PFLOPS：智算规模继续向‘算力网’和‘算电协同’集中",
    topic: "国家智算规模", section: "世界与新知", format: "visual", source: "国家数据局／新华社", sourceType: "产业数据／政策解读", sourceKind: "official",
    time: "8 月 29 日", href: "https://www.news.cn/politics/20260829/2e5593a002154c799264d5c3170cfd15/c.html", labels: ["数据产业", "算力基础设施"],
    image: "/images/20260830/data-expo-01.jpg", imageAlt: "人形机器人在科技展会现场展示", imageCaption: "资料图：科技展会中的人形机器人。图片来源：新华社",
    visualStat: { label: "截至 2026 年 7 月底", value: "245 万 PFLOPS", note: "八大国家算力枢纽和三个算电协同发展区已建成智算规模占比超过 85%" },
    details: ["国家数据局相关负责人在数博会主题交流活动上表示，全国智算总规模达 245 万 PFLOPS（FP16），其中 145 万 PFLOPS 已纳入国家级监测调度平台。官方下一步强调优化布局、提高利用效率和深化算电协同。"],
  },
  {
    title: "数据集市摆出 253 个产品、219 个场景：技术如何被看见、被交易、被使用",
    topic: "数博会与数据应用", section: "世界与新知", format: "visual", source: "国家数据局", sourceType: "机构活动信息", sourceKind: "official",
    time: "8 月 28 日", href: "https://www.nda.gov.cn/sjj/jgsz/jld/xb/xbldhd/0828/20260828230551560515285_pc.html", labels: ["数据要素", "供需对接"],
    image: "/images/20260830/data-expo-02.jpg", imageAlt: "机器人在科技展会现场进行动态展示", imageCaption: "资料图：展会机器人展示画面。图片来源：新华社",
    visualStat: { label: "数据集市", value: "253 / 139 / 219", note: "数据产品、技术与设施能力、应用场景；84 家企业参与路演" },
    details: ["国家数据局公布，数据集市汇聚 253 个数据产品、139 项技术与设施能力和 219 个应用场景，覆盖具身智能、医疗健康、智慧农业、金融科技、智能制造和智慧城市。它呈现的是供需对接的清单，不等于这些项目已经全部商业化。"],
  },
  {
    title: "Anthropic 又站上版权争议中心：索尼、华纳指控其获取音乐作品训练模型",
    topic: "Anthropic 版权诉讼", section: "值得细读", format: "feature", source: "36 氪快讯／索尼、华纳等音乐出版商", sourceType: "企业诉讼／版权争议", sourceKind: "media-report",
    time: "8 月 29 日", href: "https://www.36kr.com/newsflashes/3961338120273281", labels: ["人工智能", "版权"],
    image: "/images/20260830/anthropic.jpg", imageAlt: "Anthropic 标志和 Claude 人工智能产品资料图", imageCaption: "资料图：Anthropic 与 Claude。图片来源：The Guardian",
    details: ["36 氪快讯称，索尼、华纳等全球大型音乐出版商提起诉讼，指控 Anthropic 通过种子下载、网页爬取等方式获取受版权保护的音乐作品，用于开发和运营 Claude。诉讼中的指控、被告回应和法院最终认定仍需分别看待。", "案件与此前作者、出版商版权和解争议相连：生成式 AI 训练数据究竟怎样取得授权、如何计价，仍在不断进入法庭。"],
    recommendation: "原文看点：同一家公司同时面对模型安全采购争议和训练数据版权争议，企业边界与内容权利被放到了两张不同的法律桌上。",
  },
  {
    title: "法院判决中的另一声部：AI 公司能否把安全边界写进产品条件？",
    topic: "Anthropic 采购诉讼", section: "值得细读", format: "social", source: "The Guardian／美国联邦法院", sourceType: "裁决摘录／政府采购争议", sourceKind: "ruling", author: "法官 Rita Lin／五角大楼公开立场",
    time: "8 月 28 日", href: "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai", labels: ["裁决原话", "AI 治理"],
    image: "/images/20260830/anthropic.jpg", imageAlt: "Anthropic 标志和 Claude 人工智能产品资料图", imageCaption: "资料图：Anthropic 与 Claude。图片来源：The Guardian",
    details: ["The Guardian 转述的裁决认为，国家安全不能成为惩罚政府批评者的空白支票；Anthropic 则欢迎判决。五角大楼的公开立场是，国防部门有权选择供应商，私人公司不应限制军事行动。两组说法并列呈现，彼此并未被压成一个结论。"],
  },
  {
    title: "2026 服贸会预告：首秀展区与惠民活动，把服务贸易做成一张体验清单",
    section: "值得细读", format: "standard", source: "新华社／人民网", sourceType: "展会预告／政策信息", sourceKind: "media-report",
    time: "8 月 30 日 07:08", href: "https://finance.people.com.cn/n1/2026/0830/c1004-40788676.html", labels: ["服务贸易", "展会"],
    image: "/images/20260830/housing-policy.png", imageAlt: "展览和服务贸易政策信息图资料图", imageCaption: "资料图：政策与展会要点图。图片来源：新华社／新浪财经",
    details: ["新华社报道，2026 年中国国际服务贸易交易会将于 9 月 9 日至 13 日在北京举办，国新办发布会介绍了筹备进展。本届活动安排了首秀展区与惠民活动，预告海报把新服务、新场景和公众体验放在同一张清单上。"],
    recommendation: "原文看点：它不是一篇宏观口号式的展会报道，而是把‘首秀’具体拆成观众可以到现场寻找的展区和活动。",
  },
  {
    title: "金饰克价一夜跌近 40 元：价格牌的波动如何传到消费者眼前",
    section: "世界与新知", format: "visual", source: "香港商报／多家品牌公开报价", sourceType: "贵金属价格／消费观察", sourceKind: "media-report",
    time: "8 月 30 日 08:24", href: "https://www.hkcd.com.hk/hkcdweb/content/2026/08/30/content_8772320.html", labels: ["消费", "金价"],
    visualStat: { label: "8 月 29 日品牌足金饰品", value: "1344—1348 元/克", note: "多品牌单日下调约 36—39 元；价格随国际金价和市场预期波动" },
    details: ["香港商报整理的公开报价显示，周生生、六福、老庙和老凤祥足金饰品单日下调约 36 至 39 元/克；报道同时提到 COMEX 黄金期货大跌和美联储官员讲话。它是一条价格与消息面的消费观察，不构成投资建议。"],
  },
  {
    title: "道路交通安全法大修进入公众视野：自动驾驶、电动自行车和‘开门杀’一起被讨论",
    section: "世界与新知", format: "visual", source: "新华社／全国人大常委会公开信息", sourceType: "法律修订／交通安全", sourceKind: "official",
    time: "8 月 25 日—29 日", href: "https://www.xinhuanet.com/politics/20260826/0ad7823966864dddb1335e45995228c5/c.html", labels: ["公共规则", "自动驾驶"],
    image: "/images/20260830/traffic-law.jpeg", imageAlt: "道路上的自动驾驶出租车资料图", imageCaption: "资料图：北京亦庄自动驾驶出行场景。图片来源：新华社",
    visualStat: { label: "截至 2026 年 6 月底", value: "4.76 亿 / 4897 万 / 5.67 亿", note: "机动车、新能源汽车保有量与机动车驾驶人数量" },
    details: ["修订草案新增自动驾驶汽车特别规定，也回应电动自行车限速、盲驾、醉驾、飙车、开门杀和暴走团等问题。文本仍处初次审议阶段，纳入草案不等于细则已经落地。"],
  },
  {
    title: "全球首台 14000 吨级环轨式起重机下线：把‘大工程’缩成一台机器",
    section: "世界与新知", format: "standard", source: "经济日报／新浪财经财经早餐", sourceType: "装备制造／产业信息", sourceKind: "media-report",
    time: "8 月 30 日 07:00 摘要", href: "https://k.sina.cn/article_7857201856_1d45362c001908lgfm.html", labels: ["装备制造", "产业现场"],
    image: "/images/20260830/data-expo-02.jpg", imageAlt: "大型装备和机器人展会资料图", imageCaption: "资料图：大型装备与科技展会场景。图片来源：新华社",
    details: ["新浪财经整理的 8 月 30 日财经早餐提到，全球首台 14000 吨级环轨式起重机已在中国成功下线。它与数字产业、外商投资、地月激光通信等消息并列出现，构成当天产业新闻里‘基础设施重量’的一面。"],
  },
  {
    title: "心脏病统一定义首次改写：三类更常见于女性的心梗进入诊断核心",
    section: "值得细读", format: "visual", source: "The Guardian／欧洲心脏病学会", sourceType: "医学指南／女性健康", sourceKind: "media-report",
    time: "8 月 28 日", href: "https://www.theguardian.com/society/2026/aug/28/doctors-care-revolution-agree-first-universal-definition-heart-attack", labels: ["医学指南", "性别差异"],
    image: "/images/20260830/heart-guideline.jpg", imageAlt: "女性患者手指夹着心率监测设备的医学资料图", imageCaption: "资料图：心率监测。图片来源：David Sillitoe／The Guardian",
    visualStat: { label: "新指南关注", value: "3 类 / 10 倍 / 更低阈值", note: "三类心梗在女性中最高可多见 10 倍；女性 troponin 诊断阈值将单独考虑" },
    details: ["新指南把冠状动脉痉挛、栓塞和自发性冠状动脉夹层提升到更重要的位置，并提出按性别设置 troponin 诊断阈值。它承认疾病机制与检测水平存在差异，不替代个人诊断。"],
  },
  {
    title: "木糖醇研究继续引发争论：相关性、机制假设和日常消费不要混成一句话",
    section: "值得细读", format: "feature", source: "The Guardian／European Society of Cardiology", sourceType: "医学研究／健康消费", sourceKind: "media-report",
    time: "8 月 28 日", href: "https://www.theguardian.com/society/2026/aug/28/sweetener-xylitol-used-in-chewing-gum-and-jam-linked-to-strokes-and-heart-attacks-study", labels: ["研究解读", "谨慎阅读"],
    image: "/images/20260830/xylitol.jpg", imageAlt: "吐司和果酱的食品资料图", imageCaption: "资料图：木糖醇可能出现的食品场景。图片来源：Martin Lee／Alamy via The Guardian",
    details: ["研究比较 1.77 万人的血液木糖醇水平，最高四分位人群在六年内发生死亡、心梗或中风的可能性比最低四分位高 57%。", "原报道也写明限制：这是一项观察性研究，相关关系不能直接推断因果。"],
    recommendation: "原文把数字、机制假设和研究限制并列，保留了‘值得关注’与‘尚不能下结论’之间的距离。",
  },
  {
    title: "日本一年捕杀 1.4 万头熊，冲突却没有消失：保护成功之后的治理难题",
    section: "值得细读", format: "feature", source: "The Guardian／日本环境省／IUCN 专家", sourceType: "人与野生动物冲突", sourceKind: "media-report",
    time: "8 月 27 日—29 日更新", href: "https://www.theguardian.com/environment/2026/aug/27/bears-killed-13-people-japan-14000-bears", labels: ["人与自然", "政策争论"],
    image: "/images/20260830/japan-bear.jpg", imageAlt: "日本亚洲黑熊的自然保护资料图", imageCaption: "资料图：亚洲黑熊。图片来源：petesphotography／Getty via The Guardian",
    details: ["报道写道，2025 年 4 月至 2026 年 1 月，日本捕杀熊超过 1.4 万头；此前一年熊袭击造成 13 人死亡。森林坚果歉收、乡村人口减少与废弃果园，都让熊更频繁地靠近居住地。", "争论还包括熊的实际数量、数据准确性，以及驱赶、围栏、清理果树和改善食物条件能否长期执行。"],
    recommendation: "原文没有把熊写成单一的危险动物，而是追问保护成功如何在气候和人口变化中制造新的管理压力。",
  },
  {
    title: "常冰玉 10 比 7 击败赵心童：00 后首夺排名赛冠军，武汉留下一个新名字",
    section: "人物、自然与轻读", format: "visual", source: "极目新闻／湖北日报／微博公开视频", sourceType: "体育赛事／赛后讨论", sourceKind: "media-report",
    time: "8 月 29 日晚—30 日", href: "https://www.ctdsb.net/c1720_202608/2844027.html", labels: ["体育", "中国德比"],
    image: "/images/20260830/snooker.jpeg", imageAlt: "中国斯诺克选手在武汉公开赛比赛中击球", imageCaption: "资料图：中国选手参加斯诺克比赛。图片来源：新华社／人民网",
    details: ["极目新闻报道，2026 世界斯诺克武汉公开赛决赛上演中国德比，常冰玉以 10 比 7 战胜新科世界第一赵心童，拿到职业生涯首座排名赛冠军。第一阶段常冰玉 5 比 4 领先，第二阶段继续把优势守到终场。", "微博公开视频的标题把注意力放在‘00 后夺冠’和决赛戏剧性上；不同入口关注的是比分、年龄和比赛过程，合起来才是这场胜利的传播面。"],
    relatedSources: [{ label: "微博公开视频：常冰玉 10—7 赵心童夺首冠", href: "https://weibo.com/2/detail/5337422885814782" }, { label: "湖北日报：逆转赵心童武汉登顶", href: "https://news.hubeidaily.net/pc/c_5917895.html" }],
  },
  {
    title: "英国人开始多买豆子：便宜、高纤维，比植物肉更接近今天的购物决定",
    section: "人物、自然与轻读", format: "feature", source: "The Guardian／NielsenIQ／Madre Brava", sourceType: "消费观察／饮食变化", sourceKind: "media-report",
    time: "8 月 28 日—29 日", href: "https://www.theguardian.com/food/2026/aug/28/bean-lentil-sales-british-save-money-improve-diet", labels: ["食物", "消费趋势"],
    image: "/images/20260830/beans.jpg", imageAlt: "包装好的豆类、扁豆和豆制品资料图", imageCaption: "资料图：豆类货架。图片来源：Gareth Phillips／The Guardian",
    details: ["NielsenIQ 数据显示，英国 2026 年上半年豆类、扁豆、豆腐和豆豉等销量同比增长 7.3%，罐装与玻璃罐装黄油豆销量增长 30.3%，而部分植物肉销量下降 4.3%。"],
    recommendation: "原文从超市数据写到食谱、通胀和‘买得起的健康’，是一篇不沉重但有信息量的消费观察。",
  },
  {
    title: "“急救时就让他们穿鞋进来”——一双鞋也有自己的转运路线",
    section: "人物、自然与轻读", format: "social", source: "金泽市消防局 Instagram／The Guardian", sourceType: "公共服务原视频与评论", sourceKind: "post", author: "kanazawa_syoubou／未具名评论者",
    time: "8 月 5 日发布，8 月 28—29 日报道", href: "https://www.instagram.com/p/DbqGfGfox3f/", engagement: "视频观看超过 50 万次；该评论获赞超过 800", labels: ["公共服务", "轻内容"],
    image: "/images/20260830/paramedics-shoes.jpg", imageAlt: "日本消防员演示急救人员在门口摆放鞋子的位置", imageCaption: "资料图：消防员演示急救鞋的摆放位置。图片来源：金泽市消防局 Instagram via The Guardian",
    details: ["金泽市消防部门提醒居民，不要在急救人员进入住宅后替他们把鞋摆正：三名担架搬运者会按角色预先放鞋，位置被改动可能让转运慢约 30 秒。评论区最受欢迎的回应更直接：‘急救时就让他们穿鞋进来。’"],
    relatedSources: [{ label: "The Guardian：日本急救鞋礼仪引发讨论", href: "https://www.theguardian.com/world/2026/aug/28/never-tidy-paramedics-shoes-japan-custom-etiquette" }],
  },
];

export function validateBriefingItems(items: BriefingItem[]) {
  const titles = new Set<string>();
  let imageCount = 0;
  for (const item of items) {
    if (!item.sourceKind || !sourceKindLabels[item.sourceKind]) throw new Error(`条目缺少来源性质：${item.title}`);
    if (!item.href || !item.details.length) throw new Error(`条目缺少正文或出处：${item.title}`);
    if (titles.has(item.title)) throw new Error(`存在重复编辑单位：${item.title}`);
    titles.add(item.title);
    if ((item.sourceKind === "post" || item.sourceKind === "comment") && /(?:search|weibo\?q=|douyin\.com\/search|toutiao\.com\/search)/i.test(item.href)) throw new Error(`原帖或评论不能使用搜索／话题页链接：${item.title}`);
    if (item.image) {
      imageCount += 1;
      if (!item.image.startsWith("/images/20260830/") || !item.imageAlt || !item.imageCaption) throw new Error(`图片必须是本期站内资源，并包含来源和替代文本：${item.title}`);
    }
  }
  if (imageCount < 16 || imageCount / items.length < 0.7) throw new Error(`图片密度不足：${imageCount}/${items.length}`);
  if (items.at(-1)?.section !== "人物、自然与轻读") throw new Error("最后一条必须是轻内容");
  return items;
}
