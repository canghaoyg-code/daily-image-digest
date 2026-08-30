export type SourceKind = "official" | "media-report" | "interview" | "post" | "comment" | "ruling";

export const sourceKindLabels: Record<SourceKind, string> = {
  official: "官方消息", "media-report": "媒体报道", interview: "采访原话",
  post: "原帖／原视频", comment: "评论", ruling: "裁决／文件",
};

export type BriefingItem = {
  title: string;
  section: "今日焦点" | "世界与新知" | "值得细读" | "人物、自然与轻读";
  format: "brief" | "standard" | "feature" | "visual" | "social";
  source: string; sourceType: string; sourceKind: SourceKind;
  author?: string; engagement?: string; time: string; href: string;
  discovery?: string; discoveryHref?: string; topic?: string; labels?: string[];
  recommendation?: string; verificationNote?: string;
  relatedSources?: Array<{ label: string; href: string }>;
  details: string[];
  visualStat?: { label: string; value: string; note: string };
  image?: string; imageAlt?: string; imageCaption?: string;
};

export const briefingMeta = {
  dateCode: "20260830",
  headline: "灾害现场之外，今天的世界也在加速换挡",
  updatedAt: "2026 年 8 月 30 日 · 今日更新 · 公开来源综合读讯",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "吉隆泥石流最新发布：16 人遇难、546 人失联，搜救仍在继续",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "feature",
    source: "新华社／中国新闻网／界面新闻", sourceType: "新闻发布会／救援进展", sourceKind: "media-report",
    time: "8 月 30 日 08:18—09:27", href: "https://www.news.cn/20260830/1a1e0e0371aa412a82f10acb63e2a5b2/c.html",
    discovery: "今日热搜：刚入警一年的她失联在吉隆口岸", discoveryHref: "https://news.china.com/socialgd/10000169/20260830/49707500.html", labels: ["持续更新", "跨境灾害"],
    image: "/images/20260830/jilong-rescue-01.png", imageAlt: "西藏吉隆泥石流灾区的救援人员和受损道路", imageCaption: "资料图：救援人员向吉隆口岸方向挺进。图片来源：澎湃新闻／央视新闻",
    visualStat: { label: "截至 8 月 29 日 18 时", value: "16 / 546", note: "中国境内 16 人遇难、546 人失联；遗体转运和身份识别加快推进" },
    details: ["新华社 8 月 30 日报道，西藏自治区人民政府新闻办公室通报：截至 8 月 29 日 18 时，吉隆泥石流灾害已造成 16 人遇难、546 人失联。", "界面新闻转述发布会信息称，冰岩崩从发生到冲击吉隆口岸约 6 至 7 分钟，约 0.7 平方公里、27 处建筑及附属设施被夷为平地；这些是报道中的现场与调查口径，不替报道外推结论。"],
    verificationNote: "本条采用 30 日发布会的最新时点；与前一日数字不同，是因为统计时点和发布口径更新。",
    relatedSources: [{ label: "中国新闻网：西藏吉隆泥石流灾害造成 16 人遇难 546 人失联", href: "https://www.chinanews.com.cn/sh/2026/08-30/10686625.shtml" }, { label: "界面新闻：口岸设施被夷为平地", href: "https://www.jiemian.com/article/15029243.html" }],
  },
  {
    title: "刚入警一年的她，在吉隆口岸失联",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "人民日报／中华网", sourceType: "人物报道／灾情现场", sourceKind: "media-report", author: "樊乐乐相关报道",
    time: "8 月 30 日 08:04", href: "https://news.china.com/socialgd/10000169/20260830/49707500.html", labels: ["人物现场", "原帖／评论"],
    image: "/images/20260830/jilong-rescue-02.png", imageAlt: "年轻边检民警在高原灾区工作的资料图", imageCaption: "资料图：吉隆边境管理支队民警在灾区工作。图片来源：人民日报／中华网",
    details: ["中华网 8 月 30 日转引报道：西藏大学毕业生樊乐乐曾作为志愿者参与日喀则地震救援，之后入职吉隆出入境边防检查站；8 月 26 日泥石流发生时，她坚守岗位并失联。文章保留的是这名年轻警员的经历与搜救线索。"],
    relatedSources: [{ label: "凤凰网／人民日报：刚入警一年的她，在吉隆口岸失联", href: "https://news.ifeng.com/c/8vzOLwWDj9b" }],
  },
  {
    title: "发布会现场：搜救尚未再发现幸存者，次生灾害风险仍被反复提及",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "中国新闻网／西藏自治区人民政府新闻办公室", sourceType: "新闻发布会", sourceKind: "official", author: "发布会现场信息",
    time: "8 月 30 日", href: "https://www.chinanews.com.cn/sh/2026/08-30/10686625.shtml", labels: ["原帖", "现场信息", "搜救进展"],
    image: "/images/20260830/jilong-rescue-01.png", imageAlt: "救援人员在西藏吉隆泥石流灾区开展现场勘察", imageCaption: "资料图：救援人员沿受灾路段踏勘。图片来源：澎湃新闻／央视新闻",
    details: ["公开发布会信息显示，搜救工作尚未再发现幸存者，遗体转运、身份识别和失联人员排查仍在推进；堰塞湖、山体和雨水情监测也被列为后续工作。这里保留的是发布会对当时现场的说明。"],
  },
  {
    title: "“不觉得西藏泥石流受灾的热度少得可怜吗？”",
    topic: "吉隆泥石流救援", section: "今日焦点", format: "social",
    source: "Reddit · r/China_irl", sourceType: "公开讨论原帖", sourceKind: "post", author: "页面未显示发布者姓名",
    time: "页面显示 8 月 30 日", href: "https://www.reddit.com/r/China_irl/comments/1w1l7b3/", labels: ["原帖", "热度讨论", "跨平台视角"],
    image: "/images/20260830/jilong-rescue-02.png", imageAlt: "泥石流灾区救援人员在受损道路旁开展工作", imageCaption: "资料图：泥石流灾区救援现场。图片来源：澎湃新闻／央视新闻",
    details: ["这条公开讨论把问题放在‘灾情为什么没有持续占据注意力’上，评论里既有人认为国内平台一直在播报，也有人认为普通用户接触到的信息仍然有限。它记录的是讨论本身，不替任何一方判断热度高低。"],
  },
  {
    title: "尼泊尔洪灾进入搜救关键期：隧道里仍可能有被困工人",
    topic: "尼泊尔洪灾", section: "今日焦点", format: "visual", source: "《世界报》／法新社／美国地质调查局", sourceType: "灾情报道／卫星与现场线索", sourceKind: "media-report",
    time: "8 月 30 日 01:57，更新 02:08", href: "https://www.lemonde.fr/en/archives-du-monde/30-08-2026/", labels: ["救援现场", "跨境灾害"],
    image: "/images/20260830/rain-warning.jpeg", imageAlt: "洪水和泥石流灾害后的救援现场资料图", imageCaption: "资料图：洪水预警与受灾区域示意。图片来源：中国天气网／新华网",
    visualStat: { label: "《世界报》报道口径", value: "约 3,000", note: "尼泊尔与中国境内失联人数合计接近 3,000；伤亡数字随搜救继续变化" },
    details: ["《世界报》8 月 30 日档案页援引法新社报道，尼泊尔军方已向 Trishuli 3A 水电站隧道内送入管道，现场仍希望营救可能存活的工人；美国地质调查局认为，冰川崩塌是造成致命洪流的原因之一。", "这条内容的重点不是重新汇总旧数字，而是记录搜救从地表道路转向隧道和地下空间后的新线索。"],
  },
  {
    title: "霍尔木兹海峡仍关闭：伊朗称与阿曼已有通行共识，但要等美国履约",
    topic: "霍尔木兹海峡", section: "世界与新知", format: "standard", source: "香港电台／伊朗外交部副部长", sourceType: "国际局势／官方说法", sourceKind: "official",
    time: "8 月 30 日 04:15", href: "https://news.rthk.hk/rthk/ch/component/k2/1868104-20260830.htm", labels: ["国际局势", "能源通道"],
    details: ["伊朗外交部副部长加里巴巴迪表示，伊朗已与阿曼就霍尔木兹海峡通行安排达成共识，但要等美国履行谅解备忘录承诺后才执行；他同时说海峡目前仍关闭，船只需要与伊朗方面协调。", "这里并列的是伊方公开说法，‘已有共识’与‘尚未重新开放’同时存在，不能压缩成‘海峡已经恢复通航’。"],
  },
  {
    title: "巴基斯坦医院火警造成 14 名初生婴儿死亡，8 名官员被停职",
    topic: "伊斯兰堡医院火警", section: "世界与新知", format: "brief", source: "香港电台／法新社", sourceType: "事故调查／政府处置", sourceKind: "media-report",
    time: "8 月 30 日 02:09", href: "https://news.rthk.hk/rthk/ch/component/k2/1868100-20260830.htm", labels: ["事故", "公共安全"],
    details: ["伊斯兰堡一间医院的育婴室日前起火，15 名初生婴儿中只有 1 人获救。香港电台报道，初步调查发现现场没有火警警报器或自动洒水系统，许多当值人员也不在岗位；总理随后下令暂停 8 名官员职务，并追究刑事责任。"],
  },
  {
    title: "基辅州武器库遇袭波及附近建筑：37 人死亡，乌方启动责任调查",
    topic: "俄乌冲突", section: "世界与新知", format: "standard", source: "香港电台／路透社／乌克兰总统", sourceType: "袭击报道／官方回应", sourceKind: "media-report",
    time: "8 月 30 日 00:17", href: "https://news.rthk.hk/rthk/ch/component/k2/1868097-20260830.htm", labels: ["国际现场", "战争影响"],
    details: ["香港电台引述报道，俄罗斯无人机袭击乌克兰基辅州布恰区一处军用武器库，弹药、地雷和无人机爆炸，造成 37 人死亡、超过 40 人受伤，近 400 人疏散。乌克兰总统泽连斯基称武器库不应建在该处，并已调查官员是否玩忽职守。"],
  },
  {
    title: "内塔尼亚胡罕见谴责约旦河西岸定居者暴力，批评者仍质疑执法力度",
    topic: "约旦河西岸", section: "世界与新知", format: "social", source: "新华社／以色列总理办公室／以色列媒体", sourceType: "政治声明／争议背景", sourceKind: "official",
    time: "8 月 30 日 09:47", href: "https://www.xinhuanet.com/20260830/f94a8edb995045348e66016616423cfe/c.html", labels: ["公开声明", "争议观点"],
    details: ["新华社报道，内塔尼亚胡称约旦河西岸古斯拉村和贾卢德村发生的袭击是‘暴力犯罪’，要求执法部门处理。报道同时转述批评者的说法：近几个月定居者暴力增加，但施暴者很少被起诉。两种表述分别属于总理声明和批评者观点。"],
  },
  {
    title: "挪威新王哈康八世首次公开讲话：从悼念父亲到接过自己的风格",
    topic: "挪威王室", section: "人物、自然与轻读", format: "standard", source: "香港电台／路透社", sourceType: "王室讲话／公众悼念", sourceKind: "media-report",
    time: "8 月 30 日 03:07", href: "https://news.rthk.hk/rthk/ch/component/k2/1868103-20260830.htm", labels: ["人物", "公众现场"],
    image: "/images/20260830/king-harald.jpg", imageAlt: "挪威已故国王哈拉尔五世与王室成员的资料图", imageCaption: "资料图：挪威王室成员。图片来源：路透社／香港电台",
    details: ["哈康八世在父亲哈拉尔五世去世后发表继位以来首次公开讲话，称父亲始终坚守价值与承诺。香港电台报道，数以千计民众到奥斯陆王宫外献花；新王还引用父亲的提醒：每个人都要找到自己的风格，做真实的自己。"],
  },
  {
    title: "HICOOL 峰会闭幕：机器人、脑机接口和医药项目在展台上争夺注意力",
    topic: "HICOOL 2026", section: "世界与新知", format: "visual", source: "北京日报／北京市人民政府", sourceType: "创业峰会／现场观察", sourceKind: "media-report",
    time: "8 月 30 日 09:32", href: "https://www.beijing.gov.cn/fuwu/lqfw/gggs/202608/t20260830_4842870.html", labels: ["科技创业", "展会现场"],
    image: "/images/20260830/data-expo-01.jpg", imageAlt: "科技展会现场的机器人展示", imageCaption: "8 月 29 日 HICOOL 峰会闭幕现场，观众与机器人互动。图片来源：武亦彬／北京日报",
    details: ["北京日报报道，HICOOL 2026 全球创业者峰会 8 月 29 日闭幕，来自 30 多个国家的 600 多家高科技创新企业参展。展区覆盖智能机器人、高级别自动驾驶、医药健康、脑机接口和绿色能源。", "原文看点：强化学习领域专家理查德·萨顿在闭幕式上把 AI 从‘人类数据时代’推向‘经验时代’，并发布面向机器人自主进化的学院计划。"],
  },
  {
    title: "上海‘模速空间’的年轻团队：从一双机器人的眼睛到 300 多款产品",
    topic: "模速空间", section: "值得细读", format: "feature", source: "人民日报／人民网", sourceType: "产业观察／人物采访", sourceKind: "media-report",
    time: "8 月 30 日 08:41", href: "https://cpc.people.com.cn/BIG5/n1/2026/0830/c64387-40788768.html", labels: ["人工智能", "青年创业"],
    image: "/images/20260830/data-expo-02.jpg", imageAlt: "人工智能和机器人产品在科技展会上展示", imageCaption: "资料图：人工智能产品与机器人展示。图片来源：新华社／人民网",
    details: ["人民网报道，上海‘模速空间’里，一家公司的类脑视觉芯片完成流片，分辨率提升至 500 万像素、功耗较传统传感器降低约 80%。这里聚集了算力、模型、智能体和硬件团队，产品体验店摆出 300 多款产品。", "原文看点：它写的不是一家明星公司的故事，而是‘上下楼就是上下游’的创新社区如何用真场景、算力和反馈把初创企业托起来。"],
  },
  {
    title: "2026 服贸会预告：首秀展区与惠民活动，把服务贸易做成一张体验清单",
    topic: "服贸会", section: "值得细读", format: "standard", source: "新华社／人民网", sourceType: "展会预告／政策信息", sourceKind: "media-report",
    time: "8 月 30 日 07:08", href: "https://finance.people.com.cn/n1/2026/0830/c1004-40788676.html", labels: ["服务贸易", "展会"],
    image: "/images/20260830/housing-policy.png", imageAlt: "展览和服务贸易政策信息图资料图", imageCaption: "资料图：政策与展会要点图。图片来源：新华社／新浪财经",
    details: ["新华社报道，2026 年中国国际服务贸易交易会将于 9 月 9 日至 13 日在北京举办，发布会介绍了首秀展区和惠民活动。预告把新服务、新场景和公众体验放在同一张清单上，读者可以按展区寻找具体内容。"],
    recommendation: "原文看点：它把‘服务贸易’这个宏观词拆成观众能在现场看见、体验和比较的项目。",
  },
  {
    title: "就业服务提质：稳岗返还、招聘直播和青年社区岗位一起加力",
    topic: "青年就业", section: "今日焦点", format: "standard", source: "新华社／人民网", sourceType: "就业政策／公共服务", sourceKind: "official",
    time: "8 月 30 日 05:35", href: "https://society.people.com.cn/n1/2026/0830/c1008-40788627.html", labels: ["公共事务", "青年就业"],
    image: "/images/20260830/data-expo-02.jpg", imageAlt: "科技与就业服务场景的资料图", imageCaption: "资料图：产业展会中的技术交流场景。图片来源：新华社／人民网",
    details: ["人民网刊发新华社报道：山东临沂拨付稳岗返还资金 2889.98 万元，惠及 860 家企业、稳定 7.96 万个岗位；第七届‘百日千万招聘专项行动’已开展线上线下招聘 2.2 万场次。报道还写到，部分地区把招聘与旅游、消费、体育等场景结合，面向高校毕业生提供社区助理和技能培训。"],
  },
  {
    title: "网络文学加速出海：从翻译卖版权走向 IP、短剧与全球发行",
    topic: "网络文学出海", section: "值得细读", format: "feature", source: "人民日报／人民网／中国作协蓝皮书", sourceType: "文化观察／行业数据", sourceKind: "media-report",
    time: "8 月 30 日 06:00", href: "https://ent.people.com.cn/n1/2026/0830/c1012-40788662.html", labels: ["文化出海", "行业观察"],
    details: ["人民网报道，截至 2025 年底，中国网络文学累计向海外输出作品超过 13 万部，海外注册用户约 2.5 亿，海外营收突破 80 亿元。报道写到，行业正在形成‘网文 IP—海外阅读分发—短剧改编—全球发行’的内容链路。", "这条是当天发布的文化行业观察，数据回顾的是 2025 年度，不把统计年度误写成今天发生的事件。"],
    recommendation: "原文看点：它把‘出海’从流量口号写成了内容、翻译、社交平台和产业链的连续动作。",
  },
  {
    title: "常冰玉 10 比 7 击败赵心童：00 后首夺排名赛冠军",
    topic: "武汉斯诺克公开赛", section: "人物、自然与轻读", format: "visual", source: "中国新闻网／新华社／微博公开视频", sourceType: "体育赛事／赛后讨论", sourceKind: "media-report",
    time: "8 月 30 日 06:09", href: "https://www.chinanews.com.cn/ty/2026/08-30/10686610.shtml", labels: ["体育", "中国德比"],
    image: "/images/20260830/snooker.jpeg", imageAlt: "中国斯诺克选手在武汉公开赛比赛中击球", imageCaption: "8 月 29 日，中国选手常冰玉在武汉公开赛决赛中比赛。图片来源：张畅／中新社",
    visualStat: { label: "武汉公开赛决赛", value: "10 : 7", note: "常冰玉击败赵心童，获得个人首个斯诺克排名赛冠军" },
    details: ["中国新闻网报道，常冰玉在决赛第一阶段 5 比 4 领先，第二阶段双方战至 7 比 7 后，他连续拿下最后三局，以 10 比 7 赢得职业生涯首个排名赛冠军。赵心童此前刚登上世界排名第一。", "微博公开视频把注意力放在‘00 后夺冠’、决赛反扑和最后几局的高压清台上；不同入口关注的是比分、年龄和比赛过程。"],
    relatedSources: [{ label: "微博公开视频：常冰玉击败世界第一赵心童夺冠", href: "https://weibo.com/2/detail/5337537560449565" }, { label: "凤凰网／新华社：常冰玉生涯首冠", href: "https://sports.ifeng.com/c/8vznClEKWc1" }],
  },
  {
    title: "金饰克价一日下调近 40 元：价格牌的波动如何传到消费者眼前",
    topic: "金饰价格", section: "世界与新知", format: "visual", source: "香港商报／多家品牌公开报价", sourceType: "贵金属价格／消费观察", sourceKind: "media-report",
    time: "8 月 30 日 08:24", href: "https://www.hkcd.com.hk/hkcdweb/content/2026/08/30/content_8772320.html", labels: ["消费", "金价"],
    visualStat: { label: "8 月 29 日品牌足金饰品", value: "1344—1348 元/克", note: "多品牌单日下调约 36—39 元；价格随国际金价和市场预期波动" },
    details: ["香港商报整理的公开报价显示，周生生、六福、老庙和老凤祥足金饰品单日下调约 36 至 39 元/克；报道同时提到 COMEX 黄金期货大跌和美联储官员讲话。它是一条价格与消息面的消费观察，不构成投资建议。"],
  },
  {
    title: "Anthropic 版权诉讼：音乐出版商把训练数据授权问题推上法庭",
    topic: "Anthropic 版权诉讼", section: "值得细读", format: "feature", source: "36 氪／索尼、华纳等音乐出版商", sourceType: "企业诉讼／版权争议", sourceKind: "media-report",
    time: "8 月 29 日，背景阅读", href: "https://www.36kr.com/newsflashes/3961338120273281", labels: ["背景", "人工智能", "版权"],
    image: "/images/20260830/anthropic.jpg", imageAlt: "Anthropic 标志和 Claude 人工智能产品资料图", imageCaption: "资料图：Anthropic 与 Claude。图片来源：The Guardian",
    details: ["36 氪快讯称，索尼、华纳等音乐出版商提起诉讼，指控 Anthropic 通过种子下载、网页爬取等方式获取受版权保护的音乐作品，用于开发和运营 Claude。诉讼中的指控、被告回应和法院最终认定仍需分别看待。", "这条不是当天突发，而是保留作背景阅读：生成式 AI 训练数据究竟如何授权、如何计价，正在不断进入法庭。"],
    recommendation: "原文看点：同一家公司面对的安全采购争议与训练数据版权争议，落在两张不同的法律桌上。",
  },
  {
    title: "中国汽车进入新能源主导阶段：一场持续 25 年的产业换道",
    topic: "中国新能源汽车", section: "值得细读", format: "feature", source: "新华社", sourceType: "产业数据／行业观察", sourceKind: "media-report",
    time: "8 月 27 日，长期背景", href: "https://www.news.cn/20260827/eb8cd672b19548d687cbc6a9258da8ab/c.html", labels: ["背景", "汽车产业"],
    image: "/images/20260830/traffic-law.jpeg", imageAlt: "新能源汽车在物流基地等待装船的资料图", imageCaption: "资料图：中国新能源汽车装船运输场景。图片来源：新华社",
    details: ["新华社报道，今年以来中国新能源汽车零售渗透率连续 4 个月超过 60%，中国汽车市场正在进入新能源主导阶段。文章回溯从 2001 年电动汽车重大科技专项到今天产业集群的形成，写的是结构变化而非一日销量。"],
    recommendation: "原文看点：它把‘新能源车卖得多’放回 25 年产业政策、市场竞争和物流体系的长时间线上。",
  },
  {
    title: "心脏病统一定义首次改写：女性更常见的三类心梗进入诊断核心",
    topic: "女性心脏健康", section: "值得细读", format: "visual", source: "The Guardian／欧洲心脏病学会", sourceType: "医学指南／女性健康", sourceKind: "media-report",
    time: "8 月 28 日，长期背景", href: "https://www.theguardian.com/society/2026/aug/28/doctors-care-revolution-agree-first-universal-definition-heart-attack", labels: ["背景", "医学指南", "性别差异"],
    image: "/images/20260830/heart-guideline.jpg", imageAlt: "女性患者手指夹着心率监测设备的医学资料图", imageCaption: "资料图：心率监测。图片来源：David Sillitoe／The Guardian",
    visualStat: { label: "新指南关注", value: "3 类 / 10 倍 / 更低阈值", note: "三类心梗在女性中最高可多见 10 倍；女性 troponin 诊断阈值将单独考虑" },
    details: ["报道介绍的新指南把冠状动脉痉挛、栓塞和自发性冠状动脉夹层提升到更重要的位置，并提出按性别设置 troponin 诊断阈值。它承认疾病机制与检测水平存在差异，不替代个人诊断。"],
  },
  {
    title: "日本一年捕杀 1.4 万头熊，冲突却没有消失：保护成功之后的治理难题",
    topic: "日本人与熊冲突", section: "人物、自然与轻读", format: "feature", source: "The Guardian／日本环境省／IUCN 专家", sourceType: "人与野生动物冲突", sourceKind: "media-report",
    time: "8 月 27 日—29 日，长期背景", href: "https://www.theguardian.com/environment/2026/aug/27/bears-killed-13-people-japan-14000-bears", labels: ["背景", "人与自然", "政策争论"],
    image: "/images/20260830/japan-bear.jpg", imageAlt: "日本亚洲黑熊的自然保护资料图", imageCaption: "资料图：亚洲黑熊。图片来源：petesphotography／Getty via The Guardian",
    details: ["报道写道，2025 年 4 月至 2026 年 1 月，日本捕杀熊超过 1.4 万头；此前一年熊袭击造成 13 人死亡。森林坚果歉收、乡村人口减少与废弃果园，都让熊更频繁地靠近居住地。", "这篇背景文章的价值在于，它没有把熊写成单一的危险动物，而是追问保护成功如何在气候和人口变化中制造新的管理压力。"],
    recommendation: "原文看点：冲突不只发生在山林，也发生在数据、治理工具和人类如何重新安排乡村生活的争论里。",
  },
  {
    title: "“急救时就让他们穿鞋进来”——一双鞋也有自己的转运路线",
    section: "人物、自然与轻读", format: "social", source: "金泽市消防局 Instagram／The Guardian", sourceType: "公共服务原视频与评论", sourceKind: "post", author: "kanazawa_syoubou／未具名评论者",
    time: "8 月 5 日发布，8 月 28—29 日报道，轻读", engagement: "视频观看超过 50 万次；该评论获赞超过 800", href: "https://www.instagram.com/p/DbqGfGfox3f/", labels: ["轻读", "公共服务"],
    image: "/images/20260830/paramedics-shoes.jpg", imageAlt: "日本消防员演示急救人员在门口摆放鞋子的位置", imageCaption: "资料图：消防员演示急救鞋的摆放位置。图片来源：金泽市消防局 Instagram via The Guardian",
    details: ["金泽市消防部门提醒居民，不要在急救人员进入住宅后替他们把鞋摆正：三名担架搬运者会按角色预先放鞋，位置被改动可能让转运慢约 30 秒。评论区最受欢迎的回应更直接：‘急救时就让他们穿鞋进来。’"],
    relatedSources: [{ label: "The Guardian：日本急救鞋礼仪引发讨论", href: "https://www.theguardian.com/world/2026/aug/28/never-tidy-paramedics-shoes-japan-custom-etiquette" }],
  },
];

