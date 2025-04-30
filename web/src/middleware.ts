import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  apiPrefix,
  authContextRoute,
  nonBERoutes,
} from "@/routes";
import { checkToken } from "@/lib/auth";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl, headers } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  //const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.some((route) => {
    if (route instanceof RegExp) {
      return nextUrl.pathname.match(route);
    }
    // If it's a string, directly compare it
    return nextUrl.pathname === route;
  });

  const isAuthContextRoute = nextUrl.pathname.startsWith(authContextRoute);

  const isApiRoute =
    nextUrl.pathname.startsWith(apiPrefix) &&
    !nonBERoutes.some((prefix) => nextUrl.pathname.startsWith(prefix));

  const apiAuthToken = headers.get("x-access-token");

  if (isAuthContextRoute) return;

  if (isApiAuthRoute) {
    return;
  }
  if (isApiRoute) {
    if (!apiAuthToken)
      return Response.json({
        message: "Auth token is missing. Access forbidden!",
      });

    try {
      await checkToken(apiAuthToken);
      return;
    } catch (error: Error | any) {
      return Response.json({ message: error.message });
    }
  }

  if (isPublicRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
