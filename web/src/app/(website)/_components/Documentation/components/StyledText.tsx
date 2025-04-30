"use client";

import React from "react";

type Props = {
  children: string;
};

const StyledText: React.FC<Props> = ({ children }) => {
  return (
    <span className="bg-muted text-nowrap text-muted-foreground border border-secondary-foreground/50 px-1 rounded-full font-bold">
      {children}
    </span>
  );
};

export default StyledText;
