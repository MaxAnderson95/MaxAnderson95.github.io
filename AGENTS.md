# AGENTS.md

Instructions for AI coding agents working in this repository.

## Repository Overview

Personal website/blog for maxanderson.tech built with **Astro 5**, **React 19**, and **Tailwind CSS v4**. Deployed to GitHub Pages via GitHub Actions on push to `main`.

**Stack:** Astro (static SSG) + React (interactive components) + Tailwind v4 (via Vite plugin) + TypeScript (strict mode)

## Project Structure

```
src/
  components/       # UI components (.tsx for React, .astro for Astro)
  content/
    blog/           # Markdown blog posts
  content.config.ts # Astro content collection schema (Zod)
  data/
    site.ts         # Site metadata, social links, bio text
  layouts/
    BaseLayout.astro # Single base layout (all pages use this)
  lib/
    utils.ts        # Date formatting, BlogPost type, sorting helpers
  pages/            # File-based routing
    blog/           # Blog listing + individual post pages
    posts/          # Legacy redirects (/posts/* -> /blog/*)
    tags/           # Tag listing + tag-filtered views
    index.astro     # Homepage
  styles/
    global.css      # All CSS: Tailwind v4 imports, theme, custom styles
public/
  img/blog/         # Feature images per post (subdirectories by slug)
  CNAME             # Custom domain: maxanderson.tech
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
- Inline `style` attributes for per-element animation delays

### CSS (global.css)

- **Indentation:** 2 spaces
- **Tailwind v4:** Imported via `@import "tailwindcss"` with `@theme` block for custom tokens
- **Custom properties:** Kebab-case (`--color-accent`, `--font-display`)
- **Class naming:** BEM-like with double dashes for modifiers (`photo-bracket--tl`)
- **Section organization:** Separated by `/* ===== Section Name ===== */` comments
- **Color scheme:** Dark theme with zinc backgrounds (`#09090b`), orange accent (`#f97316`)
- **Fonts:** "Clash Display" (headings), "DM Sans" (body), "JetBrains Mono" (code)

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
- **Components:** PascalCase for component files (`BlogCard.tsx`, `GridRunners.astro`)
- **Functions/variables:** camelCase (`formatDate`, `sortedPosts`)
- **CSS classes:** Kebab-case / BEM-like (`hero-glow`, `photo-bracket--tl`)
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
- **React hydration:** All React components use `client:idle` for deferred hydration
- **Content collections:** Blog posts use Astro's glob-based content loader with Zod validation
- **Shiki code highlighting:** Theme is `github-dark` (configured in `astro.config.mjs`)
- **Single layout:** All pages use `BaseLayout.astro` which includes font loading, background effects (grid, vignette, noise), and the content slot
