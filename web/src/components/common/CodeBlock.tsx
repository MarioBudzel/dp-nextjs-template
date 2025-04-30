"use client";
import { CopyIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight,
  materialDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import IconButton from "./IconButton";
import { CheckIcon } from "lucide-react";

type CodeBlockProps = {
  children: string;
  language?: string;
  rounded?: boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language,
  rounded,
}) => {
  const { theme } = useTheme();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className={
        rounded
          ? "rounded-t-lg rounded-b-lg shadow-md"
          : "rounded-b-lg shadow-md"
      }
    >
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? materialDark : materialLight}
        customStyle={{ margin: 0, fontSize: "0.8125rem" }}
      >
        {children}
      </SyntaxHighlighter>
      <IconButton
        variant="rounded"
        onClick={handleCopy}
        style={{ position: "absolute", top: 8, right: 8, color: "gray" }}
      >
        {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
      </IconButton>
    </div>
  );
};

export default CodeBlock;
