export type BriefingItem = {
  title: string;
  source: string;
  sourceType: string;
  time: string;
  href: string;
  details: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const briefingMeta = {
  dateCode: "20260824",
  headline: "有些进步，以秒计；有些归来，要等五百年",
  updatedAt: "2026 年 8 月 24 日 · 16:20",
};

export const briefingItems: BriefingItem[] = [
  {
    title: "多部门指导地方严查“甲醛白菜”，并追查涉事产品流向",
    source: "新华网",
    sourceType: "官方媒体／监管信息",
    time: "8 月 24 日",
    href: "https://www2.xinhuanet.com/government/20260824/36cb29f1c4d84e649ba5c9da7d97bf87/c.html",
    details: [
      "新华社报道，国务院食安办、农业农村部和市场监管总局已指导属地调查河北康保县“白菜收购环节蘸取甲醛溶液”问题，要求追查涉事白菜流向，防止问题产品进入市场。",
      "报道还提到，各地将对白菜等易腐蔬菜开展专项抽检和市场排查。此条采用监管部门公开信息作为事实来源，不以网络转述替代调查结论。",
    ],
  },
  {
    title: "中国代表团成立：71 名选手将参加第 48 届世界技能大赛全部项目",
    source: "央视新闻／世界技能大赛官网",
    sourceType: "官方媒体／赛事组织",
    time: "8 月 23 日",
    href: "https://news.cctv.cn/2026/08/23/ARTIOMP24DapkyXEv1di3brx260823.shtml",
    details: [
      "第 48 届世界技能大赛中国代表团共 220 人，其中 71 名参赛选手来自 21 个省份，将参加全部 64 个比赛项目。",
      "赛事计划于 9 月 22 日至 27 日在上海举行，项目覆盖运输与物流、制造与工程、信息通信、创意艺术和社会服务等领域。",
    ],
  },
  {
    title: "两千多台人形机器人在北京跑步、踢球，也不断摔倒再站起来",
    source: "美联社 AP",
    sourceType: "国际媒体／现场图片",
    time: "8 月 24 日",
    href: "https://apnews.com/photo-gallery/humanoid-robots-sprint-play-soccer-set-records-beijing-games-photos-ce96217d30c6462e8d3d552d5dd1bb39",
    image: "https://dims.apnews.com/dims4/default/aaceb24/2147483647/strip/true/crop/7752x5165+0+9/resize/980x653!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F38%2F87%2F73a90e94017e52915aec79c63d34%2F57d603c5440e4b1e9f69651d426846e9",
    imageAlt: "北京世界人形机器人运动会现场的人形机器人",
    imageCaption: "北京世界人形机器人运动会现场。图片来源：AP",
    details: [
      "美联社的现场图集记录了世界人形机器人运动会：超过 2,000 台机器人参加跑步、乒乓球、足球等项目。",
      "这类比赛既展示速度和协调能力，也把机器人的失误、人工维护和真实环境适应能力直接暴露在观众面前。",
    ],
  },
  {
    title: "阿里巴巴拟配售 800 亿港元新股，称净所得将全部投入全栈 AI",
    source: "阿里巴巴集团",
    sourceType: "公司公告",
    time: "8 月 24 日",
    href: "https://www.alibabagroup.com/zh-HK/document-2028384807859257344",
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
    details: [
      "一位独立开发者用 JavaScript 和 Canvas 搭建了一座赛博朋克风格城市，建筑、道路、树木、车辆和行人全部由 ASCII 字符表现。",
      "项目借助透视、景深和碰撞算法把二维字符组织成可行走的空间。它仍在开发中，但已经成为一个“用限制换风格”的有趣例子。",
    ],
  },
  {
    title: "围绕“甲醛白菜”的讨论里，网友最关心的是：问题为何总要先被个人发现",
    source: "Reddit · r/China_irl",
    sourceType: "公开社交讨论，不作为事实来源",
    time: "8 月 23 日",
    href: "https://www.reddit.com/r/China_irl/comments/1vvr1s0/",
    details: [
      "相关讨论集中在三个问题：同类做法是否长期存在、市场抽检如何覆盖运输环节，以及为什么往往要等个人视频引发关注后才进入公开调查。",
      "这些评论只作为公共情绪和问题意识的样本。事件事实与后续处置仍以监管部门通报和可核验媒体报道为准。",
    ],
  },
];
