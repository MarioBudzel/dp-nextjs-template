import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";

const Clone: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>2. Clone</DocsSubtitle>
      <DocsBody useDiv classname="mb-2">
        Clone the project using <b>GIT</b> or{" "}
        <a
          className="text-primary underline cursor-pointer"
          target="_blank"
          href="https://mui.com/material-ui/getting-started/"
          rel="noreferrer"
        >
          download
        </a>{" "}
        it from github.com and extract the files to your designated location.
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {"git clone http:// "}
      </CodeBlock>
    </div>
  );
};

export default Clone;
