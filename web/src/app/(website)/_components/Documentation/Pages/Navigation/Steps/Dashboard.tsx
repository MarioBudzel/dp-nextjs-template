import CodeBlock from "@/components/common/CodeBlock";
import DocsBody from "../../../components/DocsBody";
import DocsSubtitle from "../../../components/DocsSubtitle";
import StyledText from "../../../components/StyledText";

const Dashboard: React.FC = () => {
  return (
    <div>
      <DocsSubtitle>Dashboard</DocsSubtitle>
      <DocsBody classname="my-2">
        Dashboard navigation follows <StyledText>TSidebarLink</StyledText> TS
        type:
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`type TSidebarPathsDefault = {
  icon?: LucideIcon;
  name: string;
  adminPath?: boolean;
};

export type TListPaths = TSidebarPathsDefault & {
  type: 'list';
  path?: never;
  parentPath: string;
  paths: (TSidebarPathsDefault & { path: string })[];
};

export type TSidebarPaths = 
  | TListPaths 
  | (TSidebarPathsDefault & { type: 'default'; path: string; paths?: never; parentPath?: never });

export type TSidebarLink = {
  groupTitle?: string;
  paths: TSidebarPaths[];
};`}
      </CodeBlock>
      <DocsBody classname="my-2">
        To customize Dashboard navigation update the file{" "}
        <StyledText>menuItems.ts</StyledText>:
      </DocsBody>
      <CodeBlock language="typescript" rounded>
        {`// ./web/src/data/menuItems.ts

export const DashboardLinks: TSidebarLink[] = [
  {
    groupTitle: "Overview",
    paths: [
      {
        name: "App",
        path: "/dashboard",
        type: "default",
        icon: HomeIcon,
      },
    ],
  },
  {
    {
    groupTitle: "Tables",
    paths: [
      {
        name: "Basic",
        type: "default",
        icon: Grid3x3,
        path: "/dashboard/tables/basic",
      },
      {
        name: "Search & Pin",
        type: "default",
        icon: TableProperties,
        path: "/dashboard/tables/search",
      },
          ...`}
      </CodeBlock>
    </div>
  );
};

export default Dashboard;
