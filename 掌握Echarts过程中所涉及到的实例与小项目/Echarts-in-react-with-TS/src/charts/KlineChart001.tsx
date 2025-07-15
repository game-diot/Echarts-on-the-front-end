import React from "react";
import ReactECharts from "echarts-for-react";

const KlineChart001: React.FC = () => {
  const option = {
    xAxis: {
      data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
    },
    yAxis: {},
    series: [
      {
        type: "candlestick",
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
        ],
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default KlineChart001;
