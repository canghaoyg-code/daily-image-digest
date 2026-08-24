export type RelatedSource = {
  label: string;
  href: string;
};

export type EntryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type BriefingItem = {
  title: string;
  details: string[];
  category: string;
  source: string;
  sourceType: string;
  kind: "news" | "deep-read";
  format?: "brief" | "standard" | "feature" | "visual" | "social";
  time: string;
  href: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  additionalImages?: EntryImage[];
  relatedSources?: RelatedSource[];
  recommendation?: string;
};

export const briefingMeta = {
  dateCode: "20260824",
  headline: "从库鲁尔泰选举到中亚能源转型",
  updatedAt: "2026 年 8 月 24 日 · 20:04（北京时间）",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "哈萨克斯坦库鲁尔泰议会选举：初步结果、制度更替与投票现场",
    category: "政治与公共事务",
    source: "哈萨克斯坦中央选举委员会／RFE/RL／Tengrinews.kz",
    sourceType: "同题聚合",
    kind: "news",
    format: "feature",
    time: "8 月 21—24 日",
    href: "https://www.election.gov.kz/rus/news/releases/index.php?ID=10577",
    image: "https://gdb.rferl.org/e03de23b-4f10-4cc3-a1a7-53461c38b04d_cx0_cy8_cw0_w250_r1_s.jpg",
    imageAlt: "阿拉木图投票站的选民",
    imageCaption: "阿拉木图一处投票站。图片来自 RFE/RL 原始报道。",
    additionalImages: [
      {
        src: "https://tengrinews.kz/userdata/news_en/2026/news_273074/thumb_xms/photo_551235.jpg.webp",
        alt: "哈萨克斯坦总统托卡耶夫",
        caption: "托卡耶夫在投票前发表讲话。图片来自 Tengrinews.kz 原始报道。",
      },
    ],
    relatedSources: [
      { label: "RFE/RL 现场报道", href: "https://www.rferl.org/a/33836475.html" },
      {
        label: "Tengrinews.kz 投票前讲话",
        href: "https://en.tengrinews.kz/kazakhstan_news/these-elections-will-mark-the-starting-point-for-new-reforms-273074/",
      },
    ],
    details: [
      "中央选举委员会在 8 月 24 日发布初步投票结果；这是宪法调整后首次举行的一院制库鲁尔泰议会选举，最终结果及后续程序仍以后续公告为准。",
      "RFE/RL 从投票率、参选政党和现场采访切入，同时报道反对派与独立媒体面对的参选和报道环境；这一角度与选举机构的程序性公告形成互补。",
      "Tengrinews.kz 则转述托卡耶夫投票前讲话，称本次选举将成为新一轮改革的起点。三条来源合并呈现，避免同一热点重复占据多个条目。",
    ],
  },
  {
    title: "乌兹别克斯坦—阿塞拜疆：高层委员会、永久友谊条约与联合项目同步推进",
    category: "外交与区域合作",
    source: "乌兹别克斯坦总统网站／Kun.uz",
    sourceType: "同题聚合",
    kind: "news",
    format: "feature",
    time: "8 月 23—24 日",
    href: "https://president.uz/en/lists/view/9524",
    image: "https://president.uz/uploads/a0d68f33-26ba-f1d2-f186-b24329804671_lists_slider_9529.jpg",
    imageAlt: "乌兹别克斯坦与阿塞拜疆领导人举行会谈",
    imageCaption: "两国领导人共同主持最高国家间委员会第三次会议。图片来自乌兹别克斯坦总统网站。",
    relatedSources: [{ label: "Kun.uz 当日资讯流", href: "https://kun.uz/en/news/list" }],
    details: [
      "乌兹别克斯坦总统网站称，米尔济约耶夫与阿利耶夫共同主持最高国家间委员会第三次会议，议题覆盖贸易、能源、化工、采矿、农业、交通和文化教育。",
      "同日信息还包括签署“永久友谊条约”、启动重点经济领域联合项目，以及把双边贸易提高至 10 亿美元的目标；协议文本和执行安排以后续公开文件为准。",
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
      "国家银行发布称，S&P Global Ratings 已将该国主权评级上调至 BBB，展望为“稳定”。",
      "发布稿转述评级机构对外汇储备、财政缓冲、通胀和经济增长的说明；评级方法与完整判断仍应回到评级机构原始报告核对。",
    ],
  },
  {
    title: "四个中亚国家发生同步停电，各方启动供电恢复",
    category: "能源与公共服务",
    source: "Reuters／MarketScreener",
    sourceType: "国际通讯社转载",
    kind: "news",
    time: "8 月 14 日",
    href: "https://au.marketscreener.com/news/three-central-asian-countries-report-simultaneous-power-blackouts-ce7859ded18bf625",
    details: [
      "路透社报道，哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦和乌兹别克斯坦均报告停电；哈萨克斯坦能源部称原因是区域电网电力流突然变化。",
      "四国能源部门确认故障并着手恢复供电，乌兹别克斯坦报告部分南部地区、尤其靠近塔吉克斯坦边境的地区受影响。",
    ],
  },
  {
    title: "塔什干拟建设明古里克至伊波德罗姆 12 公里地铁线",
    category: "城市与交通",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    format: "brief",
    time: "8 月 24 日",
    href: "https://kun.uz/en/news/list",
    details: ["Kun.uz 当日资讯流称，该线路计划分担 Chilonzor 线压力；路线、站点、资金和工期以主管部门后续发布为准。"],
  },
  {
    title: "巴甫洛达尔机场跑道重建后恢复定期航班",
    category: "交通与物流",
    source: "哈萨克斯坦民航管理局",
    sourceType: "机构发布",
    kind: "news",
    time: "8 月 22 日",
    href: "https://caa.gov.kz/en/blog/post/regular-air-service-resumes-pavlodar-following-runway-reconstruction",
    image: "https://caa.gov.kz/storage/app/media/PostEditor/6a894ae02013a5210907194461725136.jpg",
    imageAlt: "巴甫洛达尔机场跑道重建后恢复航班",
    imageCaption: "跑道重建完成后的首批航班现场。图片来自哈萨克斯坦民航管理局原始发布。",
    details: [
      "民航管理局称，机场跑道由 45 米加宽至 60 米，阿斯塔纳—巴甫洛达尔航线恢复运行。",
      "该机构同时列出补贴航线每周班次、票价，以及后续阿拉木图、新西伯利亚航线安排。",
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
      "Kun.uz 报道称，全年发电目标提高至 83 亿千瓦时，较 2025 年增长 27.6%；年内已发电 60 亿千瓦时。",
      "报道还列出小微水电站建设、设备国产化、融资和职业教育等安排。",
    ],
  },
  {
    title: "Uzbekneftegaz 收紧合资企业监督安排",
    category: "能源与资源",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    format: "brief",
    time: "8 月 24 日",
    href: "https://kun.uz/en/news/list",
    details: ["Kun.uz 资讯流称，公司将在产量下降和股息问题背景下强化监督；具体治理措施仍需等待公司或主管部门原始文件。"],
  },
  {
    title: "乌兹别克斯坦私人机动车保有量接近 500 万辆",
    category: "社会与消费",
    source: "Kun.uz",
    sourceType: "当地新闻门户",
    kind: "news",
    format: "brief",
    time: "8 月 24 日",
    href: "https://kun.uz/en/news/list",
    details: ["Kun.uz 称约为每 7.7 人拥有一辆车；统计口径、登记时点和车辆类型仍应回查其引用的统计资料。"],
  },
  {
    title: "今日一图：博斯坦雷克 20 兆瓦风电场投入运行",
    category: "能源与资源",
    source: "Kun.uz",
    sourceType: "原始报道配图",
    kind: "news",
    format: "visual",
    time: "8 月 21 日",
    href: "https://kun.uz/en/news/2026/08/21/new-20-mw-wind-farm-commissioned-in-bostanlyk",
    image: "https://storage.kun.uz/source/1/pzBwmAvAhW0yDSmrW_lH8QK-kZWJSo_d.jpg",
    imageAlt: "博斯坦雷克风电场",
    imageCaption: "由 4 台各 5 兆瓦风机组成的博斯坦雷克风电场。图片来自 Kun.uz 原始报道。",
    details: ["报道预计该风电场年发电最多 5,000 万千瓦时，并列出节约天然气和减少二氧化碳排放的项目方估算。"],
  },
  {
    title: "旅行者眼中的乌兹别克斯坦高铁、地铁与城市出行",
    category: "今日观察",
    source: "Reddit · r/travel",
    sourceType: "公开社交媒体",
    kind: "news",
    format: "social",
    time: "8 月 20 日",
    href: "https://www.reddit.com/r/travel/comments/1vtqpcy/uzbekistan_by_high_speed_rail/",
    details: [
      "一位旅行者以图文游记描述塔什干与多座城市间的铁路、希瓦—乌尔根奇线路、网上购票和地铁出行体验。",
      "这是个人观察，仅用于补充当地生活切面，不作为新闻报道或事实通报；票源、价格和交通规则应另行核对。",
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
    recommendation: "可沿时间线进入第四条款磋商、工作人员报告和国别数据，适合核对宏观新闻中的数据口径。",
    details: ["IMF 国家页汇集经济数据、第四条款磋商、新闻稿、工作人员报告和项目文件，是持续追踪哈萨克斯坦经济的原始资料入口。"],
  },
  {
    title: "乌兹别克斯坦：世界银行国家资料、项目与经济报告入口",
    category: "长阅读／发展与政策",
    source: "世界银行",
    sourceType: "国际组织资料库",
    kind: "deep-read",
    time: "持续更新",
    href: "https://www.worldbank.org/en/country/uzbekistan",
    recommendation: "项目状态、专题文章和数据下载集中在一处，适合追踪基础设施、能源和私营部门改革。",
    details: ["国别页集中展示项目、经济更新、研究出版物和数据资料，可继续进入项目文件与专题报告。"],
  },
  {
    title: "《亚洲发展展望 2026》：中亚经济预测与地区数据",
    category: "长阅读／区域经济",
    source: "亚洲开发银行 ADB",
    sourceType: "报告原文",
    kind: "deep-read",
    time: "2026 年",
    href: "https://www.adb.org/publications/asian-development-outlook-april-2026",
    recommendation: "区域与国别表格齐全，适合比较中亚经济体的增长、通胀、贸易和风险。",
    details: ["报告提供中亚经济体的增长、通胀、贸易和风险评估，并保留章节下载与数据可视化入口。"],
  },
  {
    title: "《全球经济展望》2026 年 6 月版：中亚国家预测",
    category: "长阅读／全球与区域经济",
    source: "世界银行",
    sourceType: "报告原文",
    kind: "deep-read",
    time: "2026 年 6 月",
    href: "https://thedocs.worldbank.org/en/doc/2b672b3b0415d6b66c45b66579db4ef5-0050012026/original/GEP-Jun-2026.pdf",
    recommendation: "原始 PDF 说明数据截止时间、预测假设和统计口径，可作为两国外部经济环境的背景材料。",
    details: ["报告涵盖全球与地区增长、贸易、融资、投资和发展议题，并在国别与地区表中提供预测数据。"],
  },
  {
    title: "国际清算银行《年度经济报告 2026》：金融稳定与公共债务",
    category: "长阅读／金融与货币",
    source: "国际清算银行 BIS",
    sourceType: "年度报告",
    kind: "deep-read",
    time: "2026 年 6 月",
    href: "https://www.bis.org/publ/arpdf/ar2026e.pdf",
    recommendation: "虽然不是中亚国别报告，但可为货币、公共债务和金融稳定议题提供全球比较框架。",
    details: ["报告讨论全球增长、金融稳定、公共债务、人工智能投资和数字货币，并收录原始图表与方法材料。"],
  },
];
