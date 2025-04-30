"use client";

import CodeBlock from "@/components/common/CodeBlock";

import Flex from "@/components/common/Flex";
import Error from "@/components/ui/Error";
import Maintenance from "@/components/ui/Maintenance";
import NoPermission from "@/components/ui/NoPermission";
import NotFound from "@/components/ui/NotFound";

const Illustrations: React.FC = () => {
  return (
    <Flex className="p-5 flex-col items-center gap-10">
      <div className="w-full max-w-screen-md">
        <p className="text-xl text-primary font-bold">Illustrations</p>
        <p className="text-muted-foreground">
          Illustrations are provided by:{" "}
          <a
            href="https://iconscout.com/contributors/iconscout"
            className="underline text-sm"
          >
            IconScout Store
          </a>{" "}
          <span className="text-muted-foreground">on</span>{" "}
          <a href="https://iconscout.com" className="underline text-sm">
            IconScout
          </a>{" "}
        </p>
      </div>
      <div className="w-full max-w-screen-md">
        <p className="text-xl text-primary font-bold">Not Found</p>
        <Flex className="border border-muted rounded-t-lg p-4 shadow-md w-full justify-center mt-3">
          <NotFound />
        </Flex>
        <CodeBlock language="tsx">{`<NotFound />`}</CodeBlock>
      </div>
      <div className="w-full max-w-screen-md">
        <p className="text-xl text-primary font-bold">No Permission</p>
        <Flex className="border border-muted rounded-t-lg p-4 shadow-md w-full justify-center mt-3">
          <NoPermission />
        </Flex>
        <CodeBlock language="tsx">{`<NoPermission />`}</CodeBlock>
      </div>
      <div className="w-full max-w-screen-md">
        <p className="text-xl text-primary font-bold">Error</p>
        <Flex className="border border-muted rounded-t-lg p-4 shadow-md w-full justify-center mt-3">
          <Error />
        </Flex>
        <CodeBlock language="tsx">{`<Error />`}</CodeBlock>
      </div>
      <div className="w-full max-w-screen-md">
        <p className="text-xl text-primary font-bold">Error</p>
        <Flex className="border border-muted rounded-t-lg p-4 shadow-md w-full justify-center mt-3">
          <Maintenance />
        </Flex>
        <CodeBlock language="tsx">{`<Maintenance />`}</CodeBlock>
      </div>
    </Flex>
  );
};

export default Illustrations;
