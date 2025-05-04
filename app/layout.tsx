import { TopBar } from "@/src/components/TopBar";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";
import { Footer } from "../components/Footer";
import "./globals.css";

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="dark flex h-full min-h-screen w-full flex-col overflow-y-auto overflow-x-hidden bg-background">
        <main className="flex-1">
          <TopBar />
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="/umami/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          ></script>
        )}
        <Analytics />
      </body>
    </html>
  );
}
