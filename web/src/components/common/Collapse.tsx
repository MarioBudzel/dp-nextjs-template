"use client";

import React from "react";

type Props = {
  children: React.ReactElement;
  open: boolean;
};

const Collapse: React.FC<Props> = ({ open, children }) => {
  const [height, setHeight] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current)
      setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);
  return (
    <div
      ref={contentRef}
      className="overflow-hidden transition-[height] ease-[cubic-bezier(.17,.67,.83,.67)] duration-300"
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default Collapse;
