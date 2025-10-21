"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import MusicButton from "./MusicButton";
import ScrambleText from "./ScrambleText";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  HouseIcon,
} from "@phosphor-icons/react";

export default function Header() {
  const socialLinks = [
    {
      href: "https://github.com/Ethics03",
      icon: GithubLogoIcon,
      label: "GitHub",
    },
    {
      href: "https://twitter.com/rachitcodes",
      icon: XLogoIcon,
      label: "Twitter",
    },
    {
      href: "https://linkedin.com/in/rachit032004",
      icon: LinkedinLogoIcon,
      label: "LinkedIn",
    },
    
  ];

  return (
    <header className="top-0 left-0 right-0 z-50 flex justify-center items-center py-6">
      <div className="w-full max-w-3xl mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center gap-3">
          <div className="text-3xl font-bold">
            <ScrambleText text="Hi! It's Rachit" />
          </div>

          <div className="flex items-center gap-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center transition-colors"
              >
                <HouseIcon size={16} weight="fill" className="text-white" />
              </motion.div>
            </Link>
            <MusicButton />
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-white/60 hover:text-white transition-colors"
              >
                <social.icon size={20} weight="fill" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
