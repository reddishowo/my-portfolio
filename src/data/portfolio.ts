export type FeaturedProject = {
  number: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  contribution: string;
  detail: string;
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
    summary:
      "A purpose-built CRM that gives a heavy-equipment service team one clear view of customers, communication, and service progress.",
    contribution:
      "I am designing and building the product end to end, translating an operational workflow into a maintainable full-stack system.",
    detail: "Customer records · service lifecycle · dashboards",
    image: "/images/8.png",
    imageAlt: "MekTek CRM customer and operations dashboard",
    stack: ["Next.js", "TypeScript", "CRM architecture", "Product design"],
    repository: "https://github.com/Haeryz/nextcrm-app",
  },
  {
    number: "02",
    title: "SPPDN Mobile",
    category: "Mobile operations",
    period: "2025 — internship",
    summary:
      "A mobile attendance and activity system for customs laboratory staff working across office and field contexts.",
    contribution:
      "I built the Flutter application around real employee routines, including attendance, activity documentation, photos, and history.",
    detail: "Attendance · field documentation · activity history",
    image: "/images/2.png",
    imageAlt: "SPPDN employee attendance application screens",
    stack: ["Flutter", "Dart", "GetX", "Mobile workflows"],
    repository: "https://github.com/reddishowo/sppdn-beacukai",
  },
  {
    number: "03",
    title: "Evenity",
    category: "Event platform",
    period: "Full-stack product",
    summary:
      "A web product that brings event organization, ticketing, attendee management, and day-to-day operations into one coherent flow.",
    contribution:
      "I shaped the interface and full-stack experience around the different tasks organizers and attendees need to complete.",
    detail: "Events · ticketing · attendee workflows",
    image: "/images/3.png",
    imageAlt: "Evenity event-management website on laptop and tablet",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Product UI"],
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
    description:
      "Designing and developing an operational CRM for customer records, service workflows, communication, and reporting.",
  },
  {
    period: "Jun — Aug 2025",
    role: "Mobile App Developer Intern",
    organization: "Balai Laboratorium Bea dan Cukai",
    description:
      "Created the SPPDN mobile application to support employee attendance and activity-management workflows.",
  },
  {
    period: "2022 — present",
    role: "Bachelor of Informatics",
    organization: "Universitas Muhammadiyah Malang",
    description:
      "Studying software engineering through web platforms, mobile applications, and data-oriented systems.",
  },
  {
    period: "Ongoing research",
    role: "Transformer Topic Modeling",
    organization: "Scientific-literature pipelines",
    description:
      "Exploring transformer-based workflows for comparing and understanding collections of scientific literature.",
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
