import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";

const Environment: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>1. Environment</DocsSubtitle>
      <DocsBody useDiv>
        <ul className="list-disc px-5">
          <li className="my-2">Node.js</li>
          <li className="my-2">Next.js</li>
          <li className="my-2">React</li>
          <li className="my-2">Docker (+ Docker compose - Linux)</li>
        </ul>
      </DocsBody>
    </div>
  );
};

export default Environment;
