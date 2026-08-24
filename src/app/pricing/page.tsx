import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { CarePlanCard, TierCard } from "@/components/PricingCard";
import { Section, SectionHeading } from "@/components/Section";
import { CheckIcon } from "@/components/Icons";
import { carePlans, tiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent website pricing from 336 Sites: one-time build packages from $1,200 and monthly care plans from $49. No hidden fees, no long-term contracts.",
};

const comparisonRows: { label: string; values: [string, string, string] }[] = [
  { label: "Pages", values: ["1", "Up to 6", "Unlimited"] },
  { label: "Custom design", values: ["Yes", "Yes", "Yes"] },
  { label: "Copywriting", values: ["Headlines only", "Every page", "Every page"] },
  { label: "Local SEO setup", values: ["Basic", "Full", "Full"] },
  { label: "Online store / booking", values: ["—", "—", "Included"] },
  { label: "Edit it yourself (CMS)", values: ["—", "Optional", "Included"] },
  { label: "Revisions", values: ["1 round", "2 rounds", "Unlimited"] },
  { label: "Post-launch support", values: ["14 days", "30 days", "90 days"] },
  { label: "Typical timeline", values: ["~2 weeks", "~3 weeks", "4–6 weeks"] },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Real prices. Published, not pried out of me."
        lead="Every package is a fixed quote agreed before work starts. If the scope grows you approve the change first — the number never moves on its own."
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-2.5 text-[0.92rem] font-medium">
          {["No long-term contracts", "50% up front, 50% at launch", "You own the site"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-teal-600" />
                {item}
              </li>
            ),
          )}
        </ul>
      </PageHero>

      <Section>
        <ul className="grid gap-6 lg:grid-cols-3 lg:gap-5">
          {tiers.map((tier) => (
            <li key={tier.slug} className="flex">
              <TierCard tier={tier} />
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-[0.9rem] text-subtle">
          Prices shown are placeholders — set your own before launch. Domain
          registration (~$15/yr) is billed to you directly so you always own it.
        </p>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Side by side"
          title="What is in each package"
          align="center"
        />
        <div className="mt-12 overflow-x-auto rounded-xl border border-line bg-white">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <caption className="sr-only">
              Feature comparison of the Starter, Business and Premium website packages
            </caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="px-6 py-5 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-subtle">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.slug}
                    scope="col"
                    className={`px-6 py-5 text-[0.95rem] font-bold ${
                      tier.featured ? "text-teal-700" : "text-ink"
                    }`}
                  >
                    {tier.name}
                    <span className="block text-[0.8rem] font-medium text-subtle">
                      {tier.price}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <th
                    scope="row"
                    className="px-6 py-4 text-[0.95rem] font-semibold text-ink"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={`${row.label}-${i}`}
                      className={`px-6 py-4 text-[0.95rem] ${
                        tiers[i].featured ? "bg-teal-50/50" : ""
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Care plans"
          title="Keep it fast, safe and current"
          lead="Optional monthly plans that cover hosting, security and the small edits you would otherwise put off. Cancel any time."
          align="center"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {carePlans.map((plan) => (
            <li key={plan.name}>
              <CarePlanCard plan={plan} />
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-[0.9rem] text-subtle">
          Not on a plan? Hosting runs roughly $10–25/month wherever you like, and
          edits are billed at an hourly rate.
        </p>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Questions"
          title="The things everyone asks"
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQ />
        </div>
      </Section>

      <CTABand
        title="Still not sure which package fits?"
        lead="Send me your current site (or a sketch of what you want) and I will tell you which tier covers it — and if a cheaper one would do, I will say so."
      />
    </>
  );
}
