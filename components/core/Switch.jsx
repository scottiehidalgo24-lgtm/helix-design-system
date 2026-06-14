import React from "react";

/** Helix Switch — on/off toggle. Neon green when on. */
export function Switch({ checked = false, onChange, disabled = false, size = "md", label, style = {}, ...rest }) {
  const dims = size === "sm" ? { w: 34, h: 20, k: 14 } : { w: 42, h: 24, k: 18 };
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };

  const sw = (
    <span
      role="switch"
      aria-checked={checked}
      onClick={toggle}
      style={{
        position: "relative",
        display: "inline-block",
        width: dims.w,
        height: dims.h,
        flex: "none",
        background: checked ? "var(--accent)" : "var(--ink-600)",
        borderRadius: "var(--radius-pill)",
        boxShadow: checked ? "var(--glow-sm)" : "inset 0 1px 2px rgba(0,0,0,.5)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          position: "absolute",
          top: (dims.h - dims.k) / 2,
          left: checked ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
          width: dims.k,
          height: dims.k,
          background: checked ? "var(--text-on-accent)" : "var(--ink-200)",
          borderRadius: "50%",
          transition: "left var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
        }}
      />
    </span>
  );

  if (!label) return sw;
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "var(--font-ui)", fontSize: "var(--text-base)", color: "var(--text-body)" }}>
      {sw}
      {label}
    </label>
  );
}
