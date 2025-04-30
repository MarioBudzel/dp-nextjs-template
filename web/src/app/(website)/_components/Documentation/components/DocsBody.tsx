import { cn } from "@/lib/utils";
import React from "react";
import react, { HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  classname?: HTMLAttributes<HTMLParagraphElement>["className"];
  useDiv?: boolean;
};

const DocsBody: React.FC<Props> = ({ classname, useDiv, children }) => {
  return !useDiv ? (
    <p className={cn("my-3 text-sm", classname)}>{children}</p>
  ) : (
    <div className={cn("my-3 text-sm", classname)}>{children}</div>
  );
};

export default DocsBody;
