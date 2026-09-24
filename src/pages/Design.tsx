"use client";

import {
  Button,
  Badge,
  brandColors as colors,
  brandTypography as typography,
  brandSpacing as spacing,
} from "@chronokairo/platform/ui";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";

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
            Chrono<span className="font-normal italic">kairo</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-2 tracking-tight">Brand system</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Diretrizes para comunicar uma boutique de engenharia: precisa, silenciosa e próxima da operação.
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <Badge variant="outline" className="font-mono text-xs tracking-wider">Chronokairo</Badge>
            <Badge variant="outline" className="font-mono text-xs tracking-wider">Atualizado Setembro 2026</Badge>
          </div>
        </section>

        <section className="mb-24 scroll-mt-28" id="practice">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">A prática</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-8 ml-4 border-l-2 border-border pl-4">
            Chronokairo resolve problemas operacionais complexos através de software, inteligência artificial e automação. A tecnologia é prova de competência; o produto é a solução funcionando.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ["Software Engineering", "Sistemas sob medida para processos, integrações e decisões críticas."],
              ["Artificial Intelligence", "Inteligência aplicada a fluxos reais, com supervisão e responsabilidade."],
              ["Automation & Infrastructure", "Operações conectadas, ambientes resilientes e menos trabalho manual."],
            ].map(([title, copy], index) => (
              <div key={title} className="rounded-xl border border-border p-6">
                <span className="font-mono text-xs text-foreground/40">0{index + 1}</span>
                <h3 className="mt-8 mb-3 text-xl font-light">{title}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOGO */}
        <section className="mb-24 scroll-mt-28" id="logo">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Logotipo</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            O logotipo combina código e tempo em uma única marca. Use-o com bastante espaço ao redor, sem efeitos, sombras ou molduras decorativas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-background p-10 flex items-center justify-center min-h-[200px]">
              <img src="/logo.svg" alt="Chronokairo logo" className="w-32 h-32" />
            </div>
            <div className="rounded-2xl border border-border bg-foreground p-10 flex items-center justify-center min-h-[200px]">
              <img src="/logo.svg" alt="Chronokairo logo dark" className="w-32 h-32 invert" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-foreground/50 px-2">
            <span>Fundo claro · <CodeInline>currentColor</CodeInline></span>
            <span>Fundo escuro · <CodeInline>filter: invert(1)</CodeInline></span>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-muted/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono tracking-wider text-foreground/50">Uso do logo</span>
              <CopyButton text='<img src="/logo.svg" alt="Chronokairo" className="w-8 h-8" />' />
            </div>
            <pre className="text-xs font-mono text-foreground/70 overflow-x-auto whitespace-pre">{`<img src="/logo.svg" alt="Chronokairo" className="w-8 h-8" />`}</pre>
          </div>
        </section>

        {/* COLORS */}
        <section className="mb-24 scroll-mt-28" id="colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold tracking-tight">Cores</h2>
          </div>
          <p className="text-sm text-foreground/60 mb-6 ml-4 border-l-2 border-border pl-4">
            Paleta monocromática: preto profundo, branco suave e cinzas de leitura. Não adicione dourado ou verde para criar uma aparência de luxo.
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
            <strong className="text-foreground/80">Inter</strong> conduz títulos, corpo e interface. Mono aparece apenas em índices, labels e referências técnicas. A tipografia deve ser leve, espaçada e precisa.
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
            Componentes discretos, com bordas finas, cantos contidos e contraste alto. Use movimento lento e funcional; não transforme a interface em uma vitrine de efeitos.
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
            Ícones via <strong className="text-foreground/80">lucide-react</strong>, sempre monocromáticos. A assinatura da marca é tipográfica: <CodeInline>Χρόνος</CodeInline> e <CodeInline>Καιρός</CodeInline>.
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
            Gradientes são opcionais e quase imperceptíveis. A direção principal é preto, branco, espaço vazio e hierarquia tipográfica.
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
                <li>• &ldquo;Projetamos sistemas para operações complexas&rdquo;</li>
                <li>• &ldquo;Envolvimento técnico direto, do diagnóstico à operação&rdquo;</li>
                <li>• &ldquo;Tecnologia no tempo certo&rdquo;</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border/60 bg-red-500/5 p-5">
              <p className="text-xs font-mono tracking-wider text-red-600 dark:text-red-400 mb-2">✗ EVITE</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• &ldquo;Agenda aberta — resposta em até 24h&rdquo;</li>
                <li>• &ldquo;Antes que a agenda feche&rdquo;</li>
                <li>• &ldquo;Software House · Manaus, Brasil&rdquo;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border pt-8 mt-24 text-center">
          <p className="text-xs text-foreground/40 font-mono">
            Chronokairo Design System · Tecnologia no tempo certo
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
