import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const Backend: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Backend</DocsSubtitle>
      <DocsBody classname="my-2">
        To create new environment variables on the external API layer you can
        either create a <StyledText>.env</StyledText> file, or the variables to
        <StyledText>docker-compose.yml</StyledText> under the{" "}
        <StyledText>api</StyledText> service inside the{" "}
        <StyledText>environment</StyledText> keyword:
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`environment:
      - YOUR_NEW_KEY=<key_value>`}
      </CodeBlock>
    </div>
  );
};

export default Backend;
