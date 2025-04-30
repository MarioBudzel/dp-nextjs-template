import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const Docker: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>6. Docker</DocsSubtitle>
      <DocsBody classname="mb-2">
        Now navigate to the root of the project (where{" "}
        <StyledText>docker-compose.yml</StyledText> is located) and run the
        following command.
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`# inside <project_folder_name>

docker-compose up --wait`}
      </CodeBlock>
      <DocsBody classname="my-2">
        Use <StyledText>--wait</StyledText> to wait for healthcheck of all the
        containers. To subsequently run your project use only:
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`# inside <project_folder_name>

docker-compose up`}
      </CodeBlock>
    </div>
  );
};

export default Docker;
