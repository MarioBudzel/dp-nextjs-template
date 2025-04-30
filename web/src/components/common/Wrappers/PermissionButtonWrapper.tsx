"use client";
import { useAuth } from "@/context/AuthContext";
import { Role } from "@prisma/client";
import React from "react";

const PermissionWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();

  if (user?.role !== Role.RW) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

export default PermissionWrapper;
