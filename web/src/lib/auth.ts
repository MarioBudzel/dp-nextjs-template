import { auth } from "@/auth";

import { jwtVerify } from "jose";

/**
 * Vráti authorizačný token užívateľa, potrebné použiť s AWAIT
 * @returns Promise & User
 */
export const currentToken = async () => {
  const session = await auth();
  return session?.user?.token;
};
/**
 * Vráti aktuálne prihláseného užívateľa, potrebné použiť s AWAIT
 * @returns Promise & User
 */
export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

/**
 * Vráti rolu aktuálne prihláseného používateľa
 * @returns String
 */
export const currentRole = async () => {
  const session = await auth();
  return session?.user?.role;
};

/**
 * Slúži na kontrolu tokenu odoslaného z NODE.JS API
 * @returns String
 */
export const checkToken = async (token: string | undefined) => {
  if (!token) return false;
  const secrets: string | undefined = process.env.API_SECRETS;
  if (secrets) {
    const secretsArray = secrets.split(",");
    for (const secret of secretsArray) {
      try {
        const decoded = await jwtVerify(
          token,
          new TextEncoder().encode(secret)
        );
        return decoded;
      } catch (error) {}
    }
    throw new Error("Provided auth token is not correct. Access forbidden!");
  }
};
