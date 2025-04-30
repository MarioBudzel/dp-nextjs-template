import { cn } from "@/lib/utils";
import { docsLinks } from "../data/links";
import { useDocsNavigation } from "../hooks/useDocsNavigation";

const Navigation: React.FC = () => {
  const { activeLink, setActiveLink } = useDocsNavigation();
  return (
    <div className="">
      {docsLinks.map((group, index) => (
        <div key={index}>
          <p className="rounded-full bg-primary/10 border border-primary/50 uppercase text-sm font-bold text-muted-foreground px-2 py-1 mb-3">
            {group.groupName}
          </p>
          <ul className="list-disc pl-10">
            {group.links.map((link) => (
              <li
                key={link.id}
                onClick={() => {
                  setActiveLink(link.id);
                }}
                className={cn(
                  "mb-2 text-sm text-muted-foreground cursor-pointer transition-all duration-200",
                  activeLink !== link.id
                    ? "hover:underline underline-offset-1"
                    : "font-bold text-primary"
                )}
              >
                {link.displayName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
