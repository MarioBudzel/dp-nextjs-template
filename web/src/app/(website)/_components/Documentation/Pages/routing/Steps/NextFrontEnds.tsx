import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import DocsTitle from "../../../components/DocsTitle";
import StyledText from "../../../components/StyledText";

const NextFrontEnd: React.FC = () => {
  return (
    <div>
      <DocsTitle>Next.js - Frontend</DocsTitle>
      <DocsBody classname="my-2">
        For fontend routing we are using <StyledText>App Router</StyledText>{" "}
        from Next.js. Since this is a file-based routing system, to create a new
        route you need to create a new directory, with the name you want your
        route to be:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`├── web/
│  ├── src/
│  │  ├── app/
│  │  │  ├── <new_route>/`}
      </CodeBlock>
      <DocsBody classname="my-2">
        The next step si to create a <StyledText>page.tsx</StyledText> file that
        will contain your page. You can also create a{" "}
        <StyledText>layout.tsx</StyledText> file to define custom layout for
        your new route.
      </DocsBody>
      <DocsSubtitle>Nesting routes</DocsSubtitle>
      <DocsBody classname="my-2">
        To create a nested route you need to create another directory inside
        your exiting route.
      </DocsBody>
      <DocsSubtitle>More information</DocsSubtitle>
      <DocsBody classname="my-2">
        For more information about the routing we recommend you checkout the
        official{" "}
        <a
          className="text-primary underline cursor-pointer"
          rel="noreferrer"
          target="_blank"
          href="https://nextjs.org/docs/app"
        >
          documentation
        </a>
        .
      </DocsBody>
    </div>
  );
};

export default NextFrontEnd;
