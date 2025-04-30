"use client";

import React, { useEffect, useRef, useState } from "react";

const HorizontalScrollBox: React.FC<{
  children: React.ReactNode;
  disableLeftFade?: boolean;
  disableRightFade?: boolean;
  disableFade?: boolean;
  fadeColor?: string;
  className?: string;
}> = ({
  children,
  disableLeftFade = false,
  disableRightFade = false,
  disableFade = false,
  fadeColor = "currentcolor",
  className = "",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [atScrollEnd, setAtScrollEnd] = useState(false);
  const [atScrollStart, setAtScrollStart] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, scrollLeft, clientWidth } =
        scrollContainerRef.current;

      setAtScrollStart(scrollLeft === 0);
      setAtScrollEnd(scrollWidth - scrollLeft - 30 <= clientWidth);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={`min-w-full rounded-lg ${className} relative flex flex-row `}
    >
      {!disableFade && (
        <>
          {!disableRightFade && (
            <div
              className={`absolute right-0 top-0 h-full w-[100px] rounded-l-3xl transition-opacity duration-300 ${
                atScrollEnd ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background: `linear-gradient(to right, transparent 0%, ${fadeColor} 90%)`,
              }}
            />
          )}
          {!disableLeftFade && (
            <div
              className={`absolute left-0 top-0 h-full w-[100px] rounded-r-3xl transition-opacity duration-300 ${
                atScrollStart ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background: `linear-gradient(to left, transparent 5%, ${fadeColor} 90%)`,
              }}
            />
          )}
        </>
      )}
      <div
        ref={scrollContainerRef}
        className="flex flex-row gap-2 overflow-auto py-3 w-full"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollBox;
