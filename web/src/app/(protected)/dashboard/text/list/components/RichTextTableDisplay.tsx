"use client";
import BaseTable, {
  TableRef,
  TableSearch,
} from "@/components/common/BaseTable";
import Flex from "@/components/common/Flex";
import UserProfilePicture from "@/components/ui/UserProfilePicture";
import { getBaseURL, getTiptapStyles } from "@/lib/utils";
import { RichText } from "@/types";
import { createColumnHelper, TableOptions } from "@tanstack/react-table";
import { Calendar, Download, FileType } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";
import IconButton from "@/components/common/IconButton";
import useDisclosure from "@/hooks/useDisclosure";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/context/AuthContext";

type Props = {
  richTexts: RichText[];
};

type TableData = {
  textId: string;
  textTitle: string;
  textDescription: string;
  createdAt: string;
  ownerName: string;
  ownerProfilePicture: string;
  content: string;
  ownerId: string;
};

const columnHelper = createColumnHelper<TableData>();

const RichTextTableDisplay: React.FC<Props> = ({ richTexts }) => {
  const router = useRouter();
  const { user } = useAuth();

  const tableRef = React.useRef<TableRef<TableData>>(null);
  const [setGlobalFilter, setSetGlobalFilter] = React.useState<React.Dispatch<
    React.SetStateAction<string>
  > | null>(null);
  const { isOpen: filterOwned, onToggle: toggleOwned } = useDisclosure({
    defaultState: false,
  });

  const generateHTMLFile = async (htmlText?: string, title?: string) => {
    const userContent = await prettier.format(htmlText ?? "", {
      parser: "html",
      plugins: [parserHtml],
    });
    const tipTapStyles = getTiptapStyles();
    const htmlStructure = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dynamic HTML Download</title>
        <style>
            ${tipTapStyles}
        </style>
      </head>
      <body>
          ${userContent}
      </body>
    </html>`;

    const blob = new Blob([htmlStructure], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${title ?? "file"}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  React.useEffect(() => {
    if (tableRef.current?.setGlobalFilter) {
      setSetGlobalFilter(() => tableRef.current!.setGlobalFilter);
    }
  }, []);

  const columns: TableOptions<TableData>["columns"] = [
    columnHelper.accessor("textTitle", {
      cell: (info) => {
        const {
          row: {
            original: { textId, textDescription },
          },
        } = info;

        return (
          <Flex className="m-w-[150px] items-center gap-4">
            <FileType className="text-secondary-foreground" size={50} />
            <Flex className="flex-col gap-1">
              <p
                className="text-lg font-bold hover:underline hover:cursor-pointer"
                onClick={() => router.push(`/dashboard/text/detail/${textId}`)}
              >
                {info.getValue()}
              </p>
              <p className="text-sm text-muted-foreground">{textDescription}</p>
            </Flex>
          </Flex>
        );
      },
      header: () => "Title",
    }),
    columnHelper.accessor("createdAt", {
      cell: (info) => {
        return (
          <Flex className="m-w-[150px] items-center gap-4">
            <Calendar className="text-secondary-foreground" />
            <Flex className="flex-col gap-1">
              <p className="text-sm text-muted-foreground">
                {new Date(info.getValue()).toLocaleDateString("sk-SK")}
              </p>
            </Flex>
          </Flex>
        );
      },
      header: () => "Created At",
    }),
    columnHelper.accessor("ownerName", {
      cell: (info) => {
        return (
          <Flex className="m-w-[150px] items-center gap-4">
            <UserProfilePicture
              size="small"
              imageUrl={
                info.row.original.ownerProfilePicture
                  ? `${getBaseURL()}/${info.row.original.ownerProfilePicture}`
                  : undefined
              }
            />
            <Flex className="flex-col gap-1">
              <p className="text-sm text-muted-foreground">{info.getValue()}</p>
            </Flex>
          </Flex>
        );
      },
      header: () => "Owner",
    }),
    columnHelper.accessor("textDescription", {}),
    columnHelper.display({
      id: "download",
      cell: (info) => {
        const {
          row: {
            original: { textTitle, content },
          },
        } = info;

        return (
          <IconButton
            variant="rounded"
            onClick={() => generateHTMLFile(content, textTitle)}
          >
            <Download className="text-primary" />
          </IconButton>
        );
      },
    }),
  ];

  const data: TableData[] = React.useMemo(
    () =>
      richTexts?.flatMap((text) => {
        return text.texts.map((_text) => ({
          textId: _text.id,
          textTitle: _text.title,
          textDescription: _text.description,
          createdAt: _text.createdAt,
          content: _text.content,
          ownerName:
            text.owner.fullName || `${text.owner.name} ${text.owner.lastName}`,
          ownerProfilePicture: text.owner.profilePicturePath,
          ownerId: text.owner.id,
        }));
      }) ?? [],
    [richTexts]
  );

  const ownedData: TableData[] = React.useMemo(
    () => data.filter((text) => text.ownerId === user.id),
    [user, data]
  );

  return (
    <Flex className=" gap-2 flex-col-reverse">
      <BaseTable
        ref={tableRef}
        dense
        columns={columns}
        data={filterOwned ? ownedData : data}
        variant="rounded"
        defaultHiddenColumns={{
          textDescription: false,
        }}
      />

      <Flex className="items-center justify-between">
        <TableSearch debounceField onValueChanged={setGlobalFilter!} />
        <Flex className="items-center gap-2">
          <p className="text-sm font-bold text-muted-foreground capitalize">
            Toggle owned
          </p>
          <Switch checked={filterOwned} onCheckedChange={toggleOwned} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RichTextTableDisplay;
