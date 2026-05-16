---
name: maxanderson.tech
description: Personal site and technical blog for Max Anderson — a senior cloud-native engineer's portfolio rendered as editorial dark typography with one committed orange accent.
colors:
  bg: "#050505"
  surface: "#141416"
  elevated: "#1e1e21"
  border: "#ffffff14"
  border-subtle: "#ffffff0a"
  border-highlight: "#ffffff1f"
  text: "#f2f2f0"
  text-secondary: "#a1a1aa"
  text-muted: "#71717a"
  accent: "#ff6b00"
  accent-light: "#ff9e42"
  accent-dim: "#ff6b0014"
  accent-glow: "#ff6b0066"
typography:
  display:
    fontFamily: "\"Clash Display\", sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "\"Clash Display\", sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "\"Clash Display\", sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "\"DM Sans\", sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.9
    letterSpacing: "normal"
  label:
    fontFamily: "\"JetBrains Mono\", ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  card: "24px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.md}"
    padding: "3px 10px"
  tag-hover:
    textColor: "{colors.accent-light}"
  card-blog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "32px"
  nav-pill-active:
    backgroundColor: "{colors.border}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
  nav-pill-idle:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
---

# Design System: maxanderson.tech

## 1. Overview

**Creative North Star: "Engineer's Editorial — a deep-void typographic site with one committed flame of orange."**

The site reads as a senior platform engineer's personal newsroom. The page is a deep, almost-black void (`#050505`) softened by a barely-visible 64px grid, an asymmetric vignette, and an 1.8%-opacity noise grain. Long-form typography carries the work: Clash Display sets the headlines with confident geometric authority, DM Sans sets the body in a light weight at long line-heights so technical posts read like printed essays, and JetBrains Mono handles every label, timestamp, tag, and metadata pill — wearing the project's engineering provenance on its sleeve. One committed orange (`#ff6b00`, accent-glow at `rgba(255,107,0,0.4)`) carries identity wherever it lands: the typed-out role beneath the name, the underline on every body link, the bullet markers in prose, the dot on the work-history timeline, the hero CTA's halo glow.

The aesthetic is **editorial-typographic with a bold technical edge**, not terminal-cosplay or SaaS-marketing. The dark surface is committed (Drenched-tier, the surface IS the color) but the accent stays Restrained-tier (≤10% of any screen). That tension — drenched darkness, rationed warmth — is the brand: bold without shouting, technical without cosplay.

This system explicitly rejects: generic SaaS gradient heroes (no purple-to-blue, no hero-metric template, no identical card grids); Medium/Substack defaults (no stock blog template, no default serif on white); crypto/neon-on-black (no neon green or pink, no glitch effects, no hacker cosplay); and corporate-consulting trust-me palettes (no navy + gold, no stock photography of laptop-pointing).

**Key Characteristics:**
- Drenched dark surface (`#050505`) with rationed orange accent (`#ff6b00`)
- Three-font stack: Clash Display (geometric display), DM Sans (light editorial body), JetBrains Mono (engineering labels)
- Long body line-heights (1.6 base, 1.9 in prose) and a `min(80ch, 100%)` reading column
- Generous radii: pills for chrome (nav, CTA, badges), 24px on content cards, 12px on images and code
- Atmosphere layers: 64px grid + radial vignette + 1.8%-opacity SVG noise + ambient orange hero glow
- Motion is breath, not choreography: 0.8s reveal-up, 6s glow breathe, exponential cubic-bezier easing

## 2. Colors

A drenched near-black surface with cool zinc neutrals carrying text, lifted by a single committed orange accent.

### Primary
- **Electric Orange** (`#ff6b00`): The one identity color. Used on the typed-out role under the hero headline, the hero CTA background and its glow (`shadow: 0 0 20px rgba(255,107,0,0.4)`), the underline on every body-prose link, the bullet markers in ordered/unordered lists, the dot and chevron on the work-history timeline, the 2-line accent below every prose `<h2>`, and the post-lead's left rule. Used as `rgba(255,107,0,0.2)` on text selection and as `accent-glow` (`#ff6b0066`) for halos. Should occupy ≤10% of any screen.
- **Electric Orange Light** (`#ff9e42`): Hover destination for tag links and the post-badge text. Same hue, +25% lightness; reads as "this is the same element, brighter".

