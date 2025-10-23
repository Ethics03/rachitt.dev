  "use client";

  import ScrambleText from "../components/ScrambleText";
  import { projects } from "../lib/projects";
  import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

  export default function Projects() {
    return (
      <div className="flex items-center pt-10">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-4xl font-bold mb-6">
                   <ScrambleText text="$ projects" />
               </h1>

          <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="p-5 border border-white/30 hover:border-orange-500 transition-colors duration-300 group relative"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-3xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                  {project.name}
                </h2>
                <ArrowUpRightIcon 
                  className="text-white/50 group-hover:text-orange-500 transition-colors duration-300 flex-shrink-0" 
                  size={24}
                />
              </div>

                <p className="text-white/70 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-white/20 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
    );
  }
