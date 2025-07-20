import React, { useMemo } from "react";
import type { ChartMeta } from "../chartTypes";

interface ChartData {
  title: string;
  data: any[];
  config: Record<string, any>;
}

interface InteractiveChartProps {
  chartMeta: ChartMeta;
  chartData: ChartData;
}

// 折线图
const SimpleLineChart: React.FC<{ data: ChartData }> = ({ data }) => {
  const maxValue = Math.max(...data.data.map((item) => item.value));
  const points = data.data.map((item, index) => ({
    x: (index / (data.data.length - 1)) * 100,
    y: 100 - (item.value / maxValue) * 80,
  }));

  const pathD = points.reduce((path, point, index) => {
    return (
      path +
      (index === 0 ? `M ${point.x} ${point.y}` : ` L ${point.x} ${point.y}`)
    );
  }, "");

  return (
    <div className="w-full h-full bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        {data.title}
      </h3>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-5/6 border border-gray-200 rounded"
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
        <path
          d={pathD}
          fill="none"
          stroke={data.config.color || "#3b82f6"}
          strokeWidth={data.config.strokeWidth || 2}
        />
        {data.config.showDots &&
          points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="2"
              fill={data.config.color || "#3b82f6"}
            />
          ))}
      </svg>
    </div>
  );
};

// 柱状图
const SimpleBarChart: React.FC<{ data: ChartData }> = ({ data }) => {
  const maxValue = Math.max(...data.data.map((item) => item.value));
  const barWidth = 80 / data.data.length;

  return (
    <div className="w-full h-full bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        {data.title}
      </h3>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-5/6 border border-gray-200 rounded"
      >
        {data.data.map((item, index) => {
          const height = (item.value / maxValue) * 80;
          const x = 10 + index * (80 / data.data.length);
          const y = 90 - height;

          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth * 0.8}
                height={height}
                fill={data.config.barColor || "#10b981"}
                rx="1"
              />
              {data.config.showValues && (
                <text
                  x={x + barWidth * 0.4}
                  y={y - 2}
                  textAnchor="middle"
                  className="text-xs fill-gray-600"
                  fontSize="3"
                >
                  {item.value}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// 饼图
const SimplePieChart: React.FC<{ data: ChartData }> = ({ data }) => {
  const total = data.data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  const slices = data.data.map((item) => {
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle += angle;

    const startX = 50 + 30 * Math.cos((startAngle * Math.PI) / 180);
    const startY = 50 + 30 * Math.sin((startAngle * Math.PI) / 180);
    const endX = 50 + 30 * Math.cos((endAngle * Math.PI) / 180);
    const endY = 50 + 30 * Math.sin((endAngle * Math.PI) / 180);
    const largeArc = angle > 180 ? 1 : 0;

    const pathD = [
      `M 50 50`,
      `L ${startX} ${startY}`,
      `A 30 30 0 ${largeArc} 1 ${endX} ${endY}`,
      "Z",
    ].join(" ");

    return {
      ...item,
      pathD,
      midAngle: startAngle + angle / 2,
      percentage: ((item.value / total) * 100).toFixed(1),
    };
  });

  return (
    <div className="w-full h-full bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        {data.title}
      </h3>
      <div className="flex items-center justify-center h-5/6">
        <svg viewBox="0 0 100 100" className="w-64 h-64">
          {slices.map((slice, index) => (
            <path
              key={index}
              d={slice.pathD}
              fill={slice.color || `hsl(${index * 60}, 70%, 60%)`}
              stroke="white"
              strokeWidth="1"
            />
          ))}
          {data.config.showLabels &&
            slices.map((slice, index) => {
              const labelX =
                50 + 20 * Math.cos((slice.midAngle * Math.PI) / 180);
              const labelY =
                50 + 20 * Math.sin((slice.midAngle * Math.PI) / 180);
              return (
                <text
                  key={index}
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  className="text-xs fill-white font-medium"
                  fontSize="3"
                >
                  {data.config.showPercentage
                    ? `${slice.percentage}%`
                    : slice.name}
                </text>
              );
            })}
        </svg>
      </div>
    </div>
  );
};

// 主组件
const InteractiveChart: React.FC<InteractiveChartProps> = ({
  chartMeta,
  chartData,
}) => {
  const ChartComponent = useMemo(() => {
    switch (chartMeta.type) {
      case "line":
        return <SimpleLineChart data={chartData} />;
      case "bar":
        return <SimpleBarChart data={chartData} />;
      case "pie":
        return <SimplePieChart data={chartData} />;
      default:
        return (
          <div className="w-full h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <chartMeta.icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">{chartMeta.name}</p>
              <p className="text-sm text-gray-500 mt-1">暂不支持实时预览</p>
            </div>
          </div>
        );
    }
  }, [chartMeta, chartData]);

  return (
    <div className="w-full h-full bg-white rounded-lg border border-gray-200 p-6">
      {ChartComponent}
    </div>
  );
};

export default InteractiveChart;
