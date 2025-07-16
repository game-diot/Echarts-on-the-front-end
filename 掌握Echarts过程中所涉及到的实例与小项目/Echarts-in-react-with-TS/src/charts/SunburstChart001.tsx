import React from "react";
import ReactECharts from "echarts-for-react";

const SunburstChart001: React.FC = () => {
  const data = [
    {
      name: "数据组1",
      children: [
        {
          name: "数据组1-1",
          value: 15,
          children: [
            { name: "数据组1-1-1", value: 2 },
            {
              name: "数据组1-1-2",
              value: 5,
              children: [{ name: "数据组1-1-2-1", value: 2 }],
            },
            { name: "数据组1-1-3", value: 4 },
          ],
        },
        {
          name: "数据组1-2",
          value: 10,
          children: [
            { name: "数据组1-2-1", value: 5 },
            { name: "数据组1-2-2", value: 1 },
          ],
        },
      ],
    },
    {
      name: "数据组2",
      children: [
        {
          name: "数据组2-1",
          children: [
            { name: "数据组2-1-1", value: 1 },
            { name: "数据组2-1-2", value: 2 },
          ],
        },
      ],
    },
  ];

  const option = {
    title: {
      text: "数据对比查看",
      left: "center",
      top: -3,
    },
    legend: {
      show: true,
      top: 10,
      right: 10,
      data: ["数据组1", "数据组2"],
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
    series: {
      type: "sunburst",
      data: data,
      radius: [0, "90%"],
      label: {
        rotate: "radial",
      },
      emphasis: {
        focus: "ancestor",
      },
    },
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default SunburstChart001;
