"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Wallet,
  Zap,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Store,
  PlusCircle,
  BarChart3,
  Headphones,
  Lightbulb,
  Code2,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const STEPS = [
  { id: 1, title: "Scegli un Agente", subtitle: "Esplora il catalogo e trova l'agente che fa per te", icon: Store },
  { id: 2, title: "Attiva l'Agente", subtitle: "Un click e il tuo agente è operativo, con wallet connesso", icon: Zap },
  { id: 3, title: "Prima Chiamata", subtitle: "Usa subito il tuo agente e vedi il risultato in tempo reale", icon: Bot },
];

const FEATURED_AGENTS = [
  { id: "scribe", name: "Scribe", description: "Copywriter AI — testi, post, email", category: "Contenuti", tk: 25, icon: Sparkles, color: "#4ade80" },
  { id: "analyst", name: "Analyst", description: "Data scientist personale — report e insight", category: "Analisi", tk: 50, icon: BarChart3, color: "#4aa8de" },
  { id: "support", name: "Support", description: "Assistenza clienti 24/7 — FAQ e reclami", category: "Business", tk: 15, icon: Headphones, color: "#f6c454" },
  { id: "coder", name: "Coder", description: "Pair programmer AI — scrive, rivede e debugga codice", category: "Sviluppo", tk: 75, icon: Code2, color: "#8b5cf6" },
  { id: "strategist", name: "Strategist", description: "Consulenza marketing e piani editoriali su misura", category: "Marketing", tk: 60, icon: Target, color: "#f59e0b" },
];

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [activated, setActivated] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [activating, setActivating] = useState(false);

  const currentStepData = STEPS[step - 1];

  const handleActivate = async () => {
    setActivating(true);
    await new Promise((r) => setTimeout(r, 800));
    setActivating(false);
    setActivated(true);
  };

  const handleFirstCall = async () => {
    setResult("");
    await new Promise((r) => setTimeout(r, 1500));
    const agent = FEATURED_AGENTS.find((a) => a.id === selectedAgent);
    const genericResult =
      `**Risultato generato da ${agent?.name || "Agente"}**\n\n` +
      `✅ L'agente ha elaborato il tuo prompt con successo.\n\n` +
      "Il risultato è stato generato utilizzando il modello AI configurato per questo agente. " +
      "Puoi continuare a usare l'agente dalla tua dashboard personale per task più complessi e personalizzati.\n\n" +
      `💰 Costo operazione: ${agent?.tk || 0} token (${((agent?.tk || 0) / 1000).toFixed(3)} USD)`;
    setResult(genericResult);
  };

  const markComplete = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("helix_onboarding_completed", "true");
    }
  }, []);

  const canAdvance = () => {
    if (step === 1) return !!selectedAgent;
    if (step === 2) return activated;
    return true;
  };

  // Navigazione a un passo specifico (solo passi già visitati)
  const goToStep = (targetStep: number) => {
    if (targetStep >= step) return;
    if (targetStep <= 1) {
      setActivated(false);
      setPrompt("");
      setResult("");
    } else if (targetStep <= 2) {
      setPrompt("");
      setResult("");
      setActivated(false);
    }
    setStep(targetStep);
  };

  // Pulsante Indietro — resetta lo stato
  const handleBack = () => {
    if (step === 2) {
      setActivated(false);
    } else if (step === 3) {
      setPrompt("");
      setResult("");
    }
    setStep(step - 1);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-strong)]">
          Benvenuto su Helix
        </h1>
        <p className="mt-2 text-[15px] text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
          In 3 passi sei operativo con il tuo primo agente AI
        </p>
      </div>

      {/* Step progress — dots CLICCABILI per passi già visitati */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-1">
              <button
                onClick={() => goToStep(s.id)}
                disabled={s.id >= step}
                className={cn(
                  "flex flex-col items-center gap-2 transition-all duration-300",
                  s.id < step ? "cursor-pointer" : s.id === step ? "cursor-default" : "cursor-not-allowed"
                )}
                aria-label={`Vai al passo ${s.id}: ${s.title}${s.id < step ? ' (completato)' : s.id === step ? ' (corrente)' : ''}`}
              >
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 relative group",
                    step > s.id
                      ? "bg-[var(--accent)]/10 text-[var(--accent)] ring-1 ring-[var(--green-line)] hover:bg-[var(--accent)]/20"
                      : step === s.id
                      ? "bg-[var(--accent)] text-[var(--text-on-accent)] shadow-[0_0_16px_rgba(74,222,128,0.2)]"
                      : "bg-[var(--surface-card)] text-[var(--text-faint)] ring-1 ring-[var(--border-subtle)]"
                  )}
                >
                  {step > s.id ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Torna a {s.title}
                      </span>
                    </>
                  ) : (
                    s.id
                  )}
                </div>
                <span
                  className={cn(
                    "text-[10px] font-medium hidden sm:block transition-colors",
                    step === s.id ? "text-[var(--accent)]" : "text-[var(--text-faint)]"
                  )}
                >
                  {s.title}
                </span>
              </button>
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    "h-px w-8 sm:w-16 mb-6 transition-colors duration-300",
                    step > s.id ? "bg-[var(--green-line)]" : "bg-[var(--border-subtle)]"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1 — Choose agent */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="glass-panel p-6 sm:p-8 space-y-5"
          >
            <div className="text-center mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/10 ring-1 ring-[var(--green-line)] mx-auto mb-4">
                <Store className="h-6 w-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-strong)]">Scegli il tuo primo agente</h2>
              <p className="text-sm text-[var(--text-muted)] mt-2">Questi sono gli agenti più popolari tra i nostri utenti</p>
            </div>

            <div className="space-y-3">
              {FEATURED_AGENTS.map((agent) => {
                const IconComponent = agent.icon;
                return (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent.id)}
                    className={cn(
                      "w-full rounded-xl p-4 text-left transition-all border",
                      selectedAgent === agent.id
                        ? "border-[var(--green-line)] bg-[var(--accent)]/5 shadow-[0_0_20px_rgba(74,222,128,0.06)]"
                        : "border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: `${agent.color}14` }}
                        >
                          <IconComponent className="h-5 w-5" style={{ color: agent.color }} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-[var(--text-strong)]">{agent.name}</h3>
                          <p className="text-xs text-[var(--text-muted)] truncate">{agent.description}</p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-[var(--surface-raised)] px-2.5 py-1 text-xs font-mono font-medium text-[var(--text-muted)] ring-1 ring-[var(--border-subtle)]">
                        {agent.tk} tk
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <Link
                href="/dashboard/registra"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                Registra il tuo agente
              </Link>
            </div>
          </motion.div>
        )}

        {/* Step 2 — Activate */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="glass-panel p-6 sm:p-8 space-y-5"
          >
            <div className="text-center mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/10 ring-1 ring-[var(--green-line)] mx-auto mb-4">
                <Zap className="h-6 w-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-strong)]">
                {activated ? "Agente Attivato!" : "Attiva il tuo agente"}
              </h2>
              <p className="text-sm text-[var(--text-muted)] mt-2">
                {activated
                  ? "Wallet connesso, tutto pronto. Passa alla prima chiamata."
                  : "Un click per connettere l'agente al tuo wallet"}
              </p>
            </div>

            {!activated ? (
              <div className="rounded-xl bg-[var(--surface-raised)] p-5 space-y-4 ring-1 ring-[var(--border-subtle)]">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Agente</span>
                  <span className="text-[var(--text-strong)] font-semibold">
                    {FEATURED_AGENTS.find((a) => a.id === selectedAgent)?.name || "Selezionato"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Wallet</span>
                  <span className="text-[var(--accent)] font-mono font-medium">5.000 tk disponibili</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Costo per chiamata</span>
                  <span className="text-[var(--text-body)] font-mono font-medium">
                    {FEATURED_AGENTS.find((a) => a.id === selectedAgent)?.tk || 0} tk
                  </span>
                </div>

                <button
                  onClick={handleActivate}
                  disabled={activating}
                  className="w-full rounded-lg bg-[var(--accent)] py-3 text-sm font-semibold text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-[0_0_24px_rgba(74,222,128,0.08)]"
                >
                  {activating ? (
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
                      Attiva Agente
                    </span>
                  )}
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="flex flex-col items-center py-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/12 ring-1 ring-[var(--green-line)] mb-4">
                  <Check className="h-7 w-7 text-[var(--accent)]" />
                </div>
                <p className="text-sm font-medium text-[var(--text-body)]">Wallet connesso e operativo</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 3 — First call */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="glass-panel p-6 sm:p-8 space-y-5"
          >
            <div className="text-center mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/10 ring-1 ring-[var(--green-line)] mx-auto mb-4">
                <Bot className="h-6 w-6 text-[var(--accent)]" />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-strong)]">Prima chiamata</h2>
              <p className="text-sm text-[var(--text-muted)] mt-2">Prova subito il tuo agente con un prompt reale</p>
            </div>

            <div>
              <label className="text-xs font-medium text-[var(--text-muted)] mb-2 block">
                Cosa vuoi chiedere al tuo agente?
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder='Es. "Crea una strategia di contenuti per il Q3 2026" o "Scrivi un post LinkedIn sul lancio del nostro prodotto"'
                rows={3}
                className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-card)] px-3.5 py-3 text-sm text-[var(--text-body)] placeholder:text-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] focus:border-transparent resize-none transition-shadow"
              />
            </div>

            <button
              onClick={handleFirstCall}
              disabled={!prompt.trim() || !!result}
              className="w-full rounded-lg bg-[var(--accent)] py-3 text-sm font-semibold text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_0_24px_rgba(74,222,128,0.08)]"
            >
              {result ? "Risultato" : "Invia Prompt"}
            </button>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] p-5"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]/10">
                    <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider">Risultato</span>
                </div>
                <div className="text-sm text-[var(--text-body)] whitespace-pre-line leading-relaxed">
                  {result}
                </div>
              </motion.div>
            )}

            {result && (
              <div className="text-center pt-3">
                <Link
                  href="/dashboard/miei-agenti"
                  onClick={markComplete}
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] transition-all"
                >
                  Vai alla Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between pb-4">
        <button
          onClick={handleBack}
          disabled={step === 1}
          className="flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-body)] hover:bg-[var(--surface-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Indietro
        </button>

        {step < 3 ? (
          <div className="flex flex-col items-end gap-1">
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canAdvance()}
              className="flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Avanti
              <ArrowRight className="h-4 w-4" />
            </button>
            {!canAdvance() && (
              <span className="text-[11px] text-[var(--text-faint)] pr-1">
                {step === 1 ? "Seleziona un agente per proseguire" : "Attiva l'agente per proseguire"}
              </span>
            )}
          </div>
        ) : (
          <button
            onClick={() => {
              markComplete();
              window.location.href = "/dashboard/miei-agenti";
            }}
            className="flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-press)] transition-all"
          >
            Fine
            <Check className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
