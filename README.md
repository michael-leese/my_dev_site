# Michael Leese — Developer Portfolio

Neo-minimal personal site that balances calm presentation with technical depth. Built in Next.js with TypeScript and Tailwind, designed for maintainability, clarity, and gentle interaction.

## Features
- Subtle theme toggle (light/dark).
- Filterable skill inventory for quick scanning.
- Project detail drawer with on-demand context.
- Clean, readable sections tailored for hiring teams and technical reviewers.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React

## Project Structure
- `src/app`: Routes, layout, global styling
- `src/components`: Reusable UI components
- `src/data`: Content and structured data
- `src/types`: Shared type definitions
- `docs/brand-system.md`: Design tokens and brand guidelines

## Conventions
- All components are typed and documented with concise TSDoc.
- Data is kept in `src/data` with explicit types in `src/types`.
- UI uses design tokens from `src/app/globals.css` for consistency.
- Small, purpose-built components instead of one massive page file.

## Scripts
```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment
- Recommended: Vercel
- Alternative: Cloudflare Pages

## Notes
The site is designed to scale into case studies and deeper technical write-ups without disrupting the clean public-facing view.
