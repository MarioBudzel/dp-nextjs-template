"use client";

import Helper from "@/components/common/Helper";
import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import {
  BadgeInfo,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Star,
} from "lucide-react";
import PropsWrapper from "../../components/PropsWrapper";
import { helperProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const HelperDocs: React.FC = () => {
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import Helper from "@/components/common/Helper";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">Helper Variants</p>
          <p className="text-muted-foreground">
            Different color schemes for the Helper component.
          </p>
          <Flex className="border border-muted flex-col rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4 items-center mt-3">
            <Helper colorScheme="primary">Primary Helper</Helper>
            <Helper colorScheme="secondary">Secondary Helper</Helper>
            <Helper colorScheme="info">Info Helper</Helper>
            <Helper colorScheme="success">Success Helper</Helper>
            <Helper colorScheme="warning">Warning Helper</Helper>
            <Helper colorScheme="error">Error Helper</Helper>
          </Flex>
          <CodeBlock language="tsx">
            {`import Helper from "@/components/common/Helper";

<Helper colorScheme="primary">Primary Helper</Helper>
<Helper colorScheme="secondary">Secondary Helper</Helper>
<Helper colorScheme="info">Info Helper</Helper>
<Helper colorScheme="success">Success Helper</Helper>
<Helper colorScheme="warning">Warning Helper</Helper>
<Helper colorScheme="error">Error Helper</Helper>`}
          </CodeBlock>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">Custom Icons</p>
          <p className="text-muted-foreground">
            Use custom icons instead of the default.
          </p>
          <Flex className="border border-muted flex-col rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4 items-center mt-3">
            <Helper colorScheme="primary" icon={<Star size={20} />}>
              Custom Star Icon
            </Helper>
            <Helper colorScheme="success" icon={<CheckCircle size={20} />}>
              Success Icon
            </Helper>
            <Helper colorScheme="warning" icon={<AlertTriangle size={20} />}>
              Warning Icon
            </Helper>
            <Helper colorScheme="error" icon={<XCircle size={20} />}>
              Error Icon
            </Helper>
          </Flex>
          <CodeBlock language="tsx">
            {`import Helper from "@/components/common/Helper";
import { Star, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

<Helper colorScheme="primary" icon={<Star size={20} />}>Custom Star Icon</Helper>
<Helper colorScheme="success" icon={<CheckCircle size={20} />}>Success Icon</Helper>
<Helper colorScheme="warning" icon={<AlertTriangle size={20} />}>Warning Icon</Helper>
<Helper colorScheme="error" icon={<XCircle size={20} />}>Error Icon</Helper>`}
          </CodeBlock>
        </div>
        <PropsWrapper props={helperProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default HelperDocs;
