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
    title: "哈萨克斯坦公布 2026 年 8 月公共假期安排",
    category: "社会与生活",
    source: "Tengri News",
    kind: "新闻",
    time: "7 月",
    href: "https://en.tengrinews.kz/healthy/kazakhstanis-to-have-10-days-off-in-august-2026-272157/",
  },
  {
    title: "乌兹别克斯坦任命新任驻白俄罗斯大使",
    category: "外交与地区",
    source: "Kun.uz",
    kind: "新闻",
    time: "7 月 28 日",
    href: "https://kun.uz/en/news/list",
  },
  {
    title: "乌兹别克斯坦拟加强医疗机构监管并引入认证要求",
    category: "社会与公共服务",
    source: "Kun.uz",
    kind: "新闻",
    time: "5 月 6 日",
    href: "https://kun.uz/en/news/list?f=latest&next=1778131383",
  },
  {
    title: "俄罗斯与乌兹别克斯坦启动核电站建设",
    category: "能源",
    source: "MarketScreener · Reuters",
    kind: "新闻",
    time: "6 月",
    href: "https://www.marketscreener.com/news/russia-uzbekistan-start-construction-of-nuclear-power-plant-ce7f5ddddb81f521/",
  },
  {
    title: "哈萨克斯坦推进咸海修复、水利基础设施与节水改革",
    category: "环境与水资源",
    source: "The Astana Times",
    kind: "新闻",
    time: "7 月 22 日",
    href: "https://astanatimes.com/",
  },
  {
    title: "外媒关注哈萨克斯坦的人工智能推进与对外关系议题",
    category: "科技与数字化",
    source: "The Astana Times",
    kind: "新闻",
    time: "7 月",
    href: "https://astanatimes.com/all/",
  },
  {
    title: "哈萨克斯坦最高法院就总统再次参选资格作出裁决",
    category: "政治与法律",
    source: "美联社",
    kind: "新闻",
    time: "7 月 7 日",
    href: "https://apnews.com/article/27648aa4d174d0750b5bd217ad4cbe2b",
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
