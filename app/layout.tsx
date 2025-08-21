import { TopBar } from "@/src/components/TopBar";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Footer } from "../components/Footer";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Islam Naasani",
    template: "%s | Islam Naasani",
  },
  description: "Software Engineer",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="dark mx-auto flex h-full min-h-screen w-full max-w-2xl flex-1 flex-col gap-10 overflow-y-auto overflow-x-hidden bg-background px-6">
        <TopBar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="/umami/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          ></script>
        )}
      </body>
    </html>
  );
}
