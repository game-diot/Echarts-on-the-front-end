import React from "react";

interface ChartCardProps {
  title: string;
  description: string;
  children: React.ReactNode; // 缩略图或占位符
  onClick?: () => void; // 新增：点击事件回调
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  children,
  onClick,
}) => {
  return (
    // 添加 onClick 事件和 cursor-pointer 样式
    <div
      className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full cursor-pointer transition-shadow duration-200 hover:shadow-lg"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="border border-gray-200 rounded-md p-4 bg-gray-50 flex-grow min-h-[160px] flex items-center justify-center">
        {children} {/* 这里将是缩略图或占位符 */}
      </div>
    </div>
  );
};

export default ChartCard;
