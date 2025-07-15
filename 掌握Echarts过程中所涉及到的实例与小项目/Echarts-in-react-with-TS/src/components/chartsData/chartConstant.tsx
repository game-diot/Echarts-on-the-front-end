// data/constants.ts - 常量配置
export const APP_CONFIG = {
  APP_NAME: "Echarts图表管理系统",
  VERSION: "1.0.0",
  STORAGE_KEY: "echarts-projects",
  MAX_PROJECT_NAME_LENGTH: 50,
  SUPPORTED_CHART_TYPES: ["bar", "line", "pie", "scatter", "area"] as const,
  DEFAULT_CHART_SIZE: {
    width: 600,
    height: 400,
  },
  PAGINATION: {
    PAGE_SIZE: 12,
    MAX_PAGES: 100,
  },
};

export const CHART_COLORS = {
  primary: "#3b82f6",
  secondary: "#10b981",
  accent: "#f59e0b",
  danger: "#ef4444",
  warning: "#f97316",
  info: "#06b6d4",
  success: "#22c55e",
};
