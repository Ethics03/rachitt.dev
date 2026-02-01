"use client";
import Link from "next/link";
import MusicButton from "./MusicButton";

export default function Header() {
  return (
    <header className="py-4 flex items-center justify-between">
      <div className="flex gap-6">
        <Link href="/" className="hover:text-accent transition-colors">
          [h] home
        </Link>
        <Link href="/blog" className="hover:text-accent transition-colors">
          [b] blog
        </Link>
        <Link href="/projects" className="hover:text-accent transition-colors">
          [p] projects
        </Link>
      </div>
      <MusicButton />
    </header>
  );
}
