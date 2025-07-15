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
      // 其他类型
      default:
        return <div>未知图表类型</div>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col w-100">
      <h3 className="text-lg font-semibold mb-2 truncate">{project.name}</h3>
      <div className="h-56 " style={{ height: 405, width: 405 }}>
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartCard;
