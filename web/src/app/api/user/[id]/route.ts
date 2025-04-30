import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = await db.user.findUnique({
    where: { id: params.id },
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

  if (!user)
    return NextResponse.json(
      { error: "User Not Found!" },
      { status: 404 }
    ).json();

  return NextResponse.json(user);
}
