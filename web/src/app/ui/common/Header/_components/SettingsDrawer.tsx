import Flex from "@/components/common/Flex";
import IconDrawer, { DrawerTitle } from "@/components/common/IconDrawer";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Settings } from "lucide-react";
import ColorButtons from "./ColorButtons";

const SettingsDrawer: React.FC = () => {
  return (
    <IconDrawer
      animateTrigger
      animationSpeed="medium"
      animationType="rotate"
      drawerTrigger={<Settings />}
      useBackdropEffects
      OverlayProps={{
        className: "bg-black/5 backdrop-blur-sm",
      }}
    >
      <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
        <DrawerTitle className="font-bold text-secondary-foreground text-xl">
          Settings
        </DrawerTitle>
        <Flex className="flex-col items-center content-center gap-8">
          <p className="text-xs text-muted-foreground uppercase  text-start w-full font-bold">
            Theme Toggle
          </p>
          <ThemeToggle size={20} />
        </Flex>
        <div className="border border-dashed border-primary/40" />
        <Flex className="flex-col items-center content-center gap-8">
          <p className="text-xs text-muted-foreground uppercase  text-start w-full font-bold">
            Color select
          </p>
          <ColorButtons />
        </Flex>
      </div>
    </IconDrawer>
  );
};

export default SettingsDrawer;
