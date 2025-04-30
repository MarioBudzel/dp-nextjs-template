import { Suspense } from "react";
import Flex from "@/components/common/Flex";
import Loader from "@/components/ui/Loader";
import { getAllTextsByOwner } from "@/lib/text-actions";
import RichTextTableDisplay from "./components/RichTextTableDisplay";
import { RichText } from "@/types";

export default async function Page() {
  const texts = await getAllTextsByOwner();

  return (
    <main className="w-full h-full">
      <Suspense
        fallback={
          <Flex className="w-[100%] h-[100%] justify-center items-center">
            <Loader />
          </Flex>
        }
      >
        <RichTextTableDisplay
          richTexts={(texts ?? []) as unknown as RichText[]}
        />
      </Suspense>
    </main>
  );
}
