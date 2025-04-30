import Flex from "@/components/common/Flex";
import React from "react";
import DocsTitle from "../../components/DocsTitle";
import DashedDivider from "../../components/DashedDivider";
import DocsBody from "../../components/DocsBody";
import StyledText from "../../components/StyledText";
import Backend from "./Steps/Backend";
import NextFrontEnd from "./Steps/NextFrontEnds";
import NextBackEnd from "./Steps/NextBackEnd";

const Routing: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col pb-5">
      <DocsTitle>Routing</DocsTitle>
      <DocsBody useDiv>
        Routing inside the app is devided into two sections:
        <ul className="list-disc px-5">
          <li className="my-2">
            <b>External API</b>
          </li>
          <li className="my-2">
            <b>Next.js</b>
          </li>
        </ul>
        The <StyledText>Next.js</StyledText> part of the routing is subsequently
        split into two sections:
        <ul className="list-disc px-5">
          <li className="my-2">
            <b>API</b>
          </li>
          <li className="my-2">
            <b>Frontend</b> - handled by <StyledText>App Router</StyledText>
          </li>
        </ul>
      </DocsBody>
      <DashedDivider />
      <Backend />
      <DashedDivider />
      <NextFrontEnd />
      <DashedDivider />
      <NextBackEnd />
    </Flex>
  );
};

export default Routing;
