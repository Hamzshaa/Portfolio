# Hamza Jhad — Software Developer Portfolio

The personal portfolio and production archive of **Hamza Jhad**, software developer and systems architect. Built with [Astro](https://astro.build) and TypeScript.

## Design Credits & Acknowledgments

* **Visual Design Concept:** The book-inspired editorial aesthetic, frontispiece splash, bookmark ribbon, and squash-and-stretch behavior are based on the original design by [Lynn Fisher](https://lynnandtonic.com) (her 2024 portfolio).
* **Engineering & Implementation:** Architecture, component structure, interactive deployment modals, TypeScript logic, and Astro static generation implemented by Hamza Jhad.

## Tech Stack

* **Framework:** [Astro](https://astro.build) (Static output)
* **Language:** TypeScript
* **Styling:** Modern CSS (light-dark color schemes, CSS Grid, custom properties)
* **SEO:** Automated sitemap generation via `@astrojs/sitemap`, canonical URLs, and Open Graph / Twitter metadata

## Development

```bash
# Install dependencies
npm install

# Start development server on port 9001
npm run dev

# Run type & diagnostic checks
npm run check

# Build production distribution
npm run build

# Preview production build locally
npm run preview
```

## CI / CD (GitHub Actions & Vercel)

* **CI (`.github/workflows/ci.yml`):** Automatically runs `npm run check` (typecheck) and `npm run build` on all pull requests and feature branches.
* **CD (`.github/workflows/cd.yml`):** Automatically builds and deploys to production on [Vercel](https://vercel.com) when changes merge to `main`.

### Required GitHub Secrets:
1. `VERCEL_TOKEN`: Personal Access Token from your [Vercel Account Settings](https://vercel.com/account/tokens).
2. `VERCEL_ORG_ID`: Your Team or User ID found in Vercel settings or project `.vercel/project.json`.
3. `VERCEL_PROJECT_ID`: Found in your Vercel Project Settings (`General` > `Project ID`).
