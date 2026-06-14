// Helix console — Endpoint detail screen. → window.HxEndpoint
function HxEndpoint({ endpoint, onBack }) {
  const { Card, Badge, Button, Tabs, Switch, Input, Select, ProgressBar } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const HxChart = window.HxChart;
  const [tab, setTab] = React.useState("metrics");
  const [autoscale, setAutoscale] = React.useState(true);
  const [logging, setLogging] = React.useState(true);
  const ep = endpoint || { name: "prod-llama-eu", model: "Llama 3.1 70B", region: "eu-west", status: "running", tone: "green" };

  const latency = [138, 142, 130, 155, 148, 162, 140, 158, 145, 150, 142, 168, 152, 142];
  const logs = [
    { t: "12:04:21", lvl: "INFO", msg: "request id=req_8f3a2 · 412 tok · 138ms" },
    { t: "12:04:21", lvl: "INFO", msg: "request id=req_8f3a1 · 388 tok · 142ms" },
    { t: "12:04:20", lvl: "WARN", msg: "replica eu-west-2 cold start 1.2s" },
    { t: "12:04:19", lvl: "INFO", msg: "request id=req_8f39f · 256 tok · 119ms" },
    { t: "12:04:18", lvl: "INFO", msg: "autoscale: +1 replica (load 0.82)" },
    { t: "12:04:17", lvl: "INFO", msg: "request id=req_8f39e · 502 tok · 171ms" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "var(--text-faint)", fontFamily: "var(--font-ui)", fontSize: 13, cursor: "pointer", padding: 0, width: "fit-content" }}>
        <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}>{I.chevR({ size: 15 })}</span> Endpoints
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--green-soft)", border: "1px solid var(--green-line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-primary)" }}>{I.server({ size: 22 })}</div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 500, color: "var(--text-strong)" }}>{ep.name}</span>
            <Badge tone={ep.tone || "green"} dot>{ep.status || "running"}</Badge>
          </div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-faint)", marginTop: 3 }}>{ep.model} · {ep.region}</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <Button variant="secondary" size="md" iconLeft={I.terminal({ size: 15 })}>Test</Button>
          <Button variant="secondary" size="md" iconLeft={I.copy({ size: 15 })}>Copy URL</Button>
        </div>
      </div>

      <Tabs value={tab} onChange={setTab} items={[
        { value: "metrics", label: "Metrics" },
        { value: "logs", label: "Logs", badge: 6 },
        { value: "settings", label: "Settings" },
      ]} />

      {tab === "metrics" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {[["Requests/s", "412"], ["p95 latency", "168ms"], ["Replicas", "3"], ["Errors (1h)", "0.02%"]].map(([k, v]) => (
              <Card key={k} padding={16}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-faint)" }}>{k}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "var(--text-strong)", marginTop: 8 }}>{v}</div>
              </Card>
            ))}
          </div>
          <Card padding={20}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "var(--text-strong)", marginBottom: 16 }}>Latency · p50 (ms)</div>
            <HxChart data={latency} height={200} />
          </Card>
        </div>
      )}

      {tab === "logs" && (
        <Card padding={0}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderBottom: "1px solid var(--border-subtle)" }}>
            <Badge tone="green" dot>live</Badge>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>tailing eu-west · 6 lines</span>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, lineHeight: 1.9, padding: "12px 16px", background: "var(--surface-inset)" }}>
            {logs.map((l, i) => (
              <div key={i} style={{ display: "flex", gap: 12 }}>
                <span style={{ color: "var(--text-faint)" }}>{l.t}</span>
                <span style={{ color: l.lvl === "WARN" ? "var(--warning)" : "var(--green-accent)", width: 38, flex: "none" }}>{l.lvl}</span>
                <span style={{ color: "var(--text-body)" }}>{l.msg}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === "settings" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card padding={20}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "var(--text-strong)", marginBottom: 16 }}>Scaling</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Switch checked={autoscale} onChange={setAutoscale} label="Autoscale replicas" />
              <Input label="Min replicas" defaultValue="1" size="sm" />
              <Input label="Max replicas" defaultValue="8" size="sm" />
              <Select label="GPU type" options={["A100 80GB", "H100 80GB", "L40S 48GB"]} size="sm" />
            </div>
          </Card>
          <Card padding={20}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "var(--text-strong)", marginBottom: 16 }}>General</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Switch checked={logging} onChange={setLogging} label="Request logging" />
              <Input label="Endpoint name" defaultValue={ep.name} mono size="sm" />
              <Select label="Region" options={["eu-west", "us-east", "ap-south"]} size="sm" />
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <Button variant="primary" size="sm">Save changes</Button>
                <Button variant="danger" size="sm">Delete</Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
window.HxEndpoint = HxEndpoint;
