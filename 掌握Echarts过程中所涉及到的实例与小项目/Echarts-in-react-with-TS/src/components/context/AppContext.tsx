import React, { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { ChartProject, AppContextType } from "../homeTypes";

// 初始图表项目
const initialMockProjects: ChartProject[] = [
  {
    id: "bar",
    name: "柱状图",
    type: "bar",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "line",
    name: "折线图",
    type: "line",
    config: {},
    createTime: new Date("2024-01-10T09:00:00Z"),
    updateTime: new Date("2024-01-18T11:00:00Z"),
  },
  {
    id: "pie",
    name: "饼图",
    type: "pie",
    config: {},
    createTime: new Date("2024-01-05T15:00:00Z"),
    updateTime: new Date("2024-01-15T16:00:00Z"),
  },
  {
    id: "scatter",
    name: "散点图",
    type: "scatter",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "map",
    name: "地图",
    type: "map",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "kline",
    name: "K线图",
    type: "kline",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "radar",
    name: "雷达图",
    type: "radar",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "boxplot",
    name: "盒须图",
    type: "boxplot",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "heatmap",
    name: "热力图",
    type: "heatmap",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "graph",
    name: "关系图",
    type: "graph",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "tree",
    name: "树状图",
    type: "tree",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "treemap",
    name: "矩形树状图",
    type: "treemap",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "sunburst",
    name: "旭日图",
    type: "sunburst",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "sankey",
    name: "桑葚图",
    type: "sankey",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "funnel",
    name: "漏斗图",
    type: "funnel",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "gauge",
    name: "仪表盘",
    type: "gauge",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
  {
    id: "river",
    name: "河流图",
    type: "river",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },

  {
    id: "custom",
    name: "自定义图",
    type: "custom",
    config: {},
    createTime: new Date("2025-07-15T10:00:00Z"),
    updateTime: new Date("2025-07-15T14:30:00Z"),
  },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [projects] = useState<ChartProject[]>(initialMockProjects);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const contextValue: AppContextType = {
    projects,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    addProject: () => {},
    deleteProject: () => {},
    editProject: () => {},
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
