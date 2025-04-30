import Flex from "@/components/common/Flex";
import DashedDivider from "../../components/DashedDivider";
import Upload from "./Steps/Upload";
import Favicon from "./Steps/Favicon";

const Logo: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col pb-5">
      <Upload />
      <DashedDivider />
      <Favicon />
    </Flex>
  );
};

export default Logo;
