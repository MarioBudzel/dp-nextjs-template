import { getAllUsers } from "@/lib/user-actions";
import UsersDisplay from "./components/UsersDisplay";
import { User } from "@/types";
import { Suspense } from "react";
import Flex from "@/components/common/Flex";
import Loader from "@/components/ui/Loader";

export default async function Page() {
  const users = await getAllUsers();
  return (
    <main className="w-full h-full">
      <Suspense
        fallback={
          <Flex className="w-[100%] h-[100%] justify-center items-center">
            <Loader />
          </Flex>
        }
      >
        <UsersDisplay users={users as User[]} />
      </Suspense>
    </main>
  );
}
