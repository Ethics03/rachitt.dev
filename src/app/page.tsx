"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrambleText from "./components/ScrambleText";

export default function Home() {
  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Work", href: "/work" },
    { label: "Blogs", href: "/blog" },
  ];

  return (
    <div className="h-full flex items-center pl-4 md:pl-196 pt-20 md:pt-30 w-full">
      <div className="flex flex-col gap-10 w-full max-w-xl">
        {menuItems.map((item, index) => (
          <Link key={item.label} href={item.href} passHref>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-3xl md:text-5xl font-bold text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <ScrambleText text={item.label} delay={index * 200} />
            </motion.div>
          </Link>
        ))}

        <div className="mt-8 text-base md:text-lg text-white/60">
          <ScrambleText text="wanna talk?" delay={800} className="block mb-2" />
          <a
            href="mailto:hello@rachitt.dev"
            className="text-white/80 hover:text-white transition-colors"
          >
            <ScrambleText text="hello@rachitt.dev" delay={1000} />
          </a>
        </div>
      </div>
    </div>
  );
}
