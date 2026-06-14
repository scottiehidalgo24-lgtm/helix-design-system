// Helix console — app shell, routing, deploy toast. → window.HxApp
function HxApp() {
  const { Card, Badge, Button, Input, ProgressBar, IconButton } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const [screen, setScreen] = React.useState("overview");
  const [endpoint, setEndpoint] = React.useState(null);
  const [toast, setToast] = React.useState(null);

  const fireToast = (msg) => {
    setToast(msg);
    clearTimeout(window.__hxT);
    window.__hxT = setTimeout(() => setToast(null), 2600);
  };
  const deploy = (m) => fireToast(`Deploying ${m ? m.name : "model"}…`);
  const openEndpoint = (e) => { setEndpoint(e); setScreen("endpoint"); };

  const titles = {
    overview: ["Overview", "Welcome back, Dana"],
    models: ["Models", "Deploy from the catalog"],
    endpoints: ["Endpoints", "Your running deployments"],
    playground: ["Playground", "Test prompts against any endpoint"],
    keys: ["API Keys", "Manage access to your account"],
    billing: ["Billing", "Prepaid tokens · acme-labs"],
    endpoint: [endpoint ? endpoint.name : "Endpoint", "Deployment detail"],
  };
  const [title, subtitle] = titles[screen] || titles.overview;

  let body;
  if (screen === "overview") body = <window.HxOverview onOpenEndpoint={openEndpoint} />;
  else if (screen === "models") body = <window.HxModels onDeploy={deploy} />;
  else if (screen === "endpoints") body = <window.HxOverview onOpenEndpoint={openEndpoint} />;
  else if (screen === "endpoint") body = <window.HxEndpoint endpoint={endpoint} onBack={() => setScreen("overview")} />;
  else if (screen === "playground") body = <Playground />;
  else if (screen === "keys") body = <Keys />;
  else if (screen === "billing") body = <Billing />;

  function Playground() {
    const [val, setVal] = React.useState("Explain DNA transcription in two sentences.");
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 16 }}>
        <Card padding={0}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 10 }}>
            <Badge tone="green" dot>prod-llama-eu</Badge>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>Llama 3.1 70B</span>
          </div>
          <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14, minHeight: 320 }}>
            <div style={{ alignSelf: "flex-end", maxWidth: "75%", background: "var(--green-soft)", border: "1px solid var(--green-line)", borderRadius: "var(--radius-lg)", padding: "10px 14px", fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-strong)" }}>Explain DNA transcription in two sentences.</div>
            <div style={{ alignSelf: "flex-start", maxWidth: "80%", background: "var(--surface-inset)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "10px 14px", fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.55 }}>
              Transcription copies a gene's DNA sequence into messenger RNA, with RNA polymerase reading the template strand and assembling complementary nucleotides. The resulting mRNA then carries that genetic instruction out of the nucleus to be translated into protein.
              <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>62 tokens · 410ms</div>
            </div>
          </div>
          <div style={{ padding: 14, borderTop: "1px solid var(--border-subtle)", display: "flex", gap: 10 }}>
            <div style={{ flex: 1 }}><Input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Send a message…" /></div>
            <Button variant="primary" iconLeft={I.play({ size: 15 })}>Run</Button>
          </div>
        </Card>
        <Card padding={18}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 500, color: "var(--text-strong)", marginBottom: 16 }}>Parameters</div>
          {[["Temperature", "0.7"], ["Max tokens", "512"], ["Top-p", "0.95"]].map(([k, v]) => (
            <div key={k} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-body)", marginBottom: 6 }}><span>{k}</span><span style={{ fontFamily: "var(--font-mono)", color: "var(--green-primary)" }}>{v}</span></div>
              <ProgressBar value={k === "Temperature" ? 35 : k === "Max tokens" ? 50 : 95} height={5} tone="neutral" />
            </div>
          ))}
        </Card>
      </div>
    );
  }

  function Keys() {
    const keys = [
      { name: "production", prefix: "sk-prod-9f3a", created: "Apr 2, 2026", last: "2 min ago" },
      { name: "staging", prefix: "sk-stag-71be", created: "Mar 18, 2026", last: "1 day ago" },
      { name: "ci-pipeline", prefix: "sk-ci-2c8d", created: "Feb 9, 2026", last: "12 days ago" },
    ];
    return (
      <Card padding={0}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "var(--text-strong)" }}>Secret keys</span>
          <Button size="sm" variant="primary" iconLeft={I.plus({ size: 15 })}>Create key</Button>
        </div>
        {keys.map((k, i) => (
          <div key={k.name} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr 1fr 1fr 36px", gap: 12, alignItems: "center", padding: "14px 20px", borderBottom: i < keys.length - 1 ? "1px solid var(--ink-700)" : "none" }}>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-strong)" }}>{k.name}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>{k.prefix}••••••••</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>{k.created}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>used {k.last}</span>
            <IconButton variant="ghost" label="Copy">{I.copy({ size: 16 })}</IconButton>
          </div>
        ))}
      </Card>
    );
  }

  function Billing() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card glow padding={22}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-faint)" }}>Prepaid balance</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-strong)", marginTop: 6 }}>2,480,000<span style={{ fontSize: 18, color: "var(--text-faint)", fontWeight: 500 }}> tokens</span></div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>≈ $992 remaining · burning ~184K/day</div>
            </div>
            <Button variant="primary" iconLeft={I.bolt({ size: 16 })}>Top up</Button>
          </div>
          <div style={{ marginTop: 18 }}><ProgressBar value={50} height={8} /></div>
        </Card>
        <Card padding={0}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "var(--text-strong)" }}>Recent invoices</div>
          {[["INV-2026-06", "Jun 1, 2026", "$1,000.00", "paid"], ["INV-2026-05", "May 1, 2026", "$500.00", "paid"], ["INV-2026-04", "Apr 1, 2026", "$500.00", "paid"]].map(([id, d, amt, st], i) => (
            <div key={id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 100px", gap: 12, alignItems: "center", padding: "14px 20px", borderBottom: i < 2 ? "1px solid var(--ink-700)" : "none" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-strong)" }}>{id}</span>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-faint)" }}>{d}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-body)" }}>{amt}</span>
              <Badge tone="success" variant="soft">{st}</Badge>
            </div>
          ))}
        </Card>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden", background: "var(--bg-app)" }}>
      <window.HxSidebar current={screen === "endpoint" ? "endpoints" : screen} onNav={(s) => { setScreen(s); }} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <window.HxTopbar title={title} subtitle={subtitle} onDeploy={() => setScreen("models")} />
        <main style={{ flex: 1, overflowY: "auto", padding: "26px 28px", background: "radial-gradient(120% 60% at 100% -10%, rgba(74,222,128,0.05), transparent 50%), var(--bg-app)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>{body}</div>
        </main>
      </div>
      {toast && (
        <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", background: "var(--surface-card)", border: "1px solid var(--green-line)", borderRadius: "var(--radius-md)", boxShadow: "var(--glow-md), var(--shadow-lg)", fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-strong)", zIndex: 50 }}>
          <span style={{ color: "var(--green-primary)", display: "inline-flex" }}>{I.check({ size: 17 })}</span>{toast}
        </div>
      )}
    </div>
  );
}
window.HxApp = HxApp;
