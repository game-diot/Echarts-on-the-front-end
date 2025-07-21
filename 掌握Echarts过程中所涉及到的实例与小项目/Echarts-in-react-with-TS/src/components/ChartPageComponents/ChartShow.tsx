import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getChartByType } from "./chartUtils";


// 主展示组件
const ChartShow: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  const chartMeta = getChartByType(type || "");

  if (!chartMeta) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            图表类型不存在
          </h2>
          <p className="text-gray-600 mb-4">请选择正确的图表类型</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
          {/* 图表头部 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <chartMeta.icon className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                {chartMeta.name}
              </h2>
            </div>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              实时数据
            </span>
          </div>

          {/* 图表说明 */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">图表说明</h3>
            <p className="text-sm text-gray-600">{chartMeta.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartShow;
