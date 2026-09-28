import Image from "next/image";
import { projects, type Project } from "@/content/work";
import { ArrowUpRight } from "../icons";
import { ProjectVisual } from "../project-visual";
import { Em, Section } from "../section";

export function Work() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title={
        <>
          Things I&apos;ve built, <Em>end to end.</Em>
        </>
      }
    >
      <div className="space-y-20 sm:space-y-28">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const primary = p.links?.[0];

  const visual = (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-line">
      {p.image ? (
        <Image
          src={p.image}
          alt={`${p.name} screenshot`}
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.03]"
        />
      ) : (
        <ProjectVisual slug={p.slug} />
      )}
      {primary && (
        <span className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 ease-out-soft group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
      )}
    </div>
  );

  return (
    <article data-reveal className="group" aria-labelledby={`${p.slug}-name`}>
      {primary ? (
        <a
          href={primary.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${p.name} — ${primary.label}`}
          className="block"
        >
          {visual}
        </a>
      ) : (
        visual
      )}

      <div className="mt-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <div className="flex min-w-0 items-baseline gap-4">
          <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            id={`${p.slug}-name`}
            className="min-w-0 text-[clamp(1.75rem,3.6vw,2.6rem)] leading-none font-medium tracking-[-0.035em] [overflow-wrap:anywhere]"
          >
            {p.name}
          </h3>
        </div>
        <p className="font-serif text-xl text-faint italic">
          {p.tagline}
          {p.year && <span className="ml-3 font-mono text-[11px] not-italic">{p.year}</span>}
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-12 md:gap-10">
        <p className="text-[17px] leading-relaxed text-ink-2 md:col-span-7">{p.summary}</p>

        <div className="md:col-span-5">
          <dl className="grid gap-4 border-t border-line pt-5 text-sm md:border-t-0 md:pt-1">
            {p.role && (
              <>
                <dt className="text-muted">Role</dt>
                <dd>{p.role}</dd>
              </>
            )}
            <dt className="text-muted">Stack</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-[13px] text-ink-2">
                    {t}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>

          {p.links && p.links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {p.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] font-medium"
                  >
                    <span className="link-underline">{l.label}</span>
                    <ArrowUpRight className="size-4 text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
