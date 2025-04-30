import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const baseUrl = process.env.NEXT_PUBLIC_NGINX_BASE_URL;

export const getBaseURL = () => {
  return baseUrl ?? "Nope";
};

export const getTiptapStyles = () => {
  let styles = "";
  Array.from(document.styleSheets).forEach((sheet) => {
    try {
      Array.from(sheet.cssRules).forEach((rule) => {
        if (rule.cssText.includes(".tiptap")) {
          styles += rule.cssText + "\n";
        }
      });
      styles = styles.replaceAll(".tiptap", "");
    } catch (e) {
      console.warn("Could not access stylesheet", e);
    }
  });
  return styles;
};

export function cleanHTMLResponse(responseText: string) {
  if (responseText.startsWith("```html") && responseText.endsWith("```")) {
    return responseText.slice(7, -3).trim();
  }
  return responseText.trim();
}

export function isEmptyContent(content: string) {
  if (content.trim() === "") {
    return true;
  }

  const div = document.createElement("div");
  div.innerHTML = content;

  const isEmpty = Array.from(div.childNodes).every((node) =>
    node.nodeType === 3
      ? node?.textContent?.trim() === ""
      : //@ts-expect-error innerHTML will exits
        node?.innerHTML?.trim() === ""
  );

  return isEmpty;
}
