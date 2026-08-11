export type BriefingItem = {
  title: string;
  summary: string;
  category: string;
  source: string;
  kind: "新闻" | "观点" | "深读";
  time: string;
  href: string;
  details?: string[];
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
    details: [
      "这不是政策决定本身，而是会议中委员对经济与通胀的判断记录。AI 相关资本开支正在成为观察日本需求强度的新变量。",
      "值得继续看的是：技术投资带来的价格压力，是否会改变日本银行对后续利率路径的判断。",
    ],
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
    details: [
      "这条消息把科技投资和宏观压力放在同一张图里：服务器、电子与数据中心需求在支撑部分增长，能源与贸易摩擦则带来另一端的不确定性。",
    ],
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
    title: "樟宜将启动 40 亿新元空管系统与基础设施升级",
    summary:
      "新加坡计划分阶段改造空管设施和三十多套航行系统，并评估让 AI 协助空管员进行规划与态势判断。",
    category: "科技与基础设施",
    source: "CNA",
    kind: "新闻",
    time: "7 月 22 日",
    href: "https://www.channelnewsasia.com/singapore/changi-airport-control-tower-upgrading-4-billion-air-navigation-6270166",
    details: [
      "它不只是机场扩建消息，也反映了交通基础设施把 AI 用于规划、调度与辅助判断的更广泛趋势。",
    ],
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
    details: [
      "重点不在“更强的模型”本身，而在其被限定用于漏洞发现、验证与修复等防御场景，显示 AI 安全能力正进入更具体的部署阶段。",
    ],
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
    details: [
      "关键矿产正在从贸易议题转向产业安全议题。合作延伸到供应链韧性与防务技术，意味着资源国之间的政策联动值得长期跟踪。",
    ],
  },
  {
    title: "IMF：科技动能托住增长，但全球经济仍处在冲突与能源冲击之间",
    summary:
      "国际货币基金组织在 7 月更新中预计，2026 年全球增长为 3.0%；技术相关投资支撑部分经济体，但能源冲击与金融市场重估仍是主要风险。",
    category: "宏观与市场",
    source: "国际货币基金组织",
    kind: "新闻",
    time: "7 月 8 日",
    href: "https://www.imf.org/en/publications/weo/issues/2026/07/08/world-economic-outlook-update-july-2026",
    details: [
      "这份判断把 AI 驱动的技术链需求与地缘冲突的拖累并列，是理解今年市场“局部很热、整体仍脆弱”的一条宏观线索。",
    ],
  },
  {
    title: "IEA：油市开始修复，但供应恢复仍取决于局势是否继续缓和",
    summary:
      "国际能源署称，随着霍尔木兹海峡运输恢复，6 月全球石油供应明显回升；不过产量仍低于冲突前水平，后续路径高度依赖局势发展。",
    category: "能源与地缘经济",
    source: "国际能源署",
    kind: "新闻",
    time: "7 月",
    href: "https://www.iea.org/reports/oil-market-report-July-2026?mode=overview",
    details: [
      "能源价格会通过通胀、航运与企业成本传导到更广泛的市场。这条数据可与 IMF 的宏观判断一起阅读。",
    ],
  },
  {
    title: "Google DeepMind 推出 Co-Scientist，尝试把多智能体用于科研假设生成",
    summary:
      "Google DeepMind 介绍了一套以 Gemini 为基础的多智能体系统，用于迭代提出、讨论和改进生命科学等复杂问题的研究假设。",
    category: "AI 与研究",
    source: "Google DeepMind / Nature",
    kind: "新闻",
    time: "5 月 19 日",
    href: "https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/",
    details: [
      "它更像研究者的协作工具而不是自动得出结论的机器；价值在于扩大假设空间，最终验证仍由领域专家完成。",
    ],
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
    details: [
      "文章不仅介绍支持计划，也给出科研人员怎样把模型用于文献、假设、代码与协作的具体工作流。",
    ],
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
    details: [
      "适合关注一个内部实验如何逐步形成产品：团队边界、用户反馈与可靠性要求，往往比模型能力本身更决定产品形态。",
    ],
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
    details: [
      "它关注的不是用 AI 替代科学家，而是那些长期缺乏维护、却又拖慢研究节奏的软件基础设施。",
    ],
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
    details: [
      "文章把生命科学的正向应用与能力滥用风险一起讨论，适合作为理解 AI 安全治理具体落点的材料。",
    ],
  },
];
