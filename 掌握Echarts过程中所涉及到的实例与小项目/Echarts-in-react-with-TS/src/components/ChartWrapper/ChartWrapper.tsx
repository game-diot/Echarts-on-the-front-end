// src/components/ChartWrapper/ChartWrapper.tsx
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

interface ChartWrapperProps {
  option: echarts.EChartsOption;
  style?: React.CSSProperties; // 允许传入样式
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ option, style }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    // 1. 初始化 Echarts 实例 (只在组件挂载且实例不存在时执行一次)
    if (chartRef.current && !chartInstance.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    // 2. 设置图表配置 (当 option 变化时更新)
    if (chartInstance.current) {
      chartInstance.current.setOption(option);
    }

    // 3. 监听窗口大小变化以重新调整图表
    const handleWindowResize = () => {
      chartInstance.current?.resize();
    };
    window.addEventListener("resize", handleWindowResize);

    // 4. 关键：当模态框显示时，ChartWrapper 的父容器从隐藏到显示
    //    或者尺寸确定后，需要强制 Echarts 重新渲染以适应容器
    //    这里使用 IntersectionObserver 更加精确地监听容器可见性变化
    //    或者更简单的，延迟调用 resize
    let observer: IntersectionObserver | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (chartRef.current) {
      // 尝试使用 IntersectionObserver 监听元素是否进入视图
      // 这是一个更精确的检测图表容器变为可见的方案
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && chartInstance.current) {
              // 如果图表容器可见且实例存在，强制 resize
              chartInstance.current.resize();
              // 一旦可见并 resize 过，可以考虑停止观察（如果图表尺寸不再变化）
              // observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      ); // 10% 可见即可触发
      observer.observe(chartRef.current);

      // 同时保留一个延迟 resize 作为备用或首次确保
      timeoutId = setTimeout(() => {
        chartInstance.current?.resize();
      }, 150); // 稍微增加延迟，确保DOM渲染稳定
    }

    // 清理函数：在组件卸载时销毁图表实例和移除事件监听
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      if (observer && chartRef.current) {
        observer.unobserve(chartRef.current);
        observer.disconnect(); // 断开观察器
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (chartInstance.current) {
        chartInstance.current.dispose();
        chartInstance.current = null;
      }
    };
  }, [option]); // 依赖 option 确保配置更新时图表也更新

  // Echarts 容器必须有明确的尺寸，继承父级 100% 宽高
  return (
    <div ref={chartRef} style={{ width: "100%", height: "100%", ...style }} />
  );
};

export default ChartWrapper;
