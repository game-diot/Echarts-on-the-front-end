import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

const LineChart001: React.FC = () => {
  const xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const initialData1 = [150, 230, 224, 218, 135, 147, 260];
  const initialData2 = [120, 180, 210, 190, 160, 130, 240];

  const [data1, setData1] = useState<number[]>([...initialData1]);
  const [data2, setData2] = useState<number[]>([...initialData2]);

  const getStyledSeries = (data: number[], baseColor: string) => {
    const maxVal = Math.max(...data);
    const minVal = Math.min(...data);

    return data.map((val) => ({
      value: val,
      itemStyle: {
        color: val === maxVal || val === minVal ? "#f44336" : baseColor,
      },
    }));
  };

  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [
        {
          name: "数据组 1",
          icon: "circle",
          itemStyle: { color: "#5470c6" }, // 蓝色
        },
        {
          name: "数据组 2",
          icon: "circle",
          itemStyle: { color: "#91cc75" }, // 绿色
        },
      ],
      top: 10,
      right: 10,
    },
    toolbox: {
      show: true,
      left: 10,
      bottom: 10,
      feature: {
        dataView: { readOnly: false, title: "Data View" },
        restore: { title: "Refresh" },
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      data: xData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "数据组 1",
        type: "line",
        data: getStyledSeries(data1, "#5470c6"), // 蓝色主色
        smooth: true,
        lineStyle: { color: "#5470c6" },
      },
      {
        name: "数据组 2",
        type: "line",
        data: getStyledSeries(data2, "#91cc75"), // 绿色主色
        smooth: true,
        lineStyle: { color: "#91cc75" },
      },
    ],
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ReactECharts
        option={option}
        style={{ height: "100%", width: "100%" }}
        onEvents={{
          restore: () => {
            setData1([...initialData1]);
            setData2([...initialData2]);
          },
        }}
      />
    </div>
  );
};

export default LineChart001;
