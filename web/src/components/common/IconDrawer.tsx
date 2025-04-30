"use client";

import {
  DialogContentProps,
  DialogOverlayProps,
  DialogTriggerProps,
} from "@radix-ui/react-dialog";
import React from "react";
import { DialogProps, Drawer } from "vaul";
import AnimatedIconButton from "../ui/AnimatedIconButton";

import IconButton from "./IconButton";
import { cn } from "@/lib/utils";

const DrawerTitle = Drawer.Title;
const DrawerClose = Drawer.Close;
const DrawerDescription = Drawer.Description;

type Props = {
  rootProps?: DialogProps;
  direction?: DialogProps["direction"];
  animateTrigger?: boolean;
  animationType?: "rotate" | "bounce";
  animationSpeed?: "fast" | "medium" | "slow";
  drawerTrigger?: React.ReactElement;
  useBackdropEffects?: boolean;
  OverlayProps?: Omit<
    DialogOverlayProps & React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>;
  dismissible?: boolean;
  ContentProps?: Omit<
    DialogContentProps & React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>;
  children?: React.ReactNode;
  drawerTriggerProps?: DialogTriggerProps &
    React.RefAttributes<HTMLButtonElement>;
};

const IconDrawer: React.FC<Props> = (props) => {
  const { className: contentClassName, ...restContentProps } =
    props.ContentProps ?? {};
  const { className: overlayClassName, ...restOverlayProps } =
    props.OverlayProps ?? {};

  return (
    <Drawer.Root direction={props.direction ?? "right"} {...props.rootProps}>
      {props.drawerTrigger ? (
        props.animateTrigger ? (
          <Drawer.Trigger {...props?.drawerTriggerProps}>
            <AnimatedIconButton
              useDiv
              animationType={props.animationType ?? "rotate"}
              speed={props.animationSpeed ?? "medium"}
            >
              {props.drawerTrigger}
            </AnimatedIconButton>
          </Drawer.Trigger>
        ) : (
          <Drawer.Trigger {...props?.drawerTriggerProps}>
            <IconButton variant="rounded" useDiv>
              {props.drawerTrigger}
            </IconButton>
          </Drawer.Trigger>
        )
      ) : (
        <Drawer.Trigger>Open drawer</Drawer.Trigger>
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
            "right-0 fixed z-30 outline-none w-[310px] flex",
            props.direction !== "bottom" ? "top-0 bottom-0" : "",
            contentClassName
          )}
          {...restContentProps}
        >
          {props.children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export { DrawerTitle, DrawerClose, DrawerDescription };
export default IconDrawer;
