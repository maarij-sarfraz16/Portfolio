import type { Project } from "@/content/work";

/**
 * Illustrative artwork for projects without a real screenshot yet.
 * These are diagrams of each project's idea, not mock UI screenshots.
 */
export function ProjectVisual({ slug }: { slug: Project["slug"] }) {
  return slug === "codecanvas" ? <CodeCanvasArt /> : <PropertyLeadArt />;
}

const sketch = "stroke-paper/70";

function CodeCanvasArt() {
  return (
    <div className="absolute inset-0 bg-ink">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="size-full transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.03]"
        aria-hidden
      >
        {/* dotted canvas */}
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-paper/10" />
          </pattern>
        </defs>
        <rect width="800" height="500" fill="url(#dots)" />

        {/* hand-drawn wireframe */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" className={sketch}>
          <path d="M92 98 Q210 92 338 99 M336 96 Q341 240 334 384 M337 382 Q210 388 94 381 M96 384 Q89 240 94 95" />
          <path d="M116 126 Q210 122 312 127" />
          <path d="M118 158 Q170 155 212 158 L211 250 Q165 253 117 250 Z" strokeDasharray="1 7" />
          <path d="M236 162 Q274 159 312 162 M236 186 Q270 184 300 186 M236 210 Q264 208 290 210" />
          <path d="M118 282 Q214 279 312 283 L311 320 Q214 323 118 319 Z" />
          <path d="M150 350 Q180 347 210 350" />
          <path d="M130 170 L200 240 M200 170 L130 240" strokeWidth="1.4" />
        </g>

        {/* arrow */}
        <g fill="none" strokeWidth="2" strokeLinecap="round" className="stroke-accent">
          <path d="M366 240 Q400 222 438 240" />
          <path d="M428 230 L439 240 L427 250" />
        </g>

        {/* code window */}
        <g>
          <rect x="462" y="98" width="258" height="286" rx="12" className="fill-paper/[0.06] stroke-paper/15" />
          <circle cx="484" cy="118" r="4" className="fill-paper/25" />
          <circle cx="498" cy="118" r="4" className="fill-paper/25" />
          <circle cx="512" cy="118" r="4" className="fill-paper/25" />
          {[
            [0, 60, "accent"],
            [16, 120, "paper"],
            [16, 86, "paper"],
            [32, 140, "muted"],
            [32, 104, "muted"],
            [16, 70, "paper"],
            [0, 30, "accent"],
            [0, 76, "accent"],
            [16, 150, "paper"],
            [16, 96, "muted"],
            [0, 40, "accent"],
          ].map(([indent, w, tone], i) => (
            <rect
              key={i}
              x={484 + (indent as number)}
              y={146 + i * 20}
              width={w as number}
              height="7"
              rx="3.5"
              className={
                tone === "accent"
                  ? "fill-accent/80"
                  : tone === "muted"
                    ? "fill-paper/20"
                    : "fill-paper/45"
              }
            />
          ))}
        </g>
      </svg>
      <p className="absolute bottom-5 left-6 font-serif text-[clamp(1.5rem,3.4vw,2.4rem)] leading-none text-paper italic sm:bottom-7 sm:left-8">
        Draw. Describe. <span className="text-accent">Download.</span>
      </p>
    </div>
  );
}

function PropertyLeadArt() {
  const stages = ["Apify", "Gemini", "pgvector", "Leads"];
  return (
    <div className="absolute inset-0 bg-paper-2">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="size-full transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.03]"
        aria-hidden
      >
        {/* pipeline */}
        <line x1="130" y1="112" x2="670" y2="112" className="stroke-ink/25" strokeWidth="1.5" strokeDasharray="3 6" />
        {stages.map((s, i) => {
          const x = 130 + i * 180;
          const last = i === stages.length - 1;
          return (
            <g key={s}>
              <rect
                x={x - 62}
                y="90"
                width="124"
                height="44"
                rx="22"
                className={last ? "fill-ink" : "fill-card stroke-ink/15"}
              />
              <text
                x={x}
                y="117"
                textAnchor="middle"
                className={`font-mono text-[14px] ${last ? "fill-paper" : "fill-ink"}`}
              >
                {s}
              </text>
            </g>
          );
        })}

        {/* lead table */}
        <g>
          <rect x="68" y="178" width="664" height="262" rx="14" className="fill-card stroke-ink/10" />
          <line x1="68" y1="220" x2="732" y2="220" className="stroke-ink/10" />
          {["Property", "Location", "Match", "Status"].map((h, i) => (
            <text key={h} x={96 + [0, 230, 420, 540][i]} y="204" className="fill-ink/45 font-mono text-[12px] tracking-wider uppercase">
              {h}
            </text>
          ))}
          {[0, 1, 2, 3, 4].map((r) => {
            const y = 246 + r * 40;
            return (
              <g key={r}>
                <rect x="96" y={y - 6} width={[150, 120, 170, 132, 110][r]} height="10" rx="5" className="fill-ink/70" />
                <rect x="326" y={y - 6} width={[90, 110, 76, 100, 84][r]} height="10" rx="5" className="fill-ink/20" />
                <rect x="516" y={y - 5} width="80" height="8" rx="4" className="fill-ink/10" />
                <rect x="516" y={y - 5} width={[68, 52, 74, 40, 60][r]} height="8" rx="4" className="fill-ink/40" />
                <circle cx="644" cy={y - 1} r="5" className={r % 2 === 0 ? "fill-accent" : "fill-ink/25"} />
                {r < 4 && <line x1="96" y1={y + 20} x2="704" y2={y + 20} className="stroke-ink/[0.07]" />}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
