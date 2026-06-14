import React from "react";

/**
 * Helix Input — text field with optional label, prefix/suffix, error & hint.
 * Focus draws a neon-green ring. Use `mono` for keys, IDs, and code values.
 */
export function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  mono = false,
  size = "md",
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = { sm: 34, md: 40, lg: 46 };
  const h = heights[size] || heights.md;
  const inputId = id || React.useId();

  const borderColor = error
    ? "var(--danger)"
    : focus
    ? "var(--accent)"
    : "var(--border-subtle)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, fontFamily: "var(--font-ui)", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-body)" }}>
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: h,
          padding: "0 12px",
          gap: 8,
          background: "var(--surface-inset)",
          border: `1px solid ${borderColor}`,
          borderRadius: "var(--radius-md)",
          boxShadow: focus && !error ? "var(--ring)" : "none",
          opacity: disabled ? 0.5 : 1,
          transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
        }}
      >
        {prefix && <span style={{ color: "var(--text-faint)", display: "inline-flex", fontFamily: "var(--font-mono)", fontSize: 13 }}>{prefix}</span>}
        <input
          id={inputId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            minWidth: 0,
            height: "100%",
            border: "none",
            outline: "none",
            background: "transparent",
            color: "var(--text-strong)",
            fontFamily: mono ? "var(--font-mono)" : "var(--font-ui)",
            fontSize: mono ? 13 : "var(--text-base)",
            letterSpacing: mono ? "0.01em" : "0",
          }}
          {...rest}
        />
        {suffix && <span style={{ color: "var(--text-faint)", display: "inline-flex" }}>{suffix}</span>}
      </div>
      {(error || hint) && (
        <span style={{ fontSize: "var(--text-xs)", color: error ? "var(--danger)" : "var(--text-faint)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
