export type BriefingItem = {
  title: string;
  category: string;
  source: string;
  sourceType: string;
  kind: "新闻" | "观点" | "深读";
  time: string;
  href: string;
  details: string[];
  image?: string;
  imageAlt?: string;
};

export const briefingMeta = {
  label: "哈萨克斯坦 · 乌兹别克斯坦",
  headline: "已更新",
  updatedAt: "8 月 24 日 · 14:31",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "哈萨克斯坦完成新一院制库鲁尔泰议会选举",
    category: "政治与社会",
    source: "自由欧洲电台／自由电台 RFE/RL",
    sourceType: "国际媒体",
    kind: "新闻",
    time: "8 月 23 日",
    href: "https://www.rferl.org/a/33836475.html",
    image: "https://gdb.rferl.org/e03de23b-4f10-4cc3-a1a7-53461c38b04d_cx0_cy8_cw0_w250_r1_s.jpg",
    imageAlt: "阿拉木图一处投票站的选民",
    details: [
      "RFE/RL 报道称，哈萨克斯坦在 8 月 23 日举行新一院制库鲁尔泰议会选举；报道将这次投票置于该国宪法调整之后的政治进程中。",
      "报道称，选民名册约有 1,260 万人，中央选举委员会称截至当地时间 18 时投票率为 72.15%，初步结果预计于 8 月 24 日公布。",
      "该报道还列出参选的获准政党、反对派团体的参选处境，以及总统在投票现场就后续政府调整所作的公开表态。",
    ],
  },
  {
    title: "S&P 将哈萨克斯坦主权评级上调至 BBB，展望稳定",
    category: "经济与市场",
    source: "哈萨克斯坦国家银行",
    sourceType: "机构发布",
    kind: "新闻",
    time: "8 月 22 日",
    href: "https://nationalbank.kz/en/news/informacionnye-soobshcheniya/20120",
    details: [
      "哈萨克斯坦国家银行发布消息称，S&P Global Ratings 将该国主权评级上调至 BBB，展望为“稳定”。",
      "发布稿援引 S&P 对外汇储备、财政缓冲和非石油财政赤字预期的说明，并提到 2026 年 7 月通胀降至 10.2%。",
      "国家银行页面称，S&P 预计哈萨克斯坦 2026 年实际 GDP 增长 5.1%，中期增速约为 4%。",
    ],
  },
  {
    title: "巴甫洛达尔机场跑道改造后恢复定期航班",
    category: "交通与物流",
    source: "哈萨克斯坦民航管理局",
    sourceType: "机构发布",
    kind: "新闻",
    time: "8 月 22 日",
    href: "https://caa.gov.kz/en/blog/post/regular-air-service-resumes-pavlodar-following-runway-reconstruction",
    details: [
      "哈萨克斯坦民航管理局称，巴甫洛达尔机场跑道重建完工后，阿斯塔纳—巴甫洛达尔—阿斯塔纳航线已恢复运行。",
      "该机构称跑道由 45 米加宽至 60 米；补贴航线计划每周运行 4 班，单程票价为 15,000 坚戈。",
      "页面还列出 9 月起的后续安排，包括 FlyArystan 恢复巴甫洛达尔—阿拉木图日常航班，以及 S7 计划运营巴甫洛达尔—新西伯利亚航线。",
    ],
  },
  {
    title: "阿尔卡雷克在停航 30 年后恢复定期航空服务",
    category: "交通与物流",
    source: "哈萨克斯坦交通部",
    sourceType: "机构发布",
    kind: "新闻",
    time: "8 月 22 日",
    href: "https://caa.gov.kz/en/blog/post/regular-air-service-resumes-arkalyk-after-30-year-hiatus",
    details: [
      "哈萨克斯坦交通部门发布消息称，阿尔卡雷克机场在完成相关准备后恢复定期航空服务，这是当地中断约 30 年后的复航。",
      "公开发布的信息列出自 8 月 22 日起开通的阿斯塔纳—阿尔卡雷克、阿拉木图—阿尔卡雷克及科斯塔奈—阿尔卡雷克航线安排。",
      "页面显示，阿斯塔纳和科斯塔奈航线单程票价为 10,000 坚戈，阿拉木图航线单程票价为 25,000 坚戈；各航线计划每周两班。",
    ],
  },
  {
    title: "哈萨克斯坦总理与樟宜机场集团讨论阿斯塔纳航空枢纽",
    category: "交通与投资",
    source: "哈萨克斯坦民航管理局",
    sourceType: "机构发布",
    kind: "新闻",
    time: "8 月 21 日",
    href: "https://caa.gov.kz/en/blog/post/prime-minister-discusses-prospects-developing-astana-aviation-hub-changi-airport-group",
    details: [
      "哈萨克斯坦民航管理局称，总理别克捷诺夫与新加坡樟宜机场集团管理层讨论将阿斯塔纳发展为航空中心的前景。",
      "发布稿提到，双方讨论国际航线网络、客运量、机队规模和欧亚之间中转潜力等民航发展情况。",
      "页面称，樟宜机场集团介绍了其运营经验和国际项目，双方表示将继续就合作方向保持对话。",
    ],
  },
  {
    title: "乌兹别克斯坦公布“新塔什干”建设规模与交通设施规划",
    category: "城市与基础设施",
    source: "乌兹别克斯坦总统网站",
    sourceType: "机构发布",
    kind: "新闻",
    time: "8 月 23 日",
    href: "https://president.uz/en/lists/view/9529",
    image: "https://president.uz/uploads/a0d68f33-26ba-f1d2-f186-b24329804671_lists_slider_9529.jpg",
    imageAlt: "新塔什干项目展示",
    details: [
      "乌兹别克斯坦总统网站称，米尔济约耶夫与阿利耶夫参观新塔什干建设管理机构，并了解总体规划、建设进度和交通工程安排。",
      "该网站称，新城规划面积为 2 万公顷，远期容纳 200 万人口；到 2034 年计划建设 20 万套公寓。",
      "首期覆盖 6,000 公顷，规划包括大学校区、社会和商务设施；交通部分包含桥梁、地铁线、步行与自行车通道。",
    ],
  },
  {
    title: "乌兹别克斯坦与阿塞拜疆启动多项联合项目",
    category: "外交与产业",
    source: "乌兹别克斯坦总统网站",
    sourceType: "机构发布",
    kind: "新闻",
    time: "8 月 23 日",
    href: "https://president.uz/en/lists/view/9525",
    details: [
      "乌兹别克斯坦总统网站称，两国总统出席联合项目启动仪式，项目涉及银行、建材、教育、加油站、旅游与住宅综合体、矿产加工和园艺。",
      "发布稿称，地区项目现场通过连线汇报了实施进度，双方将这些项目列为双边投资和商业合作的一部分。",
      "该网站还提及，新项目将服务于就业、相互投资和企业合作等事项。",
    ],
  },
  {
    title: "乌兹别克斯坦提出小型与微型水电站发展措施",
    category: "能源与基础设施",
    source: "乌兹别克斯坦总统网站",
    sourceType: "机构发布",
    kind: "新闻",
    time: "8 月 19 日",
    href: "https://president.uz/en/lists/view/9513",
    image: "https://president.uz/uploads/da119fb9-720b-b0a0-12c8-6b5927242eb4_lists_slider_.jpg",
    imageAlt: "乌兹别克斯坦小型水电项目介绍",
    details: [
      "总统网站称，乌兹别克斯坦计划以私营部门参与方式建设约 3,000 座微型和小型水电站，总装机 164 兆瓦；已投运 64 个项目、装机 41.6 兆瓦。",
      "发布稿提出为不超过 100 千瓦的项目简化设计和施工程序，50 千瓦以下项目将免于部分城市规划和建设监管程序。",
      "到 2030 年，页面设定此类电站装机达到 204.8 兆瓦、年发电 6.2 亿千瓦时的目标，并列出供电、节气和减排数据。",
    ],
  },
  {
    title: "社交来源｜旅行者在 Reddit 分享乌兹别克斯坦高铁与城市交通体验",
    category: "交通与旅游",
    source: "Reddit · r/travel",
    sourceType: "公开社交讨论",
    kind: "观点",
    time: "8 月 20 日",
    href: "https://www.reddit.com/r/travel/comments/1vtqpcy/uzbekistan_by_high_speed_rail/",
    details: [
      "一位 r/travel 用户发布图文游记，称其行程使用了连接塔什干与丝路城市的铁路，并提及新增的希瓦—乌尔根奇高速铁路线路。",
      "帖子还描述了塔什干地铁、线上购票、车票供给和城市出租车的个人体验；这些内容为公开旅行者叙述，按社交来源保留。",
    ],
  },
  {
    title: "世界银行启动哈萨克斯坦 2026—2031 年国家伙伴框架",
    category: "经济与发展",
    source: "世界银行",
    sourceType: "国际组织",
    kind: "新闻",
    time: "5 月 14 日",
    href: "https://www.worldbank.org/en/news/press-release/2026/05/14/connectivity-resilience-jobs-and-private-sector-led-growth-prioritized-in-new-partnership-with-kazakhstan",
    details: [
      "世界银行这份 2026—2031 年国家伙伴框架聚焦三项结果：连通性与基础设施服务、自然资源管理带来的韧性，以及私营部门发展的制度环境。",
    ],
  },
  {
    title: "IMF 工作组完成对哈萨克斯坦的访问",
    category: "经济与市场",
    source: "国际货币基金组织",
    sourceType: "国际组织",
    kind: "新闻",
    time: "6 月 15 日",
    href: "https://www.imf.org/en/news/articles/2026/06/15/pr26207-kazakhstan-imf-staff-concludes-visit",
    details: [
      "IMF 工作组于 6 月 3 日至 12 日访问哈萨克斯坦，与政府和央行等方面讨论近期经济发展、前景与政策。",
      "这份访问结束声明属于 IMF 工作组的初步结论，并非执行董事会的正式决定。",
    ],
  },
  {
    title: "IMF 完成乌兹别克斯坦 2026 年第四条款磋商",
    category: "经济与市场",
    source: "国际货币基金组织",
    sourceType: "国际组织",
    kind: "新闻",
    time: "6 月 18 日",
    href: "https://www.imf.org/en/news/articles/2026/06/18/pr-26214-uzbekistan-imf-executive-board-concludes-2026-article-iv-consultation",
    details: [
      "IMF 记录显示，乌兹别克斯坦 2025 年实际 GDP 增长 7.7%，2026 年第一季度同比增长 8.7%；2026 年 4 月通胀为 7.0%。",
      "该机构预计 2026 年增长约为 6.8%，并指出财政、货币和结构性改革为报告中的主要政策部分。",
    ],
  },
  {
    title: "欧洲复兴开发银行发布中亚与蒙古经济展望",
    category: "经济与市场",
    source: "欧洲复兴开发银行",
    sourceType: "国际组织",
    kind: "新闻",
    time: "2026 年",
    href: "https://www.ebrd.com/home/news-and-events/news/2026/central-asia-and-mongolia-to-see-highest-economic-growth-in-the-ebrd-regions.html",
    details: [
      "欧洲复兴开发银行预计，中亚和蒙古经济体 2026 年增长 5.6%，2027 年增长 5.3%。报告将能源价格波动、供应链中断及主要贸易伙伴增速放缓列为风险因素。",
    ],
  },
  {
    title: "乌兹别克斯坦纺织业前五个月产值达 43.4 万亿苏姆",
    category: "产业与经济",
    source: "Kun.uz",
    sourceType: "新闻门户",
    kind: "新闻",
    time: "7 月 28 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 的新闻列表显示，乌兹别克斯坦纺织业前五个月产值为 43.4 万亿苏姆，较上年同期增长 15.4%。",
      "该门户将条目归入商业资讯栏目，原始页面保留新闻发布时间及单篇报道入口。",
    ],
  },
  {
    title: "乌兹别克斯坦总统谈苏尔汉河州电站选址与项目成本",
    category: "能源与基础设施",
    source: "Kun.uz",
    sourceType: "新闻门户",
    kind: "新闻",
    time: "7 月 27 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 的新闻列表刊登总统就苏尔汉河州电站项目选址作出的表态，标题称不当选址使项目成本增加 3 亿美元。",
      "该条以新闻门户的标题和页面可见摘要为准，原文可继续查看相关项目背景。",
    ],
  },
  {
    title: "哈萨克斯坦新闻门户提示多地区 8 月初可能出现干旱",
    category: "社会与气象",
    source: "Tengrinews",
    sourceType: "新闻门户",
    kind: "新闻",
    time: "7 月 24 日",
    href: "https://en.tengrinews.kz/",
    details: [
      "Tengrinews 英文首页的近期资讯列出“8 月将从干旱开始”的天气报道，并指向哈萨克斯坦不同地区的风险说明。",
      "同一门户的近期列表也包含阿斯塔纳极端天气与当地基础设施、体育场等话题。",
    ],
  },
  {
    title: "哈萨克斯坦计划推出 Astana Bus 品牌并于 2027 年开始生产电动公交车",
    category: "交通与制造",
    source: "The Astana Times",
    sourceType: "新闻门户",
    kind: "新闻",
    time: "5 月 12 日",
    href: "https://astanatimes.com/category/astana/",
    details: [
      "The Astana Times 在阿斯塔纳栏目中刊登了推出 Astana Bus 品牌、并在 2027 年启动电动公交车生产的报道。",
      "该新闻门户页面保留作者、日期和原始报道入口，条目归入城市与交通相关资讯。",
    ],
  },
  {
    title: "哈萨克斯坦与乌兹别克斯坦签署投资与贸易合作落实路线图",
    category: "双边合作",
    source: "乌兹别克斯坦总统网站",
    sourceType: "机构发布",
    kind: "新闻",
    time: "5 月 29 日",
    href: "https://president.uz/en/lists/view/9265",
    details: [
      "乌兹别克斯坦总统网站称，两国领导人在阿斯塔纳见证签署落实投资与贸易协议的行动计划。",
      "页面列出的合作领域包括汽车制造、能源、化工、冶金、制药、物流、建材、住房建设和农业等。",
    ],
  },
];

