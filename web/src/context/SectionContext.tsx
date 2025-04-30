"use client";
import React, { SetStateAction } from "react";

type SectionContext = {
  activeSection: string;
  setActiveSection: React.Dispatch<SetStateAction<string>>;
};

export const SectionContext = React.createContext<SectionContext>(
  {} as SectionContext
);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = React.useState<string>("");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSections = () => {
  const context = React.useContext(SectionContext);

  if (!context)
    throw new Error("Section context needs to be used inside its provider!");

  return context;
};
