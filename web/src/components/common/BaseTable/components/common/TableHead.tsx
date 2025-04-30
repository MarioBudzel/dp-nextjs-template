"use client";

import { getCommonPinnedStyles, getTableHeaderStyles } from "../../data/styles";
import useTableContext from "../../hooks/useTableContext";
import Th from "../ui/Th";

type Props = {
  enableRowSelection?: boolean;
  enablePinning?: boolean;
};

const TableHead: React.FC<Props> = ({ enableRowSelection, enablePinning }) => {
  const {
    table: { getHeaderGroups, getRowModel },
    dense,
    headerStyles,
    variant,
    verticalAlign,
    setSelectedRows,
    selectedRows,
  } = useTableContext();

  const someSelected = Object.values(selectedRows ?? {}).some(Boolean);

  return (
    <thead>
      {getHeaderGroups().map((header) => {
        const { id, headers } = header;
        return (
          <tr key={id} className={getTableHeaderStyles({ variant, dense })}>
            {enableRowSelection ? (
              <th>
                <label className="flex items-center cursor-pointer relative justify-center">
                  <input
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-primary-foreground/15 checked:bg-primary-foreground/50 checked:border-primary-foreground/50"
                    type="checkbox"
                    checked={someSelected}
                    onChange={() => {
                      const rows = getRowModel().rows;

                      setSelectedRows?.(() => {
                        const selectedRows = rows.reduce(
                          (acc, row) => {
                            acc[row.id] = someSelected ? false : true;
                            return acc;
                          },
                          {} as Record<number | string, boolean>
                        );
                        return selectedRows;
                      });
                    }}
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
                      <rect x="4" y="9" width="12" height="2" rx="1"></rect>
                    </svg>
                  </span>
                </label>
              </th>
            ) : null}
            {headers.map((_header, index) => (
              <Th
                enablePinning={enablePinning}
                style={{
                  verticalAlign: verticalAlign,
                  ...headerStyles,
                  ...getCommonPinnedStyles(_header.column),
                }}
                onClick={_header.column.getToggleSortingHandler()}
                key={index}
                header={_header}
                className="py-2"
              />
            ))}
          </tr>
        );
      })}
    </thead>
  );
};

export default TableHead;
