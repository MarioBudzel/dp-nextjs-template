"use client";
import IconButton from "@/components/common/IconButton";
import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import { Search, X, Check, Star, Heart } from "lucide-react";
import PropsWrapper from "../../components/PropsWrapper";
import { iconButtonProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const IconButtons: React.FC = () => {
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import IconButton from "@/components/common/IconButton";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">Default Icon Button</p>
          <p className="text-muted-foreground">
            A standard button with an icon.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <IconButton className="text-blue-500">
                <Search className="w-5 h-5" />
              </IconButton>
              <IconButton className="text-red-500">
                <Heart className="w-5 h-5" />
              </IconButton>
            </Flex>
            <CodeBlock language="tsx">{`import IconButton from "@/components/common/IconButton";
import { Search, Heart } from "lucide-react";

const Example = () => {
  return (
    <>
      <IconButton className="text-blue-500">
        <Search className="w-5 h-5" />
      </IconButton>
      <IconButton className="text-red-500">
        <Heart className="w-5 h-5" />
      </IconButton>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">Rounded Icon Button</p>
          <p className="text-muted-foreground">
            A circular button with an icon.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <IconButton variant="rounded" className="text-green-500">
                <X className="w-5 h-5" />
              </IconButton>
              <IconButton variant="rounded" className="text-yellow-500">
                <Star className="w-5 h-5" />
              </IconButton>
            </Flex>
            <CodeBlock language="tsx">{`import IconButton from "@/components/common/IconButton";
import { X, Star } from "lucide-react";

const Example = () => {
  return (
    <>
      <IconButton variant="rounded" className="text-green-500">
        <X className="w-5 h-5" />
      </IconButton>
      <IconButton variant="rounded" className="text-yellow-500">
        <Star className="w-5 h-5" />
      </IconButton>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">Unstyled Icon Button</p>
          <p className="text-muted-foreground">
            An icon button without default styles.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <IconButton variant="unstyled" className="text-purple-500">
                <Check className="w-5 h-5" />
              </IconButton>
              <IconButton variant="unstyled" className="text-orange-500">
                <Heart className="w-5 h-5" />
              </IconButton>
            </Flex>
            <CodeBlock language="tsx">{`import IconButton from "@/components/common/IconButton";
import { Check, Heart } from "lucide-react";

const Example = () => {
  return (
    <>
      <IconButton variant="unstyled" className="text-purple-500">
        <Check className="w-5 h-5" />
      </IconButton>
      <IconButton variant="unstyled" className="text-orange-500">
        <Heart className="w-5 h-5" />
      </IconButton>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>
        <PropsWrapper props={iconButtonProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default IconButtons;
