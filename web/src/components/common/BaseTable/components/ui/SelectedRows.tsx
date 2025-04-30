"use client";

import Flex from "@/components/common/Flex";
import React from "react";

type Props = {
  selectedRowsCount: number;
  selectedRowsIcons: React.ReactNode;
};

const SelectedRows: React.FC<Props> = ({
  selectedRowsCount,
  selectedRowsIcons,
}) => {
  const [valueBeforeZero, setValueBeforeZero] = React.useState<number>(0);

  React.useEffect(() => {
    if (selectedRowsCount !== 0) setValueBeforeZero(selectedRowsCount);
    if (selectedRowsCount === 0) setTimeout(() => setValueBeforeZero(0), 200);
  }, [valueBeforeZero, selectedRowsCount]);
  return (
    <Flex
      className={`w-[100%] sticky top-0 left-0 bg-primary shadow-lg items-center justify-between rounded-full overflow-hidden transition-all duration-200 px-5 ${selectedRowsCount > 0 ? "mb-5" : ""}`}
      style={{ height: selectedRowsCount !== 0 ? "50px" : 0 }}
    >
      <p className="font-bold text-primary-foreground grow">
        {`${valueBeforeZero} ${valueBeforeZero > 1 ? "rows" : "row"} selected`}
      </p>
      {selectedRowsIcons}
    </Flex>
  );
};

export default SelectedRows;
