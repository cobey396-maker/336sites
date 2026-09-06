import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section, SectionHeading } from "@/components/Section";
import { ArrowRightIcon } from "@/components/Icons";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Recent websites built by 336 Sites for home services, retail, professional services and creative businesses in Greensboro, NC.",
};

const industries = [
  "Home services",
  "Food & retail",
  "Professional services",
  "Health & fitness",
  "Creative studios",
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Recent work, with the numbers attached"
        lead="Every build ships with analytics, so these are measured outcomes rather than adjectives. Screenshots and results below are placeholders until the real assets are dropped in."
      >
        <ul className="flex flex-wrap gap-2">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-full border border-line bg-white px-4 py-2 text-[0.85rem] font-semibold text-body"
            >
              {industry}
            </li>
          ))}
        </ul>
      </PageHero>

      <Section>
        <ul className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="What they have in common"
          title="Different industries, the same three jobs"
          lead="Look good enough to trust, load fast enough to keep, and make the next step obvious."
          align="center"
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Earn trust fast",
              d: "Clear design, real photos and proof that you do the work.",
            },
            {
              n: "02",
              t: "Load in under a second",
              d: "On a phone, on mobile data, in a parking lot.",
            },
            {
              n: "03",
              t: "Make contact easy",
              d: "Tap to call, short forms, no hunting for a phone number.",
            },
          ].map((item) => (
            <li key={item.n} className="rounded-xl border border-line bg-white p-7">
              <span className="text-[0.8rem] font-extrabold tracking-[0.16em] text-mint-700">
                {item.n}
              </span>
              <h3 className="mt-3 text-lg">{item.t}</h3>
              <p className="mt-2.5 text-[0.95rem]">{item.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mint">
        <div className="rounded-2xl border border-dashed border-teal-200 bg-white/70 px-7 py-12 text-center md:px-16">
          <h2 className="text-[clamp(1.4rem,1.1rem+1.4vw,2rem)]">
            Want to see something closer to your industry?
          </h2>
          <p className="mx-auto mt-4 max-w-xl">
            I have work that is not published here yet. Tell me your trade and I will
            send over the two or three most relevant examples.
          </p>
          <ButtonLink href="/contact" size="lg" className="mt-8">
            Ask for relevant examples
            <ArrowRightIcon className="h-[1.1rem] w-[1.1rem]" />
          </ButtonLink>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
