"use client";
import Flex from "@/components/common/Flex";
import Loader from "@/components/ui/Loader";
import { TContextUser } from "@/types";
import { signOut, useSession } from "next-auth/react";
import React, { useContext } from "react";

import useSWR, { KeyedMutator } from "swr";

const fetchUser = async (id: string) => {
  if (!id) return;
  const res = await fetch(`/api/user/${id}`, {
    next: { tags: ["CurrentUser, Users"] },
  });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};

const AuthContext = React.createContext<{
  user: TContextUser;
  isLoading: boolean;
  mutate: KeyedMutator<any>;
}>({
  user: {} as TContextUser,
  isLoading: false,
  mutate: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const handleLogout = async () => {
    await signOut();
  };

  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR(userId ? `/api/user/${userId}` : null, () => fetchUser(userId!));

  if (error) {
    handleLogout();
    return <p>Error loading user</p>;
  }

  if (isLoading || !user)
    return (
      <Flex className="w-[100dvw] h-[100dvh] justify-center items-center">
        <Loader />
      </Flex>
    );

  return (
    <AuthContext.Provider value={{ user, isLoading, mutate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
