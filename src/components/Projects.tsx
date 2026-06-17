import { FadeIn } from "./FadeIn";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  liveUrl?: string;
  imagePath?: string;
  command: string;
  accent: "cyan" | "lime" | "amber" | "rose" | "violet";
};

const accentClasses: Record<Project["accent"], string> = {
  cyan: "hover:border-cyan-300/60",
  lime: "hover:border-lime-300/60",
  amber: "hover:border-amber-300/60",
  rose: "hover:border-rose-300/60",
  violet: "hover:border-violet-300/60",
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "MekTek CRM App",
      description: "A modern CRM application for managing customers, leads, and business workflows with a clean full-stack dashboard experience.",
      tech: ["Next.js", "TypeScript", "CRM", "Dashboard"],
      github: "https://github.com/Haeryz/nextcrm-app",
      command: "open --repo Haeryz/nextcrm-app",
      accent: "cyan",
    },
    {
      title: "SPPDN Bea Cukai",
      description: "National digital attendance and employee management system developed for government customs and excise staff.",
      tech: ["Flutter", "Dart", "Mobile"],
      github: "https://github.com/reddishowo/sppdn-beacukai",
      imagePath: "/images/2.png",
      command: "deploy --mobile attendance",
      accent: "lime",
    },
    {
      title: "Evenity",
      description: "Comprehensive full-stack web application designed to streamline the organization, ticketing, and management of events.",
      tech: ["TypeScript", "Next.js", "Tailwind"],
      github: "https://github.com/reddishowo/event-management-web",
      imagePath: "/images/3.png",
      command: "build --events ticketing",
      accent: "amber",
    },
    {
      title: "Bio Collab",
      description: "Interactive e-module platform featuring real-time group collaboration, collaborative worksheets, and live evaluations.",
      tech: ["TypeScript", "Next.js", "MongoDB"],
      github: "https://github.com/reddishowo/bio-collab",
      imagePath: "/images/4.png",
      command: "sync --classroom live",
      accent: "violet",
    },
    {
      title: "Micro Literacy",
      description: "Interactive learning media based on Group Investigation (GI) integrating collaborative research, live discussions, and real-time evaluation.",
      tech: ["TypeScript", "Next.js", "MongoDB"],
      github: "https://github.com/reddishowo/micro-literacy",
      imagePath: "/images/5.png",
      command: "study --groups research",
      accent: "rose",
    },
    {
      title: "Reparin Mobile",
      description: "Comprehensive gadget repair booking app featuring real-time GPS tracking, in-app messaging, camera integration, and role-based dashboards.",
      tech: ["Flutter", "GetX", "Maps API"],
      github: "https://github.com/hisyam99/reparin-mobile",
      liveUrl: "https://reparin.xyz/en",
      imagePath: "/images/1.png",
      command: "track --repair gps",
      accent: "cyan",
    },
    {
      title: "Dressmaker App",
      description: "Innovative mobile application designed for tailoring and fashion enthusiasts to easily order custom dresses.",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/reddishowo/dressmaker-app",
      command: "measure --custom dress",
      accent: "lime",
    },
    {
      title: "Transformer Topic Modeling",
      description: "A Comparative Analysis of Transformer-Based Topic Modeling Pipelines for Scientific Literature",
      tech: ["Python", "NLP", "Machine Learning", "Research Paper"],
      github: "https://github.com/reddishowo/Transformer-Based-Topic-Modeling-Pipeline-for-Scientific-Literature",
      imagePath: "/images/7.png",
      command: "analyze --papers transformer",
      accent: "amber",
    },
  ];

  return (
    <section id="projects" className="relative z-10 border-t border-zinc-900 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-sm text-cyan-200">/projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-100 sm:text-4xl">Command output from shipped work.</h2>
            </div>
            <a
              href="https://github.com/reddishowo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              View all on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={(i % 2) * 0.1}>
              <article className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/70 transition-colors duration-500 ${accentClasses[project.accent]}`}>
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-300/80" />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800 bg-zinc-900">
                  {project.imagePath ? (
                    <Image
                      src={project.imagePath}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                      className="object-cover opacity-75 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between p-5">
                      <div className="font-mono text-xs text-zinc-500">$ {project.command}</div>
                      <div>
                        <div className="mb-3 h-2 w-3/4 rounded-full bg-cyan-300/40" />
                        <div className="mb-3 h-2 w-1/2 rounded-full bg-lime-300/30" />
                        <div className="h-2 w-2/3 rounded-full bg-amber-300/30" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="h-12 rounded-md border border-zinc-800 bg-zinc-950/80" />
                        <span className="h-12 rounded-md border border-zinc-800 bg-zinc-950/80" />
                        <span className="h-12 rounded-md border border-zinc-800 bg-zinc-950/80" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex grow flex-col p-5">
                  <p className="mb-3 font-mono text-xs text-zinc-600">$ {project.command}</p>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                    <div className="flex shrink-0 gap-2 text-zinc-500">
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`} className="rounded-md border border-zinc-800 p-2 transition-colors hover:border-zinc-600 hover:text-zinc-100">
                        <Github size={17} />
                      </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`} className="rounded-md border border-zinc-800 p-2 transition-colors hover:border-zinc-600 hover:text-zinc-100">
                          <ExternalLink size={17} />
                      </a>
                    )}
                    </div>
                  </div>

                  <p className="mb-5 grow text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map(t => (
                      <span key={t} className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
