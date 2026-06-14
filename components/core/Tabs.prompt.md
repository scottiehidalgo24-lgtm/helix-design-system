Underline tabs for switching sections within a page (Overview / Metrics / Logs / Settings).

```jsx
const [tab, setTab] = React.useState("overview");
<Tabs
  value={tab}
  onChange={setTab}
  items={[
    { value: "overview", label: "Overview" },
    { value: "logs", label: "Logs", badge: 12 },
    { value: "settings", label: "Settings" },
  ]}
/>
```

- Active tab uses a green underline. For top-level app nav use the sidebar rail instead.
