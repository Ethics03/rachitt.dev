"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MusicNotesIcon, PauseIcon } from "@phosphor-icons/react";

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music/track.mp3");
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <motion.button
      onClick={togglePlay}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-8 h-8 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center transition-colors group"
    >
      {/* Ripple effect when playing */}
      {playing && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
          />
        </>
      )}

      {/* Icon container */}
      <motion.div
        animate={playing ? { y: [0, -2, 0] } : {}}
        transition={
          playing
            ? {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : {}
        }
      >
        {playing ? (
          <PauseIcon
            size={16}
            weight="fill"
            className="text-white relative z-10"
          />
        ) : (
          <MusicNotesIcon
            size={16}
            weight="fill"
            className="text-white relative z-10"
          />
        )}
      </motion.div>
    </motion.button>
  );
}
