"use client";
import { Editor as EditorType } from "@tiptap/react";
import Flex from "@/components/common/Flex";
import { Controller, useFormContext } from "react-hook-form";
import { TCreateTextForm } from "./CreateFormHandler";
import FormControl from "@/app/ui/common/Form/FormControl";
import { Input } from "@/components/ui/input";
import Editor from "@/components/common/RichTextEditor";
import React from "react";
import { Loader2, Sparkles } from "lucide-react";
import BasicModal from "@/components/common/BasicModal";
import { DialogTitle } from "@radix-ui/react-dialog";
import GenerateModalContent from "./GenerateModalContent";
import SavedModal from "./SavedModal";

type Props = {
  toggleEdit?: () => void;
};

const CreateTextForm: React.FC<Props> = ({ toggleEdit }) => {
  const [generating, setGenerating] = React.useState<boolean>(false);
  const { control, watch, getValues } = useFormContext<TCreateTextForm>();

  const content = watch("content");
  const textId = watch("id");

  const editorRef = React.useRef<{
    getPlainText: () => string;
    getHtmlText: () => string;
    setEditorContent: EditorType["commands"]["setContent"] | undefined;
  }>(null);
  const modalRef = React.useRef<{
    onClose: () => void;
    onOpen: () => void;
  }>(null);

  React.useEffect(() => {
    if (textId) editorRef.current?.setEditorContent?.(getValues("content"));
  }, [textId, getValues]);

  return (
    <Flex className="w-full h-fit flex-col gap-1 last:gap-0">
      <FormControl isRequired formularPath="title" title="Title">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <Input
              disabled={generating}
              value={value}
              onChange={onChange}
              placeholder="eg. My Thesis Project..."
            />
          )}
        />
      </FormControl>
      <FormControl formularPath="description" title="Description">
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <Flex className="flex-col items-end gap-1 w-full">
              <Input
                disabled={generating}
                value={value}
                maxLength={90}
                onChange={onChange}
                placeholder="eg. The Greatest Template Ever..."
              />
              <p className="text-sm text-muted-foreground">{`${value?.length}/90`}</p>
            </Flex>
          )}
        />
      </FormControl>
      <FormControl formularPath="content" title="Content">
        <Controller
          control={control}
          name="content"
          render={({ field: { onChange } }) => (
            <Editor
              disabled={generating}
              ref={editorRef}
              onChange={onChange}
              value={content}
            />
          )}
        />
      </FormControl>
      <div className="grid grid-cols-12 gap-5">
        <Flex className="col-span-12 xl:col-span-6 gap-5 items-center justify-center xl:justify-start">
          <Flex className="gap-2 items-center">
            <p className="text-[11px] text-muted-foreground">Need help?</p>
            <BasicModal
              disabledTrigger={generating}
              ref={modalRef}
              useBackdropEffects
              trigger={
                <div className="flex gap-2 items-center text-primary-foreground bg-primary shadow-sm px-2 rounded-full py-1">
                  {generating ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Sparkles size={16} />
                  )}
                  <p className="text-sm">Generate</p>
                </div>
              }
              ContentProps={{
                className: "px-5",
              }}
            >
              <div className="w-full grow flex flex-col shadow-lg bg-card/75 backdrop-blur-sm p-5 gap-8 rounded-xl text-start max-w-screen-sm">
                <DialogTitle>
                  <div className="flex gap-2 items-center shadow-sm px-2 rounded-full py-1">
                    <Sparkles size={16} />
                    <p className="text-sm">Generate</p>
                  </div>
                </DialogTitle>
                <GenerateModalContent
                  getPlainTextContent={editorRef.current?.getPlainText}
                  setIsGenerating={setGenerating}
                  onClose={modalRef.current?.onClose}
                  setEditorContent={editorRef.current?.setEditorContent}
                />
              </div>
            </BasicModal>
          </Flex>
        </Flex>
        <Flex className="col-span-12 xl:col-span-6 gap-5 items-center xl:justify-end justify-center">
          <SavedModal
            toggleEdit={toggleEdit}
            getHtmlText={editorRef?.current?.getHtmlText}
            setEditorContent={editorRef.current?.setEditorContent}
          />
        </Flex>
      </div>
    </Flex>
  );
};

export default CreateTextForm;
