import React from "react";
import { useNavigate } from "react-router-dom";
import type { ChartMeta } from "../chartTypes";

interface RelatedChartsProps {
  charts: ChartMeta[]; // 相关图表数据
  currentChartType: string; // 当前图表类型（避免重复）
}

const RelatedCharts: React.FC<RelatedChartsProps> = ({ charts }) => {
  const navigate = useNavigate();

  // 处理点击跳转
  const handleChartSelect = (chartType: string) => {
    navigate(`/charts/${chartType}`);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">相关图表</h3>
      <div className="space-y-3">
        {charts.map((chart) => {
          const IconComponent = chart.icon;
          return (
            <button
              key={chart.id}
              onClick={() => handleChartSelect(chart.type)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{chart.name}</div>
                <div className="text-xs text-gray-500">{chart.category}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedCharts;
