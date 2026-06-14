// Helix console — Lucide-style icon set (1.8px stroke, round caps). → window.HxIcons
const HxIcons = (() => {
  const I = (children, props = {}) =>
    React.createElement(
      "svg",
      {
        width: props.size || 18,
        height: props.size || 18,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: props.style,
        ...props,
      },
      children
    );
  const p = (d) => React.createElement("path", { d });
  const g = (...els) => React.createElement(React.Fragment, null, ...els);

  return {
    grid: (pr) => I(g(p("M3 3h7v7H3z"), p("M14 3h7v7h-7z"), p("M14 14h7v7h-7z"), p("M3 14h7v7H3z")), pr),
    layers: (pr) => I(g(p("M12 2 2 7l10 5 10-5-10-5z"), p("m2 17 10 5 10-5"), p("m2 12 10 5 10-5")), pr),
    server: (pr) => I(g(React.createElement("rect",{x:2,y:3,width:20,height:7,rx:1.5}), React.createElement("rect",{x:2,y:14,width:20,height:7,rx:1.5}), p("M6 6.5h.01"), p("M6 17.5h.01")), pr),
    terminal: (pr) => I(g(p("m4 17 6-6-6-6"), p("M12 19h8")), pr),
    key: (pr) => I(g(React.createElement("circle",{cx:7.5,cy:15.5,r:4.5}), p("m10.5 12.5 8-8"), p("m16 5 3 3"), p("m13.5 7.5 3 3")), pr),
    card: (pr) => I(g(React.createElement("rect",{x:2,y:5,width:20,height:14,rx:2}), p("M2 10h20")), pr),
    plus: (pr) => I(g(p("M12 5v14"), p("M5 12h14")), pr),
    play: (pr) => I(React.createElement("polygon",{points:"6 3 20 12 6 21 6 3"}), pr),
    search: (pr) => I(g(React.createElement("circle",{cx:11,cy:11,r:8}), p("m21 21-4.3-4.3")), pr),
    bolt: (pr) => I(React.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}), pr),
    activity: (pr) => I(p("M22 12h-4l-3 9L9 3l-3 9H2"), pr),
    clock: (pr) => I(g(React.createElement("circle",{cx:12,cy:12,r:9}), p("M12 7v5l3 2")), pr),
    chevR: (pr) => I(p("m9 18 6-6-6-6"), pr),
    chevD: (pr) => I(p("m6 9 6 6 6-6"), pr),
    gear: (pr) => I(g(React.createElement("circle",{cx:12,cy:12,r:3}), p("M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z")), pr),
    copy: (pr) => I(g(React.createElement("rect",{x:9,y:9,width:13,height:13,rx:2}), p("M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1")), pr),
    bell: (pr) => I(g(p("M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"), p("M10.3 21a1.94 1.94 0 0 0 3.4 0")), pr),
    book: (pr) => I(g(p("M4 19.5A2.5 2.5 0 0 1 6.5 17H20"), p("M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z")), pr),
    globe: (pr) => I(g(React.createElement("circle",{cx:12,cy:12,r:9}), p("M3 12h18"), p("M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z")), pr),
    arrowUp: (pr) => I(g(p("M12 19V5"), p("m5 12 7-7 7 7")), pr),
    check: (pr) => I(p("M20 6 9 17l-5-5"), pr),
  };
})();
window.HxIcons = HxIcons;
