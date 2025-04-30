"use client";

import React from "react";

import Flex from "@/components/common/Flex";

const TextToggle: React.FC<{
  onValueChanged: () => void;
  text1: string;
  text2: string;
}> = ({ onValueChanged, text1, text2 }) => {
  const [position, setPosition] = React.useState<number>(0);

  return (
    <Flex className="bg-gray-200 dark:bg-gray-600/75 relative z-[1] rounded-full shadow-md w-fit">
      <div
        className={`z-[2] absolute h-[calc(100%-8px)] top-[4px] w-[92px] bg-primary/20 rounded-full transform transition-transform duration-200 ease-out`}
        style={{
          transform: `translate(calc(${position * (82 + 20)}px + 4px), 0)`,
        }}
      />
      <div
        className="py-[10px] px-[10px] z-[3] cursor-pointer w-[100px] text-center"
        onClick={() => {
          setPosition(0);
          onValueChanged();
        }}
      >
        <p>{text1}</p>
      </div>
      <div
        className="py-[10px] px-[10px] z-[3] cursor-pointer w-[100px] text-center"
        onClick={() => {
          setPosition(1);
          onValueChanged();
        }}
      >
        <p>{text2}</p>
      </div>
    </Flex>
  );
};

export default TextToggle;