export const deepReads: BriefingItem[] = [
  {
    title: "哈萨克斯坦国家伙伴框架（2026—2031）",
    category: "政策与发展",
    source: "世界银行",
    sourceType: "国际组织",
    kind: "深读",
    time: "5 月 14 日",
    href: "https://www.worldbank.org/en/news/press-release/2026/05/14/connectivity-resilience-jobs-and-private-sector-led-growth-prioritized-in-new-partnership-with-kazakhstan",
    details: [
      "原文介绍世界银行面向哈萨克斯坦 2026—2031 年的合作框架，内容涉及交通连通、基础设施服务、自然资源管理与私营部门发展。",
    ],
  },
  {
    title: "乌兹别克斯坦：IMF 2026 年第四条款磋商",
    category: "政策与经济",
    source: "国际货币基金组织",
    sourceType: "国际组织",
    kind: "深读",
    time: "6 月 18 日",
    href: "https://www.imf.org/en/news/articles/2026/06/18/pr-26214-uzbekistan-imf-executive-board-concludes-2026-article-iv-consultation",
    details: [
      "报告记录了乌兹别克斯坦的增长、通胀、财政收支、经常账户和外汇储备情况，并附有执行董事会评估。",
      "原文还列出税收、预算、金融部门、国企和竞争政策等议题。",
    ],
  },
  {
    title: "哈萨克斯坦：IMF 国家页面与经济数据",
    category: "数据与经济",
    source: "国际货币基金组织",
    sourceType: "国际组织",
    kind: "深读",
    time: "2026 年",
    href: "https://www.imf.org/en/countries/kaz",
    details: [
      "该国家页面汇集 IMF 关于哈萨克斯坦的国别新闻、第四条款磋商资料与宏观数据。页面显示的 2026 年预测包括实际 GDP 增长 4.6% 和消费者价格增长 10.7%。",
    ],
  },
  {
    title: "乌兹别克斯坦国家评估：EBRD 转型报告 2025—26",
    category: "政策与经济",
    source: "欧洲复兴开发银行",
    sourceType: "研究报告",
    kind: "深读",
    time: "2026 年",
    href: "https://www.ebrd.com/content/dam/ebrd_dxp/assets/pdfs/office-of-the-chief-economist/transition-report-archive/transition-report-2025/country-assessments/Central-Asia/transition-report-2025-26-CA-Uzbekistan.pdf",
    details: [
      "这份 EBRD 国家评估覆盖乌兹别克斯坦的转型进展与政策环境，并涉及能源价格调整、铁路建设及绿色走廊合作等内容。",
    ],
  },
  {
    title: "中亚与蒙古区域经济展望",
    category: "区域经济",
    source: "欧洲复兴开发银行",
    sourceType: "研究报告",
    kind: "深读",
    time: "2026 年",
    href: "https://www.ebrd.com/home/news-and-events/news/2026/central-asia-and-mongolia-to-see-highest-economic-growth-in-the-ebrd-regions.html",
    details: [
      "区域展望涵盖哈萨克斯坦和乌兹别克斯坦在内的中亚国家，并列出增长预测、能源价格、物流、贸易伙伴经济和地缘风险等资料。",
    ],
  },
  {
    title: "乌兹别克斯坦：IMF 2026 年第四条款磋商工作人员报告",
    category: "政策与经济",
    source: "国际货币基金组织",
    sourceType: "工作人员报告",
    kind: "深读",
    time: "7 月",
    href: "https://www.elibrary.imf.org/view/journals/002/2026/152/article-A001-en.xml",
    details: [
      "工作人员报告讨论乌兹别克斯坦的增长、通胀、能源价格、物流成本、财政与货币政策，以及气候和公共投资相关议题。",
      "报告原文还列出基准情景、数据表和政策建议的具体章节，可供按主题查阅。",
    ],
  },
  {
    title: "经合组织：哈萨克斯坦、蒙古和乌兹别克斯坦可持续基础设施中的负责任商业行为",
    category: "投资与基础设施",
    source: "经合组织 OECD",
    sourceType: "研究报告",
    kind: "深读",
    time: "2025 年 6 月",
    href: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/06/responsible-business-conduct-for-sustainable-infrastructure-in-kazakhstan-mongolia-and-uzbekistan_b898c490/2762f803-en.pdf",
    details: [
      "报告涵盖两国基础设施中的交通、能源和采矿等行业，并讨论投资政策、尽职调查和企业行为的制度背景。",
      "原始 PDF 提供国别章节、政策材料和参考来源，可作为项目与监管信息的延伸阅读。",
    ],
  },
];
