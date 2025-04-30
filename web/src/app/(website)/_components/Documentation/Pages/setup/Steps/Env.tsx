import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const Env: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>5. .env</DocsSubtitle>
      <DocsBody classname="mb-2">
        Still inside the <StyledText>./web</StyledText> directory. Prisma will
        have trouble using environment variables defined inside{" "}
        <StyledText>docker-compose.yml</StyledText>, therefore you should create
        your own <StyledText>.env</StyledText> file inside{" "}
        <StyledText>./web</StyledText> directory. Copy and paste the following
        keys.
      </DocsBody>
      <CodeBlock language="bash" rounded>
        {`# inside <project_folder_name>/web/.env

MONGODB_URI=mongodb://mongo:27017/nextjs?replicaSet=rs0
AUTH_SECRET=<available inside docker-compose.yml>
GEMINI_API_KEY=<use Google Cloud to generate your own>
NEXT_PUBLIC_BASE_URL=http://localhost:5001
NEXT_PUBLIC_NGINX_BASE_URL="http://localhost:5001"`}
      </CodeBlock>
    </div>
  );
};

export default Env;
