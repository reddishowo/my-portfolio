export type FeaturedProject = {
  number: string;
  title: string;
  category: string;
  period: string;
  tagline: string;
  image: string;
  imageAlt: string;
  stack: readonly string[];
  repository: string;
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    number: "01",
    title: "MekTek CRM",
    category: "Operations platform",
    period: "2026 — ongoing",
    tagline: "Operations CRM for heavy-equipment service teams.",
    image: "/images/8.png",
    imageAlt: "MekTek CRM customer and operations dashboard",
    stack: ["Next.js", "TypeScript", "Product design"],
    repository: "https://github.com/Haeryz/nextcrm-app",
  },
  {
    number: "02",
    title: "SPPDN Mobile",
    category: "Mobile operations",
    period: "2025 — internship",
    tagline: "Attendance and field activity for customs lab staff.",
    image: "/images/2.png",
    imageAlt: "SPPDN employee attendance application screens",
    stack: ["Flutter", "Dart", "GetX"],
    repository: "https://github.com/reddishowo/sppdn-beacukai",
  },
  {
    number: "03",
    title: "Evenity",
    category: "Event platform",
    period: "Full-stack product",
    tagline: "Events, ticketing, and attendees in one flow.",
    image: "/images/3.png",
    imageAlt: "Evenity event-management website on laptop and tablet",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repository: "https://github.com/reddishowo/event-management-web",
  },
];

export const archiveProjects = [
  {
    number: "04",
    title: "Bio Collab",
    type: "Collaborative learning platform",
    year: "2025",
    stack: "Next.js · MongoDB",
    repository: "https://github.com/reddishowo/bio-collab",
  },
  {
    number: "05",
    title: "Micro Literacy",
    type: "Interactive learning media",
    year: "2025",
    stack: "Next.js · MongoDB",
    repository: "https://github.com/reddishowo/micro-literacy",
  },
  {
    number: "06",
    title: "Reparin Mobile",
    type: "Repair booking and live tracking",
    year: "2024",
    stack: "Flutter · Maps API",
    repository: "https://github.com/hisyam99/reparin-mobile",
  },
  {
    number: "07",
    title: "Dressmaker App",
    type: "Custom dress ordering",
    year: "2024",
    stack: "Flutter · Firebase",
    repository: "https://github.com/reddishowo/dressmaker-app",
  },
  {
    number: "08",
    title: "Transformer Topic Modeling",
    type: "Scientific-literature research",
    year: "Research",
    stack: "Python · NLP · ML",
    repository:
      "https://github.com/reddishowo/Transformer-Based-Topic-Modeling-Pipeline-for-Scientific-Literature",
  },
] as const;

export const experience = [
  {
    period: "Mar 2026 — now",
    role: "Freelance Full-Stack Web Developer",
    organization: "PT MekTek Tanjung Lestari",
    tagline: "Operational CRM for service workflows.",
  },
  {
    period: "Jun — Aug 2025",
    role: "Mobile App Developer Intern",
    organization: "Balai Laboratorium Bea dan Cukai",
    tagline: "SPPDN attendance and activity app.",
  },
  {
    period: "2022 — present",
    role: "Bachelor of Informatics",
    organization: "Universitas Muhammadiyah Malang",
    tagline: "Web, mobile, and data systems.",
  },
  {
    period: "Ongoing research",
    role: "Transformer Topic Modeling",
    organization: "Scientific-literature pipelines",
    tagline: "NLP workflows for scientific literature.",
  },
] as const;

export const principles = [
  "Understand the real workflow before shaping the interface.",
  "Reduce friction before adding features.",
  "Build systems that another person can follow and extend.",
] as const;

export const socialLinks = {
  github: "https://github.com/reddishowo",
  linkedin: "https://www.linkedin.com/in/farriel-arrianta/",
} as const;
