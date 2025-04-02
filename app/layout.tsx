"use client";
import MDXComponents from "@/components/ui/md";
import { TopBar } from "@/src/components/TopBar";
import { MDXProvider } from "@mdx-js/react";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";
import { Footer } from "../components/Footer";
import "./globals.css";

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="dark flex h-full min-h-screen w-full flex-col overflow-y-auto overflow-x-hidden bg-background">
        <main className="flex-1">
          <MDXProvider components={MDXComponents}>
            <TopBar />
            {children}
          </MDXProvider>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
