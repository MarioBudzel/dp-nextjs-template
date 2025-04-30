"use client";
import { TContextUser, User } from "@/types";
import Flex from "../Flex";
import { cn, getBaseURL } from "@/lib/utils";
import UserProfilePicture from "@/components/ui/UserProfilePicture";
import { Edit2 } from "lucide-react";
import IconButton from "../IconButton";
import { Trash2 } from "lucide-react";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import RemoveUserButton from "./RemoveUserButton";
import { useRouter } from "next/navigation";

type Props = {
  className?: HTMLDivElement["className"];
  user: User | undefined;
  customDisableButtons?: boolean;
};

const UserCardCompact: React.FC<Props> = ({
  className,
  user,
  customDisableButtons,
}) => {
  const { user: loggedInUser } = useAuth();
  const disableButtons = React.useMemo(
    () => Boolean(loggedInUser?.id === user?.id),
    [loggedInUser, user]
  );
  const router = useRouter();
  return (
    <Flex
      className={cn(
        "rounded-lg flex-col bg-card md:max-w-[350px] md:min-w-[unset] min-w-[100%] shadow-lg flex-shrink-0 py-2 px-2",
        className
      )}
    >
      <Flex className="flex justify-between w-full items-center gap-4">
        <Flex className="items-center gap-3">
          <UserProfilePicture
            size="small"
            imageUrl={
              user?.profilePicturePath
                ? `${getBaseURL()}/${user?.profilePicturePath}`
                : undefined
            }
          />
          <Flex className="flex-col">
            <h5 className="font-bold">
              {user?.fullName || `${user?.name} ${user?.lastName}`}
            </h5>
            <p className="text-[12px] text-muted-foreground">{user?.email}</p>
          </Flex>
        </Flex>
        <Flex
          className={cn(
            "items-center justify-end",
            disableButtons ? "opacity-0" : ""
          )}
        >
          <IconButton
            variant="rounded"
            className={cn(disableButtons ? "cursor-default" : "")}
            disabled={customDisableButtons}
            onClick={() => router.push(`/dashboard/user/edit/${user?.id}`)}
          >
            <Edit2 size={16} className="text-cyan-400" />
          </IconButton>
          <RemoveUserButton
            disableButtons={disableButtons || customDisableButtons}
            fullName={`${user?.name} ${user?.lastName}`}
            userId={user?.id ?? ""}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserCardCompact;
