"use client";

import { BadgeInfo } from "lucide-react";
import clsx from "clsx";
import React from "react";

type THelperProps = {
  children: React.ReactNode;
  colorScheme?:
    | "secondary"
    | "info"
    | "primary"
    | "success"
    | "warning"
    | "error";
  icon?: React.ReactElement;
  iconSize?: number;
  className?: string;
};

const colorClasses: Record<string, string> = {
  secondary: "bg-secondary text-secondary-foreground",
  info: "bg-teal-200 text-teal-800",
  primary: "bg-primary text-primary-foreground",
  success: "bg-green-200 text-green-800",
  warning: "bg-yellow-200 text-yellow-800",
  error: "bg-destructive text-destructive-foreground",
};

const Helper: React.FC<THelperProps> = ({
  colorScheme = "primary",
  icon,
  children,
  iconSize = 20,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center rounded-md w-full py-2 px-3 gap-2",
        colorClasses[colorScheme],
        className
      )}
    >
      {icon ? icon : <BadgeInfo size={iconSize} className="text-current" />}
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
};

export default Helper;
