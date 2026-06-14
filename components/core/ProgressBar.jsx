import React from "react";

/**
 * Helix ProgressBar — usage meters (token balance, GPU utilization).
 * Green by default; pass tone to signal warning/danger thresholds.
 */
export function ProgressBar({ value = 0, max = 100, tone = "green", height = 8, showGlow = true, style = {}, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const tones = {
    green: "linear-gradient(90deg, var(--green-accent), var(--green-primary))",
    warning: "var(--warning)",
    danger: "var(--danger)",
    neutral: "var(--ink-300)",
  };
  const fill = tones[tone] || tones.green;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        background: "var(--surface-inset)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-pill)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: fill,
          borderRadius: "var(--radius-pill)",
          boxShadow: showGlow && tone === "green" ? "0 0 10px rgba(74,222,128,.5)" : "none",
          transition: "width var(--dur-slow) var(--ease-out)",
        }}
      />
    </div>
  );
}
