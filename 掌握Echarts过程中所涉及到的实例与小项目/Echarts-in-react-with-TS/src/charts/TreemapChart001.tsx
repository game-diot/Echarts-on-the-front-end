// src/components/TreemapChart.tsx
import React from "react";
import ReactECharts from "echarts-for-react";

const TreemapChart001: React.FC = () => {
  const option = {
    series: [
      {
        type: "treemap",
        data: [
          {
            name: "nodeA", // First tree
            value: 10,
            children: [
              {
                name: "nodeAa", // First leaf of first tree
                value: 4,
              },
              {
                name: "nodeAb", // Second leaf of first tree
                value: 6,
              },
            ],
          },
          {
            name: "nodeB", // Second tree
            value: 20,
            children: [
              {
                name: "nodeBa", // Son of second tree
                value: 20,
                children: [
                  {
                    name: "nodeBa1", // Grandson of second tree
                    value: 20,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default TreemapChart001;
