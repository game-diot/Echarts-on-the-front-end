// src/components/SankeyChart.tsx
import React from "react";
import ReactECharts from "echarts-for-react";

const SankeyChart001: React.FC = () => {
  const option = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    animation: false,
    series: [
      {
        type: "sankey",
        bottom: "10%",
        emphasis: {
          focus: "adjacency",
        },
        data: [
          { name: "a" },
          { name: "b" },
          { name: "a1" },
          { name: "b1" },
          { name: "c" },
          { name: "e" },
        ],
        links: [
          { source: "a", target: "a1", value: 5 },
          { source: "e", target: "b", value: 3 },
          { source: "a", target: "b1", value: 3 },
          { source: "b1", target: "a1", value: 1 },
          { source: "b1", target: "c", value: 2 },
          { source: "b", target: "c", value: 1 },
        ],
        orient: "vertical",
        label: {
          position: "top",
        },
        lineStyle: {
          color: "source",
          curveness: 0.5,
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default SankeyChart001;
