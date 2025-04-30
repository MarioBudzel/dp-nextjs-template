import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import StyledText from "../../../components/StyledText";
import DocsTitle from "../../../components/DocsTitle";

const Favicon: React.FC = () => {
  return (
    <div>
      <DocsTitle>Favicon</DocsTitle>
      <DocsBody useDiv classname="mb-2">
        To update the favicon, replace <StyledText>favicon.ico</StyledText> file
        inside <StyledText>./web/src/app</StyledText> directory. After updating
        the file, your favicon will be applied automatically.
      </DocsBody>
    </div>
  );
};

export default Favicon;
