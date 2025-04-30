"use client";
import Flex from "@/components/common/Flex";
import HorizontalScrollBox from "@/components/ui/HorizontalScrollBox";
import { useAuth } from "@/context/AuthContext";
import { RichText } from "@/types";
import { FileType } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  texts: RichText[];
};

const RecentFiles: React.FC<Props> = ({ texts }) => {
  const { user } = useAuth();
  const router = useRouter();
  const ownedTexts =
    texts.find((text) => text.owner.id === user?.id)?.texts.slice(0, 3) ??
    ([] as RichText["texts"]);

  return (
    <>
      <HorizontalScrollBox fadeColor="background">
        {ownedTexts.map((text) => (
          <div
            key={text.id}
            className="border border-primary/50 rounded-lg shadow-sm p-5 flex gap-3 shrink-0"
          >
            <FileType className="text-secondary-foreground" size={50} />
            <Flex className="flex-col gap-1">
              <p
                className="text-lg font-bold hover:underline hover:cursor-pointer"
                onClick={() => router.push(`/dashboard/text/detail/${text.id}`)}
              >
                {text.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {text.description}
              </p>
            </Flex>
          </div>
        ))}
      </HorizontalScrollBox>
      <Flex className="w-full justify-end">
        <p
          className="text-sm text-primary font-bold hover:underline hover:cursor-pointer"
          onClick={() => router.push(`/dashboard/text/list`)}
        >
          View all
        </p>
      </Flex>
    </>
  );
};

export default RecentFiles;
