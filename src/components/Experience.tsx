import { Award, BriefcaseBusiness, GraduationCap, LucideIcon, Microscope, Smartphone } from "lucide-react";
import { FadeIn } from "./FadeIn";

type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

type ExperienceGroup = {
  label: string;
  accent: string;
  items: ExperienceItem[];
};

const groups: ExperienceGroup[] = [
  {
    label: "Education",
    accent: "bg-cyan-300",
    items: [
      {
        period: "2022 - Present",
        title: "Bachelor of Informatics",
        place: "Universitas Muhammadiyah Malang",
        description: "Studying informatics with a focus on software engineering, web platforms, mobile applications, and data-oriented systems.",
        icon: GraduationCap,
        tags: ["Education", "Informatics", "Software Engineering"],
      },
      {
        period: "2019 - 2022",
        title: "High School",
        place: "SMAN 08 Malang",
        description: "Completed high school education before continuing into informatics and software engineering study.",
        icon: GraduationCap,
        tags: ["Education", "High School"],
      },
    ],
  },
  {
    label: "Certifications",
    accent: "bg-amber-300",
    items: [
      {
        period: "2024",
        title: "Master Data Warehousing, Dimensional Modeling & ETL Process",
        place: "Udemy",
        description: "Certification focused on data warehousing concepts, dimensional modeling, and ETL process fundamentals.",
        icon: Award,
        tags: ["Certification", "Data Warehouse", "ETL"],
      },
      {
        period: "2024",
        title: "Data Science",
        place: "MySkill",
        description: "Certification covering data science fundamentals and practical analytical workflows.",
        icon: Award,
        tags: ["Certification", "Data Science"],
      },
    ],
  },
  {
    label: "Project Work",
    accent: "bg-lime-300",
    items: [
      {
        period: "March 2026 - Present",
        title: "Freelance Full-Stack Web Developer",
        place: "PT. MekTek Tanjung Lestari",
        description: "Creating an ongoing CRM website to support customer management, workflow tracking, and operational dashboard needs.",
        icon: BriefcaseBusiness,
        tags: ["Freelance", "CRM", "Full-Stack"],
      },
      {
        period: "June 2025 - August 2025",
        title: "Mobile App Developer Intern",
        place: "BLBC Balai Laboratorium Bea dan Cukai",
        description: "Created the SPPDN Mobile App during internship, supporting digital attendance and employee management workflows.",
        icon: Smartphone,
        tags: ["Internship", "SPPDN", "Mobile App"],
      },
      {
        period: "Mobile",
        title: "Flutter App Developer",
        place: "Cross-platform applications",
        description: "Developed mobile products with booking flows, GPS tracking, in-app messaging, role dashboards, and Firebase-backed features.",
        icon: Smartphone,
        tags: ["Flutter", "Dart", "GetX"],
      },
      {
        period: "Research",
        title: "Data and ML Explorer",
        place: "Scientific Literature Pipelines",
        description: "Explored data and machine learning workflows for scientific literature analysis and topic modeling pipelines.",
        icon: Microscope,
        tags: ["Python", "NLP", "Machine Learning"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 border-t border-zinc-900 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-sm text-cyan-200">/experience</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-100 sm:text-4xl">Where the work has been shaped.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-500">
              A compact timeline of education, certifications, product work, mobile development, and research-oriented engineering.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {groups.map((group, groupIndex) => (
            <FadeIn key={group.label} delay={groupIndex * 0.08}>
              <div className="grid gap-4 md:grid-cols-[12rem_1fr]">
                <div className="flex items-center gap-3 md:items-start">
                  <span className={`mt-1 h-2 w-10 rounded-full ${group.accent}`} />
                  <div>
                    <p className="font-mono text-xs text-zinc-600">group</p>
                    <h3 className="text-lg font-semibold text-zinc-100">{group.label}</h3>
                  </div>
                </div>

                <div className="relative grid gap-4 border-l border-zinc-800 pl-4 md:grid-cols-2">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article key={item.title} className="group relative h-full rounded-lg border border-zinc-800 bg-zinc-950/70 p-5 transition-colors hover:border-cyan-300/50">
                        <span className={`absolute -left-[1.35rem] top-6 h-2.5 w-2.5 rounded-full ring-4 ring-[#0b0d10] ${group.accent}`} />
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-cyan-200">
                              <Icon size={18} />
                            </span>
                            <div>
                              <p className="font-mono text-xs text-zinc-600">{item.period}</p>
                              <h4 className="mt-1 text-lg font-semibold text-zinc-100">{item.title}</h4>
                            </div>
                          </div>
                        </div>

                        <p className="font-mono text-sm text-zinc-500">{item.place}</p>
                        <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
