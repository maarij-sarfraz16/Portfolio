import { experience } from "@/content/work";
import { stagger } from "@/lib/stagger";
import { Em, Section } from "../section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title={
        <>
          Where I&apos;ve <Em>been working.</Em>
        </>
      }
    >
      <ol className="border-b border-line">
        {experience.map((r, i) => (
          <li
            key={r.company}
            data-reveal
            style={stagger(i)}
            className="group grid gap-x-8 gap-y-2 border-t border-line py-8 transition-colors duration-500 sm:grid-cols-12 sm:py-10"
          >
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase sm:col-span-3 sm:pt-2">
              {r.period ?? String(i + 1).padStart(2, "0")}
            </p>
            <div className="sm:col-span-9">
              <h3 className="text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight font-medium tracking-[-0.03em] transition-transform duration-500 ease-out-soft group-hover:translate-x-1.5">
                {r.title}
              </h3>
              <p className="mt-1 text-lg text-muted">
                <span className="text-accent">@</span> {r.company}
              </p>
              {r.summary && (
                <p className="mt-4 max-w-[40rem] leading-relaxed text-ink-2">{r.summary}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
