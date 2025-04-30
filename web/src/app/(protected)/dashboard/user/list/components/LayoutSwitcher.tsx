"use client";

import React from "react";
import { Grid2X2, Grid3X3, List, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Flex from "@/components/common/Flex";

const LayoutSwitcher = React.forwardRef<
  { getPosition: () => number },
  { size?: number; updateParentPosition?: (position: number) => void }
>(({ size = 18, updateParentPosition }, ref) => {
  const [position, setPosition] = React.useState<number>(0);

  React.useImperativeHandle(ref, () => ({
    getPosition: () => position,
  }));

  return (
    <Flex className="bg-gray-200 dark:bg-gray-600/75 relative z-[1] rounded-full shadow-md w-fit">
      <div
        className={`z-[2] absolute h-[calc(100%-8px)] top-[4px] aspect-square bg-primary/20 rounded-full transform transition-transform duration-200 ease-out`}
        style={{
          transform: `translate(calc(${position * (size + 20)}px + 4px), 0)`,
        }}
      />
      <div
        className="py-[10px] px-[10px] z-[3] cursor-pointer"
        onClick={() => {
          setPosition(0);
          updateParentPosition?.(0);
        }}
      >
        <Grid2X2
          size={size}
          className={`transition-all duration-200 ${
            position === 0 ? "text-primary" : "text-muted-foreground"
          }`}
        />
      </div>
      <div
        className="py-[10px] px-[10px] z-[3] cursor-pointer"
        onClick={() => {
          setPosition(1);
          updateParentPosition?.(1);
        }}
      >
        <Grid3X3
          size={size}
          className={`transition-all duration-200 ${
            position === 1 ? "text-primary" : "text-muted-foreground"
          }`}
        />
      </div>
      <div
        className="py-[10px] px-[10px] z-[3] cursor-pointer"
        onClick={() => {
          setPosition(2);
          updateParentPosition?.(2);
        }}
      >
        <List
          size={size}
          className={`transition-all duration-200 ${
            position === 2 ? "text-primary" : "text-muted-foreground"
          }`}
        />
      </div>
    </Flex>
  );
});

LayoutSwitcher.displayName = "Layout Switcher";

export default LayoutSwitcher;
