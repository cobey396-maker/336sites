import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "mint";
type Size = "md" | "lg";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-[background-color,color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-700 text-white shadow-[var(--shadow-soft)] hover:bg-teal-600 hover:shadow-[var(--shadow-lift)]",
  secondary:
    "border border-line bg-white text-ink hover:border-teal-300 hover:bg-teal-50",
  ghost: "text-teal-700 hover:bg-teal-50",
  mint: "bg-mint-400 text-teal-900 hover:bg-mint-300 shadow-[var(--shadow-soft)]",
};

/** Min height 44px on every size — touch target guidance, not a suggestion. */
const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.94rem]",
  lg: "min-h-13 px-7 text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes(variant, size, className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ComponentProps<"button"> & { variant?: Variant; size?: Size }) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
