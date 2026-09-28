import { stagger } from "@/lib/stagger";
import { Em, Section } from "../section";

const approach = [
  {
    title: "Start with what it's for",
    body: "Before choosing a stack I want to know who uses the thing and what a good day with it looks like.",
  },
  {
    title: "Keep the system legible",
    body: "Clear APIs, boring data models, code the next person can read. Cleverness goes where users feel it.",
  },
  {
    title: "Treat AI as a component",
    body: "A model is one part of a larger system — it still needs good inputs, sane fallbacks and a real interface.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          A developer who likes <Em>owning the whole problem.</Em>
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="space-y-6 md:col-span-8" data-reveal>
          <p className="text-xl leading-[1.55] tracking-[-0.01em] text-ink sm:text-2xl">
            I&apos;m Maarij, a software developer working across the front end
            and the back end. Most of my work sits between a React or Next.js
            interface and a Python or Node.js service — designing the API,
            shaping the data, then making the screen on top feel obvious.
          </p>
          <p className="text-[17px] leading-relaxed text-ink-2">
            Lately a lot of that involves AI: connecting LLM APIs to real
            workflows, pulling structured data out of messy sources, and
            building tools where the model is one piece of a product rather
            than the whole pitch. I&apos;ve also worked with ERPNext and Frappe
            on the business-systems side, and with React Native when a project
            needs to live on a phone.
          </p>
        </div>
      </div>

      <ul className="mt-16 grid gap-px border-y border-line bg-line sm:grid-cols-3">
        {approach.map((a, i) => (
          <li key={a.title} data-reveal style={stagger(i)} className="bg-paper py-6 sm:px-5 sm:first:pl-0 sm:last:pr-0">
            <p className="font-medium tracking-tight">{a.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
