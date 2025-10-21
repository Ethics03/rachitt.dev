"use client";
import { motion } from "framer-motion";
import ScrambleText from "../components/ScrambleText";

export default function Projects() {
  const projects = [
    {
      id: "hush",
      name: "Hush",
      description:
        "A fast, secure and encrypted secret/password manager CLI built in Rust.",
      tech: ["Rust", "Argon2", "Clap", "ChaCha20poly1305"],
      link: "https://github.com/Ethics03/hush",
    },
    {
      id: "dots",
      name: "Dots",
      description:
        "A Dotfile Manager CLI-Tool to symlink, version and sync your config files with git.",
      tech: ["Go", "cobra-cli", "git"],
      link: "https://github.com/Ethics03/dots",
    },
    {
      id: "uriel",
      name: "Uriel",
      description:
        "A CLI-Tool for API-Testing with user-friendly security suggestions from Llama3",
      tech: ["Go", "cobra-cli", "ollama3", "net/http"],
      link: "https://github.com/Ethics03/uriel",
    },
    {
      id: "minpin",
      name: "Minpin",
      description: "A URL Shortener in Golang and PostgreSQL",
      tech: ["Golang", "PostgreSQL", "net/http"],
      link: "https://github.com/Ethics03/minpin",
    },
  ];

  return (
    <div className="h-full flex items-center flex-col justify-start px-8 py-16p pt-1">
      <div className="w-full max-w-6xl">
        <motion.h1
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ScrambleText text="$ projects" />
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="border border-white/10 hover:border-orange-500 p-8 transition-all duration-300 cursor-pointer group"
            >
              <h2 className="text-3xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                <ScrambleText text={project.name} delay={index * 150} />
              </h2>

              <p className="text-white/70 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border border-white/20 text-white/60 group-hover:border-orange-500/50 group-hover:text-orange-500/80 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
