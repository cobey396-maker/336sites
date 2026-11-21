import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/Icons";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";

const socials = [
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-100">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[0.95rem] text-teal-200">
              {site.description}
            </p>
            <ul className="mt-6 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-grid h-11 w-11 place-items-center rounded-full border border-teal-700 text-teal-200 transition-colors duration-200 hover:border-mint-400 hover:text-mint-300"
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-mint-300">
              Pages
            </h2>
            <ul className="mt-5 space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center text-[0.95rem] text-teal-100 transition-colors duration-200 hover:text-mint-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-mint-300">
              Services
            </h2>
            <ul className="mt-5 space-y-1">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex min-h-9 items-center text-[0.95rem] text-teal-100 transition-colors duration-200 hover:text-mint-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-mint-300">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-9 items-center gap-3 text-teal-100 transition-colors duration-200 hover:text-mint-300"
                >
                  <PhoneIcon className="h-[1.05rem] w-[1.05rem] text-mint-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-9 items-center gap-3 text-teal-100 transition-colors duration-200 hover:text-mint-300"
                >
                  <MailIcon className="h-[1.05rem] w-[1.05rem] text-mint-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-teal-200">
                <PinIcon className="mt-1 h-[1.05rem] w-[1.05rem] shrink-0 text-mint-400" />
                <span>{site.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-teal-800 pt-7 text-[0.85rem] text-teal-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built in {site.location}.</p>
        </div>
      </div>
    </footer>
  );
}
