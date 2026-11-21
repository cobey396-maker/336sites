import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "mint" | "dark";
  id?: string;
}) {
  const tones = {
    default: "bg-background",
    surface: "wash-band bg-surface",
    mint: "wash-mint bg-background",
    dark: "bg-teal-900 text-teal-100",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} py-18 md:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] ${
        tone === "light" ? "text-mint-300" : "text-teal-600"
      }`}
    >
      <span
        className={`h-px w-6 ${tone === "light" ? "bg-mint-400" : "bg-teal-300"}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
}) {
  return (
    <header
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <Eyebrow tone={tone === "light" ? "light" : "default"}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-4 text-[clamp(1.75rem,1.15rem+2.4vw,2.75rem)] ${
          tone === "light" ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-[1.05rem] ${
            tone === "light" ? "text-teal-100" : "text-body"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}
