"use client";

import { landingPageNavLinks } from "@/data/navLinks";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks.component";
import React from "react";
import SettingsDrawer from "@/app/ui/common/Header/_components/SettingsDrawer";
import { useSections } from "@/context/SectionContext";
import DocsNavigation from "@/app/ui/common/Header/_components/DocsNavigation";

const LandingPageNavbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
        return;
      }
      if (window.scrollY === 0 && scrolled) {
        setScrolled(false);
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div
      className={`fixed top-0 w-full backdrop-blur-sm z-10 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md drop-shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="bg-transparent flex w-full justify-between items-center py-5 px-5 container">
        <div className="text-3xl font-semibold flex items-center gap-x-3 lg:w-[240.15px]">
          <Image
            alt="logo"
            src="https://img.logoipsum.com/289.svg"
            width={100}
            height={0}
          />
        </div>
        <NavLinks navLinks={landingPageNavLinks} />
        <div className="flex gap-x-2 items-center">
          <DocsNavigation />
          <SettingsDrawer />
          <Link href="/auth/sign-in">
            <button className="capitalize px-3 py-1 font-bold text-base bg-primary gap-2 flex rounded-full hover:bg-primary/80 transition-all duration-200 items-center">
              <User size={18} />
              Sign in
            </button>
          </Link>
          <Link href="/auth/sign-up" className="hidden lg:block">
            <button className="capitalize px-3 py-1 font-bold text-base bg-transparent hover:bg-primary/20 gap-2 flex rounded-full transition-all duration-200">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
