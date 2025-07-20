import {
  BarChart3,
  LineChart,
  PieChart,
  ScatterChart,
  MapPin,
  CandlestickChart,
  Radar,
  Box,
  Flame,
  Share2,
  ListTree,
  LayoutDashboard,
  Sun,
  GitBranch,
  Funnel,
  Gauge,
  Waves,
  Shapes,
} from "lucide-react";

// 图表元数据类型定义
export interface ChartMeta {
  id: string;
  name: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  category: string;
  defaultCode: string; // 新增：默认代码模板
  codeLanguage: "javascript" | "json" | "css"; // 新增：代码语言类型
  scenarios: string; // 新增：适用场景
}
// 图表默认代码模板
export const DEFAULT_CHART_CODES = {
  line: `...`,
  bar: `...`,
  pie: `...`,
  scatter: `...`,
  custom: `...`,
  funnel: `...`,
  treemap: `...`,
  gauge: `...`,
  radar: `...`,
  box: `...`,
  map: `...`,
  tree: `...`,
  sunburst: `...`,
  graph: `...`,
  kline: `...`,
  boxplot: `...`,
  heatmap: `...`,
  sankey: `...`,
  river: `...`,
};

// 图表配置数组
export const CHART_CONFIGS: ChartMeta[] = [
  {
    id: "line",
    name: "折线图",
    type: "line",
    icon: LineChart,
    description:
      "折线图的主要作用是展示数据随时间的变化趋势。它通过连接一系列数据点，清晰地展现数值的上升、下降、波动或稳定状态。这使得观察者能够识别数据在不同时间点的发展规律和潜在模式，从而对数据的表现进行分析和预测。",
    category: "基础图表",
    defaultCode: DEFAULT_CHART_CODES.line,
    codeLanguage: "json",
    scenarios:
      "趋势分析,比较分析,周期性分析,预测与预测验证,异常检测,进度跟踪,性能监控,人口统计,金融分析,市场调研",
  },
  {
    id: "funnel",
    name: "漏斗图",
    type: "funnel",
    icon: Funnel, // ⚡️象征“流程”与“转化”
    description:
      "漏斗图的主要作用是展示转化过程和各阶段的转化率。它通过层层递进的图形，清晰地展现从一个初始状态到最终目标的过程中，每一步的数据损耗或留存情况。这使得观察者能够识别流程中的瓶颈、效率低下环节以及各阶段的转化效率，从而优化流程并提高整体转化率。",
    category: "流程图表",
    defaultCode: DEFAULT_CHART_CODES.funnel,
    codeLanguage: "json",
    scenarios:
      "用户转化分析,销售流程分析,产品功能分析,客户生命周期分析,营销活动分析,社交媒体分析,客户 Segmentation, 产品推荐系统, 流量分析, 成本优化",
  },
  {
    id: "tree",
    name: "树图",
    type: "tree",
    icon: LayoutDashboard, // 🌲象征“树形结构”
    description:
      "树图的主要作用是展示层级结构数据。它通过节点和连线的形式，将数据组织成一个树状结构，其中每个节点代表一个实体或类别，连线则表示父子关系或包含关系。这使得观察者能够直观地理解数据的层级深度、各层级之间的依赖关系以及数据的分组情况，从而清晰地展现复杂的组织、分类或目录结构。",
    category: "层次图表",
    defaultCode: DEFAULT_CHART_CODES.treemap,
    codeLanguage: "json",
    scenarios:
      "文件目录结构, 组织架构图, 分类体系展示, 族谱关系可视化, 生物分类学, 网站导航结构, 项目任务分解 (WBS), 决策树可视化, 流程图中的层级关系, 知识体系结构",
  },
  {
    id: "bar",
    name: "柱状图",
    type: "bar",
    icon: BarChart3,
    description:
      "柱状图的主要作用是比较不同类别数据之间的数值大小。它通过使用高度不同的柱形，清晰地展现各个类别的数据量，并支持对多个类别进行并列或堆叠比较。这使得观察者能够直观地识别各类别之间的差异、排名以及数据分布情况，从而发现数据集中潜在的模式或异常。",
    category: "基础图表",
    defaultCode: DEFAULT_CHART_CODES.bar,
    codeLanguage: "json",
    scenarios:
      "类别数据比较, 排名展示, 时间序列比较 (离散时间点), 频率分布, 多系列数据对比 (分组或堆叠), 销售额对比, 用户满意度评分, 人口统计数据, 投票结果展示, 资源分配比较",
  },
  {
    id: "pie",
    name: "饼图",
    type: "pie",
    icon: PieChart,
    description:
      "饼图的主要作用是展示整体中各部分的占比构成。它将一个圆形区域分割成若干扇形，每个扇形的大小（角度和面积）代表其所占总量的比例。这使得观察者能够直观地理解各部分在整体中的相对贡献和重要性，从而快速识别主要构成因素和它们之间的比例关系。",
    category: "基础图表",
    defaultCode: DEFAULT_CHART_CODES.pie,
    codeLanguage: "json",
    scenarios:
      "构成占比展示, 部分与整体关系分析, 单变量分类数据可视化, 资源分配比例, 市场份额构成, 投票结果分布, 预算支出构成, 人口组成分析",
  },
  {
    id: "scatter",
    name: "散点图",
    type: "scatter",
    icon: ScatterChart,
    description:
      "散点图的主要作用是展示两个或多个变量之间的关系和相关性。它通过将每个数据点表示为一个坐标，其中每个坐标轴代表一个变量，从而直观地显示数据点的分布模式、聚集趋势以及异常值。这使得观察者能够识别变量之间是否存在正相关、负相关、无相关或更复杂的非线性关系，从而深入理解数据背后的驱动因素和潜在规律。",
    category: "统计图表",
    defaultCode: DEFAULT_CHART_CODES.scatter,
    codeLanguage: "json",
    scenarios:
      "相关性分析, 趋势识别, 异常值检测, 聚类分析, 多元数据可视化, 产品定价策略, 医疗研究, 质量控制, 市场细分, 科学实验数据分析",
  },
  {
    id: "map",
    name: "地图",
    type: "map",
    icon: MapPin,
    description:
      "地图的主要作用是展示地理空间数据的分布和模式。它通过在地理背景上标注数据点、区域或路径，直观地呈现出数据在空间上的位置、密度、范围以及相互关系。这使得观察者能够识别地理因素对数据的影响、发现空间聚集或分散的趋势，从而为基于地理位置的决策提供支持。",
    category: "地理图表",
    defaultCode: DEFAULT_CHART_CODES.map,
    codeLanguage: "json",
    scenarios:
      "地理数据分布, 位置分析, 路径规划, 区域划分, 灾害管理, 环境监测, 市场分析, 公共安全, 城市规划, 旅游与导航",
  },

  {
    id: "sunburst",
    name: "旭日图",
    type: "sunburst",
    icon: Sun,
    description:
      "旭日图的主要作用是展示多层级数据的层次结构和占比关系。它通过同心圆的形式，将最外层的环表示最细粒度的类别，内层的环则表示更高层级的聚合，每个扇形区域的弧长代表其在父级中的占比，颜色通常用来区分不同的类别或层级。这使得观察者能够直观地理解数据的层级关系、各层级的组成以及不同部分在整体中的相对贡献，从而深入分析数据的分布和钻取细节。",
    category: "层次图表",
    defaultCode: DEFAULT_CHART_CODES.sunburst,
    codeLanguage: "json",
    scenarios:
      "层级数据占比分析, 多层级结构可视化, 快速识别层级瓶颈, 钻取分析, 文件系统结构分析, 产品分类销售分析, 组织架构层级展示, 网站流量来源分析, 预算层级分配, 基因序列分析",
  },
  {
    id: "graph",
    name: "关系图",
    type: "graph",
    icon: Share2,
    description:
      "关系图的主要作用是展示实体之间相互连接和关联的复杂网络。它通过节点（表示实体）和连线（表示关系）来可视化数据，连线的粗细、颜色或箭头方向可以进一步表达关系的强度、类型或指向性。这使得观察者能够直观地理解实体间的互动模式、识别核心节点、发现隐藏的连接以及分析网络的结构特征，从而揭示数据背后错综复杂的关系网。",
    category: "网络图表",
    defaultCode: DEFAULT_CHART_CODES.graph,
    codeLanguage: "json",
    scenarios:
      "社交网络分析, 组织架构关系梳理, 知识图谱构建, 犯罪网络分析, 供应链关系可视化, 疾病传播路径追踪, 文献引用关系分析, 项目依赖关系管理, 推荐系统关系建模, 生物基因交互网络",
  },
  {
    id: "kline",
    name: "K线图",
    type: "kline",
    icon: CandlestickChart,
    description:
      "K线图的主要作用是展示金融资产（如股票、期货、加密货币等）在特定周期内的价格变动情况。它通过一根根“K线”或“蜡烛图”，清晰地呈现开盘价、收盘价、最高价和最低价，并用实体颜色区分上涨（阳线）和下跌（阴线），影线的长度则表示价格波动的范围。这使得观察者能够直观地理解市场情绪、价格波动趋势、买卖双方力量对比以及潜在的交易信号，从而进行技术分析和交易决策。",
    category: "金融图表",
    defaultCode: DEFAULT_CHART_CODES.kline,
    codeLanguage: "json",
    scenarios:
      "股票价格分析, 期货市场分析, 加密货币交易, 外汇市场分析, 商品价格分析, 技术指标分析, 交易策略制定, 市场趋势判断, 支撑阻力位识别, 历史价格波动回溯",
  },
  {
    id: "radar",
    name: "雷达图",
    type: "radar",
    icon: Radar,
    description:
      "雷达图的主要作用是展示多维度数据的表现和对比。它通过从中心点向四周辐射的轴线代表不同的维度或指标，每个数据系列在对应轴线上根据数值大小标记点并连接成一个多边形区域。这使得观察者能够直观地理解单个实体在各个维度上的优势和劣势，以及不同实体之间在多个指标上的综合表现和差异，从而进行多维度的评估和比较。",
    category: "统计图表",
    defaultCode: DEFAULT_CHART_CODES.radar,
    codeLanguage: "json",
    scenarios:
      "多维度性能评估, 能力素质评估, 产品特性对比, 财务健康度分析, 运动员能力分析, 团队技能评估, 用户画像分析, 风险评估, 品牌形象分析, 竞品分析",
  },
  {
    id: "boxplot",
    name: "箱线图",
    type: "boxplot",
    icon: Box,
    description:
      "箱线图的主要作用是展示数据分布的统计特征和异常值。它通过一个矩形箱体（代表数据的中位数和上下四分位数）和延伸的“触须”（表示数据的范围，通常不包含异常值）来可视化数据集。这使得观察者能够直观地理解数据的中心位置、离散程度、对称性以及识别潜在的极端值或异常点，从而对数据的整体分布状况有一个全面的认识。",
    category: "统计图表",
    defaultCode: DEFAULT_CHART_CODES.boxplot,
    codeLanguage: "json",
    scenarios:
      "数据分布分析, 异常值检测, 数据离散度比较, 中位数与四分位数展示, 数据对称性评估, 多组数据分布对比, 收入分布研究, 学生考试分数分布, 产品质量控制, 气候数据分析",
  },
  {
    id: "heatmap",
    name: "热力图",
    type: "heatmap",
    icon: Flame,
    description:
      "热力图的主要作用是通过颜色深浅来展示数据在二维空间中的密度或强度。它将数据的数值映射到颜色的渐变上，通常颜色越深或越亮表示数值越高，反之则越低。这使得观察者能够直观地识别数据的高密度区域、趋势模式以及分布上的热点和冷点，从而快速发现数据在空间或时间上的聚集特征。",
    category: "统计图表",
    defaultCode: DEFAULT_CHART_CODES.heatmap,
    codeLanguage: "json",
    scenarios:
      "地理区域数据密度, 网站点击热点分析, 用户行为轨迹追踪, 矩阵数据可视化, 相关系数矩阵展示, 基因表达谱分析, 传感器数据分布, 温度/湿度分布图, 金融市场波动性分析, 游戏玩家活跃区域",
  },
  {
    id: "treemap",
    name: "矩形树图",
    type: "treemap",
    icon: ListTree,
    description:
      "矩形树图的主要作用是展示层级结构数据的占比关系。它通过将数据以嵌套矩形的形式展现，其中每个矩形的面积代表其数值大小，子矩形嵌套在父矩形中表示层级关系。这使得观察者能够直观地理解数据在不同层级上的构成和各部分的相对重要性，从而发现关键组成部分和资源分配情况。",
    category: "层次图表",
    defaultCode: DEFAULT_CHART_CODES.treemap,
    codeLanguage: "json",
    scenarios:
      "层级数据占比展示, 空间利用率优化, 快速识别最大/最小组成部分, 多层级数据比较, 文件系统可视化, 市场份额分析, 预算分配可视化, 组织架构分析, 产品分类销售分析, 人口结构分析",
  },
  {
    id: "sankey",
    name: "桑基图",
    type: "sankey",
    icon: GitBranch,
    description:
      "桑基图的主要作用是展示能量、物质或资金等在不同阶段或类别之间的流动和转换。它通过具有不同宽度（表示流量大小）的连线和节点（表示阶段或类别）来可视化数据流。这使得观察者能够直观地理解数据的来源、去向、路径以及在各个环节中的损耗或增益，从而揭示复杂的流向模式和转化效率。",
    category: "流程图表",
    defaultCode: DEFAULT_CHART_CODES.sankey,
    codeLanguage: "json",
    scenarios:
      "能量流向分析, 资金流向追踪, 供应链物流分析, 用户行为路径分析, 碳排放流向可视化, 水资源分配分析, 数据中心流量监控, 生产流程优化, 销售渠道分析, 生态系统物质循环",
  },
  {
    id: "gauge",
    name: "仪表盘",
    type: "gauge",
    icon: Gauge,
    description:
      "仪表盘的主要作用是在一个集中界面上，汇总和可视化关键指标（KPIs）和数据，以便用户能快速概览和监控业务表现。它通常包含多种图表和数据元素，如折线图、柱状图、饼图、指标卡等，并常具备交互性，支持用户进行数据筛选、钻取。这使得观察者能够一目了然地掌握业务的整体运行状况、发现异常、识别趋势，从而支持实时决策和绩效管理。",
    category: "监控图表",
    defaultCode: DEFAULT_CHART_CODES.gauge,
    codeLanguage: "json",
    scenarios:
      "业务绩效监控, 关键指标追踪, 运营状态概览, 数据驱动决策支持, 销售数据可视化, 营销活动效果跟踪, 财务报告与分析, 生产效率监控, 客户服务表现评估, IT系统健康度监控",
  },
  {
    id: "river",
    name: "河流图",
    type: "river",
    icon: Waves,
    description:
      "河流图的主要作用是展示随时间变化的分类数据量，并突出各类别之间的此消彼长和演变趋势。它是一种堆叠面积图的变体，通过不规则、流线型的形状来表现不同类别的数据量，并以基线在中间而非底部的方式呈现。这使得观察者能够直观地理解各类别在不同时间点上的相对占比、流量变化以及它们之间的动态消长关系，从而揭示数据在时间维度上的整体演变和结构性变化。",
    category: "时序图表",
    defaultCode: DEFAULT_CHART_CODES.river,
    codeLanguage: "json",
    scenarios:
      "主题演变分析, 用户兴趣变化趋势, 社交媒体话题热度演变, 市场份额动态变化, 人口构成变化, 文化趋势演变, 软件版本功能变化, 新闻事件焦点转移, 科研领域发展趋势, 产品功能迭代趋势",
  },
  {
    id: "custom",
    name: "自定义图表",
    type: "custom",
    icon: Shapes,
    description:
      "自定义图表的主要作用是根据特定需求，灵活地组合和设计多种可视化元素，以展示独特的数据关系或信息。它不局限于标准图表类型，允许用户融合不同图表的优点、调整布局、配色和交互方式，从而创造出最能有效传达洞察的专属视图。这使得观察者能够以创新的方式解读复杂数据、突出关键信息，并满足高度个性化的分析或展示需求。",
    category: "自定义",
    defaultCode: DEFAULT_CHART_CODES.custom,
    codeLanguage: "json",
    scenarios:
      "特定业务场景可视化, 多维度复杂关系展示, 高度个性化报告, 创新数据故事讲述, 领域特定数据分析, 研究数据定制呈现, 产品仪表盘个性化, 复杂系统监控, 独特洞察发现, 艺术性数据表达",
  },
];
