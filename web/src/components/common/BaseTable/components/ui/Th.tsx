"use client";

import Flex from "@/components/common/Flex";
import IconButton from "@/components/common/IconButton";
import useDisclosure from "@/hooks/useDisclosure";
import { flexRender, Header } from "@tanstack/react-table";
import { ChevronUp, Pin, PinOff } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { DetailedHTMLProps, ThHTMLAttributes } from "react";

type Props = {
  header: Header<unknown, unknown>;
  enablePinning?: boolean;
} & DetailedHTMLProps<
  ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

const Th: React.FC<Props> = ({ header, enablePinning, ...rest }) => {
  const {
    isOpen: isHovered,
    onOpen,
    onClose,
  } = useDisclosure({
    defaultState: false,
  });

  const {
    getContext,
    column: {
      getIsSorted,
      columnDef: { header: columnHeader },
    },
  } = header;

  const sortIcons = {
    asc: <ChevronUp size={16} className="text-muted-foreground" />,
    desc: <ChevronDown size={16} className="text-muted-foreground" />,
  };

  const handlePinning = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (!header.column.getIsPinned()) return header.column.pin("left");
    if (header.column.getIsPinned() === "left")
      return header.column.pin("right");

    //@ts-expect-error Yes it is :)
    header.column.pin(undefined);
  };
  return (
    <th {...rest}>
      <Flex
        className="justify-between"
        onMouseOver={onOpen}
        onMouseOut={onClose}
      >
        <Flex className="items-center gap-2 grow cursor-pointer">
          {flexRender(columnHeader, getContext())}
          <div className="min-w-[16px]">
            {sortIcons[getIsSorted() as "asc" | "desc"] ?? null}
          </div>
        </Flex>
        {enablePinning ? (
          <IconButton variant="rounded" onClick={handlePinning}>
            {header.column.getIsPinned() !== "right" ? (
              <Pin
                size={13}
                className={`${!header.column.getIsPinned() ? "text-muted-foreground" : "text-muted-foreground"}`}
                style={{
                  transition: "transform 300ms linear, opacity 200ms linear",
                  opacity: isHovered ? 1 : 0,
                  transform: !header.column.getIsPinned()
                    ? "rotate(0)"
                    : "rotate(45deg)",
                }}
              />
            ) : (
              <PinOff
                size={13}
                className={`${!header.column.getIsPinned() ? "text-muted-foreground" : "text-muted-foreground"}`}
                style={{
                  transition: "transform 300ms linear, opacity 200ms linear",
                  opacity: isHovered ? 1 : 0,
                  transform: !header.column.getIsPinned()
                    ? "rotate(0)"
                    : "rotate(-45deg)",
                }}
              />
            )}
          </IconButton>
        ) : null}
      </Flex>
    </th>
  );
};

export default Th;
