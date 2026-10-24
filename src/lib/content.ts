/**
 * Marketing content. Copy here is real-sounding but written to be edited —
 * swap project names, results and prices for your own.
 */

export type Service = {
  slug: string;
  icon: "layout" | "cart" | "search" | "wrench" | "pen" | "gauge";
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "small-business-websites",
    icon: "layout",
    title: "Small business websites",
    summary:
      "A complete, mobile-first site that explains what you do and makes it obvious how to hire you.",
    bullets: [
      "Custom design — no recycled templates",
      "Copywriting help for every page",
      "Contact forms, click-to-call and maps",
      "Live in 2–3 weeks, not 2–3 months",
    ],
  },
  {
    slug: "redesigns",
    icon: "pen",
    title: "Redesigns & rescues",
    summary:
      "Already have a site that looks dated, loads slowly, or nobody can edit? I rebuild it on modern footing.",
    bullets: [
      "Keep your content and rankings, lose the clutter",
      "Faster load times on real phones",
      "Move off page builders that fight you",
      "Full content migration handled for you",
    ],
  },
  {
    slug: "local-seo",
    icon: "search",
    title: "Local SEO foundations",
    summary:
      "Show up when someone in the 336 searches for what you sell — the groundwork built into every site.",
    bullets: [
      "Google Business Profile setup and cleanup",
      "Location and service pages that rank",
      "Schema markup, sitemaps, fast Core Web Vitals",
      "Analytics so you can see what is working",
    ],
  },
  {
    slug: "ecommerce",
    icon: "cart",
    title: "Online stores & booking",
    summary:
      "Take payments, sell products, or let customers book a slot without a phone call.",
    bullets: [
      "Stripe or Shopify checkout",
      "Online scheduling and deposits",
      "Inventory and order notifications",
      "Training so you can run it yourself",
    ],
  },
  {
    slug: "care-plans",
    icon: "wrench",
    title: "Care & maintenance",
    summary:
      "Hosting, updates, backups and small edits handled monthly so your site never goes stale.",
    bullets: [
      "Managed hosting and SSL",
      "Monthly content edits included",
      "Security patches and off-site backups",
      "Uptime monitoring with real alerts",
    ],
  },
  {
    slug: "performance",
    icon: "gauge",
    title: "Speed & accessibility audits",
    summary:
      "A written report on what is costing you customers, with the fixes prioritised by impact.",
    bullets: [
      "Core Web Vitals on real devices",
      "WCAG 2.2 AA accessibility review",
      "Conversion and form drop-off review",
      "Fixed-price fix list, no retainer required",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  industry: string;
  year: string;
  blurb: string;
  scope: string[];
  results: { label: string; value: string }[];
  /** Two brand colours used for the placeholder artwork until real shots exist. */
  swatch: [string, string];
};

/** PLACEHOLDER portfolio — replace the blurbs and results with real numbers. */
export const projects: Project[] = [
  {
    slug: "larrys-lawn-care",
    name: "Larry's Lawn Care",
    industry: "Lawn & landscaping",
    year: "2025",
    blurb:
      "Seasonal quote requests without the back-and-forth — a guided estimate form replaced a plain contact page, and the service-area pages do the rest.",
    scope: ["Website design", "Quote builder", "Local SEO"],
    results: [
      { label: "Quote requests", value: "+112%" },
      { label: "Load time", value: "0.9s" },
      { label: "Turnaround", value: "16 days" },
    ],
    swatch: ["#084a44", "#34d3a9"],
  },
  {
    slug: "chris-cutz",
    name: "Chris Cutz",
    industry: "Barbershop",
    year: "2025",
    blurb:
      "Chair time booked online instead of over DMs, with a cuts gallery the shop updates from a phone between clients.",
    scope: ["Website design", "Online booking", "Photo direction"],
    results: [
      { label: "Online bookings", value: "180/mo" },
      { label: "No-shows", value: "−34%" },
      { label: "Launch", value: "3 weeks" },
    ],
    swatch: ["#042523", "#5be3bf"],
  },
  {
    slug: "peters-powerwashing",
    name: "Peters Powerwashing",
    industry: "Exterior cleaning",
    year: "2024",
    blurb:
      "A dated three-page site rebuilt around before-and-after work, with the phone number in front of every visitor on every screen size.",
    scope: ["Website design", "Local SEO", "Call tracking"],
    results: [
      { label: "More calls", value: "+64%" },
      { label: "Mobile score", value: "99/100" },
      { label: "Turnaround", value: "18 days" },
    ],
    swatch: ["#0b5f57", "#8cefd3"],
  },
];

export type Tier = {
  slug: string;
  name: string;
  price: string;
  cadence: string;
  bestFor: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

/** Priced by the page. */
export const tiers: Tier[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "$200",
    cadence: "one-time · 1–2 pages",
    bestFor: "New businesses",
    summary: "A home page and one more — enough to be found and called.",
    features: [
      "Home page plus one other",
      "Mobile and tablet layouts",
      "Contact form to your inbox",
      "Google Business linked",
      "Two rounds of revisions",
      "Two months of free fixes",
    ],
  },
  {
    slug: "business",
    name: "Business",
    price: "$500",
    cadence: "one-time · 3–5 pages",
    bestFor: "Established local businesses",
    summary: "Home, services, about and contact. What most businesses need.",
    features: [
      "Everything in Starter",
      "Services and about pages",
      "Local search setup included",
      "Photo gallery or reviews section",
      "Two rounds of revisions",
      "Two months of free fixes",
    ],
    featured: true,
  },
  {
    slug: "pro",
    name: "Pro",
    price: "$800",
    cadence: "one-time · 6–8 pages",
    bestFor: "Multi-service businesses",
    summary: "A page per service or location, plus booking or quote flows.",
    features: [
      "Everything in Business",
      "A page per service or location",
      "Booking or quote request flow",
      "Copywriting for three pages",
      "Analytics dashboard set up",
      "Two months of free fixes",
    ],
  },
];

export type CarePlan = {
  name: string;
  price: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const carePlans: CarePlan[] = [
  {
    name: "Hosting & maintenance",
    price: "$100",
    summary: "Hosting, backups, updates and small content changes handled for you.",
    features: [
      "Managed hosting + SSL",
      "Backups and updates",
      "Small content edits",
      "Fixes covered after the free two months",
    ],
    featured: true,
  },
  {
    name: "Analytics reports",
    price: "$40",
    summary: "A short monthly email: visits, calls, forms, and what to do about it.",
    features: [
      "Monthly traffic summary",
      "Calls and form submissions",
      "Plain-English recommendations",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free 20-minute call",
    body: "We talk about your business, your customers and what the site actually needs to do. No pitch deck, no pressure.",
  },
  {
    step: "02",
    title: "Fixed quote & timeline",
    body: "You get one page: scope, price and launch date. The number does not move unless you add something.",
  },
  {
    step: "03",
    title: "Design & build",
    body: "You see a real, clickable site early — not a static mockup — and we refine it together before anything ships.",
  },
  {
    step: "04",
    title: "Launch & hand-off",
    body: "I handle the domain, hosting and Google setup, then walk you through editing it yourself. Care plans optional.",
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "Most builds go live about two weeks after I have your content. A single landing page can take just a few days.",
  },
  {
    q: "Do I own the site when it is done?",
    a: "Yes. You own the domain, the hosting account and the code. There is no lock-in, and if you ever leave I hand over everything you need to take it elsewhere.",
  },
  {
    q: "What if I do not have photos or copy?",
    a: "That is normal. Every package includes copywriting help, and I can source licensed photography or point you to a local photographer. Nothing stalls because you are not a writer.",
  },
  {
    q: "Are there hidden fees?",
    a: "No. The quote covers design and build. The only ongoing costs are your domain (about $15/year) and hosting, which is included in the $100/month hosting & maintenance plan. Fixes are free for two months after launch, then $50 each.",
  },
  {
    q: "Can you work with businesses outside Greensboro?",
    a: "Absolutely. I am based in the Triad and happy to meet in person locally, but most of the work is remote and I have clients well outside the 336.",
  },
  {
    q: "What do you need from me to start?",
    a: "A short call, a rough idea of the pages you want, and whatever content you already have. I handle the rest and chase you for anything missing.",
  },
];

export const stats = [
  { value: "2–3 wks", label: "Typical launch time" },
  { value: "100%", label: "Custom, no templates" },
  { value: "336", label: "Local to the Triad" },
  { value: "0", label: "Long-term contracts" },
];
