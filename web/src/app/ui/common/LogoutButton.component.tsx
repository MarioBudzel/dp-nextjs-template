"use client";

import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Button
      variant={"ghost"}
      onClick={handleLogout}
      className="w-8 h-8 text-lg"
    >
      <LogOutIcon />
    </Button>
  );
};

export default LogoutButton;
