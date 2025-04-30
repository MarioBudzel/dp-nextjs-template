"use client";

import {
  BookOpenText,
  ChevronsDown,
  Component,
  Container,
  KeyRound,
  MonitorSmartphone,
  UserRoundPlus,
} from "lucide-react";
import FeatureCart from "./FeatureCard.component";
import Link from "next/link";
import { title } from "process";
import { useInView } from "react-intersection-observer";
import { useSections } from "@/context/SectionContext";
import React from "react";

const features = [
  {
    icon: <KeyRound className="w-8 h-8 text-primary" />,
    title: "Login ready",
    text: "Login form with authentication ready",
  },
  {
    icon: <UserRoundPlus className="w-8 h-8 text-primary" />,
    title: "Sign up ready",
    text: "Sign up form ready to use.",
  },
  {
    icon: <Component className="w-8 h-8 text-primary" />,
    title: "Useful components",
    text: "Ready to use components for your next project.",
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
    title: "Responsive design",
    text: "Responsive design ready for all devices.",
  },
  {
    icon: <Container className="w-8 h-8 text-primary" />,
    title: "Docker ready",
    text: "Dockerized with outside API support and authorization.",
  },
  {
    icon: <BookOpenText className="w-8 h-8 text-primary" />,
    title: "Documentation",
    text: "Extensive documentation for all components and features.",
  },
];

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useSections();

  React.useEffect(() => {
    if (inView) {
      setActiveSection("about-section");
      history.pushState(null, "", "#features");
    }
  }, [inView, setActiveSection]);
  return (
    <section
      ref={ref}
      id="features"
      className="relative bg-gradient-to-b from-primary/10 via-background to-background"
    >
      <div className="container p-4 min-h-dvh flex flex-col gap-14 items-center justify-start lg:justify-center py-24 lg:py-0">
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-5xl text-primary">Features</p>
          <p className="text-base text-muted-foreground">
            All available features in this template
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCart key={index} {...feature} />
          ))}
        </div>
        <Link
          href={"#docs"}
          className="absolute bottom-0 left-0 w-full h-fit p-5 flex flex-col gap-y-1 justify-center items-center text-secondary-foreground/50"
        >
          <div className="flex justify-center items-center gap-2">
            <BookOpenText className="w-6 h-6" />
            Explore documentation
          </div>
          <ChevronsDown className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default About;
