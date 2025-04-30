"use client";
import Flex from "@/components/common/Flex";
import NotFound from "@/components/ui/NotFound";
import { useRouter } from "next/navigation";

const DetailNotFound: React.FC = () => {
  const router = useRouter();
  return (
    <Flex className="w-full h-dvh justify-center items-center flex-col gap-3">
      <NotFound />
      <h1 className="max-w-[300px] text-center font-bold mb-8">
        It seems like the page you are looking for does not exist!
      </h1>
      <button
        className="px-5 py-1 rounded-full bg-primary text-primary-foreground capitalize font-bold"
        onClick={() => router.push("/")}
      >
        Take me home
      </button>
    </Flex>
  );
};

export default DetailNotFound;
