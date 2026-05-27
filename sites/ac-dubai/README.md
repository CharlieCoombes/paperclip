# AC Services Dubai — Directory

An SEO-optimised directory of AC repair, installation and maintenance providers in Dubai. Built with Next.js 14 (App Router), Tailwind CSS and TypeScript.

This is a standalone site living under `sites/ac-dubai`. It is **not** part of the Paperclip pnpm workspace — keep its dependencies isolated.

## Quick start

```bash
cd sites/ac-dubai
npm install
npm run dev
# open http://localhost:3030
```

Production build:

```bash
npm run build
npm run start
```

## What's included

- Homepage with hero, category grid, featured listings, area grid, how-it-works, blog preview, FAQ and CTA
- `/companies` — full directory with search + filters (query string `?q=`, `?area=`, `?category=`)
- `/companies/[slug]` — listing detail pages (statically generated)
- `/categories` + `/categories/[slug]` — service category index and detail
- `/areas` + `/areas/[slug]` — Dubai neighbourhood index and detail
- `/blog` + `/blog/[slug]` — guide articles
- `/about` — how we vet listings
- `/submit` — submission form
- `/sitemap.xml` and `/robots.txt` — generated automatically
- JSON-LD structured data: `Organization`, `HVACBusiness` (per listing), `BreadcrumbList`, `FAQPage`, `Article`

## SEO essentials baked in

- Per-page `<title>`, meta description, canonical URL, OpenGraph + Twitter cards
- LocalBusiness/HVACBusiness schema on every company page
- Breadcrumb schema on detail pages
- FAQ schema on homepage
- Auto-generated sitemap covering all dynamic pages
- Static generation (`generateStaticParams`) for category, area, company and blog routes

## Data

All listings in `src/data/companies.ts` are **fictional placeholders** for layout/demo purposes. Phone numbers use the `+971 4 555 0101` and `+971 50 100 0101` patterns to make their fake-ness obvious. Email domains are `.example`. Swap with real, permissioned data before launch.

To add or edit data, modify:

- `src/data/companies.ts` — directory entries
- `src/data/categories.ts` — service categories
- `src/data/areas.ts` — Dubai neighbourhoods
- `src/data/blog.ts` — guide articles

## Environment

Set `NEXT_PUBLIC_SITE_URL` to your production URL before deploying (used for canonical URLs and sitemap entries). Defaults to a placeholder.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Tech stack

- Next.js 14.2 (App Router)
- React 18
- Tailwind CSS 3.4
- TypeScript 5
- Inter + Plus Jakarta Sans (Google Fonts)
