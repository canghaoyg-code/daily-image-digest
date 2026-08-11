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
  updatedAt: "8 月 11 日 · 13:30",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "乌兹别克斯坦总统结束对哈萨克斯坦的工作访问",
    category: "两国关系",
    source: "乌兹别克斯坦总统网站",
    kind: "新闻",
    time: "7 月 29 日",
    href: "https://www.president.uz/en/lists/news",
    details: [
      "乌兹别克斯坦总统网站将这次行程列为对哈萨克斯坦的工作访问，并在 7 月 29 日发布访问结束消息。",
      "原文由总统网站发布，可通过文末原文链接查看行程与会面信息。",
    ],
  },
  {
    title: "乌兹别克斯坦总统抵达哈萨克斯坦",
    category: "两国关系",
    source: "乌兹别克斯坦总统网站",
    kind: "新闻",
    time: "7 月 29 日",
    href: "https://www.president.uz/en/lists/news",
    details: [
      "总统网站同日发布抵达哈萨克斯坦的消息，并将其列入工作访问的连续报道。",
    ],
  },
  {
    title: "哈萨克斯坦公布 2026 年 8 月公共假期安排",
    category: "社会与生活",
    source: "Tengri News",
    kind: "新闻",
    time: "7 月",
    href: "https://en.tengrinews.kz/healthy/kazakhstanis-to-have-10-days-off-in-august-2026-272157/",
    details: [
      "Tengri News 报道称，按 2026 年 8 月的工作日与公共假期安排，哈萨克斯坦居民当月共有 10 天休息日。",
    ],
  },
  {
    title: "乌兹别克斯坦任命新任驻白俄罗斯大使",
    category: "外交与地区",
    source: "Kun.uz",
    kind: "新闻",
    time: "7 月 28 日",
    href: "https://kun.uz/en/news/list",
    details: [
      "Kun.uz 在其最新新闻栏目中刊登了乌兹别克斯坦任命新任驻白俄罗斯大使的消息。",
    ],
  },
  {
    title: "乌兹别克斯坦拟加强医疗机构监管并引入认证要求",
    category: "社会与公共服务",
    source: "Kun.uz",
    kind: "新闻",
    time: "5 月 6 日",
    href: "https://kun.uz/en/news/list?f=latest&next=1778131383",
    details: [
      "Kun.uz 报道的政策方向包括收紧对医疗诊所的监管，并引入新的认证要求。",
    ],
  },
  {
    title: "俄罗斯与乌兹别克斯坦启动核电站建设",
    category: "能源",
    source: "MarketScreener · Reuters",
    kind: "新闻",
    time: "6 月",
    href: "https://www.marketscreener.com/news/russia-uzbekistan-start-construction-of-nuclear-power-plant-ce7f5ddddb81f521/",
    details: [
      "Reuters 的转引报道显示，俄罗斯与乌兹别克斯坦启动了核电站建设项目，项目位于乌兹别克斯坦吉扎克州。",
    ],
  },
  {
    title: "哈萨克斯坦推进咸海修复、水利基础设施与节水改革",
    category: "环境与水资源",
    source: "The Astana Times",
    kind: "新闻",
    time: "7 月 22 日",
    href: "https://astanatimes.com/",
    details: [
      "The Astana Times 将咸海修复、水利基础设施建设和节水改革列为哈萨克斯坦近期的相关议题。",
    ],
  },
  {
    title: "外媒关注哈萨克斯坦的人工智能推进与对外关系议题",
    category: "科技与数字化",
    source: "The Astana Times",
    kind: "新闻",
    time: "7 月",
    href: "https://astanatimes.com/all/",
    details: [
      "The Astana Times 的新闻汇编收录了外国媒体对哈萨克斯坦人工智能推进、比利时关系与选举等议题的报道。",
    ],
  },
  {
    title: "哈萨克斯坦最高法院就总统再次参选资格作出裁决",
    category: "政治与法律",
    source: "美联社",
    kind: "新闻",
    time: "7 月 7 日",
    href: "https://apnews.com/article/27648aa4d174d0750b5bd217ad4cbe2b",
    details: [
      "美联社报道，哈萨克斯坦宪法法院裁定，修宪后的任期规则使托卡耶夫现任任期不计入新规则下的任期计算。",
      "裁决涉及总统在 2029 年现任任期结束后再次参选的资格。",
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
