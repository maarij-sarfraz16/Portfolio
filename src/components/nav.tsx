"use client";

import { useEffect, useState } from "react";
import { nav, site, type SectionId } from "@/content/site";
import { stagger } from "@/lib/stagger";

export function Nav() {
  const [active, setActive] = useState<SectionId>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = nav
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((el) => observer.observe(el));

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          open ? "bg-paper" : scrolled ? "bg-paper/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-10"
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-[15px] font-medium tracking-tight"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-7 place-items-center rounded-full bg-ink font-serif text-[15px] text-paper italic transition-transform duration-500 ease-out-soft group-hover:rotate-[-8deg]">
              m
            </span>
            {site.name}
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-line bg-card/80 p-1 md:flex">
            {nav.slice(1, -1).map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`block rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                    active === id
                      ? "bg-ink text-paper"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden items-center gap-2 text-sm font-medium md:flex"
          >
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            <span className="link-underline">Get in touch</span>
          </a>

          <button
            type="button"
            className="-mr-2 rounded-full px-3 py-2 font-mono text-xs tracking-wider text-ink uppercase md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>

        <div
          id="mobile-menu"
          hidden={!open}
          className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line px-4 pt-2 pb-8 sm:px-6 md:hidden"
        >
          <ul>
            {nav.map(({ id, label }, i) => (
              <li key={id} className="enter border-b border-line" style={stagger(i)}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-3.5 text-3xl tracking-tight"
                >
                  <span className={active === id ? "text-ink" : "text-muted"}>
                    {label}
                  </span>
                  <span className="font-mono text-xs text-faint">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
