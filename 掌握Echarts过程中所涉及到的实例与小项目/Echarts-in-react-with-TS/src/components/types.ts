import type { ReactNode } from "react";

// 所有支持的图表类型（统一管理）
export type ChartType =
  | "bar"
  | "usaJson"
  | "line"
  | "pie"
  | "scatter"
  | "area"
  | "map"
  | "kline"
  | "radar"
  | "boxplot"
  | "heatmap"
  | "graph"
  | "tree"
  | "treemap"
  | "sunburst"
  | "sankey"
  | "funnel"
  | "gauge"
  | "river"
  | "calendar"
  | "custom";

// 图表项目的数据结构
export interface ChartProject {
  id: string; // 唯一标识符
  name: string; // 图表名称
  type: ChartType; // 图表类型
  config: any; // Echarts 配置对象
  thumbnail?: string; // 缩略图 URL（可选）
  createTime: Date; // 创建时间
  updateTime: Date; // 更新时间
}

// 图表分类结构（用于 Sidebar）
export interface ChartCategory {
  id: string; // 分类唯一ID（用于筛选）
  name: string; // 显示名称
  icon: ReactNode; // 图标（React 组件）
  type?: ChartType; // 绑定的图表类型（可选）
}

// 全局状态管理 Context 类型
export interface AppContextType {
  projects: ChartProject[]; // 所有图表项目
  selectedCategory: string; // 当前选中的分类 ID
  setSelectedCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  addProject: (
    project: Omit<ChartProject, "id" | "createTime" | "updateTime">
  ) => void;
  deleteProject: (id: string) => void;
  editProject: (id: string) => void;
}

// 可选的用于 Sidebar 的 Props（如果组件独立）
export interface SidebarProps {
  categories: ChartCategory[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  projectCounts: Record<string, number>;
}

// 主区域组件 Props
export interface MainContentProps {
  projects: ChartProject[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

// 图表编辑器组件 Props
export interface ChartEditorProps {
  project?: ChartProject;
  onSave: (project: ChartProject) => void;
  onCancel: () => void;
}

// 通用 API 响应封装
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 文件上传返回结构
export interface FileUploadResult {
  url: string;
  filename: string;
  size: number;
}

// 用户偏好设置
export interface UserPreferences {
  theme: "light" | "dark";
  language: "zh" | "en";
  autoSave: boolean;
  showThumbnails: boolean;
}
