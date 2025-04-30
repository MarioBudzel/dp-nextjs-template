import Flex from "@/components/common/Flex";
import DocsTitle from "../../components/DocsTitle";
import DocsBody from "../../components/DocsBody";
import StyledText from "../../components/StyledText";
import DashedDivider from "../../components/DashedDivider";
import DefaultColor from "./Steps/DefaultColor";
import ExistingColor from "./Steps/ExistingColor";
import NewColor from "./Steps/NewColor";

const Colors: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col pb-5">
      <div>
        <DocsTitle>Colors</DocsTitle>
        <DocsBody useDiv>
          Colors are managed inside these files:
          <ul className="list-disc px-5">
            <li className="my-2">
              <StyledText>ThemeContext.tsx</StyledText>
            </li>
            <li className="my-2">
              <StyledText>theme-colors.ts</StyledText>
            </li>
            <li className="my-2">
              <StyledText>ColorButtons.tsx</StyledText>
            </li>
          </ul>
        </DocsBody>
      </div>
      <DashedDivider />
      <DefaultColor />
      <DashedDivider />
      <ExistingColor />
      <DashedDivider />
      <NewColor />
    </Flex>
  );
};

export default Colors;
