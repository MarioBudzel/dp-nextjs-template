"use client";
import CodeBlock from "@/components/common/CodeBlock";
import Flex from "@/components/common/Flex";
import UserProfilePicture from "@/components/ui/UserProfilePicture";
import React from "react";
import PropsWrapper from "../../components/PropsWrapper";
import { userProfilePictureProps } from "../../data/componentProps";
import DocsFooter from "../../components/DocsFooter";

const ToastifyComponent: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFile = (files: FileList | null) => {
    if (!files) return;
    const file = files?.[0];

    if (!file) return;

    Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    setFile(file);
  };
  return (
    <Flex className="p-5 flex-col items-center">
      <Flex className="max-w-screen-md w-[100%] gap-16 flex-col">
        <div>
          <p className="text-xl text-primary font-bold mb-2">Import</p>
          <CodeBlock
            language="tsx"
            rounded
          >{`import UserProfilePicture from "@/components/ui/UserProfilePicture";`}</CodeBlock>
        </div>
        <div>
          <p className="text-xl text-primary font-bold">User Profile Picture</p>
          <p className="text-muted-foreground">
            Shows user&apos;s profile picture
          </p>
          <Flex className="flex-col w-[100%] gap-0 mt-3">
            <Flex className="border border-muted rounded-t-lg p-2 shadow-md w-[100%] justify-center gap-4 items-center">
              <div className="max-h-fit">
                <UserProfilePicture
                  uploader
                  //@ts-expect-error Will be there
                  imageUrl={file?.preview}
                  size="small"
                  onFileUploaded={handleFile}
                />
              </div>
              <div className="max-h-fit">
                <UserProfilePicture
                  size="small"
                  imageUrl="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
                />
              </div>
              <UserProfilePicture imageUrl="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg" />
            </Flex>
            <CodeBlock language="tsx">{`"use client";
import Flex from "@/components/common/Flex";
import UserProfilePicture from "@/components/ui/UserProfilePicture";
import React from "react";

const Example = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFile = (files: FileList | null) => {
    if (!files) return;
    const file = files?.[0];

    if (!file) return;

    Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    setFile(file);
  };

  return (
    <>
      <div className="max-h-fit">
        <UserProfilePicture
            uploader
            imageUrl={file?.preview}
            size="small"
            onFileUploaded={handleFile}
        />
      </div>
      <div className="max-h-fit">
        <UserProfilePicture
            size="small"
            imageUrl="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
        />
      </div>
      <UserProfilePicture imageUrl="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg" />
    </>
  );
};

export default Example;`}</CodeBlock>
          </Flex>
        </div>
        <PropsWrapper props={userProfilePictureProps} />
        <DocsFooter />
      </Flex>
    </Flex>
  );
};

export default ToastifyComponent;
