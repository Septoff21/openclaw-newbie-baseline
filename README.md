# OpenClaw Playground

**From Zero to Autonomous** — Beginner-first OpenClaw reference site with copy-ready prompts, verified workflows, and forkable templates.

## Quick Start

```bash
npm install
npm run dev     # Development at http://localhost:3000
npm run build   # Production build
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — 3-tier journey (Beginner → Advance → Extremely) |
| `/blog` | Tutorials and guides |
| `/blog/[slug]` | Individual blog posts |
| `/guides` | Setup guides index |
| `/guides/[slug]` | Individual guide (Beginner/Advanced/Agent Blueprint/UHX Doc) |
| `/directory` | Community directory |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── data/             # Static content (prompts, blog posts)
├── lib/              # Data utilities (guides, blog)
└── globals.css       # Tailwind styles
_legacy/              # Original HTML site (preserved for reference)
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Septoff21/openclaw-newbie-baseline)

## License

MIT — Free to fork and customize.
