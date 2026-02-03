# Brand & Design System

This document centralizes the visual system for the portfolio so future edits stay consistent.

## Color Palette

### Light Theme
- `--bg`: #f5f4f1
- `--surface`: #ffffff
- `--surface-muted`: #f0eeea
- `--text`: #111111
- `--text-muted`: #5b5b5b
- `--line`: #d9d5cf
- `--accent`: #0f766e
- `--accent-strong`: #0b5c55
- `--accent-muted`: #e5f2f1
- `--highlight`: #f3e7c3

### Dark Theme
- `--bg`: #0e0f10
- `--surface`: #151617
- `--surface-muted`: #1b1c1e
- `--text`: #f3f3f0
- `--text-muted`: #c1c1bd
- `--line`: #2b2d30
- `--accent`: #4dd7c7
- `--accent-strong`: #37b8ab
- `--accent-muted`: #13312e
- `--highlight`: #2a2318

## Typography

### Font Families
- Display: Space Grotesk (`--font-space-grotesk`)
- Body: IBM Plex Sans (`--font-ibm-plex-sans`)
- Mono: JetBrains Mono (`--font-jetbrains-mono`)

### Type Scale (reference)
- Hero headline: `clamp(2.6rem, 4vw, 3.6rem)`
- Section titles: `1.9rem` to `2.25rem`
- Subheads/body: `1.1rem` to `1.35rem`
- UI labels: `0.72rem` to `0.85rem`

## Spacing Scale

All spacing references are defined in `src/app/globals.css`.

- `--space-1`: 0.25rem
- `--space-2`: 0.5rem
- `--space-3`: 0.75rem
- `--space-4`: 1rem
- `--space-5`: 1.5rem
- `--space-6`: 2rem
- `--space-7`: 3rem
- `--space-8`: 4.5rem
- `--space-9`: 6rem

## Radii

- `--radius-sm`: 10px
- `--radius-md`: 18px
- `--radius-lg`: 28px

## Shadows

- Light: `0 18px 60px rgba(17, 17, 17, 0.08)`
- Dark: `0 20px 60px rgba(0, 0, 0, 0.45)`

## Motion

Keep motion subtle and functional:
- Buttons and cards: `transform` + `box-shadow` on hover
- Drawer: fade + slide via Tailwind utility classes or a small custom keyframe
