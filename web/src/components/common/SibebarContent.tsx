"use client";

import { DashboardLinks } from "@/data/menuItems";
import React from "react";
import Flex from "./Flex";
import { cn } from "@/lib/utils";
import NavigationGroupHandler from "../ui/NavigationGroupHandler";
import { useSidebar } from "@/context/SidebarContext";

const SibebarContent: React.FC<{ ignoreExpanded?: boolean }> = ({
  ignoreExpanded,
}) => {
  const dashboardLinks = DashboardLinks;
  const { isExpanded } = useSidebar();
  return (
    <Flex
      className={cn(
        "flex-col transition-all duration-[120] ease-linear overflow-y-auto relative",
        isExpanded ? "gap-2" : "gap-1"
      )}
    >
      {isExpanded || ignoreExpanded ? (
        <React.Fragment>
          {dashboardLinks.map((group, index) => (
            <NavigationGroupHandler key={index} group={group} />
          ))}
        </React.Fragment>
      ) : null}
    </Flex>
  );
};

export default SibebarContent;
