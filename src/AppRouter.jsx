import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/:id" element={<App />} />
                <Route path="/404" element={<pre>404 Page</pre>} />
            </Routes>
        </BrowserRouter>
    )
}
