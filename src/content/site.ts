/**
 * Site-wide profile and contact details.
 *
 * Any link left set to one of the placeholder values below renders with a
 * visible "placeholder" tag so it can't ship unnoticed.
 */

export const PLACEHOLDER_EMAIL = "your.email@example.com";
export const PLACEHOLDER_LINKEDIN = "https://www.linkedin.com/in/your-handle";
export const PLACEHOLDER_GITHUB = "https://github.com/your-handle";

export const site = {
  name: "Maarij Sarfraz",
  shortName: "MS",
  role: "Software Developer",
  // TODO(Maarij): set this to your deployed domain, e.g. "https://maarij.dev".
  url: "https://example.com",
  description:
    "Maarij Sarfraz is a software developer building web products end to end — React and Next.js interfaces, Python and Node.js back ends, and AI-powered tools.",
  // Optional: drop a square photo in /public (e.g. /public/portrait.jpg) and
  // set this to "/portrait.jpg". Leave null to show the monogram instead.
  portrait: "/portrait.jpg" as string | null,
  links: {
    email: "maarijsarfrazwork@gmail.com",
    linkedin: "https://www.linkedin.com/in/maarij-sarfraz/",
    github: "https://github.com/maarij-sarfraz16",
  },
};

export function isPlaceholder(value: string) {
  return (
    value === PLACEHOLDER_EMAIL ||
    value === PLACEHOLDER_LINKEDIN ||
    value === PLACEHOLDER_GITHUB
  );
}

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof nav)[number]["id"];
