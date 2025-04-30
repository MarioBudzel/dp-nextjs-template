import Flex from "@/components/common/Flex";
import DocsTitle from "../../components/DocsTitle";
import DocsBody from "../../components/DocsBody";
import StyledText from "../../components/StyledText";
import DashedDivider from "../../components/DashedDivider";
import NewFont from "./Steps/NewFont";
import Usage from "./Steps/Usage";

const Typography: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col pb-5">
      <div>
        <DocsTitle>Typography</DocsTitle>
        <DocsBody useDiv>
          Typography is managed inside:
          <ul className="list-disc px-5">
            <li className="my-2">
              <StyledText>fonts.ts</StyledText>
            </li>
            <li className="my-2">
              <StyledText>layout.tsx</StyledText> - inside{" "}
              <StyledText>./web/src/app</StyledText>
            </li>
          </ul>
        </DocsBody>
      </div>
      <DashedDivider />
      <NewFont />
      <DashedDivider />
      <Usage />
    </Flex>
  );
};

export default Typography;
