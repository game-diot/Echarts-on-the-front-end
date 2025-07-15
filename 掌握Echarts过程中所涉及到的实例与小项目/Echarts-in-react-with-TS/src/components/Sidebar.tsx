import React from "react";
import { useApp } from "./context/AppContext";
import { chartCategories } from "./data/ChartCategories";

const Sidebar: React.FC = () => {
  const { selectedCategory, setSelectedCategory, projects } = useApp();

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return projects.length;
    // 找到对应分类的 type
    const categoryType = chartCategories.find(
      (cat) => cat.id === categoryId
    )?.type;
    return projects.filter((p) => p.type === categoryType).length;
  };

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">图表分类</h2>
        <div className="space-y-2">
          {chartCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                selectedCategory === category.id
                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center space-x-3">
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">
                {getCategoryCount(category.id)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
