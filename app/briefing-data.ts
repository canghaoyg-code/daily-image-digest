export type BriefingItem = {
  title: string;
  category: string;
  source: string;
  sourceType?: string;
  kind: "新闻" | "观点" | "深读";
  time: string;
  href: string;
  details?: string[];
};

export const briefingMeta = {
  label: "哈萨克斯坦 · 乌兹别克斯坦",
  headline: "已更新",
  updatedAt: "8 月 13 日 · 09:02",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "哈萨克斯坦批准至 2035 年水电发展战略",
    category: "能源与基础设施",
    source: "Kazakhstan Today",
    kind: "新闻",
    time: "7 月 30 日",
    href: "https://www.kz-today.com/",
    details: [
      "Kazakhstan Today 在 7 月 30 日的头条中刊登哈萨克斯坦批准水电发展战略的消息，规划期至 2035 年。",
    ],
  },
  {
    title: "米尔济约耶夫、扎帕罗夫和拉赫蒙将赴阿斯塔纳参加“未来运动会 2026”开幕式",
    category: "外交与体育",
    source: "Tengrinews",
    sourceType: "新闻门户",
    kind: "新闻",
    time: "8 月 13 日",
    href: "https://tengrinews.kz/news/",
    details: [
      "Tengrinews 新闻页称，乌兹别克斯坦总统米尔济约耶夫、吉尔吉斯斯坦总统扎帕罗夫和塔吉克斯坦总统拉赫蒙将前往阿斯塔纳，参加“未来运动会 2026”开幕式。",
      "该条保留新闻门户在当天列表中显示的行程与活动信息。",
    ],
  },
  {
    title: "哈萨克斯坦发布 2026 年 8 月天气预报",
    category: "社会与气象",
    source: "Kazhydromet",
    kind: "新闻",
    time: "7 月 31 日",
    href: "https://www.kazhydromet.kz/en/post/3348",
    details: [
      "Kazhydromet 预计，8 月南部和西部以炎热天气为主，北部地区气温较为温和并可能出现降雨和雷暴。",
      "预报称，8 月上旬多地可能出现雷暴、阵风和冰雹，北部、中部、东部及西南部山地部分时段有强降雨。",
    ],
  },
  {
    title: "乌兹别克斯坦纺织业前五个月产值增长 15.4%",
    category: "产业与经济",
    source: "Kun.uz",
    kind: "新闻",
    time: "7 月 28 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 报道称，乌兹别克斯坦纺织业在 2026 年前五个月的产值达 43.4 万亿苏姆，同比增长 15.4%。",
    ],
  },
  {
    title: "Samruk-Energy 公布 2026 年上半年生产与财务指标",
    category: "能源与市场",
    source: "Tengrinews",
    sourceType: "新闻门户",
    kind: "新闻",
    time: "8 月 13 日",
    href: "https://tengrinews.kz/news/",
    details: [
      "Tengrinews 当天新闻列表显示，Samruk-Energy 对 2026 年上半年进行汇总，称其生产和财务指标有所增长，并提及 20 个大型项目。",
      "页面提供报道标题、发布时间和原文入口；具体项目列表以该门户原文为准。",
    ],
  },
  {
    title: "阿拉木图 7 个地区将进行供热管网水压试验",
    category: "城市与基础设施",
    source: "Tengrinews",
    sourceType: "新闻门户",
    kind: "新闻",
    time: "8 月 13 日",
    href: "https://tengrinews.kz/news/",
    details: [
      "Tengrinews 报道，阿拉木图第二阶段供热管网水压试验将持续至 8 月 14 日，涉及 7 个地区；居民被提示留意可能的管线破裂风险。",
      "该条按新闻门户页面的公共基础设施提示整理。",
    ],
  },
  {
    title: "乌兹别克斯坦能源系统将接受压力审计",
    category: "能源",
    source: "Kun.uz",
    kind: "新闻",
    time: "7 月 27 日",
    href: "https://www.kun.uz/ru/news/category/uzbekistan",
    details: [
      "Kun.uz 在 7 月 27 日的乌兹别克斯坦新闻栏目中刊登了能源系统将接受压力审计的消息。",
    ],
  },
  {
    title: "乌兹别克斯坦拟与韩国队进行 10 月足球友谊赛",
    category: "体育",
    source: "Kun.uz",
    kind: "新闻",
    time: "7 月 28 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 在 7 月 28 日的新闻列表中发布乌兹别克斯坦将于 10 月与韩国队进行友谊赛的消息。",
    ],
  },
  {
    title: "社交线索｜哈萨克斯坦队在国际人工智能奥赛获得 8 枚奖牌",
    category: "科技与教育",
    source: "Reddit · r/Kazakhstan",
    kind: "观点",
    time: "8 月 11 日",
    href: "https://www.reddit.com/r/Kazakhstan/comments/1vlhjqk/kazakhstan_sent_8_students_to_an_ai_olympiad_all/",
    details: [
      "r/Kazakhstan 用户发布称，哈萨克斯坦派出 8 名学生参加 2026 年在阿斯塔纳举行的国际人工智能奥赛，8 人均获得奖牌。",
      "该信息来自公开社交讨论，尚未以独立赛事公告核验，因此按社交线索保留。",
    ],
  },
  {
    title: "世界银行启动哈萨克斯坦 2026—2031 年国家伙伴框架",
    category: "经济与发展",
    source: "世界银行",
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
