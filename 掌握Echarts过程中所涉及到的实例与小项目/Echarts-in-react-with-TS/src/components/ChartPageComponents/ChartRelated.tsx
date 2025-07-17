import React from "react";
import { ChartMeta } from "./ChartDescription"; // 复用 ChartMeta 类型

type Props = {
  charts: ChartMeta[];
  currentChartId: string;
  onSelect: (id: string) => void;
};

const RelatedCharts: React.FC<Props> = ({
  charts,
  currentChartId,
  onSelect,
}) => {
  const relatedCharts = charts
    .filter((chart) => chart.id !== currentChartId)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">相关图表</h3>
      <div className="space-y-3">
        {relatedCharts.map((chart) => {
          const IconComponent = chart.icon;
          return (
            <button
              key={chart.id}
              onClick={() => onSelect(chart.id)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <IconComponent className="w-5 h-5 text-gray-600" />
              <span>{chart.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedCharts;
