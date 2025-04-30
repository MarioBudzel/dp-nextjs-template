import type { Metadata } from "next";
import { dm_sans, roboto } from "./ui/fonts";
import "./globals.scss";
import { ThemeProvider } from "@/components/theme";
import React from "react";
import ThemeDataProvider from "@/context/ThemeContext";
import ToastProvider from "@/app/ToastProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js Template",
    default: "Next.js Template",
  },
  description: "Next.js Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      style={{ scrollBehavior: "smooth" }}
    >
      {/*Supressing hydration warning to keep component server-side */}
      <body className={`${dm_sans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ThemeDataProvider>
            <ToastProvider>{children}</ToastProvider>
          </ThemeDataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
