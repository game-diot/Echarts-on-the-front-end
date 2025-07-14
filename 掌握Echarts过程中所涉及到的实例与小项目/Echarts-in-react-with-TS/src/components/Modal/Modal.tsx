// src/components/Modal/Modal.tsx
import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscapeKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) return null;

  return createPortal(
    // 关键修复：给背景遮罩添加 onClick={onClose}
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 animate-modal-fade-in"
      onClick={onClose} // 点击背景遮罩关闭模态框
    >
      <div
        className="
          relative bg-white rounded-lg shadow-2xl p-6 w-full max-w-4xl
          transform scale-95 opacity-0 transition-all duration-300 ease-out animate-modal-scale-in
        "
        onClick={(e) => e.stopPropagation()} // 阻止点击模态框内容时关闭
      >
        {title && (
          <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
            {title}
          </h3>
        )}

        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl
            transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1
          "
          aria-label="关闭"
        >
          &times;
        </button>

        <div
          className="modal-content overflow-auto"
          style={{ maxHeight: "calc(100vh - 160px)" }}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
