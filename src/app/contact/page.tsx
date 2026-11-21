import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to 336 Sites about a new website, a redesign, or getting found in local search. Based in Greensboro, NC — replies within one business day.",
};

const channels = [
  {
    Icon: PhoneIcon,
    label: "Call or text",
    value: site.phone,
    href: site.phoneHref,
    note: "Fastest way to reach me",
  },
  {
    Icon: MailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: site.responseTime,
  },
  {
    Icon: PinIcon,
    label: "Service area",
    value: site.location,
    note: site.serviceArea,
  },
  {
    Icon: ClockIcon,
    label: "Hours",
    value: site.hours,
    note: "Evening calls by arrangement",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell me what you are trying to build"
        lead="A short message is plenty. I will come back with honest thoughts, a rough price and a timeline — no pitch deck, no pressure."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] md:p-10">
            <h2 className="text-2xl">Start a project</h2>
            <p className="mt-2.5 text-[0.98rem]">
              Fields marked <span className="font-semibold text-teal-700">*</span> are
              required. Everything else just helps me give you a sharper answer.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Or reach me directly</h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map(({ Icon, label, value, href, note }) => {
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[0.78rem] font-bold uppercase tracking-[0.13em] text-subtle">
                        {label}
                      </span>
                      <span className="mt-1 block text-[1.02rem] font-semibold text-ink">
                        {value}
                      </span>
                      <span className="mt-0.5 block text-[0.88rem] text-subtle">
                        {note}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-[var(--shadow-soft)]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-xl border border-line bg-white p-5">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 rounded-xl bg-teal-900 p-7 text-teal-100">
              <h3 className="text-lg text-white">What happens next</h3>
              <ol className="mt-5 space-y-4">
                {[
                  "I reply within one business day with questions or a time to talk.",
                  "We spend 20 minutes on a call working out what the site actually needs.",
                  "You get a written scope, a fixed price and a launch date — then decide.",
                ].map((item, i) => (
                  <li key={item} className="flex gap-3.5 text-[0.95rem]">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint-400 text-[0.75rem] font-extrabold text-teal-900">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Before you write"
          title="Answers to the usual questions"
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQ items={faqs.slice(0, 4)} />
        </div>
      </Section>
    </>
  );
}
