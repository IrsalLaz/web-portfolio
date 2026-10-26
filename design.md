# design.md — Visual system

The design language for this portfolio. It was inspired by the editorial, engineering-notebook style of [sudhiryadav-dev.vercel.app](https://sudhiryadav-dev.vercel.app/): we took its palette, type system and layout patterns, but **not** its content, logo or signature interactions (drag-to-reveal photo, draggable notes, contact form).

Every page and component should follow this file. If code and this file disagree, update one of them deliberately.

---

## 1. Principles

1. **Paper, ink, one orange.** An off-white page, near-black ink, and a single orange accent used sparingly for state and emphasis.
2. **Boxes, not shadows.** Hierarchy comes from 1 px rules, frames and whitespace. Corners are square; only action pills are rounded.
3. **Three voices of type.**
   - A tight grotesk for display.
   - A neutral sans for reading.
   - A spaced-out monospace for labels, metadata and navigation.
4. **Master–detail.** Collections (experience, projects, skills) show a list on the left and a framed detail panel on the right.
5. **Calm motion.** Only state changes animate: hover tint, panel swap, the live clock. Nothing moves on its own, and everything respects `prefers-reduced-motion`.
6. **Accessible by default.**
   - Decorative orange (`#F97316`) is never used for small text; text uses `--accent-ink`.
   - Contrast is WCAG AA or better.
   - Keyboard focus is always visible.

---

## 2. Color tokens

Light is the default theme. Dark is opt-in through the header toggle and is remembered in `localStorage`.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F7F7F5` | `#0E0F0E` | Page background |
| `--surface` | `#FBFBFA` | `#141614` | Inputs, sheet, inner panels |
| `--ink` | `#111111` | `#F2F2EF` | Headings, primary text, active nav, primary buttons |
| `--ink-2` | `#3D3D3B` | `#D4D4D0` | Hero statement, strong body |
| `--muted` | `#5F5F5C` | `#A6A6A1` | Body copy, lead paragraphs |
| `--faint` | `#6E6E6A` | `#8C8C87` | Labels, metadata (AA on `--bg`) |
| `--line` | `#D9D9D4` | `#2B2D2A` | Hairlines, cell dividers |
| `--frame` | `#2A2A28` | `#BDBDB7` | Frames: nav box, cards, grids |
| `--accent` | `#F97316` | `#F97316` | Dots, active bars, fills (decorative only) |
| `--accent-ink` | `#C2410C` | `#FB923C` | Accent **text**: eyebrows, numbers, links in panels |
| `--accent-tint` | `#FBEEE3` | `#2A190C` | Active list item, panel header |
| `--accent-line` | `#FDBA8C` | `#7C3D14` | Detail-panel border, chips |
| `--paper` | `#F1EEE6` | `#1B1A16` | "Note" cards (about page) |
| `--paper-line` | `#DCD5C3` | `#3A372D` | Note card border |

Diagram tokens (`--d-*`) are derived from these values in `src/styles/global.css`.

---

## 3. Typography

| Role | Family | Size | Weight | Tracking | Notes |
|---|---|---|---|---|---|
| Page title | Space Grotesk | `clamp(3rem, 6vw + 1rem, 4.5rem)` | 600 | `-0.06em` | `line-height: 1` |
| Name display (about) | Space Grotesk | `clamp(4rem, 9vw, 6rem)` | 600 | `-0.07em` | Ends in an orange period |
| List / panel title | Space Grotesk | `clamp(1.75rem, 2vw + 1rem, 2.25rem)` | 600 | `-0.055em` | |
| Card / box heading | Space Grotesk | `1.125rem` | 500 | `-0.04em` | |
| Hero statement | Inter | `clamp(2rem, 3.2vw + 0.75rem, 3rem)` | 400 | `-0.045em` | Color `--ink-2`, `line-height: 1.08` |
| Lead | Inter | `1.125rem` | 400 | normal | Color `--muted`, `line-height: 1.6` |
| Body | Inter | `1rem` | 400 | normal | `line-height: 1.65` |
| Label / eyebrow | JetBrains Mono | `0.72rem` | 500 | `0.2em` | UPPERCASE; `--faint` or `--accent-ink` |
| Nav | JetBrains Mono | `0.75rem` | 400 | `0.18em` | UPPERCASE |
| Tech list | JetBrains Mono | `0.7rem` | 400 | `0.12em` | UPPERCASE, separated by thin vertical rules |

Fonts are self-hosted through `@fontsource` (Inter 400/500/600, Space Grotesk 500/600, JetBrains Mono 400/500).

---

## 4. Layout

- **Container:** max width `1280px`, side padding `clamp(16px, 4vw, 64px)`.
- **Page header** on every inner page: big title, then a lead paragraph (max `60ch`), then `48px` of space before content.
- **Master–detail** at `≥ 960px`:
  - Two columns, `minmax(0, 0.9fr) 1px minmax(0, 1.1fr)`. The middle column is a vertical hairline.
  - The detail panel is sticky (`top: 112px`).
  - Below `960px` the columns stack. Selecting an item scrolls the panel into view.
- **Section spacing:** `clamp(64px, 9vw, 120px)` between major blocks.
- **Hero** fills at least the viewport height on desktop:
  - Left: a framed portrait plus the role label, the statement, then pill CTAs.
  - Right: the availability card.

---

## 5. Components

### Header
- Fixed, `--bg` at 90% with `backdrop-filter: blur(12px)`.
- Left: wordmark `Irsal.` (Space Grotesk 600, orange period).
- Centre: **segmented nav**, a 1 px `--frame` box of mono links. The active page gets `--ink` background and `--bg` text.
- Right: **LET'S TALK** black pill, an **EN / ID** language switch (two square cells inside one frame; the current language is filled with `--ink`), and a square theme toggle.
- Under `960px`: wordmark, pill and a square **menu** button. The menu opens a full-width panel of stacked links.

### Buttons
- **Pill**: mono uppercase, `1px solid --ink`, `border-radius: 999px`, padding `14px 24px`. Hover fills with `--ink`.
- **Pill (solid)**: `--ink` background, `--bg` text. Used only for LET'S TALK.
- **Square button**: mono uppercase on `--ink` background. Used for "CASE STUDY ↗" and downloads.
- Minimum touch target is 44 px.

### Status dot + label
An 8 px circle in `--accent` (or `#FACC15` for the "say hello" card), followed by a mono label, for example `● SOFTWARE ENGINEER @ DULUIN`.

### Availability card
- 1 px `--frame` box with a "● SAY HELLO" label above it.
- Inside: "Hello" (Space Grotesk 600, `--accent-ink`), "Happy to talk about" (mono), then the topics, then `[ BANDUNG ● HH:MM:SS ]`. The clock uses Asia/Jakarta time and updates every second.
- The clock is `aria-hidden`; a visually hidden sentence states the location instead.

### List item (master)
- Padding `28px 32px`, transparent background.
- Content: a mono category label, the Space Grotesk title, then a mono meta line (tech list or period chip).
- **Active** state: `--accent-tint` background, `4px` left bar in `--accent`, full-strength title.
- **Inactive** state: title at `--ink-2`, labels at `--faint`. Hover tints the background lightly.
- Implemented as `role="tab"` buttons inside a vertical `role="tablist"`. Arrow keys move between items.

### Detail panel
- 1 px `--accent-line` frame.
- Header area: `--accent-tint`, containing the eyebrow, a big title and meta on the right.
- Body: `--bg`, holding the description, a "CONTRIBUTIONS" label, and numbered items (`01` in `--accent-ink` mono).
- Without JS, every panel renders in sequence.

### Period chip
1 px `--accent-line` frame, `--accent-tint` fill, mono text: `● APR 2025 — PRESENT`. Past roles use `--line` and `--faint`.

### Grid box (skills, highlights)
- 1 px `--frame` box.
- Header row: Space Grotesk name on the left, a mono count (`07`) on the right.
- Body: a 2-column grid of cells separated by `--line` hairlines, each holding a mono uppercase label.
- Cells are buttons. The selected one gets `--accent-tint`.

### Note card (about)
- `--paper` background, 1 px `--paper-line`, `2px 2px 0 rgb(0 0 0 / .05)` shadow.
- Very slight rotation, between `-1.2deg` and `1.2deg`. The rotation is removed under reduced motion and on small screens.

### Tags (tech list)
Mono uppercase text separated by 1 px vertical rules. No pill backgrounds.

### Footer
- A hairline rule, then a centred mono line: `© 2026 IRSAL LAZUARD IZZATILLAH ✺ LAST UPDATED: <MONTH YEAR>` (build date). The year is the build year.
- Below it, a row of mono links: Email, LinkedIn, GitHub, CV.

### Diagrams and screenshots
- Not used for Duluin work: case studies are text-only summaries (no internal architecture or dashboard screenshots). The components stay for future personal projects.
- Framed with 1 px `--line`, square corners, and a mono caption bar.
- Diagram nodes:
  - default: white fill with a grey frame
  - accent: `--accent-tint` fill with a `--accent` frame
  - notes: `--paper`

---

## 6. Pages

| Route | Composition |
|---|---|
| `/` | Hero (portrait, statement, pills, availability card), then Engineering highlights grid (6 boxes linking to case studies) |
| `/experience` | Page header; master–detail of roles; Education + Certifications boxes below |
| `/projects` | Page header; master–detail of the 5 case studies (panel shows summary, role, highlight, "CASE STUDY ↗"); "More work" grid |
| `/projects/[slug]` | Case-study header (eyebrow, title, lead, fact grid); sticky mono TOC; MDX body (Overview, My contribution, Skills applied, Outcome, Tech stack); prev/next boxes |
| `/skills` | Page header; category grid boxes (left) plus a detail panel (right) showing where each skill was used, with links |
| `/about` | Eyebrow, `Irsal.` display, bio with an orange left rule; "How I work" note cards; "Right now" focus; Education |
| `/contact` | Eyebrow, "Let's talk." title, lead; framed email box with a copy button; "Or find me here" link list; CV downloads |
| `/cv` | Unchanged sheet (Inter), with the new header and download buttons |

---

## 7. Don'ts

- No gradients, glows, blobs or animated backgrounds.
- No drag-to-reveal, no draggable cards, no typewriter loops, no fake terminals.
- No skill icons or brand logos. Labels only: they stay honest, light and ATS-like.
- Never use `--accent` for small text on a light background. Use `--accent-ink`.
- Don't copy the reference site's copy, logo font (Oxanium) or personal motifs.
