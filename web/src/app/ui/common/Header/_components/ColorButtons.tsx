"use client";

import Flex from "@/components/common/Flex";
import useThemeContext from "@/hooks/useThemeContext";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useTheme } from "next-themes";

export const availableThemeColors = [
  {
    name: "Zinc",
    light: "bg-zinc-900",
    dark: "bg-zinc-700",
    shadow: "shadow-zinc-400",
  },
  {
    name: "Rose",
    light: "bg-rose-600",
    dark: "bg-rose-700",
    shadow: "shadow-rose-400",
  },
  {
    name: "Blue",
    light: "bg-blue-600",
    dark: "bg-blue-700",
    shadow: "shadow-blue-400",
  },
  {
    name: "Green",
    light: "bg-green-600",
    dark: "bg-green-500",
    shadow: "shadow-green-400",
  },
  {
    name: "Orange",
    light: "bg-orange-500",
    dark: "bg-orange-700",
    shadow: "shadow-orange-400",
  },
];

const ColorButtons: React.FC = () => {
  const { setThemeColor, themeColor } = useThemeContext();
  const { theme } = useTheme();
  return (
    <Flex className="flex-wrap shrink-0 w-full gap-3 justify-center">
      {availableThemeColors.map(({ dark, light, name, shadow }) => (
        <button
          key={name}
          className={cn(
            "border border-primary/25 flex gap-2 w-[100px] items-center px-2 py-1 shadow-sm rounded-[8px]",
            themeColor === name ? "bg-primary/40" : ""
          )}
          onClick={() => setThemeColor(name as TThemeColors)}
        >
          <div
            className={cn(
              "rounded-full flex items-center justify-center",
              "w-[20px]",
              "h-[20px]",
              shadow,
              theme === "light" ? light : dark
            )}
          >
            {themeColor === name ? <Check size={15} /> : null}
          </div>
          <div className="text-sm">{name}</div>
        </button>
      ))}
    </Flex>
  );
};

export default ColorButtons;
