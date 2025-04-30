import { cn } from "@/lib/utils";
import { IconButtonProps } from "@/types";
import { HTMLAttributes } from "react";

const IconButton: React.FC<IconButtonProps> = ({
  children,
  className,
  useDiv,
  variant = "default",
  ...rest
}) => {
  const baseStyles = "p-2 transition-all duration-200 hover:bg-primary/15";
  const variantStyles: {
    [Key in
      | "default"
      | "rounded"
      | "unstyled"]?: HTMLAttributes<unknown>["className"];
  } = {
    default: baseStyles,
    rounded: `${baseStyles} rounded-full`,
    unstyled: "",
  };
  return !useDiv ? (
    <button
      className={cn(`${variantStyles[variant]}`, "z-0", className)}
      {...rest}
    >
      {children}
    </button>
  ) : (
    <div className={cn(`${variantStyles[variant]}`, "z-0", className)}>
      {children}
    </div>
  );
};

export default IconButton;
