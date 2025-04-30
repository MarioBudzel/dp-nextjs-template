import NotFound from "@/components/ui/NotFound";

import Flex from "@/components/common/Flex";
import Helper from "@/components/common/Helper";
import NoPermission from "@/components/ui/NoPermission";

export default async function Page() {
  return (
    <Flex className="w-full h-full justify-center items-center flex-col gap-3">
      <NoPermission />
      <Helper className="max-w-fit">
        <p>This is just an example page.</p>
      </Helper>
    </Flex>
  );
}
