import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { message } = body;
  return Response.json({
    message: `Hello ${message}, your POST was successful!`,
  });
}
export async function GET(req: Request) {
  return Response.json({ message: "Hello GET from Next.js!" });
}
