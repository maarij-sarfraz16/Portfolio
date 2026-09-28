import { isPlaceholder, site } from "@/content/site";
import { GitHub, LinkedIn, Mail } from "./icons";

export const socials = [
  { label: "Email", href: `mailto:${site.links.email}`, raw: site.links.email, Icon: Mail },
  { label: "LinkedIn", href: site.links.linkedin, raw: site.links.linkedin, Icon: LinkedIn },
  { label: "GitHub", href: site.links.github, raw: site.links.github, Icon: GitHub },
].map((s) => ({ ...s, placeholder: isPlaceholder(s.raw) }));

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ label, href, Icon, placeholder }) => (
        <li key={label}>
          <a
            href={href}
            {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
            title={placeholder ? `${label} — placeholder, replace in src/content/site.ts` : label}
            className={`grid size-10 place-items-center rounded-full border text-ink-2 transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper ${
              placeholder ? "border-dashed border-accent" : "border-line"
            }`}
          >
            <Icon className="size-[17px]" />
            <span className="sr-only">
              {label}
              {placeholder && " (placeholder)"}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
