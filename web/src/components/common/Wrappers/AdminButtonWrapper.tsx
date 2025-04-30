"use client";

import { useAuth } from "@/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

const AdminButtonWrapper: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();

  if (!user.isAdmin) return null;
  return <>{children}</>;
};

export default AdminButtonWrapper;
