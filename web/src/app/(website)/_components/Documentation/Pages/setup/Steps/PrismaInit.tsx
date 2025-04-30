import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const PrismaInit: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>4. Prisma initialization</DocsSubtitle>
      <DocsBody classname="mb-2">
        Still inside the <StyledText>./web</StyledText> directory, run the
        following command.
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`# inside <project_folder_name>/web

npx prisma generate`}
      </CodeBlock>
      <DocsBody classname="mt-2">
        You should see Prisma output inside the terminal.
      </DocsBody>
    </div>
  );
};

export default PrismaInit;
