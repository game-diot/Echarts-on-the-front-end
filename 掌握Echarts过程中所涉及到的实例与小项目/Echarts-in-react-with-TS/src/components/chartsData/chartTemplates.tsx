// data/chartTemplates.ts - 图表模板配置
export const chartTemplates = {
  bar: {
    title: { text: "柱状图", left: "center" },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["分类1", "分类2", "分类3", "分类4", "分类5"],
    },
    yAxis: { type: "value" },
    series: [
      {
        name: "数据",
        type: "bar",
        data: [10, 20, 30, 40, 50],
      },
    ],
  },
  line: {
    title: { text: "折线图", left: "center" },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["分类1", "分类2", "分类3", "分类4", "分类5"],
    },
    yAxis: { type: "value" },
    series: [
      {
        name: "数据",
        type: "line",
        data: [10, 20, 30, 40, 50],
      },
    ],
  },
  pie: {
    title: { text: "饼图", left: "center" },
    tooltip: { trigger: "item" },
    series: [
      {
        name: "数据",
        type: "pie",
        radius: "50%",
        data: [
          { value: 30, name: "分类1" },
          { value: 25, name: "分类2" },
          { value: 20, name: "分类3" },
          { value: 25, name: "分类4" },
        ],
      },
    ],
  },
};
