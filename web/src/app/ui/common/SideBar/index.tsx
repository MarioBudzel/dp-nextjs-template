"use client";

import { ChevronFirst } from "lucide-react";
import Image from "next/image";
import React, { createContext } from "react";

import useBreakpoints from "@/hooks/useBreakpoints";
import HydrationWrapper from "../HydrationWrapper";
import { SidebarContent } from "@/components/common";
import { useSidebar } from "@/context/SidebarContext";

interface SidebarContextType {
  isExpanded: boolean;
}

export const SidebarContext = createContext<SidebarContextType>({
  isExpanded: false,
});

const Sidebar: React.FC = () => {
  const { isExpanded, onClose, onOpen, onToggle } = useSidebar();
  const { isBreakpoint } = useBreakpoints();
  const isMD = isBreakpoint("md");
  const isSM = isBreakpoint("sm");

  React.useEffect(() => {
    if (!isMD) onClose();
    if (isMD) onOpen();
  }, [isMD, onClose, onOpen]);

  return (
    <HydrationWrapper>
      <aside
        className={`h-dvh overflow-auto flex-shrink-0  ${isSM !== undefined && !isSM ? "hidden" : ""}`}
      >
        <nav className="h-full flex flex-col bg-card border-r border-r-primary/25 border-l-0 shadow-sm">
          <section
            className={`w-full flex items-center transition-all ${
              isExpanded ? "p-2 pb-2 justify-between" : ""
            }`}
          >
            <Image
              alt="logo"
              src="https://img.logoipsum.com/289.svg"
              className={`overflow-hidden transition-all ${
                isExpanded ? "w-24" : "w-0"
              }`}
              width={32}
              height={32}
            />
            <button
              onClick={onToggle}
              className="flex-shrink-0 flex items-center justify-center rounded-lg p-1.5 bg-transparent transition-all duration-200 hover:bg-foreground/5"
              style={{
                width: isExpanded ? "36px" : "0px",
                padding: isExpanded ? "6px" : "0px",
              }}
            >
              <ChevronFirst
                className={`text-foreground transition-transform duration-500 delay-75 ${
                  isExpanded ? "rotate-0" : "rotate-180"
                }`}
                strokeWidth={3}
                size={24}
              />
            </button>
          </section>
          <SidebarContent />
        </nav>
      </aside>
    </HydrationWrapper>
  );
};

export default Sidebar;
