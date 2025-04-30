"use client";
import ColorButtons from "@/app/ui/common/Header/_components/ColorButtons";
import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import ThemeToggle from "@/components/common/ThemeToggle";
import PropsWrapper from "../../components/PropsWrapper";
import { themeToggleProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const ThemeToggles: React.FC = () => {
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import ThemeToggle from "@/components/common/ThemeToggle";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">Theme Toggle</p>
          <p className="text-muted-foreground">Used for switching the theme.</p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center">
              <ThemeToggle />
            </Flex>
            <CodeBlock language="tsx">
              {`import Flex from "@/components/common/Flex";
import ThemeToggle from "@/components/common/ThemeToggle";

const ThemeToggles: React.FC = () => {
    return (
        <Flex className="p-5 flex-col items-center">
            <div className="max-w-screen-xl w-[100%]">
                <Flex className="flex-col w-[100%] gap-0">
                    <ThemeToggle />
                </Flex>
            </div>
        </Flex>  
    );
};

export default ThemeToggles;`}
            </CodeBlock>
          </Flex>
        </div>
        <PropsWrapper props={themeToggleProps} />
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import ColorButtons from "@/app/ui/common/Header/_components/ColorButtons";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">Color Switcher</p>
          <p className="text-muted-foreground">
            Used for switching the primary color.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center">
              <Flex className="flex-col items-center content-center gap-8">
                <ColorButtons />
              </Flex>
            </Flex>
            <CodeBlock language="tsx">
              {`import Flex from "@/components/common/Flex";
import ColorButtons from "@/app/ui/common/Header/_components/ColorButtons";

const ThemeToggles: React.FC = () => {
    return (
        <Flex className="p-5 flex-col items-center">
            <div className="max-w-screen-xl w-[100%]">
                <Flex className="flex-col items-center content-center gap-8">
                    <ColorButtons />
                </Flex>
            </div>
        </Flex>  
    );
};

export default ThemeToggles;`}
            </CodeBlock>
          </Flex>
        </div>
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default ThemeToggles;
