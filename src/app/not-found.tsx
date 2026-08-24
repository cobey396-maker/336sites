import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x text-center">
        <p className="text-[0.78rem] font-bold uppercase tracking-[0.18em] text-teal-600">
          404
        </p>
        <h1 className="mx-auto mt-5 max-w-xl text-[clamp(1.9rem,1.4rem+2.4vw,3rem)]">
          That page has moved on
        </h1>
        <p className="mx-auto mt-5 max-w-md">
          The link is broken or the page no longer exists. The good stuff is all one
          click away.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to home
            <ArrowRightIcon className="h-[1.1rem] w-[1.1rem]" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Get in touch
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
