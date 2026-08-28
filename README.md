# Farriel Arrianta — Portfolio

A minimal, editorial portfolio for Farriel Arrianta, a software engineer building web products, mobile applications, and data systems.

## Development

```bash
npm install
npm run dev
```

The site uses the Next.js App Router, TypeScript, and a small token-based CSS system. Most of the page is rendered as Server Components; the color-theme control is the only client-side island.

## Content

Project, experience, principle, and social-link content lives in `src/data/portfolio.ts`. Set `NEXT_PUBLIC_CONTACT_EMAIL` to show a direct email link; without it, the primary contact action opens LinkedIn. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL when deploying outside Vercel.

## Checks

```bash
npm run lint
npm run build
```
