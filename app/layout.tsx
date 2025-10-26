import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Toaster } from '@/components/ui/toaster'
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashutosh Neupane - Full Stack Developer",
  description:
    "Portfolio of Ashutosh Neupane, a passionate full-stack web developer specializing in React, Next.js, and the MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>

        {/* Add this once in the root */}
        <Toaster  />

        <Analytics />
      </body>
    </html>
  );
}
