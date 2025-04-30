import Image from "next/image";
import Login from "../ui/login/login-form";
import Hero from "./_components/Hero.component";
import About from "./_components/About.component";
import DocsLayout from "./_components/Documentation/DocsLayout";

export default function Home() {
  return (
    <main className="flex flex-col scroll-smooth">
      <Hero />
      <About />
      <DocsLayout />
    </main>
  );
}
