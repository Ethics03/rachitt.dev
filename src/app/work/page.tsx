"use client";
import { motion } from "framer-motion";
import ScrambleText from "../components/ScrambleText";

export default function Work() {
  const works = [
    {
      id: "intern",
      role: "Backend Developer Intern",
      company: "Fordsmen",
      period: "2025",
      description:
        "Worked on backend services and monolith architecture. Improved system performance and implemented new features.",
      tech: ["Typescript", "NestJS", "PostgreSQL", "Docker", "Redis", "AWS EC2","nginx"],
      link: "https://fordsmen.com",
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
          <ScrambleText text="$ experience" />
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((exp, index) => (
            <motion.a
              key={exp.id}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="border border-white/10 hover:border-orange-500 p-8 transition-all duration-300 cursor-pointer group block"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                  <ScrambleText text={exp.role} delay={index * 150} />
                </h2>
                <span className="text-white/50 text-sm">{exp.period}</span>
              </div>
              
              <h3 className="text-lg text-white/80 mb-3">
                <ScrambleText text={exp.company} delay={index * 150 + 50} />
              </h3>

              <p className="text-white/70 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
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
