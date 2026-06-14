import React from "react";

/**
 * Helix Tabs — underline-style segmented navigation.
 * Controlled: pass `value` and `onChange`. `items` = [{ value, label, badge? }].
 */
export function Tabs({ items = [], value, onChange, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        borderBottom: "1px solid var(--border-subtle)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const active = it.value === value;
        return (
          <TabButton key={it.value} active={active} onClick={() => onChange && onChange(it.value)}>
            {it.label}
            {it.badge != null && (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: active ? "var(--accent)" : "var(--text-faint)" }}>{it.badge}</span>
            )}
          </TabButton>
        );
      })}
    </div>
  );
}

function TabButton({ active, onClick, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "10px 14px",
        marginBottom: -1,
        background: "transparent",
        border: "none",
        borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
        color: active ? "var(--text-strong)" : hover ? "var(--text-body)" : "var(--text-faint)",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-base)",
        fontWeight: "var(--fw-medium)",
        cursor: "pointer",
        transition: "color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      }}
    >
      {children}
    </button>
  );
}
