import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { ArrowRightIcon, CheckIcon, serviceIcons } from "@/components/Icons";
import { processSteps, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, redesigns, local SEO, online stores, care plans and performance audits for small businesses in Greensboro and across the Triad.",
};

const included = [
  "Custom design built around your business, never a stock template",
  "Mobile-first layouts tested on real phones, not just a desktop preview",
  "Accessible markup that meets WCAG 2.2 AA",
  "Search-ready structure: metadata, sitemaps, schema and fast Core Web Vitals",
  "Analytics and conversion tracking wired up before launch",
  "A hand-off walkthrough so you can edit the site yourself",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything from a first website to the ongoing upkeep"
        lead="Most clients start with a build and stay on a care plan. Pick one service or the whole lot — the scope and the price are agreed before any work starts."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Get a free quote
            <ArrowRightIcon className="h-[1.1rem] w-[1.1rem]" />
          </ButtonLink>
          <ButtonLink href="/pricing" variant="secondary" size="lg">
            See pricing
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <li
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 rounded-xl border border-line bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-teal-200 hover:shadow-[var(--shadow-soft)] md:p-9"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50 text-teal-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 text-xl">{service.title}</h2>
                <p className="mt-3 text-[1rem]">{service.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[0.95rem]">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Included in every build"
            title="The baseline is not negotiable"
            lead="These are not upsells. Every site I ship, at every price point, gets all of it."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-line bg-white p-5 text-[0.95rem]"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Process"
          title="What working together looks like"
          align="center"
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="rounded-xl border border-line bg-white p-7">
              <span className="text-[0.8rem] font-extrabold tracking-[0.16em] text-mint-600">
                {step.step}
              </span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-2.5 text-[0.95rem]">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTABand
        title="Not sure which service you need?"
        lead="Tell me what is not working right now and I will tell you the smallest thing that fixes it — even if that is nothing."
      />
    </>
  );
}
