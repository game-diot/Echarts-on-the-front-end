import React from "react";
import { useParams } from "react-router-dom";
import ChartPageHeader from "../../components/ChartPageComponents/ChartHeader";
import ChartShow from "../../components/ChartPageComponents/ChartShow";
import RelatedCharts from "../../components/ChartPageComponents/ChartRelated";
import {
  getChartByType,
  getRelatedCharts,
} from "../../components/ChartPageComponents/chartUtils";

import type { ChartMeta } from "../../components/chartTypes";
import LineChart001 from "../../charts/LineChart001";
import BarChart001 from "../../charts/BarChart001";
import PieChart001 from "../../charts/PieChart001";
import ScatterChart001 from "../../charts/ScatterChart001";
import MapChart001 from "../../charts/MapChart001";
import TreeChart001 from "../../charts/TreeChart001";
import SunburstChart001 from "../../charts/SunburstChart001";
import GraphChart001 from "../../charts/GraphChart001";
import KlineChart001 from "../../charts/KlineChart001";
import RadarChart001 from "../../charts/RadarChart001";
import BoxplotChart001 from "../../charts/BoxplotChart001";
import HeatmapChart001 from "../../charts/HeatmapChart001";
import TreemapChart001 from "../../charts/TreemapChart001";
import SankeyChart001 from "../../charts/SankeyChart001";
import FunnelChart001 from "../../charts/FunnelChart001";
import GaugeChart001 from "../../charts/GaugeChart001";
import RiverChart001 from "../../charts/RiverChart001";
import CustomChart001 from "../../charts/CustomChart001";

const ChartDetailPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const chartMeta = getChartByType(type || "");
  const relatedCharts = getRelatedCharts(type || "", 3);

  if (!chartMeta) {
    return (
      <div className="min-h-screen bg-gray-50 items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            图表类型不存在
          </h2>
          <p className="text-gray-600">请选择正确的图表类型</p>
        </div>
      </div>
    );
  }
  interface ChartProps {
    project: ChartMeta;
  }
  const renderChart = ({ project }: ChartProps) => {
    switch (project.type) {
      case "line":
        return <LineChart001 />;
      case "bar":
        return <BarChart001 />;
      case "pie":
        return <PieChart001 />;
      case "scatter":
        return <ScatterChart001 />;
      case "map":
        return <MapChart001 />;
      case "tree":
        return <TreeChart001 />;
      case "sunburst":
        return <SunburstChart001 />;
      case "graph":
        return <GraphChart001 />;
      case "kline":
        return <KlineChart001 />;
      case "radar":
        return <RadarChart001 />;
      case "boxplot":
        return <BoxplotChart001 />;
      case "heatmap":
        return <HeatmapChart001 />;
      case "treemap":
        return <TreemapChart001 />;
      case "sankey":
        return <SankeyChart001 />;
      case "funnel":
        return <FunnelChart001 />;
      case "gauge":
        return <GaugeChart001 />;
      case "river":
        return <RiverChart001 />;
      case "custom":
        return <CustomChart001 />;

      default:
        return <div>未知图表类型</div>;
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      {/* 头部面包屑及标题 */}
      <ChartPageHeader
        chartName={chartMeta.name}
        category={chartMeta.category}
      />

      {/* 主体内容区域，使用 Flex 布局实现 70/30 比例 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {" "}
          {/* Changed to flexbox */}
          {/* 主要图表区域，占据 70% 宽度 */}
          <div className="w-full lg:w-7/10">
            {" "}
            {/* Added width classes */}
            {renderChart({ project: chartMeta })}
            <ChartShow />
          </div>
          {/* 侧边栏区域，占据 30% 宽度 */}
          <div className="w-full lg:w-3/10 space-y-6">
            {" "}
            {/* Added width classes */}
            {/* 相关图表推荐 */}
            <RelatedCharts
              charts={relatedCharts}
              currentChartType={type || ""}
            />
            {/* 当前图表信息卡片 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                图表信息
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">类型</span>
                  <p className="font-medium">{chartMeta.name}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">分类</span>
                  <p className="font-medium">{chartMeta.category}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">适用场景</span>
                  <p className="text-sm text-gray-700">{chartMeta.scenarios}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartDetailPage;
