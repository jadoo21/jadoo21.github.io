# Rishabh Roshan — Portfolio

A production-quality personal portfolio for **Rishabh Roshan**, Software Engineer
specializing in **React**, **TypeScript**, **.NET** and **Azure**.

Built to do two jobs at once: present Rishabh's engineering work to recruiters and
hiring managers, and _demonstrate_ the engineering itself. The site is written in the
very stack it advertises — typed React, a clean component architecture, documented
design decisions and real tests.

## Overview

The site positions Rishabh as a full-stack software engineer — from React interfaces,
through Rest APIs and .NET services, to microservices, messaging, databases and Azure
deployment. Content is strictly based on his professional experience (Tally Group,
NCR Corporation) and is anonymized where required. No metrics, achievements or
responsibilities are invented.

Key content:

- **Home** — hero, verified proof points, selected work, engineering method, CTA.
- **Work** — four engineering case studies (TALLY CIS, Fastype, Event-Driven Platform,
  Enterprise Retail Platform), each with an interactive, clickable architecture diagram.
- **Engineering** — skill categories backed by evidence (no skill bars), engineering
  decisions, architecture visualizations, and how the work gets done.
- **React Engineering Lab** — live, working React components: a data table with full
  state handling, a validated multi-step form, a simulated API dashboard and a mocked
  authentication flow with protected route semantics.
- **Experience / About / Contact** — timeline, profile and contact details.

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 5** with route-level code splitting
- **Tailwind CSS** (custom design tokens, dark mode via `class` strategy)
- **React Router** for routing
- **Framer Motion** for restrained, accessibility-aware animations
- **Lucide React** for icons
- **Vitest** + **React Testing Library** for tests
- **ESLint** (flat config) + **Prettier**

## Architecture

```
src/
├── components/
│   ├── architecture/    # Interactive diagram engine (measured SVG connectors)
│   ├── engineering/     # Engineering decisions, skill categories, lab components
│   ├── home/            # Homepage sections
│   ├── layout/          # Container, Section, PageHeader, CTA, Layout
│   ├── navigation/      # Navbar (desktop + mobile drawer), Footer
│   ├── projects/        # Project card + case-study block renderer
│   └── ui/              # Button, Badge, Card, Tag, Reveal, CodeBlock
├── pages/               # One file per route, lazy-loaded
├── data/                # Content layer, separate from UI
├── hooks/               # useTheme, useScrolled, useCountUp, usePageMeta
├── lib/                 # cn() class-name helper
├── test/                # Test setup + render helpers
├── types/               # Shared TypeScript interfaces
└── styles/              # Tailwind entry + design tokens
```

### Content layer

All user-facing content lives in `src/data/` — projects, case studies, experience,
skills and engineering decisions are plain typed data. Components render it, so
updating a case study never touches UI code.

### Central configuration

Personal details, links, resume path and the (currently placeholder) GitHub URL are
configured once in [`src/data/site.ts`](src/data/site.ts):

```ts
export const siteConfig = {
  name: "Rishabh Roshan",
  title: "Software Engineer",
  email: "rishabh.sanjiv@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishabh-roshan/",
  github: "", // <-- add your GitHub profile URL here
  resumeUrl: "/Rishabh-Roshan-Resume.pdf",
  // ...
};
```

- The **GitHub URL is intentionally empty**. Add it in `siteConfig.github` and the
  navbar, footer, CTA and contact page will pick it up automatically.
- Place the resume PDF at `public/Rishabh-Roshan-Resume.pdf` (see
  [`public/resume/README.md`](public/resume/README.md)). Until it exists, Resume
  buttons point at the expected path.

### Design philosophy

- **Understated and premium.** Neutral surfaces, generous whitespace, subtle borders,
  restrained shadows, and a single indigo accent — closer to Linear, Vercel or Stripe
  than to a template.
- **Content as evidence.** Instead of skill bars or star ratings, each skill category
  points at where it was actually used; the architecture diagrams and the React Lab are
  the proof.
- **Accessible by default.** Semantic HTML, keyboard navigation, visible focus states,
  `aria` only where needed, reduced-motion support and WCAG-conscious contrast in both
  themes.
- **Performance-conscious.** Route-level lazy loading, no image payloads, system-font
  plus a self-hosted Inter variable font, and framer-motion kept intentionally subtle.
- **Clean dependency tree.** Reactstrap/Bootstrap was deliberately omitted: Tailwind
  already covers the entire UI system, and importing Bootstrap alongside it would pull in
  a conflicting global reset plus hundreds of unused kilabytes. The direction in the
  brief — "reactstrap where useful" — is satisfied by the custom design system in
  `src/components/ui`, which every page shares.

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

Coverage includes navigation, the theme toggle, project cards, form validation and
the interactive lab components.

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
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 + CDN).

**GitHub Pages (this repo):**

1. Build: `npm run build`
2. Publish the `dist/` folder. On GitHub Pages, either point Pages at a branch's
   `/dist` (via a workflow using `actions/upload-pages-artifact` with
   `"path": "dist"`), or serve from the repo root as a user/org site.

Note on paths: the site uses root-relative URLs. If you host under a sub-path
(e.g. `https://user.github.io/repo/`), set `base` in `vite.config.ts` and
`basename` on the `<BrowserRouter>` to the same sub-path.

## Security & Privacy

- No company credentials, internal URLs, client data or secret identifiers are shipped.
- TALLY CIS and the Enterprise Retail Platform case studies are described at a
  sanitized level and explicitly labeled as anonymized architecture representations.
- The Event-Driven Platform is clearly marked as a personal demonstration project.
