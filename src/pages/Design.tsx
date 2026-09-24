"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, ArrowUpRight, Code, Clock, ShieldCheck, Sparkles, Terminal, Sun, Moon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Button,
  Badge,
  ThemeToggle,
  colors,
  brandTypography as typography,
  brandSpacing as spacing,
} from "@chronokairo/platform/ui";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      className="p-1.5 rounded-md hover:bg-foreground/10 transition-colors cursor-pointer text-muted-foreground hover:text-foreground"
      title="Copiar"
      type="button"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

function CodeInline({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono text-foreground/80 border border-border">
      {children}
    </code>
  );
}

export default function Design() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-foreground selection:text-background transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* HERO */}
            <section className="mb-28 text-center pt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.25em] text-muted-foreground uppercase">
                  Design System &amp; Brand Guidelines
                </span>
              </div>

              {/* Logo Mark & Identity */}
              <div className="flex flex-col items-center justify-center mb-6">
                <img
                  src="/logo.svg"
                  alt="ChronoKairo"
                  className="w-24 h-24 mb-4 opacity-90 dark:brightness-0 dark:invert transition-all"
                />
                <div className="text-3xl font-light tracking-[-0.01em] text-foreground leading-none">
                  Chrono<em className="not-italic font-extralight text-muted-foreground">Kairo</em>
                </div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-muted-foreground uppercase mt-2">
                  Tecnologia no tempo certo
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight text-foreground">
                Brand System
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                Diretrizes de identidade e interface para comunicar uma boutique de engenharia de software:
                precisa, silenciosa, com acabamento de luxo e próxima da operação.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <Badge variant="outline" className="font-mono text-xs tracking-wider rounded-full px-3 py-1">
                  @chronokairo/platform/ui
                </Badge>
                <Badge variant="outline" className="font-mono text-xs tracking-wider rounded-full px-3 py-1">
                  Ciclo Solar (Dia / Noite)
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs tracking-wider rounded-full px-3 py-1">
                  Monocromático Pantone 2026
                </Badge>
              </div>
            </section>

            {/* CICLO SOLAR: DIA BRANCO / NOITE PRETO */}
            <section className="mb-24 scroll-mt-28" id="solar-cycle">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">Ciclo Solar · Tempo &amp; Luz</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-8 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                Fiel ao conceito grego de <em>Chronos</em> (tempo contínuo) e <em>Kairós</em> (momento oportuno), a interface
                inverte as cores automaticamente ao longo do dia: <strong>branco durante a manhã/tarde</strong> e <strong>preto durante a noite</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Sun className="h-5 w-5 text-amber-500" />
                        <span className="font-medium text-sm text-foreground">Manhã &amp; Tarde (06:00 – 18:00)</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono">Branco / Light</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Fundo branco puro (#ffffff), texto preto profundo (#09090b), contrastes límpidos e leitura arejada para iluminar o dia de trabalho.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span>Fundo: #ffffff</span>
                    <span>Texto: #09090b</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Moon className="h-5 w-5 text-indigo-400" />
                        <span className="font-medium text-sm text-foreground">Noite &amp; Madrugada (18:00 – 06:00)</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono">Preto / Dark</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Fundo preto profundo (#0a0a0a), texto branco Pantone 2026 (#fafafa), acento velado (#141f1a) e redução de fadiga visual noturna.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span>Fundo: #0a0a0a</span>
                    <span>Texto: #fafafa</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl border border-border bg-muted/30 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-light">
                  Você pode alternar manualmente a qualquer momento através do controle de tema:
                </span>
                <ThemeToggle />
              </div>
            </section>

            {/* A PRÁTICA */}
            <section className="mb-24 scroll-mt-28" id="practice">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">A prática</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-8 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                A Chronokairo resolve problemas operacionais complexos através de software, inteligência artificial e
                automação. A tecnologia é prova de competência; o produto é a solução em funcionamento contínuo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Software Engineering",
                    copy: "Sistemas sob medida para processos, integrações e decisões críticas de alta demanda.",
                    icon: Terminal,
                  },
                  {
                    title: "Artificial Intelligence",
                    copy: "Inteligência aplicada a fluxos reais de trabalho, com governança, supervisão e responsabilidade.",
                    icon: Sparkles,
                  },
                  {
                    title: "Automation & Infrastructure",
                    copy: "Operações conectadas, ambientes cloud resilientes e eliminação de esforço manual redundante.",
                    icon: ShieldCheck,
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-7 hover:border-foreground/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h3 className="mb-3 text-lg font-normal text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground font-light">{item.copy}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* LOGOTIPO */}
            <section className="mb-24 scroll-mt-28" id="logo">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">Logotipo</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                O logotipo combina código e tempo em uma única marca geométrica. Utilize com espaçamento generoso,
                sem efeitos de distorção, sombras pesadas ou molduras decorativas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border bg-[#0a0a0a] p-10 flex flex-col items-center justify-center min-h-[220px]">
                  <img src="/logo.svg" alt="Chronokairo logo dark" className="w-28 h-28 brightness-0 invert mb-3" />
                  <span className="text-[11px] font-mono text-neutral-400">Aplicação Dark (Noite)</span>
                </div>
                <div className="rounded-2xl border border-border bg-[#fafafa] text-black p-10 flex flex-col items-center justify-center min-h-[220px]">
                  <img src="/logo.svg" alt="Chronokairo logo light" className="w-28 h-28 mb-3" />
                  <span className="text-[11px] font-mono text-neutral-600">Aplicação Light (Dia)</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground px-2 font-mono">
                <span>Fundo escuro · <CodeInline>brightness-0 invert</CodeInline></span>
                <span>Fundo claro · <CodeInline>currentColor</CodeInline></span>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono tracking-wider text-muted-foreground">Exemplo de implementação</span>
                  <CopyButton text='<img src="/logo.svg" alt="ChronoKairo" className="w-8 h-8 dark:brightness-0 dark:invert" />' />
                </div>
                <pre className="text-xs font-mono text-foreground/80 overflow-x-auto whitespace-pre">{`<img src="/logo.svg" alt="ChronoKairo" className="w-8 h-8 dark:brightness-0 dark:invert" />`}</pre>
              </div>
            </section>

            {/* CORES */}
            <section className="mb-24 scroll-mt-28" id="colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">Cores &amp; Tokens</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                Paleta monocromática de precisão. O mostrador abaixo exibe o valor no tema claro (dia) e tema escuro (noite).
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {colors.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-xl border border-border bg-card overflow-hidden hover:border-foreground/30 transition-all duration-200"
                  >
                    <div className="h-16 relative border-b border-border">
                      <div className="absolute inset-0" style={{ background: c.light }} />
                      <div className="absolute inset-0" style={{ background: c.dark, clipPath: "inset(0 0 0 50%)" }} />
                    </div>
                    <div className="p-3.5 flex items-start justify-between">
                      <div className="space-y-0.5">
                        <p className="text-xs font-medium text-foreground">{c.name}</p>
                        <p className="text-[10px] font-mono text-muted-foreground">
                          Dia: {c.light} · Noite: {c.dark}
                        </p>
                      </div>
                      <CopyButton text={c.dark} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TIPOGRAFIA */}
            <section className="mb-24 scroll-mt-28" id="typography">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">Tipografia</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                <strong className="text-foreground font-medium">Inter</strong> conduz os títulos, corpo e componentes de interface
                com pesos leves (300/400). A família <strong className="text-foreground font-medium">Newsreader</strong> é reservada
                para citações e a ancestralidade dos termos gregos. O estilo monospaced é estritamente técnico.
              </p>
              <div className="space-y-3">
                {typography.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-xl border border-border bg-card p-5 hover:border-foreground/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">{t.font}</p>
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">{t.usage}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
                      <span>Pesos: <strong className="text-foreground font-normal">{t.weight}</strong></span>
                      <span>Dimensões: <strong className="text-foreground font-normal">{t.size}</strong></span>
                    </div>
                  </div>
                ))}

                {/* Greek Heritage Display */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Herança da Marca</span>
                    <Badge variant="outline" className="font-mono text-[10px] rounded-full">Newsreader Serif</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-muted/40 border border-border">
                      <div className="font-serif text-3xl font-light text-foreground mb-1">Χρόνος</div>
                      <p className="text-xs font-mono text-muted-foreground">Chronos · O tempo contínuo e mensurável</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/40 border border-border">
                      <div className="font-serif text-3xl font-light text-foreground mb-1">Καιρός</div>
                      <p className="text-xs font-mono text-muted-foreground">Kairós · O momento oportuno e decisivo</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ESPAÇAMENTO */}
            <section className="mb-24 scroll-mt-28" id="spacing">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">Espaçamento</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                Escala uniforme baseada em incrementos de 4px, alinhada aos tokens de <CodeInline>@chronokairo/platform</CodeInline>.
              </p>
              <div className="space-y-2.5">
                {spacing.map((s) => (
                  <div key={s.name} className="flex items-center gap-4">
                    <span className="w-14 text-xs font-mono text-muted-foreground shrink-0">{s.name}</span>
                    <span className="w-24 text-[11px] font-mono text-muted-foreground/80 shrink-0">
                      {s.px}px · {s.rem}rem
                    </span>
                    <div
                      className="h-3 rounded-full bg-muted-foreground/30"
                      style={{ width: `${s.px * 3}px`, maxWidth: "calc(100% - 150px)" }}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* COMPONENTES */}
            <section className="mb-24 scroll-mt-28" id="components">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">Componentes Platform UI</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                Componentes consolidados importados diretamente de <CodeInline>@chronokairo/platform/ui</CodeInline>.
                Design silencioso, cantos arredondados contidos ou em pílula, com bordas finas e contraste assertivo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Buttons */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-medium text-foreground mb-4">Buttons (Botões em Pílula)</p>
                  <div className="flex flex-wrap gap-2.5">
                    <Button size="pill" className="bg-foreground text-background hover:bg-foreground/90 font-medium">
                      Primário
                    </Button>
                    <Button variant="outline" size="pill" className="border-border hover:bg-foreground/10">
                      Outline
                    </Button>
                    <Button variant="glass" size="pill">
                      Glass
                    </Button>
                    <Button variant="ghost" size="pill" className="text-muted-foreground hover:text-foreground">
                      Ghost
                    </Button>
                  </div>
                  <div className="mt-5 rounded-lg bg-muted/40 border border-border p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-muted-foreground">Importação</span>
                      <CopyButton text='import { Button } from "@chronokairo/platform/ui";' />
                    </div>
                    <pre className="text-[10px] font-mono text-foreground/80 mt-1 overflow-x-auto whitespace-pre">{`<Button size="pill">Primário</Button>
<Button variant="outline" size="pill">Outline</Button>`}</pre>
                  </div>
                </div>

                {/* Badges */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-medium text-foreground mb-4">Badges &amp; Tags</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="font-mono text-xs tracking-wider rounded-full px-3 py-1">
                      Default
                    </Badge>
                    <Badge variant="secondary" className="font-mono text-xs tracking-wider rounded-full px-3 py-1">
                      Secondary
                    </Badge>
                    <Badge variant="outline" className="font-mono text-xs tracking-wider rounded-full px-3 py-1">
                      Outline
                    </Badge>
                  </div>
                  <div className="mt-5 rounded-lg bg-muted/40 border border-border p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-muted-foreground">Importação</span>
                      <CopyButton text='<Badge variant="outline" className="font-mono text-xs rounded-full">Tag</Badge>' />
                    </div>
                    <pre className="text-[10px] font-mono text-foreground/80 mt-1 overflow-x-auto whitespace-pre">{`<Badge variant="outline" className="font-mono text-xs rounded-full">
  Tag
</Badge>`}</pre>
                  </div>
                </div>

                {/* Glass / Acrylic */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-medium text-foreground mb-4">Glass &amp; Acrylic Surfaces</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-3 rounded-xl glass text-xs text-foreground">Superfície Glass</div>
                    <div className="px-4 py-3 rounded-xl acrylic text-xs text-foreground">Superfície Acrylic</div>
                  </div>
                  <div className="mt-5 rounded-lg bg-muted/40 border border-border p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-muted-foreground">Utilitários CSS</span>
                      <CopyButton text='<div className="glass">Conteúdo</div>' />
                    </div>
                    <pre className="text-[10px] font-mono text-foreground/80 mt-1 overflow-x-auto whitespace-pre">{`<div className="glass">Conteúdo</div>
<div className="acrylic">Conteúdo</div>`}</pre>
                  </div>
                </div>

                {/* Text Gradient */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-medium text-foreground mb-4">Text Gradient &amp; Highlight</p>
                  <div className="py-2">
                    <p className="text-xl font-light text-gradient">Tecnologia no tempo certo</p>
                  </div>
                  <div className="mt-5 rounded-lg bg-muted/40 border border-border p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-muted-foreground">Classe utilitária</span>
                      <CopyButton text='<p className="text-gradient font-light">Texto</p>' />
                    </div>
                    <pre className="text-[10px] font-mono text-foreground/80 mt-1 overflow-x-auto whitespace-pre">{`<p className="text-gradient font-light">
  Tecnologia no tempo certo
</p>`}</pre>
                  </div>
                </div>
              </div>
            </section>

            {/* GRADIENTES E TEXTURAS */}
            <section className="mb-24 scroll-mt-28" id="gradients">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">Gradientes &amp; Iluminação</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                Gradientes são quase imperceptíveis, servindo apenas para criar profundidade sutil no ambiente escuro e claro.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border overflow-hidden bg-card">
                  <div className="h-24" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #141f1a 100%)" }} />
                  <div className="p-4">
                    <p className="text-xs font-medium text-foreground">Dark Subtle Gradient (Noite)</p>
                    <p className="text-[10px] font-mono text-muted-foreground mt-0.5">#0a0a0a → #141f1a</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-border overflow-hidden bg-card">
                  <div className="h-24" style={{ background: "linear-gradient(180deg, #faf9f5 0%, #ece9e1 100%)" }} />
                  <div className="p-4">
                    <p className="text-xs font-medium text-foreground">Light Neutral Gradient (Dia)</p>
                    <p className="text-[10px] font-mono text-muted-foreground mt-0.5">#faf9f5 → #ece9e1</p>
                  </div>
                </div>
              </div>
            </section>

            {/* VOZ E TOM */}
            <section className="mb-24 scroll-mt-28" id="voice">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-6 rounded-full bg-muted-foreground" />
                <h2 className="text-2xl font-light tracking-tight text-foreground">Voz e Tom</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6 ml-4 border-l border-border pl-4 font-light leading-relaxed">
                Tom direto, técnico e sereno. Usamos português brasileiro com termos precisos. Frases concisas, sem
                jargões corporativos vazios ou artifícios de urgência mercadológica.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-xs font-mono tracking-wider text-green-500 mb-3 uppercase flex items-center gap-2">
                    <Check className="w-3.5 h-3.5" /> Diretrizes Recomendadas
                  </p>
                  <ul className="space-y-2.5 text-sm text-foreground/90 font-light">
                    <li>• &ldquo;Projetamos sistemas para operações complexas.&rdquo;</li>
                    <li>• &ldquo;Envolvimento técnico direto, do diagnóstico à operação.&rdquo;</li>
                    <li>• &ldquo;Tecnologia no tempo certo.&rdquo;</li>
                    <li>• &ldquo;Sistemas construídos para durar e evoluir.&rdquo;</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-xs font-mono tracking-wider text-red-500 mb-3 uppercase flex items-center gap-2">
                    <span className="text-base leading-none">×</span> Padrões Evitados
                  </p>
                  <ul className="space-y-2.5 text-sm text-muted-foreground font-light">
                    <li>• &ldquo;Agenda aberta — resposta em até 24h.&rdquo;</li>
                    <li>• &ldquo;Antes que a agenda feche.&rdquo;</li>
                    <li>• &ldquo;Solução disruptiva 360° omnichannel.&rdquo;</li>
                    <li>• &ldquo;Software House genérica.&rdquo;</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
