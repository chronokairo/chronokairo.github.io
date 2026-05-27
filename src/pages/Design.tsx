"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const colors = [
  { name: "Background", light: "#faf9f5", dark: "#0a0a0a" },
  { name: "Foreground", light: "#0a0a0a", dark: "#fafafa" },
  { name: "Primary", light: "#0a0a0a", dark: "#fafafa" },
  { name: "Secondary", light: "#f2f1ed", dark: "#171717" },
  { name: "Muted", light: "#ece9e1", dark: "#141f1a" },
  { name: "Muted Foreground", light: "#4a6fa5", dark: "#5dba7d" },
  { name: "Accent", light: "#ece9e1", dark: "#141f1a" },
  { name: "Border", light: "#e2e0d8", dark: "#262626" },
  { name: "Card", light: "#faf9f5", dark: "#121212" },
];

const typography = [
  { name: "Display", font: "Newsreader", usage: "Títulos e headlines", weight: "700", size: "h1 48px · h2 36px · h3 30px" },
  { name: "Sans", font: "Inter", usage: "Corpo, navegação, UI", weight: "400 · 500 · 600", size: "body 16px · small 14px · xs 12px" },
  { name: "Mono", font: "ui-monospace", usage: "Código, badges, tracking", weight: "400 · 700", size: "10px · 12px · 14px" },
];

const spacing = [
  { name: "4xs", px: 2, rem: 0.125 },
  { name: "3xs", px: 4, rem: 0.25 },
  { name: "2xs", px: 8, rem: 0.5 },
  { name: "xs", px: 12, rem: 0.75 },
  { name: "sm", px: 16, rem: 1 },
  { name: "md", px: 24, rem: 1.5 },
  { name: "lg", px: 32, rem: 2 },
  { name: "xl", px: 48, rem: 3 },
  { name: "2xl", px: 64, rem: 4 },
  { name: "3xl", px: 96, rem: 6 },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
      className="p-1.5 rounded-md hover:bg-foreground/10 transition-colors cursor-pointer"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-foreground/50" />}
    </button>
  );
}

function CodeInline({ children }: { children: React.ReactNode }) {
  return <code className="px-1.5 py-0.5 rounded bg-foreground/5 text-xs font-mono text-foreground/80">{children}</code>;
}

