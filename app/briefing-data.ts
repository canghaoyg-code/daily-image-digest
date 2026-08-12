export type BriefingItem = {
  title: string;
  category: string;
  source: string;
  kind: "新闻" | "观点" | "深读";
  time: string;
  href: string;
  details?: string[];
};

export const briefingMeta = {
  label: "哈萨克斯坦 · 乌兹别克斯坦",
  headline: "已更新",
  updatedAt: "8 月 12 日 · 17:00",
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
    title: "哈萨克斯坦与巴基斯坦加强交通与海运物流合作",
    category: "交通与物流",
    source: "Kazakhstan Today",
    kind: "新闻",
    time: "7 月 31 日",
    href: "https://www.kz-today.com/",
    details: [
      "Kazakhstan Today 在 7 月 31 日的资讯栏目中发布了哈萨克斯坦与巴基斯坦交通及海运物流合作的消息。",
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
    title: "乌兹别克斯坦将向私营供应商开放液化气市场",
    category: "能源",
    source: "Kun.uz",
    kind: "新闻",
    time: "7 月 28 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 的 7 月 28 日新闻列表刊登了乌兹别克斯坦向私营供应商开放液化气市场的消息。",
    ],
  },
  {
    title: "乌兹别克斯坦上半年电力损耗超过 48 亿千瓦时",
    category: "能源",
    source: "Kun.uz",
    kind: "新闻",
    time: "7 月 28 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 7 月 28 日的新闻列表报道，乌兹别克斯坦在六个月内损失超过 48 亿千瓦时电力。",
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
];
