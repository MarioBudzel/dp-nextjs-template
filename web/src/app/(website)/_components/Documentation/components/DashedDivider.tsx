import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const DashedDivider: React.FC<{
  className?: HTMLAttributes<HTMLDivElement>["className"];
}> = ({ className }) => {
  return (
    <div className={cn("border border-dashed border-primary/15", className)} />
  );
};

export default DashedDivider;
