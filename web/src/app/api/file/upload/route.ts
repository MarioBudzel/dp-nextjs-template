import api from "@/api/api";

import { NextResponse } from "next/server";

export const config = {
  api: { bodyParser: false }, // Disable built-in body parser
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const files = (Array.from(formData.values()) ?? []) as File[];

    if (files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }
    const filesFormData = new FormData();

    files.forEach((file) => filesFormData.append(file.name, file));

    const response = await api.post("/files/upload", filesFormData);

    return NextResponse.json({ filePath: response?.data?.filePath });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
