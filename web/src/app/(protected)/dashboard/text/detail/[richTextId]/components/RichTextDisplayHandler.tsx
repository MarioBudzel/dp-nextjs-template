"use client";

import Flex from "@/components/common/Flex";
import Loader from "@/components/ui/Loader";
import RichTextHeader from "./RichTextHeader";
import { useGetSingleUser } from "@/hooks/useUsers";
import useDisclosure from "@/hooks/useDisclosure";
import CreateFormHandler, {
  TCreateTextForm,
} from "../../../create/components/CreateFormHandler";

type Props = {
  richText: TCreateTextForm;
};

const RichTextDisplayHandler: React.FC<Props> = ({ richText }) => {
  const { isOpen: isEditing, onToggle: toggleEdit } = useDisclosure({
    defaultState: false,
  });

  const {
    isLoading: ownerLoading,
    isError: ownerError,
    users,
  } = useGetSingleUser(richText?.owner ?? "");

  return (
    <Flex className="flex-col gap-5 py-5">
      <RichTextHeader
        richText={richText}
        toggleEdit={toggleEdit}
        isEditing={isEditing}
      />
      <Flex className="justify-center">
        {!isEditing ? (
          <div
            className="tiptap max-w-3xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-card/95 px-5 py-5"
            dangerouslySetInnerHTML={{ __html: richText?.content ?? "" }}
          />
        ) : (
          <CreateFormHandler richText={richText} toggleEdit={toggleEdit} />
        )}
      </Flex>
      <Flex className="lg:justify-between items-center flex-col lg:flex-row gap-1 lg:gap-0">
        {ownerLoading ? (
          <Loader />
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              {ownerError
                ? "Error fetching owner"
                : `Owner: ${users?.name} ${users?.lastName}`}
            </p>
            <p className="text-sm text-muted-foreground">
              {`Created at: ${new Date(richText?.createdAt ?? "").toLocaleDateString("sk-SK")}`}
            </p>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default RichTextDisplayHandler;
