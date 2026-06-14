/* @ds-bundle: {"format":3,"namespace":"HelixDesignSystem_6e1999","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"e35b6972ca1d","components/core/Badge.jsx":"d991bf06f172","components/core/Button.jsx":"819b3bf118db","components/core/Card.jsx":"8c89039ca277","components/core/IconButton.jsx":"7aaf519302f6","components/core/ProgressBar.jsx":"b96f03c3b7f9","components/core/Switch.jsx":"b002add697f3","components/core/Tabs.jsx":"8ecd7d109481","components/forms/Input.jsx":"1a620a33d8ad","components/forms/Select.jsx":"c79a92c95b01","ui_kits/console/App.jsx":"d22a5d2a96b1","ui_kits/console/Chart.jsx":"d8ab76ea6102","ui_kits/console/Endpoint.jsx":"9846968d7124","ui_kits/console/Icons.jsx":"d81e51be2b83","ui_kits/console/Models.jsx":"5215078f09f8","ui_kits/console/Overview.jsx":"458dd59a5322","ui_kits/console/Sidebar.jsx":"750abde17242","ui_kits/console/Topbar.jsx":"318e04c3f73c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HelixDesignSystem_6e1999 = window.HelixDesignSystem_6e1999 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Helix Avatar — user/org/model identity. Initials fallback with a green tint. */
function Avatar({
  src,
  name = "",
  size = 36,
  square = false,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(p => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Helix Badge — compact status / category label.
 * tone: neutral | green | success | warning | danger | info
 * variant: soft (translucent fill) | solid | outline
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  dot = false,
  size = "md",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      c: "var(--text-muted)",
      base: "var(--ink-200)",
      soft: "var(--ink-700)",
      line: "var(--border-subtle)"
    },
    green: {
      c: "var(--green-primary)",
      base: "var(--green-primary)",
      soft: "var(--green-soft)",
      line: "var(--green-line)"
    },
    success: {
      c: "var(--green-accent)",
      base: "var(--green-accent)",
      soft: "var(--success-soft)",
      line: "var(--green-line)"
    },
    warning: {
      c: "var(--warning)",
      base: "var(--warning)",
      soft: "var(--warning-soft)",
      line: "rgba(246,196,84,.4)"
    },
    danger: {
      c: "var(--danger)",
      base: "var(--danger)",
      soft: "var(--danger-soft)",
      line: "rgba(240,80,107,.4)"
    },
    info: {
      c: "var(--info)",
      base: "var(--info)",
      soft: "var(--info-soft)",
      line: "rgba(74,168,222,.4)"
    }
  };
  const t = tones[tone] || tones.neutral;
  const sm = size === "sm";
  let bg, color, border;
  if (variant === "solid") {
    bg = t.base;
    color = tone === "neutral" ? "var(--bg-0)" : "var(--text-on-accent)";
    border = "1px solid transparent";
  } else if (variant === "outline") {
    bg = "transparent";
    color = t.c;
    border = `1px solid ${t.line}`;
  } else {
    bg = t.soft;
    color = t.c;
    border = `1px solid ${t.line}`;
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.base,
      boxShadow: tone === "green" || tone === "success" ? "0 0 6px var(--green-primary)" : "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Helix Button — the primary action primitive.
 * Variants: primary (neon green), secondary (raised neutral), ghost, danger.
 * Sizes: sm / md / lg. Supports leading/trailing icons and a loading state.
 */
function Button({
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
    sm: {
      height: 32,
      padding: "0 12px",
      fontSize: 13,
      gap: 6
    },
    md: {
      height: 40,
      padding: "0 16px",
      fontSize: 15,
      gap: 8
    },
    lg: {
      height: 48,
      padding: "0 22px",
      fontSize: 16,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const off = disabled || loading;
  const palettes = {
    primary: {
      bg: hover ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      shadow: hover && !off ? "var(--glow-md)" : "none"
    },
    secondary: {
      bg: hover ? "var(--surface-hover)" : "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-subtle)",
      shadow: "none"
    },
    ghost: {
      bg: hover ? "var(--surface-hover)" : "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      shadow: "none"
    },
    danger: {
      bg: hover ? "#ff5e78" : "var(--danger)",
      color: "#2a0710",
      border: "1px solid transparent",
      shadow: "none"
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: off,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
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
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, {
    color: p.color
  }) : iconLeft, children, !loading && iconRight);
}
function Spinner({
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      animation: "helix-spin 0.7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: color,
    strokeOpacity: "0.25",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    stroke: color,
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes helix-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Helix Card — the base surface container. Hairline border, subtle dark fill,
 * slightly rounded. Optional `glow` for featured/active cards and `interactive`
 * for hover lift.
 */
function Card({
  children,
  glow = false,
  interactive = false,
  padding = 20,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: hover ? "var(--surface-raised)" : "var(--surface-card)",
      border: glow ? "1px solid var(--green-line)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: glow ? "var(--glow-md)" : hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding,
      transition: "background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      transform: hover ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}

/** Optional header row for a Card: title + subtitle on the left, actions on the right. */
function CardHeader({
  title,
  subtitle,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-md)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--text-faint)",
      marginTop: 4
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Helix IconButton — a square button holding a single icon.
 * Variants: ghost (default), solid (neutral surface), accent (neon green).
 */
function IconButton({
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
  const sizes = {
    sm: 30,
    md: 36,
    lg: 42
  };
  const dim = sizes[size] || sizes.md;
  const palettes = {
    ghost: {
      bg: active ? "var(--green-soft)" : hover ? "var(--surface-hover)" : "transparent",
      color: active ? "var(--accent)" : "var(--text-muted)",
      border: active ? "1px solid var(--green-line)" : "1px solid transparent"
    },
    solid: {
      bg: hover ? "var(--surface-hover)" : "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-subtle)"
    },
    accent: {
      bg: hover ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent"
    }
  };
  const p = palettes[variant] || palettes.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Helix ProgressBar — usage meters (token balance, GPU utilization).
 * Green by default; pass tone to signal warning/danger thresholds.
 */
function ProgressBar({
  value = 0,
  max = 100,
  tone = "green",
  height = 8,
  showGlow = true,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const tones = {
    green: "linear-gradient(90deg, var(--green-accent), var(--green-primary))",
    warning: "var(--warning)",
    danger: "var(--danger)",
    neutral: "var(--ink-300)"
  };
  const fill = tones[tone] || tones.green;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: "100%",
      height,
      background: "var(--surface-inset)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: fill,
      borderRadius: "var(--radius-pill)",
      boxShadow: showGlow && tone === "green" ? "0 0 10px rgba(74,222,128,.5)" : "none",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Helix Switch — on/off toggle. Neon green when on. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  label,
  style = {},
  ...rest
}) {
  const dims = size === "sm" ? {
    w: 34,
    h: 20,
    k: 14
  } : {
    w: 42,
    h: 24,
    k: 18
  };
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const sw = /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    style: {
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
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (dims.h - dims.k) / 2,
      left: checked ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      background: checked ? "var(--text-on-accent)" : "var(--ink-200)",
      borderRadius: "50%",
      transition: "left var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
    }
  }));
  if (!label) return sw;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, sw, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Helix Tabs — underline-style segmented navigation.
 * Controlled: pass `value` and `onChange`. `items` = [{ value, label, badge? }].
 */
function Tabs({
  items = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement(TabButton, {
      key: it.value,
      active: active,
      onClick: () => onChange && onChange(it.value)
    }, it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: active ? "var(--accent)" : "var(--text-faint)"
      }
    }, it.badge));
  }));
}
function TabButton({
  active,
  onClick,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      transition: "color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, children);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Helix Input — text field with optional label, prefix/suffix, error & hint.
 * Focus draws a neon-green ring. Use `mono` for keys, IDs, and code values.
 */
function Input({
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
  const heights = {
    sm: 34,
    md: 40,
    lg: 46
  };
  const h = heights[size] || heights.md;
  const inputId = id || React.useId();
  const borderColor = error ? "var(--danger)" : focus ? "var(--accent)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      fontFamily: "var(--font-ui)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
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
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "inline-flex",
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--text-strong)",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-ui)",
      fontSize: mono ? 13 : "var(--text-base)",
      letterSpacing: mono ? "0.01em" : "0"
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "inline-flex"
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-faint)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Helix Select — styled native select. options = [{ value, label }] or strings.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  size = "md",
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 34,
    md: 40,
    lg: 46
  };
  const h = heights[size] || heights.md;
  const selId = id || React.useId();
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const borderColor = error ? "var(--danger)" : focus ? "var(--accent)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      fontFamily: "var(--font-ui)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: h,
      background: "var(--surface-inset)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus && !error ? "var(--ring)" : "none",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
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
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    style: {
      background: "var(--ink-800)",
      color: "var(--text-strong)"
    }
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-faint)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-faint)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/App.jsx
try { (() => {
// Helix console — app shell, routing, deploy toast. → window.HxApp
function HxApp() {
  const {
    Card,
    Badge,
    Button,
    Input,
    ProgressBar,
    IconButton
  } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const [screen, setScreen] = React.useState("overview");
  const [endpoint, setEndpoint] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const fireToast = msg => {
    setToast(msg);
    clearTimeout(window.__hxT);
    window.__hxT = setTimeout(() => setToast(null), 2600);
  };
  const deploy = m => fireToast(`Deploying ${m ? m.name : "model"}…`);
  const openEndpoint = e => {
    setEndpoint(e);
    setScreen("endpoint");
  };
  const titles = {
    overview: ["Overview", "Welcome back, Dana"],
    models: ["Models", "Deploy from the catalog"],
    endpoints: ["Endpoints", "Your running deployments"],
    playground: ["Playground", "Test prompts against any endpoint"],
    keys: ["API Keys", "Manage access to your account"],
    billing: ["Billing", "Prepaid tokens · acme-labs"],
    endpoint: [endpoint ? endpoint.name : "Endpoint", "Deployment detail"]
  };
  const [title, subtitle] = titles[screen] || titles.overview;
  let body;
  if (screen === "overview") body = /*#__PURE__*/React.createElement(window.HxOverview, {
    onOpenEndpoint: openEndpoint
  });else if (screen === "models") body = /*#__PURE__*/React.createElement(window.HxModels, {
    onDeploy: deploy
  });else if (screen === "endpoints") body = /*#__PURE__*/React.createElement(window.HxOverview, {
    onOpenEndpoint: openEndpoint
  });else if (screen === "endpoint") body = /*#__PURE__*/React.createElement(window.HxEndpoint, {
    endpoint: endpoint,
    onBack: () => setScreen("overview")
  });else if (screen === "playground") body = /*#__PURE__*/React.createElement(Playground, null);else if (screen === "keys") body = /*#__PURE__*/React.createElement(Keys, null);else if (screen === "billing") body = /*#__PURE__*/React.createElement(Billing, null);
  function Playground() {
    const [val, setVal] = React.useState("Explain DNA transcription in two sentences.");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 280px",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 18px",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "green",
      dot: true
    }, "prod-llama-eu"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--text-faint)"
      }
    }, "Llama 3.1 70B")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minHeight: 320
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: "flex-end",
        maxWidth: "75%",
        background: "var(--green-soft)",
        border: "1px solid var(--green-line)",
        borderRadius: "var(--radius-lg)",
        padding: "10px 14px",
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        color: "var(--text-strong)"
      }
    }, "Explain DNA transcription in two sentences."), /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: "flex-start",
        maxWidth: "80%",
        background: "var(--surface-inset)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "10px 14px",
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        color: "var(--text-body)",
        lineHeight: 1.55
      }
    }, "Transcription copies a gene's DNA sequence into messenger RNA, with RNA polymerase reading the template strand and assembling complementary nucleotides. The resulting mRNA then carries that genetic instruction out of the nucleus to be translated into protein.", /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--text-faint)"
      }
    }, "62 tokens \xB7 410ms"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14,
        borderTop: "1px solid var(--border-subtle)",
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      value: val,
      onChange: e => setVal(e.target.value),
      placeholder: "Send a message\u2026"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: I.play({
        size: 15
      })
    }, "Run"))), /*#__PURE__*/React.createElement(Card, {
      padding: 18
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 15,
        fontWeight: 500,
        color: "var(--text-strong)",
        marginBottom: 16
      }
    }, "Parameters"), [["Temperature", "0.7"], ["Max tokens", "512"], ["Top-p", "0.95"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-ui)",
        fontSize: 13,
        color: "var(--text-body)",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        color: "var(--green-primary)"
      }
    }, v)), /*#__PURE__*/React.createElement(ProgressBar, {
      value: k === "Temperature" ? 35 : k === "Max tokens" ? 50 : 95,
      height: 5,
      tone: "neutral"
    })))));
  }
  function Keys() {
    const keys = [{
      name: "production",
      prefix: "sk-prod-9f3a",
      created: "Apr 2, 2026",
      last: "2 min ago"
    }, {
      name: "staging",
      prefix: "sk-stag-71be",
      created: "Mar 18, 2026",
      last: "1 day ago"
    }, {
      name: "ci-pipeline",
      prefix: "sk-ci-2c8d",
      created: "Feb 9, 2026",
      last: "12 days ago"
    }];
    return /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 16,
        fontWeight: 500,
        color: "var(--text-strong)"
      }
    }, "Secret keys"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      iconLeft: I.plus({
        size: 15
      })
    }, "Create key")), keys.map((k, i) => /*#__PURE__*/React.createElement("div", {
      key: k.name,
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr 1fr 1fr 36px",
        gap: 12,
        alignItems: "center",
        padding: "14px 20px",
        borderBottom: i < keys.length - 1 ? "1px solid var(--ink-700)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        color: "var(--text-strong)"
      }
    }, k.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, k.prefix, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--text-faint)"
      }
    }, k.created), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--text-faint)"
      }
    }, "used ", k.last), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      label: "Copy"
    }, I.copy({
      size: 16
    })))));
  }
  function Billing() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      glow: true,
      padding: 22
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "var(--text-faint)"
      }
    }, "Prepaid balance"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 42,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "var(--text-strong)",
        marginTop: 6
      }
    }, "2,480,000", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        color: "var(--text-faint)",
        fontWeight: 500
      }
    }, " tokens")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 13,
        color: "var(--text-muted)",
        marginTop: 4
      }
    }, "\u2248 $992 remaining \xB7 burning ~184K/day")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: I.bolt({
        size: 16
      })
    }, "Top up")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: 50,
      height: 8
    }))), /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 20px",
        borderBottom: "1px solid var(--border-subtle)",
        fontFamily: "var(--font-display)",
        fontSize: 16,
        fontWeight: 500,
        color: "var(--text-strong)"
      }
    }, "Recent invoices"), [["INV-2026-06", "Jun 1, 2026", "$1,000.00", "paid"], ["INV-2026-05", "May 1, 2026", "$500.00", "paid"], ["INV-2026-04", "Apr 1, 2026", "$500.00", "paid"]].map(([id, d, amt, st], i) => /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 100px",
        gap: 12,
        alignItems: "center",
        padding: "14px 20px",
        borderBottom: i < 2 ? "1px solid var(--ink-700)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--text-strong)"
      }
    }, id), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 13,
        color: "var(--text-faint)"
      }
    }, d), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--text-body)"
      }
    }, amt), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      variant: "soft"
    }, st)))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      background: "var(--bg-app)"
    }
  }, /*#__PURE__*/React.createElement(window.HxSidebar, {
    current: screen === "endpoint" ? "endpoints" : screen,
    onNav: s => {
      setScreen(s);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(window.HxTopbar, {
    title: title,
    subtitle: subtitle,
    onDeploy: () => setScreen("models")
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "26px 28px",
      background: "radial-gradient(120% 60% at 100% -10%, rgba(74,222,128,0.05), transparent 50%), var(--bg-app)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, body))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 18px",
      background: "var(--surface-card)",
      border: "1px solid var(--green-line)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--glow-md), var(--shadow-lg)",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      color: "var(--text-strong)",
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-primary)",
      display: "inline-flex"
    }
  }, I.check({
    size: 17
  })), toast));
}
window.HxApp = HxApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Chart.jsx
try { (() => {
// Helix console charts — SVG area chart + sparkline. → window.HxChart, window.HxSpark
function HxChart({
  data,
  height = 200,
  accent = "#4ade80"
}) {
  const w = 760,
    h = height,
    padB = 26,
    padT = 12,
    padL = 4,
    padR = 4;
  const max = Math.max(...data) * 1.15;
  const min = 0;
  const n = data.length;
  const x = i => padL + i / (n - 1) * (w - padL - padR);
  const y = v => padT + (1 - (v - min) / (max - min)) * (h - padT - padB);
  const line = data.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L ${x(n - 1).toFixed(1)} ${h - padB} L ${x(0).toFixed(1)} ${h - padB} Z`;
  const gid = "hxg-" + Math.round(max);
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: "100%",
    height,
    preserveAspectRatio: "none",
    style: {
      display: "block"
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: gid,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 1
  }, React.createElement("stop", {
    offset: "0",
    stopColor: accent,
    stopOpacity: 0.35
  }), React.createElement("stop", {
    offset: "1",
    stopColor: accent,
    stopOpacity: 0
  }))),
  // gridlines
  [0.25, 0.5, 0.75].map((g, i) => React.createElement("line", {
    key: i,
    x1: padL,
    x2: w - padR,
    y1: padT + g * (h - padT - padB),
    y2: padT + g * (h - padT - padB),
    stroke: "#26282c",
    strokeWidth: 1
  })), React.createElement("path", {
    d: area,
    fill: `url(#${gid})`
  }), React.createElement("path", {
    d: line,
    fill: "none",
    stroke: accent,
    strokeWidth: 2.5,
    strokeLinejoin: "round",
    strokeLinecap: "round",
    style: {
      filter: "drop-shadow(0 0 6px rgba(74,222,128,.4))"
    }
  }), React.createElement("circle", {
    cx: x(n - 1),
    cy: y(data[n - 1]),
    r: 4,
    fill: accent,
    style: {
      filter: "drop-shadow(0 0 6px rgba(74,222,128,.7))"
    }
  }), labels.map((lb, i) => React.createElement("text", {
    key: lb,
    x: x(Math.round(i / 6 * (n - 1))),
    y: h - 8,
    fill: "#6b7077",
    fontSize: 11,
    fontFamily: "JetBrains Mono, monospace",
    textAnchor: "middle"
  }, lb)));
}
function HxSpark({
  data,
  accent = "#4ade80",
  width = 110,
  height = 34
}) {
  const max = Math.max(...data),
    min = Math.min(...data);
  const n = data.length;
  const x = i => i / (n - 1) * width;
  const y = v => height - 3 - (v - min) / (max - min || 1) * (height - 6);
  const line = data.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  return React.createElement("svg", {
    width,
    height,
    style: {
      display: "block"
    }
  }, React.createElement("path", {
    d: line,
    fill: "none",
    stroke: accent,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
window.HxChart = HxChart;
window.HxSpark = HxSpark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Chart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Endpoint.jsx
try { (() => {
// Helix console — Endpoint detail screen. → window.HxEndpoint
function HxEndpoint({
  endpoint,
  onBack
}) {
  const {
    Card,
    Badge,
    Button,
    Tabs,
    Switch,
    Input,
    Select,
    ProgressBar
  } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const HxChart = window.HxChart;
  const [tab, setTab] = React.useState("metrics");
  const [autoscale, setAutoscale] = React.useState(true);
  const [logging, setLogging] = React.useState(true);
  const ep = endpoint || {
    name: "prod-llama-eu",
    model: "Llama 3.1 70B",
    region: "eu-west",
    status: "running",
    tone: "green"
  };
  const latency = [138, 142, 130, 155, 148, 162, 140, 158, 145, 150, 142, 168, 152, 142];
  const logs = [{
    t: "12:04:21",
    lvl: "INFO",
    msg: "request id=req_8f3a2 · 412 tok · 138ms"
  }, {
    t: "12:04:21",
    lvl: "INFO",
    msg: "request id=req_8f3a1 · 388 tok · 142ms"
  }, {
    t: "12:04:20",
    lvl: "WARN",
    msg: "replica eu-west-2 cold start 1.2s"
  }, {
    t: "12:04:19",
    lvl: "INFO",
    msg: "request id=req_8f39f · 256 tok · 119ms"
  }, {
    t: "12:04:18",
    lvl: "INFO",
    msg: "autoscale: +1 replica (load 0.82)"
  }, {
    t: "12:04:17",
    lvl: "INFO",
    msg: "request id=req_8f39e · 502 tok · 171ms"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "none",
      border: "none",
      color: "var(--text-faint)",
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      cursor: "pointer",
      padding: 0,
      width: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: "rotate(180deg)",
      display: "inline-flex"
    }
  }, I.chevR({
    size: 15
  })), " Endpoints"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--green-soft)",
      border: "1px solid var(--green-line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--green-primary)"
    }
  }, I.server({
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 20,
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, ep.name), /*#__PURE__*/React.createElement(Badge, {
    tone: ep.tone || "green",
    dot: true
  }, ep.status || "running")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--text-faint)",
      marginTop: 3
    }
  }, ep.model, " \xB7 ", ep.region)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    iconLeft: I.terminal({
      size: 15
    })
  }, "Test"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    iconLeft: I.copy({
      size: 15
    })
  }, "Copy URL"))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "metrics",
      label: "Metrics"
    }, {
      value: "logs",
      label: "Logs",
      badge: 6
    }, {
      value: "settings",
      label: "Settings"
    }]
  }), tab === "metrics" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, [["Requests/s", "412"], ["p95 latency", "168ms"], ["Replicas", "3"], ["Errors (1h)", "0.02%"]].map(([k, v]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    padding: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--text-faint)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: 700,
      color: "var(--text-strong)",
      marginTop: 8
    }
  }, v)))), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--text-strong)",
      marginBottom: 16
    }
  }, "Latency \xB7 p50 (ms)"), /*#__PURE__*/React.createElement(HxChart, {
    data: latency,
    height: 200
  }))), tab === "logs" && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 16px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true
  }, "live"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, "tailing eu-west \xB7 6 lines")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      lineHeight: 1.9,
      padding: "12px 16px",
      background: "var(--surface-inset)"
    }
  }, logs.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, l.t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: l.lvl === "WARN" ? "var(--warning)" : "var(--green-accent)",
      width: 38,
      flex: "none"
    }
  }, l.lvl), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)"
    }
  }, l.msg))))), tab === "settings" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--text-strong)",
      marginBottom: 16
    }
  }, "Scaling"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: autoscale,
    onChange: setAutoscale,
    label: "Autoscale replicas"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Min replicas",
    defaultValue: "1",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Max replicas",
    defaultValue: "8",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "GPU type",
    options: ["A100 80GB", "H100 80GB", "L40S 48GB"],
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--text-strong)",
      marginBottom: 16
    }
  }, "General"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: logging,
    onChange: setLogging,
    label: "Request logging"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Endpoint name",
    defaultValue: ep.name,
    mono: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Region",
    options: ["eu-west", "us-east", "ap-south"],
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Save changes"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    size: "sm"
  }, "Delete"))))));
}
window.HxEndpoint = HxEndpoint;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Endpoint.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Icons.jsx
try { (() => {
// Helix console — Lucide-style icon set (1.8px stroke, round caps). → window.HxIcons
const HxIcons = (() => {
  const I = (children, props = {}) => React.createElement("svg", {
    width: props.size || 18,
    height: props.size || 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: props.style,
    ...props
  }, children);
  const p = d => React.createElement("path", {
    d
  });
  const g = (...els) => React.createElement(React.Fragment, null, ...els);
  return {
    grid: pr => I(g(p("M3 3h7v7H3z"), p("M14 3h7v7h-7z"), p("M14 14h7v7h-7z"), p("M3 14h7v7H3z")), pr),
    layers: pr => I(g(p("M12 2 2 7l10 5 10-5-10-5z"), p("m2 17 10 5 10-5"), p("m2 12 10 5 10-5")), pr),
    server: pr => I(g(React.createElement("rect", {
      x: 2,
      y: 3,
      width: 20,
      height: 7,
      rx: 1.5
    }), React.createElement("rect", {
      x: 2,
      y: 14,
      width: 20,
      height: 7,
      rx: 1.5
    }), p("M6 6.5h.01"), p("M6 17.5h.01")), pr),
    terminal: pr => I(g(p("m4 17 6-6-6-6"), p("M12 19h8")), pr),
    key: pr => I(g(React.createElement("circle", {
      cx: 7.5,
      cy: 15.5,
      r: 4.5
    }), p("m10.5 12.5 8-8"), p("m16 5 3 3"), p("m13.5 7.5 3 3")), pr),
    card: pr => I(g(React.createElement("rect", {
      x: 2,
      y: 5,
      width: 20,
      height: 14,
      rx: 2
    }), p("M2 10h20")), pr),
    plus: pr => I(g(p("M12 5v14"), p("M5 12h14")), pr),
    play: pr => I(React.createElement("polygon", {
      points: "6 3 20 12 6 21 6 3"
    }), pr),
    search: pr => I(g(React.createElement("circle", {
      cx: 11,
      cy: 11,
      r: 8
    }), p("m21 21-4.3-4.3")), pr),
    bolt: pr => I(React.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    }), pr),
    activity: pr => I(p("M22 12h-4l-3 9L9 3l-3 9H2"), pr),
    clock: pr => I(g(React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 9
    }), p("M12 7v5l3 2")), pr),
    chevR: pr => I(p("m9 18 6-6-6-6"), pr),
    chevD: pr => I(p("m6 9 6 6 6-6"), pr),
    gear: pr => I(g(React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 3
    }), p("M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z")), pr),
    copy: pr => I(g(React.createElement("rect", {
      x: 9,
      y: 9,
      width: 13,
      height: 13,
      rx: 2
    }), p("M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1")), pr),
    bell: pr => I(g(p("M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"), p("M10.3 21a1.94 1.94 0 0 0 3.4 0")), pr),
    book: pr => I(g(p("M4 19.5A2.5 2.5 0 0 1 6.5 17H20"), p("M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z")), pr),
    globe: pr => I(g(React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 9
    }), p("M3 12h18"), p("M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z")), pr),
    arrowUp: pr => I(g(p("M12 19V5"), p("m5 12 7-7 7 7")), pr),
    check: pr => I(p("M20 6 9 17l-5-5"), pr)
  };
})();
window.HxIcons = HxIcons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Models.jsx
try { (() => {
// Helix console — Models catalog screen. → window.HxModels
function HxModels({
  onDeploy
}) {
  const {
    Card,
    Badge,
    Button,
    Tabs
  } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const [tab, setTab] = React.useState("all");
  const models = [{
    name: "Llama 3.1 70B",
    maker: "Meta",
    type: "chat",
    params: "70B",
    ctx: "128K",
    price: "0.40",
    featured: true,
    tags: ["instruct", "tools"]
  }, {
    name: "Mixtral 8x7B",
    maker: "Mistral",
    type: "chat",
    params: "47B",
    ctx: "32K",
    price: "0.24",
    tags: ["MoE", "fast"]
  }, {
    name: "Llama 3.1 8B",
    maker: "Meta",
    type: "chat",
    params: "8B",
    ctx: "128K",
    price: "0.06",
    tags: ["fast", "cheap"]
  }, {
    name: "BGE-large",
    maker: "BAAI",
    type: "embedding",
    params: "335M",
    ctx: "512",
    price: "0.01",
    tags: ["retrieval"]
  }, {
    name: "Llava 1.6",
    maker: "Microsoft",
    type: "vision",
    params: "34B",
    ctx: "4K",
    price: "0.30",
    tags: ["multimodal"]
  }, {
    name: "Whisper v3",
    maker: "OpenAI",
    type: "audio",
    params: "1.5B",
    ctx: "—",
    price: "0.02",
    tags: ["transcribe"]
  }];
  const shown = tab === "all" ? models : models.filter(m => m.type === tab);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "all",
      label: "All models"
    }, {
      value: "chat",
      label: "Chat"
    }, {
      value: "embedding",
      label: "Embeddings"
    }, {
      value: "vision",
      label: "Vision"
    }, {
      value: "audio",
      label: "Audio"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, shown.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    glow: m.featured,
    interactive: true,
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-md)",
      background: "var(--green-soft)",
      border: "1px solid var(--green-line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--green-primary)"
    }
  }, (m.type === "embedding" ? I.layers : m.type === "vision" ? I.globe : m.type === "audio" ? I.activity : I.bolt)({
    size: 19
  })), m.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    variant: "soft"
  }, "Popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "var(--text-strong)"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--text-faint)",
      marginTop: 2
    }
  }, m.maker), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      margin: "12px 0 14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    variant: "outline",
    size: "sm"
  }, m.params), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    variant: "outline",
    size: "sm"
  }, m.ctx, " ctx"), m.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral",
    variant: "soft",
    size: "sm"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 14,
      borderTop: "1px solid var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-primary)"
    }
  }, "$", m.price), " / 1M tok"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: m.featured ? "primary" : "secondary",
    iconLeft: I.play({
      size: 14
    }),
    onClick: () => onDeploy && onDeploy(m)
  }, "Deploy"))))));
}
window.HxModels = HxModels;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Models.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Overview.jsx
try { (() => {
// Helix console — Overview screen. → window.HxOverview
function HxOverview({
  onOpenEndpoint
}) {
  const {
    Card,
    Badge,
    ProgressBar
  } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const HxChart = window.HxChart;
  const usage = [120, 140, 135, 180, 175, 210, 230, 220, 260, 240, 300, 290, 340, 380];
  const stats = [{
    label: "Token balance",
    value: "2.48M",
    sub: "of 5M prepaid",
    icon: I.bolt,
    meter: 50
  }, {
    label: "Requests today",
    value: "184,209",
    sub: "+12.4% vs yesterday",
    icon: I.activity,
    up: true
  }, {
    label: "Active endpoints",
    value: "6",
    sub: "across 3 regions",
    icon: I.server
  }, {
    label: "Avg latency",
    value: "142ms",
    sub: "p95 · last 1h",
    icon: I.clock
  }];
  const endpoints = [{
    name: "prod-llama-eu",
    model: "Llama 3.1 70B",
    region: "eu-west",
    status: "running",
    tone: "green",
    rps: "412"
  }, {
    name: "mixtral-chat",
    model: "Mixtral 8x7B",
    region: "us-east",
    status: "running",
    tone: "green",
    rps: "188"
  }, {
    name: "embed-search",
    model: "BGE-large",
    region: "eu-west",
    status: "scaling",
    tone: "warning",
    rps: "57"
  }, {
    name: "vision-beta",
    model: "Llava 1.6",
    region: "ap-south",
    status: "failed",
    tone: "danger",
    rps: "0"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--text-faint)"
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-primary)",
      display: "inline-flex"
    }
  }, s.icon({
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "10px 0 4px"
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: s.up ? "var(--green-primary)" : "var(--text-faint)",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, s.up && I.arrowUp({
    size: 13
  }), s.sub), s.meter != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: s.meter,
    height: 6
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, "Token consumption"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--text-faint)",
      marginTop: 3
    }
  }, "Last 14 days")), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    variant: "outline"
  }, "tokens / day")), /*#__PURE__*/React.createElement(HxChart, {
    data: usage,
    height: 210
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--text-strong)",
      marginBottom: 4
    }
  }, "Plan usage"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--text-faint)",
      marginBottom: 18
    }
  }, "Prepaid \xB7 renews Jul 1"), [{
    k: "Tokens",
    v: 50,
    t: "green",
    d: "2.48M / 5M"
  }, {
    k: "GPU hours",
    v: 72,
    t: "green",
    d: "144 / 200"
  }, {
    k: "Storage",
    v: 88,
    t: "warning",
    d: "44 / 50 GB"
  }, {
    k: "Seats",
    v: 30,
    t: "neutral",
    d: "3 / 10"
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--text-body)"
    }
  }, r.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, r.d)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: r.v,
    tone: r.t,
    height: 7
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, "Active endpoints"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, "6 total")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1.2fr 0.9fr 0.7fr 40px",
      gap: 12,
      padding: "10px 20px",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--text-faint)",
      borderBottom: "1px solid var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Endpoint"), /*#__PURE__*/React.createElement("span", null, "Model"), /*#__PURE__*/React.createElement("span", null, "Region"), /*#__PURE__*/React.createElement("span", null, "Req/s"), /*#__PURE__*/React.createElement("span", null)), endpoints.map((e, i) => /*#__PURE__*/React.createElement("button", {
    key: e.name,
    onClick: () => onOpenEndpoint && onOpenEndpoint(e),
    style: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1.4fr 1.2fr 0.9fr 0.7fr 40px",
      gap: 12,
      alignItems: "center",
      padding: "14px 20px",
      background: "transparent",
      border: "none",
      borderBottom: i < endpoints.length - 1 ? "1px solid var(--ink-700)" : "none",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-ui)"
    },
    onMouseEnter: ev => ev.currentTarget.style.background = "var(--surface-hover)",
    onMouseLeave: ev => ev.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: e.tone,
    dot: true
  }, e.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-strong)"
    }
  }, e.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-body)"
    }
  }, e.model), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, e.region), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-body)"
    }
  }, e.rps), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "flex",
      justifyContent: "flex-end"
    }
  }, I.chevR({
    size: 16
  })))))));
}
window.HxOverview = HxOverview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Sidebar.jsx
try { (() => {
// Helix console — left navigation rail. → window.HxSidebar
function HxSidebar({
  current,
  onNav
}) {
  const {
    Avatar,
    Badge
  } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const nav = [{
    id: "overview",
    label: "Overview",
    icon: I.grid
  }, {
    id: "models",
    label: "Models",
    icon: I.layers
  }, {
    id: "endpoints",
    label: "Endpoints",
    icon: I.server
  }, {
    id: "playground",
    label: "Playground",
    icon: I.terminal
  }, {
    id: "keys",
    label: "API Keys",
    icon: I.key
  }, {
    id: "billing",
    label: "Billing",
    icon: I.card
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: "none",
      height: "100%",
      boxSizing: "border-box",
      borderRight: "1px solid var(--border-subtle)",
      background: "var(--bg-gutter)",
      display: "flex",
      flexDirection: "column",
      padding: "18px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "4px 8px 18px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/helix-mark.svg",
    alt: "Helix",
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/helix-wordmark.svg",
    alt: "HELIX",
    style: {
      height: 16
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    item: n,
    active: current === n.id,
    onClick: () => onNav(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--text-faint)",
      marginBottom: 6
    }
  }, "Token balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "2.48", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      fontSize: 13,
      fontWeight: 500
    }
  }, "M"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "4px 6px"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Reyes",
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--text-body)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Dana Reyes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-faint)"
    }
  }, "acme-labs")))));
}
window.HxSidebar = HxSidebar;
function NavItem({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "9px 11px",
      borderRadius: "var(--radius-sm)",
      border: active ? "1px solid var(--green-line)" : "1px solid transparent",
      background: active ? "var(--green-soft)" : hover ? "var(--surface-hover)" : "transparent",
      color: active ? "var(--green-primary)" : hover ? "var(--text-body)" : "var(--text-muted)",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      fontWeight: 500,
      cursor: "pointer",
      textAlign: "left",
      transition: "background var(--dur-fast), color var(--dur-fast)"
    }
  }, item.icon({
    size: 18
  }), item.label);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Topbar.jsx
try { (() => {
// Helix console — top bar (title, search, balance, deploy CTA). → window.HxTopbar
function HxTopbar({
  title,
  subtitle,
  onDeploy
}) {
  const {
    Button,
    IconButton,
    Badge
  } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flex: "none",
      boxSizing: "border-box",
      borderBottom: "1px solid var(--border-subtle)",
      background: "rgba(10,10,10,0.7)",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: "var(--text-strong)",
      lineHeight: 1.1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-faint)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 36,
      padding: "0 12px",
      width: 220,
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-inset)",
      color: "var(--text-faint)"
    }
  }, I.search({
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13
    }
  }, "Search\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      padding: "2px 6px",
      borderRadius: 4,
      border: "1px solid var(--border-subtle)"
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true
  }, "2.48M tokens"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    label: "Notifications"
  }, I.bell({
    size: 17
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    iconLeft: I.plus({
      size: 16
    }),
    onClick: onDeploy
  }, "Deploy")));
}
window.HxTopbar = HxTopbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
