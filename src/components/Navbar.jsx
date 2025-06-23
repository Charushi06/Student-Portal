import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-blue-500 p-4 flex justify-between items-center shadow-lg z-50">
      <div className="text-white text-3xl font-bold">Student Portal</div>
      <div className="space-x-6">
        <Link to="/home" className="text-white text-lg hover:underline">Home</Link>
        <Link to="/users" className="text-white text-lg hover:underline">Users</Link>
        <Link to="/dashboard" className="text-white text-lg hover:underline">Dashboard</Link>
        <Link to="/login" className="text-white text-lg hover:underline">Logout</Link>
        <Link className = " text-3x1 text-white border-solid border-white border-2">Alya</Link>
      </div>
    </nav>
  );
}

export default Navbar;
