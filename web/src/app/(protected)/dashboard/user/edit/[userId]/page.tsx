import { getSigleUser } from "@/lib/user-actions";
import EditUser from "./components/EditUser";
import Flex from "@/components/common/Flex";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader";
import { User } from "@prisma/client";

export default async function Page({ params }: { params: { userId: string } }) {
  const data = await getSigleUser(params.userId);
  return (
    <main className="w-full h-full">
      <Suspense
        fallback={
          <Flex className="w-[100%] h-[100%] justify-center items-center">
            <Loader />
          </Flex>
        }
      >
        <EditUser user={data as unknown as User} />
      </Suspense>
    </main>
  );
}
