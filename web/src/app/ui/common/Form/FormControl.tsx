"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  title: string;
  isRequired?: boolean;
  formularPath: string;
  children: React.ReactNode;
  wrapperClassname?: HTMLAttributes<HTMLDivElement>["className"];
  labelClassname?: HTMLAttributes<HTMLLabelElement>["className"];
  errorClassname?: HTMLAttributes<HTMLParagraphElement>["className"];
};

const FormControl: React.FC<Props> = ({
  title,
  isRequired,
  formularPath,
  children,
  wrapperClassname,
  errorClassname,
  labelClassname,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn("flex flex-col gap-2", wrapperClassname)}>
      <label
        htmlFor={formularPath}
        className={cn("text-base font-bold px-2", labelClassname)}
      >
        {title}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>
      {children}
      <p className={cn("text-destructive text-sm min-h-8", errorClassname)}>
        {errors[formularPath]?.message as string}
      </p>
    </div>
  );
};

export default FormControl;
