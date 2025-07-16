import React from "react";
import ReactECharts from "echarts-for-react";

const RadarChart001: React.FC = () => {
  const option = {
    title: {
      text: "数据对比查看", // 标题修改为默认格式
      left: "center",
      top: -3,
    },
    legend: {
      data: ["数据组1", "数据组2"],
      top: 15,
      right: 10,
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
    radar: {
      indicator: [
        { name: "Sales", max: 6500 },
        { name: "Administration", max: 16000 },
        { name: "Information Technology", max: 30000 },
        { name: "Customer Support", max: 38000 },
        { name: "Development", max: 52000 },
        { name: "Marketing", max: 25000 },
      ],
    },
    series: [
      {
        name: "数据对比",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "数据组1",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "数据组2",
          },
        ],
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default RadarChart001;
