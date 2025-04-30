"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  icon?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] =
      React.useState<boolean>(false);
    return (
      <div className="relative">
        <input
          type={type === "password" && isPasswordVisible ? "text" : type}
          ref={ref}
          className={cn(
            "px-3 py-1 text-base shadow-sm rounded-xl bg-secondary w-full h-12 border-primary focus:border-primary/80 transition-colors duration-200",
            className
          )}
          {...props}
        />
        {(type === "password" || icon) && (
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setIsPasswordVisible(!isPasswordVisible);
            }}
            className="cursor-pointer absolute end-2.5 h-full px-2"
          >
            {icon && icon}
            {type === "password" && !icon && isPasswordVisible && <EyeOff />}
            {type === "password" && !icon && !isPasswordVisible && <Eye />}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
