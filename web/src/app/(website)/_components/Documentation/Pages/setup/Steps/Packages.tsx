import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";

const Packages: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>2. Install the dependencies</DocsSubtitle>
      <DocsBody useDiv>
        <DocsBody classname="mb-2">
          After cloning the project you need to install the required
          dependencies for API and for WEB.
        </DocsBody>
        <DocsBody classname="font-bold mb-2">Directory - web</DocsBody>
        <CodeBlock language="bash" rounded>
          {`cd <project_folder_name>
cd web

npm install`}
        </CodeBlock>
        <DocsBody classname="font-bold mb-2">Directory - api</DocsBody>
        <CodeBlock language="bash" rounded>
          {`# Starting from 
# <project_folder_name>/web
cd ..
cd api

npm install`}
        </CodeBlock>
      </DocsBody>
    </div>
  );
};

export default Packages;
