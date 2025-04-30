import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

import { getUserById } from "@/data/user";

import authConfig from "@/auth.config";
import { Role } from "@prisma/client";

import jwt from "jsonwebtoken";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/",
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }
      if (token.lastName && session.user) {
        session.user.lastName = token.lastName as string;
      }
      const secret: string | undefined = process.env.AUTH_SECRET;
      if (secret) {
        const signedToken = jwt.sign(token, secret);
        session.user.token = signedToken;
        session.user.profilePicturePath = token.profilePicturePath as string;
        session.user.isAdmin = token.isAdmin as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;
      token.lastName = existingUser.lastName;
      token.profilePicturePath = existingUser.profilePicturePath;
      token.isAdmin = existingUser.isAdmin;
      return token;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to the correct base URL (localhost:5001)
      if (url === "/auth/signout") {
        return baseUrl; // Ensure redirection to localhost:5001
      }
      return url;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
