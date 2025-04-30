import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const LandingPage: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Langing Page</DocsSubtitle>
      <DocsBody classname="mb-2">
        Landing Page navigation follows <StyledText>NavItem</StyledText> TS
        type:
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`export interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
  sectionId: string;
}`}
      </CodeBlock>
      <DocsBody classname="my-2">
        To customize Landing Page navigation update the file{" "}
        <StyledText>navLinks.ts</StyledText>:
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`// inside ./web/src/data/navLinks.ts

export const landingPageNavLinks: NavItem[] = [
  { href: "/", label: "Home", sectionId: "hero-section" },
  { href: "#features", label: "Features", sectionId: "about-section" },
  { href: "#docs", label: "Docs", sectionId: "docs-section" },
];`}
      </CodeBlock>
    </div>
  );
};

export default LandingPage;
