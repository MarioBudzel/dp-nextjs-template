import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const NewFont: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Add new font</DocsSubtitle>
      <DocsBody useDiv classname="mb-2">
        To add new font navigate to <StyledText>fonts.ts</StyledText> and import
        the font:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`import { Roboto } from "next/font/google";`}
      </CodeBlock>
      <DocsBody useDiv classname="my-2">
        Next define the font object:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`export const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700", "900"],
});`}
      </CodeBlock>
    </div>
  );
};

export default NewFont;
