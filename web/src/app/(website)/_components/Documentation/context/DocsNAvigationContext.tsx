"use client";

import React from "react";

type DocsNavigationType = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

export const DocsNavigationContext = React.createContext<DocsNavigationType>(
  {} as DocsNavigationType
);

export const DocsProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [activeLink, setActiveLink] = React.useState<string>("introduction");
  return (
    <DocsNavigationContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </DocsNavigationContext.Provider>
  );
};
