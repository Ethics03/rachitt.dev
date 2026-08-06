"use client";
import { motion } from "framer-motion";
import { MapPinIcon } from "@phosphor-icons/react";

export default function HeroSection() {
  return (
    <>
      <h1 className="text-5xl md:text-4xl font-bold mb-6">
        <span className="text-accent">&gt;</span> rachit's blog
      </h1>
      <div className="flex flex-col gap-2 text-gray-400 mb-2">
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5" />
          bengaluru, india
        </div>
      </div>
      <p className=" text-white/90 leading-relaxed mb-8">
        a developer who loves to build stuff and solve problems on the way. i
        enjoy building scalable backend systems, implementing research papers,
        ai research and low-level programming. when i'm not coding, i'm usually
        listening to music, playing chess or shuffling cards.
        <br />
        <b>
          <span className="text-accent">currently:</span> working around
          concurrency, system architecture and distributed systems mostly in
          <span className="text-accent"> go</span>
        </b>
      </p>

      <div className="hidden sm:block mb-12 md:flex items-center gap-3 text-sm">
        <span className="text-white/50">tip:</span>
        <div className="flex items-center gap-2 px-3 py-1.5 border border-accent/30 bg-accent/5 rounded">
          <kbd className="font-mono text-accent font-semibold">ctrl</kbd>
          <span className="text-white/40">+</span>
          <kbd className="font-mono text-accent font-semibold">k</kbd>
          <span className="text-white/60 ml-2">for command palette</span>
        </div>
      </div>
    </>
  );
}
