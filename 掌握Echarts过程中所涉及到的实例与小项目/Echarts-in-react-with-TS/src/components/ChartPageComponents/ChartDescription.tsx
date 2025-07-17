import React from "react";
import { Calendar, Eye, Info } from "lucide-react";

export type ChartMeta = {};

const ChartDescription: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Info className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">图表说明</h3>
          <p className="text-gray-600 leading-relaxed mb-4"></p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>更新时间: </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Eye className="w-4 h-4" />
              <span>查看次数: </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartDescription;
