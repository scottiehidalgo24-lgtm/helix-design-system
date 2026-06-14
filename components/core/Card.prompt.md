Base surface for grouping content. Compose `CardHeader` inside for a titled block.

```jsx
<Card padding={20}>
  <CardHeader title="Endpoint" subtitle="llama-3.1-70b" action={<Badge tone="green" dot>Live</Badge>} />
  …body…
</Card>

<Card glow>Featured plan</Card>
<Card interactive>Clickable row</Card>
```

- Default cards use a hairline border on `--surface-card`.
- `glow` for the selected / featured card only — don't glow every card.
- `interactive` adds a hover lift; pair with an `onClick`.
