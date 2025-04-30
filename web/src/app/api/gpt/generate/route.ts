import { AIGenerationTypes } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const title = Object.fromEntries(formData).title;
    const description = Object.fromEntries(formData).description;
    const content = Object.fromEntries(formData).content;
    const promptType = Object.fromEntries(formData).type;

    const typeBasedPrompts: { [Key in AIGenerationTypes]?: string } = {
      format: `You are an AI that formats text into structured HTML structure without HTML document. Use only the following HTML tags: <h1>, <h2>, <h3>, <h4>, <p>, <ul>, <ol>, <li>, <code>, <mark>, <blockquote>, <strong>, <em>, <s>, and <u>. You may include inline CSS styles for 'text-align' but avoid excessive styling.
      Only return valid HTML.
      Detect language and use the language in your response.
      Return only valid HTML—do not include markdown syntax, backticks, or any other non-HTML formatting. Ensure that the content remains well-structured and readable. Format the following content into proper HTML: ${content}`,
      expand: `You are an AI content enhancer that expands and structures text into a well-formatted HTML structure without HTML document. Given a title, description, and content, generate a detailed and engaging expansion while preserving coherence, do not use return any of the original content.
      Use only the following HTML tags: <h1>, <h2>, <h3>, <h4>, <p>, <ul>, <ol>, <li>, <code>, <mark>, <blockquote>, <strong>, <em>, <s>, and <u>. You may include inline CSS styles for 'text-align' but avoid excessive styling.
      Do not include markdown formatting, backticks, or non-HTML content. Only return valid HTML.
      Detect language and use the language in your response.
      Do not repeat or reuse the original content. Instead, generate a fresh, expanded version based on the given title and description. With maximum of 10000 characters. Start with <hr> tag to separate the new content.
      Expand and structure the content appropriately:
      Title: ${title}
      Description: ${description}
      Content to expand: ${content}`,
      regenerate: `You are an AI content rewriter that restructures and enhances text into a well-formatted HTML structure without an HTML document wrapper. Given a title, description, and content, regenerate the content while maintaining its original meaning, improving clarity, and enhancing readability.
      Use only the following HTML tags: <h1>, <h2>, <h3>, <h4>, <p>, <ul>, <ol>, <li>, <code>, <mark>, <blockquote>, <strong>, <em>, <s>, and <u>. You may include inline CSS styles for 'text-align' but avoid excessive styling.
      Do not include markdown formatting, backticks, or non-HTML content. Only return valid HTML.
      Ensure the output remains engaging, structured, and well-formed.
      Detect language and use the language in your response.
      Regenerate and refine the content appropriately:
      Title: ${title}
      Description: ${description}
      Content to regenerate: ${content}`,
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: typeBasedPrompts[promptType as AIGenerationTypes],
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

//"https://api.aimlapi.com/v1/chat/completions",

/* model: "gpt-4o-mini",
          max_tokens: 1000,
          n: 1,
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant that generates clean, structured HTML for content. Only use the following HTML tags: <h1>, <h2>, <h3>, <h4>, <p>, <strong>, <em>. You may include some inline CSS styles like 'color', 'font-size', and 'font-weight', but avoid excessive styles. Please do not include any non-HTML content or instructions. return as a json object with formatted as key and the html structure as a string value and do not use any \\n symbols",
            },
            {
              role: "user",
              content:
                "Please generate the HTML structure for the following content: 'The importance of Artificial Intelligence in today's world cannot be overstated. It is shaping industries, improving efficiencies, and revolutionizing various aspects of life.'",
            },
          ],
          stream: false,
          temperature: 0.7,
          top_p: 1,
          presence_penalty: 0,
          frequency_penalty: 0,
          response_format: {
            type: "json_object",
          }, */
