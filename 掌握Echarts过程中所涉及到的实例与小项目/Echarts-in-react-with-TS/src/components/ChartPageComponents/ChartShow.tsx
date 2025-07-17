import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";

// 模拟图表展示组件
const MockChart: React.FC<{ type: string }> = ({ type }) => {
  const chartTypes: Record<string, { icon: React.FC<{ className?: string }> }> =
    {
      bar: { icon: BarChart3 },
      line: { icon: LineChart },
      pie: { icon: PieChart },
      trend: { icon: TrendingUp },
    };

  const currentType = chartTypes[type] || chartTypes.bar;
  const IconComponent = currentType.icon;

  return (
    <div className="w-full h-96 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
      <div className="text-center">
        <IconComponent className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 font-medium">{type.toUpperCase()} Chart</p>
        <p className="text-sm text-gray-500 mt-1">图表数据可视化区域</p>
      </div>
    </div>
  );
};

// 图表Tabs
type ChartItem = {
  id: string;
  name: string;
  icon: React.FC<{ className?: string }>;
};

const charts: ChartItem[] = [
  { id: "bar", name: "柱状图", icon: BarChart3 },
  { id: "line", name: "折线图", icon: LineChart },
  { id: "pie", name: "饼图", icon: PieChart },
  { id: "trend", name: "趋势图", icon: TrendingUp },
];

const ChartTabs: React.FC<{
  activeTab: string;
  onTabChange: (id: string) => void;
}> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {charts.map((chart) => {
        const IconComponent = chart.icon;
        return (
          <button
            key={chart.id}
            onClick={() => onTabChange(chart.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === chart.id
                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300"
            }`}
          >
            <IconComponent className="w-4 h-4" />
            <span>{chart.name}</span>
          </button>
        );
      })}
    </div>
  );
};

// 主页面组件
const ChartShow: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [activeTab, setActiveTab] = useState<string>(type || "bar");

  useEffect(() => {
    if (type) setActiveTab(type);
  }, [type]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 图表 Tabs */}
        <ChartTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* 图表展示区 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {charts.find((c) => c.id === activeTab)?.name}
            </h2>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              实时数据
            </span>
          </div>

          <MockChart type={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ChartShow;
