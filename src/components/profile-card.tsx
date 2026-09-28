import Image from "next/image";
import { site } from "@/content/site";
import { SocialIcons } from "./social-links";

export function ProfileCard() {
  return (
    <aside
      aria-label="Profile"
      className="enter rounded-[22px] border border-line bg-card p-3 sm:p-4"
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-[14px] bg-ink max-lg:hidden">
        {site.portrait ? (
          <Image
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="320px"
            className="object-cover"
          />
        ) : (
          <Monogram />
        )}
      </div>

      <div className="flex items-center gap-4 lg:block lg:px-2 lg:pt-6 lg:pb-2">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-[12px] bg-ink lg:hidden">
          {site.portrait ? (
            <Image src={site.portrait} alt="" fill sizes="64px" className="object-cover" />
          ) : (
            <span className="grid h-full place-items-center font-serif text-4xl text-paper italic">
              m
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-xl font-medium tracking-tight lg:text-[26px]">{site.name}</p>
          <p className="mt-0.5 text-sm text-muted lg:mt-1">
            {site.role} · Web, APIs &amp; AI
          </p>
        </div>
      </div>

      <p className="mt-4 px-1 text-[15px] leading-relaxed text-ink-2 max-lg:hidden lg:px-2">
        I build products end to end — the interface people touch, the services
        behind it, and increasingly the AI in between.
      </p>

      <SocialIcons className="mt-4 px-1 lg:mt-6 lg:px-2 lg:pb-2" />
    </aside>
  );
}

function Monogram() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-5 text-paper">
      <span className="font-mono text-[11px] tracking-[0.18em] text-paper/60 uppercase">
        Portfolio — {new Date().getFullYear()}
      </span>
      <span className="font-serif text-[112px] leading-[0.8] italic">
        Maarij
        <span className="text-accent not-italic">.</span>
      </span>
    </div>
  );
}
