import { SessionProvider } from "next-auth/react";
import Sidebar, { SidebarContext } from "../ui/common/SideBar";
import Header from "../ui/common/Header";
import { AuthProvider } from "@/context/AuthContext";
import { SidebarProvider } from "@/context/SidebarContext";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <AuthProvider>
        <SidebarProvider>
          <div className="flex">
            <Sidebar />
            <section className="flex-grow overflow-x-hidden flex flex-col gap-1 h-dvh overflow-y-auto relative">
              <Header />
              <div className="p-5 flex-grow overflow-y-auto">{children}</div>
            </section>
          </div>
        </SidebarProvider>
      </AuthProvider>
    </SessionProvider>
  );
};

export default Layout;
