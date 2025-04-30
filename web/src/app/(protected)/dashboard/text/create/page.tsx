import Flex from "@/components/common/Flex";
import CreateFormHandler from "./components/CreateFormHandler";
import { TriangleAlert } from "lucide-react";

export default async function Page() {
  return (
    <main className="grid grid-cols-12 gap-5">
      <div className="col-span-12 xl:col-span-10">
        <CreateFormHandler />
      </div>
      <Flex className="border-l-2 border-secondary flex-col px-5 col-span-12 xl:col-span-2 xl:order-1 order-first">
        <Flex className="gap-2 border-b-primary/20 border-dashed border-b-2 pb-5">
          <TriangleAlert className="text-primary" />
          <h2 className="text-primary font-bold">Notice</h2>
        </Flex>
        <p className="pt-5 text-secondary-foreground">
          The AI helper might not be available right now. If that is the case,
          please try again later! Meanwhile you can try out our{" "}
          <strong>markdown (MD)</strong> syntax support!
        </p>
      </Flex>
    </main>
  );
}
