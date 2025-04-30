"use client";
import Flex from "@/components/common/Flex";
import IconDrawer, {
  DrawerClose,
  DrawerTitle,
} from "@/components/common/IconDrawer";
import UserProfilePicture from "@/components/ui/UserProfilePicture";
import { useAuth } from "@/context/AuthContext";
import { getBaseURL } from "@/lib/utils";
import { LogOut, X } from "lucide-react";
import { signOut } from "next-auth/react";

const UserDrawer: React.FC = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <IconDrawer
      drawerTrigger={
        <UserProfilePicture
          size="small"
          imageUrl={
            user?.profilePicturePath
              ? `${getBaseURL()}/${user?.profilePicturePath}`
              : undefined
          }
        />
      }
      useBackdropEffects
      OverlayProps={{
        className: "bg-black/5 backdrop-blur-sm",
      }}
    >
      <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
        <Flex className="items-center justify-between">
          <DrawerTitle>User</DrawerTitle>
          <DrawerClose className="flex justify-end">
            <X size={15} />
          </DrawerClose>
        </Flex>
        <Flex className="flex-col items-center content-center gap-1">
          <UserProfilePicture
            imageUrl={
              user?.profilePicturePath
                ? `${getBaseURL()}/${user?.profilePicturePath}`
                : undefined
            }
          />
          <p className="font-bold text-lg">
            {user.fullname ?? `${user.name} ${user.lastName}`}
          </p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </Flex>
        <div className="border border-dashed border-primary/40" />
        <Flex className="grow"></Flex>
        <div className="border border-dashed border-primary/40" />
        <Flex className="justify-center">
          <button
            onClick={handleLogout}
            className="hover:bg-primary/75 transition-all duration-150 flex justify-center align-center px-10 rounded-full capitalize bg-primary shadow-sm py-3 font-bold gap-2"
          >
            <LogOut />
            Sing out
          </button>
        </Flex>
      </div>
    </IconDrawer>
  );
};

export default UserDrawer;
