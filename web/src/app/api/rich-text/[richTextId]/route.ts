import { db } from "@/lib/db";
import { NextResponse } from "next/server";

import * as cheerio from "cheerio";

function addClassToHtmlTags(htmlString: string, classname: string) {
  const $ = cheerio.load(htmlString);

  $("*").each(function () {
    const existingClass = $(this).attr("class") || "";
    $(this).attr("class", `${existingClass} ${classname}`.trim());
  });

  return $.html();
}

export async function GET(
  req: Request,
  { params }: { params: { richTextId: string } }
) {
  const richText = await db.richText.findUnique({
    where: { id: params.richTextId },
  });

  if (!richText)
    return NextResponse.json(
      { error: "Rich Text Not Found!" },
      { status: 404 }
    ).json();

  const updatedHTML = addClassToHtmlTags(richText.content, "tiptap");

  return NextResponse.json({ ...richText, content: updatedHTML });
}
