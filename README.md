# 336 Sites

Marketing site for **336 Sites** — a web development business in Greensboro, NC
serving small businesses across the Triad and remotely.

Built with Next.js (App Router), Tailwind CSS v4 and TypeScript. Every page is
statically rendered, so it deploys anywhere and loads fast on a phone.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx        Root layout: fonts, metadata, JSON-LD, header/footer
    page.tsx          Home
    services/         Services
    portfolio/        Portfolio
    pricing/          Pricing + care plans + FAQ
    contact/          Contact form and details
    globals.css       Design tokens (colours, type, radii, shadows)
    sitemap.ts        /sitemap.xml
    robots.ts         /robots.txt
    icon.svg          Favicon (placeholder mark)
  components/         Header, Footer, Button, cards, form, icons…
  lib/
    site.ts           Business details — phone, email, hours, socials
    content.ts        Services, portfolio, pricing, FAQs, process steps
```

## Design system

Defined once in `src/app/globals.css` under `@theme`, then used as Tailwind
utilities (`bg-teal-700`, `text-mint-500`, `border-line`, …).

| Token group | Notes |
| --- | --- |
| `teal-50…950` | Deep teal brand colour. `teal-700` (`#084a44`) is the primary. |
| `mint-50…600` | Mint accent. Used for highlights and CTAs on dark backgrounds. |
| `ink` / `body` / `subtle` | Text colours, warmed slightly toward the brand hue. |
| `line` / `surface` | Borders and the soft off-white section background. |
| Type | Plus Jakarta Sans, loaded via `next/font` (no layout shift). |

Accessibility rules baked in: 44px minimum touch targets, visible focus rings,
4.5:1 text contrast, and `prefers-reduced-motion` honoured globally.

## Before launch — things to replace

Everything below is a deliberate placeholder.

1. **`src/lib/site.ts`** — phone number, email, social URLs and `url` (the live
   domain). The phone number is used in the header, footer, contact page and
   both CTA bands, so changing it in this one file updates the whole site.
2. **Logo** — `src/components/Logo.tsx` (`LogoMark`) and `src/app/icon.svg`
   both hold a simple placeholder mark.
3. **Portfolio** — `projects` in `src/lib/content.ts`. Names, blurbs and
   results are invented. The thumbnails are generated placeholders; swap
   `Thumbnail` in `src/components/ProjectCard.tsx` for `next/image`
   screenshots when you have them.
4. **Pricing** — `tiers` and `carePlans` in `src/lib/content.ts`, plus
   `comparisonRows` in `src/app/pricing/page.tsx`.
5. **Testimonial** — the quote on the home page (`Testimonial` in
   `src/app/page.tsx`) is marked as a placeholder on the page itself.
6. **Client logos** — the "Trusted by" strip on the home page uses
   `ClientLogoPlaceholder`.

## Contact form

There is no backend yet. The form validates in the browser and then opens the
visitor's email client with the message pre-filled.

To switch to a hosted form service, set `FORM_ENDPOINT` at the top of
`src/components/ContactForm.tsx` (e.g. a Formspree URL). The submit handler
already POSTs the `FormData` there and shows success/error states — no other
changes needed.

## Deploying

The site is fully static, so any of these work:

- **Vercel / Netlify** — import the repo, no configuration needed.
- **Static host** — add `output: "export"` to `next.config.ts`, run
  `npm run build`, and upload `out/`.

Point the custom domain at the host, then update `site.url` in
`src/lib/site.ts` so metadata, `sitemap.xml` and `robots.txt` use it.
