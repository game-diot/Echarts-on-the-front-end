import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart: React.FC = () => {
  const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data1 = [120, 200, 150, 80, 70, 110, 130];
  const data2 = [90, 150, 200, 60, 90, 80, 100];

  const allData = [...data1, ...data2];
  const maxVal = Math.max(...allData);
  const minVal = Math.min(...allData);

  const getColor = (val: number, baseColor: string) =>
    val === maxVal || val === minVal ? "#f44336" : baseColor;

  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [
        {
          name: "数据组 1",
          icon: "rect",
          itemStyle: { color: "#5470c6" }, // 蓝色
        },
        {
          name: "数据组 2",
          icon: "rect",
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
      data: categories,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "数据组 1",
        type: "bar",
        data: data1.map((val) => ({
          value: val,
          itemStyle: {
            color: getColor(val, "#5470c6"), // 蓝色或红色
          },
        })),
      },
      {
        name: "数据组 2",
        type: "bar",
        data: data2.map((val) => ({
          value: val,
          itemStyle: {
            color: getColor(val, "#91cc75"), // 绿色或红色
          },
        })),
      },
    ],
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default BarChart;
