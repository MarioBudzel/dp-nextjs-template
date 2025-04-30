import Flex from "@/components/common/Flex";
import React from "react";
import DocsTitle from "../../components/DocsTitle";
import DashedDivider from "../../components/DashedDivider";
import Environment from "./Steps/Environment";
import Clone from "./Steps/Clone";
import Packages from "./Steps/Packages";
import NextInit from "./Steps/NextInit";
import PrismaInit from "./Steps/PrismaInit";
import Env from "./Steps/Env";
import Docker from "./Steps/Docker";
import AllSet from "./Steps/AllSetUp";

const Setup: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col pb-5">
      <DocsTitle>Setup</DocsTitle>
      <DashedDivider />
      <Environment />
      <DashedDivider />
      <Clone />
      <DashedDivider />
      <Packages />
      <DashedDivider />
      <NextInit />
      <DashedDivider />
      <PrismaInit />
      <DashedDivider />
      <Env />
      <DashedDivider />
      <Docker />
      <DashedDivider />
      <AllSet />
    </Flex>
  );
};

export default Setup;
