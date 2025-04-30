"use client";

import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import AnimatedIconButton from "@/components/ui/AnimatedIconButton";
import { ArrowUpRight, RefreshCw, Zap } from "lucide-react";
import PropsWrapper from "../../components/PropsWrapper";
import { animatedIconButtonProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const AnimatedIconButtons: React.FC = () => {
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import AnimatedIconButton from "@/components/ui/AnimatedIconButton";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">
            Bouncing Animated Icon Button
          </p>
          <p className="text-muted-foreground">
            An icon button with a bouncing animation.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <AnimatedIconButton animationType="bounce" speed="slow">
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedIconButton>
              <AnimatedIconButton animationType="bounce" speed="fast">
                <Zap className="w-5 h-5" />
              </AnimatedIconButton>
            </Flex>
            <CodeBlock language="tsx">{`import AnimatedIconButton from "@/components/common/AnimatedIconButton";
import { ArrowUpRight, Zap } from "lucide-react";

const Example = () => {
  return (
    <>
      <AnimatedIconButton animationType="bounce" speed="slow">
        <ArrowUpRight className="w-5 h-5" />
      </AnimatedIconButton>
      <AnimatedIconButton animationType="bounce" speed="fast">
        <Zap className="w-5 h-5" />
      </AnimatedIconButton>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">
            Rotating Animated Icon Button
          </p>
          <p className="text-muted-foreground">
            An icon button with a rotating animation.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <AnimatedIconButton animationType="rotate" speed="medium">
                <RefreshCw className="w-5 h-5" />
              </AnimatedIconButton>
              <AnimatedIconButton animationType="rotate" speed="fast">
                <Zap className="w-5 h-5" />
              </AnimatedIconButton>
            </Flex>
            <CodeBlock language="tsx">{`import AnimatedIconButton from "@/components/common/AnimatedIconButton";
import { RefreshCw, Zap } from "lucide-react";

const Example = () => {
  return (
    <>
      <AnimatedIconButton animationType="rotate" speed="medium">
        <RefreshCw className="w-5 h-5" />
      </AnimatedIconButton>
      <AnimatedIconButton animationType="rotate" speed="fast">
        <Zap className="w-5 h-5" />
      </AnimatedIconButton>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>
        <PropsWrapper props={animatedIconButtonProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default AnimatedIconButtons;
