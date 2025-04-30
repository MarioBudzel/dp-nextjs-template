import { cn } from "@/lib/utils";
import { FlexProps } from "@/types";
import React from "react";

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn("flex", className)} {...rest}>
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";

export default Flex;
