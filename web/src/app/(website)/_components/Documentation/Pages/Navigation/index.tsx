import Flex from "@/components/common/Flex";
import DocsTitle from "../../components/DocsTitle";
import DocsBody from "../../components/DocsBody";
import StyledText from "../../components/StyledText";
import DashedDivider from "../../components/DashedDivider";
import LandingPage from "./Steps/LandingPage";
import Dashboard from "./Steps/Dashboard";

const Navigation: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col pb-5">
      <div>
        <DocsTitle>Navigation</DocsTitle>
        <DocsBody useDiv>
          User navigation is handled inside:
          <br />
          <br />
          <b>Landing page:</b>
          <ul className="list-disc px-5">
            <li className="my-2">
              <StyledText>./web/src/data/navLinks.ts</StyledText>
            </li>
          </ul>
          <br />
          <b>Dashboard:</b>
          <ul className="list-disc px-5">
            <li className="my-2">
              <StyledText>./web/src/data/menuItems.ts</StyledText>
            </li>
          </ul>
        </DocsBody>
      </div>
      <DashedDivider />
      <LandingPage />
      <DashedDivider />
      <Dashboard />
    </Flex>
  );
};

export default Navigation;