export function validateBriefingItems(items: BriefingItem[]) {
  const titles = new Set<string>();
  let imageCount = 0;
  for (const item of items) {
    if (!item.sourceKind || !sourceKindLabels[item.sourceKind]) throw new Error(`条目缺少来源性质：${item.title}`);
    if (!item.href || !item.details.length) throw new Error(`条目缺少正文或出处：${item.title}`);
    if (titles.has(item.title)) throw new Error(`存在重复编辑单位：${item.title}`);
    titles.add(item.title);
    if ((item.sourceKind === "post" || item.sourceKind === "comment") && /(?:search|weibo\?q=|douyin\.com\/search|toutiao\.com\/search)/i.test(item.href)) throw new Error(`原帖或评论不能使用搜索／话题页链接：${item.title}`);
    if (item.image) {
      imageCount += 1;
      if (!item.image.startsWith("/images/20260830/") || !item.imageAlt || !item.imageCaption) throw new Error(`图片必须是本期站内资源，并包含来源和替代文本：${item.title}`);
    }
  }
  if (imageCount < 16 || imageCount / items.length < 0.7) throw new Error(`图片密度不足：${imageCount}/${items.length}`);
  if (items.at(-1)?.section !== "人物、自然与轻读") throw new Error("最后一条必须是轻内容");
  return items;
}
