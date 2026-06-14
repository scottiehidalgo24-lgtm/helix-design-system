import React from "react";

/**
 * Helix IconButton — a square button holding a single icon.
 * Variants: ghost (default), solid (neutral surface), accent (neon green).
 */
export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  active = false,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = { sm: 30, md: 36, lg: 42 };
  const dim = sizes[size] || sizes.md;

  const palettes = {
    ghost: {
      bg: active ? "var(--green-soft)" : hover ? "var(--surface-hover)" : "transparent",
      color: active ? "var(--accent)" : "var(--text-muted)",
      border: active ? "1px solid var(--green-line)" : "1px solid transparent",
    },
    solid: {
      bg: hover ? "var(--surface-hover)" : "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-subtle)",
    },
    accent: {
      bg: hover ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
    },
  };
  const p = palettes[variant] || palettes.ghost;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        color: p.color,
        background: p.bg,
        border: p.border,
        borderRadius: "var(--radius-sm)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
