import type { LineChartData } from "../components/charts/LineChart/types"; // 导入 LineChart 的数据类型

// 折线图数据
export const lineChartExampleData: LineChartData = {
  dates: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  highestTemperatures: [10, 11, 13, 11, 12, 12, 9],
  lowestTemperatures: [1, -2, 2, 5, 3, 2, 0],
};
