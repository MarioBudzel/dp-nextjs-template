"use client";
import useDisclosure from "@/hooks/useDisclosure";
import { AdminCreateForm } from "@/schemas/account";
import { useFormContext } from "react-hook-form";
import Flex from "./Flex";
import { Switch } from "../ui/switch";
import { Role } from "@prisma/client";
import UserProfilePicture from "../ui/UserProfilePicture";
import IconButton from "./IconButton";
import { Trash2 } from "lucide-react";
import { getBaseURL } from "@/lib/utils";

type Props = {
  edit?: boolean;
  create?: boolean;
};

const UserBasicInfoForm: React.FC<Props> = ({ edit, create }) => {
  const { watch, setValue } = useFormContext<AdminCreateForm>();

  const isAdmin = watch("isAdmin");
  const permission = watch("role");

  const profilePicture = watch("profilePicture");
  const picturePath = watch("profilePicturePath");

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const file = files[0];

    if (!file) return;

    Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    setValue("profilePicture", file);
  };
  return (
    <Flex className="rounded-md shadow-md py-6 px-5 flex-col bg-card gap-5">
      <Flex className="w-full py-4 justify-center items-center flex-col gap-3">
        <UserProfilePicture
          imageUrl={
            profilePicture
              ? //@ts-expect-error preview is there
                profilePicture?.preview
              : picturePath
                ? `${getBaseURL()}/${picturePath}`
                : undefined
          }
          uploader
          onFileUploaded={handleFileSelect}
        />
        <Flex className="items-center gap-2">
          <p className="text-sm text-muted-foreground">Upload photo</p>
          {profilePicture ? (
            <IconButton
              variant="rounded"
              className="p-1"
              onClick={() =>
                setValue("profilePicture", null as unknown as File)
              }
            >
              <Trash2 size={13} className="text-destructive" />
            </IconButton>
          ) : null}
        </Flex>
      </Flex>
      {create || edit ? (
        <>
          <Flex className="min-h-[25px] w-full items-center justify-between">
            <p className="font-bold text-secondary-foreground">Admin</p>
            <Switch
              checked={isAdmin}
              onCheckedChange={() => setValue("isAdmin", !isAdmin)}
            />
          </Flex>
          <Flex className="min-h-[25px] w-full items-center justify-between">
            <p className="font-bold text-secondary-foreground">Read-Only</p>
            <Switch
              checked={permission === Role.RO}
              onCheckedChange={() =>
                setValue("role", permission === Role.RO ? Role.RW : Role.RO)
              }
            />
          </Flex>
        </>
      ) : null}
    </Flex>
  );
};

export default UserBasicInfoForm;
