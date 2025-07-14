// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-800">
        {/* Header 保持全宽 */}
        {/* 这里我们不再在HomePage内部放置Header，而是将其放置在Router外部的顶层，使其在所有页面共享 */}
        {/* 如果每个页面有不同的Header，则需要将Header放回各自页面 */}
        {/* 为了演示效果，我们暂不在这里放置Header，而是让每个页面自行包含 */}

        {/* Routes 包含所有页面 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
