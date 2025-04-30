"use client";

import Flex from "@/components/common/Flex";
import { TCreateTextForm } from "../../../create/components/CreateFormHandler";
import { useAuth } from "@/context/AuthContext";

type Props = {
  richText: TCreateTextForm | undefined;
  toggleEdit: () => void;
  isEditing: boolean;
};

const RichTextHeader: React.FC<Props> = ({
  richText,
  toggleEdit,
  isEditing,
}) => {
  const { user } = useAuth();
  return (
    <Flex className="w-full justify-between items-center px-5 py-5 flex-col md:flex-row gap-4 md:gap-0">
      <Flex className="flex-col items-center md:items-start">
        <h1 className="font-bold text-2xl">{richText?.title}</h1>
        <p className="text-muted-foreground text-md">{richText?.description}</p>
      </Flex>
      {user.id === richText?.owner || user.isAdmin ? (
        !isEditing ? (
          <button
            className="py-1 px-5 bg-primary font-bold transition-all duration-200 hover:bg-primary/30 rounded-full shadow-lg"
            onClick={toggleEdit}
          >
            Edit
          </button>
        ) : (
          <button
            className="py-1 px-5 bg-accent font-bold transition-all duration-200 hover:bg-accent/30 rounded-full shadow-lg"
            onClick={toggleEdit}
          >
            Cancel edit
          </button>
        )
      ) : null}
    </Flex>
  );
};

export default RichTextHeader;
