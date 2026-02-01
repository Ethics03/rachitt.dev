"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToBlogs() {
  return (
    <Link
      href="/blog"
      className="text-white/50 hover:text-white transition-colors mb-8 inline-block"
    >
      <div className="flex items-center gap-2">
        <ArrowLeft size={16} />
        <span>back to blogs</span>
      </div>
    </Link>
  );
}

