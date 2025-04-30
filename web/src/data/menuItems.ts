import Home from "@/app/(website)/page";
import { MenuItem, TSidebarLink } from "@/types";
import {
  CircleAlert,
  ClipboardType,
  Component,
  Grid2x2Check,
  Grid3x3,
  HomeIcon,
  Lock,
  MousePointerClick,
  RabbitIcon,
  ShieldMinus,
  TableProperties,
  User,
  Wrench,
} from "lucide-react";

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
      {
        name: "Selectable",
        type: "default",
        icon: Grid2x2Check,
        path: "/dashboard/tables/selectable",
      },
      {
        name: "Clickable Row",
        type: "default",
        icon: MousePointerClick,
        path: "/dashboard/tables/clickable-row",
      },
    ],
  },
  {
    groupTitle: "Management",
    paths: [
      {
        name: "User",
        type: "list",
        icon: User,
        parentPath: "/dashboard/user",
        paths: [
          {
            name: "Account",
            path: "/dashboard/user/account",
          },
          {
            name: "List",
            path: "/dashboard/user/list",
            adminPath: true,
          },
          {
            name: "Create",
            path: "/dashboard/user/create",
            adminPath: true,
          },
          {
            name: "Edit",
            path: "/dashboard/user/edit",
            adminPath: true,
          },
        ],
      },
      {
        name: "Rich Text",
        type: "list",
        icon: ClipboardType,
        parentPath: "/dashboard/text",
        paths: [
          {
            name: "Create",
            path: "/dashboard/text/create",
          },
          {
            name: "List",
            path: "/dashboard/text/list",
            adminPath: true,
          },
          {
            name: "Detail",
            path: "/dashboard/text/detail",
            adminPath: true,
          },
        ],
      },
    ],
  },
  {
    groupTitle: "Status",
    paths: [
      {
        name: "404",
        type: "default",
        icon: RabbitIcon,
        path: "/dashboard/status/404",
      },
      {
        name: "Permission",
        type: "default",
        icon: ShieldMinus,
        path: "/dashboard/status/permission",
      },
      {
        name: "Error (500)",
        type: "default",
        icon: CircleAlert,
        path: "/dashboard/status/error",
      },
      {
        name: "Maintenance",
        type: "default",
        icon: Wrench,
        path: "/dashboard/status/maintenance",
      },
    ],
  },
  {
    groupTitle: "Miscellaneous",
    paths: [
      {
        name: "Admin wrapper",
        type: "default",
        icon: Lock,
        path: "/dashboard/misc/admin-wrapper",
      },
      {
        name: "Permission wrapper",
        type: "default",
        icon: ShieldMinus,
        path: "/dashboard/misc/permission-wrapper",
      },
      {
        name: "Components",
        type: "list",
        icon: Component,
        parentPath: "/dashboard/misc/components-display",
        paths: [
          {
            name: "Theme Toggles",
            path: "/dashboard/misc/components-display/theme-toggles",
          },
          {
            name: "Icon Button",
            path: "/dashboard/misc/components-display/icon-button",
          },
          {
            name: "Animated Icon Button",
            path: "/dashboard/misc/components-display/animated-icon-button",
          },
          {
            name: "Icon Drawer",
            path: "/dashboard/misc/components-display/icon-drawer",
          },
          {
            name: "Modal",
            path: "/dashboard/misc/components-display/modal",
          },
          {
            name: "Scroll Box",
            path: "/dashboard/misc/components-display/scrollbox",
          },
          {
            name: "Collapse",
            path: "/dashboard/misc/components-display/collapse",
          },
          {
            name: "Toastify",
            path: "/dashboard/misc/components-display/toastify",
          },
          {
            name: "Helper",
            path: "/dashboard/misc/components-display/helper",
          },
          {
            name: "User Profile Picture",
            path: "/dashboard/misc/components-display/user-profile",
          },
          {
            name: "User Card",
            path: "/dashboard/misc/components-display/user-card",
          },
          {
            name: "Illustrations",
            path: "/dashboard/misc/components-display/illustrations",
          },
        ],
      },
    ],
  },
];
