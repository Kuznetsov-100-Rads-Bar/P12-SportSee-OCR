import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './App';

/**
 * If the URL matches the pattern /user/:id, then render the App component, otherwise, if the URL
 * matches /404, then render the 404 page, otherwise, if the URL matches any other pattern, then
 * redirect to the 404 page.
 */
/**
 * If the URL matches the path, then render the element, otherwise, render the next route.
 */
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user/:id" element={<App />} />
                <Route path="/404" element={<pre>404 Page</pre>} />
                <Route path="*" element={<Navigate to={'/404'} replace />} />
            </Routes>
        </BrowserRouter>
    )
}
