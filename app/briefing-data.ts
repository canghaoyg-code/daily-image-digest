export type VoiceKind = "official" | "interview" | "post" | "comment" | "ruling" | "reported";
export type PlatformSignalKind = "topic" | "search" | "discussion";
export type SourceKind = "official" | "media-report" | "interview" | "post" | "comment" | "ruling" | "topic-page" | "search-page";

export const sourceKindLabels: Record<SourceKind, string> = {
  official: "官方消息",
  "media-report": "媒体报道",
  interview: "采访转述",
  post: "原帖／原视频",
  comment: "评论",
  ruling: "裁决／文件",
  "topic-page": "话题页",
  "search-page": "搜索页",
};

export const voiceKindLabels: Record<VoiceKind, string> = {
  official: "官方文本",
  interview: "采访转述",
  post: "原帖",
  comment: "评论",
  ruling: "裁决／文件",
  reported: "报道转述",
};

export const platformSignalKindLabels: Record<PlatformSignalKind, string> = {
  topic: "话题聚合",
  search: "搜索线索",
  discussion: "讨论串摘要",
};

export type BriefingItem = {
  title: string;
  section: "今日焦点" | "世界与新知" | "值得细读" | "人物、自然与轻读";
  format: "brief" | "standard" | "feature" | "visual" | "social";
  source: string;
  sourceType: string;
  sourceKind: SourceKind;
  time: string;
  href: string;
  discovery?: string;
  discoveryHref?: string;
  topic?: string;
  labels?: string[];
  recommendation?: string;
  verificationNote?: string;
  relatedSources?: Array<{ label: string; href: string }>;
  voices?: Array<{
    kind: VoiceKind;
    platform: string;
    author: string;
    text: string;
    href: string;
    time?: string;
    engagement?: string;
  }>;
  platformSignals?: Array<{
    kind: PlatformSignalKind;
    platform: string;
    label: string;
    text: string;
    href: string;
    engagement?: string;
  }>;
  details: string[];
  visualStat?: { label: string; value: string; note: string };
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const briefingMeta = {
  dateCode: "20260829",
  headline: "最后一公里仍在泥里，世界也在重新校准自己的边界",
  updatedAt: "2026 年 8 月 29 日 · 20:00 晚间更新 · 公开来源综合读讯",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "吉隆泥石流已致 7 人遇难、554 人失联：救援队伍抵达核心区，最后一公里仍是悬崖与河流",
    topic: "吉隆泥石流救援",
    section: "今日焦点",
    format: "feature",
    source: "新华社／央广网／人民网",
    sourceType: "救援进展／现场报道",
    sourceKind: "media-report",
    time: "8 月 29 日 01:40—09:40",
    href: "https://www.news.cn/politics/20260829/e20310f9f89744da82a6c343cf81834b/c.html",
    discovery: "微博热搜：#西藏吉隆泥石流#",
    discoveryHref: "https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%23",
    labels: ["持续更新", "跨境灾害", "救援现场"],
    image: "https://imgpai.thepaper.cn/newpai/image/20260828/5b13d735-cc27-4cb7-a999-2eb2ade3fa5a.jpg",
    imageAlt: "西藏吉隆泥石流灾区的救援人员和受损道路",
    imageCaption: "救援人员向吉隆口岸方向挺进。图片来源：澎湃新闻／央视新闻",
    visualStat: { label: "截至 29 日 1 时", value: "7 / 554 / 1.02 公里", note: "已救出 2 人；7 人遇难、554 人失联；道路已抢通 1.02 公里" },
    details: [
      "新华社援引西藏自治区应急管理厅消息：截至 29 日 1 时，吉隆泥石流灾害已造成 7 人遇难、554 人失联，已救出热索村群众 2 人。各级专兼职救援力量 2141 人已到位，并设置观测哨监测堰塞湖。",
      "央广网记录了救援的具体路径：消防队伍采取水路橡皮艇、陆路徒步翻山和空中无人机侦察投送，武警在距口岸约 2 公里处清淤搜寻；所谓‘最后一公里’，现场仍是悬崖、河流、无道路基础，以及溃堤和再次崩塌风险。",
    ],
    verificationNote: "29 日 1 时的新统计与 27 日上午‘3 人遇难、558 人失联’的旧口径不同；这里按更新时间分别呈现，不把变化解释成单一原因。",
    relatedSources: [
      { label: "央广网：各方力量持续开展抢险救援", href: "https://china.cnr.cn/news/20260829/t20260829_527797480.shtml" },
      { label: "人民网：救援力量加紧排查搜救", href: "https://society.people.com.cn/n1/2026/0829/c1008-40788545.html" },
    ],
  },
  {
    title: "同一场泥石流的多声部：统计、技术采访与讨论串里的现场感受",
    topic: "吉隆泥石流救援",
    section: "今日焦点",
    format: "social",
    source: "央广网／新华社",
    sourceType: "官方消息／采访转述",
    sourceKind: "media-report",
    time: "8 月 28 日—29 日",
    href: "https://china.cnr.cn/news/20260829/t20260829_527797480.shtml",
    discovery: "Reddit 公开讨论：西藏那边怎么没有新消息了",
    discoveryHref: "https://www.reddit.com/r/China_irl/comments/1w0dspz/%E8%A5%BF%E8%97%8F%E9%82%A3%E8%BE%B9%E6%80%8E%E4%B9%88%E6%B2%A1%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E4%BA%86/",
    labels: ["多声部热点", "2 条报道来源＋6 条讨论内容", "各自保留"],
    image: "https://imgpai.thepaper.cn/newpai/image/20260828/15497de2-d749-4b66-805c-1a17f50c44f7.jpg",
    imageAlt: "救援人员在西藏吉隆泥石流灾区开展现场勘察",
    imageCaption: "救援人员沿受灾路段踏勘并回传现场影像。图片来源：澎湃新闻／央视新闻",
    details: [
      "同一主题下并列公开统计、技术采访和讨论串正文。每条保留原发布者、可见时间和原文入口，不将不同说法合成一个结论。",
    ],
    voices: [
      { kind: "official", platform: "新华社", author: "西藏自治区应急管理厅消息", text: "公布截至 29 日 1 时的 7 人遇难、554 人失联，并说明道路抢通 1.02 公里、设置 5 人观测哨。", href: "https://www.news.cn/politics/20260829/e20310f9f89744da82a6c343cf81834b/c.html", time: "8 月 29 日 01:00" },
      { kind: "interview", platform: "央广网", author: "中国安能侦测组组长陈菡潇", text: "介绍堰塞湖已经形成自然过流，现场持续监测水位和流速；这是技术人员对当时风险的判断。", href: "https://china.cnr.cn/news/20260829/t20260829_527797480.shtml", time: "8 月 29 日" },
      { kind: "post", platform: "Reddit · r/China_irl", author: "LeagueAromatic5686", text: "除了李强这条，目前其他新闻依旧是24小时之前的，救援了1天也没个跟踪报道吗", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/%E8%A5%BF%E8%97%8F%E9%82%A3%E8%BE%B9%E6%80%8E%E4%B9%88%E6%B2%A1%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E4%BA%86/", time: "4 小时前" },
      { kind: "comment", platform: "Reddit · r/China_irl", author: "assplod3", text: "在牆內很多視頻都404了", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/comment/p6d4by6/", time: "10 分钟前" },
      { kind: "comment", platform: "Reddit · r/China_irl", author: "These_Wing_9389", text: "我一直很好奇你们说国内不报，专题报道多的数不胜数，互联网这么发达，打个字搜下不行吗", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/comment/p6cxb6u/", time: "1 小时前" },
      { kind: "comment", platform: "Reddit · r/China_irl", author: "Silent_Climate7869", text: "报道肯定有报道，只是严格受控谁可以报谁不能报，要怎么报。这种级别的灾难本不应该靠搜，而是铺天盖地，想不知道不了解都不行的那种报道密度。可以参考当年汶川地震的报道力度。", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/comment/p6cz9wh/", time: "49 分钟前" },
      { kind: "comment", platform: "Reddit · r/China_irl", author: "Present-Farmer-404", text: "極權國家別想看災難實況了，看尼泊爾那邊的救災實況吧。搞笑的是，明明是尼泊爾的救災影片，下面一堆感謝解放軍的。信息繭房這麼嚴重嗎?", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/comment/p6cuzet/", time: "1 小时前" },
      { kind: "comment", platform: "Reddit · r/China_irl", author: "Affectionate_Fox4371", text: "中国一侧只有一个海关，在峡谷深处，住平民的镇子是离海关很远的平坦地区，没有受灾。现在的问题是峡谷都进不去，路面全被泥石流覆盖，直升机进去都没降落的地方，总不能直接降落到尼泊尔一侧吧。", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/comment/p6cx0l9/", time: "1 小时前" },
    ],
    platformSignals: [
      { kind: "discussion", platform: "Reddit", label: "r/China_irl 公开讨论帖", text: "西藏那边怎么没有新消息了", href: "https://www.reddit.com/r/China_irl/comments/1w0dspz/%E8%A5%BF%E8%97%8F%E9%82%A3%E8%BE%B9%E6%80%8E%E4%B9%88%E6%B2%A1%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E4%BA%86/", engagement: "页面可见多条 +1 至 +8 票" },
      { kind: "topic", platform: "微博", label: "#西藏吉隆泥石流#话题页", text: "#西藏吉隆泥石流#", href: "https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%23" },
    ],
  },
  {
    title: "暴雨黄色预警继续：14 省区有大到暴雨，江西、湖南和广西局地可能出现特大暴雨",
    topic: "暴雨预警",
    section: "今日焦点",
    format: "visual",
    source: "中央气象台／中国天气网／新华网",
    sourceType: "暴雨黄色预警／防御指南",
    sourceKind: "official",
    time: "8 月 29 日 06:00—07:40",
    href: "https://www.news.cn/politics/20260829/51762a63f688436f9935ab8228009f0e/c.html",
    discovery: "百度热搜：暴雨黄色预警",
    discoveryHref: "https://www.baidu.com/s?wd=%E6%9A%B4%E9%9B%A8%E9%BB%84%E8%89%B2%E9%A2%84%E8%AD%A6",
    labels: ["今日行动项", "强对流", "天气图"],
    image: "https://www.news.cn/politics/20260829/51762a63f688436f9935ab8228009f0e/2026082951762a63f688436f9935ab8228009f0e_20260829d797df6de74144f1a50ed2ac98320958.jpeg",
    imageAlt: "8 月 29 日中国暴雨预警影响区域示意图",
    imageCaption: "8 月 29 日暴雨预警影响区域图。图片来源：中国天气网／新华网",
    visualStat: { label: "预警时段", value: "08:00—次日 08:00", note: "江西西部、湖南南部、广西东北部局地累计降雨可能达 250—270 毫米" },
    details: [
      "中央气象台 6 时继续发布暴雨黄色预警，影响范围包括江西、湖北、湖南、广西、广东、四川、贵州、内蒙古、黑龙江、安徽、云南、福建、海南和台湾岛部分地区。局地还伴有短时强降水和雷暴大风。",
      "预警给出的不是‘会不会下雨’的抽象答案，而是切断低洼地带危险室外电源、暂停空旷户外作业、转移危房居民、检查排水系统等具体动作。",
    ],
  },
  {
    title: "政治局会议研究部署吉隆泥石流抢险救援：重点落在核清人数、科学施救和防范次生灾害",
    section: "今日焦点",
    format: "standard",
    source: "新华社／人民日报",
    sourceType: "公共事务／救灾部署",
    sourceKind: "official",
    time: "8 月 28 日",
    href: "https://cpc.people.com.cn/n1/2026/0829/c64387-40788442.html",
    labels: ["公共事务", "救灾部署", "灾害链"],
    details: [
      "8 月 28 日，中共中央政治局召开会议，研究部署西藏日喀则市吉隆县泥石流灾害抢险救援工作。公开报道把任务拆成几条并行线：核清失联受灾人数、全力搜救、及时转移受威胁群众、做好通信和道路保障，并把堰塞湖、山体和雨水情作为次生灾害防线。",
    ],
  },
  {
    title: "台风之外，南方强降雨也在扩大：天气预警从一张地图变成各地的临时日程表",
    topic: "暴雨预警",
    section: "今日焦点",
    format: "standard",
    source: "中央气象台／中国天气网",
    sourceType: "官方预警／平台发现入口",
    sourceKind: "official",
    time: "8 月 29 日",
    href: "https://www.news.cn/politics/20260829/51762a63f688436f9935ab8228009f0e/c.html",
    discovery: "抖音搜索：暴雨预警",
    discoveryHref: "https://www.douyin.com/search/%E6%9A%B4%E9%9B%A8%E9%A2%84%E8%AD%A6",
    labels: ["同题来源并列", "1 条官方消息＋2 个发现入口", "热度不等于风险"],
    details: ["这里并列中央气象台的预警原文与两个公开平台入口。抖音搜索页和天气网站只用于继续寻找具体现场或地区信息，不把聚合页本身写成发言。"],
    voices: [
      { kind: "official", platform: "中国天气网", author: "中央气象台暴雨黄色预警", text: "公布 14 省区的影响范围、降雨级别和防御指南。", href: "https://www.news.cn/politics/20260829/51762a63f688436f9935ab8228009f0e/c.html", time: "8 月 29 日 06:00" },
    ],
    platformSignals: [
      { kind: "search", platform: "抖音", label: "暴雨预警公开搜索页", text: "暴雨预警", href: "https://www.douyin.com/search/%E6%9A%B4%E9%9B%A8%E9%A2%84%E8%AD%A6" },
      { kind: "search", platform: "中国天气网", label: "公开预警页面", text: "暴雨黄色预警", href: "https://www.weather.com.cn/" },
    ],
  },
  {
    title: "房地产政策迎来一组新规则：现房销售、主办银行制和最长 40 年住房贷款同时出现",
    section: "世界与新知",
    format: "standard",
    source: "中国人民银行／金融监管总局／央视网",
    sourceType: "房地产信贷管理／销售制度",
    sourceKind: "official",
    time: "8 月 28 日 19:29",
    href: "https://jingji.cctv.cn/2026/08/28/ARTIZfTzexl1KJKgg72odyb2260828.shtml",
    discovery: "百度热搜：个人住房贷款期限最长 40 年",
    discoveryHref: "https://www.baidu.com/s?wd=%E4%B8%AA%E4%BA%BA%E4%BD%8F%E6%88%BF%E8%B4%B7%E6%AC%BE%E6%9C%9F%E9%99%90%E6%9C%80%E9%95%BF40%E5%B9%B4",
    labels: ["商业经济", "制度调整", "购房者权益"],
    image: "https://n.sinaimg.cn/spider20260829/209/w7873h1936/20260829/aa2b-aa4e8e7c059c156a81fb1d0bc8a25e0a.png",
    imageAlt: "房地产信贷政策新闻中的数据与建筑资料图",
    imageCaption: "房地产政策组合拳资料图。图片来源：新华财经／新浪财经",
    details: [
      "央行、金融监管总局 28 日发布房地产信贷管理意见：房地产开发贷款实行主办银行制，预售项目最长 5 年、现房项目最长 7 年；个人住房贷款期限最长不超过 40 年。央视报道还提到，现房销售的贷款应在销售备案后发放，预售项目则严格在竣工备案后发放。",
      "同日，多部门推进商品住房现房销售和房地产企业多种融资制度改革。规则变化指向的是项目全周期资金管理与交付风险，但具体执行仍取决于城市购房条件、银行评估和项目实际情况。",
    ],
    relatedSources: [{ label: "新华社：改革完善房地产信贷管理", href: "https://www.xinhuanet.com/20260828/36dc5659375e407abd8e01a281305df5/c.html" }],
  },
  {
    title: "数博会把‘词元’放进现场：机器人跳苗族舞，无人机踢足球，数据开始寻找应用场景",
    topic: "数博会与数据应用",
    section: "世界与新知",
    format: "visual",
    source: "央视新闻／国家数据局",
    sourceType: "产业展会／数据要素应用",
    sourceKind: "media-report",
    time: "8 月 28 日—29 日 00:40",
    href: "https://news.cctv.com/2026/08/29/ARTI5I0LJevT0FY5TQDmHHYp260828.shtml",
    discovery: "头条搜索：2026 中国国际大数据产业博览会",
    discoveryHref: "https://so.toutiao.com/search?keyword=2026%E4%B8%AD%E5%9B%BD%E5%9B%BD%E9%99%85%E5%A4%A7%E6%95%B0%E6%8D%AE%E4%BA%A7%E4%B8%9A%E5%8D%9A%E8%A7%88%E4%BC%9A",
    labels: ["科技现场", "具身智能", "数据集市"],
    image: "https://www3.xinhuanet.com/tech/20260827/136847e5df86442c9cb895910179c15a/20260827136847e5df86442c9cb895910179c15a_416fb26bac9d4f0da616776da5ac8f20.JPG",
    imageAlt: "人形机器人参加公开活动和比赛的现场画面",
    imageCaption: "人形机器人展示现场。图片来源：新华社",
    visualStat: { label: "展会公开信息", value: "1.6 万 / 372 / 253", note: "注册参会嘉宾超 1.6 万名；372 家中外企业参展；数据集市汇聚 253 个数据产品" },
    details: [
      "贵阳数博会以‘词元——数据要素价值释放新路径’为主题。央视镜头里的现场并不只是服务器和图表：全自动驾驶接驳车、人形机器人主持、机器狗、无人机足球和机器人饮品，把数据与模型的应用变成可被围观和体验的展台。",
      "国家数据局公布的‘数据集市’信息则更偏产业端：84 家企业路演、95 家企业参展，覆盖具身智能、医疗健康、智慧农业、金融科技、智能制造和智慧城市。",
    ],
  },
  {
    title: "数据产业的三种现场语言：展台讲体验，数据局讲供需，旁观者问‘数据怎样变成价值’",
    topic: "数博会与数据应用",
    section: "世界与新知",
    format: "standard",
    source: "央视新闻／国家数据局",
    sourceType: "展会报道／机构信息",
    sourceKind: "media-report",
    time: "8 月 27 日—29 日",
    href: "https://www.nda.gov.cn/sjj/jgsz/jld/xb/xbldhd/0828/20260828230551560515285_pc.html",
    labels: ["同题来源并列", "2 条直接来源", "不把展会等同落地"],
    image: "https://www3.xinhuanet.com/tech/20260827/136847e5df86442c9cb895910179c15a/20260827136847e5df86442c9cb895910179c15a_7bb663840e0e43cb8190ef682c68f72e.jpg",
    imageAlt: "机器人在科技展会现场进行动态展示",
    imageCaption: "展会机器人展示画面。图片来源：新华社",
    details: ["这里并列央视现场报道与国家数据局活动信息：前者展示可见的机器人和自动驾驶，后者给出数据产品与应用场景数字。头条搜索页只保留为继续发现入口。"],
    voices: [
      { kind: "official", platform: "央视新闻", author: "展会现场报道", text: "把机器人、自动驾驶和 AIGC 漫剧作为观众可以直接体验的‘智能融入生活’场景。", href: "https://news.cctv.com/2026/08/29/ARTI5I0LJevT0FY5TQDmHHYp260828.shtml", time: "8 月 29 日" },
      { kind: "official", platform: "国家数据局", author: "数据集市活动信息", text: "公布 253 个数据产品、139 项技术与设施能力、219 个应用场景，强调供需精准对接。", href: "https://www.nda.gov.cn/sjj/jgsz/jld/xb/xbldhd/0828/20260828230551560515285_pc.html", time: "8 月 28 日" },
    ],
    platformSignals: [
      { kind: "search", platform: "头条", label: "数博会公开搜索页", text: "2026 中国国际大数据产业博览会", href: "https://so.toutiao.com/search?keyword=2026%E4%B8%AD%E5%9B%BD%E5%9B%BD%E9%99%85%E5%A4%A7%E6%95%B0%E6%8D%AE%E4%BA%A7%E4%B8%9A%E5%8D%9A%E8%A7%88%E4%BC%9A" },
    ],
  },
  {
    title: "美国法官判定五角大楼将 Anthropic 列为供应链风险违法：AI 安全边界进入采购诉讼",
    topic: "Anthropic 采购诉讼",
    section: "世界与新知",
    format: "feature",
    source: "The Guardian／Reuters／AFP",
    sourceType: "美国诉讼／AI 治理",
    sourceKind: "media-report",
    time: "8 月 28 日",
    href: "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai",
    discovery: "Google 新闻：Anthropic Pentagon ban ruling",
    discoveryHref: "https://news.google.com/search?q=Anthropic%20Pentagon%20ban%20ruling%202026",
    labels: ["人工智能", "法院判决", "军用 AI"],
    image: "https://i.guim.co.uk/img/media/cbc273f8b06b2ec975a7d6f57af674709dc1d9d0/0_0_4000_2666/master/4000.jpg?crop=none&dpr=1&s=none&width=1200",
    imageAlt: "Anthropic 标志的新闻配图",
    imageCaption: "Anthropic 标志。图片来源：Dado Ruvić／Reuters via The Guardian",
    details: [
      "The Guardian 报道，法官 Rita Lin 认定特朗普政府把 Anthropic 定性为‘供应链风险’并要求国防部门停止使用其工具的做法违法，禁止相关机构执行该命令，并推翻这一风险 designation。政府仍可能上诉，另一宗华盛顿特区诉讼也尚未结案。",
      "争议的起点是 Anthropic 拒绝允许 Claude 被用于完全自主的致命武器或国内大规模监控。这个案子把模型公司的安全立场、政府采购权和第一修正案权利放在了同一张法庭桌上。",
    ],
    recommendation: "原文把 59 页裁决中的采购法、言论权和 AI 安全冲突串起来，也交代了判决并不等于所有法律争议已经结束。",
  },
  {
    title: "Anthropic 案的三方立场：公司谈安全，五角大楼谈行动自由，法官谈政府不能用国家安全一笔带过",
    topic: "Anthropic 采购诉讼",
    section: "世界与新知",
    format: "feature",
    source: "The Guardian／Anthropic／美国国防部门公开文件",
    sourceType: "判决摘录／机构观点",
    sourceKind: "media-report",
    time: "8 月 28 日",
    href: "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai",
    labels: ["同题来源摘录", "3 条出处内的不同立场", "观点仅代表发布者"],
    details: ["同一场诉讼里，‘AI 能不能用于战争’不是唯一问题，‘政府能否因公司拒绝某些用途而惩罚它’也成为核心。下面把原报道中的三种说法并排保留。"],
    voices: [
      { kind: "reported", platform: "The Guardian", author: "Anthropic 发言人（报道转述）", text: "欢迎法院认定供应链风险 designation 违法。", href: "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai", time: "8 月 28 日" },
      { kind: "reported", platform: "The Guardian", author: "五角大楼立场（报道转述）", text: "私人公司不应限制军事行动，国防部门有权选择自己使用的 AI 供应商。", href: "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai", time: "8 月 28 日" },
      { kind: "ruling", platform: "美国联邦法院", author: "法官 Rita Lin", text: "裁决认为，空泛援引国家安全不能成为惩罚和报复政府批评者的空白支票。", href: "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai", time: "8 月 28 日" },
    ],
  },
  {
    title: "挪威国王哈拉尔五世去世，享年 89 岁：一位把王宫打开、用‘普通感’维系公众连接的君主",
    topic: "哈拉尔五世与挪威悼念",
    section: "世界与新知",
    format: "feature",
    source: "The Guardian／挪威王室／Reuters",
    sourceType: "人物／讣告",
    sourceKind: "media-report",
    time: "8 月 28 日—29 日",
    href: "https://www.theguardian.com/world/2026/aug/28/king-harald-v-of-norway-obituary",
    discovery: "Google 新闻：King Harald V dies",
    discoveryHref: "https://news.google.com/search?q=King%20Harald%20V%20dies%202026",
    labels: ["人物", "欧洲", "公共记忆"],
    image: "https://i.guim.co.uk/img/media/28f1b50708ee3d49c768ab78510ed7d202dbb337/257_7_1182_945/master/1182.jpg?crop=none&dpr=1&s=none&width=1200",
    imageAlt: "挪威国王哈拉尔五世的肖像资料图",
    imageCaption: "哈拉尔五世资料照。图片来源：Francisco Seco／AP via The Guardian",
    details: [
      "哈拉尔五世 8 月 28 日在奥斯陆大学医院去世，享年 89 岁；其子哈康继位为哈康八世。The Guardian 的讣告回看了他的三十多年统治：他支持妻子索尼娅这位平民出身者，也推动王宫和王室庄园更开放地面向公众。",
      "他的公共形象并不靠宏大仪式建立，而是靠帆船运动、朴素生活和危机时刻的讲话。2011 年挪威枪击案后，他谈到自由比恐惧更强；这也是许多挪威人今天称他为‘祖父般人物’的背景。",
    ],
    recommendation: "原文看点是把王室新闻写成一段社会史：一个象征性职位如何通过婚姻、开放和危机回应，慢慢改变公众对君主制的感受。",
  },
  {
    title: "从‘祖父般人物’到继承人：奥斯陆民众在王宫外留下鲜花，也把争议留在新王朝门口",
    topic: "哈拉尔五世与挪威悼念",
    section: "人物、自然与轻读",
    format: "visual",
    source: "NRK via Reuters／The Guardian 视频／奥斯陆公众",
    sourceType: "现场视频／报道转述",
    sourceKind: "media-report",
    time: "8 月 28 日",
    href: "https://www.theguardian.com/world/video/2026/aug/28/norwegians-pay-tribute-to-grandfather-figure-king-harald-v-video",
    labels: ["现场画面", "报道转述", "悼念与争议并存"],
    image: "https://i.guim.co.uk/img/media/94b2d7b5dd06187b4592d3928172332f537a7acb/0_0_8071_4632/master/8071.jpg?crop=none&dpr=1&s=none&width=1200",
    imageAlt: "人们在奥斯陆王宫外悼念哈拉尔五世",
    imageCaption: "民众在奥斯陆王宫外献花。图片来源：Rune Hellestad／Getty via The Guardian",
    details: ["悼念现场的语言比讣告更短，也更私人：有人记得他像家里的长辈，有人把国家哀悼与王室近年的争议同时提起。"],
    voices: [
      { kind: "reported", platform: "NRK via Reuters", author: "奥斯陆王宫外受访者（视频报道转述）", text: "把哈拉尔描述成让所有人感到‘在家里’的祖父般人物。", href: "https://www.theguardian.com/world/video/2026/aug/28/norwegians-pay-tribute-to-grandfather-figure-king-harald-v-video", time: "8 月 28 日" },
      { kind: "reported", platform: "The Guardian", author: "欧洲王室报道", text: "记录哈康八世继位，也提醒公众支持率、王室家人争议和新王朝的现实会继续存在。", href: "https://www.theguardian.com/world/2026/aug/28/norway-king-harald-dies-leaving-stormy-succession-mette-marit-crown-princesss-epstein-links", time: "8 月 28 日" },
    ],
  },
  {
    title: "心脏病的统一定义首次改写：三类更常见于女性的心梗，不再被当成‘不够严重’",
    section: "值得细读",
    format: "visual",
    source: "The Guardian／欧洲心脏病学会",
    sourceType: "医学指南／女性健康",
    sourceKind: "media-report",
    time: "8 月 28 日",
    href: "https://www.theguardian.com/society/2026/aug/28/doctors-care-revolution-agree-first-universal-definition-heart-attack",
    discovery: "Google 新闻：universal definition of heart attack women",
    discoveryHref: "https://news.google.com/search?q=universal%20definition%20of%20heart%20attack%20women%202026",
    labels: ["医学研究", "性别差异", "诊断标准"],
    image: "https://i.guim.co.uk/img/media/1b7b639f4480d1af6b1e5b3a1d44bcf2820d2975/436_0_4680_3744/master/4680.jpg?crop=none&dpr=1&s=none&width=1200",
    imageAlt: "女性患者手指夹着心率监测设备的医学资料图",
    imageCaption: "心率监测资料图。图片来源：David Sillitoe／The Guardian",
    visualStat: { label: "新指南关注", value: "3 类 / 10 倍 / 更低阈值", note: "三类心梗在女性中最高可多见 10 倍；女性 troponin 诊断阈值将被单独考虑" },
    details: [
      "欧洲心脏病学会年会公布的新指南，首次给出统一的心肌梗死定义，并把冠状动脉痉挛、冠状动脉栓塞和自发性冠状动脉夹层等类型提升到更重要的位置。报道指出，这些情况更常见于女性，却曾更容易被漏诊或延误。",
      "变化也包括按性别设置 troponin 诊断阈值。它不是说女性症状‘更特殊’，而是承认疾病机制、检测水平和治疗路径存在差异。医学报道仍应被当作指南变化的介绍，不替个人诊断。",
    ],
  },
  {
    title: "木糖醇研究引发新争论：高血液水平与心梗、中风风险相关，但观察性研究不能直接等于因果",
    section: "值得细读",
    format: "feature",
    source: "The Guardian／European Society of Cardiology",
    sourceType: "医学研究／健康消费",
    sourceKind: "media-report",
    time: "8 月 28 日",
    href: "https://www.theguardian.com/society/2026/aug/28/sweetener-xylitol-used-in-chewing-gum-and-jam-linked-to-strokes-and-heart-attacks-study",
    labels: ["研究解读", "食品添加物", "谨慎阅读"],
    image: "https://i.guim.co.uk/img/media/0e41fcbdbcb187200927d6a13ce7e04594583c76/137_171_4808_3847/master/4808.jpg?crop=none&dpr=1&s=none&width=1200",
    imageAlt: "吐司和果酱的食品资料图",
    imageCaption: "木糖醇常见食品场景资料图。图片来源：Martin Lee／Alamy via The Guardian",
    details: [
      "研究者比较了 1.77 万人的血液木糖醇水平，最高四分位人群在六年内发生死亡、心梗或中风的可能性比最低四分位高 57%；研究还观察到更长期的相关性。木糖醇常见于口香糖、牙膏、果酱、酸奶和冰淇淋等产品。",
      "原报道同时写出限制：这是观察性研究，相关关系难以直接推断因果；研究作者和未参与研究的专家都呼吁继续研究。它更适合提醒‘低糖’并不自动等于‘长期风险已经被充分了解’，不适合被改写成恐慌式结论。",
    ],
    recommendation: "原文看点是把数字、机制假设和研究限制放在一起，读者能看到‘值得关注’与‘尚不能下定论’之间的距离。",
  },
  {
    title: "日本一年捕杀 1.4 万头熊，冲突却没有因此消失：一场由森林食物、人口流失和保护成功共同造成的难题",
    section: "值得细读",
    format: "feature",
    source: "The Guardian／日本环境省／IUCN 专家",
    sourceType: "自然保护／人与野生动物冲突",
    sourceKind: "media-report",
    time: "8 月 27 日—29 日更新",
    href: "https://www.theguardian.com/environment/2026/aug/27/bears-killed-13-people-japan-14000-bears",
    discovery: "Google 新闻：Japan killed 14000 bears",
    discoveryHref: "https://news.google.com/search?q=Japan%20killed%2014000%20bears%202026",
    labels: ["长期阅读", "人与自然", "政策争论"],
    image: "https://i.guim.co.uk/img/media/318ac06cf0ab6dbe12fd41b454bc3f5e346ff9fa/0_0_4746_3164/master/4746.jpg?crop=none&dpr=1&s=none&width=1200",
    imageAlt: "日本亚洲黑熊的自然保护资料图",
    imageCaption: "亚洲黑熊资料图。图片来源：petesphotography／Getty via The Guardian",
    details: [
      "The Guardian 的报道写道，2025 年 4 月至 2026 年 1 月，日本捕杀熊超过 1.4 万头，其中约 1.2 万头为亚洲黑熊；此前一年熊袭击造成 13 人死亡，森林坚果歉收、乡村人口减少和废弃果园都把熊更频繁地推向人类居住地。",
      "争论不只是‘该不该捕杀’，还包括日本到底有多少熊、数据是否足够准确，以及驱赶、围栏、清理果树、改善食物条件等共存措施能否被长期执行。报道采访的保护人士认为，单纯减少数量可能把一场管理危机变成区域性灭绝风险。",
    ],
    recommendation: "原文看点：它没有把熊写成单一的‘危险动物’，而是追问一项保护成功如何在气候与人口变化中反过来制造治理压力。",
  },
  {
    title: "斯诺克武汉公开赛的另一种热度：赵心童即时世界第一，中国选手包揽四强成为讨论背景",
    section: "值得细读",
    format: "standard",
    source: "新华社／世界斯诺克巡回赛",
    sourceType: "体育赛事／选手回应",
    sourceKind: "media-report",
    time: "8 月 27 日—28 日",
    href: "https://www.news.cn/sports/20260827/c217e386e7a845b4be86ce325e19f6c4/c.html",
    discovery: "微博热搜：#赵心童登顶世界第一#",
    discoveryHref: "https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23",
    labels: ["体育", "中国选手", "赛事现场"],
    image: "https://www.news.cn/sports/20260827/c217e386e7a845b4be86ce325e19f6c4/20260827c217e386e7a845b4be86ce325e19f6c4_20260827a059b399970540d48ea2aa6eb171ecbc.jpeg",
    imageAlt: "赵心童参加世界斯诺克武汉公开赛的比赛画面",
    imageCaption: "赵心童在武汉公开赛比赛中。图片来源：伍志尊／新华社",
    details: [
      "赵心童在武汉公开赛四分之一决赛以 5:1 击败尼尔·罗伯逊，凭借晋级四强的成绩即时升至世界第一，成为继丁俊晖之后第二位登上这一位置的中国斯诺克选手。新华社随后报道，中国选手赵心童、肖国栋、常冰玉晋级四强。",
      "热搜的情绪很集中，但比赛本身更耐读：排名是一个即时结果，球员如何处理领先、失误和下一场比赛，才是赛季持续性的部分。",
    ],
  },
  {
    title: "道路交通安全法迎来首次系统性大修：自动驾驶、电动自行车和‘开门杀’一起进入立法视野",
    section: "世界与新知",
    format: "visual",
    source: "新华社／全国人大常委会公开信息",
    sourceType: "法律修订／交通安全",
    sourceKind: "official",
    time: "8 月 25 日—29 日",
    href: "https://www.xinhuanet.com/politics/20260826/0ad7823966864dddb1335e45995228c5/c.html",
    discovery: "百度热搜：道路交通安全法首次系统性大修",
    discoveryHref: "https://www.baidu.com/s?wd=%E9%81%93%E8%B7%AF%E4%BA%A4%E9%80%9A%E5%AE%89%E5%85%A8%E6%B3%95%E9%A6%96%E6%AC%A1%E7%B3%BB%E7%BB%9F%E6%80%A7%E5%A4%A7%E4%BF%AE",
    labels: ["公共规则", "自动驾驶", "九图解读"],
    image: "https://www.news.cn/politics/20260826/f68dd6bb8f694e9a82802a8c63f6ea8c/20260826f68dd6bb8f694e9a82802a8c63f6ea8c_20260826b5cfc58b9081c4fb2b7ed2a84e5c5c4d1.jpg",
    imageAlt: "道路交通安全法修订草案要点图解",
    imageCaption: "道路交通安全法修订草案九图解读。图片来源：新华社",
    visualStat: { label: "截至 2026 年 6 月底", value: "4.76 亿 / 4897 万 / 5.67 亿", note: "机动车保有量、汽车新能源汽车保有量、机动车驾驶人数量" },
    details: [
      "道路交通安全法修订草案 8 月 25 日提请初次审议。新华社把它概括为现行法律自 2004 年施行以来的首次系统性大修，新增或强化了自动驾驶汽车特别规定，并关注电动自行车限速、盲驾、醉驾、飙车、开门杀和暴走团等现实问题。",
      "它面对的是一个更复杂的交通参与者结构：车辆更多、辅助驾驶更普遍、自动驾驶开始进入特定区域。法律文本仍处于审议阶段，‘纳入法治轨道’不等于所有细则已经落地。",
    ],
  },
  {
    title: "汽油、柴油价格上调：每吨分别上涨 375 元和 360 元，92 号汽油每升约涨 0.3 元",
    section: "世界与新知",
    format: "brief",
    source: "国家发展改革委／新华社",
    sourceType: "能源价格／市场机制",
    sourceKind: "official",
    time: "8 月 28 日 24:00 起",
    href: "https://www.news.cn/20260828/b07ca80c21664eb4b1cd6eecdfea9d45/c.html",
    labels: ["生活成本", "能源", "价格机制"],
    details: ["国家发展改革委宣布，自 8 月 28 日 24 时起，国内汽油、柴油标准品最高零售价格每吨分别上调 375 元和 360 元，折合 92 号汽油、0 号柴油每升分别上涨约 0.3 元和 0.31 元。调价依据是前 10 个工作日一揽子国际原油均价变化，而不是单日油价。"],
  },
  {
    title: "英国人开始多买豆子：上半年豆类、扁豆和豆制品销量增长 7.3%，便宜与高纤维同时成为理由",
    section: "人物、自然与轻读",
    format: "feature",
    source: "The Guardian／NielsenIQ／Madre Brava",
    sourceType: "消费观察／饮食变化",
    sourceKind: "media-report",
    time: "8 月 28 日—29 日",
    href: "https://www.theguardian.com/food/2026/aug/28/bean-lentil-sales-british-save-money-improve-diet",
    labels: ["消费趋势", "食物", "轻读"],
    image: "https://i.guim.co.uk/img/media/2b1acdc405e9351633411cda940ca3de116cedc5/172_0_5600_4480/master/5600.jpg?crop=none&dpr=1&s=none&width=1200",
    imageAlt: "包装好的豆类、扁豆和豆制品资料图",
    imageCaption: "豆类货架资料图。图片来源：Gareth Phillips／The Guardian",
    details: [
      "The Guardian 根据 NielsenIQ 数据报道，英国 2026 年上半年豆类、扁豆、豆腐和豆豉等销量同比增长 7.3%，便宜的干扁豆增长尤其明显；罐装和玻璃罐装黄油豆销量增长 30.3%，而部分植物肉销量下降 4.3%。",
      "这更像是一种‘把健康话语翻译成购物决定’的生活变化：在肉价和生活成本压力下，消费者没有放弃植物蛋白，而是转向更简单、更高纤维、涨价相对慢的食材。",
    ],
    recommendation: "原文看点：一组超市数据背后，既有通胀，也有社交媒体食谱、品牌策略和‘买得起的健康’这件小事。",
  },
  {
    title: "日本消防部门提醒：急救人员脱下的鞋不要替他们摆正，三十秒也可能影响转运",
    section: "人物、自然与轻读",
    format: "social",
    source: "The Guardian／金泽市消防局 Instagram／TBS News Dig",
    sourceType: "公共服务／平台热议",
    sourceKind: "media-report",
    time: "8 月 5 日发布，8 月 28—29 日报道",
    href: "https://www.theguardian.com/world/2026/aug/28/never-tidy-paramedics-shoes-japan-custom-etiquette",
    discovery: "Instagram：Kanazawa Fire Department 公开视频",
    discoveryHref: "https://www.instagram.com/kanazawa_syoubou/",
    labels: ["轻内容", "公共服务", "最后一条"],
    image: "https://i.guim.co.uk/img/media/80d66ae2fca0fb24b2fbd3ef0bd666ed36ced706/0_0_5906_4724/master/5906.jpg?crop=none&dpr=1&s=none&width=1200",
    imageAlt: "日本消防员演示急救人员在门口摆放鞋子的位置",
    imageCaption: "消防员演示急救鞋的摆放位置。图片来源：金泽市消防局 Instagram via The Guardian",
    details: ["金泽市消防部门发布视频，提醒居民不要在急救人员进入住宅后把鞋子重新摆正：担架由三人抬出时，鞋子的位置是按各自角色预先安排的，改动可能让他们穿鞋、转运慢约 30 秒。视频获得超过 50 万次观看，一条‘急救时就让他们穿鞋进来’的评论获得超过 800 个赞。"],
    voices: [
      { kind: "post", platform: "金泽市消防局 Instagram", author: "kanazawa_syoubou", text: "公开视频演示急救人员如何按角色把鞋留在门口，以便三名担架搬运者直接穿回。", href: "https://www.instagram.com/p/DbqGfGfox3f/", time: "8 月 5 日", engagement: "视频累计观看超过 50 万次（报道可见）" },
      { kind: "reported", platform: "The Guardian", author: "Instagram 评论者（报道转引，未具名）", text: "It’s an emergency. I would just tell them: ‘Please step inside with your shoes on!’", href: "https://www.theguardian.com/world/2026/aug/28/never-tidy-paramedics-shoes-japan-custom-etiquette", engagement: "页面可见超过 800 个赞" },
    ],
  },
];

export function validateBriefingItems(items: BriefingItem[]) {
  for (const item of items) {
    if (!item.sourceKind || !sourceKindLabels[item.sourceKind]) {
      throw new Error(`条目缺少来源性质：${item.title}`);
    }
    for (const voice of item.voices ?? []) {
      if (!voice.kind || !voiceKindLabels[voice.kind]) {
        throw new Error(`观点缺少来源性质：${item.title}`);
      }
      if (!voice.href) {
        throw new Error(`观点缺少出处链接：${voice.author}`);
      }
      if ((voice.kind === "post" || voice.kind === "comment") && /(?:search|weibo\?q=|douyin\.com\/search|toutiao\.com\/search)/i.test(voice.href)) {
        throw new Error(`原帖或评论不能使用搜索／话题页链接：${voice.author}`);
      }
    }
    for (const signal of item.platformSignals ?? []) {
      if (!platformSignalKindLabels[signal.kind]) {
        throw new Error(`平台线索缺少来源性质：${item.title}`);
      }
      if (!signal.href) {
        throw new Error(`平台线索缺少链接：${signal.label}`);
      }
    }
  }
}

validateBriefingItems(briefingItems);
