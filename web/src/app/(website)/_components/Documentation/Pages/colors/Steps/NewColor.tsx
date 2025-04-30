import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const NewColor: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Add new color</DocsSubtitle>
      <DocsBody useDiv classname="mb-2">
        To add new colors firstly navigate to{" "}
        <StyledText>theme-colors.ts</StyledText> file and add the new
        color/colors in this format:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`const themes = {
  <Color>: {
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
      <DocsBody useDiv classname="my-2">
        Then navigate to <StyledText>ColorButtons.tsx</StyledText> and difine
        your new color here:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`export const availableThemeColors = [
  {
    name: "NEW-COLOR",
    light: "bg-zinc-900", // Update these as needed
    dark: "bg-zinc-700",
    shadow: "shadow-zinc-400",
  },
  // More colors...
];`}
      </CodeBlock>
    </div>
  );
};

export default NewColor;
