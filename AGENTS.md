# A.J. Stempleton Editorial Site

## Overview

This is a single-page author website for A.J. Stempleton. It presents the author, published books, editorial themes, and selected journal entries in Spanish. The experience is intentionally designed as a literary magazine rather than a conventional portfolio or blog.

## Architecture

- `src/routes/index.tsx` contains the complete public page, content data, mobile navigation state, and all page sections.
- `src/routes/__root.tsx` defines the HTML shell and global SEO metadata.
- `src/styles.css` contains the visual system, responsive layouts, animations, and accessibility motion overrides.
- `public/books/` stores local copies of the book covers used by the catalog and hero.
- `src/router.tsx` configures TanStack Router.
- `netlify.toml` defines the Netlify build and publish settings.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Vite 7
- Tailwind CSS 4 pipeline, with a custom CSS-driven interface
- Lucide React icons
- Netlify deployment adapter

## Conventions

- Keep all visitor-facing copy in Spanish unless adding an explicit language switcher.
- Use semantic HTML and preserve keyboard-visible interactive controls.
- Use CSS variables from `src/styles.css` for the paper, ink, red, and border colors.
- Preserve the editorial asymmetry; avoid replacing layouts with generic equal-card grids.
- Keep animations limited to `opacity` and `transform`, and maintain the `prefers-reduced-motion` override.
- Store stable visual assets locally in `public/` instead of hotlinking them.
- External article and book links should use `target="_blank"` with `rel="noreferrer"`.

## Content Updates

Book and journal metadata live in the `books` and `journal` arrays near the top of `src/routes/index.tsx`. Add a local cover image before adding a new book entry. Long-form articles remain on the existing WordPress publication and are linked from this site.

## Local Development

Install dependencies with `pnpm install` and start the site with `pnpm dev`. Netlify emulation is available through `netlify dev --port 8889` when platform behavior is needed.
