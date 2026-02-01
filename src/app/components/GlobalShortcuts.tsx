"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalShortcuts() {
  const router = useRouter();

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      // Ignore typing in inputs / editors
      const target = e.target as HTMLElement;
      const tag = target.tagName.toLowerCase();

      if (tag === "input" || tag === "textarea" || target.isContentEditable) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case "h":
          router.push("/");
          break;
        case "p":
          router.push("/projects");
          break;
        case "b":
          router.push("/blog");
          break;
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [router]);

  return null;
}
