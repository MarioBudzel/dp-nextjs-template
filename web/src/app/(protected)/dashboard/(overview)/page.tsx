import Flex from "@/components/common/Flex";
import Loader from "@/components/ui/Loader";
import { getAllTextsByOwner } from "@/lib/text-actions";
import { Suspense } from "react";
import UserGreeting from "./components/UserGreeting";
import RecentFiles from "./components/RecentFiles";
import Editor from "@/components/common/RichTextEditor";
import Link from "next/link";

export default async function Page() {
  const texts = await getAllTextsByOwner();
  return (
    <main>
      <Suspense
        fallback={
          <Flex className="w-[100%] h-[100%] justify-center items-center">
            <Loader />
          </Flex>
        }
      >
        <div className="grid grid-cols-6 gap-4 gap-y-10">
          <UserGreeting texts={texts ?? []} />
          <Flex className="col-span-6 lg:col-span-3 p-5 gap-4 flex-col">
            <p className="font-lg text-primary font-bold">Picked files:</p>
            <RecentFiles texts={texts ?? []} />
          </Flex>
          <div className="col-span-6">
            <p className="text-lg text-primary mb-4 font-bold">
              Try out the rich text editor!
            </p>
            <Editor />
            <Flex className="items-center justify-between gap-2 w-full mt-3 px-2">
              <p className="text-sm text-primary italic">
                Want to save your work?
              </p>
              <Link
                href="/dashboard/text/create"
                className="transition-all duration-200 px-5 bg-primary shadow-md hover:bg-primary/80 text-primary-foreground rounded-full"
              >
                Create
              </Link>
            </Flex>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
