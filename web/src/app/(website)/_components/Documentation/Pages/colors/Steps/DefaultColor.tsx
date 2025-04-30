import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const DefaultColor: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Default color</DocsSubtitle>
      <DocsBody useDiv classname="mb-2">
        To update the default primary color navigate to{" "}
        <StyledText>ThemeContext.tsx</StyledText> file and update all the color
        occurences inside this function:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`const getSavedThemeColor = () => {
  try {
    return (localStorage.getItem("themeColor") as TThemeColors) ?? "Orange";
  } catch (error) {
    "Orange" as TThemeColors;
  }
};`}
      </CodeBlock>
      <DocsBody useDiv classname="my-2">
        These colors are available by default:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`[
  "Zinc",
  "Rose",
  "Blue",
  "Green",
  "Orange"
];`}
      </CodeBlock>
    </div>
  );
};

export default DefaultColor;
