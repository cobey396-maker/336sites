import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { ClientLogoPlaceholder } from "@/components/Logo";
import { ProjectCardCompact } from "@/components/ProjectCard";
import { Eyebrow, Section, SectionHeading } from "@/components/Section";
import { ArrowRightIcon, CheckIcon, serviceIcons } from "@/components/Icons";
import { processSteps, projects, services, stats, tiers } from "@/lib/content";
import { site } from "@/lib/site";

function Hero() {
  return (
    <section className="wash-hero relative overflow-hidden pt-14 pb-18 md:pt-20 md:pb-24">
      <div
        className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="reveal">
            <Eyebrow>Web design · Greensboro, NC</Eyebrow>
            <h1 className="mt-5 text-[clamp(2.2rem,1.4rem+3.6vw,3.9rem)]">
              Websites that make small businesses{" "}
              <span className="text-teal-700 [-webkit-box-decoration-break:clone] [box-decoration-break:clone] bg-[linear-gradient(to_top,rgb(140_239_211/0.55)_0,rgb(140_239_211/0.55)_0.16em,transparent_0.16em)]">
                impossible to scroll past
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.1rem]">
              I design and build fast, modern sites for businesses in the Triad and
              beyond — with clear pricing, a real launch date, and no template
              recycled from someone else&apos;s brand.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Get a free quote
                <ArrowRightIcon className="h-[1.1rem] w-[1.1rem]" />
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="secondary" size="lg">
                See recent work
              </ButtonLink>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5 text-[0.92rem] font-medium">
              {["Fixed price, quoted upfront", "Live in 2–3 weeks", "You own everything"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-teal-600" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <HeroVisual />
        </div>

        <dl className="mt-18 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:mt-20 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-white px-6 py-7 text-center">
              <dt className="order-2 mt-1.5 text-[0.82rem] font-medium text-subtle">
                {stat.label}
              </dt>
              <dd className="text-[1.75rem] font-extrabold tracking-tight text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Abstract, brand-coloured stand-in for a real site screenshot. */
function HeroVisual() {
  return (
    <div className="relative reveal [animation-delay:120ms]" aria-hidden="true">
      <div className="relative rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-lift)]">
        <div className="flex items-center gap-1.5 px-2 pb-3 pt-1">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 h-5 flex-1 rounded-full bg-surface" />
        </div>
        <div className="overflow-hidden rounded-xl bg-teal-900 p-6">
          <span className="block h-2.5 w-16 rounded-full bg-mint-400" />
          <span className="mt-5 block h-4 w-4/5 rounded-full bg-white/85" />
          <span className="mt-2.5 block h-4 w-3/5 rounded-full bg-white/60" />
          <span className="mt-6 block h-9 w-32 rounded-full bg-mint-400" />
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-white/10 p-3">
                <span className="block h-6 w-6 rounded-md bg-mint-300/70" />
                <span className="mt-3 block h-2 w-full rounded-full bg-white/40" />
                <span className="mt-1.5 block h-2 w-2/3 rounded-full bg-white/25" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-line bg-white p-4 shadow-[var(--shadow-lift)] sm:block">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-subtle">
          PageSpeed
        </p>
        <p className="mt-1 flex items-baseline gap-1.5">
          <span className="text-2xl font-extrabold text-ink">99</span>
          <span className="text-[0.75rem] text-subtle">/ 100 mobile</span>
        </p>
        <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-surface">
          <span className="block h-full w-[99%] rounded-full bg-mint-500" />
        </div>
      </div>

      <div className="absolute -right-3 top-8 hidden rounded-xl border border-line bg-white px-4 py-3 shadow-[var(--shadow-lift)] md:block">
        <p className="text-[0.75rem] font-semibold text-ink">New quote request</p>
        <p className="text-[0.7rem] text-subtle">2 minutes ago</p>
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface py-10">
      <div className="container-x">
        <p className="text-center text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-subtle">
          Trusted by local businesses across the Triad
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-4 md:gap-7">
          {["Logo 01", "Logo 02", "Logo 03", "Logo 04", "Logo 05"].map((label) => (
            <li key={label}>
              <ClientLogoPlaceholder label={label} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="What I do"
          title="Everything your business needs to look right online"
          lead="Six services, one point of contact. Most clients start with a website and add a care plan once it is live."
        />
        <Link
          href="/services"
          className="group inline-flex min-h-11 items-center gap-2 text-[0.95rem] font-semibold text-teal-700"
        >
          All services
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 3).map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
            <li key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-teal-200 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg">{service.title}</h3>
                <p className="mt-2.5 text-[0.95rem]">{service.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal-700">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function Process() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="How it works"
        title="Four steps, no mystery"
        lead="You always know what happens next, what it costs, and when it goes live."
        align="center"
      />
      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <li
            key={step.step}
            className="relative rounded-xl border border-line bg-white p-7"
          >
            <span className="text-[0.8rem] font-extrabold tracking-[0.16em] text-mint-700">
              {step.step}
            </span>
            <h3 className="mt-3 text-lg">{step.title}</h3>
            <p className="mt-2.5 text-[0.95rem]">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function WorkPreview() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Recent work"
          title="Sites doing real work for real businesses"
          lead="A few recent builds. Every project ships with analytics, so the results below are measured, not guessed."
        />
        <Link
          href="/portfolio"
          className="group inline-flex min-h-11 items-center gap-2 text-[0.95rem] font-semibold text-teal-700"
        >
          View portfolio
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <li key={project.slug}>
            <ProjectCardCompact project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function PricingPreview() {
  return (
    <Section tone="mint">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Pricing"
          title="Fixed prices, published up front"
          lead="No discovery-call runaround before you find out what things cost. Packages start at the price below and the quote never moves unless the scope does."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {tiers.map((tier) => (
            <Link
              key={tier.slug}
              href="/pricing"
              className={`group rounded-xl border p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${
                tier.featured
                  ? "border-teal-700 bg-white"
                  : "border-line bg-white hover:border-teal-200"
              }`}
            >
              <p className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-teal-600">
                {tier.name}
              </p>
              <p className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                {tier.price}
              </p>
              <p className="mt-1 text-[0.8rem] text-subtle">{tier.cadence}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-teal-700">
                Details
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonial() {
  return (
    <Section tone="surface">
      <figure className="mx-auto max-w-3xl text-center">
        <span className="text-5xl leading-none text-mint-500" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="mt-2 text-[clamp(1.25rem,1rem+1vw,1.65rem)] font-semibold leading-snug text-ink">
          We went from a site nobody could find to the phone ringing every week.
          The whole thing took three weeks and cost exactly what the quote said.
        </blockquote>
        <figcaption className="mt-7 flex items-center justify-center gap-3">
          <span
            className="grid h-11 w-11 place-items-center rounded-full bg-teal-50 text-[0.8rem] font-bold text-teal-700"
            aria-hidden="true"
          >
            DP
          </span>
          <span className="text-left">
            <span className="block text-[0.95rem] font-semibold text-ink">
              Placeholder Name
            </span>
            <span className="block text-[0.85rem] text-subtle">
              Owner, Piedmont Plumbing Co.
            </span>
          </span>
        </figcaption>
        <p className="mt-6 text-[0.78rem] uppercase tracking-[0.14em] text-subtle">
          Placeholder testimonial — swap for a real quote
        </p>
      </figure>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <Process />
      <WorkPreview />
      <PricingPreview />
      <Testimonial />
      <CTABand />
    </>
  );
}
