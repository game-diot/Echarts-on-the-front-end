import React from "react";
import { AppProvider } from "./components/context/AppContext";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
        <header className="bg-white shadow-sm border-b border-gray-200 z-10">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Echarts 图表管理系统
            </h1>
          </div>
        </header>

        <div className="flex flex-1">
          {" "}
          {/* flex-1 让侧边栏和主内容区域填充剩余高度 */}
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
