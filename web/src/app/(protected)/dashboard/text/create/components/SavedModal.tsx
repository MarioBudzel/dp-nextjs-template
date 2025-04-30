import Flex from "@/components/common/Flex";
import React from "react";
import { useFormContext } from "react-hook-form";
import { TCreateTextForm } from "./CreateFormHandler";
import { getTiptapStyles } from "@/lib/utils";

import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";
import BasicModal, { ModalTitle } from "@/components/common/BasicModal";
import { Sparkles } from "lucide-react";
import Toastify from "@/components/common/Toastify";
import { createRichText, updateRichText } from "@/lib/text-actions";
import { Editor } from "@tiptap/react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

type Props = {
  getHtmlText: (() => string) | undefined;
  setEditorContent: Editor["commands"]["setContent"] | undefined;
  toggleEdit?: () => void;
};

const SavedModal: React.FC<Props> = ({
  getHtmlText,
  setEditorContent,
  toggleEdit,
}) => {
  const { user } = useAuth();
  const { getValues, trigger, reset } = useFormContext<TCreateTextForm>();
  const [id, setId] = React.useState<string>("");
  const router = useRouter();

  const modalRef = React.useRef<{
    onClose: () => void;
    onOpen: () => void;
  }>(null);

  const handleSave = async (download?: boolean) => {
    if (!(await trigger())) {
      Toastify.error({ label: "Client validation failed!" });
      return;
    }

    try {
      const data = { ...getValues(), owner: user.id };

      if (getValues("id")) {
        await updateRichText(data);
        toggleEdit?.();
        if (download) generateHTMLFile();
        return;
      }

      const response = await createRichText(data);

      if (response.error) throw new Error(response.error);

      setId(response?.ritchTextId ?? "");
      modalRef?.current?.onOpen?.();

      if (download) generateHTMLFile();
    } catch (error) {
      console.error(error);
      Toastify.error({ label: "A mysterious error has occured" });
    }
  };

  const generateHTMLFile = async () => {
    const userContent = await prettier.format(getHtmlText?.() ?? "", {
      parser: "html",
      plugins: [parserHtml],
    });
    const tipTapStyles = getTiptapStyles();
    const htmlStructure = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dynamic HTML Download</title>
        <style>
            ${tipTapStyles}
        </style>
      </head>
      <body>
          ${userContent}
      </body>
    </html>`;

    const blob = new Blob([htmlStructure], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${getValues("title") ?? "file"}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };
  return (
    <React.Fragment>
      <Flex className="gap-5 items-center">
        <button
          className="flex gap-2 items-center py-1 rounded-full bg-primary/10 px-4 hover:bg-primary/20"
          onClick={() => handleSave(true)}
        >
          <p className="text-sm">Save & Download</p>
        </button>
        <button
          className="flex gap-2 items-center text-primary-foreground bg-primary shadow-sm px-4 rounded-full py-1"
          onClick={() => handleSave()}
        >
          <p className="text-sm">Save</p>
        </button>
      </Flex>
      <BasicModal
        rootProps={{
          dismissible: false,
        }}
        ref={modalRef}
        useBackdropEffects
        hideTrigger
        trigger={<></>}
        ContentProps={{
          className: "px-5",
        }}
      >
        <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
          <ModalTitle>
            <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
              <Sparkles size={16} />
              <p className="text-sm">Rich Text</p>
            </div>
          </ModalTitle>
          <p className="font-bold text-lg">
            🎉 Your Rich Text was succesfully saved!
          </p>
          <Flex className="w-full items-center justify-end gap-3">
            <button
              className="flex gap-2 items-center shadow-sm px-4 rounded-full py-1"
              onClick={() => {
                modalRef.current?.onClose?.();
                reset();
                setEditorContent?.("");
                setId("");
              }}
            >
              <p className="text-sm">Create New</p>
            </button>
            <button
              className="flex gap-2 items-center text-primary-foreground bg-primary shadow-sm px-4 rounded-full py-1"
              onClick={() => {
                modalRef.current?.onClose?.();
                router.push(`/dashboard/text/detail/${id}`);
              }}
            >
              <p className="text-sm">Detail</p>
            </button>
          </Flex>
        </div>
      </BasicModal>
    </React.Fragment>
  );
};

export default SavedModal;
