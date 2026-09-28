import { site } from "@/content/site";
import { ArrowUp, ArrowUpRight } from "../icons";
import { socials } from "../social-links";

export function Contact() {
  const email = socials[0];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden rounded-[22px] bg-ink px-6 pt-12 pb-8 text-paper sm:px-10 sm:pt-16"
    >
      <div data-reveal>
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-paper/60 uppercase">
          <span className="text-accent">05</span>
          <span className="h-px w-8 bg-paper/20" aria-hidden />
          Contact
        </p>
        <h2
          id="contact-title"
          className="mt-5 max-w-[14ch] text-[clamp(2.4rem,6vw,4.75rem)] leading-[0.95] font-medium tracking-[-0.045em] text-balance"
        >
          Have something in mind?{" "}
          <em className="font-serif font-normal tracking-[-0.01em] text-paper/55 italic">
            Let&apos;s talk.
          </em>
        </h2>
        <p className="mt-6 max-w-[30rem] leading-relaxed text-paper/70">
          Whether it&apos;s a product, an API, or an idea that needs an AI
          component done properly — I&apos;m happy to hear about it.
        </p>
      </div>

      <a
        data-reveal
        href={email.href}
        className="group mt-12 flex items-center justify-between gap-4 border-y border-paper/15 py-6 sm:mt-16 sm:py-8"
      >
        <span className="min-w-0 text-[clamp(1.25rem,3.6vw,2.6rem)] tracking-[-0.03em] [overflow-wrap:anywhere]">
          {site.links.email}
          {email.placeholder && <PlaceholderTag />}
        </span>
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-paper text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-paper sm:size-14">
          <ArrowUpRight className="size-5" />
        </span>
      </a>

      <div className="mt-8 flex flex-col-reverse gap-8 sm:flex-row sm:items-end sm:justify-between">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {socials.slice(1).map(({ label, href, placeholder }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px]"
              >
                <span className="link-underline">{label}</span>
                <ArrowUpRight className="size-4 text-accent" />
                {placeholder && <PlaceholderTag />}
              </a>
            </li>
          ))}
        </ul>
        <a href="#home" className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper">
          Back to top <ArrowUp className="size-4" />
        </a>
      </div>

      <footer className="mt-14 flex flex-wrap justify-between gap-2 border-t border-paper/15 pt-6 font-mono text-[11px] tracking-[0.14em] text-paper/45 uppercase">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Built with Next.js</span>
      </footer>
    </section>
  );
}

function PlaceholderTag() {
  return (
    <span className="ml-3 inline-block translate-y-[-0.2em] rounded-full border border-dashed border-accent px-2 py-0.5 align-middle font-mono text-[10px] tracking-wider text-accent uppercase">
      placeholder
    </span>
  );
}
