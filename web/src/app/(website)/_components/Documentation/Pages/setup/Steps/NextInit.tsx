import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const NextInit: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>3. Next.js initialization</DocsSubtitle>
      <DocsBody classname="mb-2">
        For this step you need to navigate back to{" "}
        <StyledText>./web</StyledText> directory and run the Next.js app.
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`# inside <project_folder_name>/web

npm run dev`}
      </CodeBlock>
      <DocsBody classname="mt-2">
        This will create <StyledText>.next</StyledText> directory inside the
        folder. Your app will now be running. You need to shut it down by
        pressing <StyledText>CTRL+C</StyledText> inside the terminal and by
        following the instructions.
      </DocsBody>
    </div>
  );
};

export default NextInit;
