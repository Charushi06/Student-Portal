import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import DarkMode from "./components/DarkMode";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

// A wrapper to conditionally show Navbar
function AppContent() {
  const location = useLocation();

  // Define pages where Navbar should be visible
  const showNavbar = !['/', '/login'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      {/* Always show dark mode button */}
      <DarkMode />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

// Final Router Component
function Router() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default Router;
