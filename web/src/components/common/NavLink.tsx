"use client";
import { cn } from "@/lib/utils";
import Flex from "./Flex";
import React from "react";
import { TSidebarPaths } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { match, Path } from "path-to-regexp";

type Props = {
  path: TSidebarPaths;
};

const NavLink: React.FC<Props> = ({ path }) => {
  const pathname = usePathname();
  const { icon: Icon, name, adminPath, path: navigation } = path;
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const isActive = match(navigation as Path, { decode: decodeURIComponent })(
    pathname
  );
  return (
    <Flex
      className={cn(
        "pl-8 pr-24 relative hover:bg-primary/5 cursor-pointer transition-all duration-200",
        isActive ? "bg-primary/5" : ""
      )}
      onMouseEnter={() => setIsHovered(() => true)}
      onMouseLeave={() => setIsHovered(() => false)}
    >
      <div
        className={cn(
          "transition-all duration-200 w-2 absolute h-[85%] translate-y-[-50%] bg-primary shadow-[0px_0px_8px_0px] shadow-primary top-[50%] rounded-r-[8px] left-0",
          isActive ? "opacity-100" : isHovered ? "opacity-50" : "opacity-0"
        )}
      />
      <Link className="flex gap-3 w-full items-center py-2" href={navigation!}>
        {Icon ? (
          <Icon
            size={20}
            className={cn(isActive ? "text-primary" : "text-muted-foreground")}
          />
        ) : null}
        <p
          className={cn(
            "text-[16px] font-bold",
            isActive ? "text-primary" : "text-muted-foreground"
          )}
        >
          {name}
        </p>
      </Link>
    </Flex>
  );
};

export default NavLink;
