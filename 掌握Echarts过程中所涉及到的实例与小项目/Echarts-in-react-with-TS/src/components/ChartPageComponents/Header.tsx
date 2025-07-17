import React from "react";

type BreadcrumbProps = {
  items: string[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span>/</span>}
          <span
            className={
              index === items.length - 1
                ? "text-gray-900 font-medium"
                : "hover:text-gray-900"
            }
          >
            {item}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
};

const ChartPageHeader: React.FC = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumb items={["首页", "数据分析", "图表展示"]} />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">图表数据分析</h1>
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
