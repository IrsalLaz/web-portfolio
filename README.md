# Irsal Lazuard Izzatillah — Portfolio

Static portfolio and CV built with [Astro](https://astro.build) 5. No backend; deployed to Vercel.

**Languages:** English at `/`, Indonesian at `/id/` (Astro i18n, `prefixDefaultLocale: false`). The header has an EN / ID switch that keeps you on the same page. The CV stays English.

**Design system:** see [design.md](design.md) — tokens, type, components and page compositions. Follow it for any visual change.

## Commands

| Command | What it does |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Local dev server at http://localhost:4321 |
| `pnpm build` | Production build to `dist/` (this is what Vercel runs) |
| `pnpm preview` | Serve the production build locally |
| `pnpm check` | Type-check Astro, TS and content |
| `pnpm build:assets` | Build, then regenerate `public/og.png`, the CV PDF and the CV DOCX, then rebuild |

`build:assets` renders the OG image and the PDF with a locally installed **Edge or Chrome** (via `playwright-core`, no browser download). Set `BROWSER_PATH` to use another Chromium binary. Run it whenever the CV or headline changes, and commit the files in `public/`. Vercel only runs `pnpm build`.

## Where things live

```
src/data/            Site text: profile, highlights, experience, skills, more work, CV (cv.ts)
src/content/projects Case studies (MDX, one file per project)
src/assets/          The optional profile photo
src/pages/           Home, /experience, /projects (+ case studies), /skills, /about, /contact, /cv, 404, sitemap.xml, /og (not indexed)
scripts/             OG image, CV PDF and CV DOCX generators
public/              Static files served as-is (favicon, robots.txt, og.png, cv/*)
```

- **Edit the CV** in `src/data/cv.ts`. The `/cv` page, the PDF and the DOCX all come from it.
- **Edit a case study** in `src/content/projects/en/<slug>.mdx` **and** `src/content/projects/id/<slug>.mdx`. Its card comes from the frontmatter.
- **Add or change UI text** in `src/i18n/ui.ts` (both languages). Content text lives in `src/data/*` as `{ en, id }`.

## Profile photo

The hero shows a monogram until a photo exists. To add one, save it as `src/assets/profile.jpg` (or `.png` / `.webp`).

- Square, **at least 800 × 800 px**.
- Head and shoulders, plain or softly blurred background, natural light.
- Under about 400 KB. The build resizes it and converts it to WebP.

No code change is needed; rebuild and it appears.

## Deploying to Vercel

1. Make this folder its own Git repository and push it. Do not deploy the parent workspace.
2. Import the repo in Vercel:
   - Framework preset: **Astro**
   - Install command: `pnpm install`
   - Build command: `pnpm build`
   - Output directory: `dist`
   - Node.js: 22.x
3. If the project name `irsal-lazuard` is taken on Vercel, update `site` in `astro.config.mjs`, `url` in `src/data/site.ts`, the URLs in `src/data/cv.ts` and `public/robots.txt`. Then run `pnpm build:assets`.

## Content rules

- No phone number anywhere.
- No internal hostnames, credentials, partner names or business figures.
- Work done at Duluin is described at skill level only (employment contract, confidentiality clause): no architecture diagrams, dashboard screenshots, security parameters (token lifetimes, lockout or rate-limit thresholds), bug stories, unreleased roadmap or project status, investor counts, or internal approval chains.
- Every claim comes from verified project documentation.
