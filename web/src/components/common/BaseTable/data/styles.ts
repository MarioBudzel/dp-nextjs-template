import { Column, CoreRow } from "@tanstack/react-table";
import { CSSProperties } from "react";
import { TTableStyleProps } from "../types";

export const getTableHeaderStyles = ({ variant, dense }: TTableStyleProps) => {
  const baseClasses =
    "[&_th]:bg-primary text-md [&_th]:text-primary-foreground font-bold [&_th]:border-primary";
  const padding = dense
    ? "[&_th]:transition-[padding] [&_th]:duration-200 [&_th]:py-3 [&_th]:px-2"
    : "[&_th]:transition-[padding] [&_th]:duration-200 [&_th]:py-6 [&_th]:px-2";

  const stylesMap: Record<string, string> = {
    rounded: `
      ${baseClasses}
      [&_th]:${padding} [&_th]:border-y [&_th]:border-solid
      [&_th:first-child]:border-l [&_th:first-child]:rounded-l-xl
      [&_th:last-child]:border-r [&_th:last-child]:rounded-r-xl
    `,
    simple: `
      ${baseClasses} ${padding} [&_th]:border-y [&_th]:border-solid
    `,
  };

  return variant === "custom" ? stylesMap["simple"] : stylesMap[variant];
};

export const getTableRowStyles = ({ variant, dense }: TTableStyleProps) => {
  const baseClasses = "text-md font-bold transition-all duration-200";
  const padding = dense
    ? "[&_th]:transition-[padding] [&_th]:duration-200 [&_td]:py-3 [&_td]:px-2"
    : "[&_th]:transition-[padding] [&_th]:duration-200 [&_td]:py-6 [&_td]:px-2";

  const stylesMap: Record<string, string> = {
    rounded: `
      group
      ${baseClasses}
      ${padding} [&_td]:border-y [&_td]:border-solid [&_td]:border-primary/15
      [&_td:first-child]:border-l [&_td:first-child]:rounded-l-xl
      [&_td:last-child]:border-r [&_td:last-child]:rounded-r-xl
    `,
    simple: `
      ${baseClasses} ${padding} [&_td]:border-y [&_td]:border-solid last-child:[&_td]:border-0
    `,
  };

  return variant === "custom" ? stylesMap["simple"] : stylesMap[variant];
};

export const getCommonPinnedStyles = (
  column: Column<unknown>
): CSSProperties => {
  const isPinned = column.getIsPinned();

  return isPinned
    ? {
        backgroundColor: isPinned ? "hsl(var(--primary))" : undefined,
        boxShadow: isPinned ? "" : undefined,
        left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
        right:
          isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
        position: isPinned ? "sticky" : "relative",
        zIndex: isPinned ? 1 : 0,
        color: "hsl(var(--primary-foreground))",
      }
    : {};
};