### Neutral
- **Deep Void** (`#050505`): Page background. Effectively black, but with one drop of warmth so it doesn't read as the harsh `#000` ban.
- **Surface** (`rgba(20,20,22,0.7)` / `#141416`): Translucent panel background for blog cards, prose tables, GitHub-style alerts, and the portrait container. Sits *above* the body but below the elevated layer.
- **Elevated** (`rgba(30,30,33,0.8)` / `#1e1e21`): Hover-state background for prose table rows. The single step of tonal lift in the system.
- **Bone White** (`#f2f2f0`): Primary text. Warm-shifted off pure white per the no-`#fff` rule.
- **Zinc Secondary** (`#a1a1aa`): Body prose color, secondary metadata, supporting copy.
- **Zinc Muted** (`#71717a`): Tertiary metadata — read times, timestamps, dot separators between metadata items.
- **Border** (`rgba(255,255,255,0.08)` / `#ffffff14`): Default 1px borders on cards, code blocks, tables.
- **Border Subtle** (`rgba(255,255,255,0.04)` / `#ffffff0a`): Lighter still; used for inline-code outlines, card top-borders between content and footer rows.
- **Border Highlight** (`rgba(255,255,255,0.12)` / `#ffffff1f`): The brightest neutral border tier; used on the floating nav container and the work-history vertical line gradient.

### Named Rules

**The One Flame Rule.** The accent (`#ff6b00`) is rationed. On any screen, it appears in at most a handful of places: one CTA, the link underlines, list markers, the typed-out role, the timeline dot. If the page starts to read as "orange", remove uses until it reads as "dark with one warm point of attention".

**The No-Pure-Black Rule.** The body uses `#050505`, not `#000`. Text uses `#f2f2f0`, not `#fff`. Every neutral carries a single drop of warmth toward the brand hue. Pure black or pure white anywhere is a bug.

**The Drenched-Surface, Restrained-Accent Rule.** The dark is Drenched (the surface IS the color, full bleed, no respite). The orange is Restrained (≤10%). The contrast is the brand.

## 3. Typography

**Display Font:** Clash Display (self-hosted via woff2, weights 400/500/600/700)
**Body Font:** DM Sans (loaded from Google Fonts)
**Label/Mono Font:** JetBrains Mono (loaded from Google Fonts)

**Character:** Clash Display is a confident geometric display sans with a futuristic flatness — high x-height, blunt terminals, no decoration. DM Sans in light weight (300) is the editorial counterweight: open, calm, neutral, and built to be read in long blocks at line-height 1.9. JetBrains Mono is the engineering signature, appearing on every metadata pill, timestamp, table header, and tag — a literal stamp of the author's craft.

### Hierarchy
- **Display** (Clash Display 700, `clamp(3.5rem, 7vw, 5.5rem)`, line-height 1.1, tracking `-0.01em`): Hero headline only ("Hey, I'm Max"). The accent color tints the first name.
- **Headline** (Clash Display 600, `1.75rem`, line-height 1.3, tracking `-0.01em`): In-prose `<h2>`. Always carries a 1px bottom border + a 60px × 2px accent underline with `box-shadow` glow. The signature prose move.
- **Title** (Clash Display 600, `1.35rem`, line-height 1.3): In-prose `<h3>` and prominent UI labels like blog-card titles (`text-xl md:text-2xl`).
- **Body** (DM Sans 300, `1.125rem` in prose / `1.0625rem` on the hero bio, line-height 1.9 in prose / 1.6 base): Long-form reading. Prose column caps at `min(80ch, 100%)` — the project sits at the upper end of the 65–75ch guideline because the light weight and tall leading make wider columns readable.
- **Label** (JetBrains Mono 500, `0.72rem` to `0.8125rem`, letter-spacing `0.02em` to `0.06em`, often `text-transform: uppercase`): Timestamps, read-time stamps, tag pills, post-badges, prose table headers, list-marker numerals, code-frame filenames.

### Named Rules

**The Mono-Metadata Rule.** Every piece of metadata — date, read time, tag, badge, table header, ordered-list numeral, code-frame filename — is set in JetBrains Mono. Body prose is *never* mono. The contrast between editorial body and monospace chrome is the system's primary typographic gesture.

**The Light-Body Rule.** Body copy uses DM Sans weight 300, not the default 400. Pair this with line-height 1.9 in prose; never tighten below 1.6. The lightness is what makes the dark background read as paper and not as terminal.

