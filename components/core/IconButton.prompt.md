Compact icon-only button for toolbars, nav rails, and row actions. Always pass `label` for accessibility.

```jsx
<IconButton label="Settings"><GearIcon /></IconButton>
<IconButton variant="accent" label="Deploy"><PlayIcon /></IconButton>
<IconButton variant="ghost" active label="Endpoints"><ServerIcon /></IconButton>
```

- `variant`: `ghost` (toolbars) · `solid` (standalone) · `accent` (key action).
- Use `active` for the selected item in a nav rail.
