"use-client";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const switchLightTheme = () => {
    setTheme("light");
  };

  const switchDarkTheme = () => {
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchLightTheme, switchDarkTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
