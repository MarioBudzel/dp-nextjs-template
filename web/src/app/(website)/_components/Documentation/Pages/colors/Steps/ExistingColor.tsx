import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const ExistingColor: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Update existing colors</DocsSubtitle>
      <DocsBody useDiv classname="mb-2">
        To update existing colors navigate to{" "}
        <StyledText>theme-colors.ts</StyledText> file and update the selected
        color/colors:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`const themes = {
  Orange: {
    light: {
      background: "0 0% 100%",
      foreground: "20 14.3% 4.1%",
      card: "0 0% 100%",
      "card-foreground": "20 14.3% 4.1%",
      // More colors...   
    },
    dark: {
      background: "20 14.3% 4.1%",
      foreground: "60 9.1% 97.8%",
      card: "20 14.3% 4.1%",
      "card-foreground": "60 9.1% 97.8%",
      // More colors...
    },
  },
  // More colors...
};`}
      </CodeBlock>
    </div>
  );
};

export default ExistingColor;
