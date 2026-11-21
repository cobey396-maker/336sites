import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Section";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="wash-top relative overflow-hidden border-b border-line py-16 md:py-20">
      <div
        className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="max-w-3xl reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[clamp(2rem,1.35rem+2.9vw,3.25rem)]">{title}</h1>
          {lead ? <p className="mt-5 max-w-2xl text-[1.08rem]">{lead}</p> : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
