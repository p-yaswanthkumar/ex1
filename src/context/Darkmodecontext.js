// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const Darkmodecontext = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check if user has a saved preference in localStorage
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkMode = () => useContext(ThemeContext);