---
name: helix-design
description: Use this skill to generate well-branded interfaces and assets for Helix, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `readme.md` — the full design guide: voice/content rules, visual foundations, iconography, logo usage, and a manifest.
- `styles.css` — link this one file to inherit all tokens + fonts (it `@import`s `tokens/*`).
- `assets/logo/` — Helix logo SVGs (mark, wordmark, lockup; on light/dark/mono).
- `assets/fonts/` — Space Grotesk + JetBrains Mono (woff2).
- `components/` — React primitives (Button, Badge, Card, Switch, Input, Select, Tabs, …).
- `ui_kits/console/` — a full developer-console recreation to copy patterns from.

Brand in one line: dark-tech, bio-inspired AI platform — near-black `#0a0a0a` surfaces, a single
neon-green accent (`#4ade80` / `#22c55e` / `#10b981`), Space Grotesk + JetBrains Mono, line icons,
glow used sparingly. Sentence-case UI copy, monospaced numbers, no emoji.
