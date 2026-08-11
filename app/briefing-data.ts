export type BriefingItem = {
  title: string;
  category: string;
  source: string;
  kind: "新闻" | "观点" | "深读";
  time: string;
  href: string;
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
  },
  {
    title: "乌兹别克斯坦总统抵达哈萨克斯坦",
    category: "两国关系",
    source: "乌兹别克斯坦总统网站",
    kind: "新闻",
    time: "7 月 29 日",
    href: "https://www.president.uz/en/lists/news",
  },
  {
    title: "乌兹别克斯坦总统参加“未来运动会”开幕式",
    category: "体育与科技",
    source: "乌兹别克斯坦总统网站",
    kind: "新闻",
    time: "7 月 29 日",
    href: "https://www.president.uz/en/lists/news",
  },
  {
    title: "乌兹别克斯坦总统将对吉尔吉斯斯坦进行国事访问",
    category: "外交与地区",
    source: "乌兹别克斯坦总统网站",
    kind: "新闻",
    time: "7 月 29 日",
    href: "https://www.president.uz/en/lists/view/9465",
  },
  {
    title: "努库斯市供热系统现代化项目获审议",
    category: "城市与基础设施",
    source: "乌兹别克斯坦总统网站",
    kind: "新闻",
    time: "7 月 28 日",
    href: "https://www.president.uz/en/lists/news",
  },
  {
    title: "乌兹别克斯坦发布能源行业治理与问责重点任务",
    category: "能源",
    source: "乌兹别克斯坦总统网站",
    kind: "新闻",
    time: "7 月 27 日",
    href: "https://www.president.uz/en/lists/news",
  },
  {
    title: "乌兹别克斯坦总统考察新塔什干建设进展",
    category: "城市与基础设施",
    source: "乌兹别克斯坦总统网站",
    kind: "新闻",
    time: "7 月 27 日",
    href: "https://www.president.uz/en/lists/news",
  },
  {
    title: "哈萨克斯坦总统举行第二次人工智能发展委员会会议",
    category: "科技与数字化",
    source: "哈萨克斯坦总统网站",
    kind: "新闻",
    time: "5 月 4 日",
    href: "https://mirror.akorda.kz/en/events?category=akorda",
  },
  {
    title: "哈萨克斯坦总统会见东京知事小池百合子",
    category: "外交与地区",
    source: "哈萨克斯坦总统网站",
    kind: "新闻",
    time: "5 月 22 日",
    href: "https://mirror.akorda.kz/en/events?category=akorda",
  },
  {
    title: "世界银行启动哈萨克斯坦 2026—2031 年国家伙伴框架",
    category: "经济与发展",
    source: "世界银行",
    kind: "新闻",
    time: "5 月 14 日",
    href: "https://www.worldbank.org/en/news/press-release/2026/05/14/connectivity-resilience-jobs-and-private-sector-led-growth-prioritized-in-new-partnership-with-kazakhstan",
  },
  {
    title: "IMF 工作组完成对哈萨克斯坦的访问",
    category: "经济与市场",
    source: "国际货币基金组织",
    kind: "新闻",
    time: "6 月 15 日",
    href: "https://www.imf.org/en/news/articles/2026/06/15/pr26207-kazakhstan-imf-staff-concludes-visit",
  },
  {
    title: "IMF 完成乌兹别克斯坦 2026 年第四条款磋商",
    category: "经济与市场",
    source: "国际货币基金组织",
    kind: "新闻",
    time: "6 月 18 日",
    href: "https://www.imf.org/en/news/articles/2026/06/18/pr-26214-uzbekistan-imf-executive-board-concludes-2026-article-iv-consultation",
  },
  {
    title: "欧洲复兴开发银行发布中亚与蒙古经济展望",
    category: "经济与市场",
    source: "欧洲复兴开发银行",
    kind: "新闻",
    time: "2026 年",
    href: "https://www.ebrd.com/home/news-and-events/news/2026/central-asia-and-mongolia-to-see-highest-economic-growth-in-the-ebrd-regions.html",
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
  },
  {
    title: "乌兹别克斯坦：IMF 2026 年第四条款磋商",
    category: "政策与经济",
    source: "国际货币基金组织",
    kind: "深读",
    time: "6 月 18 日",
    href: "https://www.imf.org/en/news/articles/2026/06/18/pr-26214-uzbekistan-imf-executive-board-concludes-2026-article-iv-consultation",
  },
  {
    title: "哈萨克斯坦：IMF 国家页面与经济数据",
    category: "数据与经济",
    source: "国际货币基金组织",
    kind: "深读",
    time: "2026 年",
    href: "https://www.imf.org/en/countries/kaz",
  },
  {
    title: "乌兹别克斯坦国家评估：EBRD 转型报告 2025—26",
    category: "政策与经济",
    source: "欧洲复兴开发银行",
    kind: "深读",
    time: "2026 年",
    href: "https://www.ebrd.com/content/dam/ebrd_dxp/assets/pdfs/office-of-the-chief-economist/transition-report-archive/transition-report-2025/country-assessments/Central-Asia/transition-report-2025-26-CA-Uzbekistan.pdf",
  },
  {
    title: "中亚与蒙古区域经济展望",
    category: "区域经济",
    source: "欧洲复兴开发银行",
    kind: "深读",
    time: "2026 年",
    href: "https://www.ebrd.com/home/news-and-events/news/2026/central-asia-and-mongolia-to-see-highest-economic-growth-in-the-ebrd-regions.html",
  },
];
