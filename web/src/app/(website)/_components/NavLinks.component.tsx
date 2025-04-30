"use client";

import { useSections } from "@/context/SectionContext";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  navLinks: NavItem[];
};

const NavLinks: React.FC<Props> = ({ navLinks }) => {
  const { activeSection } = useSections();
  return (
    <div className="relative hidden lg:flex gap-x-10 font-semibold items-center">
      {navLinks.map((link, index) => {
        const isActive = activeSection === link.sectionId;
        return (
          <Link
            className={`group relative flex gap-x-2 items-center text-base text-muted-foreground font-medium ${
              isActive
                ? "px-5 py-2 rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/80"
                : "hover:text-lg hover:text-secondary-foreground transition-all duration-200"
            }`}
            key={index}
            href={link.href}
            scroll={link.href.includes("#") ? true : undefined}
          >
            {link.icon && link.icon}
            {link.label}
            {!isActive && (
              <>
                <span className="absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6" />
                <span className="absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-3/6" />
              </>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
