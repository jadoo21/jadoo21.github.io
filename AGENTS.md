# AGENTS.md

Personal portfolio for Rishabh Roshan. React 18 + TypeScript (strict) + Vite + Tailwind + React Router (v7), Vitest/RTL, deployed as a static GitHub Pages user site.

## Commands

```bash
npm run dev          # Vite dev server
npm run typecheck    # tsc -b --noEmit
npm run lint         # ESLint (flat config); lint:fix available
npm run format:check # Prettier; format to write
npm test             # Vitest single run; test:watch for watch mode
npm run build        # tsc -b && vite build && node scripts/gh-pages-404.mjs
```

Verification order: `lint` -> `typecheck` -> `test`. `build` is the full gate (CI runs lint + test + build).

## Build & deploy gotchas

- `npm run build` copies `dist/index.html` to `dist/404.html` (via `scripts/gh-pages-404.mjs`) so client-side routes work on static hosts.
- No Vite `base` is set — correct for the `jadoo21.github.io` user-site root. Don't add one.
- `.github/workflows/deploy.yml` deploys `dist/` to GitHub Pages on push to `main` (also on PRs). Merging a branch to `main` ships the site; there is no preview/staging.

## Architecture

- **Content-driven**: all user-facing content lives in typed data files under `src/data/` (`site.ts`, `timeline.ts`, `keyloop.ts`, `technologies.ts`, `projects.ts`, `caseStudies.ts`, `experience.ts`). Update case studies / projects / experience there; do not touch UI code for content edits.
- **`src/data/site.ts`** is central config: `github` is an intentionally-empty placeholder (adding it wires navbar/footer/CTA/contact automatically); resume lives at `public/Rishabh-Roshan-Resume.pdf` and portfolio portrait at `public/images/rishabh-roshan.png`.
- **Routing**: every page in `src/pages/` is lazy-loaded in `src/App.tsx` under one `Suspense` fallback. New routes follow that pattern (lazy import + `<Route path=...>`).
- Tailwind tokens: `brand` (indigo), `surface`, font `InterVariable` (imported in `src/main.tsx` via `@fontsource-variable/inter`). Dark mode uses the `class` strategy (`html.dark`).

## Testing quirks

- jsdom + globals; setup in `src/test/setup.ts` stubs `IntersectionObserver`, `ResizeObserver`, `window.scrollTo`, `matchMedia`, and resets `localStorage` + `dark` class per test.
- Render routed components with `renderWithRouter` from `src/test/test-utils.tsx` (MemoryRouter); do not hand-roll it.
- Because routes are lazy, tests must use async queries (`findBy*`, often with an explicit timeout — see `longWait` in `src/App.test.tsx`).

## Style / TS conventions

- ESLint flat config with `eslint-config-prettier` last. `react-refresh/only-export-components`: component files must only export components (constants allowed).
- `consistent-type-imports` is on: use `import type` for type-only imports.
- Strict TS with `noUncheckedIndexedAccess` — array indexing yields `T | undefined`; handle the possibly-undefined case.
- Prettier: double quotes, semicolons, trailing commas, print width 88.

## Content constraint

Do not add company credentials, internal URLs/repo names, Jira IDs, team member names, or invented metrics. Company work is described at a sanitized level and architecture diagrams are labeled as simplified representations. The same rule applies to any new case-study content.
