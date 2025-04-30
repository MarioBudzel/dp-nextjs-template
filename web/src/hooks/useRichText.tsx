"use client";

import { TCreateTextForm } from "@/app/(protected)/dashboard/text/create/components/CreateFormHandler";
import useSWR from "swr";

import DOMPurify from "dompurify";

export const richTextFetcher = async (url: string) => {
  const res = await fetch(url, { next: { tags: ["richText"] } });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const useGetSingleRichText = (richTextId: string) => {
  const { data, error, mutate } = useSWR(
    `/api/rich-text/${richTextId}`,
    richTextFetcher
  );

  const typedData = data as TCreateTextForm;
  const sanitizedData = {
    ...typedData,
    content: DOMPurify.sanitize(typedData?.content),
  };

  return {
    richText: sanitizedData ?? undefined,
    isLoading: (!error && !data) as boolean,
    isError: error,
    mutate,
  };
};
