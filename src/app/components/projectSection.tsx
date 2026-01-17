"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../lib/projects";

export default function ProjectsSection() {
  return (
    <div className="mb-12">
      <h2 className="font-bold mb-6 text-3xl">$ projects</h2>
      <div className="space-y-6 mb-4">
        {projects.slice(0, 2).map((project, index) => (
          <Link key={project.name} href={project.link}>
            <motion.div whileHover={{ x: 4 }} className="cursor-pointer group">
              <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors mb-1">
                {project.name}
              </h3>
              <p className=" text-gray-400 mb-2">{project.role}</p>
              <p className="text-white/90 leading-relaxed mb-7">
                {project.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
      <Link href="/projects">
        <motion.div
          whileHover={{ x: 4 }}
          className="text-base text-accent hover:translate-x-1 transition-all cursor-pointer"
        >
          view all projects →
        </motion.div>
      </Link>
    </div>
  );
}
