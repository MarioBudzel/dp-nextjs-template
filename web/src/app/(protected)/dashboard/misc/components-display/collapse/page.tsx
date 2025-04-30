"use client";

import CodeBlock from "@/components/common/CodeBlock";
import Collapse from "@/components/common/Collapse";
import Flex from "@/components/common/Flex";

import useDisclosure from "@/hooks/useDisclosure";
import { ChevronRight } from "lucide-react";
import PropsWrapper from "../../components/PropsWrapper";
import { collapseProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const CollapseShowcase: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultState: false });
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import Collapse from "@/components/common/Collapse";`}</CodeBlock>
        </div>
        <div className="w-full max-w-screen-md">
          <p className="text-xl text-primary font-bold">Collapse</p>
          <p className="text-muted-foreground">
            Collapse single child component
          </p>
          <Flex className="border border-muted rounded-t-lg p-4 shadow-md w-full justify-center mt-3">
            <div className="rounded-lg bg-card shadow-md min-w-[250px] overflow-hidden">
              <Flex className="shadow-md justify-between w-full items-center px-2 py-4">
                <p className="text-md font-bold text-card-foreground">
                  Collapse
                </p>
                <p
                  className="flex items-center text-[12px] text-primary gap-1 cursor-pointer hover:underline"
                  onClick={onToggle}
                >
                  More
                  <ChevronRight
                    size={12}
                    className="transition-all duration-200"
                    style={{
                      transform: isOpen ? "rotate(90deg)" : "rotate(0)",
                    }}
                  />
                </p>
              </Flex>
              <Collapse open={isOpen}>
                <div className="px-3 py-3 bg-[rgb(47,47,47)] max-w-[250px] text-justify">
                  <p className="text-[12px] text-white">
                    Aliqua excepteur aute sit irure commodo do ullamco irure
                    incididunt ullamco eu est ad. Mollit et Lorem aute pariatur
                    proident aute nostrud Lorem sint minim. Commodo deserunt
                    esse non ex. Laborum amet nulla Lorem proident officia nisi
                    ea ullamco consequat sint pariatur labore. Amet duis laboris
                    incididunt est mollit est veniam veniam culpa do adipisicing
                    sunt. Veniam veniam aute commodo adipisicing ex ea.
                    Consequat dolor sint aute eu Lorem incididunt aliquip veniam
                    veniam nulla commodo cupidatat fugiat laboris.
                  </p>
                </div>
              </Collapse>
            </div>
          </Flex>
          <CodeBlock language="tsx">{`"use client";

import CodeBlock from "@/components/common/CodeBlock";
import Collapse from "@/components/common/Collapse";
import Flex from "@/components/common/Flex";

import useDisclosure from "@/hooks/useDisclosure";
import { ChevronRight } from "lucide-react";

const Example = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultState: false });
  return (
    <>
      <Flex className="border border-muted rounded-t-lg p-4 shadow-md w-full justify-center mt-3">
        <div className="rounded-lg bg-card shadow-md min-w-[250px] overflow-hidden">
            <Flex className="shadow-md justify-between w-full items-center px-2 py-4">
                <p className="text-md font-bold text-card-foreground">Collapse</p>
                <p
                  className="flex items-center text-[12px] text-primary gap-1 cursor-pointer hover:underline"
                  onClick={onToggle}
                >
                    More
                    <ChevronRight size={12} />
                </p>
            </Flex>
            <Collapse open={isOpen}>
                <div className="px-3 py-3 bg-[rgb(47,47,47)] max-w-[250px] text-justify">
                    <p className="text-[12px] text-white">
                        ...
                    </p>
                </div>
            </Collapse>
        </div>
      </Flex>
    </>
  );
};

export default Example;`}</CodeBlock>
        </div>
        <PropsWrapper props={collapseProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default CollapseShowcase;
