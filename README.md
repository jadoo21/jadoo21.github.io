# Rishabh Roshan — Portfolio

A production-quality personal portfolio for **Rishabh Roshan**, Software Engineer
specializing in **React**, **TypeScript**, **.NET** and **cloud platforms**.

Built to present Rishabh's engineering work to recruiters and hiring managers as a
professional engineering profile — distributed systems, payment platforms and
production engineering — rather than a collection of coding demos.

## Overview

The site positions Rishabh as a full-stack software engineer: React and TypeScript
on the frontend, C# / .NET behind the API, and microservices, messaging, databases
and cloud infrastructure (AWS and Azure) beyond it. Content is strictly based on his
professional experience (Keyloop, Tally Group, NCR Corporation) and is anonymized
where required. No metrics, achievements or responsibilities are invented.

Key content:

- **Home** — hero with photo and technology badges, career snapshot, "Currently at
  Keyloop", specializations, selected work, technology stack, experience and
  professional story.
- **Experience** — vertical career timeline (Keyloop, Tally Group, NCR), a deep
  Keyloop section (role, what I work on, platform ownership, selected
  contributions in problem → approach → impact form, and technical focus), plus
  Tally and NCR roles.
- **Work** — six pieces of professional engineering work as an ordered list, each
  backed by a case-study page with interactive architecture diagrams.
- **Case studies** — including the Keyloop ePayments platform (with a simplified
  payment-lifecycle and architecture visualization) and contribution-level studies.
- **About / Contact** — professional story and contact details.

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite** with route-level code splitting
- **Tailwind CSS** (custom design tokens, dark mode via `class` strategy)
- **React Router** for routing
- **Framer Motion** for restrained, accessibility-aware animations
- **Lucide React** for icons
- **Vendored brand SVG logos** (derived from the CC0 `@iconify-json/logos` set)
- **Vitest** + **React Testing Library** for tests
- **ESLint** (flat config) + **Prettier**

## Architecture

```
src/
├── components/
│   ├── architecture/    # Interactive diagram engine (measured SVG connectors)
│   ├── experience/      # Timeline, Keyloop details, contributions, company blocks
│   ├── home/            # Homepage sections (hero, snapshot, Keyloop, work, stack…)
│   ├── layout/          # Container, Section, PageHeader, CTA, Layout
│   ├── navigation/      # Navbar (desktop + mobile drawer), Footer
│   ├── projects/        # Ordered work list + case-study block renderer
│   ├── technology/      # Brand-logo and monogram technology marks
│   ├── ui/              # Button, Badge, Card, Tag, Reveal
│   └── work/            # Payment-lifecycle visualization
├── pages/               # One file per route, lazy-loaded
├── data/                # Content layer, separate from UI
├── hooks/               # useTheme, useScrolled, usePageMeta
├── lib/                 # cn() class-name helper
├── test/                # Test setup + render helpers
├── types/               # Shared TypeScript interfaces
└── styles/              # Tailwind entry + design tokens
```

### Content layer

All user-facing content lives in `src/data/` — experience, timeline, Keyloop focus
and contributions, projects, case studies, and the technology catalog are typed data
files. Updating a case study never touches UI code.

Key files:

- `src/data/site.ts` — personal details, links, resume and photo paths.
- `src/data/timeline.ts` — career dates, centralized for easy updates.
- `src/data/keyloop.ts` — the "Currently at Keyloop" block, focus areas, ownership
  cards and selected contributions.
- `src/data/technologies.ts` — technology catalog, hero row, stack groups,
  specializations and the career snapshot.
- `src/data/techLogos.ts` — vendored brand SVG bodies used by the technology marks.

### Central configuration

Personal details, links, resume path and the (currently placeholder) GitHub URL are
configured once in [`src/data/site.ts`](src/data/site.ts):

```ts
export const siteConfig = {
  name: "Rishabh Roshan",
  title: "Software Engineer",
  email: "rishabh.sanjiv@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishabh-roshan/",
  github: "https://github.com/jadoo21",
  resumeUrl: "/Rishabh-Roshan-Resume.pdf",
  photoUrl: "/images/rishabh-roshan.png", // <-- drop a portrait in public/images/
  // ...
};
```

- The **GitHub URL** is configured in `siteConfig.github`. Adding or removing it
  automatically toggles the GitHub link in the navbar, footer, CTA and contact page.
- Place the resume PDF at `public/Rishabh-Roshan-Resume.pdf`. Until it exists,
  Resume buttons point at the expected path.
- Place a professional portrait at `public/images/rishabh-roshan.png`. Until it
  exists, the hero shows a subtle placeholder frame.

### Design philosophy

- **Understated and premium.** Neutral surfaces, generous whitespace, subtle borders,
  restrained shadows, and a single indigo accent — closer to Linear, Vercel or Stripe
  than to a template.
- **Content as evidence.** Selected work, case studies and production experience
  carry the credibility; there are no skill bars, star ratings or invented metrics.
- **Accessible by default.** Semantic HTML, keyboard navigation, visible focus states,
  reduced-motion support and WCAG-conscious contrast in both themes.
- **Performance-conscious.** Route-level lazy loading, system-font plus a self-hosted
  Inter variable font, and restrained framer-motion.
- **Privacy-aware.** Company work is described at a high level. No Jira IDs, internal
  repository names, team member names, internal URLs, credentials or confidential
  details are shipped; architecture diagrams are labeled as simplified
  representations.

## Local Development

```bash
npm install
npm run dev
```

## Testing

```bash
npm run test        # single run
npm run test:watch  # watch mode
```

Coverage includes routing, navigation and the ordered work list.

## Other Scripts

```bash
npm run lint          # ESLint
npm run format        # Prettier (write)
npm run format:check  # Prettier (check)
npm run typecheck     # TypeScript, strict
```

## Build

```bash
npm run build
```

The build type-checks, bundles, and copies `dist/index.html` to `dist/404.html` so
client-side routes work on static hosts that don't support SPA fallback.

## Deployment

The site is a static export; deploy the `dist/` folder to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 + CDN). The included
`.github/workflows/deploy.yml` publishes it to GitHub Pages on push to `main`.

## Security & Privacy

- No company credentials, internal URLs, client data or secret identifiers are shipped.
- The Keyloop, TALLY CIS and Enterprise Retail case studies are described at a
  sanitized level and explicitly labeled as simplified/anonymized representations.