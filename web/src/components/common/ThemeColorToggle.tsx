"use client";

import useThemeContext from "@/hooks/useThemeContext";
import { useTheme } from "next-themes";
import { Select, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";
import { SelectContent } from "@radix-ui/react-select";

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

const ThemeColorToggle: React.FC = () => {
  const { themeColor, setThemeColor } = useThemeContext();
  const { theme } = useTheme();

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => {
      return (
        <SelectItem key={name} value={name}>
          <div className="flex items-center space-x-3">
            <div
              className={cn(
                "rounded-full",
                "w-[20px]",
                "h-[20px]",
                theme === "light" ? light : dark
              )}
            />
            <div className="text-sm">{name}</div>
          </div>
        </SelectItem>
      );
    });
  };

  return (
    <Select
      defaultValue={themeColor}
      onValueChange={(value) => setThemeColor(value as TThemeColors)}
    >
      <SelectTrigger className="w-[180px] ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="Select color" />
      </SelectTrigger>
      <SelectContent className="border border-muted bg-card z-10">
        {createSelectItems()}
      </SelectContent>
    </Select>
  );
};

export default ThemeColorToggle;
