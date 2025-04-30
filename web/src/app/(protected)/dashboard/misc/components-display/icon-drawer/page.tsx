"use client";
import IconDrawer, {
  DrawerTitle,
  DrawerClose,
} from "@/components/common/IconDrawer";
import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import {
  X,
  Menu,
  Settings,
  Star,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PropsWrapper from "../../components/PropsWrapper";
import { iconDrawerProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const IconDrawers: React.FC = () => {
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import IconDrawer, { DrawerTitle, DrawerClose } from "@/components/common/IconDrawer";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">
            Icon Drawer Variations
          </p>
          <p className="text-muted-foreground">
            Different ways to trigger the drawer.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <IconDrawer drawerTrigger={<Menu size={24} />}>
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
              <IconDrawer
                drawerTrigger={<Settings size={24} />}
                animateTrigger
                animationType="bounce"
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
              <IconDrawer>
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
            </Flex>
            <CodeBlock language="tsx">{`import IconDrawer from "@/components/common/IconDrawer";
import { Menu, Settings } from "lucide-react";

const Example = () => {
  return (
    <>
      <IconDrawer drawerTrigger={<Menu size={24} />}>
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
            <DrawerTitle />
        </div>
      </IconDrawer>
      <IconDrawer drawerTrigger={<Settings size={24} />} animateTrigger animationType="bounce">
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
            <DrawerTitle />
        </div>
      </IconDrawer>
      <IconDrawer>
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
            <DrawerTitle />
        </div>
      </IconDrawer>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">Drawer Positions</p>
          <p className="text-muted-foreground">
            Showing different positions for the drawer.
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <IconDrawer
                direction="left"
                drawerTrigger={<ChevronLeft size={24} />}
                ContentProps={{ className: "left-0" }}
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
              <IconDrawer
                direction="right"
                drawerTrigger={<ChevronRight size={24} />}
                ContentProps={{ className: "right-0" }}
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
              <IconDrawer
                direction="top"
                drawerTrigger={<Star size={24} />}
                ContentProps={{ className: "top-0 w-full h-[300px]" }}
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
              <IconDrawer
                direction="bottom"
                drawerTrigger={<Bell size={24} />}
                ContentProps={{ className: "bottom-0 w-full h-[300px]" }}
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
            </Flex>
            <CodeBlock language="tsx">{`import IconDrawer from "@/components/common/IconDrawer";
import { ChevronLeft, ChevronRight, Star, Bell } from "lucide-react";

const Example = () => {
  return (
    <>
      <IconDrawer direction="left" drawerTrigger={<ChevronLeft size={24} />} ContentProps={{ className: "left-0" }}>
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
            <DrawerTitle />
        </div>
      </IconDrawer>
      <IconDrawer direction="right" drawerTrigger={<ChevronRight size={24} />} ContentProps={{ className: "right-0" }}>
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
            <DrawerTitle />
        </div>
      </IconDrawer>
      <IconDrawer direction="top" drawerTrigger={<Star size={24} />} ContentProps={{ className: "top-0 w-full h-[300px]" }}>
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
            <DrawerTitle />
        </div>
      </IconDrawer>
      <IconDrawer direction="bottom" drawerTrigger={<Bell size={24} />} ContentProps={{ className: "bottom-0 w-full h-[300px]" }}>
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
            <DrawerTitle />
        </div>
      </IconDrawer>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">
            With and Without Backdrop Effects
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <IconDrawer
                drawerTrigger={<Menu size={24} />}
                useBackdropEffects
                OverlayProps={{ className: "bg-black/5 backdrop-blur-sm" }}
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
              <IconDrawer drawerTrigger={<Settings size={24} />}>
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
            </Flex>
            <CodeBlock language="tsx">{`import IconDrawer from "@/components/common/IconDrawer";
import { Menu, Settings } from "lucide-react";

const Example = () => {
  return (
    <>
      <IconDrawer drawerTrigger={<Menu size={24} />} useBackdropEffects OverlayProps={{ className: "bg-black/5 backdrop-blur-sm" }}>
        ...
      </IconDrawer>
      <IconDrawer drawerTrigger={<Settings size={24} />}>
        ...
      </IconDrawer>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>

        <div>
          <p className="text-xl text-primary font-bold">
            Dismissible vs Non-Dismissible Drawer
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4">
              <IconDrawer drawerTrigger={<Star size={24} />} dismissible>
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                </div>
              </IconDrawer>
              <IconDrawer
                drawerTrigger={<Bell size={24} />}
                dismissible={false}
              >
                <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
                  <DrawerTitle />
                  <DrawerClose className="flex justify-end">
                    <X size={15} />
                  </DrawerClose>
                </div>
              </IconDrawer>
            </Flex>
            <CodeBlock language="tsx">{`import IconDrawer from "@/components/common/IconDrawer";
import { Star, Bell } from "lucide-react";

const Example = () => {
  return (
    <>
      <IconDrawer drawerTrigger={<Star size={24} />} dismissible>
                ...
      </IconDrawer>
      <IconDrawer drawerTrigger={<Bell size={24} />} dismissible={false}>
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
            <DrawerTitle />
            <DrawerClose className="flex justify-end">
            <X size={15} />
            </DrawerClose>
        </div>
      </IconDrawer>
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>
        <PropsWrapper props={iconDrawerProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default IconDrawers;
