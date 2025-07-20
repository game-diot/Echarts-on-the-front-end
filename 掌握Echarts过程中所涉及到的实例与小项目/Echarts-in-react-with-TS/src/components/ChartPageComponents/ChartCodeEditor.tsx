// components/CodeEditor.tsx - 代码编辑器组件
import React, { useState, useEffect } from "react";
import { Play, RotateCcw, Copy, Download, Eye, EyeOff } from "lucide-react";

interface CodeEditorProps {
  initialCode: string;
  language: "javascript" | "json" | "css";
  onCodeChange: (code: string) => void;
  onExecute: (code: string) => void;
  title: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  language,
  onCodeChange,
  onExecute,
  title,
}) => {
  const [code, setCode] = useState(initialCode);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [lastSavedCode, setLastSavedCode] = useState(initialCode);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setCode(initialCode);
    setLastSavedCode(initialCode);
  }, [initialCode]);

  useEffect(() => {
    setHasChanges(code !== lastSavedCode);
  }, [code, lastSavedCode]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    onCodeChange(newCode);
  };

  const handleExecute = () => {
    try {
      onExecute(code);
      setLastSavedCode(code);
      setHasChanges(false);
    } catch (error) {
      console.error("代码执行错误:", error);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    onCodeChange(initialCode);
    onExecute(initialCode);
    setLastSavedCode(initialCode);
    setHasChanges(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      // 可以添加toast提示
    } catch (error) {
      console.error("复制失败:", error);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.toLowerCase()}-config.${language}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* 编辑器头部 */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold text-gray-900">{title} 配置</h3>
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
            {language.toUpperCase()}
          </span>
          {hasChanges && (
            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
              未保存
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
            title={isPreviewMode ? "编辑模式" : "预览模式"}
          >
            {isPreviewMode ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={handleCopy}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
            title="复制代码"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
            title="下载配置"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
            title="重置为默认"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleExecute}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            title="应用更改"
          >
            <Play className="w-4 h-4" />
            应用
          </button>
        </div>
      </div>

      {/* 编辑器内容 */}
      <div className="flex-1 relative">
        {isPreviewMode ? (
          <div className="h-full p-4 bg-gray-50 overflow-auto">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
              {code}
            </pre>
          </div>
        ) : (
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="w-full h-full p-4 font-mono text-sm text-gray-900 bg-white border-0 resize-none focus:ring-0 focus:outline-none"
            placeholder="在这里编辑您的图表配置..."
            spellCheck={false}
          />
        )}
      </div>

      {/* 编辑器底部状态栏 */}
      <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-500 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center gap-4">
          <span>行: {code.split("\n").length}</span>
          <span>字符: {code.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>就绪</span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
