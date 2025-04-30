import { cn, getBaseURL } from "@/lib/utils";
import Flex from "../Flex";
import UserProfilePicture from "@/components/ui/UserProfilePicture";
import { User } from "@/types";
import { Role } from "@prisma/client";
import IconButton from "../IconButton";
import { Edit2, Trash2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import { redirect, useRouter } from "next/navigation";
import AdminButtonWrapper from "../Wrappers/AdminButtonWrapper";
import RemoveUserButton from "./RemoveUserButton";

type Props = {
  className?: HTMLDivElement["className"];
  user: User | undefined;
  customDisableButtons?: boolean;
};

const UserCardFull: React.FC<Props> = ({
  className,
  user,
  customDisableButtons,
}) => {
  const { user: loggedInUser } = useAuth();
  const router = useRouter();
  const disableButtons = React.useMemo(
    () => Boolean(loggedInUser?.id === user?.id),
    [loggedInUser, user]
  );
  return (
    <Flex
      className={cn(
        "rounded-lg flex-col py-4 px-4 bg-card max-w-[100%] md:max-w-[300px] md:min-w-[unset] min-w-[100%] shadow-lg flex-shrink-0 md:min-h-[470px]",
        className
      )}
    >
      <Flex className="flex-col gap-4 items-center justify-end w-full">
        <AdminButtonWrapper>
          <Flex
            className={cn(
              "w-full justify-end items-center gap-1",
              disableButtons ? "opacity-0" : ""
            )}
          >
            <IconButton
              variant="rounded"
              disabled={customDisableButtons}
              className={cn(disableButtons ? "cursor-default" : "")}
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
        </AdminButtonWrapper>
        <Flex className="flex-col items-center gap-4 py-4 px-16">
          <UserProfilePicture
            imageUrl={
              user?.profilePicturePath
                ? `${getBaseURL()}/${user?.profilePicturePath}`
                : undefined
            }
          />
          <Flex className="flex-col items-center">
            <p className="italic text-disabled-foreground text-[11px]">
              {user?.id}
            </p>
            <h5 className="font-bold text-center">
              {user?.fullName || `${user?.name} ${user?.lastName}`}
            </h5>
            <p className="text-muted-foreground text-[12px]">{user?.email}</p>
          </Flex>
          <Flex className="gap-3 justify-center flex-wrap max-w-[100%]">
            {user?.isAdmin ? (
              <p className="py-2 px-8 bg-destructive/10 font-bold shadow-lg rounded-full text-sm">
                Admin
              </p>
            ) : null}
            <p className="py-2 px-8 bg-primary/10 text-primary shadow-lg rounded-full font-bold text-sm">
              {user?.role === Role.RO ? "Read-Only" : "Read-Write"}
            </p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserCardFull;
