"use client";

import useDisclosure from "@/hooks/useDisclosure";
import { ChartNoAxesGantt, ChevronFirst, MenuIcon, X } from "lucide-react";
import useBreakpoints from "@/hooks/useBreakpoints";
import HydrationWrapper from "../HydrationWrapper";

import SettingsDrawer from "./_components/SettingsDrawer";
import UserDrawer from "./_components/UserDrawer";
import Flex from "@/components/common/Flex";
import { useSidebar } from "@/context/SidebarContext";
import { DrawerTitle } from "@/components/common/IconDrawer";
import { DrawerClose } from "@/components/common/IconDrawer";
import IconDrawer from "@/components/common/IconDrawer";
import { SidebarContent } from "@/components/common";

const Header: React.FC = () => {
  const { onOpen, isExpanded } = useSidebar();
  const { isBreakpoint } = useBreakpoints();
  const isSM = isBreakpoint("sm");

  return (
    <HydrationWrapper>
      <div
        className={`overflow-hidden w-full min-h-[75px] py-2 bg-transparent flex justify-between items-center transition-all px-3`}
      >
        <button
          onClick={onOpen}
          className="flex-shrink-0 flex items-center justify-center rounded-lg p-1.5 bg-transparent transition-all duration-200 hover:bg-foreground/5"
          style={{
            width: !isSM ? "0px" : !isExpanded ? "36px" : "0px",
            padding: !isSM ? "0px" : !isExpanded ? "6px" : "0px",
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
        <IconDrawer
          direction="left"
          drawerTrigger={<ChartNoAxesGantt size={24} />}
          useBackdropEffects
          OverlayProps={{
            className: "bg-black/5 backdrop-blur-sm",
          }}
          ContentProps={{
            className: "left-0",
          }}
          drawerTriggerProps={{
            className: `transition-all overflow-hidden ${isSM ? "w-0" : "w-[36px]"}`,
          }}
        >
          <div className="w-full grow flex flex-col shadow-lg bg-card/90 backdrop-blur-sm gap-8">
            <Flex className="items-center justify-between p-5">
              <DrawerTitle></DrawerTitle>
              <DrawerClose className="flex justify-end">
                <X size={24} />
              </DrawerClose>
            </Flex>
            <SidebarContent ignoreExpanded />
          </div>
        </IconDrawer>
        <Flex className="gap-3 grow align-center justify-end">
          <SettingsDrawer />
          <UserDrawer />
        </Flex>
      </div>
    </HydrationWrapper>
  );
};
export default Header;
