import React from "react";
import ReactECharts from "echarts-for-react";

const KlineChart001: React.FC = () => {
  const option = {
    color: ["#5470C6", "#91CC75"], // 图例颜色，分别对应两组数据
    xAxis: {
      type: "category",
      data: ["2025-7-10", "2025-7-11", "2025-7-12", "2025-7-13"],
      boundaryGap: true,
      axisLine: { onZero: false },
    },
    yAxis: {
      type: "value",
      scale: true,
    },
    legend: {
      data: ["数据组1", "数据组2"],
      top: 10,
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
    series: [
      {
        name: "数据组1",
        type: "candlestick",
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
        ],
        itemStyle: {
          color: "#5470C6", // 阳线填充色
          color0: "#fff", // 阴线填充色
          borderColor: "#5470C6",
          borderColor0: "#5470C6",
        },
      },
      {
        name: "数据组2",
        type: "candlestick",
        data: [
          [25, 30, 15, 35],
          [38, 33, 25, 48],
          [29, 35, 30, 40],
          [36, 20, 8, 39],
        ],
        itemStyle: {
          color: "#91CC75",
          color0: "#fff",
          borderColor: "#91CC75",
          borderColor0: "#91CC75",
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default KlineChart001;
