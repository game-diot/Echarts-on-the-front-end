// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import { AppProvider } from "../../components/context/AppContext";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import InfoDialog from "../../components/InfoDialog";
const HomePage: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  // 判断是否已经看过弹窗
  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenInfoDialog");
    if (!hasSeen) {
      setShowDialog(true);
    }
  }, []);

  const handleCloseDialog = () => {
    setShowDialog(false);
    // localStorage.setItem("hasSeenInfoDialog", "true"); // 持久记录
  };

  return (
    <AppProvider>
      {showDialog && <InfoDialog onClose={handleCloseDialog} />}
      <div className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
        <header className="bg-white shadow-sm border-b border-gray-200 z-10">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Game-Idiot的 Echarts 图表理解网站
            </h1>
          </div>
        </header>

        <div className="flex flex-1">
          {/* flex-1 让侧边栏和主内容区域填充剩余高度 */}
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </AppProvider>
  );
};

export default HomePage;
