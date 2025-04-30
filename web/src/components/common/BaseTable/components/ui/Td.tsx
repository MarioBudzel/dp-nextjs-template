"use client";

import useDisclosure from "@/hooks/useDisclosure";
import { Cell, flexRender, Header } from "@tanstack/react-table";
import { DetailedHTMLProps, TdHTMLAttributes } from "react";

type Props = { cell: Cell<unknown, unknown> } & DetailedHTMLProps<
  TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

const Td: React.FC<Props> = ({ cell, ...rest }) => {
  const {
    getContext,
    column: {
      columnDef: { cell: columnCell },
    },
  } = cell;
  return <td {...rest}>{flexRender(columnCell, getContext())}</td>;
};

export default Td;
