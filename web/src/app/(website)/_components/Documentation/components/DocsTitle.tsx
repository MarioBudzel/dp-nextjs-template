import { cn } from "@/lib/utils";
import react, { HTMLAttributes } from "react";

type Props = {
  children: string;
  classname?: HTMLAttributes<HTMLParagraphElement>["className"];
  useDiv?: boolean;
};

const DocsTitle: React.FC<Props> = ({ classname, useDiv, children }) => {
  return !useDiv ? (
    <p className={cn("my-3 text-2xl font-bold", classname)}>{children}</p>
  ) : (
    <div className={cn("my-3 text-2xl font-bold", classname)}>{children}</div>
  );
};

export default DocsTitle;
