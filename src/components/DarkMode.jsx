import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function DarkMode(){
      const [darkMode, setDarkMode] = useState(false);
    
      const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
}
        return(
            <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-50 transition-all hover:bg-indigo-700" aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
        );
}

export default DarkMode;