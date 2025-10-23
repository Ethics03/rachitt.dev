"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { work } from "../lib/work";

export default function WorkSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mb-12"
    >
      <h2 className="font-bold mb-6 text-3xl">$ work</h2>
      <div className="space-y-6">
        {work.map((item) => (
          <Link key={item.company} href={item.href}>
            <motion.div
              whileHover={{ x: 4 }}
              className="cursor-pointer group"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors mb-1">
                {item.company}
              </h3>
              <p className="text-lg text-white/70 mb-2">{item.role}</p>
              <p className="text-base text-white/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
