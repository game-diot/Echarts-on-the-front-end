// src/pages/HomePage/HomePage.tsx
import React, { useState, useMemo } from "react"; // 导入 useMemo
import Header from "../../components/Header/Header";
import ChartCard from "../../components/ChartCard/ChartCard";
import Modal from "../../components/Modal/Modal";
import LineChart from "../../components/charts/LineChart/LineChart"; // 导入 LineChart
import ChartWrapper from "../../components/ChartWrapper/ChartWrapper"; // 导入 ChartWrapper 用于缩略图
import { lineChartExampleData } from "../../data/lineChartData";
import type { EChartsOption } from "echarts"; // 导入 EChartsOption 类型
import * as echarts from "echarts";
// 定义一个类型来存储当前选中的图表信息
interface SelectedChartInfo {
  title: string;
  component: React.ReactElement; // 存储要渲染的图表组件
}

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState<SelectedChartInfo | null>(
    null
  );

  // 为 LineChart 创建一个简化的 option 用于缩略图
  const lineChartThumbnailOption: EChartsOption = useMemo(() => {
    const { dates, highestTemperatures } = lineChartExampleData;
    return {
      grid: {
        left: "5%",
        right: "5%",
        top: "10%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: { type: "category", data: dates, show: false }, // 隐藏 X 轴
      yAxis: { type: "value", show: false }, // 隐藏 Y 轴
      series: [
        {
          type: "line",
          data: highestTemperatures,
          showSymbol: false, // 不显示点
          lineStyle: {
            width: 2,
            color: "#6366f1", // 统一颜色
          },
          areaStyle: {
            opacity: 0.8,
            // 关键修复：使用导入的 echarts 对象访问 graphic
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(99, 102, 241, 0.5)" },
              { offset: 1, color: "rgba(99, 102, 241, 0)" },
            ]),
          },
        },
      ],
      tooltip: { show: false }, // 隐藏 tooltip
      animation: false, // 禁用动画，提升性能
    };
  }, []);

  const chartExamples = [
    {
      id: "line",
      type: "折线图",
      description: "展示数据趋势和随时间变化的图表，常用于时间序列数据分析。",
      thumbnail: (
        <ChartWrapper
          option={lineChartThumbnailOption}
          style={{ width: "100%", height: "100%" }}
        />
      ),
      fullComponent: <LineChart chartData={lineChartExampleData} />,
    },
    {
      id: "bar",
      type: "柱状图",
      description: "用于比较不同类别数据的大小，或者表示数据的分布情况。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>柱状图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 柱状图 组件]</span>
        </div>
      ),
    },
    {
      id: "pie",
      type: "饼图",
      description: "显示部分与整体的关系，常用于展示数据的占比。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>饼图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 饼图 组件]</span>
        </div>
      ),
    },
    // ... 其他图表示例，请为每个添加 thumbnail 属性
    {
      id: "scatter",
      type: "散点图",
      description: "发现两个变量之间关系的图表，常用于展示数据点的分布。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>散点图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 散点图 组件]</span>
        </div>
      ),
    },
    {
      id: "map",
      type: "地图",
      description: "在地图上展示地理数据的分布，如各省份销售额。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>地图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 地图 组件]</span>
        </div>
      ),
    },
    {
      id: "kline",
      type: "K线图",
      description: "常用于金融领域，展示股票、期货等价格走势。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>K线图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 K线图 组件]</span>
        </div>
      ),
    },
    {
      id: "radar",
      type: "雷达图",
      description: "多维度数据展示，用于分析各项指标的综合表现。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>雷达图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 雷达图 组件]</span>
        </div>
      ),
    },
    {
      id: "boxplot",
      type: "盒须图",
      description: "展示数据的分布情况，包括中位数、四分位数、异常值等。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>盒须图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 盒须图 组件]</span>
        </div>
      ),
    },
    {
      id: "heatmap",
      type: "热力图",
      description: "用颜色深浅表示数据密度或数值大小，常用于二维数据。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>热力图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 热力图 组件]</span>
        </div>
      ),
    },
    {
      id: "graph",
      type: "关系图",
      description: "展示节点和边之间的关系，用于网络分析、社交关系等。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>关系图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 关系图 组件]</span>
        </div>
      ),
    },
    {
      id: "tree",
      type: "树图",
      description: "显示层级结构数据，如组织架构、文件目录等。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>树图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 树图 组件]</span>
        </div>
      ),
    },
    {
      id: "treemap",
      type: "矩形树图",
      description: "用嵌套的矩形表示层级数据，矩形大小反映数值。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>矩形树图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 矩形树图 组件]</span>
        </div>
      ),
    },
    {
      id: "sunburst",
      type: "旭日图",
      description: "环形层级图，类似饼图但支持多层数据展示。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>旭日图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 旭日图 组件]</span>
        </div>
      ),
    },
    {
      id: "sankey",
      type: "桑基图",
      description: "展示数据流向和数量变化，常用于能量流、资金流分析。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>桑基图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 桑基图 组件]</span>
        </div>
      ),
    },
    {
      id: "funnel",
      type: "漏斗图",
      description: "展示一个流程中各个阶段的数据转化和流失情况。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>漏斗图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 漏斗图 组件]</span>
        </div>
      ),
    },
    {
      id: "gauge",
      type: "仪表盘",
      description: "显示某个指标的当前数值和状态，类似汽车仪表盘。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>仪表盘缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 仪表盘 组件]</span>
        </div>
      ),
    },
    {
      id: "theme-river",
      type: "河流图",
      description: "展示事件或主题随时间的变化和相互关联。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>河流图缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 河流图 组件]</span>
        </div>
      ),
    },
    {
      id: "calendar",
      type: "日历坐标系",
      description: "在日历上展示数据，常用于每日活动量或销售额。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>日历坐标系缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 日历坐标系 组件]</span>
        </div>
      ),
    },
    {
      id: "custom",
      type: "自定义图表",
      description: "Echarts 强大的自定义渲染能力，可以实现各种创意图表。",
      thumbnail: (
        <div className="flex items-center justify-center h-full text-gray-400">
          <span>自定义图表缩略图</span>
        </div>
      ),
      fullComponent: (
        <div className="flex items-center justify-center h-96 text-gray-400 border border-dashed border-gray-300 rounded-md p-4">
          <span>[此处放置 自定义图表 组件]</span>
        </div>
      ),
    },
  ];

  const handleCardClick = (chart: (typeof chartExamples)[0]) => {
    setSelectedChart({
      title: chart.type,
      component: chart.fullComponent,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedChart(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-4 py-12">
        <section
          className="
            bg-white p-8 rounded-xl shadow-lg mb-12 border border-gray-200
            max-w-screen-xl mx-auto
            transform translate-y-0 opacity-100 transition-all duration-700 ease-out
            animate-fade-in
          "
        >
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
            我的 Echarts 学习笔记
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            欢迎来到我的 Echarts 学习旅程！在这里，我将精心整理并展示我在学习
            Echarts 过程中掌握的各种图表类型和关键技巧。
            点击卡片即可查看该图表的放大版，并进行完整的交互操作。
          </p>
        </section>

        <section
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8
            max-w-screen-2xl mx-auto
          "
        >
          {chartExamples.map((chart) => (
            <ChartCard
              key={chart.id}
              title={chart.type}
              description={chart.description}
              onClick={() => handleCardClick(chart)}
            >
              {chart.thumbnail}
            </ChartCard>
          ))}
        </section>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedChart?.title ? `${selectedChart.title} 详细视图` : ""}
      >
        {selectedChart && (
          <div className="w-full h-[60vh] min-h-[400px]">
            {selectedChart.component}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HomePage;
