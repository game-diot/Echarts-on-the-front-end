import React from "react";
import ReactECharts from "echarts-for-react";

const SunburstChart001: React.FC = () => {
  const data = [
    {
      name: "Grandpa",
      children: [
        {
          name: "Uncle Leo",
          value: 15,
          children: [
            { name: "Cousin Jack", value: 2 },
            {
              name: "Cousin Mary",
              value: 5,
              children: [{ name: "Jackson", value: 2 }],
            },
            { name: "Cousin Ben", value: 4 },
          ],
        },
        {
          name: "Father",
          value: 10,
          children: [
            { name: "Me", value: 5 },
            { name: "Brother Peter", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Nancy",
      children: [
        {
          name: "Uncle Nike",
          children: [
            { name: "Cousin Betty", value: 1 },
            { name: "Cousin Jenny", value: 2 },
          ],
        },
      ],
    },
  ];

  const option = {
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
