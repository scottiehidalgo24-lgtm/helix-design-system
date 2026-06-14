// Helix console — Models catalog screen. → window.HxModels
function HxModels({ onDeploy }) {
  const { Card, Badge, Button, Tabs } = window.HelixDesignSystem_6e1999;
  const I = window.HxIcons;
  const [tab, setTab] = React.useState("all");

  const models = [
    { name: "Llama 3.1 70B", maker: "Meta", type: "chat", params: "70B", ctx: "128K", price: "0.40", featured: true, tags: ["instruct", "tools"] },
    { name: "Mixtral 8x7B", maker: "Mistral", type: "chat", params: "47B", ctx: "32K", price: "0.24", tags: ["MoE", "fast"] },
    { name: "Llama 3.1 8B", maker: "Meta", type: "chat", params: "8B", ctx: "128K", price: "0.06", tags: ["fast", "cheap"] },
    { name: "BGE-large", maker: "BAAI", type: "embedding", params: "335M", ctx: "512", price: "0.01", tags: ["retrieval"] },
    { name: "Llava 1.6", maker: "Microsoft", type: "vision", params: "34B", ctx: "4K", price: "0.30", tags: ["multimodal"] },
    { name: "Whisper v3", maker: "OpenAI", type: "audio", params: "1.5B", ctx: "—", price: "0.02", tags: ["transcribe"] },
  ];
  const shown = tab === "all" ? models : models.filter((m) => m.type === tab);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Tabs value={tab} onChange={setTab} items={[
        { value: "all", label: "All models" },
        { value: "chat", label: "Chat" },
        { value: "embedding", label: "Embeddings" },
        { value: "vision", label: "Vision" },
        { value: "audio", label: "Audio" },
      ]} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {shown.map((m) => (
          <Card key={m.name} glow={m.featured} interactive padding={18}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: "var(--green-soft)", border: "1px solid var(--green-line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-primary)" }}>
                {(m.type === "embedding" ? I.layers : m.type === "vision" ? I.globe : m.type === "audio" ? I.activity : I.bolt)({ size: 19 })}
              </div>
              {m.featured && <Badge tone="green" variant="soft">Popular</Badge>}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", color: "var(--text-strong)" }}>{m.name}</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-faint)", marginTop: 2 }}>{m.maker}</div>

            <div style={{ display: "flex", gap: 6, margin: "12px 0 14px", flexWrap: "wrap" }}>
              <Badge tone="neutral" variant="outline" size="sm">{m.params}</Badge>
              <Badge tone="neutral" variant="outline" size="sm">{m.ctx} ctx</Badge>
              {m.tags.map((t) => <Badge key={t} tone="neutral" variant="soft" size="sm">{t}</Badge>)}
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--ink-700)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>
                <span style={{ color: "var(--green-primary)" }}>${m.price}</span> / 1M tok
              </div>
              <Button size="sm" variant={m.featured ? "primary" : "secondary"} iconLeft={I.play({ size: 14 })} onClick={() => onDeploy && onDeploy(m)}>Deploy</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
window.HxModels = HxModels;
