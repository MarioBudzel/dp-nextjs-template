"use client";
import { Editor as EditorType, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Typography from "@tiptap/extension-typography";
import RichTextEditor from "./components/RichTextEditor";
import TextAlign from "@tiptap/extension-text-align";
import Toolbar from "./components/Toolbar";
import React from "react";
import useDisclosure from "@/hooks/useDisclosure";

type Props = {
  value?: string;
  onChange?: (text: string) => void;
  disabled?: boolean;
};

const Editor = React.forwardRef<
  {
    getPlainText: () => string;
    getHtmlText: () => string;
    setEditorContent: (content: string) => void;
  },
  Props
>((props, ref) => {
  const { isOpen: spellCheck, onToggle: toggleSpellCheck } = useDisclosure({
    defaultState: false,
  });
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading,
      Highlight,
      Typography,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: props?.value,
    editorProps: {
      attributes: {
        class: "px-4 py-4 min-h-[350px] bg-transparent focus:outline-none",
        spellCheck: `${spellCheck}`,
      },
    },
    onUpdate({ editor }) {
      props?.onChange?.(editor.getHTML());
    },
  });

  React.useImperativeHandle(ref, () => ({
    getPlainText: () => {
      return editor?.getText() || "";
    },
    getHtmlText: () => {
      return editor?.getHTML() || "";
    },
    setEditorContent: (content) =>
      editor?.chain().focus().setContent(content).run(),
  }));

  React.useEffect(() => {
    editor?.setOptions({ editable: !props.disabled });
  }, [props.disabled, editor]);
  return (
    <div className="flex flex-col w-full h-fit shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-lg overflow-hidden border border-muted">
      <Toolbar
        disabled={props.disabled}
        editor={editor}
        toggleSpellCheck={toggleSpellCheck}
      />
      <RichTextEditor disabled={props.disabled} editor={editor} />
    </div>
  );
});

Editor.displayName = "Editor";

export default Editor;
