// data/chartCategories.ts - 图表分类配置
import type { ChartCategory } from "../types";
import { BarChart3, TrendingUp, PieChart, Zap, AreaChart } from "lucide-react";

export const chartCategories: ChartCategory[] = [
  {
    id: "all",
    name: "全部",
    icon: <BarChart3 />,
    type: "bar",
  },
  {
    id: "bar",
    name: "柱状图",
    icon: <BarChart3 />,
    type: "bar",
  },
  {
    id: "line",
    name: "折线图",
    icon: <TrendingUp />,       
    type: "line",
  },
  {
    id: "pie",
    name: "饼图",
    icon: <PieChart />,
    type: "pie",
  },
  {
    id: "scatter",
    name: "散点图",
    icon: <Zap />,
    type: "scatter",
  },
  {
    id: "area",
    name: "面积图",
    icon: <AreaChart />,
    type: "area",
  },
];
