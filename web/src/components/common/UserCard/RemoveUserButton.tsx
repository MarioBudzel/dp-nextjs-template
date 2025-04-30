"use client";

import React from "react";
import { ModalTitle } from "../BasicModal";
import BasicModal from "../BasicModal";
import Flex from "../Flex";
import { cn } from "@/lib/utils";
import IconButton from "../IconButton";
import { Trash2 } from "lucide-react";
import { removeUser } from "@/lib/user-actions";
import Toastify from "../Toastify";

type Props = {
  fullName: string;
  userId: string;
  disableButtons?: boolean;
};

const RemoveUserButton: React.FC<Props> = ({
  fullName,
  disableButtons,
  userId,
}) => {
  const modalRef = React.useRef<{
    onClose: () => void;
    onOpen: () => void;
  }>(null);

  const handleUserDelete = async () => {
    try {
      const response = await removeUser(userId);

      if (response.error) throw new Error(response.error);

      modalRef?.current?.onClose?.();
      Toastify.success({ label: "User deleted!" });
    } catch (error) {
      console.error(error);
      Toastify.error({ label: "A mysterious error has occured" });
    }
  };
  return (
    <BasicModal
      rootProps={{
        dismissible: false,
      }}
      ref={modalRef}
      useBackdropEffects
      disabledTrigger={disableButtons}
      trigger={
        <IconButton
          variant="rounded"
          useDiv
          className={cn(disableButtons ? "cursor-default" : "")}
        >
          <Trash2 size={16} className="text-destructive" />
        </IconButton>
      }
      ContentProps={{
        className: "px-5",
      }}
    >
      <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 px-10 gap-8 rounded-xl text-start max-w-screen-sm">
        <ModalTitle className="shadow-none">
          <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
            <p className="text-sm">Remove User</p>
          </div>
        </ModalTitle>
        <p className="text-lg text-destructive">
          You are about to delete user: <strong>{fullName}</strong>
        </p>
        <Flex className="w-full items-center justify-end gap-3">
          <button
            className="flex gap-2 items-center shadow-sm px-4 rounded-full py-1"
            onClick={() => {
              modalRef.current?.onClose?.();
            }}
          >
            <p className="text-sm">Cancel</p>
          </button>
          <button
            className="flex gap-2 items-center text-primary-foreground bg-primary shadow-sm px-4 rounded-full py-1"
            onClick={handleUserDelete}
          >
            <p className="text-sm">Delete</p>
          </button>
        </Flex>
      </div>
    </BasicModal>
  );
};

export default RemoveUserButton;
