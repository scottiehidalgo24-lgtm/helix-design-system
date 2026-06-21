"use client";

import { useState, useEffect, useCallback } from "react";
import { Bot, Search, X, Sparkles, Zap, BarChart3, Code2, Lightbulb, Headphones, Loader2, CheckCircle2, AlertTriangle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const API_BASE = "/v1/agents"; // same-origin, Nginx proxies to port 3005

interface BridgeAgent {
  id: string;
  name: string;
  description: string;
  category: string;
  tokens_per_call: number;
  provider: string;
  capabilities: string[];
}

interface AgentRunResult {
  agent_id: string;
  agent_name: string;
  prompt: string;
  response: string;
  tokens_used: number;
  cost_estimate_usd: number;
  elapsed_ms: number;
}

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  tokensPerCall: number;
  provider: string;
  active: boolean;
  icon: typeof Sparkles;
  color: string;
}

const iconMap: Record<string, typeof Sparkles> = {
  "scribe-001": Sparkles,
  "analyst-001": BarChart3,
  "support-001": Headphones,
  "coder-001": Code2,
  "strategist-001": Lightbulb,
};

const colorMap: Record<string, string> = {
  "scribe-001": "#4ade80",
  "analyst-001": "#4aa8de",
  "support-001": "#f6c454",
  "coder-001": "#c084fc",
  "strategist-001": "#f0506b",
};

// Fallback static catalog (used when Bridge is unreachable)
const FALLBACK_AGENTS: Agent[] = [
  { id: "scribe-001", name: "Scribe", description: "Scrive testi, post social, email marketing, descrizioni prodotto. Il tuo copywriter AI sempre disponibile.", category: "Contenuti", tokensPerCall: 25, provider: "Helix", active: false, icon: Sparkles, color: "#4ade80" },
  { id: "analyst-001", name: "Analyst", description: "Analizza dati, crea report, trova insight da CSV e fogli di calcolo. Il tuo data scientist personale.", category: "Analisi", tokensPerCall: 50, provider: "Helix", active: false, icon: BarChart3, color: "#4aa8de" },
  { id: "support-001", name: "Support", description: "Risponde a clienti, gestisce FAQ automatiche, smista reclami. Assistenza clienti 24/7.", category: "Business", tokensPerCall: 15, provider: "Helix", active: false, icon: Headphones, color: "#f6c454" },
  { id: "coder-001", name: "Coder", description: "Scrive e rivede codice, crea script rapidi, aiuta con debug. Il tuo pair programmer AI.", category: "Sviluppo", tokensPerCall: 75, provider: "Helix", active: false, icon: Code2, color: "#c084fc" },
  { id: "strategist-001", name: "Strategist", description: "Consulenza marketing, piani editoriali, strategia contenuti. Il tuo chief marketing officer AI.", category: "Marketing", tokensPerCall: 60, provider: "Helix", active: false, icon: Lightbulb, color: "#f0506b" },
];

const categories = ["Tutti", "Contenuti", "Analisi", "Business", "Sviluppo", "Marketing"];
const providers = ["Tutti", "Helix", "Community"];

