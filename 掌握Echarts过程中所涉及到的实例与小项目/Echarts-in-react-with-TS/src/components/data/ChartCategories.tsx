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
import type { ChartCategory } from "../homeTypes";

export const chartCategories: ChartCategory[] = [
  { id: "all", name: "全部", icon: <Shapes className="w-5 h-5" /> },
  {
    id: "line",
    name: "折线图",
    icon: <LineChart className="w-5 h-5" />,
    type: "line",
  },
  {
    id: "bar",
    name: "柱状图",
    icon: <BarChart3 className="w-5 h-5" />,
    type: "bar",
  },
  {
    id: "pie",
    name: "饼图",
    icon: <PieChart className="w-5 h-5" />,
    type: "pie",
  },
  {
    id: "scatter",
    name: "散点图",
    icon: <ScatterChart className="w-5 h-5" />,
    type: "scatter",
  },
  {
    id: "map",
    name: "地图",
    icon: <MapPin className="w-5 h-5" />,
    type: "map",
  },
  {
    id: "kline",
    name: "K线图",
    icon: <CandlestickChart className="w-5 h-5" />,
    type: "kline",
  },
  {
    id: "radar",
    name: "雷达图",
    icon: <Radar className="w-5 h-5" />,
    type: "radar",
  },
  {
    id: "boxplot",
    name: "盒须图",
    icon: <Box className="w-5 h-5" />,
    type: "boxplot",
  },
  {
    id: "heatmap",
    name: "热力图",
    icon: <Flame className="w-5 h-5" />,
    type: "heatmap",
  },
  {
    id: "graph",
    name: "关系图",
    icon: <Share2 className="w-5 h-5" />,
    type: "graph",
  },
  {
    id: "tree",
    name: "树图",
    icon: <ListTree className="w-5 h-5" />,
    type: "tree",
  },
  {
    id: "treemap",
    name: "矩形树图",
    icon: <LayoutDashboard className="w-5 h-5" />,
    type: "treemap",
  },
  {
    id: "sunburst",
    name: "旭日图",
    icon: <Sun className="w-5 h-5" />,
    type: "sunburst",
  },
  {
    id: "sankey",
    name: "桑葚图",
    icon: <GitBranch className="w-5 h-5" />,
    type: "sankey",
  },
  {
    id: "funnel",
    name: "漏斗图",
    icon: <Funnel className="w-5 h-5" />,
    type: "funnel",
  },
  {
    id: "gauge",
    name: "仪表盘",
    icon: <Gauge className="w-5 h-5" />,
    type: "gauge",
  },
  {
    id: "river",
    name: "河流图",
    icon: <Waves className="w-5 h-5" />,
    type: "river",
  },
  {
    id: "custom",
    name: "自定义图",
    icon: <Shapes className="w-5 h-5" />,
    type: "custom",
  },
];
