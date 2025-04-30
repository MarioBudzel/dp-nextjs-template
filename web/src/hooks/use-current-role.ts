import { useSession } from "next-auth/react";

/**
 * Client-side hook na získanie role poúživateľa v client componentoch
 * @returns String
 */
export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user?.role;
};
