import Flex from "@/components/common/Flex";
import DocsTitle from "../../components/DocsTitle";
import DocsBody from "../../components/DocsBody";
import StyledText from "../../components/StyledText";
import DashedDivider from "../../components/DashedDivider";
import Backend from "./Steps/Backend";
import Frontend from "./Steps/Frontend";

const EnvironmentVars: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col pb-5">
      <div>
        <DocsTitle>Environment variables</DocsTitle>
        <DocsBody useDiv>
          Environment variables can be managed in two ways:
          <ul className="list-disc px-5">
            <li className="my-2">
              <StyledText>docker-compose.yml</StyledText>
            </li>
            <li className="my-2">
              <StyledText>.env</StyledText> file
            </li>
          </ul>
        </DocsBody>
      </div>
      <DashedDivider />
      <Backend />
      <DashedDivider />
      <Frontend />
    </Flex>
  );
};

export default EnvironmentVars;
