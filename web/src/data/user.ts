import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function checkPassword(
  password: string,
  hashed: string | undefined,
  salt: string | undefined
) {
  const hashedPassword = require("crypto")
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return hashed === hashedPassword;
}

export async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) return null;
    return { ...user };
  } catch (error) {
    return null;
  }
}

export async function getUserById(id: string) {
  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });
  return { ...user };
}
