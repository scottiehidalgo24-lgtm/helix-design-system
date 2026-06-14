// Helix console — top bar (title, search, balance, deploy CTA). → window.HxTopbar
function HxTopbar({ title, subtitle, onDeploy }) {
  const { Button, IconButton, Badge } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  return (
    <header style={{ height: 60, flex: "none", boxSizing: "border-box", borderBottom: "1px solid var(--border-subtle)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", gap: 16, padding: "0 22px" }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--text-strong)", lineHeight: 1.1 }}>{title}</div>
        {subtitle && <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>{subtitle}</div>}
      </div>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, height: 36, padding: "0 12px", width: 220, borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", background: "var(--surface-inset)", color: "var(--text-faint)" }}>
          {I.search({ size: 16 })}
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 13 }}>Search…</span>
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, padding: "2px 6px", borderRadius: 4, border: "1px solid var(--border-subtle)" }}>⌘K</span>
        </div>
        <Badge tone="green" dot>2.48M tokens</Badge>
        <IconButton variant="solid" label="Notifications">{I.bell({ size: 17 })}</IconButton>
        <Button variant="primary" size="md" iconLeft={I.plus({ size: 16 })} onClick={onDeploy}>Deploy</Button>
      </div>
    </header>
  );
}
window.HxTopbar = HxTopbar;
