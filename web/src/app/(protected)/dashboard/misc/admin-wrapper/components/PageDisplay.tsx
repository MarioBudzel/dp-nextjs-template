"use client";
import React from "react";
import TextToggle from "../../components/TextToggle";
import Flex from "@/components/common/Flex";
import Helper from "@/components/common/Helper";
import NoPermission from "@/components/ui/NoPermission";

const PageDisplay: React.FC = () => {
  const [role, setRole] = React.useState<string>("admin");
  return (
    <Flex className="w-full h-full flex-col gap-5 items-center">
      <Helper className="max-w-fit">
        This is only an example page. For implementation check the docs
      </Helper>
      <Flex className=" justify-center">
        <TextToggle
          text1="Admin"
          text2="User"
          onValueChanged={() =>
            setRole((prev) => (prev === "admin" ? "user" : "admin"))
          }
        />
      </Flex>
      {role === "admin" ? (
        <p className="text-3xl text-primary font-bold">
          This page can only be seen by an admin!
        </p>
      ) : (
        <Flex className="max-h-[700px] flex-col justify-center items-center">
          <NoPermission />
          <p className="text-3xl text-primary font-bold">
            Oh no! You do not have permission to see this page!
          </p>
        </Flex>
      )}
    </Flex>
  );
};

export default PageDisplay;
