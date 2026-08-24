import Link from "next/link";
import { site } from "@/lib/site";

/**
 * PLACEHOLDER LOGO.
 * Swap the <LogoMark /> SVG for the real mark when it exists — everything
 * else (sizing, spacing, colours) will keep working.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid aspect-square place-items-center rounded-[0.7rem] bg-teal-700 text-white ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="h-[58%] w-[58%]" fill="none">
        <path
          d="M7 10.5C7 8.6 8.6 7 10.5 7H16c2.5 0 4.5 2 4.5 4.5S18.5 16 16 16h-3.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M12.5 16H17c2.5 0 4.5 2 4.5 4.5S19.5 25 17 25h-6.5C8.6 25 7 23.4 7 21.5"
          stroke="var(--color-mint-400)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.05rem] font-extrabold tracking-tight ${
            tone === "light" ? "text-white" : "text-ink"
          }`}
        >
          336&nbsp;Sites
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
            tone === "light" ? "text-mint-300" : "text-teal-600"
          }`}
        >
          Greensboro, NC
        </span>
      </span>
    </Link>
  );
}

/** Grey placeholder blocks standing in for client logos. */
export function ClientLogoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex h-11 w-32 items-center justify-center rounded-md border border-dashed border-line bg-surface text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-subtle"
      title="Client logo placeholder"
    >
      {label}
    </div>
  );
}
