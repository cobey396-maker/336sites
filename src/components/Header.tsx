"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-x flex h-19 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center rounded-full px-4 text-[0.94rem] font-semibold transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-teal-700"
                      : "text-body hover:text-ink"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span
                      className="absolute inset-x-4 bottom-1.5 h-0.5 rounded-full bg-mint-500"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-[0.94rem] font-semibold text-ink transition-colors duration-200 hover:text-teal-700"
          >
            <PhoneIcon className="h-4 w-4 text-teal-600" />
            {site.phone}
          </a>
          <ButtonLink href="/contact">Get a quote</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:bg-surface lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x py-4">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-13 items-center border-b border-line text-[1.02rem] font-semibold ${
                    isActive(item.href) ? "text-teal-700" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 pb-2">
            <ButtonLink href="/contact" size="lg">
              Get a free quote
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary" size="lg">
              <PhoneIcon className="h-4 w-4 text-teal-600" />
              Call {site.phone}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
