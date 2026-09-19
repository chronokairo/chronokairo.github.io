"use client";

import { useEffect, useRef, useState } from "react";
import type { ArchitectureVisualization } from "@/lib/architecture-visualization";

type SceneController = {
  select: (id: string) => void;
  dispose: () => void;
};

export default function ArchitectureVisualizer({ visualization }: { visualization: ArchitectureVisualization }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<SceneController | null>(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [selectedId, setSelectedId] = useState(visualization.providers[0]?.id ?? "");
  const selectedIdRef = useRef(selectedId);
  selectedIdRef.current = selectedId;
  const selectedProvider = visualization.providers.find((provider) => provider.id === selectedId);

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
      const controller = mountArchitectureScene(host, visualization, selectedIdRef.current, setSelectedId);
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
    // The visualization is a stable configuration; selection is updated below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, visualization]);

  useEffect(() => controllerRef.current?.select(selectedId), [selectedId]);

  return (
    <div className="border border-white/25 bg-[#101010] p-6 md:p-10 shadow-[0_24px_80px_rgba(255,255,255,0.05)]">
      <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/65">
        <span>{visualization.name}</span>
        <span className="text-right">{visualization.eyebrow}</span>
      </div>
      <div className="relative mt-6 h-[320px] md:h-[430px]">
        <div ref={hostRef} className="absolute inset-0" aria-hidden="true" />
        {!ready && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center" aria-hidden="true">
            <div className="flex flex-wrap justify-center gap-2">
              {visualization.providers.map((provider) => <span key={provider.id} className="h-3 w-3 rounded-full border border-white/65 bg-white/20" />)}
            </div>
            <div className="h-12 w-px bg-white/25" />
            <div className="h-14 w-14 rotate-45 border border-white/60" />
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Selecionar provedor">
        {visualization.providers.map((provider) => (
          <button
            key={provider.id}
            type="button"
            aria-pressed={selectedId === provider.id}
            onClick={() => setSelectedId(provider.id)}
            className={`border px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-3 ${selectedId === provider.id ? "border-white bg-white text-black" : "border-white/20 text-white/60 hover:border-white/60 hover:text-white"}`}
          >
            {provider.label}
          </button>
        ))}
      </div>
      <div className="mt-5 min-h-20 border-t border-white/15 pt-4 text-center" aria-live="polite">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/65">{visualization.centerLabel} / {selectedProvider?.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{selectedProvider?.detail} {visualization.centerDetail}</p>
      </div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-white/60">{visualization.note}</p>
    </div>
  );
}
