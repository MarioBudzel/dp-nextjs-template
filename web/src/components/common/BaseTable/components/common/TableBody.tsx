"use client";
import { cn } from "@/lib/utils";
import { getCommonPinnedStyles, getTableRowStyles } from "../../data/styles";
import useTableContext from "../../hooks/useTableContext";
import Td from "../ui/Td";

const TableBody: React.FC<{ enableRowSelection?: boolean }> = ({
  enableRowSelection,
}) => {
  const {
    table: { getRowModel },
    dense,
    verticalAlign,
    variant,
    rowStyles,
    onRowClick,
    selectedRows,
    setSelectedRows,
  } = useTableContext();
  const rows = getRowModel().rows;

  return (
    <tbody>
      {rows.map((row) => {
        const { id, getVisibleCells } = row;
        const cells = getVisibleCells();

        return (
          <tr
            key={id}
            className={cn(getTableRowStyles({ variant, dense }), "group")}
          >
            {enableRowSelection ? (
              <td
                className={`${onRowClick ? "group-hover:cursor-pointer group-hover:bg-primary/15" : ""} ${variant === "simple" ? "group-last:border-b-0" : ""}`}
              >
                <label className="flex items-center cursor-pointer relative justify-center">
                  <input
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-primary/15 checked:bg-primary/50 checked:border-primary/50"
                    type="checkbox"
                    checked={selectedRows?.[row.id] ?? false}
                    onChange={() =>
                      setSelectedRows?.((prev) => ({
                        ...prev,
                        [row.id]: !prev[row.id],
                      }))
                    }
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </td>
            ) : null}
            {cells.map((cell) => (
              <Td
                className={`${onRowClick ? "group-hover:cursor-pointer group-hover:bg-primary/15" : ""} ${variant === "simple" ? "group-last:border-b-0" : ""}`}
                style={{
                  verticalAlign: verticalAlign,
                  ...rowStyles,
                  ...getCommonPinnedStyles(cell.column),
                }}
                key={cell.id}
                cell={cell}
                onClick={() => onRowClick?.(row.original)}
              />
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;

//{ '&:last-child td, &:last-child th': { border: 0 } }

/**
 * '&:last-child td:last-child': {
                borderRadius: '0 10px 10px 0'
              },
              '&:last-child td:first-child': {
                borderRadius: '10px 0px 0px 10px'
              }
 */
