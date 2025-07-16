import React from "react";
import ReactECharts from "echarts-for-react";

const GaugeChart001: React.FC = () => {
  const option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
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
    legend: {
      show: true,
      right: 15,
      top: 10,
      data: ["Pressure"],
    },
    series: [
      {
        name: "Pressure",
        type: "gauge",
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
        },
        data: [
          {
            value: 50,
            name: "SCORE",
          },
        ],
        itemStyle: {
          color: "#5470C6",
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default GaugeChart001;
