import Flex from "@/components/common/Flex";
import Helper from "@/components/common/Helper";
import Error from "@/components/ui/Error";

export default async function Page() {
  return (
    <Flex className="w-full h-full justify-center items-center flex-col gap-3">
      <Error />
      <Helper>
        <p>This is just an example page. For implementation check the docs.</p>
      </Helper>
    </Flex>
  );
}
