import NotFound from "@/components/ui/NotFound";

import Flex from "@/components/common/Flex";
import Helper from "@/components/common/Helper";

export default async function Page() {
  return (
    <Flex className="w-full h-full justify-center items-center flex-col gap-3">
      <NotFound />
      <Helper>
        <p>This is just an example page. For implementation check the docs.</p>
      </Helper>
    </Flex>
  );
}
