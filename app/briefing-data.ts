export type BriefingItem = {
  title: string;
  source: string;
  sourceType: string;
  time: string;
  href: string;
  discovery?: string;
  discoveryHref?: string;
  labels?: string[];
  recommendation?: string;
  details: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const briefingMeta = {
  dateCode: "20260824",
  headline: "热度决定先看什么，质量决定留下什么",
  updatedAt: "2026 年 8 月 24 日 · 第一轮多渠道采集",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "“无座票为何与二等座同价”登上热搜，12306 回应定价规则",
    source: "中新经纬／铁路 12306 客服",
    sourceType: "媒体核实／公共服务回应",
    time: "8 月 24 日",
    href: "https://finance.eastmoney.com/a/202608243850783612.html",
    discovery: "微博热搜：#12306回应无座票二等座同价#",
    discoveryHref: "https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23",
    labels: ["微博高热", "媒体核实"],
    details: [
      "铁路 12306 客服表示，“无座票”的全称是“无固定座位票”，与二等座属于同一席别和等级，因此票价一致；并非所有列车都发售无座票，通常只在部分线路和高峰时段少量发售。",
      "无座旅客可以临时使用尚未售出或暂时无人的座位，但持票旅客上车后需要让座。关于差异化定价的建议，客服称已经记录并将反馈。",
    ],
  },
  {
    title: "记者暗访餐饮消杀：多家门店残留液体检出敌敌畏，当地已介入",
    source: "新京报／厦门属地监管部门",
    sourceType: "调查报道／监管跟进",
    time: "8 月 24 日",
    href: "https://www.bjnews.com.cn/detail/1787462876129890.html",
    discovery: "微博热搜：#多家餐厅残留液体敌敌畏检测阳性#",
    discoveryHref: "https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%A4%90%E5%8E%85%E6%AE%8B%E7%95%99%E6%B6%B2%E4%BD%93%E6%95%8C%E6%95%8C%E7%95%8F%E6%A3%80%E6%B5%8B%E9%98%B3%E6%80%A7%23",
    labels: ["微博高热", "值得一读", "调查报道"],
    recommendation: "记者调查、现场采样、企业回应和监管跟进构成了较完整的证据链，信息增量明显；最终责任仍需等待正式调查结论。",
    details: [
      "新京报调查称，厦门一家消杀公司长期为多家连锁餐饮门店提供服务，员工把敌敌畏原液装入矿泉水瓶以规避检查。记者在多家餐厅消杀后的地面残留液体中检出敌敌畏阳性。",
      "厦门市湖里区已成立联合调查组，涉事门店陆续停业清洁。此条只采用记者调查、企业回应和属地调查进展；最终责任认定以监管部门正式通报为准。",
    ],
  },
  {
    title: "两千多台人形机器人在北京跑步、踢球，也不断摔倒再站起来",
    source: "新华日报／新华社现场图片",
    sourceType: "国内媒体／赛事现场",
    time: "8 月 24 日",
    href: "https://js.news.cn/20260824/d4485cbd57154136bf2934ba3fb1796c/c.html",
    discovery: "微博热搜：#世界人形机器人运动会现场画面#",
    discoveryHref: "https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23",
    labels: ["微博高热", "现场报道"],
    image: "https://dims.apnews.com/dims4/default/aaceb24/2147483647/strip/true/crop/7752x5165+0+9/resize/980x653!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F38%2F87%2F73a90e94017e52915aec79c63d34%2F57d603c5440e4b1e9f69651d426846e9",
    imageAlt: "北京世界人形机器人运动会现场的人形机器人",
    imageCaption: "北京世界人形机器人运动会现场。图片来源：AP",
    details: [
      "第二届世界人形机器人运动会吸引 16 个国家的 666 支队伍、2,056 台机器人，围绕 51 个赛项展开 1,301 场角逐。",
      "比赛既展示速度、平衡和集群协同，也把摔倒、故障和人工维护直接暴露在观众面前。社交平台传播的是名场面，赛事报道补充了参赛规模与技术背景。",
    ],
  },
  {
    title: "已故人士金融账户查询服务将推广，银行和保险资产可望“一站式”办理",
    source: "司法部／金融监管总局／民政部",
    sourceType: "三部门联合通知",
    time: "8 月 21 日",
    href: "https://www.moj.gov.cn/pub/sfbgw/zwxxgk/fdzdgknr/fdzdgknrtzwj/202608/t20260821_538768.html",
    discovery: "百度热搜：#全国推广去世亲人存款查询#",
    discoveryHref: "https://www.baidu.com/s?wd=%E5%85%A8%E5%9B%BD%E6%8E%A8%E5%B9%BF%E5%8E%BB%E4%B8%96%E4%BA%B2%E4%BA%BA%E5%AD%98%E6%AC%BE%E6%9F%A5%E8%AF%A2",
    labels: ["百度高热", "官方原文", "公共服务"],
    details: [
      "三部门发布通知，推广浙江、青岛已故人士金融账户查询服务试点经验。当地通过“个人身后一件事”联办平台，已经实现对银行、保险等金融资产信息的一站式查询。",
      "通知鼓励数据共享和跨部门协同条件较好的地区率先复制，同时要求依法核验亲属关系并保障数据在获取、传输和存储过程中的安全。",
    ],
  },
  {
    title: "四川宜宾长宁县发生 4.7 级地震，震源深度 5 千米",
    source: "中国地震台网／央视新闻",
    sourceType: "官方地震速报",
    time: "8 月 24 日",
    href: "https://news.southcn.com/node_47a8059d6c/329205eece.shtml",
    discovery: "抖音热榜：四川宜宾发生4.7级地震",
    discoveryHref: "https://www.douyin.com/search/%E5%9B%9B%E5%B7%9D%E5%AE%9C%E5%AE%BE%E5%8F%91%E7%94%9F4.7%E7%BA%A7%E5%9C%B0%E9%9C%87",
    labels: ["抖音高热", "官方速报"],
    details: [
      "中国地震台网正式测定，8 月 24 日 8 时 26 分，四川宜宾市长宁县发生 4.7 级地震，震中位于北纬 28.33 度、东经 104.98 度，震源深度 5 千米。",
      "平台上的震感视频只作为现场线索；震级、时间和位置均采用地震台网正式速报，不采用早期自动测定值或未经核实的预警截图。",
    ],
  },
  {
    title: "2026 年上半年英语四六级成绩开放查询，电子成绩单 8 月 31 日可下载",
    source: "中国教育考试网",
    sourceType: "考试机构通知",
    time: "8 月 24 日",
    href: "https://cet.neea.edu.cn/html1/folder/21083/9970-1.htm",
    discovery: "抖音热榜：四六级查分通道今日已开启",
    discoveryHref: "https://www.douyin.com/search/%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%E9%80%9A%E9%81%93%E4%BB%8A%E6%97%A5%E5%B7%B2%E5%BC%80%E5%90%AF",
    labels: ["抖音高热", "实用信息", "官方入口"],
    details: [
      "2026 年上半年全国大学英语四、六级考试成绩查询服务已于 8 月 24 日上午 6 时开放，考生可以通过中国教育考试网及其微信、支付宝、百度小程序查询。",
      "8 月 31 日上午 9 时起可免费查询、下载电子成绩报告单。从本次考试开始不再提供纸质成绩报告单。",
    ],
  },
  {
    title: "嫦娥七号任务不满足发射条件，将不在今年预定窗口实施",
    source: "新华社／人民日报",
    sourceType: "航天任务通报",
    time: "8 月 24 日",
    href: "https://cpc.people.com.cn/n1/2026/0824/c64387-40784908.html",
    discovery: "抖音热榜：嫦娥七号任务不满足发射条件",
    discoveryHref: "https://www.douyin.com/search/%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E4%BB%BB%E5%8A%A1%E4%B8%8D%E6%BB%A1%E8%B6%B3%E5%8F%91%E5%B0%84%E6%9D%A1%E4%BB%B6",
    labels: ["抖音高热", "官方发布"],
    details: [
      "新华社报道，有关方面经综合研判，认为嫦娥七号任务当前不满足发射条件，因此不能在 2026 年预定窗口实施。",
      "公开通报只说明了“稳妥可靠、万无一失”的原则，没有披露具体原因。网络上关于技术故障、供应链或合作因素的猜测均没有可靠依据，暂不采用。",
    ],
  },
  {
    title: "教育、社保、卫生和住房等民生支出今年安排 12.4 万亿元",
    source: "财政部／国新办发布会",
    sourceType: "政策数据",
    time: "8 月 21 日",
    href: "https://www.chinanews.com/cj/2026/08-22/10682292.shtml",
    discovery: "百度热搜：#12.4万亿元关乎你的衣食住行#",
    discoveryHref: "https://www.baidu.com/s?wd=12.4%E4%B8%87%E4%BA%BF%E5%85%83%E5%85%B3%E4%B9%8E%E4%BD%A0%E7%9A%84%E8%A1%A3%E9%A3%9F%E4%BD%8F%E8%A1%8C",
    labels: ["百度高热", "政策数据"],
    details: [
      "财政部在国新办发布会上介绍，今年全国一般公共预算安排教育、社会保障、卫生健康和住房等方面资金 12.4 万亿元，同比增长 5.4%。",
      "发布会列出的进展还包括：预计全年超过 4,400 万人领取基本生活救助，超过 2,500 万名婴幼儿及其家庭已领取年度育儿补贴。",
    ],
  },
  {
    title: "《黑神话：钟馗》发布 15 分钟实机演示，在 B 站形成千万级观看热点",
    source: "游戏科学／《黑神话：钟馗》官方发布",
    sourceType: "创作者原始内容",
    time: "8 月 20 日",
    href: "https://www.gamesci.cn/zhongkui",
    discovery: "B站热门：《黑神话：钟馗》15分钟实机演示",
    discoveryHref: "https://search.bilibili.com/all?keyword=%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%2015%E5%88%86%E9%92%9F%E5%AE%9E%E6%9C%BA%E6%BC%94%E7%A4%BA",
    labels: ["B站高热", "创作者发布", "文化科技"],
    details: [
      "游戏科学公开了约 15 分钟的开发中实机画面，首次集中展示主角战斗、群体敌人和部分剧情片段。相关视频在 B 站进入热门并形成大量二次解读。",
      "本条只把官方演示能够直接看到的内容写入摘要，不根据逐帧解读推断尚未公布的剧情、系统机制或发售时间。",
    ],
  },
  {
    title: "阿里巴巴拟配售 800 亿港元新股，称净所得将全部投入全栈 AI",
    source: "阿里巴巴集团",
    sourceType: "公司公告",
    time: "8 月 24 日",
    href: "https://www.alibabagroup.com/zh-HK/document-2028384807859257344",
    labels: ["公司公告"],
    image: "https://static.alibabagroup.com/static/c33a2ec2-de56-429a-b279-2d6211a83108.png",
    imageAlt: "阿里巴巴集团公告配图",
    imageCaption: "图片来源：阿里巴巴集团",
    details: [
      "阿里巴巴公告称，拟以每股 112.70 港元配售 7.1 亿股新股，预计募集约 800 亿港元，交易完成仍取决于惯常条件。",
      "公司称净所得将用于扩建 AI 基础设施及增强从应用到算力的全栈能力。公司公告说明的是融资方立场，不等同于投资建议。",
    ],
  },
  {
    title: "台风“紫檀”影响广西，中央救灾物资与社会捐赠物资同步调拨",
    source: "中华人民共和国应急管理部",
    sourceType: "政府部门发布",
    time: "8 月 23 日",
    href: "https://www.mem.gov.cn/xw/yjglbgzdt/202608/t20260823_708249.shtml",
    labels: ["官方通报"],
    details: [
      "应急管理部发布消息称，针对台风“紫檀”影响，相关部门向广西调拨折叠床、被褥、雨衣雨靴等 2 万件中央救灾物资。",
      "同时启动政社协同保障机制，协调基金会和社会平台援助饮用水、方便食品、凉席及家庭箱等 2.7 万件物资，用于避险转移和安置救助。",
    ],
  },
  {
    title: "美加贸易谈判破裂，两个长期盟友开始面对一场全面贸易战",
    source: "美联社 AP",
    sourceType: "国际媒体",
    time: "8 月 22 日",
    href: "https://apnews.com/article/4d18583fe52134ca8550652ad9772d2c",
    labels: ["值得一读", "国际分析"],
    recommendation: "文章不仅报告关税数字，还解释谈判破裂、反制范围与盟友关系变化，适合作为理解事件背景的入口。",
    details: [
      "美联社报道，美加最后阶段的贸易谈判失败后，美国对约 200 亿美元加拿大商品加征 50% 关税。",
      "加拿大总理卡尼表示将从 9 月 8 日起采取对等反制，涉及钢铁、乳制品、家电、农业设备、纸浆和电子产品等领域。报道把这次分歧描述为两国关系的一次结构性断裂。",
    ],
  },
  {
    title: "一枚火箭上面级撞上月球，NASA 拍到了新月坑的明暗辐射纹",
    source: "NASA Science",
    sourceType: "科研机构发布",
    time: "8 月 18 日",
    href: "https://science.nasa.gov/solar-system/moon/nasas-lro-images-falcon-9-crater-on-moon-learns-new-details/",
    labels: ["科研机构", "图像解释"],
    image: "https://assets.science.nasa.gov/content/dam/science/missions/lro/NASA_LRO_Falcon9impact_2026_GIF.gif?w=1200&h=1200&fit=clip&crop=faces%2Cfocalpoint",
    imageAlt: "月球表面撞击前后对比，可见新形成的月坑和辐射纹",
    imageCaption: "月球勘测轨道飞行器拍摄的撞击前后对比。图片来源：NASA／LRO",
    details: [
      "8 月 5 日，一枚完成任务后的 Falcon 9 上面级撞击月球。NASA 的月球勘测轨道飞行器随后从不同光照角度拍下新形成的月坑。",
      "照片显示出向外延伸的明暗纹路：较暗部分来自长期受太阳风和微陨石影响的表层物质，较亮部分则是撞击从更深处翻出的新鲜物质。",
    ],
  },
  {
    title: "加拿大卫生部再次提醒：婴儿学步车在当地属于禁售产品",
    source: "Health Canada",
    sourceType: "政府安全通告",
    time: "8 月 21 日",
    href: "https://recalls-rappels.canada.ca/en/alert-recall/health-canada-warns-baby-activity-walker-previously-available-fruugoca-may-pose-risk",
    labels: ["安全通告"],
    details: [
      "加拿大卫生部点名一款此前在 Fruugo.ca 销售的八轮婴儿学步车，要求购买者立即停止使用并安全处置。该产品已从平台下架。",
      "通告说明，学步车会让尚不能独立行走的婴儿快速接近楼梯、热源和电线等危险；加拿大法律禁止制造、进口、销售、宣传或赠送此类产品。",
    ],
  },
  {
    title: "不到 10 纳米的镁薄膜，让氮化镓器件的电接触阻力进一步降低",
    source: "名古屋大学未来材料与系统研究所",
    sourceType: "大学研究发布",
    time: "8 月 18 日",
    href: "https://www.imass.nagoya-u.ac.jp/research/20260818_pgan.html",
    labels: ["科研进展"],
    image: "https://www.imass.nagoya-u.ac.jp/wp/wp-content/uploads/2026/08/20260818_imass.png",
    imageAlt: "薄型 p-GaN 低电阻接触技术示意图",
    imageCaption: "研究方法与器件表现示意。图片来源：名古屋大学",
    details: [
      "名古屋大学、康奈尔大学和 MIT 等机构的联合团队提出一种薄型 p-GaN 接触工艺：沉积不足 10 纳米的镁层，再进行短时间低损伤热处理。",
      "研究团队报告的比接触电阻为 1—3×10⁻⁴ Ω·cm²，同时维持薄膜表面平整和器件耐压表现。潜在应用包括 LED、micro-LED 和 GaN 功率器件。",
    ],
  },
  {
    title: "即将百岁的她，要回到 1939 年与家人分离的维也纳车站",
    source: "The Guardian",
    sourceType: "国际媒体／人物报道",
    time: "8 月 24 日",
    href: "https://www.theguardian.com/world/2026/aug/24/ill-probably-feel-emotional-kindertransport-centenarian-prepares-to-revisit-site-of-family-separation",
    labels: ["值得一读", "人物长文"],
    recommendation: "用一位幸存者重返车站的具体行动连接家庭记忆、战争历史与教育实践，细节充分，叙事价值高于单纯纪念性消息。",
    details: [
      "1939 年，12 岁的 Gabriele Keenaghan 通过“儿童运输”计划从纳粹统治下的奥地利前往英国。她在维也纳西站与祖母道别，此后再也没有见到父亲。",
      "临近百岁，她计划和几代家人一起重返那座车站。她后来成为校长，并长期向学生讲述自己的经历，希望孩子们理解善意、宽容与多样性的价值。",
    ],
  },
  {
    title: "诺福克郡五百年来首次迎来野生河狸幼崽",
    source: "The Guardian／Pensthorpe Nature Reserve",
    sourceType: "国际媒体／自然保护",
    time: "8 月 24 日",
    href: "https://www.theguardian.com/world/2026/aug/24/wild-beaver-kit-pair-born-norfolk",
    labels: ["轻阅读", "自然保护"],
    details: [
      "英国 Pensthorpe 自然保护区的红外相机拍到两只约三个月大的河狸幼崽。它们的父母在去年 12 月神秘出现在温瑟姆河，此前当地已有约五百年没有自由生活的河狸记录。",
      "幼崽已经开始学习潜水和用尾巴拍击水面。保护区接下来需要解决种群基因多样性和合法引入更多河狸的问题。",
    ],
  },
  {
    title: "一只鹅在凌晨不断鸣叫，提醒主人谷仓起火",
    source: "ABC News／Storyful",
    sourceType: "媒体报道／家庭影像",
    time: "8 月 21 日",
    href: "https://abcnews.com/living/story/family-credits-goose-saving-100-chickens-turkeys-barn/?id=135837048",
    labels: ["轻阅读", "家庭影像"],
    image: "https://i.abcnewsfe.com/a/050a0c81-d3a3-44f5-8028-11b00a7bf709/goose-fire-ht-gmh-260821_1787323580280_hpMain_16x9.jpg?w=1600",
    imageAlt: "美国得州一个家庭饲养的鹅",
    imageCaption: "这家人认为 Goosey 的异常鸣叫帮助他们及时发现火情。图片来源：ABC News／家庭影像",
    details: [
      "美国得州一个家庭称，宠物鹅 Goosey 在凌晨发出从未有过的持续鸣叫，叫醒主人后，家人才发现谷仓已经起火。",
      "火势在蔓延到禽舍前被控制，饲养的鸡和火鸡没有伤亡。监控影像记录了鹅跑出谷仓并持续示警的过程。",
    ],
  },
  {
    title: "有人只用字母、数字和符号，做出了一座可以步行探索的 3D 城市",
    source: "Grow Now Games／TechSpot",
    sourceType: "创作者作品／科技媒体",
    time: "8 月 21 日",
    href: "https://www.techspot.com/news/113574-fully-walkable-3d-city-built-entirely-out-ascii.html",
    labels: ["创作者作品"],
    details: [
      "一位独立开发者用 JavaScript 和 Canvas 搭建了一座赛博朋克风格城市，建筑、道路、树木、车辆和行人全部由 ASCII 字符表现。",
      "项目借助透视、景深和碰撞算法把二维字符组织成可行走的空间。它仍在开发中，但已经成为一个“用限制换风格”的有趣例子。",
    ],
  },
  {
    title: "店主帮扶晕倒老人后遭索赔，讨论焦点转向“善意如何被保护”",
    source: "红星新闻网／爱看头条",
    sourceType: "地方媒体／事件仍在跟进",
    time: "8 月 24 日",
    href: "https://news.chengdu.cn/2026/0824/6a8b1ab744deea573f21e99c.shtml",
    discovery: "微博热搜：#官方提出补贴帮扶老人遭索赔店家#",
    discoveryHref: "https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E6%8F%90%E5%87%BA%E8%A1%A5%E8%B4%B4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E5%AE%B6%23",
    labels: ["微博高热", "持续核实"],
    details: [
      "媒体报道，湖南祁东一名老人在牌馆短暂休息后晕倒，店主家人帮忙送医，老人仍不幸离世；家属随后索赔，双方经调解达成人道主义补偿。",
      "热议主要围绕调解边界、救助者责任和社会信任。网上流传的“补贴返还”说法仍需等待当地正式说明，因此本条不把社交平台转述写成确定结论。",
    ],
  },
];
