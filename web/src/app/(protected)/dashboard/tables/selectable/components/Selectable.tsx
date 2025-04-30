"use client";

import BaseTable from "@/components/common/BaseTable";
import Flex from "@/components/common/Flex";
import { Switch } from "@/components/ui/switch";
import useDisclosure from "@/hooks/useDisclosure";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { CalendarClock, ChartBarStacked } from "lucide-react";

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

const Selectable: React.FC = () => {
  const { isOpen: dense, onToggle } = useDisclosure({ defaultState: false });

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
  ];

  return (
    <Flex className="w-full flex-col gap-8">
      <Flex className="w-full justify-end items-center gap-2">
        <p className="text-secondary-foreground font-bold text-sm uppercase">
          Toggle density
        </p>
        <Switch checked={dense} onCheckedChange={onToggle} />
      </Flex>
      <Flex className="flex-col w-full gap-5">
        <Flex className="flex-col w-full gap-2">
          <h2 className="font-bold text-primary text-3xl">Basic table</h2>
          <p className="bg-primary/40 shadow-md text-muted-foreground italic rounded-full px-3 py-1 w-fit">{`variant="simple"`}</p>
        </Flex>
        <BaseTable
          enableRowSelection
          columns={columns}
          data={dummyProducts}
          variant="simple"
          dense={dense}
        />
      </Flex>
      <div className="border-b-2 border-dashed border-primary/30" />
      <Flex className="flex-col w-full gap-5">
        <Flex className="flex-col w-full gap-2">
          <h2 className="font-bold text-primary text-3xl">Styled table</h2>
          <p className="bg-primary/40 shadow-md text-muted-foreground italic rounded-full px-3 py-1 w-fit">{`variant="rounded"`}</p>
        </Flex>
        <BaseTable
          enableRowSelection
          columns={columns}
          data={dummyProducts}
          variant="rounded"
          dense={dense}
        />
      </Flex>
    </Flex>
  );
};

export default Selectable;
