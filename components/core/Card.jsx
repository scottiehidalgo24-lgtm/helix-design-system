import React from "react";

/**
 * Helix Card — the base surface container. Hairline border, subtle dark fill,
 * slightly rounded. Optional `glow` for featured/active cards and `interactive`
 * for hover lift.
 */
export function Card({
  children,
  glow = false,
  interactive = false,
  padding = 20,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: hover ? "var(--surface-raised)" : "var(--surface-card)",
        border: glow ? "1px solid var(--green-line)" : "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: glow ? "var(--glow-md)" : hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        padding,
        transition: "background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
        transform: hover ? "translateY(-2px)" : "none",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Optional header row for a Card: title + subtitle on the left, actions on the right. */
export function CardHeader({ title, subtitle, action, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 16, ...style }}>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-md)", fontWeight: "var(--fw-medium)", color: "var(--text-strong)", letterSpacing: "-0.01em" }}>{title}</div>
        {subtitle && <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", color: "var(--text-faint)", marginTop: 4 }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}
