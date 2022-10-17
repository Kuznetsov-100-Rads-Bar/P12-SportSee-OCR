import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './App';

import Dashboard from "./pages/Dashboard";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/:id" element={<App />} />
                {/* <Route index element={<Dashboard />} /> */}
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </BrowserRouter>
    )
}
