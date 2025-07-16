import React from "react";
import ReactECharts from "echarts-for-react";

const FunnelChart001: React.FC = () => {
  const option = {
    title: {
      text: "数据对比查看",
      left: "center",
    },
    tooltip: {
      trigger: "item",
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
      right: "center",
      top: 15,
      data: ["数据组1", "数据组2", "数据组3", "数据组5"],
    },
    series: [
      {
        name: "Funnel",
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 60, name: "数据组1" },
          { value: 40, name: "数据组2" },
          { value: 20, name: "数据组3" },

          { value: 100, name: "数据组5" },
        ],
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default FunnelChart001;
