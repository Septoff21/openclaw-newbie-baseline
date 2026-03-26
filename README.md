# OpenClaw Playground

**From Zero to Autonomous** — A beginner-first OpenClaw reference site with copy-ready prompts, verified workflows, and forkable templates.

## Quick Start

```bash
npm install
npm run dev       # Development at http://localhost:3000
npm run build     # Production build
npm run start     # Start production server
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — 3-tier journey (Beginner → Advance → Expert) with copy-ready prompts |
| `/blog` | Tutorials and guides (6 articles) |
| `/blog/[slug]` | Individual blog post with TOC and sharing |
| `/guides` | Setup guides index (4 guides) |
| `/guides/[slug]` | Individual guide with TOC navigation |
| `/directory` | Community links directory |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (composes section components)
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Tailwind + design tokens
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Blog post detail
│   ├── guides/
│   │   ├── page.tsx        # Guides index
│   │   └── [slug]/page.tsx # Guide detail
│   └── directory/
│       └── page.tsx        # Community links
├── components/             # Reusable UI components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Site footer
│   ├── HeroSection.tsx     # Hero banner
│   ├── TierSection.tsx     # Tier cards section
│   ├── TierCard.tsx        # Individual tier card
│   ├── HowItWorks.tsx      # 3-step flow
│   ├── QuickLinks.tsx      # Explore more grid
│   ├── NextStepGuidance.tsx
│   ├── MarkdownRenderer.tsx # Shared markdown rendering
│   ├── CodeBlockWithCopy.tsx
│   ├── ShareButtons.tsx    # Social share buttons
│   ├── BackToTop.tsx       # Scroll-to-top button
│   └── CodeBlock.tsx       # Standalone code display
├── config/                 # ⭐ Customization — edit these for your fork
│   ├── site.ts             # Site name, URLs, social links
│   └── theme.ts            # Colors, fonts, tier styles
├── data/                   # Content data
│   ├── prompts.ts          # Copy-ready prompt templates
│   ├── blog-posts.ts       # Blog post index (re-exports)
│   ├── posts/              # Individual blog post files
│   │   ├── getting-started.ts
│   │   ├── prompt-tips.ts
│   │   ├── mcp-ecosystem.ts
│   │   ├── models-guide.ts
│   │   ├── clawhub-guide.ts
│   │   └── ai-agent-security.ts
│   ├── guides-data.ts      # Guide index (re-exports)
│   └── guides/             # Individual guide files
│       ├── setup-beginner.ts
│       ├── setup-advanced.ts
│       ├── agent-blueprint.ts
│       └── uhx-newbie.ts
├── lib/                    # Utility functions
│   ├── markdown.ts         # TOC extraction, heading IDs
│   ├── guides.ts           # Guide lookup helpers
│   └── blog.ts             # Blog lookup helpers
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

## How to Customize (Fork & Make It Yours)

### 1. Site Identity

Edit `src/config/site.ts`:

```ts
export const siteConfig = {
  name: "My Agent Site",         // Your site name
  tagline: "My Custom Tagline",  // Hero headline
  description: "...",            // Meta description
  url: "https://mysite.com",     // Your deployed URL
  social: {
    github: "https://github.com/you/repo",
    discord: "https://discord.gg/your-invite",
    // ...
  },
};
```

### 2. Colors & Theme

Edit `src/config/theme.ts`:

```ts
export const themeConfig = {
  colors: {
    bg: "#0A0A0A",
    primary: { DEFAULT: "#6a5cff", hover: "#7d72ff" },
    accent: "#46ffb3",       // Beginner tier color
    accentBlue: "#00d4ff",   // Advanced tier color
    accentPink: "#ff3d9a",   // Expert tier color
  },
};
```

Also update matching values in:
- `src/app/globals.css` (CSS `:root` variables)
- `tailwind.config.ts` (Tailwind color tokens)

### 3. Content

- **Prompts:** Edit `src/data/prompts.ts`
- **Blog posts:** Add/modify files in `src/data/posts/`
- **Guides:** Add/modify files in `src/data/guides/`

### 4. Brand Assets

- Replace `public/favicon.ico` with your icon
- Update the 🦞 emoji in `Navbar.tsx` and `Footer.tsx`

## Deploy

### Vercel (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/openclaw/openclaw-newbie-baseline)

### Manual

```bash
npm run build
npm run start
```

### Docker

```bash
docker build -t openclaw-baseline .
docker run -p 3000:3000 openclaw-baseline
```

## Tech Stack

- **Next.js 14** — App Router, static + dynamic pages
- **React 18** — Client components for interactivity
- **Tailwind CSS 3** — Utility-first styling
- **React Markdown** — Markdown rendering with GFM support
- **TypeScript** — Full type safety

## License

MIT — Free to fork and customize.
