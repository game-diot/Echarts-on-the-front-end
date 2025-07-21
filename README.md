# Echarts 可视化项目文档

## 项目概述

这是一个基于 React + TypeScript + Echarts 构建的数据可视化项目，提供 20+ 种图表类型的展示与交互，支持动态数据加载和可视化配置。

## 技术栈

### 核心框架

- React 18：组件化开发
- TypeScript 5：类型安全
- Vite 4：前端构建工具

### 可视化核心

- Echarts 5：可视化渲染引擎
- Lucide-react：图表类型图标库
- react-resizable：布局调整组件

### 辅助工具

- Tailwind CSS：原子化 CSS 框架
- Zustand：状态管理
- Axios：HTTP 客户端

## 功能特性

### 图表展示

1. 1. 多类型支持

   - 基础图表（折线/柱状/饼图）
   - 地理图表（地图）
   - 关系图表（桑基图/关系图）
   - 专业图表（K 线/热力图）

2. 2. 交互功能

   - 动态数据更新
   - 图表尺寸调整
   - 配置项实时预览
   - 多主题切换（明亮/暗黑）

### 工程化特性

- 类型安全：完整 TS 类型定义（chartTypes.ts）
- 模块化：独立图表组件（src/charts/\*）
- 文档驱动：JSDoc 注释覆盖率 >80%

## 项目结构

```
├── src/
│   ├── charts/          # 图表组件
│   │   ├── LineChart001.tsx 
│   │   ├── MapChart001.tsx
│   │   └── ...20+图表类型
│   ├── components/     # 通用组件
│   │   ├── ChartCard/  # 图表卡片
│   │   ├── Sidebar/    # 导航侧栏
│   │   └── InfoDialog/ # 图表说明
│   ├── data/           # 静态数据
│   │   ├── us-states.json
│   │   └── Flare.json
│   ├── types/          # 类型定义
│   │   └── chartTypes.ts
│   └── App.tsx         # 根组件
```

## 核心模块

### 图表类型定义（chartTypes.ts）

```
interface ChartMeta {
  id: string;
  name: string;
  icon: LucideIcon; // 来自
  lucide-react
  category: '基础' | '地理' | '关系
  ' | '专业';
  description: string; 
  defaultCode: string; // 默认配置
  代码
}
```

## 开发指南

### 本地运行

```
npm install
npm run dev
```

### 生产构建

```
npm run build
npm run preview
```

### 新增图表流程

1. 1. 在 src/charts/ 创建新组件
2. 2. 在 chartTypes.ts 注册元数据
3. 3. 在 src/data/ 添加示例数据
4. 4. 在侧栏菜单中添加入口

## 最佳实践

1. 1. 图表组件规范

   - 使用 useEcharts 自定义 hook
   - 响应式容器使用 Resizable 组件
   - 500+行图表需做动态导入

2. 2. 性能优化

   - 大数据集使用增量渲染
   - Web Worker 处理数据转换
   - 图表组件 memorization

## 数据规范

```// us-states.json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {"name": "Alabama"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[...]]
      }
    }
  ]
}
```
