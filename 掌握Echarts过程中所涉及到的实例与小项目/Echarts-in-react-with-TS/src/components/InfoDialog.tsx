export default function InfoDialog({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "90%",
          maxWidth: "600px",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          padding: "24px 30px",
          fontFamily: "sans-serif",
          lineHeight: "1.6",
        }}
      >
        <h2 style={{ marginBottom: "12px", fontSize: "20px", color: "#333" }}>
          📢 使用须知
        </h2>
        <div style={{ fontSize: "14px", color: "#444" }}>
          <p>
            本项目仅用于个人学习与测试，主要用于记录我在前端开发过程中对
            <strong> ECharts 图表掌握、数据可视化实现 </strong>
            等关键技能的掌握情况。
          </p>
          <p>
            所有功能（如图表展示、图表页面跳转、注册登录）仅为学习目的提供，数据为模拟演示内容。
          </p>

          <p>
            本项目不提供任何形式的保证，也不承担因使用本项目而产生的任何法律责任。
          </p>
        </div>
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "8px 16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            我知道了
          </button>
        </div>
      </div>
    </div>
  );
}
