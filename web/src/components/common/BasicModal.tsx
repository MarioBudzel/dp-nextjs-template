"use client";
import useDisclosure from "@/hooks/useDisclosure";
import { cn } from "@/lib/utils";
import { DialogContentProps, DialogOverlayProps } from "@radix-ui/react-dialog";
import React from "react";
import { DialogProps, Drawer } from "vaul";

const ModalTitle = Drawer.Title;
const ModalClose = Drawer.Close;
const ModalDescription = Drawer.Description;

type Props = {
  rootProps?: DialogProps;
  direction?: DialogProps["direction"];
  trigger: React.ReactElement;
  triggerText?: string;
  useBackdropEffects?: boolean;
  OverlayProps?: Omit<
    DialogOverlayProps & React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>;
  ContentProps?: Omit<
    DialogContentProps & React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  position?: "top" | "bottom" | "center";
  disabledTrigger?: boolean;
  hideTrigger?: boolean;
};

const BasicModal = React.forwardRef<
  {
    onClose: () => void;
    onOpen: () => void;
  },
  Props
>((props, ref) => {
  const { className: contentClassName, ...restContentProps } =
    props.ContentProps ?? {};
  const { className: overlayClassName, ...restOverlayProps } =
    props.OverlayProps ?? {};

  const postionMap: { [K in "top" | "bottom" | "center"]: string } = {
    top: "items-start",
    bottom: "items-end",
    center: "items-center",
  };

  const { isOpen, onClose, onOpen, onToggle } = useDisclosure({
    defaultState: false,
  });

  React.useImperativeHandle(ref, () => ({
    onClose: onClose,
    onOpen: onOpen,
  }));
  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={onToggle}
      direction={props.direction}
      {...props.rootProps}
    >
      {props.hideTrigger ? null : (
        <Drawer.Trigger disabled={props.disabledTrigger}>
          {props.trigger}
        </Drawer.Trigger>
      )}
      <Drawer.Portal>
        <Drawer.Overlay
          className={cn(
            "fixed",
            props.useBackdropEffects
              ? "inset-0 bg-black/40 backdrop-blur-md z-20"
              : "",
            overlayClassName
          )}
          {...restOverlayProps}
        />
        <Drawer.Content
          className={cn(
            "top-0 left-0 w-full h-full fixed z-30 outline-none flex justify-center pointer-events-none",
            props?.position ? postionMap[props.position] : postionMap["center"],
            contentClassName
          )}
          style={{
            pointerEvents: "none",
          }}
          {...restContentProps}
        >
          <div
            className={cn("w-fit h-fit")}
            style={{
              pointerEvents: "auto",
            }}
          >
            {props.children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
});

BasicModal.displayName = "BasicModal";

export { ModalTitle, ModalClose, ModalDescription };
export default BasicModal;
