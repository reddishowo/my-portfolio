import { FadeIn } from "./FadeIn";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "SPPDN Bea Cukai",
      description: "National digital attendance and employee management system developed for government customs and excise staff.",
      tech: ["Flutter", "Dart", "Mobile"],
      github: "https://github.com/reddishowo/sppdn-beacukai",
      imagePath: "/images/2.png"
    },
    {
      title: "Evenity",
      description: "Comprehensive full-stack web application designed to streamline the organization, ticketing, and management of events.",
      tech: ["TypeScript", "Next.js", "Tailwind"],
      github: "https://github.com/reddishowo/event-management-web",
      imagePath: "/images/3.png"
    },
    {
      title: "Bio Collab",
      description: "Interactive e-module platform featuring real-time group collaboration, collaborative worksheets, and live evaluations.",
      tech: ["TypeScript", "Next.js", "MongoDB"],
      github: "https://github.com/reddishowo/bio-collab",
      imagePath: "/images/4.png"
    },
    {
      title: "Micro Literacy",
      description: "Interactive learning media based on Group Investigation (GI) integrating collaborative research, live discussions, and real-time evaluation.",
      tech: ["TypeScript", "Next.js", "MongoDB"],
      github: "https://github.com/reddishowo/micro-literacy",
      imagePath: "/images/5.png"
    },
    {
      title: "Reparin Mobile",
      description: "Comprehensive gadget repair booking app featuring real-time GPS tracking, in-app messaging, camera integration, and role-based dashboards.",
      tech: ["Flutter", "GetX", "Maps API"],
      github: "https://github.com/hisyam99/reparin-mobile",
      liveUrl: "https://reparin.xyz/en",
      imagePath: "/images/1.png"
    },
    {
      title: "Dressmaker App",
      description: "Innovative mobile application designed for tailoring and fashion enthusiasts to easily order custom dresses.",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/reddishowo/dressmaker-app",
      imagePath: ""
    },
    {
      title: "Transformer Topic Modeling",
      description: "A Comparative Analysis of Transformer-Based Topic Modeling Pipelines for Scientific Literature",
      tech: ["Python", "NLP", "Machine Learning", "Research Paper"],
      github: "https://github.com/reddishowo/Transformer-Based-Topic-Modeling-Pipeline-for-Scientific-Literature",
      imagePath: "/images/7.png"
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3">Selected Projects</h2>
              <p className="text-2xl font-medium text-zinc-200">Featured work across disciplines.</p>
            </div>
            <a
              href="https://github.com/reddishowo"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors"
            >
              View all on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={(i % 2) * 0.1}>
              <div className="group relative flex flex-col p-4 sm:p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-500 h-full">

                {/* Image Container — aspect-ratio based so it scales naturally on all screens */}
                <div className="w-full aspect-video bg-zinc-800/30 rounded-lg mb-5 overflow-hidden relative border border-zinc-800/50">
                  {project.imagePath ? (
                    <Image
                      src={project.imagePath}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                      className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-zinc-600">
                      <span className="text-sm tracking-widest uppercase mb-2 opacity-50">Placeholder</span>
                      <span className="text-xs">{project.title} Image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg sm:text-xl font-medium text-zinc-200 pr-2">{project.title}</h3>
                  <div className="flex gap-3 text-zinc-500 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository" className="hover:text-zinc-200 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live Demo" className="hover:text-zinc-200 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-zinc-400 font-light mb-5 text-sm leading-relaxed grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 text-[11px] text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 rounded-md font-medium tracking-wider uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}