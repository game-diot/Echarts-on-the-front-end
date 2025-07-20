// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ChartPage from "./pages/ChartPage/ChartPage";
import ChartEditorPage from "./pages/ChartPage/ChartEditorPage";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charts/:type" element={<ChartPage />} />
        <Route path="/charts/:type/:id" element={<ChartEditorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
