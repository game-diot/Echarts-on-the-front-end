import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// 面包屑导航组件
type BreadcrumbProps = {
  items: Array<{ label: string; path?: string }>;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {item.path ? (
            <button
              onClick={() => navigate(item.path!)}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span
              className={
                index === items.length - 1 ? "text-gray-900 font-medium" : ""
              }
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

// 页面顶部头部组件
interface ChartPageHeaderProps {
  chartName: string;
  category: string;
}

const ChartPageHeader: React.FC<ChartPageHeaderProps> = ({
  chartName,
  category,
}) => {
  const breadcrumbItems = [
    { label: "首页", path: "/" },
    { label: "数据分析" },
    { label: category },
    { label: chartName },
  ];

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {chartName}数据分析
            </h1>
            <p className="text-gray-600 mt-1">实时数据可视化与分析平台</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">实时更新</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPageHeader;
