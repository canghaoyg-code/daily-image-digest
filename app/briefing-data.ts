export type BriefingItem = {
  title: string;
  details: string[];
  category: string;
  source: string;
  sourceType: string;
  kind: "news" | "deep-read";
  time: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const briefingMeta = {
  dateCode: "20260824",
  headline: "哈萨克斯坦与乌兹别克斯坦公开资讯",
  updatedAt: "2026 年 8 月 24 日 · 20:04（北京时间）",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "哈萨克斯坦中央选举委员会公布库鲁尔泰议会选举初步结果",
    category: "政治与公共事务",
    source: "哈萨克斯坦中央选举委员会",
    sourceType: "选举机构发布",
    kind: "news",
    time: "8 月 24 日",
    href: "https://www.election.gov.kz/rus/news/releases/index.php?ID=10577",
    details: [
      "哈萨克斯坦中央选举委员会在 8 月 24 日发布公告，称已公布 8 月 23 日库鲁尔泰议员选举的初步投票结果。",
      "公告页面按选举结果发布口径列出本次投票信息；最终结果及后续程序以选举委员会后续公告为准。",
    ],
  },
  {
    title: "RFE/RL 报道哈萨克斯坦新一院制议会选举投票进程",
    category: "政治与公共事务",
    source: "自由欧洲电台／自由电台 RFE/RL",
    sourceType: "国际媒体",
    kind: "news",
    time: "8 月 23 日",
    href: "https://www.rferl.org/a/33836475.html",
    image: "https://gdb.rferl.org/e03de23b-4f10-4cc3-a1a7-53461c38b04d_cx0_cy8_cw0_w250_r1_s.jpg",
    imageAlt: "阿拉木图投票站的选民",
    imageCaption: "RFE/RL 报道配图。",
    details: [
      "RFE/RL 称，哈萨克斯坦 8 月 23 日举行新一院制库鲁尔泰议会选举，并将其置于今年宪法调整后的政治进程中介绍。",
      "该报道援引中央选举委员会数据，呈现了投票率、参选政党及现场采访内容；媒体同时报道了反对派与独立媒体所面对的参选和报道环境。",
    ],
  },
  {
    title: "托卡耶夫在投票前讲话中称库鲁尔泰选举将开启新一轮改革",
    category: "政治与公共事务",
    source: "Tengrinews.kz／阿克尔达总统府",
    sourceType: "当地新闻门户／官方讲话",
    kind: "news",
    time: "8 月 21 日",
    href: "https://en.tengrinews.kz/kazakhstan_news/these-elections-will-mark-the-starting-point-for-new-reforms-273074/",
    details: [
      "Tengrinews.kz 转述总统讲话称，8 月 23 日的库鲁尔泰选举是该国首次举行这类选举，并将成为新改革的起点。",
      "报道页面保留了讲话原文摘要及对选举安排的介绍，相关表述为总统公开讲话内容。",
    ],
  },
  {
    title: "哈萨克斯坦国家银行称 S&P 将该国主权评级上调至 BBB",
    category: "经济与金融",
    source: "哈萨克斯坦国家银行",
    sourceType: "机构发布",
    kind: "news",
    time: "8 月 22 日",
    href: "https://nationalbank.kz/en/news/informacionnye-soobshcheniya/20120",
    details: [
      "哈萨克斯坦国家银行发布称，S&P Global Ratings 已将该国主权评级上调至 BBB，展望为“稳定”。",
      "该发布稿转述评级机构对外汇储备、财政缓冲、通胀和经济增长的说明，并列出其采用的宏观预测。",
    ],
  },
  {
    title: "巴甫洛达尔机场跑道重建后恢复定期航班",
    category: "交通与物流",
    source: "哈萨克斯坦民航管理局",
    sourceType: "机构发布",
    kind: "news",
    time: "8 月 22 日",
    href: "https://caa.gov.kz/en/blog/post/regular-air-service-resumes-pavlodar-following-runway-reconstruction",
    details: [
      "哈萨克斯坦民航管理局称，巴甫洛达尔机场完成跑道重建后，阿斯塔纳—巴甫洛达尔航线恢复运行。",
      "该机构称跑道由 45 米加宽至 60 米，并列出补贴航线每周班次、票价和后续阿拉木图、新西伯利亚航线安排。",
    ],
  },
  {
    title: "乌兹别克斯坦总统会见阿塞拜疆总统，双方举行最高国家间委员会第三次会议",
    category: "外交与区域合作",
    source: "乌兹别克斯坦总统网站",
    sourceType: "机构发布",
    kind: "news",
    time: "8 月 23 日",
    href: "https://president.uz/en/lists/view/9524",
    image: "https://president.uz/uploads/a0d68f33-26ba-f1d2-f186-b24329804671_lists_slider_9529.jpg",
    imageAlt: "乌兹别克斯坦总统网站发布的会谈现场图片",
    imageCaption: "图片来自乌兹别克斯坦总统网站。",
    details: [
      "乌兹别克斯坦总统网站称，米尔济约耶夫与阿利耶夫在库克萨罗伊官邸举行会谈，并共同主持最高国家间委员会第三次会议。",
      "发布稿称，双方讨论贸易、能源、化工、采矿、纺织、农业、城市建设、交通连接及文化教育合作，并提出把双边贸易提高至 10 亿美元的目标。",
      "同一发布还称，双方启动了银行金融、建材、教育、油气、旅游、住房建设、采矿和农业领域的新项目。",
    ],
  },
  {
    title: "乌兹别克斯坦与阿塞拜疆签署“永久友谊条约”",
    category: "外交与区域合作",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    time: "8 月 24 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 的当日资讯流显示，乌兹别克斯坦与阿塞拜疆签署“永久友谊条约”，并同步报道双方领导人启动重点经济领域联合项目。",
      "门户页面还收录会谈、贸易联系和国家访问的连续报道；各项协议文本及实施安排以两国随后公开的原始文件为准。",
    ],
  },
  {
    title: "塔什干拟建设明古里克至伊波德罗姆 12 公里地铁线",
    category: "城市与交通",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    time: "8 月 24 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 当日资讯流报道，塔什干计划建设从 Mingurik 至 Ippodrom 的 12 公里地铁线，以分担 Chilonzor 线压力。",
      "该条为门户页面对城市轨道交通规划的报道入口；路线、站点、资金和工期等信息以主管部门的进一步发布为准。",
    ],
  },
  {
    title: "Kun.uz 报道 Uzbekneftegaz 收紧合资企业监督安排",
    category: "能源与资源",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    time: "8 月 24 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 当日资讯流称，Uzbekneftegaz 将在产量下降和股息问题背景下强化对其参与的合资企业的监督。",
      "页面将该议题列入商业新闻条目；具体治理措施、企业数据及监管文件仍需查阅公司和主管部门的后续原始发布。",
    ],
  },
  {
    title: "乌兹别克斯坦私人机动车保有量接近 500 万辆",
    category: "社会与消费",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    time: "8 月 24 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 当日资讯流称，乌兹别克斯坦私人机动车保有量接近 500 万辆，约为每 7.7 人拥有一辆车。",
      "该条来自门户当日数据报道，具体统计口径、登记时点及车辆类型可在其链接到的统计或主管部门资料中查阅。",
    ],
  },
  {
    title: "Uzbekhydroenergo 将 2026 年发电目标提高至 83 亿千瓦时",
    category: "能源与资源",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    time: "8 月 21 日",
    href: "https://kun.uz/en/news/2026/08/21/uzbekhydroenergo-targets-83bn-kwh-of-electricity-generation-this-year",
    image: "https://storage.kun.uz/source/1/iRXZ3Bn8eZaBjMlV1ofSdm1cNLrvnase.jpg",
    imageAlt: "乌兹别克斯坦水电项目配图",
    imageCaption: "图片来自 Kun.uz 原始报道。",
    details: [
      "Kun.uz 报道称，Uzbekhydroenergo 将全年发电目标提高至 83 亿千瓦时，较 2025 年增长 27.6%；报道同时称公司年内已发电 60 亿千瓦时。",
      "报道列出小微水电站建设、设备国产化、融资和职业教育等安排，并称年内计划新增 13 座、总装机 114 兆瓦的设施。",
    ],
  },
  {
    title: "博斯坦雷克 20 兆瓦风电场投入运行",
    category: "能源与资源",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    time: "8 月 21 日",
    href: "https://kun.uz/en/news/2026/08/21/new-20-mw-wind-farm-commissioned-in-bostanlyk",
    image: "https://storage.kun.uz/source/1/pzBwmAvAhW0yDSmrW_lH8QK-kZWJSo_d.jpg",
    imageAlt: "博斯坦雷克风电场",
    imageCaption: "图片来自 Kun.uz 原始报道。",
    details: [
      "Kun.uz 称，博斯坦雷克区一座 20 兆瓦风电场已投入运行，由 4 台各 5 兆瓦风机组成，预计年发电最多 5,000 万千瓦时。",
      "报道列出项目由中国 2,800 万美元赠款支持，并称其预计每年节约约 1,200 万立方米天然气、减少约 2.4 万吨二氧化碳排放。",
    ],
  },
  {
    title: "四个中亚国家发生同步停电，路透社报道各方启动供电恢复",
    category: "能源与公共服务",
    source: "Reuters／MarketScreener",
    sourceType: "国际通讯社转载",
    kind: "news",
    time: "8 月 14 日",
    href: "https://au.marketscreener.com/news/three-central-asian-countries-report-simultaneous-power-blackouts-ce7859ded18bf625",
    details: [
      "路透社报道，哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦和乌兹别克斯坦均报告发生停电；哈萨克斯坦能源部称原因是中亚区域电网电力流出现突然变化。",
      "报道说四国能源部门确认故障并着手恢复供电，乌兹别克斯坦报告部分南部地区、尤其靠近塔吉克斯坦边境的地区受影响。",
    ],
  },
  {
    title: "社交来源：旅行者在 Reddit 分享乌兹别克斯坦高铁、地铁和城市出行体验",
    category: "公开讨论",
    source: "Reddit · r/travel",
    sourceType: "公开社交媒体",
    kind: "news",
    time: "8 月 20 日",
    href: "https://www.reddit.com/r/travel/comments/1vtqpcy/uzbekistan_by_high_speed_rail/",
    details: [
      "一位 r/travel 用户发布图文游记，描述连接塔什干与多座城市的铁路、希瓦—乌尔根奇线路、网上购票和地铁出行体验。",
      "帖子也包含票源、出租车和城市景观的个人观察；这是一则公开用户叙述，未作为新闻报道或事实通报处理。",
    ],
  },
];

