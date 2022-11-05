/**
 * @file AppRouter.jsx this is the file with router pages of the project, and contains A router that is used to navigate between pages
 * @author Behar Rahala AbdelKader
 * @see https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR/blob/main/src/AppRouter.jsx
 */

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * If the URL matches the pattern /user/:id, then render the App component, otherwise, if the URL
 * matches /404, then render the 404 page, otherwise, if the URL matches any other pattern, then
 * redirect to the 404 page.
 */
/**
 * If the URL matches the path, then render the element, otherwise, render the next route.
 */
export default function AppRouter() {
/* A router that is used to navigate between pages. */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<App />} />
        <Route path="/404" element={<NotFoundPage />} />
        {/* Redirecting to the 404 page if the URL matches any other pattern. */}
        <Route path="*" element={<Navigate to={"/404"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
