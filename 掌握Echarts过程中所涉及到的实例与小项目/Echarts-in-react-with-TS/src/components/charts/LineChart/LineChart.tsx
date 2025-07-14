import React, { useMemo } from "react";
import ChartWrapper from "../../ChartWrapper/ChartWrapper";
import type { EChartsOption } from "echarts";
import type { LineChartProps } from "./types";

const LineChart: React.FC<LineChartProps> = ({ chartData }) => {
  const option: EChartsOption = useMemo(() => {
    const { dates, highestTemperatures, lowestTemperatures } = chartData;

    return {
      title: {
        text: "未来一周气温变化",
        subtext: "数据来源: 某气象局",
        left: "center", // 标题居中
      },
      tooltip: {
        trigger: "axis",
        formatter: (params: any) => {
          let str = `${params[0].name}<br/>`;
          params.forEach((item: any) => {
            str += `${item.marker}${item.seriesName}: ${item.value} °C<br/>`;
          });
          return str;
        },
      },
      legend: {
        data: ["最高气温", "最低气温"],
        bottom: 0, // 图例放到底部
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "10%", // 留出空间给图例
        containLabel: true,
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none",
            title: { zoom: "区域缩放", back: "区域缩放还原" },
          },
          dataView: { readOnly: false, title: "数据视图" },
          magicType: {
            type: ["line", "bar"],
            title: { line: "切换为折线图", bar: "切换为柱状图" },
          },
          restore: { title: "还原" },
          saveAsImage: { title: "保存图片" },
        },
        right: "5%", // 工具栏靠右
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: dates,
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} °C",
        },
      },
      series: [
        {
          name: "最高气温",
          type: "line",
          data: highestTemperatures,
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }],
          },
        },
        {
          name: "最低气温",
          type: "line",
          data: lowestTemperatures,
          markPoint: {
            data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
          },
          markLine: {
            data: [
              { type: "average", name: "平均值" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max",
                },
                {
                  symbol: "circle",
                  label: {
                    position: "start",
                    formatter: "最高点",
                  },
                  type: "max",
                  name: "最高点",
                },
              ],
            ],
          },
        },
      ],
    };
  }, [chartData]);

  // ChartWrapper 会确保图表自适应其父容器
  return (
    <ChartWrapper option={option} style={{ width: "100%", height: "100%" }} />
  );
};

export default LineChart;
