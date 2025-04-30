import { ChevronFirst, ChevronLast } from "lucide-react";
import Image from "next/image";
import NavLinks from "./NavLinks.component";
import { MenuItems } from "@/data/menuItems";

const MobileDrawer: React.FC<{ isExpanded: boolean; onToggle: () => void }> = ({
  isExpanded,
  onToggle,
}) => {
  return (
    <aside
      className={`absolute top-0 left-0 z-20 bg-background/95 backdrop-blur-lg overflow-hidden min-h-dvh transition-all duration-300 border-r ${
        isExpanded ? "w-dvw" : "w-0"
      }`}
    >
      <section className={`w-full flex items-center p-6 pb-2 justify-between`}>
        <Image
          alt="logo"
          src="https://img.logoipsum.com/289.svg"
          className={`overflow-hidden w-24`}
          width={32}
          height={32}
        />
        <button
          onClick={onToggle}
          className="flex-shrink-0 flex items-center justify-center rounded-lg p-1.5 bg-transparent transition-colors duration-200 hover:bg-foreground/5"
        >
          <ChevronFirst
            className={`text-foreground`}
            strokeWidth={3}
            size={24}
          />
        </button>
      </section>
      <NavLinks navLinks={MenuItems} />
    </aside>
  );
};

export default MobileDrawer;
