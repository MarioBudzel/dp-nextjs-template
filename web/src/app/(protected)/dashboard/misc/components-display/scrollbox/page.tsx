"use client";
import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import HorizontalScrollBox from "@/components/ui/HorizontalScrollBox";
import PropsWrapper from "../../components/PropsWrapper";
import { horizontalScrollBoxProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const ScrollBox: React.FC = () => {
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import HorizontalScrollBox from "@/components/ui/HorizontalScrollBox";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">
            Horizontal Scroll Box
          </p>
          <p className="text-muted-foreground">
            Fade out component for horizontal scrolling.
          </p>

          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4 flex-col">
              <Flex className="px-2">
                <HorizontalScrollBox fadeColor="background">
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                </HorizontalScrollBox>
              </Flex>
              <Flex className="bg-primary px-2 text-primary">
                <HorizontalScrollBox>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                </HorizontalScrollBox>
              </Flex>
              <Flex className="bg-card px-2">
                <HorizontalScrollBox fadeColor="hsl(var(--card))">
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                  <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                </HorizontalScrollBox>
              </Flex>
            </Flex>
            <CodeBlock language="tsx">{`"use client";
import Flex from "@/components/common/Flex";
import HorizontalScrollBox from "@/components/ui/HorizontalScrollBox";

const Example = () => {
  return (
    <>
        <Flex className="px-2">
            // Custom Color
            <HorizontalScrollBox fadeColor="background">
                <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                ...
            </HorizontalScrollBox>
        </Flex>
        <Flex className="bg-primary px-2 text-primary">
            // Inherited color
            <HorizontalScrollBox>
                <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                ...
            </HorizontalScrollBox>
        </Flex>
        <Flex className="bg-card px-2">
            // Tailwind CSS variable
            <HorizontalScrollBox fadeColor="hsl(var(--card))">
                <div className="w-[250px] bg-red-300 h-[50px] shrink-0"></div>
                ...
            </HorizontalScrollBox>
        </Flex>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>
        <PropsWrapper props={horizontalScrollBoxProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default ScrollBox;