**The Accent-Underlined-Link Rule.** Every body link uses `border-bottom: 1px solid var(--color-accent)` with `text-decoration: none`. On hover, the link's text color shifts to accent, the underline disappears, and a 4px-padded `accent-dim` background pill appears around the word. Never use `color: blue`, never use `text-decoration: underline` defaults, never wrap link text in brackets.

## 4. Elevation

The system is **flat with atmosphere**. Surfaces don't rise toward the viewer with material shadows; depth is built laterally through layered fixed backgrounds — grid, vignette, noise, and an ambient orange hero glow — combined with translucent surface fills (`rgba(20,20,22,0.7)`) and backdrop-blur on chrome panels (nav, glass-panel utility).

The two exceptions where literal box-shadow does appear:
- **Hero CTA** glows orange (`0 0 20px rgba(255,107,0,0.4)`, intensifying to `0 0 30px rgba(255,107,0,0.6)` on hover) — a soft halo, not a drop shadow.
- **Heavy black drop** (`0 8px 30px rgba(0,0,0,0.4)`) on prose images and code blocks — pulls those content blocks forward off the dark void so they read as embedded artifacts.
- **Card hover lift** on blog cards: `hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]` — the only "click me" elevation gesture.

### Shadow Vocabulary
- **Accent glow** (`box-shadow: 0 0 20px rgba(255,107,0,0.4)`): Hero CTA. Halo, not depth.
- **Accent glow large** (`box-shadow: 0 0 30px rgba(255,107,0,0.6)`): Hero CTA on hover.
- **Heavy black drop** (`box-shadow: 0 8px 30px rgba(0,0,0,0.4)`): Prose images, expressive-code blocks. Embedded-artifact treatment.
- **Card lift drop** (`box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5)`): Blog card hover. Combined with `translateY(-2px)`.
- **Timeline dot glow** (`box-shadow: 0 0 12px rgba(255,107,0,0.4)`): The accent dot on the work-history vertical line.

### Named Rules

**The No-Material-Shadow Rule.** This is not a Material-style elevation system. No "card sits 4dp above surface". Depth comes from translucent fills, backdrop-blur, and the layered atmosphere stack (grid + vignette + noise + glow). Box-shadow is reserved for glows (accent halos) and embedded-artifact drops (images, code).

**The Atmosphere Stack Rule.** Every page composes the same four fixed-position background layers, in order from back to front: `.grid-bg` (64px line grid, radial-masked to fade out at the edges), the body's deep void, `.vignette` (asymmetric directional fade for edge weight), and `.noise-overlay` (1.8% opacity SVG fractal grain). Don't bypass this stack on a per-page basis; it is the floor of the brand.

## 5. Components

### Buttons

**Hero CTA — Primary** ("Read my blog"):
- **Shape:** Pill (`rounded-full`, 9999px radius).
- **Color:** Solid `accent` fill (`#ff6b00`), white text, semibold (600).
- **Padding:** `28px 24px` (`px-7 py-3.5`).
- **Glow:** `box-shadow: 0 0 20px rgba(255,107,0,0.4)` at rest, intensifying to `0 0 30px rgba(255,107,0,0.6)` on hover.
- **Motion:** Scales to `1.03`, internal arrow icon translates `+4px` on hover. White-overlay mix-blend layer flashes at 20% opacity. 300ms transitions.

**Tag pill:**
- **Shape:** 6px radius (`rounded-md`).
- **Padding:** `3px 10px`.
- **Typography:** JetBrains Mono, `0.75rem`, letter-spacing `0.02em`.
- **Default:** `surface` background, `text-secondary` color, `border-subtle` border.
- **Hover:** Border shifts to `rgba(249,115,22,0.3)`, text shifts to `accent-light`. Background unchanged.

### Cards / Containers

**Blog card:**
- **Shape:** 24px radius (`rounded-3xl`) — the only place this much rounding is used; the cards read as large soft slabs.
- **Background:** `bg-surface/40` (translucent `#141416` at 40% alpha) with `backdrop-blur-md` and `border-white/5`.
- **Internal padding:** 32px (`p-8`).
- **Layout:** Optional feature image (44px height, 12px radius, white/10 border), metadata row (date · separator dot · read time, all in mono), title (Clash Display, 600), optional 3-line excerpt, bottom row with tags + a hover-revealed "Read Article →" link.
- **Hover treatment:** Lifts 8px (`hover:-translate-y-2`), heavier drop shadow, border brightens to `border-white/10`, an internal radial bloom gradient (`from-accent/5 via-transparent`) fades in, feature image scales to `1.03`.

