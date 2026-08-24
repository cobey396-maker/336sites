import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export function CTABand({
  title = "Ready for a site that actually earns its keep?",
  lead = "Book a free 20-minute call. You will leave with a clear scope, a fixed price and a launch date — whether or not you hire me.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-white py-18 md:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-teal-900 px-7 py-14 text-center md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:72px_72px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mint-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[clamp(1.6rem,1.1rem+2.2vw,2.5rem)] text-white">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.05rem] text-teal-100">{lead}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="mint" size="lg">
                Get a free quote
                <ArrowRightIcon className="h-[1.1rem] w-[1.1rem]" />
              </ButtonLink>
              <ButtonLink
                href={site.phoneHref}
                size="lg"
                className="border border-teal-700 bg-transparent text-white hover:bg-teal-800 hover:shadow-none"
              >
                <PhoneIcon className="h-[1.1rem] w-[1.1rem] text-mint-400" />
                {site.phone}
              </ButtonLink>
            </div>
            <p className="mt-6 text-[0.85rem] text-teal-300">
              {site.responseTime} · {site.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
