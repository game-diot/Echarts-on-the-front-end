import type { ChartProject } from "../../components/types";
import ChartPageHeader from "../../components/ChartPageComponents/Header";
import ChartShow from "../../components/ChartPageComponents/ChartShow";
import ChartDescription from "../../components/ChartPageComponents/ChartDescription";
import ChartQuickActions from "../../components/ChartPageComponents/ChartQuickAction";
interface ChartCardProps {
  project: ChartProject;
}
const ChartPage: React.FC<ChartCardProps> = ({ project }) => {
  //   const renderChart = () => {
  //     switch (project.type) {
  //       case "line":
  //         return <LineChart001 />;
  //       case "bar":
  //         return <BarChart001 />;
  //       case "pie":
  //         return <PieChart001 />;
  //       case "scatter":
  //         return <ScatterChart001 />;
  //       case "map":
  //         return <MapChart001 />;
  //       case "tree":
  //         return <TreeChart001 />;
  //       case "sunburst":
  //         return <SunburstChart001 />;
  //       case "graph":
  //         return <GraphChart001 />;
  //       case "kline":
  //         return <KlineChart001 />;
  //       case "radar":
  //         return <RadarChart001 />;
  //       case "boxplot":
  //         return <BoxplotChart001 />;
  //       case "heatmap":
  //         return <HeatmapChart001 />;
  //       case "treemap":
  //         return <TreemapChart001 />;
  //       case "sankey":
  //         return <SankeyChart001 />;
  //       case "funnel":
  //         return <FunnelChart001 />;
  //       case "gauge":
  //         return <GaugeChart001 />;
  //       case "river":
  //         return <RiverChart001 />;
  //       case "custom":
  //         return <CustomChart001 />;

  //       default:
  //         return <div>未知图表类型</div>;
  //     }
  //   };
  return (
    <div>
      <ChartPageHeader />
      <ChartShow />
      <ChartDescription />
      <ChartQuickActions />
    </div>
  );
};

export default ChartPage;
