import Flex from "@/components/common/Flex";
import Helper from "@/components/common/Helper";

import Maintenance from "@/components/ui/Maintenance";

export default async function Page() {
  return (
    <Flex className="w-full h-full justify-center items-center flex-col gap-3">
      <Maintenance />
      <Helper className="max-w-fit">
        <p>This is just an example page.</p>
      </Helper>
    </Flex>
  );
}
