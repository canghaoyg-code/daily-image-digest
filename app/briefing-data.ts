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
  updatedAt: "8 月 11 日 · 12:30",
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
  {
    title: "X 线索｜通用汽车拟出售印第安纳电池合资项目部分权益",
    summary:
      "来自 Bloomberg 关注动态的即时报道线索，涉及通用汽车与三星 SDI 的电池合资项目；等待企业公告或独立报道进一步确认。",
    category: "商业与产业",
    source: "X · Bloomberg",
    kind: "观点",
    time: "今天",
    href: "https://x.com/business/status/2087013665144758446",
  },
  {
    title: "X 线索｜市场关注日银 9 月会议的进一步加息可能",
    summary:
      "来自外汇交易员转述的市场消息；它与日银近期关于通胀与货币宽松程度的公开讨论相呼应，但不作为政策预告。",
    category: "宏观与市场",
    source: "X · 外汇交易员",
    kind: "观点",
    time: "今天",
    href: "https://x.com/fxtrader/status/2087011666991145237",
  },
  {
    title: "樟宜将启动 40 亿新元空管系统与基础设施升级",
    summary:
      "新加坡计划分阶段改造空管设施和三十多套航行系统，并评估让 AI 协助空管员进行规划与态势判断。",
    category: "科技与基础设施",
    source: "CNA",
    kind: "新闻",
    time: "7 月 22 日",
    href: "https://www.channelnewsasia.com/singapore/changi-airport-control-tower-upgrading-4-billion-air-navigation-6270166",
  },
  {
    title: "Google 推出面向防御方的 Gemini 3.5 Flash Cyber",
    summary:
      "Google DeepMind 将这款轻量模型用于漏洞发现、验证与修复，并以有限访问方式优先面向政府和可信合作方部署。",
    category: "AI 与安全",
    source: "Google DeepMind",
    kind: "新闻",
    time: "7 月 21 日",
    href: "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/",
  },
  {
    title: "澳大利亚与加拿大把关键矿产合作延伸至防务产业协作",
    summary:
      "两国在联合声明中提出扩大关键矿产、供应链韧性和防务技术合作，值得作为资源安全与产业政策的长期观察点。",
    category: "资源与地缘经济",
    source: "澳大利亚总理办公室",
    kind: "新闻",
    time: "3 月 5 日",
    href: "https://www.pm.gov.au/media/australia-canada-joint-statement",
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
  {
    title: "代理式 AI 正在怎样改变科学计算？",
    summary:
      "OpenAI 的田野报告聚焦科研软件的维护难题，并讨论编码代理如何降低工程工作成本、支持数据密集型研究。",
    category: "AI 与研究",
    source: "OpenAI",
    kind: "深读",
    time: "7 月 28 日",
    href: "https://openai.com/index/scientific-computing-agentic-ai/",
  },
  {
    title: "AI 生物安全：能力扩展与防滥用如何并行？",
    summary:
      "Google DeepMind 与 Isomorphic Labs 说明其生物韧性框架，讨论科研系统如何用于防疫、对策研发与风险控制。",
    category: "AI 与安全",
    source: "Google DeepMind",
    kind: "深读",
    time: "7 月 16 日",
    href: "https://deepmind.google/blog/our-approach-to-bioresilience/",
  },
];
