import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChartPageHeader from "../../components/ChartPageComponents/ChartHeader";
import CodeEditor from "../../components/ChartPageComponents/ChartCodeEditor";
import InteractiveChart from "../../components/ChartPageComponents/InteractiveChart";
import { getChartByType } from "../../components/ChartPageComponents/chartUtils";

const ChartEditorPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [chartData, setChartData] = useState<any>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const chartMeta = getChartByType(type || "");

  useEffect(() => {
    if (chartMeta) {
      setCode(chartMeta.defaultCode);
      try {
        const parsedData = JSON.parse(chartMeta.defaultCode);
        setChartData(parsedData);
        setError(null);
      } catch (err) {
        setError("默认配置解析失败");
      }
    }
  }, [chartMeta]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleCodeExecute = (newCode: string) => {
    try {
      const parsedData = JSON.parse(newCode);
      setChartData(parsedData);
      setError(null);
    } catch (err) {
      setError("代码格式错误，请检查JSON语法");
    }
  };

  if (!chartMeta) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            图表类型不存在
          </h2>
          <p className="text-gray-600">请选择正确的图表类型</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ChartPageHeader
        chartName={chartMeta.name}
        category={chartMeta.category}
      />

      <div className="h-[calc(100vh-120px)]">
        <div className="h-full flex">
          {/* 图表展示区域 */}
          <div className="w-4/5 p-6 pr-3">
            <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <chartMeta.icon className="w-6 h-6 text-blue-500" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {chartMeta.name} - 实时预览
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  {error ? (
                    <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                      配置错误
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      运行正常
                    </span>
                  )}
                </div>
              </div>

              {error ? (
                <div className="w-full h-5/6 bg-red-50 rounded-lg border border-red-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-red-600 mb-2">⚠️</div>
                    <p className="text-red-800 font-medium">配置解析错误</p>
                    <p className="text-red-600 text-sm mt-1">{error}</p>
                  </div>
                </div>
              ) : chartData ? (
                <InteractiveChart chartMeta={chartMeta} chartData={chartData} />
              ) : (
                <div className="w-full h-5/6 bg-gray-100 rounded-lg animate-pulse"></div>
              )}
            </div>
          </div>

          {/* 代码编辑器区域 */}
          <div className="w-1/5 p-6 pl-3">
            <CodeEditor
              initialCode={code}
              language={chartMeta.codeLanguage}
              onCodeChange={handleCodeChange}
              onExecute={handleCodeExecute}
              title={chartMeta.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartEditorPage;
