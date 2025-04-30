"use client";
import React from "react";
import TextToggle from "../../components/TextToggle";
import Flex from "@/components/common/Flex";
import Helper from "@/components/common/Helper";
import NoPermission from "@/components/ui/NoPermission";
import { CalendarClock, Edit2 } from "lucide-react";
import { createColumnHelper } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { ChartBarStacked } from "lucide-react";
import IconButton from "@/components/common/IconButton";
import BaseTable from "@/components/common/BaseTable";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  brand: string;
  releaseDate: string;
};

const dummyProducts: Product[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  category: ["Electronics", "Clothing", "Home & Kitchen", "Sports", "Books"][
    index % 5
  ],
  price: parseFloat((Math.random() * 100).toFixed(2)),
  stock: Math.floor(Math.random() * 500),
  rating: parseFloat((Math.random() * 5).toFixed(1)),
  brand: ["Apple", "Nike", "Samsung", "Adidas", "Sony"][index % 5],
  releaseDate: new Date(
    2020 + (index % 4),
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  ).toLocaleDateString("sk-SK"),
}));

const columnHelper = createColumnHelper<Product>();

const PageDisplay: React.FC = () => {
  const [role, setRole] = React.useState<string>("RW");
  const columns: ColumnDef<Product, any>[] = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Product name",
    }),
    columnHelper.accessor("category", {
      cell: (info) => (
        <Flex className="min-w-[150px] items-center gap-2">
          <ChartBarStacked size={18} className="text-primary" />
          <p className="text-primary">{info.getValue()}</p>
        </Flex>
      ),
      header: "Category",
    }),
    columnHelper.accessor("price", {
      cell: (info) => <Flex className="justify-end">{info.getValue()}€</Flex>,
      header: "Price (€)",
    }),
    columnHelper.accessor("stock", {
      cell: (info) => (
        <Flex className="justify-end">{info.getValue()} pcs</Flex>
      ),
      header: "Stock",
    }),
    columnHelper.accessor("brand", {
      cell: (info) => <Flex>{info.getValue()}</Flex>,
      header: "Brand",
    }),
    columnHelper.accessor("releaseDate", {
      cell: (info) => (
        <Flex className="min-w-[150px] items-center gap-1">
          <CalendarClock size={18} className="text-primary/80" />
          <p className="text-primary">{info.getValue()}</p>
        </Flex>
      ),
      header: "Release date",
    }),
    columnHelper.display({
      id: "user-actions",
      cell: () => {
        return (
          <Flex
            className="items-center justify-end"
            style={role === "RW" ? {} : { display: "none" }}
          >
            <IconButton
              variant="rounded"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <Edit2 size={16} className="text-cyan-400" />
            </IconButton>
          </Flex>
        );
      },
    }),
  ];
  return (
    <Flex className="w-full h-full flex-col gap-5 items-center">
      <Helper className="max-w-fit">
        This is only an example page. For implementation check the docs
      </Helper>
      <Flex className=" justify-center">
        <TextToggle
          text1="RW"
          text2="RO"
          onValueChanged={() =>
            setRole((prev) => (prev === "RO" ? "RW" : "RO"))
          }
        />
      </Flex>
      <BaseTable
        columns={columns}
        data={dummyProducts}
        variant="rounded"
        dense
      />
    </Flex>
  );
};

export default PageDisplay;
