"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../lib/projects";

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mb-12"
    >
      <h2 className="font-bold mb-6 text-2xl">$ projects</h2>
      <div className="space-y-6 mb-4">
        {projects.slice(0, 2).map((project, index) => (
          <Link key={project.name} href={project.link}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 4 }}
              className="cursor-pointer group"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors mb-1">
                {project.name}
              </h3>
              <p className="text-lg text-white/70 mb-2">{project.role}</p>
              <p className="text-base text-white/50 leading-relaxed mb-7">
                {project.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
      <Link href="/projects">
        <motion.div
          whileHover={{ x: 4 }}
         className="text-base text-orange-500 hover:translate-x-1 transition-all cursor-pointer"
        >
          view all projects →
        </motion.div>
      </Link>
    </motion.div>
  );
}