**Glass panel** (utility):
- **Background:** `rgba(20,20,22,0.4)` with `backdrop-filter: blur(12px)`.
- **Border:** `border` token (`rgba(255,255,255,0.08)`).
- Used for the floating navbar capsule and similar chrome.

**Prose blockquote:**
- 2px left accent border, `accent-dim` to transparent left-to-right gradient fill, 12px top-right/bottom-right radius, italic body text.
- This is the system's one editorial "pull quote" pattern — a print-typography convention, not a UI side-stripe accent.

### Inputs / Fields

No form inputs exist in the current system. (The site is read-only — no signup, no search box, no contact form. Email is a `mailto:` icon in the nav.)

### Navigation

**Floating capsule nav:**
- **Position:** `fixed top-0`, horizontally centered, transitions style based on scroll position.
- **At rest (scrollY < 20):** Glass-panel capsule (rgba surface + backdrop-blur + `border-highlight` border + black drop-shadow), full pill rounding, navigation items inside a darker inner pill track (`bg-black/20` with subtle border).
- **On scroll (scrollY ≥ 20):** Glass capsule dissolves into a full-width `bg-black/40 backdrop-blur-md` page-top bar with a `white/5` bottom border; inner pill loses its background. The nav melts into the page chrome.
- **Nav pills:** `0.8125rem` medium weight; idle in `text-muted`, hover in white, active state in white with a `bg-white/10` rounded background pill behind it.
- **Social icons (right side):** GitHub, LinkedIn, Email at 18px stroke. Hover shifts color to `accent` (LinkedIn shifts to `#0077b5`, its brand color — the one exception to the One Flame Rule) and fills a 9999px hover background pill at `bg-white/5`.

### Signature Components

**Hero typing roles (TypeIt):**
- A typed-then-deleted cycle of role strings ("DevOps Engineer", "Cloud Engineer", "Systems & Network Engineer") in `accent` color, `font-body` light weight, `clamp(1.2rem, 3vw, 1.75rem)` size.
- Custom cursor: `_` glyph at 0.9em, accent color, no margin gap.
- The animation intelligently keeps the trailing word "Engineer" in place and only re-types the prefix when consecutive roles share that suffix — a small piece of typing craft worth preserving.

**Hero portrait card:**
- 280×360 (mobile) / 340×420 (desktop), 16px radius (`rounded-2xl`), `border-white/10`.
- Backing layer: 90%-scaled, 4px-translated, 2xl-blurred `accent/20` halo; intensifies to `accent/30` on hover.
- Image filter: `grayscale-[0.3] contrast-[1.1]` at rest, full color on hover (700ms transition).
- Overlay stack: bottom-to-top `bg/90 → transparent` gradient, plus a 20%-opacity accent `mix-blend-overlay` color tint that fades to 10% on hover.
- Decorative L-corners: 12×1px white/40 lines top-left, accent/60 lines bottom-right. Diagonal brand stamp.

**Prose `<h2>` accent underline:**
- A 60px wide × 2px tall accent bar with a `box-shadow: 0 0 12px accent-glow` halo, anchored via `::after` at the bottom-left of the h2's existing 1px subtle bottom border.
- Reads as: editorial section rule + brand highlight. Distinct signature for blog posts.

**Work-history timeline:**
- A vertical centered 2px line with `border-highlight` color, fading at top/bottom via `linear-gradient`. On desktop, entries sit on alternating sides; on mobile, line moves to 8px left and all entries stack.
- Each entry's `::before` is a 14px accent dot with `accent-glow` halo and a 3px `bg` border (cutting out the line behind the dot).
- Each entry's `::after` is a 7×7px square rotated 45° (chevron) pointing toward the card.
- Reveal animation: opacity + 24px translate-up, staggered by `var(--entry-index) * 0.1s`, `cubic-bezier(0.16, 1, 0.3, 1)` ease-out-quint.

