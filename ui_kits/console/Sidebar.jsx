// Helix console — left navigation rail. → window.HxSidebar
function HxSidebar({ current, onNav }) {
  const { Avatar, Badge } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const nav = [
    { id: "overview", label: "Overview", icon: I.grid },
    { id: "models", label: "Models", icon: I.layers },
    { id: "endpoints", label: "Endpoints", icon: I.server },
    { id: "playground", label: "Playground", icon: I.terminal },
    { id: "keys", label: "API Keys", icon: I.key },
    { id: "billing", label: "Billing", icon: I.card },
  ];
  return (
    <aside style={{ width: 248, flex: "none", height: "100%", boxSizing: "border-box", borderRight: "1px solid var(--border-subtle)", background: "var(--bg-gutter)", display: "flex", flexDirection: "column", padding: "18px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 8px 18px" }}>
        <img src="../../assets/logo/helix-mark.svg" alt="Helix" style={{ width: 28, height: 28 }} />
        <img src="../../assets/logo/helix-wordmark.svg" alt="HELIX" style={{ height: 16 }} />
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {nav.map((n) => (
          <NavItem key={n.id} item={n} active={current === n.id} onClick={() => onNav(n.id)} />
        ))}
      </nav>

      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ padding: "12px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", background: "var(--surface-card)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-faint)", marginBottom: 6 }}>Token balance</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, color: "var(--text-strong)" }}>2.48<span style={{ color: "var(--text-faint)", fontSize: 13, fontWeight: 500 }}>M</span></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 6px" }}>
          <Avatar name="Dana Reyes" size={30} />
          <div style={{ lineHeight: 1.25, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 500, color: "var(--text-body)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Dana Reyes</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>acme-labs</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
window.HxSidebar = HxSidebar;

function NavItem({ item, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 11, padding: "9px 11px",
        borderRadius: "var(--radius-sm)",
        border: active ? "1px solid var(--green-line)" : "1px solid transparent",
        background: active ? "var(--green-soft)" : hover ? "var(--surface-hover)" : "transparent",
        color: active ? "var(--green-primary)" : hover ? "var(--text-body)" : "var(--text-muted)",
        fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 500, cursor: "pointer", textAlign: "left",
        transition: "background var(--dur-fast), color var(--dur-fast)",
      }}>
      {item.icon({ size: 18 })}
      {item.label}
    </button>
  );
}
