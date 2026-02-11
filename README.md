# Michael Leese — Developer Portfolio (my_dev_site)

### 🌐 Visit: www.michael-leese.dev

Neo-minimal personal site that balances calm presentation with technical depth. Built in Next.js (App Router) with TypeScript and Tailwind, designed for maintainability, clarity, and gentle interaction.

## What this site is for
- Recruiters and hiring teams: scan experience quickly, validate credibility
- Technical reviewers: drill into project detail and stack decisions
- Freelance clients: understand how I work and how to contact me

## Features
- Subtle theme toggle (light/dark) with persisted preference
- Filterable skills for quick scanning
- Project detail drawer for on-demand context (role, outcomes, tech, links)
- Content-driven architecture (data + types separate from UI)

## Stack
- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS

## Project Structure
- `src/app` — routes, layouts, global styling
- `src/components` — reusable UI components
- `src/data` — content and structured data (projects, skills, links)
- `src/types` — shared type definitions
- `docs/` — internal notes (brand system, tokens, content rules)

## Local Development
### Install
```bash
npm ci
```

### Run
```bash
npm run dev
```

### Quality checks (run before committing)
```bash
npm run lint
npm run build
npm run start
```

> Recommended: add a typecheck script:
```bash
# package.json
# "typecheck": "tsc --noEmit"
```

## Links strategy (important)
- Global GitHub icon should point to: `https://github.com/michael-leese`
- Each project should optionally include:
  - Live demo URL (if deployed)
  - Repo URL (if public)
  - For private/commercial work: mark as Code private and omit repo link

## Deployment
Recommended:
- Vercel (best Next.js support)

Alternative:
- Cloudflare Pages (good, more control)

## Troubleshooting
### Theme init / hydration errors
This project uses `next-themes`. If you see theme or hydration warnings, confirm `ThemeProvider` is configured in `src/app/providers.tsx`.

### Port reset on localhost
If `localhost:3000` resets in your browser, try:
```bash
npm run dev -- --port 3001
```

## Roadmap (lightweight)
- Add case study pages (1–2 professional, 1–2 personal)
- Add contact form (server action or provider)
- Add analytics (privacy-friendly)
