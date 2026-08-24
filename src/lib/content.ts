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

/** PLACEHOLDER portfolio — replace with real client work as you ship it. */
export const projects: Project[] = [
  {
    slug: "piedmont-plumbing",
    name: "Piedmont Plumbing Co.",
    industry: "Home services",
    year: "2025",
    blurb:
      "A dated three-page site replaced with a fast, service-area-driven build that puts the phone number in front of every visitor.",
    scope: ["Website design", "Local SEO", "Call tracking"],
    results: [
      { label: "More calls", value: "+64%" },
      { label: "Load time", value: "0.9s" },
      { label: "Turnaround", value: "16 days" },
    ],
    swatch: ["#084a44", "#34d3a9"],
  },
  {
    slug: "elm-street-bakery",
    name: "Elm Street Bakery",
    industry: "Food & retail",
    year: "2025",
    blurb:
      "Online pre-orders for a downtown Greensboro bakery, with a menu the owner updates from her phone.",
    scope: ["E-commerce", "Photography direction", "Training"],
    results: [
      { label: "Online orders", value: "180/mo" },
      { label: "Avg. basket", value: "+$11" },
      { label: "Launch", value: "3 weeks" },
    ],
    swatch: ["#0b5f57", "#8cefd3"],
  },
  {
    slug: "guilford-law",
    name: "Guilford Law Group",
    industry: "Professional services",
    year: "2024",
    blurb:
      "A calm, credible presence for a two-attorney practice, with intake forms that route straight to the right paralegal.",
    scope: ["Website design", "Intake automation", "Copywriting"],
    results: [
      { label: "Qualified leads", value: "2.3×" },
      { label: "Intake time", value: "−40%" },
      { label: "Pages", value: "12" },
    ],
    swatch: ["#042523", "#5be3bf"],
  },
  {
    slug: "triad-turf",
    name: "Triad Turf & Landscape",
    industry: "Home services",
    year: "2024",
    blurb:
      "Seasonal quote requests without the back-and-forth — a guided estimate form replaced a plain contact page.",
    scope: ["Website design", "Quote builder", "Care plan"],
    results: [
      { label: "Quote requests", value: "+112%" },
      { label: "Bounce rate", value: "−28%" },
      { label: "Turnaround", value: "18 days" },
    ],
    swatch: ["#063733", "#b9f6e4"],
  },
  {
    slug: "battleground-fitness",
    name: "Battleground Fitness",
    industry: "Health & fitness",
    year: "2024",
    blurb:
      "Class schedules, memberships and free-trial signups in one place, synced with the gym's booking system.",
    scope: ["Website design", "Booking integration", "Local SEO"],
    results: [
      { label: "Trial signups", value: "+88%" },
      { label: "Mobile score", value: "99/100" },
      { label: "Launch", value: "4 weeks" },
    ],
    swatch: ["#14766c", "#defbf1"],
  },
  {
    slug: "revolution-mill-studio",
    name: "Revolution Mill Studio",
    industry: "Creative studio",
    year: "2023",
    blurb:
      "A gallery-first portfolio for a photography studio, built so new shoots go live in under a minute.",
    scope: ["Website design", "CMS", "Performance"],
    results: [
      { label: "Inquiries", value: "+47%" },
      { label: "Image weight", value: "−72%" },
      { label: "Pages", value: "8" },
    ],
    swatch: ["#021716", "#34d3a9"],
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

/** PLACEHOLDER pricing — set your own numbers before launch. */
export const tiers: Tier[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "$1,200",
    cadence: "one-time",
    bestFor: "New businesses that need to exist online",
    summary:
      "A sharp one-page site that covers who you are, what you do and how to reach you.",
    features: [
      "One-page custom design",
      "Mobile and tablet optimised",
      "Contact form + click-to-call",
      "Google Business Profile setup",
      "Basic on-page SEO",
      "1 round of revisions",
      "Live in about 2 weeks",
    ],
  },
  {
    slug: "business",
    name: "Business",
    price: "$2,900",
    cadence: "one-time",
    bestFor: "Established shops that want the phone ringing",
    summary:
      "A full multi-page site built around the services you actually want to sell.",
    features: [
      "Up to 6 custom pages",
      "Copywriting for every page",
      "Service and location pages for local SEO",
      "Photo sourcing and editing",
      "Analytics + conversion tracking",
      "2 rounds of revisions",
      "30 days of post-launch support",
      "Live in about 3 weeks",
    ],
    featured: true,
  },
  {
    slug: "premium",
    name: "Premium",
    price: "$5,500+",
    cadence: "starting at",
    bestFor: "Stores, bookings and anything custom",
    summary:
      "Everything in Business plus the moving parts — payments, scheduling, integrations.",
    features: [
      "Unlimited pages",
      "Online store or booking system",
      "Payment processing setup",
      "CMS so you can edit anything",
      "Custom integrations (CRM, email, POS)",
      "Unlimited revisions during build",
      "90 days of post-launch support",
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
    name: "Essential",
    price: "$49",
    summary: "Keep the lights on and the site safe.",
    features: [
      "Managed hosting + SSL",
      "Weekly off-site backups",
      "Security updates",
      "Uptime monitoring",
    ],
  },
  {
    name: "Growth",
    price: "$99",
    summary: "Everything in Essential, plus a set of hands each month.",
    features: [
      "Everything in Essential",
      "Up to 1 hour of content edits",
      "Monthly performance report",
      "Priority email support",
    ],
    featured: true,
  },
  {
    name: "Partner",
    price: "$199",
    summary: "An ongoing web person without the salary.",
    features: [
      "Everything in Growth",
      "Up to 3 hours of edits or new pages",
      "Quarterly SEO review",
      "Same-day response window",
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
    a: "Most Starter sites go live in about two weeks and Business sites in about three, measured from the day I have your content. Premium builds with stores or booking systems usually run four to six weeks.",
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
    a: "No. The quote covers design and build. The only ongoing costs are your domain (about $15/year) and hosting, which is included if you are on a care plan and runs roughly $10–25/month if you are not.",
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
