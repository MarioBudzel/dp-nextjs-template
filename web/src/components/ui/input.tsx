import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  {
    leftAdornment?: React.ReactElement;
    rightAdornment?: React.ReactElement;
    divClassName?: React.ComponentProps<"div">["className"];
  } & React.ComponentProps<"input">
>(
  (
    { className, type, leftAdornment, rightAdornment, divClassName, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return !leftAdornment && !rightAdornment ? (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    ) : (
      <div
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "flex gap-2 items-center",
          isFocused ? "border-primary" : "",
          divClassName
        )}
      >
        {leftAdornment}
        <input
          type={type}
          className={cn(
            "grow bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          {...props}
        />
        {rightAdornment}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
