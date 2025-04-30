"use client";

import { Editor, EditorContent } from "@tiptap/react";

type Props = {
  editor: Editor | null;
  disabled?: boolean;
};

const RichTextEditor: React.FC<Props> = ({ editor, disabled }) => {
  return (
    <div className="flex w-full">
      <EditorContent disabled={disabled} className="w-full" editor={editor} />
    </div>
  );
};

export default RichTextEditor;
