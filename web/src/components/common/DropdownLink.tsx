"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Flex from "./Flex";
import { cn } from "@/lib/utils";

import { TListPaths } from "@/types";
import { ChevronRight, Icon } from "lucide-react";
import useDisclosure from "@/hooks/useDisclosure";
import { match } from "path-to-regexp";
import { Path } from "path-to-regexp";

const DropdownLink = React.forwardRef<
  HTMLDivElement,
  {
    links: TListPaths;
    onHeightChange: (height: number, firstMountActive?: boolean) => void;
  }
>(({ links, onHeightChange }, ref) => {
  const pathname = usePathname();
  const router = useRouter();

  const { paths, parentPath, icon: Icon, name } = links;
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [height, setHeight] = React.useState(0);

  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const isActive = pathname.includes(parentPath);
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure({
    defaultState: isActive,
  });

  React.useEffect(() => {
    if (contentRef.current) {
      onHeightChange?.(
        isOpen
          ? (contentRef?.current?.scrollHeight ?? 0)
          : 0 - (contentRef?.current?.scrollHeight ?? 0)
      );
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, onHeightChange]);

  React.useEffect(() => {
    if (!pathname.includes(links.parentPath)) {
      onClose();
    }
    if (pathname.includes(links.parentPath)) {
      onOpen();
    }
  }, [pathname, links, onClose, onOpen]);

  React.useEffect(() => {
    if (!contentRef.current) return;

    const isAnyChildActive = paths.some(
      (path) =>
        pathname === path.path ||
        match(`${path.path}/:id` as Path, {
          decode: decodeURIComponent,
        })(pathname)
    );

    if (isAnyChildActive) {
      onOpen();
      onHeightChange(contentRef.current.scrollHeight, true);
    }
    // empty dependency array to run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref}>
      <Flex
        className={cn(
          "pl-8 w-full items-center pr-8 relative hover:bg-primary/5 cursor-pointer transition-all duration-200 justify-between",
          isActive || isOpen ? "bg-primary/5" : ""
        )}
        onMouseEnter={() => setIsHovered(() => true)}
        onMouseLeave={() => setIsHovered(() => false)}
        onClick={onToggle}
      >
        <div
          className={cn(
            "transition-all duration-200 w-2 absolute h-[85%] translate-y-[-50%] bg-primary shadow-[0px_0px_8px_0px] shadow-primary top-[50%] rounded-r-[8px] left-0",
            isActive
              ? "opacity-100"
              : isOpen
                ? "opacity-50"
                : isHovered
                  ? "opacity-50"
                  : "opacity-0"
          )}
        />
        <div className="flex gap-3 w-full items-center py-2">
          {Icon ? (
            <Icon
              size={20}
              className={cn(
                isActive ? "text-primary" : "text-muted-foreground"
              )}
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
        </div>
        <ChevronRight
          size={18}
          className={cn(
            isActive ? "text-primary" : "text-muted-foreground",
            isOpen ? "rotate-90" : "rotate-0",
            "transition-all duration-[300] ease-[cubic-bezier(.17,.67,.83,.67)]"
          )}
        />
      </Flex>
      <Flex
        ref={contentRef}
        className="overflow-hidden relative transition-[height] ease-[cubic-bezier(.17,.67,.83,.67)] duration-300"
        style={{
          height: `${height}px`,
          paddingLeft: "calc(var(--sidebar-padding-link) + calc(2rem + 2px))",
        }}
      >
        <ul
          className={cn(
            "flex flex-col gap-1 relative m-0 pl-[var(--sidebar-bullet-width)] list-none w-full pr-3"
          )}
        >
          <div
            className="absolute content-[''] w-[2px] top-0 left-0 bg-primary"
            style={{
              bottom:
                "calc(var(--sidebar-collapse-link-height) - 2px - var(--sidebar-bullet-width)/2)",
            }}
          />
          {paths.map((path, index) => {
            const isSubPathActive =
              match(`${path.path}/:id` as Path, {
                decode: decodeURIComponent,
              })(pathname) || pathname === path.path;

            return (
              <li
                key={index}
                className="flex items-center relative m-0 mt-2"
                onClick={() => router.push(path.path)}
              >
                <div
                  className={cn(
                    "rounded-full pl-[12px] h-[var(--sidebar-collapse-link-height)] text-[15px] w-full font-bold cursor-pointer inline-flex items-center transition-all duration-[300] ease-linear hover:bg-primary/5",
                    isSubPathActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground bg-transparent"
                  )}
                >
                  <div
                    className="border-primary"
                    style={{
                      content: '""',
                      position: "absolute",
                      left: 0,
                      width: "calc(var(--sidebar-bullet-width) / 1.2)",
                      height: "var(--sidebar-bullet-width)",
                      backgroundColor: "transparent",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: "7px",
                      borderWidth: "0 0 2px 2px",
                      borderStyle: "solid",
                      transform:
                        "translate(calc(var(--sidebar-bullet-width) * -1), calc(var(--sidebar-bullet-width) * -0.5))",
                    }}
                  />
                  {path.name}
                </div>
              </li>
            );
          })}
        </ul>
      </Flex>
    </div>
  );
});

DropdownLink.displayName = "DropdownLink";

export default DropdownLink;
