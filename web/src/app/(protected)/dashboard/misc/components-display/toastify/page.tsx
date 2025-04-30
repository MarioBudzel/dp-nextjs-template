"use client";
import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import Toastify from "@/components/common/Toastify";
import PropsWrapper from "../../components/PropsWrapper";
import { toastifyProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const ToastifyComponent: React.FC = () => {
  const handleSuccess = () => {
    Toastify.success({ label: "This is a succes toast!" });
  };
  const handleError = () => {
    Toastify.error({ label: "This is an error toast!" });
  };

  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import Toastify from "@/components/common/Toastify";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">Toastify</p>
          <p className="text-muted-foreground">
            Quickly access react-toastify. Easily expandable component.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <button
                onClick={handleSuccess}
                className="px-5 rounded-full bg-green-200/40 border border-green-400 font-bold uppercase text-sm text-green-400"
              >
                Success
              </button>
              <button
                onClick={handleError}
                className="px-5 rounded-full bg-destructive/40 border border-destructive font-bold uppercase text-sm text-destructive"
              >
                Error
              </button>
            </Flex>
            <CodeBlock language="tsx">{`"use client";
import Flex from "@/components/common/Flex";
import Toastify from "@/components/common/Toastify";

const Example = () => {
  const handleSuccess = () => {
    Toastify.success({ label: "This is a succes toast!" });
  };
  const handleError = () => {
    Toastify.error({ label: "This is an error toast!" });
  };

  return (
    <>
      <button
        onClick={handleSuccess}
        className="px-5 rounded-full bg-green-200/40 border border-green-400 font-bold uppercase text-sm text-green-400"
      >
        Success
      </button>
      <button
        onClick={handleError}
        className="px-5 rounded-full bg-destructive/40 border border-destructive font-bold uppercase text-sm text-destructive"
      >
        Error
      </button>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>
        <PropsWrapper props={toastifyProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default ToastifyComponent;
