import { iconMap } from "@/data/iconMap";
import { MenuItem } from "@/types";
import { usePathname, useRouter } from "next/navigation";

const NavLinks: React.FC<{ navLinks: MenuItem[] }> = ({ navLinks }) => {
  const router = useRouter();
  const location = usePathname().slice(1);
  return (
    <section className={`flex-grow flex flex-col gap-2 py-4 w-full`}>
      {navLinks?.map((group, index) => {
        return (
          <div key={index} className="flex flex-col gap-1">
            <div className={`overflow-hidden w-52 mb-2 px-2`}>
              <span className="font-bold text-foreground/40">
                {group.groupName}
              </span>
            </div>
            <div key={index} className={`flex flex-col gap-3 py-1 pe-2 ps-4`}>
              {group.children?.map((link, index) => {
                const Icon = iconMap[link?.icon || ""];
                const active = location.includes(link.id);

                return (
                  <div
                    key={index}
                    className={`relative flex items-center py-2 
                      rounded-full cursor-pointer text-foreground/65 
                      transition-colors px-5 gap-2 ${
                        active
                          ? "bg-gradient-to-tr from-primary/70 to-accent text-foreground font-bold"
                          : "hover:bg-primary/5 text-foreground"
                      }`}
                    onClick={() => router.push(link.url)}
                  >
                    {Icon && <Icon />}
                    <span className={`overflow-hidden w-52`}>{link.label}</span>
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
