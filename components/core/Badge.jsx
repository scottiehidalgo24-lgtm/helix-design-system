import React from "react";

/**
 * Helix Badge — compact status / category label.
 * tone: neutral | green | success | warning | danger | info
 * variant: soft (translucent fill) | solid | outline
 */
export function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  dot = false,
  size = "md",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { c: "var(--text-muted)", base: "var(--ink-200)", soft: "var(--ink-700)", line: "var(--border-subtle)" },
    green: { c: "var(--green-primary)", base: "var(--green-primary)", soft: "var(--green-soft)", line: "var(--green-line)" },
    success: { c: "var(--green-accent)", base: "var(--green-accent)", soft: "var(--success-soft)", line: "var(--green-line)" },
    warning: { c: "var(--warning)", base: "var(--warning)", soft: "var(--warning-soft)", line: "rgba(246,196,84,.4)" },
    danger: { c: "var(--danger)", base: "var(--danger)", soft: "var(--danger-soft)", line: "rgba(240,80,107,.4)" },
    info: { c: "var(--info)", base: "var(--info)", soft: "var(--info-soft)", line: "rgba(74,168,222,.4)" },
  };
  const t = tones[tone] || tones.neutral;
  const sm = size === "sm";

  let bg, color, border;
  if (variant === "solid") { bg = t.base; color = tone === "neutral" ? "var(--bg-0)" : "var(--text-on-accent)"; border = "1px solid transparent"; }
  else if (variant === "outline") { bg = "transparent"; color = t.c; border = `1px solid ${t.line}`; }
  else { bg = t.soft; color = t.c; border = `1px solid ${t.line}`; }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: sm ? 20 : 24,
        padding: sm ? "0 7px" : "0 10px",
        fontFamily: "var(--font-mono)",
        fontSize: sm ? 11 : 12,
        fontWeight: "var(--fw-medium)",
        letterSpacing: "0.02em",
        color,
        background: bg,
        border,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.base, boxShadow: tone === "green" || tone === "success" ? "0 0 6px var(--green-primary)" : "none" }} />
      )}
      {children}
    </span>
  );
}
