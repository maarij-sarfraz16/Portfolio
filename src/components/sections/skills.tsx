import { skills } from "@/content/work";
import { stagger } from "@/lib/stagger";
import { Em, Section } from "../section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      label="Skills"
      title={
        <>
          The toolkit, <Em>front to back.</Em>
        </>
      }
    >
      <dl className="border-b border-line">
        {skills.map((s, i) => (
          <div
            key={s.group}
            data-reveal
            style={stagger(i)}
            className="grid gap-x-8 gap-y-3 border-t border-line py-6 sm:grid-cols-12 sm:py-7"
          >
            <dt className="sm:col-span-4">
              <span className="block font-medium tracking-tight">{s.group}</span>
              <span className="block text-sm text-muted">{s.note}</span>
            </dt>
            <dd className="sm:col-span-8">
              <ul className="flex flex-wrap gap-x-7 gap-y-1 text-[clamp(1.25rem,2.2vw,1.6rem)] tracking-[-0.02em]">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
