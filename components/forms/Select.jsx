import React from "react";

/**
 * Helix Select — styled native select. options = [{ value, label }] or strings.
 */
export function Select({ label, hint, error, options = [], size = "md", disabled = false, style = {}, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const heights = { sm: 34, md: 40, lg: 46 };
  const h = heights[size] || heights.md;
  const selId = id || React.useId();
  const norm = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  const borderColor = error ? "var(--danger)" : focus ? "var(--accent)" : "var(--border-subtle)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, fontFamily: "var(--font-ui)", ...style }}>
      {label && (
        <label htmlFor={selId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-body)" }}>{label}</label>
      )}
      <div
        style={{
          position: "relative",
          height: h,
          background: "var(--surface-inset)",
          border: `1px solid ${borderColor}`,
          borderRadius: "var(--radius-md)",
          boxShadow: focus && !error ? "var(--ring)" : "none",
          opacity: disabled ? 0.5 : 1,
          transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
        }}
      >
        <select
          id={selId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: "100%",
            height: "100%",
            padding: "0 36px 0 12px",
            border: "none",
            outline: "none",
            background: "transparent",
            color: "var(--text-strong)",
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-base)",
            appearance: "none",
            WebkitAppearance: "none",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          {...rest}
        >
          {norm.map((o) => (
            <option key={o.value} value={o.value} style={{ background: "var(--ink-800)", color: "var(--text-strong)" }}>{o.label}</option>
          ))}
        </select>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {(error || hint) && (
        <span style={{ fontSize: "var(--text-xs)", color: error ? "var(--danger)" : "var(--text-faint)" }}>{error || hint}</span>
      )}
    </div>
  );
}
