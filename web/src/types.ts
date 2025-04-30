import { LucideIcon, LucideProps } from "lucide-react";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
} from "react";
import { iconMap } from "./data/iconMap";
import { Role } from "@prisma/client";

export interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
  sectionId: string;
}

export interface Item {
  id: string;
  url: string;
  label: string;
  group?: string;
  icon?: keyof typeof iconMap;
}

export interface MenuItem {
  groupName: string;
  children: Item[];
}

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {}

export interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  useDiv?: boolean;
  variant?: "rounded" | "default" | "unstyled";
}

export type TContextUser = {
  id: string;
  fullname?: string;
  email: string;
  isAdmin: boolean;
  profilePicturePath: string;
  role: Role;
  name?: string;
  lastName?: string;
};

type TSidebarPathsDefault = {
  icon?: LucideIcon;
  name: string;
  adminPath?: boolean;
};

export type TListPaths = TSidebarPathsDefault & {
  type: "list";
  path?: never;
  parentPath: string;
  paths: (TSidebarPathsDefault & { path: string })[];
};
export type TSidebarPaths =
  | TListPaths
  | (TSidebarPathsDefault & {
      type: "default";
      path: string;
      paths?: never;
      parentPath?: never;
    });

export type TSidebarLink = {
  groupTitle?: string;
  paths: TSidebarPaths[];
};

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  name: string;
  lastName: string;
  fullName: string | undefined;
  role: Role;
  profilePicturePath: string | undefined;
}

export enum AIGenerationTypes {
  FORMAT = "format",
  EXPAND = "expand",
  REGENERATE = "regenerate",
}

export enum AIPromptOptions {
  TITLE = "title",
  DESCRIPTION = "description",
  CONTENT = "content",
  TYPE = "type",
}

export type RichText = {
  owner: {
    id: string;
    name: string;
    lastName: string;
    fullName: string;
    email: string;
    profilePicturePath: string;
  };
  texts: {
    id: string;
    title: string;
    description: string;
    content: string;
    createdAt: string;
  }[];
};
