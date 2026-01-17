"use client";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { MapPinIcon } from "@phosphor-icons/react";

export default function HeroSection() {
  return (
    <>
      <h1 className="text-5xl md:text-4xl font-bold mb-6">
        <ScrambleText text="$ rachit's blog" />
      </h1>
      <div className="flex flex-col gap-2 text-gray-400 mb-2">
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5" />
          bengaluru, india
        </div>
      </div>
      <p className=" text-white/90 leading-relaxed mb-12">
        a developer who loves to build stuff and solve problems on the way. i
        enjoy building scalable backend systems, cli tools, apps, low-level
        programming, and diving into system architecture and computer science.
        when i'm not coding, i'm usually listening to music or shuffling cards.
      </p>
    </>
  );
}
