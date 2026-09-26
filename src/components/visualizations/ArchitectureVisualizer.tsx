"use client";

import { useEffect, useRef, useState } from "react";
import {
  CUTOVER_THRESHOLD,
  quotaState,
  quotaStateLabel,
  type ArchitectureVisualization,
} from "@/lib/architecture-visualization";

type SceneController = {
  select: (id: string) => void;
  dispose: () => void;
};

export default function ArchitectureVisualizer({ visualization }: { visualization: ArchitectureVisualization }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SceneController | null>(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [activeId, setActiveId] = useState(visualization.providers[0]?.id ?? "");
  const [usage, setUsage] = useState<Record<string, number>>({});
  const [failovers, setFailovers] = useState(0);
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;
  const activeProvider = visualization.providers.find((provider) => provider.id === activeId);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (!window.IntersectionObserver) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "100px" });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !hostRef.current) return;
    let cancelled = false;
    const host = hostRef.current;
    import("./architectureScene").then(({ mountArchitectureScene }) => {
      if (cancelled) return;
      const controller = mountArchitectureScene(host, visualization, activeIdRef.current, {
        onRoute: (id) => {
          setActiveId(id);
          setFailovers((total) => total + 1);
        },
        onUsage: setUsage,
      });
      if (controller) {
        controllerRef.current = controller;
        setReady(true);
      }
    }).catch(() => {
      if (!cancelled) setReady(false);
    });
    return () => {
      cancelled = true;
      controllerRef.current?.dispose();
      controllerRef.current = null;
      setReady(false);
    };
    // The visualization is a stable configuration; routing is updated below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, visualization]);

  useEffect(() => controllerRef.current?.select(activeId), [activeId]);

  return (
    <div data-visualizer className="flex flex-col overflow-hidden rounded-xl border border-border bg-card text-foreground">
      <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:px-8">
        <span className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40 motion-reduce:hidden" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          {visualization.name}
        </span>
        <span className="hidden text-right sm:inline">{visualization.eyebrow}</span>
      </div>

      <div className="relative aspect-[4/3] w-full md:aspect-[16/10]">
        <div ref={hostRef} className="absolute inset-0 text-foreground" aria-hidden="true" />
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="h-24 w-24 rotate-45 border border-foreground/30" />
          </div>
        )}
        <div className="pointer-events-none absolute left-6 top-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground md:left-8">
          <p>Rota ativa</p>
          <p className="text-foreground">{activeProvider?.label}</p>
        </div>
        <div className="pointer-events-none absolute right-6 top-5 text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground md:right-8">
          <p>Migrações</p>
          <p className="tabular-nums text-foreground">{String(failovers).padStart(2, "0")}</p>
        </div>
      </div>

      <div className="grid grid-cols-5 border-t border-border" role="group" aria-label="Rotear tráfego para um provedor">
        {visualization.providers.map((provider) => {
          const value = usage[provider.id] ?? 0;
          const active = provider.id === activeId;
          return (
            <button
              key={provider.id}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveId(provider.id)}
              className={`group relative border-r border-border px-2 py-4 text-left transition-colors last:border-r-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground md:px-4 ${active ? "bg-foreground/[0.04]" : "hover:bg-foreground/[0.02]"}`}
            >
              {active && <span className="absolute inset-x-0 top-0 h-px bg-foreground" />}
              <span className={`block truncate font-mono text-[9px] uppercase tracking-[0.12em] md:text-[10px] ${active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                <span className="sm:hidden">{provider.short}</span>
                <span className="hidden sm:inline">{provider.label}</span>
              </span>
              <span className="relative mt-3 block h-px w-full bg-border">
                <span className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-200" style={{ width: `${Math.round(value * 100)}%` }} />
                <span className="absolute -top-1 h-2 w-px bg-muted-foreground" style={{ left: `${CUTOVER_THRESHOLD * 100}%` }} />
              </span>
              <span className="mt-3 flex items-baseline justify-between gap-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted-foreground md:text-[10px]">
                <span className="tabular-nums text-foreground">{Math.round(value * 100)}%</span>
                <span className="hidden sm:inline">{quotaStateLabel[quotaState(value)]}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-border px-6 py-5 md:px-8" aria-live="polite">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {visualization.centerLabel} / {activeProvider?.label}
        </p>
        <p className="mt-2 text-sm font-light leading-relaxed text-foreground/80">
          {activeProvider?.detail} {visualization.centerDetail}
        </p>
        <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/70">{visualization.note}</p>
      </div>
    </div>
  );
}
