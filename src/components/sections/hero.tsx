import { stagger } from "@/lib/stagger";
import { ArrowDown } from "../icons";

const focus = [
  {
    n: "01",
    title: "Interfaces",
    body: "Web and mobile front ends in React, Next.js and React Native.",
  },
  {
    n: "02",
    title: "Systems",
    body: "APIs and services in FastAPI, Node.js and Express, on PostgreSQL.",
  },
  {
    n: "03",
    title: "AI & automation",
    body: "LLM-powered features and data extraction wired into real workflows.",
  },
];

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="pt-6 pb-24 sm:pb-32 lg:pt-0">
      <p
        className="enter flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
        style={stagger(1)}
      >
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        Software Developer
      </p>

      <h1
        id="home-title"
        className="enter mt-6 text-[clamp(2.6rem,7.2vw,5.6rem)] leading-[0.95] font-medium tracking-[-0.045em] text-balance"
        style={stagger(2)}
      >
        I build software <br className="max-sm:hidden" />
        from the interface{" "}
        <span className="font-serif font-normal tracking-[-0.015em] whitespace-nowrap text-faint italic">
          down to the API<span className="text-accent not-italic">.</span>
        </span>
      </h1>

      <p
        className="enter mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-2 sm:text-xl"
        style={stagger(3)}
      >
        Thoughtful web products and AI-powered tools — with as much care for
        the back end that runs them as for the screens people actually see.
      </p>

      <div className="enter mt-10 flex flex-wrap items-center gap-x-6 gap-y-4" style={stagger(4)}>
        <a
          href="#work"
          className="group inline-flex h-12 items-center gap-3 rounded-full bg-ink pr-2 pl-6 text-[15px] font-medium text-paper transition-colors duration-300 hover:bg-accent"
        >
          View work
          <span className="grid size-8 place-items-center rounded-full bg-paper/10 transition-transform duration-500 ease-out-soft group-hover:translate-y-0.5">
            <ArrowDown className="size-4" />
          </span>
        </a>
        <a href="#contact" className="link-underline pb-0.5 text-[15px] font-medium">
          Contact me
        </a>
      </div>

      <ol className="mt-20 grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:mt-24 sm:grid-cols-3">
        {focus.map((f, i) => (
          <li key={f.n} data-reveal style={stagger(i)} className="bg-card p-6 sm:p-5 xl:p-6">
            <span className="font-mono text-[11px] text-accent">{f.n}</span>
            <p className="mt-5 text-lg font-medium tracking-tight sm:mt-10">{f.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