export default function AgentCatalog() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [bridgeStatus, setBridgeStatus] = useState<"ok" | "offline" | "checking">("checking");
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Tutti");
  const [providerFilter, setProviderFilter] = useState("Tutti");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activating, setActivating] = useState<string | null>(null);
  const [runResult, setRunResult] = useState<AgentRunResult | null>(null);
  const [runError, setRunError] = useState<string | null>(null);

  // Fetch real agents from Bridge API
  const fetchAgents = useCallback(async () => {
    setLoading(true);
    setBridgeStatus("checking");
    try {
      const res = await fetch(`${API_BASE}/`, {
        signal: AbortSignal.timeout(5000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const mapped: Agent[] = data.agents.map((a: BridgeAgent) => ({
        id: a.id,
        name: a.name,
        description: a.description,
        category: a.category,
        tokensPerCall: a.tokens_per_call,
        provider: a.provider,
        active: false,
        icon: iconMap[a.id] || Bot,
        color: colorMap[a.id] || "#4ade80",
      }));
      setAgents(mapped);
      setBridgeStatus("ok");
    } catch {
      console.warn("Bridge unreachable, using fallback catalog");
      setAgents(FALLBACK_AGENTS);
      setBridgeStatus("offline");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  const filtered = agents.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(filter.toLowerCase()) ||
      a.description.toLowerCase().includes(filter.toLowerCase());
    const matchCat = categoryFilter === "Tutti" || a.category === categoryFilter;
    const matchProv = providerFilter === "Tutti" || a.provider === providerFilter;
    return matchSearch && matchCat && matchProv;
  });

  const handleActivate = async (agent: Agent) => {
    setActivating(agent.id);
    setRunResult(null);
    setRunError(null);

    try {
      const res = await fetch(`${API_BASE}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agent_id: agent.id,
          prompt: "Dimostra le tue capacità con un esempio concreto di quello che sai fare.",
          max_tokens: 600,
          temperature: 0.7,
        }),
        signal: AbortSignal.timeout(30000),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: `HTTP ${res.status}` }));
        throw new Error(err.detail || `HTTP ${res.status}`);
      }

      const result: AgentRunResult = await res.json();
      setRunResult(result);

      // Mark agent as active
      setAgents((prev) =>
        prev.map((a) => (a.id === agent.id ? { ...a, active: true } : a))
      );
    } catch (err: any) {
      setRunError(err.message || "Errore durante l'attivazione");
    } finally {
      setActivating(null);
    }
  };

  const testPrompts: Record<string, string> = {
    "scribe-001": "Scrivi un post LinkedIn in italiano per promuovere un SaaS B2B.",
    "analyst-001": "Analizza questi dati: 120, 135, 118, 142, 156, 149, 162, 181, 173, 195, 210, 320. C'è una tendenza?",
    "support-001": "Un cliente è arrabbiato perché il suo ordine è in ritardo di 7 giorni. Rispondi.",
    "coder-001": "Scrivi una funzione Python che trova i duplicati in una lista.",
    "strategist-001": "Piano marketing per un SaaS B2B con $50k ARR e budget $2k/mese.",
  };

  const [onboardingDismissed, setOnboardingDismissed] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("helix_onboarded")) {
      setOnboardingDismissed(false);
    }
  }, []);

  const dismissOnboardingBanner = () => {
    localStorage.setItem("helix_onboarded", "1");
    setOnboardingDismissed(true);
  };

  return (
    <>
      {/* Onboarding banner for first-time users */}
      {!loading && !onboardingDismissed && (
        <div className="glass-panel mb-8 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[var(--accent)]/5 border border-[var(--green-line)]">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/15 ring-1 ring-[var(--green-line)]">
              <Sparkles className="h-5 w-5 text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-strong)]">Prima volta su Helix?</h3>
              <p className="text-[13px] text-[var(--text-muted)] mt-1 max-w-lg leading-relaxed">
                Segui la guida rapida in 3 passi: scegli un agente, attivalo, fai la prima chiamata. Ci vogliono 2 minuti.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/onboarding" className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] transition-all whitespace-nowrap">
              Inizia onboarding
            </Link>
            <button onClick={dismissOnboardingBanner} className="rounded-lg px-3 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-body)] hover:bg-[var(--surface-hover)] transition-all">
              <X className="h-4 w-4"/>
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-strong)]">
            Catalogo Agenti
          </h1>
          {bridgeStatus === "checking" && (
            <span className="flex items-center gap-1 text-xs font-mono text-[var(--text-faint)] bg-[var(--surface-raised)] px-2 py-0.5 rounded-full">
              <Loader2 className="h-3 w-3 animate-spin" />
              connessione...
            </span>
          )}
          {bridgeStatus === "ok" && (
            <span className="flex items-center gap-1 text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="h-3 w-3" />
              live
            </span>
          )}
          {bridgeStatus === "offline" && (
            <span className="flex items-center gap-1 text-xs font-mono text-[var(--text-muted)] bg-[var(--surface-raised)] px-2 py-0.5 rounded-full cursor-pointer hover:bg-[var(--surface-hover)]" onClick={fetchAgents}>
              <AlertTriangle className="h-3 w-3" />
              offline · riprova
            </span>
          )}
        </div>
        <p className="text-[15px] text-[var(--text-muted)] max-w-xl leading-relaxed">
          Scegli tra gli agenti Helix e quelli creati dalla community
        </p>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 animate-pulse">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-[var(--surface-raised)]" />
                <div className="h-5 w-16 rounded-full bg-[var(--surface-raised)]" />
              </div>
              <div className="h-4 w-24 bg-[var(--surface-raised)] rounded mb-2" />
              <div className="h-3 w-full bg-[var(--surface-raised)] rounded mb-1" />
              <div className="h-3 w-2/3 bg-[var(--surface-raised)] rounded mb-4" />
              <div className="flex gap-2">
                <div className="h-3 w-16 bg-[var(--surface-raised)] rounded" />
                <div className="h-3 w-12 bg-[var(--surface-raised)] rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && (
        <>
          {/* Filter bar */}
          <div className="mb-8 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-faint)]" />
              <input
                type="text"
                placeholder="Cerca agenti..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] py-2.5 pl-9 pr-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] focus:border-transparent transition-shadow"
              />
              {filter && (
                <button
                  onClick={() => setFilter("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-faint)] hover:text-[var(--text-body)]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] px-3.5 py-2.5 text-sm text-[var(--text-body)] appearance-none cursor-pointer hover:bg-[var(--surface-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] transition-all bg-no-repeat bg-[right_0.75rem_center]"
              style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7077' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundSize: "1.25rem" }}
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={providerFilter}
              onChange={(e) => setProviderFilter(e.target.value)}
              className="rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] px-3.5 py-2.5 text-sm text-[var(--text-body)] appearance-none cursor-pointer hover:bg-[var(--surface-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] transition-all bg-no-repeat bg-[right_0.75rem_center]"
              style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7077' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundSize: "1.25rem" }}
            >
              {providers.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            {filtered.length < agents.length && (
              <span className="self-center text-xs text-[var(--text-faint)] ml-auto shrink-0 font-mono">
                {filtered.length} di {agents.length}
              </span>
            )}
          </div>

          {/* Agent grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((agent) => {
              const IconComponent = agent.icon;
              return (
                <button
                  key={agent.id}
                  onClick={() => {
                    setSelectedAgent(agent);
                    setRunResult(null);
                    setRunError(null);
                  }}
                  className="group flex flex-col p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] text-left transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]"
                >
                  {/* Top row: icon + badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${agent.color}14`, boxShadow: `inset 0 0 0 1px ${agent.color}28` }}
                    >
                      <IconComponent className="h-5 w-5" style={{ color: agent.color }} />
                    </div>
                    <span className="shrink-0 rounded-full bg-[var(--surface-raised)] px-3 py-1 text-[11px] font-mono font-medium text-[var(--text-muted)] ring-1 ring-[var(--border-subtle)]">
                      {agent.tokensPerCall} tk/call
                    </span>
                  </div>

                  {/* Agent info */}
                  <div className="flex-1">
                    <h3 className="text-[15px] font-semibold text-[var(--text-strong)] group-hover:text-[var(--accent)] transition-colors mb-1">
                      {agent.name}
                    </h3>
                    <p className="text-[13px] text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-3">
                      {agent.description}
                    </p>
                  </div>

                  {/* Bottom metadata */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-[var(--text-faint)] uppercase tracking-wider">
                      {agent.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
                    <span className="text-[11px] text-[var(--text-faint)] font-mono">
                      {agent.provider}
                    </span>
                    {agent.active && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                        <span className="text-[11px] font-medium text-[var(--accent)]">
                          Attivo
                        </span>
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-hover)] mb-5">
                <Search className="h-6 w-6 text-[var(--text-faint)]" />
              </div>
              <p className="text-sm font-medium text-[var(--text-muted)]">Nessun agente trovato</p>
              <p className="text-xs text-[var(--text-faint)] mt-1.5">
                Prova a cambiare i filtri o cercare con un altro termine
              </p>
              <button
                onClick={() => { setFilter(""); setCategoryFilter("Tutti"); setProviderFilter("Tutti"); }}
                className="mt-4 text-xs font-medium text-[var(--accent)] hover:underline"
              >
                Reimposta tutti i filtri
              </button>
            </div>
          )}

          {/* Detail modal */}
          {selectedAgent && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              onClick={() => { setSelectedAgent(null); setRunResult(null); setRunError(null); }}
            >
              <div
                className="glass-panel-lg w-full max-w-lg p-6 max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${selectedAgent.color}14`, boxShadow: `inset 0 0 0 1px ${selectedAgent.color}28` }}
                    >
                      {(() => {
                        const I = selectedAgent.icon;
                        return <I className="h-6 w-6" style={{ color: selectedAgent.color }} />;
                      })()}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[var(--text-strong)]">
                        {selectedAgent.name}
                      </h2>
                      <p className="text-xs text-[var(--text-faint)] font-mono mt-0.5">
                        {selectedAgent.provider} · {selectedAgent.category}
                        {selectedAgent.active && " · Attivo"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => { setSelectedAgent(null); setRunResult(null); setRunError(null); }}
                    className="rounded-lg p-2 text-[var(--text-faint)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-body)] transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-body)] leading-relaxed mb-6">
                  {selectedAgent.description}
                </p>

                {/* Pricing cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="rounded-lg bg-[var(--surface-raised)] p-3.5 ring-1 ring-[var(--border-subtle)]">
                    <p className="text-[11px] text-[var(--text-faint)] uppercase tracking-wider mb-1">Costo</p>
                    <p className="text-base font-mono font-semibold text-[var(--accent)]">
                      {selectedAgent.tokensPerCall} tk
                    </p>
                    <p className="text-[11px] text-[var(--text-faint)] mt-0.5">per chiamata</p>
                  </div>
                  <div className="rounded-lg bg-[var(--surface-raised)] p-3.5 ring-1 ring-[var(--border-subtle)]">
                    <p className="text-[11px] text-[var(--text-faint)] uppercase tracking-wider mb-1">Tasso</p>
                    <p className="text-base font-mono font-semibold text-[var(--text-body)]">
                      1 USD
                    </p>
                    <p className="text-[11px] text-[var(--text-faint)] mt-0.5">= 1.000 token</p>
                  </div>
                </div>

                {/* Run result display */}
                {runResult && (
                  <div className="mb-6 rounded-lg bg-[var(--surface-raised)] ring-1 ring-[var(--border-subtle)] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-[var(--accent)]/8 border-b border-[var(--border-subtle)]">
                      <span className="text-xs font-semibold text-[var(--accent)] flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Demo completata
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-faint)]">
                        {runResult.tokens_used} token · {(runResult.elapsed_ms / 1000).toFixed(1)}s · ${runResult.cost_estimate_usd.toFixed(4)}
                      </span>
                    </div>
                    <div className="p-4 max-h-60 overflow-y-auto">
                      <p className="text-xs text-[var(--text-body)] leading-relaxed whitespace-pre-wrap">
                        {runResult.response}
                      </p>
                    </div>
                  </div>
                )}

                {/* Run error display */}
                {runError && (
                  <div className="mb-6 rounded-lg bg-[var(--surface-raised)] ring-1 ring-red-500/20 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                      <span className="text-xs font-semibold text-red-400">Errore</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">{runError}</p>
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={() => handleActivate(selectedAgent)}
                  disabled={activating === selectedAgent.id}
                  className="w-full rounded-lg bg-[var(--accent)] py-3 text-sm font-semibold text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(74,222,128,0.1)]"
                >
                  {activating === selectedAgent.id ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Attivazione...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4" />
                      {selectedAgent.active ? "Testa di nuovo" : "Attiva Agente"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
