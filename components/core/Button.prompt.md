Primary action control — use for the single most important action in a view; secondary/ghost for supporting actions.

```jsx
<Button variant="primary" iconLeft={<PlusIcon />}>Deploy model</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="ghost">View logs</Button>
<Button variant="danger" loading>Deleting…</Button>
```

- `variant`: `primary` (neon green, the CTA) · `secondary` (raised neutral) · `ghost` (transparent) · `danger`.
- `size`: `sm` 32px · `md` 40px · `lg` 48px.
- Primary buttons glow on hover. Only one primary per view. Never stack two primaries side by side.
- Pass `iconLeft`/`iconRight` as 16px Lucide icons. Use `full` inside narrow panels and dialogs.
