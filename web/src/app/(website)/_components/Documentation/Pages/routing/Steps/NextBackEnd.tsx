import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import DocsTitle from "../../../components/DocsTitle";
import StyledText from "../../../components/StyledText";

const NextBackEnd: React.FC = () => {
  return (
    <div>
      <DocsTitle>Next.js - Backend</DocsTitle>
      <DocsBody classname="my-2">
        The system for creating a new API route inside internal Next.js routing
        is similiar. In this case you need to create the new folder inside{" "}
        <StyledText>./web/src/app/api</StyledText> directory:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`├── web/
│  ├── src/
│  │  ├── app/
│  │  │  ├── api/
│  │  │  │  ├── <new_route>/`}
      </CodeBlock>
      <DocsBody classname="my-2">
        Instead of <StyledText>page.tsx</StyledText> file, you need to create{" "}
        <StyledText>route.ts</StyledText> file, with a handler function:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    return NextResponse.json();
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}`}
      </CodeBlock>
      <DocsSubtitle>Allowing the route</DocsSubtitle>
      <DocsBody classname="my-2">
        Bacause of the way the <StyledText>middleware.ts</StyledText> is set-up,
        your route will be blocked by default, because it will require
        authentication token. This behaviour is only ment for the external API
        routes. To prevent this behavior on your new API route, navigate to{" "}
        <StyledText>./web/src/routes.ts</StyledText> and update this variable:
      </DocsBody>
      <CodeBlock language="javascript" rounded>
        {`export const nonBERoutes = ["<full_api_route_path>"];`}
      </CodeBlock>
      <DocsSubtitle>Hit the endpoint</DocsSubtitle>
      <DocsBody classname="my-2">
        To use your newly created route you can use the{" "}
        <a
          className="text-primary underline cursor-pointer"
          rel="noreferrer"
          target="_blank"
          href="https://nextjs.org/docs/app/api-reference/functions/fetch"
        >
          Fetch API
        </a>
        .
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

export default NextBackEnd;
