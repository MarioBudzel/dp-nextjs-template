"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React from "react";

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);

  if (!context)
    throw new Error("Theme context can only be used inside of its provider!");

  return context;
};

export default useThemeContext;
