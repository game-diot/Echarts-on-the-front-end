import React from "react";
import type { ChartProject } from "../types";
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

interface ChartCardProps {
  project: ChartProject;
}

const ChartCard: React.FC<ChartCardProps> = ({ project }) => {
  // 根据类型选择组件
  const renderChart = () => {
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
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col flex-1 min-w-0">
      <h3 className="text-lg font-semibold mb-2 truncate">{project.name}</h3>
      <div className="w-full " style={{ height: 400, width: 400 }}>
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartCard;
