import { SectionProvider } from "@/context/SectionContext";
import LandingPageNavbar from "./_components/Navbar";
import { DocsProvider } from "./_components/Documentation/context/DocsNAvigationContext";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col scroll-smooth">
      <SectionProvider>
        <DocsProvider>
          <LandingPageNavbar />
          {children}
        </DocsProvider>
      </SectionProvider>
    </div>
  );
};

export default Layout;
