"use server";
import { NextResponse } from "next/server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { db } from "./db";
import { getUser } from "@/data/user";

import { z } from "zod";
import { AdminCreate, AdminEdit } from "@/schemas/account";

import { revalidateTag, unstable_cache } from "next/cache";

function hashPassword(password: string) {
  const salt = require("crypto").randomBytes(16).toString("hex");
  const hashed = require("crypto")
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");

  return { salt: salt, hashed: hashed };
}

export async function createUser(
  formData: Partial<z.infer<typeof AdminCreate>>
) {
  const validatedFields = AdminCreate.safeParse(formData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Chýbajúce polia. Užívateľa sa nepodarilo vytvoriť.",
    };
  }

  const { password, ...rest } = validatedFields.data;
  const { salt, hashed } = hashPassword(password);

  try {
    const existingUser = await getUser(rest.email);
    if (existingUser)
      return NextResponse.json({
        success: false,
        message: "Užívateľ už existuje",
      }).json();

    const data = {
      ...rest,
      password: hashed,
      salt: salt,
    };
    const user = await db.user.create({ data: data });
    revalidateTag("Users");
    return NextResponse.json({ success: true, user: user }).json();
  } catch (error) {
    return NextResponse.json({ success: false, error: error }).json();
  }
}

export async function login(formData: { email: string; password: string }) {
  try {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return JSON.stringify(error);
      }
    }
    throw error;
  }
}

export const getAllUsers = unstable_cache(
  async () => {
    return await db.user.findMany();
  },
  ["Users"],
  { tags: ["Users"] }
);

export const getSigleUser = unstable_cache(
  async (id: string) => {
    return await db.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true,
        isAdmin: true,
        profilePicturePath: true,
        fullName: true,
        name: true,
        lastName: true,
      },
    });
  },
  ["Users"],
  { tags: ["Users"] }
);

export async function updateUser(
  formData: Partial<z.infer<typeof AdminCreate>> & { id: string }
) {
  const { id, profilePicture, ...dataToCheck } = formData;
  const validatedFields = AdminEdit.safeParse(dataToCheck);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Server side validation failed.",
    };
  }
  const data = validatedFields.data;

  const { salt, hashed } = hashPassword(data.password);
  const { password, ...rest } = data;

  const updateData = {
    ...rest,
    ...(password ? { password: hashed, salt: salt } : {}),
  };

  try {
    const user = await db.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        fullName: true,
        email: true,
        isAdmin: true,
        profilePicturePath: true,
        role: true,
        name: true,
        lastName: true,
      },
    });

    revalidateTag("Users");

    return NextResponse.json({ user }, { status: 200 }).json();
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create RichText", error: error },
      { status: 500 }
    ).json();
  }
}

export async function removeUser(userId: string) {
  if (!userId) return;

  try {
    await db.user.delete({ where: { id: userId } });
    revalidateTag("Users");
    return NextResponse.json({ message: "success" }, { status: 200 }).json();
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create RichText", error: error },
      { status: 500 }
    ).json();
  }
}
