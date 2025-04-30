import Flex from "@/components/common/Flex";
import Image from "next/image";

import docsImage from "@/../public/nextjs_docs.webp";
import DashedDivider from "../../components/DashedDivider";
import DocsTitle from "../../components/DocsTitle";
import DocsBody from "../../components/DocsBody";

const Introduction: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col">
      <Image
        alt="template-display"
        src={docsImage}
        className="w-full rounded-md drop-shadow-xl"
      />
      <DashedDivider />
      <div>
        <DocsTitle>Next.js Template</DocsTitle>
        <DocsBody useDiv>
          <ul className="list-disc px-5">
            <li className="my-1">Built with shadcn and Next.js</li>
            <li className="my-1">
              Includes fully <b>customizable theme</b>
            </li>
            <li className="my-1">
              Comes with pre-prepared components for easier development
            </li>
          </ul>
        </DocsBody>
      </div>

      <DashedDivider />
      <div>
        <DocsTitle>📘 Documentation</DocsTitle>
        <DocsBody>
          Alongside our comprehensive in-app documentation, you can explore the
          full power of our stack by diving into the official{" "}
          <a
            className="text-primary underline cursor-pointer"
            rel="noreferrer"
            target="_blank"
            href="https://ui.shadcn.com/"
          >
            shandcn
          </a>{" "}
          and{" "}
          <a
            className="text-primary underline cursor-pointer"
            rel="noreferrer"
            target="_blank"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{" "}
          documentation for even more tips, best practices, and advanced
          features.
        </DocsBody>
      </div>
      <DashedDivider />
      <div>
        <DocsTitle>🛠️ Requirements</DocsTitle>
        <DocsBody useDiv>
          <ul className="list-disc px-5">
            <li className="my-1">
              <a
                className="text-primary underline cursor-pointer"
                rel="noreferrer"
                target="_blank"
                href="https://nodejs.org/en"
              >
                Node.js
              </a>{" "}
              - 18+ or 20+
            </li>
            <li className="my-1">
              NPM / PNPM - PNPM needs migration (recommended NPM)
            </li>
            <li className="my-1">Docker + Docker Compose (Linux)</li>
            <li className="my-1">Docker (Windows)</li>
          </ul>
        </DocsBody>
      </div>
    </Flex>
  );
};

export default Introduction;
