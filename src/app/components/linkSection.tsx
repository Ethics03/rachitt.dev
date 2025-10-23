"use client";
import { motion } from "framer-motion";
import { socials } from "../lib/socials";

export default function LinkSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mb-12"
    >

      <div className="text-white/60 mb-8">
        <p className="mb-2">Want to chat?</p>
        <a
          href="mailto:hello@rachitt.dev"
          className="text-white/80 hover:text-white transition-colors underline"
        >
          hello@rachitt.dev
        </a>
      </div>

      <div>
        <h2 className="font-bold mb-2 text-2xl">$ socials</h2>
        <div className="border-t border-white/10 pt-4">
          <div className="flex gap-6 text-sm text-white/50">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-base transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
