import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart001: React.FC = () => {
  const option = {
    title: {
      text: "数据对比查看",
      subtext: "数据对比查看",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    toolbox: {
      show: true,
      left: 10,
      bottom: 10,
      feature: {
        dataView: { readOnly: false, title: "数据视图" },
        restore: { title: "刷新" },
        saveAsImage: { title: "保存图片" },
      },
    },
    series: [
      {
        name: "来源占比",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "数据组1" },
          { value: 735, name: "数据组2" },
          { value: 580, name: "数据组3" },
          { value: 300, name: "数据组4" },
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
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: 400 }} />
  );
};

export default PieChart001;
