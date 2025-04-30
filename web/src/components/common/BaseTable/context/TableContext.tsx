import { CoreRow } from "@tanstack/react-table";
import React from "react";
import useTableInstance from "../hooks/useTableInstance";
import { TTableStyleProps } from "../types";

type TableContextTypes = {
  table: ReturnType<typeof useTableInstance<any>>;
  onRowClick?: (row: CoreRow<any>["original"]) => void;
  selectedRows?: Record<number | string, boolean>;
  setSelectedRows?: React.Dispatch<
    React.SetStateAction<Record<number | string, boolean>>
  >;
} & TTableStyleProps;

export const TableContext = React.createContext<TableContextTypes>(
  {} as TableContextTypes
);
