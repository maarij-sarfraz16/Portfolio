/**
 * Projects, experience and skills.
 *
 * Only facts Maarij provided are listed here. Optional fields (links, role,
 * period, summary, image) render only when filled in — add them as you have
 * accurate details rather than inventing any.
 */

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: "codecanvas" | "propertyleadsystem";
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  /** Your role / contribution, e.g. "Full-stack developer". */
  role?: string;
  year?: string;
  links?: ProjectLink[];
  /** Real screenshot in /public, e.g. "/work/codecanvas.png". Falls back to an illustration. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "codecanvas",
    name: "CodeCanvas",
    tagline: "Draw. Describe. Download.",
    summary:
      "An AI-powered sketch-to-code platform for web development. Sketch a layout, describe what it should do, and turn it into front-end code.",
    stack: ["Next.js", "FastAPI", "Supabase", "OpenRouter", "AI / ML"],
    role: undefined, // TODO(Maarij): e.g. "Full-stack developer"
    links: [], // TODO(Maarij): e.g. [{ label: "Live site", href: "https://…" }]
  },
  {
    slug: "propertyleadsystem",
    name: "PropertyLeadSystem",
    tagline: "From scattered listings to workable leads.",
    summary:
      "A property lead management and extraction platform. Apify and Gemini handle property data extraction; a FastAPI service backed by PostgreSQL, pgvector and Redis stores and serves it; a React / Vite front end is where leads get managed.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "React / Vite",
      "Apify",
      "Gemini",
    ],
    role: undefined, // TODO(Maarij): e.g. "Back-end developer"
    links: [],
  },
];

export type Role = {
  company: string;
  title: string;
  /** e.g. "2024 — Present". */
  period?: string;
  /** One or two sentences on what you did there. */
  summary?: string;
};

export const experience: Role[] = [
  {
    company: "ATS Synthetic Private Limited",
    title: "Back-end Developer",
    period: undefined, // TODO(Maarij)
    summary: undefined, // TODO(Maarij)
  },
  {
    company: "Ascend BPO",
    title: "Software Engineer Intern",
    period: undefined, // TODO(Maarij)
    summary: undefined, // TODO(Maarij)
  },
];

export const skills: { group: string; note: string; items: string[] }[] = [
  {
    group: "Frontend",
    note: "Interfaces for web and mobile",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "React Native"],
  },
  {
    group: "Backend",
    note: "Services and APIs",
    items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
  },
  {
    group: "Data",
    note: "Storage and caching",
    items: ["PostgreSQL", "pgvector", "Redis", "Supabase"],
  },
  {
    group: "AI",
    note: "Models inside real workflows",
    items: ["LLM APIs", "OpenRouter", "Gemini", "AI automation", "Data extraction"],
  },
  {
    group: "Business systems",
    note: "ERP development",
    items: ["ERPNext", "Frappe"],
  },
  {
    group: "Product",
    note: "How it looks and feels",
    items: ["UI / UX"],
  },
];
