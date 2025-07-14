// 定义折线图所需的数据类型
export interface LineChartData {
  dates: string[]; // 例如：['Mon', 'Tue', ...]
  highestTemperatures: number[]; // 例如：[10, 11, ...]
  lowestTemperatures: number[]; // 例如：[1, -2, ...]
}

// 定义 LineChart 组件的 Props 类型
export interface LineChartProps {
  chartData: LineChartData;
  // 如果未来需要动态标题等，也可以在这里添加
  // titleText?: string;
}
