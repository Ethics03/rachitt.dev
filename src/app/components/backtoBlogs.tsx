"use client";

import Link from "next/link";

export default function BackToBlogs() {
  return (
    <Link
      href="/blog"
      className="text-white/50 hover:text-white transition-colors mb-8 inline-block"
    >
      ← Back to blogs
    </Link>
  );
}
