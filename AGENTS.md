# AGENTS.md

Instructions for AI coding agents working in this repository.

## Repository Overview

Personal website/blog for maxanderson.tech built with **Astro 5**, **React 19**, and **Tailwind CSS v4**, in a cobalt night theme with pixel-art canvas graphics. Deployed to GitHub Pages via GitHub Actions on push to `main`.

**Stack:** Astro (static SSG) + React (interactive components) + Tailwind v4 (via Vite plugin) + TypeScript (strict mode)

## Project Structure

```
src/
  components/       # UI components (.tsx for React, .astro for Astro)
                    #   AsciiNetwork.astro: the home page's isometric network map (canvas)
                    #   AsciiField.astro: the pixel lane field behind each list page head
  content/
    blog/           # Markdown blog posts
  content.config.ts # Astro content collection schema (Zod)
  data/
    site.ts         # Site metadata, social links, bio text
    work-history.ts # Companies and roles for /work-history/
    certifications.ts # Certifications and their order on /certifications/
  layouts/
    BaseLayout.astro # Single base layout (all pages use this)
  lib/
    utils.ts        # Date formatting, BlogPost type, sorting helpers
  pages/            # File-based routing
    blog/           # Blog listing + individual post pages
    posts/          # Legacy redirects (/posts/* -> /blog/*)
    tags/           # Tag listing + tag-filtered views
    work-history/   # Per-role timeline
    certifications/ # Certifications table
    index.astro     # Homepage
  styles/
    tokens.css      # Design tokens (@theme): colours, fonts, type and spacing scales
    base.css        # Element defaults, the page dither texture, photo duotone
    global.css      # Component and page styles; opens with the Hallmark stamp
public/
  img/blog/         # Feature images per post (subdirectories by slug)
  img/dither.png    # 3x3 tile for the page's dot-screen texture
  CNAME             # Custom domain: maxanderson.tech
.hallmark/          # Hallmark design-skill state (log.json, salt); shots/ is gitignored
```

## Build / Dev / Deploy Commands

```bash
# Install dependencies (use npm, not yarn/pnpm)
npm ci

# Start dev server (hot reload)
npm run dev

# Production build (output to dist/)
npm run build

# Preview production build locally
npm run preview

# Clean build artifacts
rm -rf dist/ .astro/
```

**CI uses Node 22.** No `.nvmrc` or `.node-version` file exists; match Node 22 locally.

There are **no tests, linters, or formatters** configured in this project. Validate changes by running `npm run build` and checking for errors. No test runner exists.

## Deployment

Automatic via `.github/workflows/astro.yml` on push to `main`:
1. `npm ci` with Node 22
2. `npm run build` (with `ASTRO_TELEMETRY_DISABLED=1`)
3. Upload `dist/` to GitHub Pages

The `dist/` directory is gitignored and must never be committed.

## Code Style Guidelines

### TypeScript / TSX Components

- **Indentation:** 2 spaces
- **Quotes:** Double quotes for strings
- **Semicolons:** Always use semicolons
- **Component pattern:** Default export function components with destructured props:
  ```tsx
  interface Props {
    title: string;
    count?: number;
  }

  export default function MyComponent({ title, count = 0 }: Props) {
    return <div className="...">{title}</div>;
  }
  ```
- **Props typing:** Use `interface Props`, not `type Props` and not `React.FC`
- **JSX attributes:** Use `className` in React `.tsx` files, `class` in `.astro` files
- **Imports:** Use named imports; group by: external packages, then internal modules
- **Type assertions:** Avoid `any` where possible; use proper types from Astro content collections

### Astro Components (.astro)

- Frontmatter goes between `---` fences at the top of the file
- Use `class` attribute (not `className`) in Astro template markup
- Use `client:idle` directive for React component hydration (not `client:load`)
- Template comments use `{/* */}` syntax
- Inline `style` attributes carry per-element CSS custom properties (for example `--start` and `--width` on work-history bars)

### CSS (global.css)

