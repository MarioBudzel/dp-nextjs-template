"use client";

import Flex from "@/components/common/Flex";
import { useSections } from "@/context/SectionContext";

import React from "react";
import { useInView } from "react-intersection-observer";
import { DocsProvider } from "./context/DocsNAvigationContext";
import Navigation from "./components/Navigation";
import Introduction from "./Pages/introduction";
import { useDocsNavigation } from "./hooks/useDocsNavigation";
import { componentMap } from "./data/componentMap";

const DocsLayout: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useSections();
  const { activeLink } = useDocsNavigation();

  React.useEffect(() => {
    if (inView) {
      setActiveSection("docs-section");
      history.pushState(null, "", "#docs");
    }
  }, [inView, setActiveSection]);
  return (
    <Flex ref={ref} id="docs" className="h-[100dvh] max-h-[100dvh] w-full">
      <Flex
        className="flex-col h-full max-h-full w-[300px] hidden sm:flex overflow-y-auto px-5"
        style={{ paddingTop: "calc(1.25rem + 80px)" }}
      >
        <Navigation />
      </Flex>
      <Flex className="bg-background grow max-h-[100%] overflow-y-auto">
        <Flex
          className="px-5 flex-col items-center w-full"
          style={{ paddingTop: "calc(1.25rem + 80px)" }}
        >
          <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
            {componentMap[activeLink]}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DocsLayout;
