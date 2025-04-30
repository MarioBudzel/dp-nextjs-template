import { exec } from "child_process";

import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    console.log("Starting reseed...");

    revalidateTag("richText");
    revalidateTag("Users");

    exec("npx prisma db seed", (error) => {
      if (error) {
        return NextResponse.json(
          { message: "Seeding error", error: error },
          { status: 500 }
        );
      }
    });

    return NextResponse.json(
      { message: "Reseed in progress" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reseed error:", error);
    return NextResponse.json({ message: "Reseed failed" }, { status: 500 });
  }
}
