"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function TopBar() {
  const pathname = usePathname();
  return (
    <header className="w-full">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center space-x-6 text-lg font-medium">
          {navigation.map((item) => {
            const isActive =
              (item.startWith && pathname.startsWith(item.href)) ||
              pathname == item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{ color: isActive ? item.color : "var(--foreground)" }}
                className={cn("transition-colors hover:opacity-80")}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
