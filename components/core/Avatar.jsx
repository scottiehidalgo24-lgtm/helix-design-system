import React from "react";

/** Helix Avatar — user/org/model identity. Initials fallback with a green tint. */
export function Avatar({ src, name = "", size = 36, square = false, style = {}, ...rest }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        flex: "none",
        borderRadius: square ? "var(--radius-md)" : "50%",
        background: src ? "var(--ink-700)" : "var(--green-soft)",
        border: "1px solid var(--border-subtle)",
        color: "var(--green-primary)",
        fontFamily: "var(--font-mono)",
        fontSize: Math.round(size * 0.36),
        fontWeight: "var(--fw-medium)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials || "?"
      )}
    </span>
  );
}
