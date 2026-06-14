# Helix Console — UI Kit

High-fidelity recreation of the **Helix developer console**: the web app where developers
deploy models, watch usage, and manage prepaid token balances.

## Run
Open `index.html`. It loads the compiled design-system bundle (`_ds_bundle.js`) plus the
screen modules, then mounts `HxApp`.

## Screens & interactions
- **Overview** — stat cards (token balance, requests, endpoints, latency), a token-consumption
  area chart, a plan-usage panel, and a clickable active-endpoints table. Rows open the endpoint detail.
- **Models** — filterable catalog of deployable models as cards; "Deploy" fires a toast.
- **Endpoint detail** — header with live status, tabbed **Metrics / Logs / Settings** (latency chart,
  live log tail, autoscale + general settings using Switch/Input/Select).
- **Playground** — prompt console with a parameters panel.
- **API Keys** — secret-key table.
- **Billing** — prepaid balance, top-up, invoices.

Top-bar **Deploy** jumps to Models; the sidebar switches sections; the bottom toast confirms actions.

## Composition
All chrome is built from the system's primitives (`Button`, `IconButton`, `Badge`, `Card`,
`Switch`, `Input`, `Select`, `Tabs`, `ProgressBar`, `Avatar`) read from
`window.HelixDesignSystem_6e1999`. Files:

| File | Role |
|------|------|
| `Icons.jsx` | Lucide-style icon set → `window.HxIcons` |
| `Chart.jsx` | SVG area chart + sparkline |
| `Sidebar.jsx` / `Topbar.jsx` | App chrome |
| `Overview.jsx` / `Models.jsx` / `Endpoint.jsx` | Screens |
| `App.jsx` | Routing, toast, Playground/Keys/Billing screens |

These are cosmetic recreations for prototyping — data is static, no real network calls.
