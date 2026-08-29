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
  dateCode: "20260829",
  headline: "最后一公里仍是悬崖与河流，急救时就让他们穿鞋进来",
  updatedAt: "2026 年 8 月 29 日 · 20:00 晚间更新 · 公开来源综合读讯",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "吉隆泥石流已致 7 人遇难、554 人失联：最后一公里仍是悬崖与河流",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "feature",
    source: "新华社／央广网／人民网", sourceType: "救援进展／现场报道", sourceKind: "media-report",
    time: "8 月 29 日 01:40—09:40", href: "https://www.news.cn/politics/20260829/e20310f9f89744da82a6c343cf81834b/c.html",
    discovery: "微博热搜：#西藏吉隆泥石流#", discoveryHref: "https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%23", labels: ["持续更新", "救援现场"],
    image: "/images/20260829/jilong-rescue-01.png", imageAlt: "西藏吉隆泥石流灾区的救援人员和受损道路", imageCaption: "救援人员向吉隆口岸方向挺进。图片来源：澎湃新闻／央视新闻",
    visualStat: { label: "截至 29 日 1 时", value: "7 / 554 / 1.02 公里", note: "已救出 2 人；7 人遇难、554 人失联；道路已抢通 1.02 公里" },
    details: ["新华社援引西藏自治区应急管理厅消息：截至 29 日 1 时，灾害已造成 7 人遇难、554 人失联，已救出热索村群众 2 人。各级专兼职救援力量 2141 人已到位，并设置观测哨监测堰塞湖。", "央广网记录的路线更具体：橡皮艇、徒步翻山、无人机侦察和空中投送并行推进。离口岸约两公里处仍无道路基础，面前是悬崖、河流，以及溃堤和再次崩塌风险。"],
    verificationNote: "29 日 1 时的统计与此前口径不同；这里按公开发布时间呈现最新消息。",
    relatedSources: [{ label: "央广网：各方力量持续开展抢险救援", href: "https://china.cnr.cn/news/20260829/t20260829_527797480.shtml" }, { label: "人民网：救援力量加紧排查搜救", href: "https://society.people.com.cn/n1/2026/0829/c1008-40788545.html" }],
  },
  {
    title: "“堰塞湖已经形成自然过流，现场仍在监测水位和流速”",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "央广网", sourceType: "技术人员采访", sourceKind: "interview", author: "中国安能侦测组组长 陈菡潇",
    time: "8 月 29 日", href: "https://china.cnr.cn/news/20260829/t20260829_527797480.shtml", labels: ["现场判断", "堰塞湖"],
    image: "/images/20260829/jilong-rescue-02.png", imageAlt: "救援人员在西藏吉隆泥石流灾区开展现场勘察", imageCaption: "救援人员沿受灾路段踏勘。图片来源：澎湃新闻／央视新闻",
    details: ["陈菡潇在采访中介绍，堰塞湖当时已形成自然过流，技术人员持续监测水位和流速。这是现场人员在报道时点对风险状态的直接说明。"],
  },
  {
    title: "“救援了 1 天，也没个跟踪报道吗？”",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "Reddit · r/China_irl", sourceType: "公开讨论原帖", sourceKind: "post", author: "LeagueAromatic5686",
    time: "页面显示 4 小时前", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/%E8%A5%BF%E8%97%8F%E9%82%A3%E8%BE%B9%E6%80%8E%E4%B9%88%E6%B2%A1%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E4%BA%86/", engagement: "页面可见 +1 至 +8 票的讨论", labels: ["原帖", "信息更新"],
    details: ["发布者写道：‘除了李强这条，目前其他新闻依旧是 24 小时之前的，救援了 1 天也没个跟踪报道吗。’这条原帖讨论的是公开信息更新速度。"],
  },
  {
    title: "“峡谷都进不去，路面全被泥石流覆盖，直升机进去都没降落的地方”",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "Reddit · r/China_irl", sourceType: "原帖下公开评论", sourceKind: "comment", author: "Affectionate_Fox4371",
    time: "页面显示 1 小时前", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/comment/p6cx0l9/", labels: ["评论", "地形解释"],
    details: ["这名评论者补充称，中国一侧口岸位于峡谷深处，居民镇距离较远；当前难点是峡谷道路被泥石流覆盖，直升机也缺少降落位置。它与上一条质疑形成同题下的另一种解释。"],
  },
  {
    title: "暴雨黄色预警继续：14 省区有大到暴雨，三地局部可能出现特大暴雨",
    topic: "暴雨预警", section: "今日焦点", format: "visual",
    source: "中央气象台／中国天气网／新华网", sourceType: "暴雨黄色预警／防御指南", sourceKind: "official",
    time: "8 月 29 日 06:00—07:40", href: "https://www.news.cn/politics/20260829/51762a63f688436f9935ab8228009f0e/c.html", labels: ["今日行动项", "天气图"],
    image: "/images/20260829/rain-warning.jpeg", imageAlt: "8 月 29 日中国暴雨预警影响区域示意图", imageCaption: "8 月 29 日暴雨预警影响区域图。图片来源：中国天气网／新华网",
    visualStat: { label: "预警时段", value: "08:00—次日 08:00", note: "江西西部、湖南南部、广西东北部局地累计降雨可能达 250—270 毫米" },
    details: ["预警覆盖江西、湖北、湖南、广西、广东等 14 省区。防御提示包括切断低洼地带危险室外电源、暂停空旷户外作业、转移危房居民和检查排水系统。"],
  },
  {
    title: "政治局会议部署吉隆泥石流抢险救援：核清人数、科学施救、防范次生灾害",
    section: "今日焦点", format: "brief", source: "新华社／人民日报", sourceType: "救灾部署", sourceKind: "official",
    time: "8 月 28 日", href: "https://cpc.people.com.cn/n1/2026/0829/c64387-40788442.html", labels: ["公共事务", "救灾部署"],
    details: ["公开报道把任务拆为核清失联受灾人数、全力搜救、及时转移受威胁群众、保障通信和道路，并持续监测堰塞湖、山体与雨水情。"],
  },
  {
    title: "现房销售、主办银行制与最长 40 年住房贷款：房地产政策出现一组新规则",
    section: "世界与新知", format: "standard", source: "中国人民银行／金融监管总局／央视网", sourceType: "房地产信贷管理／销售制度", sourceKind: "official",
    time: "8 月 28 日 19:29", href: "https://jingji.cctv.cn/2026/08/28/ARTIZfTzexl1KJKgg72odyb2260828.shtml", labels: ["商业经济", "制度调整"],
    image: "/images/20260829/housing-policy.png", imageAlt: "房地产信贷政策报道中的政策要点图", imageCaption: "房地产政策要点图。图片来源：新华财经／新浪财经",
    details: ["央行、金融监管总局发布意见：房地产开发贷款实行主办银行制，预售项目最长 5 年、现房项目最长 7 年；个人住房贷款期限最长不超过 40 年。", "同日，多部门推进商品住房现房销售和房地产企业多种融资制度改革。具体适用仍取决于城市购房条件、银行评估和项目情况。"],
    relatedSources: [{ label: "新华社：改革完善房地产信贷管理", href: "https://www.xinhuanet.com/20260828/36dc5659375e407abd8e01a281305df5/c.html" }],
  },
  {
    title: "机器人跳苗族舞、无人机踢足球：数博会把数据应用变成可以围观的现场",
    topic: "数博会与数据应用", section: "世界与新知", format: "visual", source: "央视新闻", sourceType: "产业展会现场", sourceKind: "media-report",
    time: "8 月 29 日 00:40", href: "https://news.cctv.com/2026/08/29/ARTI5I0LJevT0FY5TQDmHHYp260828.shtml", labels: ["科技现场", "具身智能"],
    image: "/images/20260829/data-expo-01.jpg", imageAlt: "人形机器人参加公开活动和比赛的现场画面", imageCaption: "人形机器人展示现场。图片来源：新华社",
    details: ["全自动驾驶接驳车、人形机器人主持、机器狗、无人机足球和机器人饮品，构成数博会最直观的一层：模型与数据不再只出现在图表里，而成为观众能体验的展台。"],
  },
  {
    title: "253 个数据产品、219 个应用场景：数据集市试着回答“数据怎样变成价值”",
    topic: "数博会与数据应用", section: "世界与新知", format: "visual", source: "国家数据局", sourceType: "机构活动信息", sourceKind: "official",
    time: "8 月 28 日", href: "https://www.nda.gov.cn/sjj/jgsz/jld/xb/xbldhd/0828/20260828230551560515285_pc.html", labels: ["数据要素", "供需对接"],
    image: "/images/20260829/data-expo-02.jpg", imageAlt: "机器人在科技展会现场进行动态展示", imageCaption: "展会机器人展示画面。图片来源：新华社",
    visualStat: { label: "数据集市", value: "253 / 139 / 219", note: "数据产品、技术与设施能力、应用场景" },
    details: ["国家数据局公布，数据集市汇聚 253 个数据产品、139 项技术与设施能力和 219 个应用场景；84 家企业参与路演，覆盖具身智能、医疗健康、智慧农业、金融科技、智能制造和智慧城市。"],
  },
  {
    title: "美国法官判五角大楼封禁 Anthropic 违法：AI 安全边界进入采购诉讼",
    topic: "Anthropic 采购诉讼", section: "世界与新知", format: "feature", source: "The Guardian／Reuters／AFP", sourceType: "美国诉讼／AI 治理", sourceKind: "media-report",
    time: "8 月 28 日", href: "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai", labels: ["人工智能", "法院判决"],
    image: "/images/20260829/anthropic.jpg", imageAlt: "Anthropic 标志和 Claude 人工智能产品资料图", imageCaption: "Anthropic 与 Claude 资料图。图片来源：The Guardian",
    details: ["美国联邦法官裁定，五角大楼把 Anthropic 列为供应链风险并禁止承包商使用其产品的做法违法。争议源于 Anthropic 拒绝让 Claude 用于某些武器和监控用途。", "案件把企业设定模型安全边界的权利、政府采购权和国家安全理由放到了同一张法庭桌上。"],
    recommendation: "原文看点：59 页裁决中的采购法、言论权和 AI 安全冲突被串在一起，判决也没有结束所有法律争议。",
  },
  {
    title: "“国家安全不能成为惩罚政府批评者的空白支票”",
    topic: "Anthropic 采购诉讼", section: "世界与新知", format: "social", source: "美国联邦法院／The Guardian", sourceType: "裁决摘录", sourceKind: "ruling", author: "法官 Rita Lin",
    time: "8 月 28 日", href: "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai", labels: ["裁决原话", "政府采购"],
    details: ["Rita Lin 在裁决中否定了用笼统国家安全理由报复批评者的做法。Anthropic 欢迎裁决；五角大楼的公开立场则是，私人公司不应限制军事行动，国防部门有权选择供应商。"],
  },
  {
    title: "挪威国王哈拉尔五世去世，享年 89 岁：一位用“普通感”维系公众连接的君主",
    section: "人物、自然与轻读", format: "feature", source: "The Guardian／挪威王室／Reuters", sourceType: "人物／讣告", sourceKind: "media-report",
    time: "8 月 28 日—29 日", href: "https://www.theguardian.com/world/2026/aug/28/king-harald-v-of-norway-obituary", labels: ["人物", "公共记忆"],
    image: "/images/20260829/king-harald.jpg", imageAlt: "挪威国王哈拉尔五世的肖像资料图", imageCaption: "哈拉尔五世资料照。图片来源：Francisco Seco／AP via The Guardian",
    details: ["哈拉尔五世 8 月 28 日在奥斯陆大学医院去世，其子哈康继位。讣告回看他三十多年的统治：支持平民出身的索尼娅，也让王宫与王室庄园更开放地面向公众。", "他的公共形象来自帆船运动、朴素生活与危机时刻的讲话。2011 年挪威枪击案后，他曾谈到自由比恐惧更强。"],
    recommendation: "原文把王室新闻写成一段社会史：象征性职位如何通过婚姻、开放和危机回应改变公众感受。",
  },
  {
    title: "奥斯陆王宫外，一位受访者说他像“让所有人感到在家里的祖父”",
    section: "人物、自然与轻读", format: "social", source: "NRK via Reuters／The Guardian 视频", sourceType: "现场受访者", sourceKind: "interview", author: "奥斯陆王宫外悼念者",
    time: "8 月 28 日", href: "https://www.theguardian.com/world/video/2026/aug/28/norwegians-pay-tribute-to-grandfather-figure-king-harald-v-video", labels: ["现场声音", "公众悼念"],
    image: "/images/20260829/oslo-mourning.jpg", imageAlt: "人们在奥斯陆王宫外悼念哈拉尔五世", imageCaption: "民众在奥斯陆王宫外献花。图片来源：Rune Hellestad／Getty via The Guardian",
    details: ["短短一句话比完整讣告更私人。王宫外留下鲜花的人谈的是共同生活中的熟悉感；与此同时，新王继位后的公众支持与王室争议仍会继续。"],
  },
  {
    title: "心脏病统一定义首次改写：三类更常见于女性的心梗进入诊断核心",
    section: "值得细读", format: "visual", source: "The Guardian／欧洲心脏病学会", sourceType: "医学指南／女性健康", sourceKind: "media-report",
    time: "8 月 28 日", href: "https://www.theguardian.com/society/2026/aug/28/doctors-care-revolution-agree-first-universal-definition-heart-attack", labels: ["医学指南", "性别差异"],
    image: "/images/20260829/heart-guideline.jpg", imageAlt: "女性患者手指夹着心率监测设备的医学资料图", imageCaption: "心率监测资料图。图片来源：David Sillitoe／The Guardian",
    visualStat: { label: "新指南关注", value: "3 类 / 10 倍 / 更低阈值", note: "三类心梗在女性中最高可多见 10 倍；女性 troponin 诊断阈值将单独考虑" },
    details: ["新指南把冠状动脉痉挛、栓塞和自发性冠状动脉夹层提升到更重要的位置，并提出按性别设置 troponin 诊断阈值。它承认疾病机制与检测水平存在差异，不替代个人诊断。"],
  },
  {
    title: "木糖醇研究引发争论：高血液水平与心梗、中风相关，但观察性研究不等于因果",
    section: "值得细读", format: "feature", source: "The Guardian／European Society of Cardiology", sourceType: "医学研究／健康消费", sourceKind: "media-report",
    time: "8 月 28 日", href: "https://www.theguardian.com/society/2026/aug/28/sweetener-xylitol-used-in-chewing-gum-and-jam-linked-to-strokes-and-heart-attacks-study", labels: ["研究解读", "谨慎阅读"],
    image: "/images/20260829/xylitol.jpg", imageAlt: "吐司和果酱的食品资料图", imageCaption: "木糖醇常见食品场景资料图。图片来源：Martin Lee／Alamy via The Guardian",
    details: ["研究比较 1.77 万人的血液木糖醇水平，最高四分位人群在六年内发生死亡、心梗或中风的可能性比最低四分位高 57%。", "原报道也写明限制：这是一项观察性研究，相关关系不能直接推断因果。"],
    recommendation: "原文把数字、机制假设和研究限制并列，保留了‘值得关注’与‘尚不能下结论’之间的距离。",
  },
  {
    title: "日本一年捕杀 1.4 万头熊，冲突却没有消失：保护成功之后的治理难题",
    section: "值得细读", format: "feature", source: "The Guardian／日本环境省／IUCN 专家", sourceType: "人与野生动物冲突", sourceKind: "media-report",
    time: "8 月 27 日—29 日更新", href: "https://www.theguardian.com/environment/2026/aug/27/bears-killed-13-people-japan-14000-bears", labels: ["人与自然", "政策争论"],
    image: "/images/20260829/japan-bear.jpg", imageAlt: "日本亚洲黑熊的自然保护资料图", imageCaption: "亚洲黑熊资料图。图片来源：petesphotography／Getty via The Guardian",
    details: ["报道写道，2025 年 4 月至 2026 年 1 月，日本捕杀熊超过 1.4 万头；此前一年熊袭击造成 13 人死亡。森林坚果歉收、乡村人口减少与废弃果园，都让熊更频繁地靠近居住地。", "争论还包括熊的实际数量、数据准确性，以及驱赶、围栏、清理果树和改善食物条件能否长期执行。"],
    recommendation: "原文没有把熊写成单一的危险动物，而是追问保护成功如何在气候和人口变化中制造新的管理压力。",
  },
  {
    title: "赵心童即时世界第一，中国选手包揽武汉公开赛四强",
    section: "人物、自然与轻读", format: "visual", source: "新华社／世界斯诺克巡回赛", sourceType: "体育赛事", sourceKind: "media-report",
    time: "8 月 27 日—28 日", href: "https://www.news.cn/sports/20260827/c217e386e7a845b4be86ce325e19f6c4/c.html", labels: ["体育", "赛事现场"],
    image: "/images/20260829/snooker.jpeg", imageAlt: "赵心童参加世界斯诺克武汉公开赛的比赛画面", imageCaption: "赵心童在武汉公开赛比赛中。图片来源：伍志尊／新华社",
    details: ["赵心童在四分之一决赛以 5:1 击败尼尔·罗伯逊，凭借晋级四强即时升至世界第一，成为继丁俊晖后第二位登顶的中国斯诺克选手。"],
  },
  {
    title: "道路交通安全法首次系统性大修：自动驾驶、电动自行车和“开门杀”进入立法视野",
    section: "世界与新知", format: "visual", source: "新华社／全国人大常委会公开信息", sourceType: "法律修订／交通安全", sourceKind: "official",
    time: "8 月 25 日—29 日", href: "https://www.xinhuanet.com/politics/20260826/0ad7823966864dddb1335e45995228c5/c.html", labels: ["公共规则", "自动驾驶"],
    image: "/images/20260829/traffic-law.jpeg", imageAlt: "道路上的自动驾驶出租车资料图", imageCaption: "北京亦庄自动驾驶出行场景。图片来源：新华社",
    visualStat: { label: "截至 2026 年 6 月底", value: "4.76 亿 / 4897 万 / 5.67 亿", note: "机动车、新能源汽车保有量与机动车驾驶人数量" },
    details: ["修订草案新增自动驾驶汽车特别规定，也回应电动自行车限速、盲驾、醉驾、飙车、开门杀和暴走团等问题。文本仍处初次审议阶段，纳入草案不等于细则已经落地。"],
  },
  {
    title: "92 号汽油每升约涨 0.3 元，0 号柴油每升约涨 0.31 元",
    section: "世界与新知", format: "brief", source: "国家发展改革委／新华社", sourceType: "能源价格", sourceKind: "official",
    time: "8 月 28 日 24:00 起", href: "https://www.news.cn/20260828/b07ca80c21664eb4b1cd6eecdfea9d45/c.html", labels: ["生活成本", "能源"],
    details: ["国内汽油、柴油标准品最高零售价格每吨分别上调 375 元和 360 元。调价依据是前 10 个工作日一揽子国际原油均价变化。"],
  },
  {
    title: "英国人开始多买豆子：便宜、高纤维，比植物肉更接近今天的购物决定",
    section: "人物、自然与轻读", format: "feature", source: "The Guardian／NielsenIQ／Madre Brava", sourceType: "消费观察／饮食变化", sourceKind: "media-report",
    time: "8 月 28 日—29 日", href: "https://www.theguardian.com/food/2026/aug/28/bean-lentil-sales-british-save-money-improve-diet", labels: ["食物", "消费趋势"],
    image: "/images/20260829/beans.jpg", imageAlt: "包装好的豆类、扁豆和豆制品资料图", imageCaption: "豆类货架资料图。图片来源：Gareth Phillips／The Guardian",
    details: ["NielsenIQ 数据显示，英国 2026 年上半年豆类、扁豆、豆腐和豆豉等销量同比增长 7.3%，罐装与玻璃罐装黄油豆销量增长 30.3%，而部分植物肉销量下降 4.3%。"],
    recommendation: "原文从超市数据写到食谱、通胀和‘买得起的健康’，是一篇不沉重但有信息量的消费观察。",
  },
  {
    title: "“急救时就让他们穿鞋进来”",
    section: "人物、自然与轻读", format: "social", source: "金泽市消防局 Instagram／The Guardian", sourceType: "公共服务原视频与评论", sourceKind: "post", author: "kanazawa_syoubou／未具名评论者",
    time: "8 月 5 日发布，8 月 28—29 日报道", href: "https://www.instagram.com/p/DbqGfGfox3f/", engagement: "视频观看超过 50 万次；该评论获赞超过 800", labels: ["公共服务", "轻内容"],
    image: "/images/20260829/paramedics-shoes.jpg", imageAlt: "日本消防员演示急救人员在门口摆放鞋子的位置", imageCaption: "消防员演示急救鞋的摆放位置。图片来源：金泽市消防局 Instagram via The Guardian",
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
      if (!item.image.startsWith("/images/20260829/") || !item.imageAlt || !item.imageCaption) throw new Error(`图片必须是本期站内资源，并包含来源和替代文本：${item.title}`);
    }
  }
  if (imageCount < 16 || imageCount / items.length < 0.7) throw new Error(`图片密度不足：${imageCount}/${items.length}`);
  if (items.at(-1)?.section !== "人物、自然与轻读") throw new Error("最后一条必须是轻内容");
  return items;
}
