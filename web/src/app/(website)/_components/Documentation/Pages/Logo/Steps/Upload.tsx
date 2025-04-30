import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import StyledText from "../../../components/StyledText";
import DocsTitle from "../../../components/DocsTitle";

const Upload: React.FC = () => {
  return (
    <div>
      <DocsTitle>Logo</DocsTitle>
      <DocsBody useDiv classname="mb-2">
        If you want to add your custom logo, insert it into{" "}
        <StyledText>./public</StyledText> directory inside{" "}
        <StyledText>./web</StyledText> directory.
      </DocsBody>
      <DocsBody useDiv classname="mb-2">
        Next import your logo inside the component you want to use it in:
      </DocsBody>
      <CodeBlock
        language="javascript"
        rounded
      >{`import logo from "@/../public/logo.svg";`}</CodeBlock>
      <DocsBody useDiv classname="my-2">
        Lastly, use the logo:
      </DocsBody>
      <CodeBlock
        language="javascript"
        rounded
      >{`import logo from "@/../public/logo.svg";
      
<Image
  alt="logo"
  src={logo}
  className="w-full rounded-md drop-shadow-xl"
/>`}</CodeBlock>
    </div>
  );
};

export default Upload;