**GitHub-style alerts** (rendered by `remark-github-blockquote-alert`):
- Five variants: note (blue), tip (green), important (purple), warning (amber), caution (red).
- Each uses a 3px left border in its semantic color + a tinted background at 8% alpha.
- This is a deliberate side-stripe pattern carrying GitHub's familiar visual language for callouts; the project accepts it because the source markdown uses GitHub-flavored `> [!NOTE]` syntax and the convention is recognizable to the technical audience.

### Named Rules

**The Pill-Chrome, Slab-Content Rule.** Chrome elements (nav capsule, CTA, badges, tags) are full pills (`9999px`) or near-pills (`6px` for tiny tags). Content surfaces (blog cards) are large 24px slabs. The contrast — soft pill chrome floating over soft slab content over a hard void — is the visual rhythm of the system.

**The Backdrop-Blur Floats Rule.** Glass (translucent + backdrop-blur) is reserved for elements that genuinely float above content: the nav capsule, the blog card surface. Don't use glass decoratively as a default card background; it must justify its blur cost.

## 6. Do's and Don'ts

### Do:
- **Do** start every page from the four-layer atmosphere stack: `.grid-bg` + body `#050505` + `.vignette` + `.noise-overlay`. The floor of the brand.
- **Do** rate-limit `#ff6b00` to ≤10% of any screen — the One Flame Rule. If the page starts reading as "an orange page", remove uses.
- **Do** set every piece of metadata (dates, tags, badges, table headers, code-frame filenames, ordered-list numerals) in JetBrains Mono, with letter-spacing `0.02em` to `0.06em`. Mono is the engineering stamp.
- **Do** keep body copy in DM Sans weight 300 with line-height ≥ 1.6 (1.9 in prose). The light weight against the dark void is what makes the page read as paper.
- **Do** use the accent-underlined link pattern (`border-bottom: 1px solid var(--color-accent)`, `text-decoration: none`) on every body link, with the `accent-dim` background pill emerging on hover.
- **Do** preserve the accent-bar underline (`60px × 2px` with glow) under every prose `<h2>`. It is the signature prose move.
- **Do** use ease-out-quint (`cubic-bezier(0.16, 1, 0.3, 1)`) for reveal and timeline transitions. Slow exhale, not bounce.
- **Do** respect `prefers-reduced-motion` — the existing media query disables `.reveal`, `.hero-glow` breathing, timeline transitions, and global animation; preserve this on every new component.

### Don't:
- **Don't** use pure `#000` for backgrounds or pure `#fff` for text. The body sits at `#050505`, text at `#f2f2f0`. Every neutral carries one drop of warmth.
- **Don't** introduce side-stripe colored borders (`border-left` ≥ 2px in an accent color) on **cards, list items, alerts**, or arbitrary callouts. The blockquote (typographic pull-quote) and the GitHub alert plugin are documented exceptions; do not extend the pattern further.
- **Don't** ship gradient text (`background-clip: text` on a gradient background). The accent is a solid color. Emphasis comes from weight, size, or the One Flame.
- **Don't** build a **generic SaaS gradient hero** — no purple-to-blue wash, no "big number / small label / supporting stats" hero-metric template, no identical-card grids with icon + heading + text.
- **Don't** drop the system back into a **Medium/Substack default** — no default serif on white, no stock 'min read' chrome with no personality. The site is not a hosted blog wearing a custom domain.
- **Don't** edge toward **crypto/neon-on-black** — no neon greens or pinks, no glitch effects, no scanlines, no terminal cosplay. The dark is editorial, not edgelord.
- **Don't** add **corporate-consulting trust signals** — no navy + gold palette, no stock photography of people pointing at laptops, no "Solutions / Capabilities / Insights" IA.
- **Don't** use Material-style box-shadow elevation to lift surfaces toward the viewer. Depth is layered atmosphere + translucent fills + backdrop-blur. Box-shadow is reserved for accent glows (CTA, timeline dot) and heavy black drops on embedded artifacts (images, code blocks, card hover).
- **Don't** use em dashes in body copy or UI text. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** add new fonts. The three-font stack — Clash Display / DM Sans / JetBrains Mono — is the brand. Adding a fourth dilutes the signature.
- **Don't** wrap content surfaces in a `.glass-panel` decoratively. Glass is reserved for elements that genuinely float (nav capsule, hover blog card). Glass-as-default is the absolute glassmorphism ban.
