// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ChartPage from "./pages/ChartPage/ChartPage";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charts/:type" element={<ChartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
