import React from "react";

interface ConfirmationDialogProps {
  isOpen: boolean; // Controls dialog visibility
  message: string; // The message to display in the dialog
  onConfirm: () => void; // Callback when user confirms
  onCancel: () => void; // Callback when user cancels
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    // Overlay for the background
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dialog container */}
      <div className="w-full bg-white rounded-lg shadow-2xl p-8 m-6 max-w-md  h-80 border border-gray-200">
        <p className="text-3xl font-semibold text-gray-800 mb-8 text-center ">
          {message}
        </p>
        <div className="flex justify-center  space-x-30 mt-20">
          <button
            onClick={onCancel}
            className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50  transition-colors duration-200"
          >
            取消
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            确认
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
