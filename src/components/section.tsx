import type { ReactNode } from "react";

export function Section({
  id,
  index,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-line pt-10 pb-20 sm:pt-12 sm:pb-32 ${className}`}
    >
      <div data-reveal className="mb-12 sm:mb-16">
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-line" aria-hidden />
          {label}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-5 max-w-[18ch] text-[clamp(2.25rem,5.4vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.04em] text-balance"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

/** Muted serif-italic accent used inside headings. */
export function Em({ children }: { children: ReactNode }) {
  return (
    <em className="font-serif font-normal tracking-[-0.01em] text-faint italic">
      {children}
    </em>
  );
}
