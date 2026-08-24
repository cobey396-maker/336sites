/**
 * Single source of truth for business details.
 * Anything marked PLACEHOLDER should be swapped for real info before launch.
 */
export const site = {
  name: "336 Sites",
  tagline: "Websites that win work for Triad small businesses",
  description:
    "336 Sites builds fast, modern websites for small businesses in Greensboro and beyond. Clear pricing, real deadlines, and a site that actually brings in customers.",
  url: "https://336sites.com", // PLACEHOLDER — update if the domain differs
  location: "Greensboro, NC",
  serviceArea: "Greensboro, Winston-Salem, High Point & remote nationwide",
  // PLACEHOLDER — replace with the real business line
  phone: "(336) 555-0136",
  phoneHref: "tel:+13365550136",
  // PLACEHOLDER — replace with the real inbox
  email: "hello@336sites.com",
  hours: "Mon–Fri, 9am–6pm ET",
  responseTime: "Replies within one business day",
  social: {
    // PLACEHOLDER — delete any you do not use
    instagram: "https://instagram.com/336sites",
    facebook: "https://facebook.com/336sites",
    linkedin: "https://linkedin.com/company/336sites",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
