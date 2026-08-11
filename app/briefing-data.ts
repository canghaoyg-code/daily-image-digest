export type BriefingItem = {
  title: string;
  summary: string;
  category: string;
  source: string;
  kind: "新闻" | "观点" | "深读";
  time: string;
  href: string;
  featured?: boolean;
};

// The scheduled collection task replaces these preview entries with verified items.
export const briefingItems: BriefingItem[] = [
  {
    title: "首轮采集将在下一次定时任务后显示",
    summary:
      "系统会将重复报道合并，并保留原始来源、发布时间和核验状态，避免把同一事件读上好几遍。",
    category: "更新说明",
    source: "早晚读讯",
    kind: "新闻",
    time: "等待采集",
    href: "#collection",
    featured: true,
  },
  {
    title: "X 关注动态会被整理为可追溯的线索",
    summary:
      "官方账号、媒体和个人分析会被分别标注；投资观点和个人判断不会被当成已证实新闻。",
    category: "AI 与产业",
    source: "X 关注列表",
    kind: "观点",
    time: "等待采集",
    href: "#collection",
  },
  {
    title: "重要新闻保留多来源核验结果",
    summary:
      "政策、市场、公共安全与国际事件优先链接到权威媒体或原始公告，并明确尚待证实的信息。",
    category: "国际与社会",
    source: "核验规则",
    kind: "新闻",
    time: "等待采集",
    href: "#collection",
  },
];

export const deepReads: BriefingItem[] = [
  {
    title: "深度阅读不追求更长，而追求更值得读",
    summary:
      "每篇文章会说明它的核心论点、证据质量与不同看法，帮助你在几秒内决定是否打开原文。",
    category: "阅读方法",
    source: "早晚读讯",
    kind: "深读",
    time: "等待采集",
    href: "#collection",
    featured: true,
  },
  {
    title: "优先保留有原创观点的作者文章",
    summary:
      "来自技术、商业、研究和社会观察领域的长文会与即时新闻分开呈现，不让观点淹没事实。",
    category: "观点与分析",
    source: "来源筛选规则",
    kind: "深读",
    time: "等待采集",
    href: "#collection",
  },
];
