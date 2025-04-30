"use client";
import Flex from "@/components/common/Flex";
import { useAuth } from "@/context/AuthContext";
import useThemeContext from "@/hooks/useThemeContext";
import { cn } from "@/lib/utils";
import { RichText } from "@/types";
import React from "react";

type Props = {
  texts: RichText[];
};

const UserGreeting: React.FC<Props> = ({ texts }) => {
  const { user } = useAuth();
  const { themeColor } = useThemeContext();

  const backgroundToThemeColor: { [K in TThemeColors]: string } = {
    Blue: "bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500",
    Green: "bg-gradient-to-l from-green-500 via-emerald-500 to-teal-500",
    Orange: "bg-gradient-to-l from-yellow-200 via-amber-400 to-orange-600",
    Rose: "bg-gradient-to-l from-red-200 via-pink-400 to-rose-600",
    Zinc: "bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900",
  };
  const ownedTexts = texts.find((text) => text.owner.id === user.id);
  const numberOfCharacters = (
    ownedTexts?.texts.reduce((acc, text) => {
      acc += text.content;
      return acc;
    }, "") ?? ""
  ).length;

  return (
    <Flex
      className={cn(
        "flex-col justify-between w-full min-h-[150px] p-5  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl gap-5 text-white col-span-6 lg:col-span-3",
        backgroundToThemeColor[themeColor]
      )}
    >
      <p className="text-xl font-bold">
        👋 Welcome back {user.fullname || `${user.name} ${user.lastName}`}
      </p>
      <Flex className="justify-between items-center">
        <Flex className="flex-col max-w-[40%]">
          <p>
            You&apos;ve created{" "}
            <strong>{` ${ownedTexts?.texts.length ?? 0}`}</strong>{" "}
            {` ${(ownedTexts?.texts.length ?? 0) !== 1 ? "texts" : "text"}`}{" "}
            with <strong>{` ${numberOfCharacters}`}</strong>{" "}
            {` ${numberOfCharacters !== 1 ? "characters" : "character"}`}!
          </p>
        </Flex>
        <p className="text-[45px]">🎉</p>
      </Flex>
    </Flex>
  );
};

export default UserGreeting;
