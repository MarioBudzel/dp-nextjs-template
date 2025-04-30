"use client";

import { useSections } from "@/context/SectionContext";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useSections();

  React.useEffect(() => {
    if (inView) {
      setActiveSection("hero-section");
      history.replaceState(null, "", window.location.pathname);
    }
  }, [inView, setActiveSection]);
  return (
    <div ref={ref} className="bg-card relative h-dvh overflow-hidden">
      <div className="flex flex-col gap-y-10 container h-full px-10 justify-center items-center break-words z-10">
        <div className="w-full md:w-1/2 text-center">
          <h1 className="font-bold text-3xl lg:text-7xl leading-tight">
            Explore The Power Of <span className="text-primary">Next.js</span>{" "}
            With This{" "}
            <span className="text-muted-foreground capitalize">template</span>.
          </h1>
        </div>
        <Link href="#features">
          <button className="text-2xl py-1 px-8 flex items-center font-bold bg-primary gap-x-2 transition-all duration-200 rounded-full hover:bg-primary/80">
            Explore
            <MoveRight />
          </button>
        </Link>
      </div>
      <div className="absolute bottom-4 translate-y-1/2 -translate-x-1/2 rounded-full w-[120dvh] h-[120dvh] blur-[100px] mix-blend-screen opacity bg-primary/5 z-0" />
      <div className="absolute -top-12 right-64 -translate-y-1/2 translate-x-1/2 rounded-full w-[150dvh] h-[150dvh] blur-[100px] mix-blend-screen opacity bg-destructive/10 z-0" />
    </div>
  );
};

export default Hero;
