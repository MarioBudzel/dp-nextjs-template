import { getAllTextsByOwner, getSingleText } from "@/lib/text-actions";
import RichTextDisplayHandler from "./components/RichTextDisplayHandler";
import { Suspense } from "react";
import Flex from "@/components/common/Flex";
import Loader from "@/components/ui/Loader";
import { TCreateTextForm } from "../../create/components/CreateFormHandler";

export default async function Page({
  params,
}: {
  params: { richTextId: string };
}) {
  const { richTextId } = params;
  const data = await getSingleText(richTextId);

  return (
    <main className="w-full h-full">
      <Suspense
        fallback={
          <Flex className="w-[100%] h-[100%] justify-center items-center">
            <Loader />
          </Flex>
        }
      >
        <RichTextDisplayHandler richText={data as unknown as TCreateTextForm} />
      </Suspense>
    </main>
  );
}
