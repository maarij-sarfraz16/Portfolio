import { Nav } from "@/components/nav";
import { ProfileCard } from "@/components/profile-card";
import { RevealObserver } from "@/components/reveal-observer";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Nav />

      <div className="mx-auto max-w-[1240px] px-4 pt-20 pb-4 sm:px-6 sm:pt-24 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14 lg:px-10 lg:pt-28 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProfileCard />
        </div>

        <main id="main" className="mt-12 min-w-0 lg:mt-0">
          <Hero />
          <About />
          <Work />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>

      <RevealObserver />
    </>
  );
}
