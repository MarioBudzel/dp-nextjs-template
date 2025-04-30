import NextAuth, { type DefaultSession } from "next-auth";
import { Role } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  lastName?: string;
  role: Role;
  token?: string;
  profilePicturePath?: string;
  isAdmin?: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
