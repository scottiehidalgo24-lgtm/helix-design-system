// Helix console charts — SVG area chart + sparkline. → window.HxChart, window.HxSpark
function HxChart({ data, height = 200, accent = "#4ade80" }) {
  const w = 760, h = height, padB = 26, padT = 12, padL = 4, padR = 4;
  const max = Math.max(...data) * 1.15;
  const min = 0;
  const n = data.length;
  const x = (i) => padL + (i / (n - 1)) * (w - padL - padR);
  const y = (v) => padT + (1 - (v - min) / (max - min)) * (h - padT - padB);
  const line = data.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L ${x(n - 1).toFixed(1)} ${h - padB} L ${x(0).toFixed(1)} ${h - padB} Z`;
  const gid = "hxg-" + Math.round(max);
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return React.createElement(
    "svg",
    { viewBox: `0 0 ${w} ${h}`, width: "100%", height, preserveAspectRatio: "none", style: { display: "block" } },
    React.createElement("defs", null,
      React.createElement("linearGradient", { id: gid, x1: 0, y1: 0, x2: 0, y2: 1 },
        React.createElement("stop", { offset: "0", stopColor: accent, stopOpacity: 0.35 }),
        React.createElement("stop", { offset: "1", stopColor: accent, stopOpacity: 0 })
      )
    ),
    // gridlines
    [0.25, 0.5, 0.75].map((g, i) =>
      React.createElement("line", { key: i, x1: padL, x2: w - padR, y1: padT + g * (h - padT - padB), y2: padT + g * (h - padT - padB), stroke: "#26282c", strokeWidth: 1 })
    ),
    React.createElement("path", { d: area, fill: `url(#${gid})` }),
    React.createElement("path", { d: line, fill: "none", stroke: accent, strokeWidth: 2.5, strokeLinejoin: "round", strokeLinecap: "round", style: { filter: "drop-shadow(0 0 6px rgba(74,222,128,.4))" } }),
    React.createElement("circle", { cx: x(n - 1), cy: y(data[n - 1]), r: 4, fill: accent, style: { filter: "drop-shadow(0 0 6px rgba(74,222,128,.7))" } }),
    labels.map((lb, i) =>
      React.createElement("text", { key: lb, x: x(Math.round((i / 6) * (n - 1))), y: h - 8, fill: "#6b7077", fontSize: 11, fontFamily: "JetBrains Mono, monospace", textAnchor: "middle" }, lb)
    )
  );
}

function HxSpark({ data, accent = "#4ade80", width = 110, height = 34 }) {
  const max = Math.max(...data), min = Math.min(...data);
  const n = data.length;
  const x = (i) => (i / (n - 1)) * width;
  const y = (v) => height - 3 - ((v - min) / (max - min || 1)) * (height - 6);
  const line = data.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  return React.createElement("svg", { width, height, style: { display: "block" } },
    React.createElement("path", { d: line, fill: "none", stroke: accent, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  );
}
window.HxChart = HxChart;
window.HxSpark = HxSpark;