export const deepReads: BriefingItem[] = [
  {
    title: "哈萨克斯坦：国际货币基金组织国家资料与最新研究入口",
    category: "长阅读／宏观经济",
    source: "国际货币基金组织 IMF",
    sourceType: "国际组织资料库",
    kind: "deep-read",
    time: "持续更新",
    href: "https://www.imf.org/en/Countries/KAZ",
    details: [
      "IMF 的哈萨克斯坦国家页汇集该国的经济数据、第四条款磋商、新闻稿、工作人员报告和项目文件。",
      "页面可继续进入国别统计、财政与货币政策相关资料，便于核对报告发布日期与数据口径。",
    ],
  },
  {
    title: "乌兹别克斯坦：世界银行国家资料、项目与经济报告入口",
    category: "长阅读／发展与政策",
    source: "世界银行",
    sourceType: "国际组织资料库",
    kind: "deep-read",
    time: "持续更新",
    href: "https://www.worldbank.org/en/country/uzbekistan",
    details: [
      "世界银行乌兹别克斯坦国别页集中展示该国项目、经济更新、研究出版物和数据资料。",
      "页面提供项目状态、专题文章和数据下载入口，适合追溯基础设施、减贫、能源与私营部门相关材料。",
    ],
  },
  {
    title: "《亚洲发展展望 2026》：中亚经济预测与地区数据",
    category: "长阅读／区域经济",
    source: "亚洲开发银行 ADB",
    sourceType: "报告原文",
    kind: "deep-read",
    time: "2026 年",
    href: "https://www.adb.org/publications/asian-development-outlook-april-2026",
    details: [
      "ADB 的《亚洲发展展望》提供中亚经济体的增长、通胀、贸易和风险评估，并附有地区和国别数据表。",
      "报告页面保留下载、章节和数据可视化入口；涉及哈萨克斯坦和乌兹别克斯坦的数据可按报告口径交叉查阅。",
    ],
  },
  {
    title: "《全球经济展望》2026 年 6 月版：中亚国家预测的可下载报告",
    category: "长阅读／全球与区域经济",
    source: "世界银行",
    sourceType: "报告原文",
    kind: "deep-read",
    time: "2026 年 6 月",
    href: "https://thedocs.worldbank.org/en/doc/2b672b3b0415d6b66c45b66579db4ef5-0050012026/original/GEP-Jun-2026.pdf",
    details: [
      "报告涵盖全球与地区增长、贸易、融资、投资和发展议题，并在国别和地区表中提供预测数据。",
      "原始 PDF 说明数据截止时间、预测假设与各项口径，可作为哈萨克斯坦和乌兹别克斯坦外部经济环境的背景材料。",
    ],
  },
  {
    title: "国际清算银行《年度经济报告 2026》：金融稳定与公共债务章节",
    category: "长阅读／金融与货币",
    source: "国际清算银行 BIS",
    sourceType: "年度报告",
    kind: "deep-read",
    time: "2026 年 6 月",
    href: "https://www.bis.org/publ/arpdf/ar2026e.pdf",
    details: [
      "BIS 年度报告讨论全球增长、金融稳定、公共债务、人工智能投资和数字货币，并收录原始图表和方法材料。",
      "报告不是哈萨克斯坦或乌兹别克斯坦的国别通报；此处作为两国货币、金融与外部环境相关议题的延伸原始材料保留。",
    ],
  },
];
