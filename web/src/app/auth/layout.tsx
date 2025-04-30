import Crumb from "../ui/common/Crumbs";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-background to-primary from-10% min-h-screen flex flex-col">
      <Crumb isBackOnly isHome />
      <div className="flex flex-col flex-grow gap-y-10 items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
