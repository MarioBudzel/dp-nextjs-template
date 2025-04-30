import { VisibilityState } from "@tanstack/react-table";

import { CoreRow } from "@tanstack/react-table";

import { TableOptions } from "@tanstack/react-table";
import { CSSProperties } from "react";

export type TTableStyleProps = {
  dense?: boolean;
  verticalAlign?:
    | "baseline"
    | "sub"
    | "super"
    | "text-top"
    | "text-bottom"
    | "middle"
    | "top"
    | "bottom";
  variant: "simple" | "rounded" | "custom";
  headerStyles?: CSSProperties;
  rowStyles?: CSSProperties;
};
export type TCustomTableProps<TData> = {
  columns: TableOptions<TData>["columns"];
  data: TableOptions<TData>["data"];
  globalFilterFn?: TableOptions<TData>["globalFilterFn"];
  defaultHiddenColumns?: VisibilityState;
  onRowClick?: (row: CoreRow<TData>["original"]) => void;
  initialPageSize?: number;
  selectedRowsIcons?: React.ReactNode;
  enableRowSelection?: boolean;
  enablePinning?: boolean;
  onSelectedRowsChanged?: (selectedRows: TData[]) => void;
} & TTableStyleProps;
