"use client";

import setGlobalColorTheme from "@/lib/theme-colors";
import { ThemeProviderProps, useTheme } from "next-themes";
import React, { useState } from "react";

export const ThemeContext = React.createContext<IThemeColorState>(
  {} as IThemeColorState
);

const ThemeDataProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useTheme();

  const getSavedThemeColor = () => {
    try {
      return (localStorage.getItem("themeColor") as TThemeColors) ?? "Orange";
    } catch (error) {
      "Orange" as TThemeColors;
    }
  };

  const [themeColor, setThemeColor] = React.useState<TThemeColors>(
    getSavedThemeColor() as TThemeColors
  );
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
    setGlobalColorTheme(theme as "light" | "dark", themeColor);

    if (!isMounted) setIsMounted(() => true);
  }, [isMounted, theme, themeColor]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeDataProvider;
