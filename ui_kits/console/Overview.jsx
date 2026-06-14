// Helix console — Overview screen. → window.HxOverview
function HxOverview({ onOpenEndpoint }) {
  const { Card, Badge, ProgressBar } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const HxChart = window.HxChart;

  const usage = [120, 140, 135, 180, 175, 210, 230, 220, 260, 240, 300, 290, 340, 380];
  const stats = [
    { label: "Token balance", value: "2.48M", sub: "of 5M prepaid", icon: I.bolt, meter: 50 },
    { label: "Requests today", value: "184,209", sub: "+12.4% vs yesterday", icon: I.activity, up: true },
    { label: "Active endpoints", value: "6", sub: "across 3 regions", icon: I.server },
    { label: "Avg latency", value: "142ms", sub: "p95 · last 1h", icon: I.clock },
  ];
  const endpoints = [
    { name: "prod-llama-eu", model: "Llama 3.1 70B", region: "eu-west", status: "running", tone: "green", rps: "412" },
    { name: "mixtral-chat", model: "Mixtral 8x7B", region: "us-east", status: "running", tone: "green", rps: "188" },
    { name: "embed-search", model: "BGE-large", region: "eu-west", status: "scaling", tone: "warning", rps: "57" },
    { name: "vision-beta", model: "Llava 1.6", region: "ap-south", status: "failed", tone: "danger", rps: "0" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {stats.map((s) => (
          <Card key={s.label} padding={18}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-faint)" }}>{s.label}</span>
              <span style={{ color: "var(--green-primary)", display: "inline-flex" }}>{s.icon({ size: 17 })}</span>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-strong)", margin: "10px 0 4px" }}>{s.value}</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: s.up ? "var(--green-primary)" : "var(--text-faint)", display: "flex", alignItems: "center", gap: 4 }}>
              {s.up && I.arrowUp({ size: 13 })}{s.sub}
            </div>
            {s.meter != null && <div style={{ marginTop: 12 }}><ProgressBar value={s.meter} height={6} /></div>}
          </Card>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16 }}>
        <Card padding={20}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "var(--text-strong)" }}>Token consumption</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-faint)", marginTop: 3 }}>Last 14 days</div>
            </div>
            <Badge tone="neutral" variant="outline">tokens / day</Badge>
          </div>
          <HxChart data={usage} height={210} />
        </Card>

        <Card padding={20}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "var(--text-strong)", marginBottom: 4 }}>Plan usage</div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-faint)", marginBottom: 18 }}>Prepaid · renews Jul 1</div>
          {[
            { k: "Tokens", v: 50, t: "green", d: "2.48M / 5M" },
            { k: "GPU hours", v: 72, t: "green", d: "144 / 200" },
            { k: "Storage", v: 88, t: "warning", d: "44 / 50 GB" },
            { k: "Seats", v: 30, t: "neutral", d: "3 / 10" },
          ].map((r) => (
            <div key={r.k} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-body)" }}>{r.k}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>{r.d}</span>
              </div>
              <ProgressBar value={r.v} tone={r.t} height={7} />
            </div>
          ))}
        </Card>
      </div>

      <Card padding={0}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "var(--text-strong)" }}>Active endpoints</div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>6 total</span>
        </div>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1.2fr 0.9fr 0.7fr 40px", gap: 12, padding: "10px 20px", fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-faint)", borderBottom: "1px solid var(--ink-700)" }}>
            <span>Endpoint</span><span>Model</span><span>Region</span><span>Req/s</span><span></span>
          </div>
          {endpoints.map((e, i) => (
            <button key={e.name} onClick={() => onOpenEndpoint && onOpenEndpoint(e)}
              style={{ width: "100%", display: "grid", gridTemplateColumns: "1.4fr 1.2fr 0.9fr 0.7fr 40px", gap: 12, alignItems: "center", padding: "14px 20px", background: "transparent", border: "none", borderBottom: i < endpoints.length - 1 ? "1px solid var(--ink-700)" : "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-ui)" }}
              onMouseEnter={(ev) => (ev.currentTarget.style.background = "var(--surface-hover)")}
              onMouseLeave={(ev) => (ev.currentTarget.style.background = "transparent")}>
              <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <Badge tone={e.tone} dot>{e.status}</Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-strong)" }}>{e.name}</span>
              </span>
              <span style={{ fontSize: 13, color: "var(--text-body)" }}>{e.model}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>{e.region}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-body)" }}>{e.rps}</span>
              <span style={{ color: "var(--text-faint)", display: "flex", justifyContent: "flex-end" }}>{I.chevR({ size: 16 })}</span>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
window.HxOverview = HxOverview;
