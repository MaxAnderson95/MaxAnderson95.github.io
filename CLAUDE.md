# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal website/blog built with Hugo and the Congo theme. The site is automatically deployed to GitHub Pages via GitHub Actions.

**Key Architecture:**
- **Hugo Static Site Generator**: Uses Hugo v0.121.1+ with the Congo v2 theme
- **Content Structure**: Blog posts in `content/posts/`, about page in `content/about.md`
- **Configuration**: Split configuration in `config/_default/` directory
- **Theme**: Congo v2 theme managed as a Hugo module (see `go.mod`)
- **Deployment**: Automated via GitHub Actions workflow to GitHub Pages

## Development Commands

### Local Development
```bash
# Install Hugo (required version 0.121.1+)
# On macOS: brew install hugo
# On Ubuntu: Download from GitHub releases as shown in .github/workflows/hugo.yml

# Start development server
hugo server

# Start with drafts visible
hugo server -D

# Build for production
hugo --minify

# Update Hugo modules (theme updates)
hugo mod get -u
```

### Content Management
```bash
# Create new blog post
hugo new content/posts/my-new-post/index.md

# Create new page
hugo new content/my-page.md
```

## Configuration Structure

- **`config.toml`**: Basic site configuration (base URL, title, language)
- **`config/_default/`**: Modular configuration directory
  - `config.toml`: Core Hugo settings
  - `params.toml`: Congo theme parameters (color scheme, layout settings)
  - `languages.en.toml`: Author information and site metadata
  - `menus.en.toml`: Navigation menus
  - `markup.toml`: Markdown processing settings
  - `module.toml`: Hugo modules configuration

## Content Guidelines

**Blog Posts:**
- Located in `content/posts/[post-name]/index.md`
- Use page bundles (folder with index.md) for posts with images
- Images go in `content/posts/[post-name]/images/`
- Feature images should be named `feature.png` or `feature.jpg`

**Frontmatter Structure:**
```yaml
title: "Post Title"
date: 2023-01-01
draft: false
description: "Brief description"
tags: ["tag1", "tag2"]
```

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to the `main` branch. The GitHub Actions workflow:
1. Installs Hugo CLI (extended version)
2. Checks out code with submodules
3. Caches Hugo modules
4. Builds site with `hugo --minify`
5. Deploys to GitHub Pages

## Theme Customization

**Custom Styling:**
- Primary CSS: `assets/css/custom.css`
- Color scheme: `assets/css/schemes/custom.css`
- Theme uses "custom" color scheme (see `params.toml`)

**Layout Overrides:**
- `layouts/_default/single.html`: Custom single page template
- `layouts/partials/home/profile.html`: Custom profile section
- `layouts/_default/_markup/render-image.html`: Custom image rendering

## Site Features

- Dark mode enabled by default with auto-switching
- Search functionality enabled
- Code copy buttons enabled
- Profile-style homepage layout
- Hybrid header layout without site title
- Footer without copyright/theme attribution