import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const Frontend: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Frontend</DocsSubtitle>
      <DocsBody classname="my-2">
        To create new environment variables on frontend we strongly suggest
        using a <StyledText>.env</StyledText> file for Prisma compatibility. You
        can also use the
        <StyledText>docker-compose.yml</StyledText> under the{" "}
        <StyledText>web</StyledText> service inside the{" "}
        <StyledText>environment</StyledText> keyword (not recommended):
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`environment:
      - YOUR_NEW_KEY=<key_value>`}
      </CodeBlock>
      <DocsBody classname="my-2">
        Or inside the <StyledText>.env</StyledText> file:
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`NEW_KEY=<key_value>`}
      </CodeBlock>
      <DocsBody classname="my-2">
        To expose the environment variables to client-side prefix them with{" "}
        <StyledText>NEXT_PUBLIC_</StyledText>:
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`environment:
      - NEXT_PUBLIC_YOUR_NEW_KEY=<key_value>`}
      </CodeBlock>
      <DocsBody classname="my-2">
        Or inside the <StyledText>.env</StyledText> file:
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`NEXT_PUBLIC_NEW_KEY=<key_value>`}
      </CodeBlock>
    </div>
  );
};
Frontend;
export default Frontend;
