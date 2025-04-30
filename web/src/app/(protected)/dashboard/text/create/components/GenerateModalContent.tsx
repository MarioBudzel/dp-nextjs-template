"use client";
import Flex from "@/components/common/Flex";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AIGenerationTypes, AIPromptOptions } from "@/types";
import { useFormContext } from "react-hook-form";
import { TCreateTextForm } from "./CreateFormHandler";
import { cleanHTMLResponse, cn, isEmptyContent } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import React from "react";
import Toastify from "@/components/common/Toastify";
import { Editor } from "@tiptap/react";

const GenerateModalContent: React.FC<{
  onClose: (() => void) | undefined;
  setIsGenerating: React.Dispatch<React.SetStateAction<boolean>>;
  getPlainTextContent: (() => string) | undefined;
  setEditorContent: Editor["commands"]["setContent"] | undefined;
}> = ({ onClose, setIsGenerating, getPlainTextContent, setEditorContent }) => {
  const [promptType, setPropmtType] = React.useState<
    AIGenerationTypes | undefined
  >(undefined);
  const { watch, setValue, getValues } = useFormContext<TCreateTextForm>();
  const content = watch("content");
  const title = watch("title");
  const description = watch("description");

  const disabledFormat = Boolean(isEmptyContent(content));
  const disableOthers = Boolean(
    !title || isEmptyContent(content) || isEmptyContent(description ?? "")
  );

  const handleGenerate = async () => {
    setIsGenerating(true);

    if (promptType === AIGenerationTypes.FORMAT)
      return await handleFormatPropmt();
    if (promptType === AIGenerationTypes.EXPAND)
      return await handleExpandPropmt();
    if (promptType === AIGenerationTypes.REGENERATE)
      return await handleRegeneratePrompt();
  };

  const handleFormatPropmt = async () => {
    const promptOptions = new FormData();

    promptOptions.append(AIPromptOptions.TYPE, AIGenerationTypes.FORMAT);
    promptOptions.append(AIPromptOptions.TITLE, getValues("title"));
    promptOptions.append(
      AIPromptOptions.DESCRIPTION,
      getValues("description") ?? ""
    );
    promptOptions.append(
      AIPromptOptions.CONTENT,
      getPlainTextContent?.() ?? ""
    );

    try {
      const apiUrl = "/api/gpt/generate";
      const res = await fetch(apiUrl, {
        method: "POST",
        body: promptOptions,
      });

      if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
      const data = await res.json();
      const structuredData =
        data?.data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "<p>Sorry AI assisent seems to be offline. Please try again later. (CTRL+Z to return your content)</p>";

      setValue("content", cleanHTMLResponse(structuredData));
      setEditorContent?.(cleanHTMLResponse(structuredData));
      setIsGenerating(false);
    } catch (error) {
      setIsGenerating(false);
      Toastify.error({
        label: "Sorry there was an error with formatting! Try again!",
      });
    }
  };

  const handleExpandPropmt = async () => {
    const promptOptions = new FormData();

    promptOptions.append(AIPromptOptions.TYPE, AIGenerationTypes.EXPAND);
    promptOptions.append(AIPromptOptions.TITLE, getValues("title"));
    promptOptions.append(
      AIPromptOptions.DESCRIPTION,
      getValues("description") ?? ""
    );
    promptOptions.append(
      AIPromptOptions.CONTENT,
      getPlainTextContent?.() ?? ""
    );

    try {
      const apiUrl = "/api/gpt/generate";
      const res = await fetch(apiUrl, {
        method: "POST",
        body: promptOptions,
      });

      if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
      const data = await res.json();
      const structuredData =
        data?.data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "<p>Sorry AI assisent seems to be offline. Please try again later. (CTRL+Z to return your content)</p>";

      setValue("content", content + "\n" + cleanHTMLResponse(structuredData));
      setEditorContent?.(content + "\n" + cleanHTMLResponse(structuredData));
      setIsGenerating(false);
    } catch (error) {
      setIsGenerating(false);
      Toastify.error({
        label: "Sorry there was an error with formatting! Try again!",
      });
    }
  };

  const handleRegeneratePrompt = async () => {
    const promptOptions = new FormData();

    promptOptions.append(AIPromptOptions.TYPE, AIGenerationTypes.REGENERATE);
    promptOptions.append(AIPromptOptions.TITLE, getValues("title"));
    promptOptions.append(
      AIPromptOptions.DESCRIPTION,
      getValues("description") ?? ""
    );
    promptOptions.append(
      AIPromptOptions.CONTENT,
      getPlainTextContent?.() ?? ""
    );

    try {
      const apiUrl = "/api/gpt/generate";
      const res = await fetch(apiUrl, {
        method: "POST",
        body: promptOptions,
      });

      if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
      const data = await res.json();
      const structuredData =
        data?.data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "<p>Sorry AI assisent seems to be offline. Please try again later. (CTRL+Z to return your content)</p>";

      setValue("content", cleanHTMLResponse(structuredData));
      setIsGenerating(false);
      setEditorContent?.(cleanHTMLResponse(structuredData));
    } catch (error) {
      setIsGenerating(false);
      Toastify.error({
        label: "Sorry there was an error with formatting! Try again!",
      });
    }
  };

  return (
    <Flex className="flex-col gap-8">
      <RadioGroup
        style={{ margin: 0, padding: 0 }}
        onValueChange={(value) => setPropmtType(value as AIGenerationTypes)}
      >
        <div className="flex flex-col justify-end items-start gap-8">
          <Flex className="gap-2">
            <RadioGroupItem
              value={AIGenerationTypes.FORMAT}
              id="format"
              disabled={disabledFormat}
            />
            <Label
              htmlFor="format"
              className={cn(
                "cursor-pointer",
                disabledFormat ? "cursor-not-allowed text-muted-foreground" : ""
              )}
            >
              Format available content
              <span className="text-[10px] italic text-muted-foreground font-normal">
                {" "}
                (This only formats the text within the content field)
              </span>
            </Label>
          </Flex>
          <Flex className="gap-2">
            <RadioGroupItem
              value={AIGenerationTypes.EXPAND}
              id="expand"
              disabled={disableOthers}
            />
            <Label
              htmlFor="expand"
              className={cn(
                "cursor-pointer",
                disableOthers ? "cursor-not-allowed text-muted-foreground" : ""
              )}
            >
              Expand available content
              <span className="text-[10px] italic text-muted-foreground font-normal">
                {" "}
                (This will expand the content based on the provided title,
                description, and existing content)
              </span>
            </Label>
          </Flex>
          <Flex className="gap-2">
            <RadioGroupItem
              value={AIGenerationTypes.REGENERATE}
              id="regenerate"
              disabled={disableOthers}
            />
            <Label
              htmlFor="regenerate"
              className={cn(
                "cursor-pointer",
                disableOthers ? "cursor-not-allowed text-muted-foreground" : ""
              )}
            >
              Regenerate available content
              <span className="text-[10px] italic text-muted-foreground font-normal">
                {" "}
                (This will regenerate all available content based on the
                provided title, description, and existing content)
              </span>
            </Label>
          </Flex>
        </div>
      </RadioGroup>
      <Flex className="justify-end">
        <button
          disabled={disabledFormat || disableOthers}
          className="w-fit flex gap-2 items-center text-primary-foreground bg-primary shadow-sm px-2 rounded-full py-1 disabled:bg-primary/10 disabled:cursor-not-allowed"
          onClick={() => {
            handleGenerate();
            onClose?.();
          }}
        >
          <Sparkles
            size={16}
            className={cn(
              disableOthers || disabledFormat ? "text-muted-foreground" : ""
            )}
          />
          <p
            className={cn(
              "text-sm",
              disableOthers || disabledFormat ? "text-muted-foreground" : ""
            )}
          >
            Generate
          </p>
        </button>
      </Flex>
    </Flex>
  );
};

export default GenerateModalContent;