export default function Design() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* HERO */}
        <section className="mb-24 text-center">
          <img src="/logo.svg" alt="" aria-hidden="true" className="w-48 h-48 mx-auto opacity-80 block dark:brightness-0 dark:invert" />
          <div className="text-2xl font-serif font-bold tracking-tight -mt-8 leading-none">
            Chrono<span className="font-normal italic">Kairo</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-2 tracking-tight">Design System</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Diretrizes de marca, cores, tipografia e componentes para produtos ChronoKairo.
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <Badge variant="outline" className="font-mono text-xs tracking-wider">v1.0</Badge>
            <Badge variant="outline" className="font-mono text-xs tracking-wider">Atualizado Maio 2026</Badge>
          </div>
        </section>

        {/* LOGO */}
        <section className="mb-24 scroll-mt-28" id="logo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Logotipo</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            O logotipo combina dois losangos em silhueta de infinito: <strong className="text-foreground/80">&lt;/&gt;</strong> (código) e <strong className="text-foreground/80">ampulheta</strong> (tempo).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-background p-10 flex items-center justify-center min-h-[200px]">
              <img src="/logo.svg" alt="ChronoKairo logo" className="w-32 h-32" />
            </div>
            <div className="rounded-2xl border border-border bg-foreground p-10 flex items-center justify-center min-h-[200px]">
              <img src="/logo.svg" alt="ChronoKairo logo dark" className="w-32 h-32 invert" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-foreground/50 px-2">
            <span>Fundo claro · <CodeInline>currentColor</CodeInline></span>
            <span>Fundo escuro · <CodeInline>filter: invert(1)</CodeInline></span>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-muted/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono tracking-wider text-foreground/50">Uso do logo</span>
              <CopyButton text='<img src="/logo.svg" alt="ChronoKairo" className="w-8 h-8" />' />
            </div>
            <pre className="text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`<img src="/logo.svg" alt="ChronoKairo" className="w-8 h-8" />`}</pre>
          </div>
        </section>

        {/* COLORS */}
        <section className="mb-24 scroll-mt-28" id="colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Cores</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            Paleta clara (warm off-white) e escura (deep black com verde). A cor <strong className="text-foreground/80">muted-foreground</strong> muda de azul (#4a6fa5) para verde (#5dba7d) no dark mode.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {colors.map((c) => (
              <div key={c.name} className="rounded-xl border border-border overflow-hidden glass-hover cursor-default">
                <div className="h-16 relative">
                  <div className="absolute inset-0" style={{ background: c.light }} />
                  <div className="absolute inset-0" style={{ background: c.dark, clipPath: "inset(0 0 0 50%)" }} />
                </div>
                <div className="p-3 space-y-0.5">
                  <p className="text-xs font-medium">{c.name}</p>
                  <p className="text-[10px] font-mono text-foreground/50">{c.light}</p>
                  <p className="text-[10px] font-mono text-foreground/50">{c.dark}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="mb-24 scroll-mt-28" id="typography">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Tipografia</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            Duas famílias principais: <strong className="text-foreground/80">Newsreader</strong> (serifa, display) e <strong className="text-foreground/80">Inter</strong> (sans-serif, corpo). Mono reservado para código e badges.
          </p>
          <div className="space-y-4">
            {typography.map((t) => (
              <div key={t.name} className="rounded-xl border border-border p-5 glass-hover">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-foreground/50 font-mono">{t.font}</p>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-foreground/40">{t.usage}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-foreground/50">
                  <span>Weights: <strong className="text-foreground/70">{t.weight}</strong></span>
                  <span>Sizes: <strong className="text-foreground/70">{t.size}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPACING */}
        <section className="mb-24 scroll-mt-28" id="spacing">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Espaçamento</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            Escala baseada em incrementos de 4px. Use <CodeInline>gap</CodeInline>, <CodeInline>p-*</CodeInline>, <CodeInline>m-*</CodeInline> e <CodeInline>space-y-*</CodeInline> do Tailwind.
          </p>
          <div className="space-y-2">
            {spacing.map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <span className="w-16 text-xs font-mono text-foreground/50 shrink-0">{s.name}</span>
                <span className="w-20 text-[10px] font-mono text-foreground/40 shrink-0">{s.px}px · {s.rem}rem</span>
                <div className="flex-1 h-4 rounded bg-muted-foreground/20" style={{ width: `${s.px}px`, maxWidth: "100%" }} />
              </div>
            ))}
          </div>
        </section>

        {/* COMPONENTS */}
        <section className="mb-24 scroll-mt-28" id="components">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Componentes</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            Componentes baseados em shadcn/ui com customizações de borda, glass e cores do tema.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border p-6 glass-hover">
              <p className="text-sm font-medium mb-4">Buttons</p>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full bg-foreground text-background hover:opacity-90 cursor-pointer border-0">Primário</Button>
                <Button variant="outline" className="rounded-full cursor-pointer">Outline</Button>
                <Button variant="ghost" className="rounded-full cursor-pointer">Ghost</Button>
              </div>
              <div className="mt-4 rounded-lg bg-muted/30 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-foreground/50">Button</span>
                  <CopyButton text='<Button className="rounded-full bg-foreground text-background">Primário</Button>' />
                </div>
                <pre className="text-[10px] font-mono text-foreground/60 mt-1 overflow-x-auto whitespace-pre">{`<Button className="rounded-full bg-foreground text-background">Primário</Button>`}</pre>
              </div>
            </div>

            <div className="rounded-xl border border-border p-6 glass-hover">
              <p className="text-sm font-medium mb-4">Badges</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="font-mono text-xs tracking-wider rounded-full">Default</Badge>
                <Badge variant="secondary" className="font-mono text-xs tracking-wider rounded-full">Secondary</Badge>
                <Badge variant="outline" className="font-mono text-xs tracking-wider rounded-full">Outline</Badge>
              </div>
              <div className="mt-4 rounded-lg bg-muted/30 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-foreground/50">Badge</span>
                  <CopyButton text='<Badge variant="outline" className="font-mono text-xs tracking-wider rounded-full">Tag</Badge>' />
                </div>
                <pre className="text-[10px] font-mono text-foreground/60 mt-1 overflow-x-auto whitespace-pre">{`<Badge variant="outline" className="font-mono text-xs tracking-wider">Tag</Badge>`}</pre>
              </div>
            </div>

            <div className="rounded-xl border border-border p-6 glass-hover">
              <p className="text-sm font-medium mb-4">Glass / Acrylic</p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-3 rounded-xl glass text-xs">glass</div>
                <div className="px-4 py-3 rounded-xl acrylic text-xs">acrylic</div>
              </div>
              <div className="mt-4 rounded-lg bg-muted/30 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-foreground/50">Utilitários</span>
                  <CopyButton text='<div className="glass">Conteúdo</div>' />
                </div>
                <pre className="text-[10px] font-mono text-foreground/60 mt-1 overflow-x-auto whitespace-pre">{`<div className="glass">Conteúdo</div>
<div className="acrylic">Conteúdo</div>`}</pre>
              </div>
            </div>

            <div className="rounded-xl border border-border p-6 glass-hover">
              <p className="text-sm font-medium mb-4">Text Gradient</p>
              <div className="flex flex-wrap gap-3">
                <p className="text-xl font-serif font-bold text-gradient">Tecnologia no tempo certo</p>
              </div>
              <div className="mt-4 rounded-lg bg-muted/30 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-foreground/50">Classe</span>
                  <CopyButton text='<p className="text-gradient">Texto</p>' />
                </div>
                <pre className="text-[10px] font-mono text-foreground/60 mt-1 overflow-x-auto whitespace-pre">{`<p className="text-gradient">Texto</p>`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* ICONOGRAPHY */}
        <section className="mb-24 scroll-mt-28" id="icons">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Iconografia</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            Ícones via <strong className="text-foreground/80">lucide-react</strong>. Marca Kairos usa <CodeInline>Hourglass</CodeInline>, Chronos usa <CodeInline>{'<code />'}</CodeInline>.
          </p>
          <div className="flex flex-wrap gap-6 items-center justify-center rounded-xl border border-border p-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <svg className="w-6 h-6 text-foreground/70" viewBox="0 0 120 120" fill="none">
                  <polygon points="16,60 38,38 60,60 38,82" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <text x="38" y="60" textAnchor="middle" dominantBaseline="central" fill="currentColor" fontFamily="monospace" fontSize="11" fontWeight="bold">&lt;/&gt;</text>
                  <polygon points="60,60 82,38 104,60 82,82" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <g transform="translate(82, 60)" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M-3.5,-5 L3.5,-5 L1.5,0 L3.5,5 L-3.5,5 L-1.5,0 Z"/>
                    <line x1="-1.5" y1="0" x2="1.5" y2="0"/>
                  </g>
                </svg>
              </div>
              <span className="text-[10px] font-mono text-foreground/50">Logo</span>
            </div>
          </div>
        </section>

        {/* GRADIENTS */}
        <section className="mb-24 scroll-mt-28" id="gradients">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Gradientes</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            Gradient sutil usado em backgrounds de seções. Varia entre light e dark mode.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="h-24" style={{ background: "linear-gradient(180deg, #faf9f5 0%, #ece9e1 100%)" }} />
              <div className="p-3">
                <p className="text-xs font-medium">Light Subtle</p>
                <p className="text-[10px] font-mono text-foreground/50">#faf9f5 → #ece9e1</p>
              </div>
            </div>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="h-24" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #141f1a 100%)" }} />
              <div className="p-3">
                <p className="text-xs font-medium">Dark Subtle</p>
                <p className="text-[10px] font-mono text-foreground/50">#0a0a0a → #141f1a</p>
              </div>
            </div>
          </div>
        </section>

        {/* VOICE & TONE */}
        <section className="mb-24 scroll-mt-28" id="voice">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Voz e Tom</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            Tom direto, técnico e confiante. Use português brasileiro. Prefira frases curtas. Sem jargão vazio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/60 bg-green-500/5 p-5">
              <p className="text-xs font-mono tracking-wider text-green-600 dark:text-green-400 mb-2">✓ FAÇA</p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• &ldquo;Automação de processos com IA&rdquo;</li>
                <li>• &ldquo;Integramos com seu sistema legado&rdquo;</li>
                <li>• &ldquo;Tecnologia no tempo certo&rdquo;</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border/60 bg-red-500/5 p-5">
              <p className="text-xs font-mono tracking-wider text-red-600 dark:text-red-400 mb-2">✗ EVITE</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• &ldquo;Solução disruptiva 360°&rdquo;</li>
                <li>• &ldquo;Sinergia de plataforma omnichannel&rdquo;</li>
                <li>• &ldquo;Paradigma de transformação digital&rdquo;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border pt-8 mt-24 text-center">
          <p className="text-xs text-foreground/40 font-mono">
            ChronoKairo Design System · Tecnologia no tempo certo
          </p>
          <a
            href="https://github.com/chronokairo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-foreground/50 hover:text-foreground transition-colors mt-2"
          >
            github.com/chronokairo
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </footer>
      </div>
    </main>
  );
}
