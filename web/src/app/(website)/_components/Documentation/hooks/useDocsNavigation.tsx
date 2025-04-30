"use client";

import React from "react";
import { DocsNavigationContext } from "../context/DocsNAvigationContext";

export const useDocsNavigation = () => {
  const context = React.useContext(DocsNavigationContext);

  if (!context)
    throw new Error("Docs Context can only be used within it's provider.");

  return context;
};
