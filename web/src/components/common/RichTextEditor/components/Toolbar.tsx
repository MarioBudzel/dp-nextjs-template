import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  MessageSquareQuote,
  Strikethrough,
  Underline,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  toggleSpellCheck?: () => void;
  spellCheck?: boolean;
  disabled?: boolean;
};

const Toolbar: React.FC<Props> = ({
  editor,
  spellCheck,
  toggleSpellCheck,
  disabled,
}) => {
  if (!editor) return null;
  return (
    <div className="flex items-center justify-between grow gap-1 p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] overflow-auto">
      <div className="flex gap-1">
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline />
        </Toggle>
        <div className="border-l border-muted h-auto" />
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("heading", { level: 3 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3 />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("heading", { level: 4 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
        >
          <Heading4 />
        </Toggle>
        <div className="border-l border-muted h-auto" />
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive({ textAlign: "left" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
        >
          <AlignLeft />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive({ textAlign: "center" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
        >
          <AlignCenter />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive({ textAlign: "right" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
        >
          <AlignRight />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive({ textAlign: "justify" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("justify").run()
          }
        >
          <AlignJustify />
        </Toggle>
        <div className="border-l border-muted h-auto" />
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("code")}
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
        >
          <Code />
        </Toggle>
        <Toggle
          disabled={disabled}
          size={"sm"}
          pressed={editor.isActive("blockquote")}
          onPressedChange={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
        >
          <MessageSquareQuote />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-muted-foreground text-[10px]">Spellcheck</p>
        <Switch
          disabled={disabled}
          checked={spellCheck}
          onCheckedChange={toggleSpellCheck}
        />
      </div>
    </div>
  );
};

export default Toolbar;
