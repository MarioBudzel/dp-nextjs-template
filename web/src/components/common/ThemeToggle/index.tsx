"use client";

import React from "react";
import Flex from "../Flex";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle: React.FC<{ size?: number }> = ({ size = 18 }) => {
  const { setTheme, theme } = useTheme();
  const [position, setPosition] = React.useState<number>(
    theme === "dark" ? 1 : 0
  );

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
          setTimeout(() => setTheme("light"), 200);
        }}
      >
        <Sun
          size={size}
          className={`${
            position === 0 ? "text-primary" : "text-muted-foreground"
          }`}
        />
      </div>
      <div
        className="py-[10px] px-[10px] z-[3] cursor-pointer"
        onClick={() => {
          setPosition(1);
          setTimeout(() => setTheme("dark"), 200);
        }}
      >
        <Moon
          size={size}
          className={`${
            position === 1 ? "text-primary" : "text-muted-foreground"
          }`}
        />
      </div>
    </Flex>
  );
};

export default ThemeToggle;
