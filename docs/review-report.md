# Review Report — `my_dev_site`

Date: February 3, 2026

## Summary
The site matches the brief: neo-minimal presentation with technical depth on demand, a structured content architecture, and tasteful interaction (theme toggle, skill filter, project drawer). The main functional issue reported (theme init script placement) has been addressed by migrating to `next-themes`.

## Product/BA Review
### Requirements covered
- Neo-minimal design with restrained, professional visuals.
- Technical depth on demand (project drawer).
- Clear professional narrative (experience timeline).
- Skill filter for scanning.
- Subtle theme toggle.
- Maintainable structure (data/types/components separated).

### Requirements to confirm
- Live project links vs repo links for each project.
  - Current data provides a live link for Galactic Gunners only.
  - Add repo URLs where you want public code to be visible.
- LinkedIn link is a placeholder and will need to be wired.

### Suggested BA improvements
- Add a short "Services" or "Engagement models" section for freelancing clarity.
- Add case study pages if you want to show technical depth without crowding the homepage.

## Developer Review
### Architecture
- Clear separation: `src/data`, `src/types`, `src/components`, `src/app`.
- Typed data models enable consistent UI rendering.
- Theme control uses `next-themes` with `data-theme` attribute for clean CSS tokens.

### Code quality
- Components are small and focused.
- TSDoc present and explicit return types for components.
- Interaction logic is isolated and clear.

### Risks / Technical debt
- `next/font` uses Google Fonts at build time. If the build environment cannot reach Google Fonts, `next build` fails.
  - Fix options: run builds with internet access, or self-host fonts.
- `ThemeToggle` uses a mounted guard with a lint suppression. It is safe and intentional but should be documented.

## User Review
### Strengths
- Calm and confident presentation.
- Fast scanning for hiring teams.
- Accessible, familiar interactions.

### Areas to refine
- Add direct repo links for projects you want reviewed.
- Consider a "case studies" page to separate public-facing narrative from deep technical detail.

## Tests Run
### Automated
- `npm run lint`: PASS
- `npm run build`: FAIL (Google Fonts fetch blocked in this environment)

### Manual
- `npm run dev` and opened at `http://localhost:3001`: PASS

## Next Steps (in order)
1. Push commits to GitHub:
   ```bash
   git push -u origin main
   ```
2. Run build in a networked environment:
   ```bash
   npm run build
   npm run start
   ```
3. Add repo URLs for public projects in `src/data/site.ts`.
4. Replace LinkedIn placeholder with the real URL.
5. Optional: add case study pages.

## GitHub Links Strategy (Answer)
- The GitHub icon should link to your **profile**: `https://github.com/michael-leese`
- Use GitHub Pages only if you want a **live demo** for a project.
- For projects:
  - Live demo URL (if deployed)
  - Repo URL (if public)
  - If private: show “Code private”
