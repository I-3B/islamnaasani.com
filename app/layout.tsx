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
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="9ca8de7a-c67a-4435-aa07-39284f33a640"
          ></script>
        )}
        <Analytics />
      </body>
    </html>
  );
}
