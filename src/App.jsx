import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/user/12" />} />
      </Routes>
    </BrowserRouter>
  );
}
