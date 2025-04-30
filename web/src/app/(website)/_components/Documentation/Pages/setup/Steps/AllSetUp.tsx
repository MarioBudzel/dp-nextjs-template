import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const AllSet: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>7. All set up</DocsSubtitle>
      <DocsBody classname="mb-2">
        Now you should be all set to try out your application. Navigate to:{" "}
        <StyledText>localhost:5001</StyledText>.
      </DocsBody>
    </div>
  );
};

export default AllSet;
