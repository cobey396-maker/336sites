import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/Icons";
import type { CarePlan, Tier } from "@/lib/content";

export function TierCard({ tier }: { tier: Tier }) {
  const featured = Boolean(tier.featured);

  return (
    <article
      className={`relative flex w-full flex-col rounded-xl border p-7 transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:p-8 ${
        featured
          ? "border-teal-700 bg-teal-900 text-teal-100 shadow-[var(--shadow-lift)] lg:-mt-4 lg:mb-[-1rem]"
          : "border-line bg-white hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-7 rounded-full bg-mint-400 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-teal-900 md:left-8">
          Most popular
        </span>
      ) : null}

      <h3 className={`text-xl ${featured ? "text-white" : ""}`}>{tier.name}</h3>
      <p
        className={`mt-1.5 text-[0.9rem] ${featured ? "text-teal-200" : "text-subtle"}`}
      >
        {tier.bestFor}
      </p>

      <p className="mt-6 flex items-baseline gap-2">
        <span
          className={`text-[2.4rem] font-extrabold tracking-tight ${
            featured ? "text-white" : "text-ink"
          }`}
        >
          {tier.price}
        </span>
        <span className={`text-[0.85rem] ${featured ? "text-teal-300" : "text-subtle"}`}>
          {tier.cadence}
        </span>
      </p>

      <p className={`mt-4 text-[0.95rem] ${featured ? "text-teal-100" : ""}`}>
        {tier.summary}
      </p>

      <ul className="mt-7 mb-9 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[0.95rem]">
            <CheckIcon
              className={`mt-1 h-4 w-4 shrink-0 ${
                featured ? "text-mint-400" : "text-teal-600"
              }`}
            />
            <span className={featured ? "text-teal-100" : ""}>{feature}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href="/contact"
        variant={featured ? "mint" : "secondary"}
        size="lg"
        className="mt-auto w-full"
      >
        Start with {tier.name}
      </ButtonLink>
    </article>
  );
}

export function CarePlanCard({ plan }: { plan: CarePlan }) {
  return (
    <article
      className={`flex flex-col rounded-lg border bg-white p-6 transition-[border-color,box-shadow] duration-300 ${
        plan.featured
          ? "border-teal-300 shadow-[var(--shadow-soft)]"
          : "border-line hover:border-teal-200"
      }`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg">{plan.name}</h3>
        <p className="text-right">
          <span className="text-2xl font-extrabold text-ink">{plan.price}</span>
          <span className="text-[0.8rem] text-subtle">/mo</span>
        </p>
      </div>
      <p className="mt-2 text-[0.92rem]">{plan.summary}</p>
      <ul className="mt-5 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-[0.92rem]">
            <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-teal-600" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
