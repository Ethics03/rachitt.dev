"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MusicButton from "./MusicButton";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // conditional highlighting
  const linkClass = (href: string) =>
    clsx(
      "transition-colors",
      isActive(href) ? "text-accent" : "text-white hover:text-accent",
    );

  return (
    <header className="py-4 flex items-center justify-between">
      <div className="flex gap-6">
        <Link href="/" className={linkClass("/")}>
          [h] home
        </Link>
        <Link href="/blog" className={linkClass("/blog")}>
          [b] blog
        </Link>
        <Link href="/projects" className={linkClass("/projects")}>
          [p] projects
        </Link>
      </div>
      <MusicButton />
    </header>
  );
}