- **Indentation:** 2 spaces
- **Tailwind v4:** Imported via `@import "tailwindcss"` with `@theme` block for custom tokens
- **Custom properties:** Kebab-case (`--color-accent`, `--font-display`)
- **Class naming:** BEM-like, double underscores for elements and double dashes for modifiers (`hero__portrait`, `key--primary`)
- **Section organization:** Separated by `/* ===== Section Name ===== */` comments
- **Tokens:** Colours, fonts and the type and spacing scales live in `src/styles/tokens.css`; element defaults in `src/styles/base.css` (scaffolded from Hallmark's Cobalt theme). `global.css` opens with a Hallmark stamp comment block; keep it first.
- **Fonts:** "Familjen Grotesk" (headings, labels), "IBM Plex Sans" (body), "JetBrains Mono" (code and the hero field)

### Visual design

- **Theme:** a cobalt night palette. Every page sits on the night blue (`--color-night-1`) with a static dot-screen texture (`body::before` in `base.css`). Semantic tokens (`--color-paper`, `--color-ink`, `--color-accent`, rules, keys) are defined in terms of the eight `--color-night-0` to `--color-night-7` shades; change those rather than hard-coding colours. `--color-threat-*` (red) and `--color-safe-*` (green) are reserved for the attacker and the allowed user on the home map.
- **Pixel art:** canvas graphics draw in square 5px pixels with ordered (Bayer) dithering for fades. The home map dithers in beside the text column on desktop and becomes its own panel under the text below 960px.
- **Hallmark:** the design was produced with the Hallmark skill. Keep the stamp comment block at the top of `global.css` and `.hallmark/log.json` in step with the design when it changes.

### Blog Content (Markdown)

Posts live in `src/content/blog/<slug>.md`. Required frontmatter fields are defined by the Zod schema in `src/content.config.ts`:

```yaml
---
title: "Post Title"
date: 2024-01-13T00:00:00Z
readTime: "10 min read"
tags: ["Tag1", "Tag2"]
excerpt: "Brief description of the post..."
featureImage: "/img/blog/<slug>/feature.png"  # optional
draft: true                                    # optional, hides in production
---
```

- Feature images go in `public/img/blog/<post-slug>/` and are referenced with absolute paths
- Drafts are only visible when `import.meta.env.DEV` is true (dev server)
- Tags are case-sensitive strings; reuse existing tags when possible
- Use ISO 8601 date format with timezone (`Z` suffix)

### Naming Conventions

- **Files:** Kebab-case for content/pages (`workload-identity-federation-part-1.md`)
- **Components:** PascalCase for component files (`BlogCard.tsx`, `Navbar.astro`)
- **Functions/variables:** camelCase (`formatDate`, `sortedPosts`)
- **CSS classes:** Kebab-case / BEM-like (`post-row__title`, `key--primary`)
- **Types/interfaces:** PascalCase (`BlogPost`, `Props`)

### Error Handling

- No global error boundary configured
- Content collection queries should filter drafts: check `import.meta.env.DEV` before including posts with `draft: true`
- Legacy `/posts/*` URLs redirect to `/blog/*` via dedicated redirect pages; preserve this mapping

### Git Conventions

- Use **conventional commits**: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`
- Never mention AI-generated code in commit messages or PR descriptions
- Do not commit `dist/`, `.astro/`, or `node_modules/`
- Do not commit `.env` files

## Key Architectural Notes

- **Static output only** (`output: 'static'` in astro.config.mjs) -- no SSR
- **Tailwind v4 via Vite plugin** (`@tailwindcss/vite`), not PostCSS
- **React hydration:** The current components render to static HTML with no client directive; use `client:idle` only when a component needs interactivity
- **Content collections:** Blog posts use Astro's glob-based content loader with Zod validation
- **Shiki code highlighting:** Theme is `github-dark` (configured in `astro.config.mjs`)
- **Single layout:** All pages use `BaseLayout.astro` which includes font loading, the skip link, and the content slot
