import Flex from "@/components/common/Flex";
import IconDrawer, { DrawerTitle } from "@/components/common/IconDrawer";
import { ChartNoAxesGantt } from "lucide-react";
import Navigation from "@/app/(website)/_components/Documentation/components/Navigation";
import { useSections } from "@/context/SectionContext";

const DocsNavigation: React.FC = () => {
  const { activeSection } = useSections();
  return (
    <IconDrawer
      direction="left"
      drawerTrigger={<ChartNoAxesGantt />}
      useBackdropEffects
      OverlayProps={{
        className: "bg-black/5 backdrop-blur-sm",
      }}
      ContentProps={{ className: "left-0" }}
      drawerTriggerProps={{
        className: `display-block sm:hidden ${activeSection !== "docs-section" ? "hidden" : ""}`,
      }}
    >
      <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8">
        <DrawerTitle className="font-bold text-secondary-foreground text-xl"></DrawerTitle>
        <Flex className="flex-col gap-8">
          <Navigation />
        </Flex>
      </div>
    </IconDrawer>
  );
};

export default DocsNavigation;
