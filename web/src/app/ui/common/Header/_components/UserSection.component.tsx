import { useSession } from "next-auth/react";
import LogoutButton from "../../LogoutButton.component";
import { cn } from "@/lib/utils";

const UserSection: React.FC<{
  classname?: React.HTMLAttributes<HTMLDivElement>["className"];
}> = ({ classname }) => {
  const { data } = useSession();
  const user = data?.user;
  return (
    <section
      className={cn(
        "w-full flex flex-row-reverse justify-start items-center p-3 gap-2",
        classname
      )}
    >
      <LogoutButton />
      <div className="flex-shrink-0 w-10 h-10 bg-muted-foreground rounded-sm flex justify-center items-center">
        <p className="text-md font-bold">{`${user?.name?.split("")?.[0]}${
          user?.lastName?.split("")?.[0]
        }`}</p>
      </div>
      <div
        className={`flex flex-col overflow-hidden justify-center transition-all items-end leading-4`}
      >
        <h4 className="font-semibold">{`${user?.name} ${user?.lastName}`}</h4>
        <span className="text-sm">{user?.email}</span>
      </div>
    </section>
  );
};

export default UserSection;
