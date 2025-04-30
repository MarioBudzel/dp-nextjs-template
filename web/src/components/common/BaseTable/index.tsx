import React, { Ref } from "react";
import { TCustomTableProps } from "./types";
import useTableInstance from "./hooks/useTableInstance";
import useTableState from "./hooks/useTableStates";
import { TableContext } from "./context/TableContext";
import TableHead from "./components/common/TableHead";
import TableBody from "./components/common/TableBody";
import SelectedRows from "./components/ui/SelectedRows";

import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import TablePagination from "./components/ui/TablePagination";

export type TableRef<TData> = {
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  getSelectedRows: () => TData[];
};

export const TableSearch: React.FC<{
  onValueChanged: React.Dispatch<React.SetStateAction<string>>;
  debounceField?: boolean;
}> = ({ onValueChanged, debounceField }) => {
  const handleGlobalSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {
        target: { value },
      } = event;

      onValueChanged(value);
    },
    500
  );

  const handleSimpleGlobalSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value },
    } = event;

    onValueChanged(value);
  };

  return (
    <Input
      placeholder="Search..."
      leftAdornment={<Search className="text-muted-foreground" size={18} />}
      className="px-2 min-w-[150px] text-lg"
      onChange={debounceField ? handleGlobalSearch : handleSimpleGlobalSearch}
      divClassName="rounded-full w-fit text-lg"
    />
  );
};

const BaseTable = React.forwardRef(function BaseTable<TData extends object>(
  {
    headerStyles,
    rowStyles,
    dense,
    variant = "simple",
    verticalAlign,
    onRowClick,
    initialPageSize = 5,
    selectedRowsIcons,
    onSelectedRowsChanged,
    enableRowSelection,
    enablePinning,
    ...rest
  }: TCustomTableProps<TData>,
  ref: Ref<unknown> | undefined
) {
  const { setSelectedRows, selectedRows, ...tableState } = useTableState(
    rest.defaultHiddenColumns ?? {}
  );

  const table = useTableInstance<TData>(rest, tableState);

  const selectedRowsCount = Object.values(selectedRows).reduce((acc, value) => {
    if (value) acc += 1;
    return acc;
  }, 0 as number);

  React.useImperativeHandle(ref, () => ({
    setGlobalFilter: table.setGlobalFilter,
    getSelectedRows: () => {
      const rows = table.getRowModel().rowsById;
      const selectedOriginals = Object.keys(selectedRows)
        .filter((index) => selectedRows[index])
        .map((index) => rows[index].original);

      return selectedOriginals;
    },
  }));

  return (
    <TableContext.Provider
      value={{
        table,
        headerStyles,
        rowStyles,
        dense,
        variant,
        verticalAlign,
        onRowClick,
        selectedRows,
        setSelectedRows,
      }}
    >
      <div className="max-w-[100%] overflow-auto w-full relative">
        <SelectedRows
          selectedRowsCount={selectedRowsCount}
          selectedRowsIcons={selectedRowsIcons}
        />
        <table
          className="w-[100%]"
          style={{
            borderSpacing: `0 ${variant !== "rounded" ? 0 : dense ? 10 : 16}px`,
            borderCollapse: "separate",
            transition: "border-spacing 200ms linear",
          }}
        >
          <TableHead
            enableRowSelection={enableRowSelection}
            enablePinning={enablePinning}
          />
          <TableBody enableRowSelection={enableRowSelection} />
        </table>
        <TablePagination />
      </div>
    </TableContext.Provider>
  );
}) as <TData extends object>(
  props: TCustomTableProps<TData> & { ref?: React.Ref<unknown> }
) => JSX.Element;

export default BaseTable;
