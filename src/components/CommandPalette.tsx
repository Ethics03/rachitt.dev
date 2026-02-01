"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  House,
  User,
  FolderOpen,
  FileText,
  Github,
  Linkedin,
  Mail,
  Calendar,
  ExternalLink,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import type { PostMetaData } from "@/app/components/getPostMetadata";
import { socials } from "@/app/lib/socials";

type Project = {
  id: number;
  name: string;
  description: string;
  link: string;
  tech: string[];
};

type CommandPaletteProps = {
  posts?: PostMetaData[];
  projects?: Project[];
};

export function CommandPalette({
  posts = [],
  projects = [],
}: CommandPaletteProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <House className="text-white/70 group-data-[selected=true]:text-black" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
            <User className="text-white/70 group-data-[selected=true]:text-black" />
            <span>About</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/projects"))}
          >
            <FolderOpen className="text-white/70 group-data-[selected=true]:text-black" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/blog"))}>
            <FileText className="text-white/70 group-data-[selected=true]:text-black" />
            <span>Blog</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        {posts.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Blog Posts">
              {posts.map((post) => (
                <CommandItem
                  key={post.slug}
                  onSelect={() =>
                    runCommand(() => router.push(`/blog/${post.slug}`))
                  }
                  value={`${post.title} ${post.excerpt || ""}`}
                >
                  <FileText className="text-white/70 group-data-[selected=true]:text-black" />
                  <div className="flex flex-col gap-0.5">
                    <span>{post.title}</span>
                    {post.excerpt && (
                      <span className="text-xs text-white/60 line-clamp-1">
                        {post.excerpt}
                      </span>
                    )}
                  </div>
                  <Calendar className="ml-auto text-white/50 group-data-[selected=true]:text-black" />
                  <span className="text-xs text-white/50 group-data-[selected=true]:text-black">
                    {post.date}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        {projects.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Projects">
              {projects.map((project) => (
                <CommandItem
                  key={project.id}
                  onSelect={() =>
                    runCommand(() => window.open(project.link, "_blank"))
                  }
                  value={`${project.name} ${project.description} ${project.tech.join(" ")}`}
                >
                  <ExternalLink className="text-white/70 group-data-[selected=true]:text-black" />
                  <div className="flex flex-col gap-0.5">
                    <span>{project.name}</span>
                    <span className="text-xs text-white/60 group-data-[selected=true]:text-black line-clamp-1">
                      {project.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        <CommandSeparator />
        <CommandGroup heading="Social">
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open(
                  socials.find((s) => s.name === "github")?.href,
                  "_blank",
                ),
              )
            }
          >
            <Github className="text-white/70 group-data-[selected=true]:text-black" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open(
                  socials.find((s) => s.name === "x.com")?.href,
                  "_blank",
                ),
              )
            }
          >
            <ExternalLink className="text-white/70 group-data-[selected=true]:text-black" />
            <span>X (Twitter)</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open(
                  socials.find((s) => s.name === "linkedin")?.href,
                  "_blank",
                ),
              )
            }
          >
            <Linkedin className="text-white/70 group-data-[selected=true]:text-black" />
            <span>LinkedIn</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open("mailto:hello@rachitt.dev", "_blank"),
              )
            }
          >
            <Mail className="text-white/70 group-data-[selected=true]:text-black" />
            <span>Email</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
