import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const NewFont: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Usage</DocsSubtitle>
      <DocsBody useDiv classname="mb-2">
        To use the font navigate to <StyledText>layout.tsx</StyledText> and
        update this line:
      </DocsBody>
      <CodeBlock language="html" rounded>
        {`# inside ./web/src/app/layout.tsx

<body className={\`\${roboto.className}\`}>
`}
      </CodeBlock>
    </div>
  );
};

export default NewFont;
