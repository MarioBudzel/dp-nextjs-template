"use client";

import useDisclosure from "@/hooks/useDisclosure";
import React, { createContext } from "react";

interface SidebarContextType {
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
  onOpen: () => void;
}

export const SidebarContext = createContext<SidebarContextType>(
  {} as SidebarContextType
);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    isOpen: isExpanded,
    onToggle,
    onClose,
    onOpen,
  } = useDisclosure({
    defaultState: true,
  });

  return (
    <SidebarContext.Provider value={{ isExpanded, onToggle, onClose, onOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);

  if (!context) throw new Error("No sidebar provider found!");

  return context;
};
