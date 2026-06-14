# Helix Design System

**Helix** is an AI platform for developers — prepaid token billing, one-command model
deployment, and a management console for endpoints, usage, and keys. The brand is
**dark-tech, bio-inspired**: near-black surfaces, a single neon-green accent drawn from
DNA/biology, and a precise, engineering-grade tone.

> **Sources.** This system was built from a written brand brief and a reference logo image
> supplied by the founder (no external codebase or Figma). Exact palette and logo construction
> were specified by the brief; everything else (type scale, spacing, components, console UI kit)
> is original work consistent with that brief.

---

## Content fundamentals — how Helix writes

- **Voice:** confident, technical, concise. Helix speaks to engineers as peers — no hype, no
  fluff. "Deploy in seconds. Pay for tokens, not idle GPUs."
- **Person:** address the developer as **you**; the product is **Helix** (third person, never "we"
  in UI copy). Imperative for actions: *Deploy model*, *Top up*, *Create key*.
- **Casing:** Sentence case for UI labels, buttons, and headings (*Deploy model*, not *Deploy Model*).
  UPPERCASE only for the wordmark and tiny mono eyebrows/labels (with wide tracking).
- **Numbers & units:** precise and monospaced — `2.48M tokens`, `142ms`, `$0.40 / 1M tok`,
  `p95`. Use the mono font for any metric, ID, key, region, or code value.
- **Tone examples:**
  - Empty state: "No endpoints yet. Deploy a model to get started."
  - Success toast: "Deploying Llama 3.1 70B…"
  - Hint: "Drawn from your prepaid balance."
- **Emoji:** never. Iconography is line icons only (see Iconography).
- **Vibe:** a terminal that grew a beautiful UI. Calm dark surfaces, one electric-green signal
  color used sparingly for what matters (status, primary action, the logo).

---

## Visual foundations

**Color.** Background is true near-black `#0a0a0a`. A near-black neutral ramp (`--ink-*`) carries
all surfaces, borders, and text. The **only** chromatic accent is the brand green —
primary `#4ade80`, secondary `#22c55e`, accent `#10b981` — used for the logo, primary actions,
active/selected state, success, and data viz. Semantic danger/warning/info exist but appear
rarely. Don't introduce new hues; if you need another step, derive it in the green or neutral ramp.

**Type.** `Space Grotesk` (geometric sans) for display **and** UI; `JetBrains Mono` for code,
metrics, IDs, and eyebrow labels. Display is bold with tight tracking (`-0.02em`); body is regular
at 15px. Mono labels are uppercase with wide tracking (`0.12em`). Type scale runs 12 → 82px.

**Spacing & layout.** 4px base grid. App shell = 248px sidebar + 60px top bar + scrolling content
on a `max-width: 1180px` column. Generous 16–24px gaps between cards.

**Backgrounds.** Flat near-black, optionally layered with a *faint* dotted "bio-grid"
(`--grid-dot`, ~22px) and a single low-opacity green radial glow in a top corner. No busy gradients,
no photography by default, no textures beyond the dot grid.

**Corners.** Slightly rounded — `10px` (md) for inputs/buttons, `14px` (lg) for cards, `20px+` for
hero/app-icon tiles. Pills (`999px`) only for badges and toggles, never for containers.

**Borders.** Hairline `1px` borders do the heavy lifting on dark surfaces: `--border-subtle`
(`#26282c`) for resting, green `--border-glow` for active/featured.

**Elevation.** Depth comes from layered near-black surfaces + hairline borders + low-spread dark
shadows — not big soft drop shadows. **Glow is reserved**: a green neon glow (`--glow-md/lg`) marks
active, focused, or featured elements (primary button hover, selected card, the logo, focus rings,
live data points). Don't glow everything.

**Motion.** Quick and confident — 120–320ms, ease-out `cubic-bezier(.22,1,.36,1)`, **no bounce**.
Transitions on background, color, box-shadow, and small transforms. Hover = brighter surface or
green glow; press = ~1px down + slight scale (0.99). Progress/usage bars animate width.

**Transparency & blur.** The top bar uses a translucent near-black with `backdrop-filter: blur`.
Translucent green fills (`--green-soft`) back badges and active nav. Otherwise surfaces are opaque.

**Cards.** Near-black fill, hairline border, `14px` radius, tiny dark shadow. Interactive cards lift
2px and brighten on hover. The single featured/selected card gets a green border + glow.

---

## Iconography

- **Set:** [Lucide](https://lucide.dev) — clean 24px line icons, ~1.8px stroke, round caps/joins,
  no fills. This matches Helix's precise, technical feel. In the console UI kit they are
  reimplemented as a small inline set (`ui_kits/console/Icons.jsx` → `window.HxIcons`) so the kit has
  no CDN dependency; for production, install `lucide-react` and use the same names
  (grid, layers, server, terminal, key, credit-card, plus, play, search, zap, activity, clock, …).
- **Stroke, never fill** (except tiny status dots, which are solid). Icons inherit `currentColor`
  and sit at 16–18px in UI, 22px in headers.
- **Logo is not an icon** — never substitute the H mark for a UI glyph.
- **Emoji / unicode as icons:** never.
- **App icon:** `assets/logo/helix-mark-dark.svg` (rounded near-black tile, glowing green mark).

---

## The logo

A letter **H** built from biology: **both vertical posts are two DNA ribbon strands twisting
around each other** (a 2-ply helix with woven over/under gaps), joined by a **solid crossbar** at
the center. Equal visual weight left and right so the H reads instantly; no tail below the base.
Wordmark is **HELIX** in Space Grotesk Bold. All logo files are self-contained vector SVGs (the
wordmark embeds the font as base64, so it renders identically anywhere).

`assets/logo/`
- `helix-mark.svg` · `helix-mark-dark.svg` (glow tile) · `helix-mark-white.svg` (mono)
- `helix-wordmark.svg` · `-white` · `-dark`
- `helix-lockup.svg` · `-white` · `-dark`

Clearspace ≥ the width of one post. Min mark size 20px. On photos/busy fields use the white mono
mark. Never recolor outside the green/white/black set, rotate, or add effects beyond the supplied glow.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s all tokens + fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`
- `assets/logo/` — logo SVGs · `assets/fonts/` — Space Grotesk + JetBrains Mono woff2
- `guidelines/` — foundation & brand specimen cards (Design System tab)
- `components/` — reusable React primitives
- `ui_kits/console/` — Helix developer-console recreation
- `SKILL.md` — Agent-Skills wrapper

**Components** (`window.HelixDesignSystem_6e1999`)
- `core/`: Button, IconButton, Badge, Card + CardHeader, Switch, Avatar, ProgressBar, Tabs
- `forms/`: Input, Select

**UI kit:** `ui_kits/console/index.html` — Overview · Models · Endpoint detail · Playground · API Keys · Billing.

---

## Substitutions / notes

- **Fonts:** `Space Grotesk` and `JetBrains Mono` are bundled locally (latin subset, weights
  400/500/700) from Google Fonts. If the brand later licenses **Geist** (mentioned as an alternative
  in the brief), swap `--font-display`/`--font-ui` and replace the woff2 files.
- **Icons:** Lucide is a substitution chosen to fit the aesthetic — no icon set was specified.
