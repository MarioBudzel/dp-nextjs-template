"use client";

import LogoutButton from "../../LogoutButton.component";
import { useSession } from "next-auth/react";

type Props = {
  isExpanded: boolean;
};

const UserSection: React.FC<Props> = ({ isExpanded }) => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <section className="w-full border-t flex p-3">
      <div className="flex-shrink-0 w-12 h-12 bg-muted-foreground rounded-lg flex justify-center items-center">
        <p className="text-md font-bold">{`${user?.name?.split("")?.[0]}${
          user?.lastName?.split("")?.[0]
        }`}</p>
      </div>
      <div
        className={`flex overflow-hidden justify-between transition-all items-center  ${
          isExpanded ? "w-full" : "w-0"
        }`}
      >
        <div className="leading-4">
          <h4 className="font-semibold">{`${user?.name} ${user?.lastName}`}</h4>
          <span className="text-sm">{user?.email}</span>
        </div>
        <LogoutButton />
      </div>
    </section>
  );
};

export default UserSection;
