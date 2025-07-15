// data/mockData.ts - 模拟的图表项目数据
import type { ChartProject } from "../types";

export const mockProjects: ChartProject[] = [
  {
    id: "1",
    name: "销售数据柱状图",
    type: "bar",
    config: {
      title: { text: "月度销售数据", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: ["1月", "2月", "3月", "4月", "5月", "6月"],
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "销售额",
          type: "bar",
          data: [120, 200, 150, 80, 70, 110],
          itemStyle: { color: "#3b82f6" },
        },
      ],
    },
    createTime: new Date("2024-01-15"),
    updateTime: new Date("2024-01-20"),
  },
  {
    id: "2",
    name: "用户增长折线图",
    type: "line",
    config: {
      title: { text: "用户增长趋势", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: ["1月", "2月", "3月", "4月", "5月", "6月"],
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "用户数量",
          type: "line",
          data: [100, 120, 180, 200, 250, 300],
          smooth: true,
          lineStyle: { color: "#10b981" },
        },
      ],
    },
    createTime: new Date("2024-01-10"),
    updateTime: new Date("2024-01-18"),
  },
  {
    id: "3",
    name: "市场份额饼图",
    type: "pie",
    config: {
      title: { text: "市场份额分布", left: "center" },
      tooltip: { trigger: "item" },
      legend: { orient: "vertical", left: "left" },
      series: [
        {
          name: "市场份额",
          type: "pie",
          radius: "50%",
          data: [
            { value: 35, name: "产品A" },
            { value: 25, name: "产品B" },
            { value: 20, name: "产品C" },
            { value: 20, name: "其他" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    },
    createTime: new Date("2024-01-05"),
    updateTime: new Date("2024-01-15"),
  },
];
