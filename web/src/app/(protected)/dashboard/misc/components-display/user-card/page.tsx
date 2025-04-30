"use client";

import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import Helper from "@/components/common/Helper";
import UserCardCompact from "@/components/common/UserCard/UserCardCompact";
import UserCardFull from "@/components/common/UserCard/UserCardFull";
import { Role } from "@prisma/client";
import PropsWrapper from "../../components/PropsWrapper";
import { userCardFullProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const user = {
  id: "12345",
  email: "johndoe@example.com",
  isAdmin: true,
  name: "John",
  lastName: "Doe",
  fullName: "John Doe",
  role: Role.RW,
  profilePicturePath: "uploads/bombardino-1743441593523.jpg",
};

const UserCardsShowcase: React.FC = () => {
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <Helper colorScheme="info">
          Edit and remove buttons are included but disabled for this
          presentation.
        </Helper>
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import UserCardFull from "@/components/common/UserCard/UserCardFull";`}</CodeBlock>
        </div>
        <div className="w-full max-w-screen-md">
          <p className="text-xl text-primary font-bold">User Card Full</p>
          <p className="text-muted-foreground">
            Detailed user card with full information.
          </p>
          <Flex className="border border-muted rounded-t-lg p-4 shadow-md w-full justify-center mt-3">
            <UserCardFull customDisableButtons user={user} />
          </Flex>
          <CodeBlock language="tsx">
            {`const user = {
  id: "12345",
  email: "johndoe@example.com",
  isAdmin: true,
  name: "John",
  lastName: "Doe",
  fullName: "John Doe",
  role: Role.ADMIN,
  profilePicturePath: "path/to/profile.jpg",
};

<UserCardFull user={user} />`}
          </CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import UserCardCompact from "@/components/common/UserCard/UserCardCompact";`}</CodeBlock>
        </div>
        <div className="w-full max-w-screen-md">
          <p className="text-xl text-primary font-bold">User Card Compact</p>
          <p className="text-muted-foreground">
            Compact user card with minimal information.
          </p>
          <Flex className="border border-muted rounded-t-lg p-4 shadow-md w-full justify-center mt-3">
            <UserCardCompact customDisableButtons user={user} />
          </Flex>
          <CodeBlock language="tsx">{`<UserCardCompact user={user} />`}</CodeBlock>
        </div>
        <PropsWrapper props={userCardFullProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default UserCardsShowcase;
