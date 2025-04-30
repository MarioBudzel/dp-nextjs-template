"use client";

import { iconMap } from "@/data/iconMap";
import { MenuItem } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { SidebarContext } from "..";

const NavLinks: React.FC<{ navLinks: MenuItem[] }> = ({ navLinks }) => {
  const router = useRouter();
  const location = usePathname().slice(1);
  const { isExpanded } = useContext(SidebarContext);
  return (
    <section
      className={`flex flex-col gap-2 py-4 transition-all ${
        isExpanded ? "" : "items-center"
      }`}
    >
      {navLinks?.map((group, index) => {
        return (
          <div key={index} className="flex flex-col gap-1">
            <div
              className={`overflow-hidden transition-all ${
                isExpanded ? "h-5" : "h-0"
              }`}
            >
              <p
                className={`overflow-hidden inline-block font-bold transition-all h-5 text-foreground/40 ${
                  isExpanded ? "w-52 px-2" : "w-0"
                }`}
              >
                {group.groupName}
              </p>
            </div>
            <div
              key={index}
              className={`flex flex-col gap-3 py-1  ${
                isExpanded ? "pe-2 ps-4" : ""
              }`}
            >
              {group.children?.map((link, index) => {
                const Icon = iconMap[link?.icon || ""];
                const active = location.includes(link.id);

                return (
                  <div
                    key={index}
                    className={`relative flex items-center py-2 
                    rounded-full cursor-pointer text-foreground/65 
                    transition-colors ${
                      active
                        ? "bg-gradient-to-tr from-primary/70 to-accent text-foreground font-bold"
                        : "hover:bg-primary/5 text-foreground"
                    } ${isExpanded ? "px-5 gap-2" : "px-2 w-fit"}`}
                    onClick={() => router.push(link.url)}
                  >
                    {Icon && <Icon />}
                    <span
                      className={`overflow-hidden transition-all ${
                        isExpanded ? "w-52" : "w-0"
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                );
              })}
            </div>
            {index !== navLinks.length - 1 && <hr />}
          </div>
        );
      })}
    </section>
  );
};

export default NavLinks;
