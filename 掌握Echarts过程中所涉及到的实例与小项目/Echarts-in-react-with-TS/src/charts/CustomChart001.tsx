// src/components/CustomTrendChart.tsx
import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";

const CustomChart001: React.FC = () => {
  const option = useMemo(() => {
    const yearCount = 7;
    const categoryCount = 30;

    const xAxisData: string[] = [];
    const customData: number[][] = [];
    const legendData: string[] = [];
    const dataList: number[][] = [];

    legendData.push("趋势");
    const encodeY: number[] = [];
    for (let i = 0; i < yearCount; i++) {
      legendData.push((2020 + i).toString());
      dataList.push([]);
      encodeY.push(1 + i);
    }

    for (let i = 0; i < categoryCount; i++) {
      let val = Math.random() * 1000;
      xAxisData.push("category" + i);
      const customVal = [i];
      customData.push(customVal);

      for (let j = 0; j < dataList.length; j++) {
        const value =
          j === 0
            ? echarts.number.round(val, 2)
            : echarts.number.round(
                Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200),
                2
              );
        dataList[j].push(value);
        customVal.push(value);
      }
    }

    return {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: legendData,
      },
      dataZoom: [
        {
          type: "slider",
          start: 50,
          end: 70,
        },
        {
          type: "inside",
          start: 50,
          end: 70,
        },
      ],
      xAxis: {
        data: xAxisData,
      },
      yAxis: {},
      series: [
        {
          type: "custom",
          name: "趋势",
          renderItem: function (params: any, api: any) {
            const xValue = api.value(0);
            const currentSeriesIndices = api.currentSeriesIndices();
            const barLayout = api.barLayout({
              barGap: "30%",
              barCategoryGap: "20%",
              count: currentSeriesIndices.length - 1,
            });

            const points: number[][] = [];
            for (let i = 0; i < currentSeriesIndices.length; i++) {
              const seriesIndex = currentSeriesIndices[i];
              if (seriesIndex !== params.seriesIndex) {
                const point = api.coord([xValue, api.value(seriesIndex)]);
                point[0] += barLayout[i - 1].offsetCenter;
                point[1] -= 20;
                points.push(point);
              }
            }

            const style = api.style({
              stroke: api.visual("color") as string,
              fill: "none",
            });

            return {
              type: "polyline",
              shape: {
                points: points,
              },
              style: style,
            };
          },
          itemStyle: {
            borderWidth: 2,
          },
          encode: {
            x: 0,
            y: encodeY,
          },
          data: customData,
          z: 100,
        },
        ...dataList.map((data, index) => ({
          type: "bar",
          animation: false,
          name: legendData[index + 1],
          itemStyle: {
            opacity: 0.5,
          },
          data: data,
        })),
      ],
    };
  }, []);

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
};

export default CustomChart001;
