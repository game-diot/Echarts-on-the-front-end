import React from "react";
import { Search } from "lucide-react";
import { useApp } from "./context/AppContext";
import ChartCard from "./ChartCard/ChartCard";
import { chartCategories } from "./data/ChartCategories";

const MainContent: React.FC = () => {
  const { projects, selectedCategory, searchTerm, setSearchTerm } = useApp();

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" ||
      project.type ===
        chartCategories.find((c) => c.id === selectedCategory)?.type;
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentCategoryName =
    chartCategories.find((c) => c.id === selectedCategory)?.name || "所有图表";

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {currentCategoryName}
          </h1>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="搜索图表..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        {filteredProjects.map((project) => (
          <ChartCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md mt-6">
          <div className="text-gray-400 text-lg mb-2">暂无此类型图表</div>
          <p className="text-gray-500">请联系管理员添加该类型图表</p>
        </div>
      )}
    </div>
  );
};

export default MainContent;
