// src/components/Header/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    // 调整背景色渐变，阴影，内边距，并添加动画类
    <header
      className="
      bg-gradient-to-r from-blue-600 to-purple-700 text-white
      py-5 px-6 md:px-8 shadow-xl sticky top-0 z-20
      transform translate-y-0 opacity-100 transition-all duration-700 ease-out
      animate-fade-in-down
    "
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-screen-xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wide mb-2 md:mb-0">
          Echarts 学习笔记
        </h1>
        <p className="text-lg lg:text-xl opacity-90 font-light">
          记录掌握 Echarts 过程中的关键节点
        </p>
      </div>
    </header>
  );
};

export default Header;
