"use client";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { MapPinIcon } from "@phosphor-icons/react";

export default function HeroSection() {
  return (
    <>
      <h1 className="text-5xl md:text-4xl font-bold mb-6">
         <ScrambleText text="$ rachit srivastava" />
     </h1>
      <div className="flex flex-col gap-2 text-gray-400 mb-2">
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5" />
          bengaluru, india
        </div>
        
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-white/70 leading-relaxed mb-12"
      >
        backend developer who loves building systems and cli tools. 
        i mostly work with rust, go, and typescript. currently working on my startup 
        and shipping side projects.
      </motion.p>
    </>
  );
}
