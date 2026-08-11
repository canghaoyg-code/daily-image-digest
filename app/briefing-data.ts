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

export const briefingMeta = {
  label: "本次采集",
  headline: "已更新",
  updatedAt: "8 月 11 日 · 11:30",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "日银内部意见：AI 相关需求正在推高经济与价格",
    summary:
      "日本银行 6 月会议意见提到，AI 需求正高于预期地推升经济活动与价格；委员对后续利率调整仍有分歧。",
    category: "宏观与市场",
    source: "日本银行",
    kind: "新闻",
    time: "6 月 16 日",
    href: "https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260616.pdf",
  },
  {
    title: "新加坡：AI 投资正在抵消能源成本与关税压力",
    summary:
      "新加坡金管局称，AI 相关的电子、服务器基础设施需求仍在支撑科技部门，但同时提示估值与外部冲击风险。",
    category: "AI 与产业",
    source: "CNA / MAS",
    kind: "新闻",
    time: "7 月 27 日",
    href: "https://www.channelnewsasia.com/singapore/economy-ai-oil-prices-middle-east-conflict-trump-tariffs-mas-6279896",
  },
  {
    title: "X 线索｜澳大利亚与越南将深化防务与关键矿产合作",
    summary:
      "来自 Bloomberg 关注动态的即时报道线索；尚未用独立原始公告复核，因此按线索而非事实新闻呈现。",
    category: "国际与社会",
    source: "X · Bloomberg",
    kind: "观点",
    time: "今天",
    href: "https://x.com/business/status/2087014931497472425",
  },
  {
    title: "X 线索｜CNBC：新加坡增长预期继续受 AI 投资带动",
    summary:
      "来自 CNBC 关注动态的即时报道线索；与已收录的 MAS 宏观判断方向一致，但仍保留其线索属性。",
    category: "商业与市场",
    source: "X · CNBC",
    kind: "观点",
    time: "今天",
    href: "https://x.com/CNBC/status/2087010995084431673",
  },
];

export const deepReads: BriefingItem[] = [
  {
    title: "给 10 万研究者开放前沿模型，能带来什么？",
    summary:
      "OpenAI 介绍面向高校研究者的支持计划，并讨论模型、工具与科研工作流如何结合。",
    category: "AI 与研究",
    source: "OpenAI",
    kind: "深读",
    time: "7 月 29 日",
    href: "https://openai.com/index/chatgpt-for-academic-researchers/",
  },
  {
    title: "Claude Code 是怎样从内部工具走向产品的",
    summary:
      "Anthropic 以产品与工程团队的视角回顾 Claude Code 的形成过程，适合作为 AI 编程工具产品化的案例阅读。",
    category: "工具与产品",
    source: "Anthropic",
    kind: "深读",
    time: "7 月 6 日",
    href: "https://www.anthropic.com/features/making-of-claude-code",
  },
];
