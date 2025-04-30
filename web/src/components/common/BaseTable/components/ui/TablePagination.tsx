"use client";
import Flex from "@/components/common/Flex";
import useTableContext from "../../hooks/useTableContext";
import IconButton from "@/components/common/IconButton";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Props = {};

const TablePagination: React.FC<Props> = () => {
  const { table } = useTableContext();
  return !(table.getPageCount() > 1) ? null : (
    <Flex className="w-full gap-5 items-center justify-end">
      <p className="text-sm">{`Page ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}</p>
      <Flex className="items-center gap-0">
        <IconButton
          variant="rounded"
          className="p-1 disabled:text-muted-foreground disabled:hover:bg-transparent disabled:cursor-not-allowed"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronFirst size={18} className="text-current" />
        </IconButton>
        <IconButton
          variant="rounded"
          className="p-1 disabled:text-muted-foreground disabled:hover:bg-transparent disabled:cursor-not-allowed"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft size={18} className="text-current" />
        </IconButton>
        <IconButton
          variant="rounded"
          className="p-1 disabled:text-muted-foreground disabled:hover:bg-transparent disabled:cursor-not-allowed"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight size={18} className="text-current" />
        </IconButton>
        <IconButton
          variant="rounded"
          className="p-1 disabled:text-muted-foreground disabled:hover:bg-transparent disabled:cursor-not-allowed"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronLast size={18} className="text-current" />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default TablePagination;
