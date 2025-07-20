// src/utils/chartUtils.ts

import type { ChartMeta } from "../chartTypes";
import { CHART_CONFIGS } from "../chartTypes";

/**
 * 根据图表类型（type）获取对应的图表元数据对象。
 * @param type - 图表类型，如 "bar"、"line"
 * @returns ChartMeta 或 undefined
 */
export const getChartByType = (type: string): ChartMeta | undefined => {
  return CHART_CONFIGS.find((chart) => chart.type === type);
};

/**
 * 获取与当前图表类型相关的推荐图表，优先同类别图表，不足则补充其他图表。
 * @param currentType - 当前图表类型
 * @param limit - 返回的图表数量，默认最多返回 3 个
 * @returns ChartMeta[]
 */
export const getRelatedCharts = (
  currentType: string,
  limit: number = 3
): ChartMeta[] => {
  const currentChart = getChartByType(currentType);
  if (!currentChart) return [];

  // 1. 找出同一类别的图表（排除当前图表）
  const sameCategory = CHART_CONFIGS.filter(
    (chart) =>
      chart.category === currentChart.category && chart.type !== currentType
  );

  // 2. 其他不同类别的图表
  const others = CHART_CONFIGS.filter(
    (chart) =>
      chart.category !== currentChart.category && chart.type !== currentType
  );

  // 3. 拼接结果，最多 limit 个
  return [...sameCategory, ...others].slice(0, limit);
};
