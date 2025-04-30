"use client";
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TCustomTableProps } from "../types";
import useTableState from "./useTableStates";

const useTableInstance = <TData,>(
  props: Omit<TCustomTableProps<TData>, "variant">,
  tableState: Omit<
    ReturnType<typeof useTableState>,
    "selectedRows" | "setSelectedRows"
  >
) => {
  return useReactTable<TData>({
    ...props,
    state: {
      globalFilter: tableState.globalFilter,
      columnFilters: tableState.columnFilters,
      columnVisibility: tableState.columnVisibility,
      sorting: tableState.sorting,
    },
    onColumnFiltersChange: tableState.setColumnFilters,
    onColumnVisibilityChange: tableState.setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onGlobalFilterChange: tableState.setGlobalFilter,
    onSortingChange: tableState.setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    ...(props.globalFilterFn ? { globalFilterFn: props.globalFilterFn } : {}),
  });
};

export default useTableInstance;
