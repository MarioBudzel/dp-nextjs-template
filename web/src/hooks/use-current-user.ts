import { useSession } from "next-auth/react";

/**
 * Client-side hook na získanie usera v client componentoch
 * @returns Object
 */
export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};
