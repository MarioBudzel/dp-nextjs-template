"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Flex from "@/components/common/Flex";

import useDisclosure from "@/hooks/useDisclosure";
import Collapse from "@/components/common/Collapse";

export type PropHandlerType = {
  propName: string;
  propDescription: string;
  propType: string;
  propDefault?: string;
};

const PropHandler: React.FC<PropHandlerType> = ({
  propName,
  propDescription,
  propType,
  propDefault,
}) => {
  const { isOpen, onToggle } = useDisclosure({ defaultState: false });

  return (
    <div className="w-full border-b border-primary py-2">
      <Flex className="w-full justify-between items-center">
        <p className="text-primary underline">{propName}</p>
        <button onClick={onToggle}>
          <ChevronDown
            size={16}
            className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </Flex>

      <Collapse open={isOpen}>
        <div className="w-full p-2">
          <p className="mb-2">{propDescription}</p>

          <Flex className="gap-2 items-end w-full">
            <p className="text-muted-foreground">Type:</p>
            <div className="whitespace-pre-wrap p-2 rounded-md bg-primary/20 border border-primary text-sm">
              {propType}
            </div>
          </Flex>

          {propDefault && (
            <Flex className="gap-2 items-end mt-2">
              <p className="text-muted-foreground">Default:</p>
              <div className="p-2 rounded-md bg-primary/20 border border-primary text-sm">
                {propDefault}
              </div>
            </Flex>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default PropHandler;
