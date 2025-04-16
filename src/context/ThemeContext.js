"use client";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  switchLightTheme: () => {},
  switchDarkTheme: () => {},
});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const switchLightTheme = () => setTheme("light");
  const switchDarkTheme = () => setTheme("dark");

  return (
    <ThemeContext.Provider value={{ theme, switchLightTheme, switchDarkTheme }}>
      <div className={theme} lang="en" dir="ltr">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
