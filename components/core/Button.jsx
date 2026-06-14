import React from "react";

/**
 * Helix Button — the primary action primitive.
 * Variants: primary (neon green), secondary (raised neutral), ghost, danger.
 * Sizes: sm / md / lg. Supports leading/trailing icons and a loading state.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  loading = false,
  disabled = false,
  full = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const sizes = {
    sm: { height: 32, padding: "0 12px", fontSize: 13, gap: 6 },
    md: { height: 40, padding: "0 16px", fontSize: 15, gap: 8 },
    lg: { height: 48, padding: "0 22px", fontSize: 16, gap: 10 },
  };
  const s = sizes[size] || sizes.md;
  const off = disabled || loading;

  const palettes = {
    primary: {
      bg: hover ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      shadow: hover && !off ? "var(--glow-md)" : "none",
    },
    secondary: {
      bg: hover ? "var(--surface-hover)" : "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-subtle)",
      shadow: "none",
    },
    ghost: {
      bg: hover ? "var(--surface-hover)" : "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      shadow: "none",
    },
    danger: {
      bg: hover ? "#ff5e78" : "var(--danger)",
      color: "#2a0710",
      border: "1px solid transparent",
      shadow: "none",
    },
  };
  const p = palettes[variant] || palettes.primary;

  return (
    <button
      type="button"
      disabled={off}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        width: full ? "100%" : "auto",
        height: s.height,
        padding: s.padding,
        fontFamily: "var(--font-ui)",
        fontSize: s.fontSize,
        fontWeight: "var(--fw-medium)",
        letterSpacing: "0.01em",
        lineHeight: 1,
        color: p.color,
        background: p.bg,
        border: p.border,
        borderRadius: "var(--radius-md)",
        boxShadow: p.shadow,
        cursor: off ? "not-allowed" : "pointer",
        opacity: off ? 0.5 : 1,
        transform: press && !off ? "translateY(0.5px) scale(0.99)" : "none",
        transition: "background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {loading ? <Spinner color={p.color} /> : iconLeft}
      {children}
      {!loading && iconRight}
    </button>
  );
}

function Spinner({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ animation: "helix-spin 0.7s linear infinite" }}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <style>{"@keyframes helix-spin{to{transform:rotate(360deg)}}"}</style>
    </svg>
  );
}
