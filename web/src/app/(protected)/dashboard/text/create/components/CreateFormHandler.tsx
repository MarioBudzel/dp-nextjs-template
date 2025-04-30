"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import CreateTextForm from "./CreateTextForm";
import { RichTextValidation } from "@/schemas/schemas";
import React from "react";

type Props = {
  richText?: TCreateTextForm;
  toggleEdit?: () => void;
};

export type TCreateTextForm = {
  id?: string;
  title: string;
  description?: string;
  content: string;
  folderId?: string;
  owner?: string;
  createdAt?: string;
};

const CreateFormHandler: React.FC<Props> = ({ richText, toggleEdit }) => {
  const form = useForm<TCreateTextForm>({
    mode: "onChange",
    resolver: zodResolver(RichTextValidation),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      folderId: "",
      owner: "",
    },
  });

  const { reset } = form;

  React.useEffect(() => {
    if (richText) {
      reset(richText);
    }
  }, [richText, reset]);
  return (
    <FormProvider {...form}>
      <CreateTextForm toggleEdit={toggleEdit} />
    </FormProvider>
  );
};

export default CreateFormHandler;
