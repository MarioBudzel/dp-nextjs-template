"use client";
import useDisclosure from "@/hooks/useDisclosure";
import { TSidebarLink } from "@/types";
import Flex from "../common/Flex";
import { cn } from "@/lib/utils";
import React from "react";
import NavLink from "../common/NavLink";
import { DropdownLink } from "../common";

type Props = { group: TSidebarLink };

const NavigationGroupHandler: React.FC<Props> = ({ group }) => {
  const { paths, groupTitle } = group;

  const [height, setHeight] = React.useState(0);
  const [childHeight, setChildHeight] = React.useState(0);
  const [childFirstMount, setChildFirstMount] = React.useState(false);

  const { isOpen, onToggle, onOpen } = useDisclosure({ defaultState: true });
  const contentRef = React.useRef<HTMLDivElement>(null);

  const updateHeight = React.useCallback(
    (childHeight: number, firstMountActive?: boolean) => {
      if (firstMountActive) {
        setChildHeight(childHeight);
        setChildFirstMount(true);
        onOpen();
        return;
      }
      setHeight((prev) => prev + (childHeight ?? 0));
    },
    [onOpen]
  );

  React.useEffect(() => {
    if (contentRef.current) {
      if (childFirstMount && childHeight) {
        setHeight(contentRef.current.scrollHeight + childHeight);
        return;
      }
    }
  }, [childFirstMount, childHeight]);

  React.useEffect(() => {
    if (contentRef.current)
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <Flex className="flex-col gap-2">
      <p
        className={cn(
          "relative w-fit flex uppercase text-muted-foreground font-bold ml-[-10px] cursor-pointer scale-100 origin-bottom-left transition-all ease-[cubic-bezier(.17,.67,.83,.67)] text-[12px]",
          "hover:ml-0 hover:text-primary hover:scale-[1.05]",
          "before:content-['>'] before:flex before:items-center before:h-full before:mr-[5px] before:ml-[5px] before:mt-auto before:mb-auto text-[11px] before:origin-center before:transition-all before:ease-[cubic-bezier(.17,.67,.83,.67)] before:opacity-0",
          "hover:before:opacity-100",
          isOpen ? "hover:before:rotate-90" : "hover:before:rotate-0",
          isOpen ? "before:rotate-90" : "before:rotate-0"
        )}
        onClick={onToggle}
      >
        {groupTitle}
      </p>
      <Flex
        ref={contentRef}
        className="flex-col gap-2 overflow-hidden transition-[height] ease-[cubic-bezier(.17,.67,.83,.67)] duration-300"
        style={{ height: `${height}px` }}
      >
        {paths.map((path, index) =>
          path.type === "default" ? (
            <NavLink path={path} key={index} />
          ) : (
            <DropdownLink
              key={index}
              links={path}
              onHeightChange={updateHeight}
            />
          )
        )}
      </Flex>
    </Flex>
  );
};

export default NavigationGroupHandler;
