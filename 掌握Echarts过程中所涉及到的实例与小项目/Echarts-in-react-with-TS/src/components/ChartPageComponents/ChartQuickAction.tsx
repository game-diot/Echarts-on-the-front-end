import React from "react";
import { Download, Settings, Share2 } from "lucide-react";

type Props = {
  onDownload?: () => void;
  onSettings?: () => void;
  onShare?: () => void;
};

const ChartQuickActions: React.FC<Props> = ({
  onDownload,
  onSettings,
  onShare,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
      <div className="space-y-3">
        <button
          onClick={onDownload}
          className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Download className="w-5 h-5 text-blue-600" />
          <span>导出图表</span>
        </button>

        <button
          onClick={onSettings}
          className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5 text-gray-600" />
          <span>自定义设置</span>
        </button>

        <button
          onClick={onShare}
          className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Share2 className="w-5 h-5 text-green-600" />
          <span>分享链接</span>
        </button>
      </div>
    </div>
  );
};

export default ChartQuickActions;
