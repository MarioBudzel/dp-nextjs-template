"use client";

import LayoutSwitcher from "./LayoutSwitcher";

import Flex from "@/components/common/Flex";
import { User } from "@/types";
import UserCardFull from "@/components/common/UserCard/UserCardFull";
import React from "react";
import UserCardCompact from "@/components/common/UserCard/UserCardCompact";
import UsersTable from "./UsersTable";

type Props = {
  users: User[];
};

const UsersDisplay: React.FC<Props> = ({ users }) => {
  const [position, setPosition] = React.useState<number>(0);

  const updateParentPosition = (position: number) => {
    setPosition(position);
  };

  const switcherRef = React.useRef<{ getPosition: () => number }>(null);

  return (
    <Flex className="gap-8 flex-col h-full w-full">
      <Flex className="justify-end px-4 w-full h-fit">
        <LayoutSwitcher
          ref={switcherRef}
          updateParentPosition={updateParentPosition}
        />
      </Flex>
      <Flex className="gap-8 flex-wrap">
        {position < 2
          ? users?.map((user, index) =>
              position === 0 ? (
                <UserCardFull key={index} user={user} />
              ) : position === 1 ? (
                <UserCardCompact key={index} user={user} />
              ) : null
            )
          : null}
        {position === 2 ? <UsersTable users={users} /> : null}
      </Flex>
    </Flex>
  );
};

export default UsersDisplay;
