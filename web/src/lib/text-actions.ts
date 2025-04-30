"use server";

import { TCreateTextForm } from "@/app/(protected)/dashboard/text/create/components/CreateFormHandler";
import { RichTextValidation } from "@/schemas/schemas";
import { NextResponse } from "next/server";
import { db } from "./db";
import { revalidateTag, unstable_cache } from "next/cache";

export async function generateText(prompt: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL + "/api/ollama/generate";
    const res = await fetch(apiUrl, {
      method: "POST",
      body: prompt,
    });

    if (!res.ok) throw new Error(`API Error: ${res.statusText}`);

    return NextResponse.json({ success: true, response: res }).json();
  } catch (error) {
    return NextResponse.json(
      { success: false, response: error },
      { status: 500 }
    ).json();
  }
}

export async function createRichText(formData: TCreateTextForm) {
  const validatedFields = RichTextValidation.safeParse(formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Server side validation failed.",
    };
  }
  const data = validatedFields.data;

  try {
    const richText = await db.richText.create({ data });

    revalidateTag("richText");

    return NextResponse.json(
      { ritchTextId: richText.id },
      { status: 200 }
    ).json();
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create RichText", error: error },
      { status: 500 }
    ).json();
  }
}

export async function updateRichText(formData: TCreateTextForm) {
  const { id, createdAt, ...dataToCheck } = formData;
  const validatedFields = RichTextValidation.safeParse(dataToCheck);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Server side validation failed.",
    };
  }
  const data = validatedFields.data;

  try {
    const richText = await db.richText.update({ where: { id }, data });

    revalidateTag("richText");

    return NextResponse.json(
      { ritchTextId: richText.id },
      { status: 200 }
    ).json();
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create RichText", error: error },
      { status: 500 }
    ).json();
  }
}

export const getSingleText = unstable_cache(
  async (id: string) => {
    return await db.richText.findUnique({
      where: { id },
    });
  },
  ["richText"],
  { tags: ["richText"] }
);

export const getAllTextsByOwner = unstable_cache(
  async () => {
    const texts = await db.richText.findMany();

    const ownerIds = Array.from(new Set(texts.map((text) => text.owner)));

    const owners = await db.user.findMany({
      where: { id: { in: ownerIds } },
      select: {
        id: true,
        name: true,
        lastName: true,
        fullName: true,
        email: true,
        profilePicturePath: true,
      },
    });

    const ownersMap = new Map(owners.map((owner) => [owner.id, owner]));

    const groupTexts = texts.reduce(
      (acc, text) => {
        const owner = ownersMap.get(text.owner);

        if (!owner) return acc;

        const existingOwner = acc.find((group) => group.owner.id === owner.id);
        if (existingOwner) {
          existingOwner.texts.push(text);
        } else {
          acc.push({
            owner: {
              id: owner.id,
              name: owner.name ?? "",
              lastName: owner.lastName ?? "",
              fullName: owner.fullName ?? "",
              email: owner.email ?? "",
              profilePicturePath: owner.profilePicturePath ?? "",
            },
            texts: [text],
          });
        }

        return acc;
      },
      [] as {
        owner: {
          id: string;
          name: string;
          lastName: string;
          fullName: string;
          email: string;
          profilePicturePath: string;
        };
        texts: any[];
      }[]
    );

    return groupTexts;
  },
  ["richText"],
  { tags: ["richText"] }
);
