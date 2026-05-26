"use client";

import { ArrowRight, BrainCircuit, CalendarDays, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const researchAreas = [
  {
    id: "ia-aplicada",
    title: "Inteligência Artificial Aplicada",
    description:
      "Investigamos como modelos de IA podem apoiar decisão, automação e análise de dados em cenários reais, com foco em utilidade, segurança e impacto mensurável.",
    icon: BrainCircuit,
  },
  {
    id: "sistemas",
    title: "Sistemas Inteligentes",
    description:
      "Exploramos arquiteturas, agentes, integrações e fluxos capazes de transformar processos complexos em sistemas claros, auditáveis e escaláveis.",
    icon: Network,
  },
  {
    id: "governanca",
    title: "Segurança, Ética e Governança",
    description:
      "Analisamos riscos, vieses, privacidade e boas práticas para que a tecnologia seja adotada com responsabilidade e confiança.",
    icon: ShieldCheck,
  },
];

const focusLinks = [
  { label: "IA aplicada", id: "ia-aplicada" },
  { label: "Sistemas", id: "sistemas" },
  { label: "Governança", id: "governanca" },
];

const publishedResearchScope = [
  {
    category: "IA aplicada",
    title: "Título da pesquisa publicada",
    description:
      "Resumo curto da pesquisa, explicando a pergunta investigada, o método usado e o principal aprendizado encontrado pelos membros.",
    meta: "Autor ou grupo · Data",
  },
  {
    category: "Educação",
    title: "Título da pesquisa publicada",
    description:
      "Espaço para apresentar pesquisas com impacto em aprendizagem, tutoria inteligente, avaliação, inclusão ou ferramentas educacionais.",
    meta: "Autor ou grupo · Data",
  },
  {
    category: "Governança",
    title: "Título da pesquisa publicada",
    description:
      "Campo reservado para estudos sobre segurança, ética, privacidade, confiabilidade e adoção responsável de tecnologias digitais.",
    meta: "Autor ou grupo · Data",
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28">
          <section className="border-b border-border/70">
            <div className="container mx-auto px-6 py-16 md:py-24">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <Badge variant="outline" className="mb-5 rounded-full px-3 py-1.5 text-xs font-mono uppercase tracking-widest">
                    Pesquisas
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.02]">
                    Pesquisas da<br />
                    <span className="font-normal italic">ChronoKairo</span>
                  </h1>
                </div>

                <div className="lg:pt-3">
                  <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground max-w-3xl">
                    Nossos membros investigam a segurança, o funcionamento interno e os impactos sociais de modelos de IA e sistemas digitais, para que a inteligência artificial gere impacto positivo conforme se torna cada vez mais capaz.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <span className="font-semibold text-foreground">Frentes de pesquisa:</span>
                    {focusLinks.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-foreground/65 underline underline-offset-4 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 py-14 md:py-16">
            <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {researchAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article key={area.title} id={area.id} className="border-t border-border pt-7 scroll-mt-28">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-foreground/[0.03] text-foreground/75">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-serif font-bold tracking-tight text-foreground">
                      {area.title}
                    </h2>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-foreground/75">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="border-t border-border/70">
            <div className="container mx-auto px-6 py-16 md:py-20">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground mb-3">
                    Publicações
                  </p>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
                    Pesquisas feitas e publicadas
                  </h2>
                </div>
                <div>
                  <p className="text-base md:text-lg leading-relaxed text-foreground/75 max-w-2xl">
                    Um espaço para reunir estudos, experimentos, artigos e relatórios produzidos por membros da ChronoKairo. Quando o conteúdo chegar, cada publicação poderá destacar tema, autores, data e chamada para leitura completa.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Todos", "Artigos", "Relatórios", "Experimentos", "Protótipos"].map((item, index) => (
                      <button
                        key={item}
                        type="button"
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                          index === 0
                            ? "bg-foreground text-background"
                            : "border border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 divide-y divide-border border-y border-border">
                {publishedResearchScope.map((research) => (
                  <article key={`${research.category}-${research.title}`} className="group grid gap-5 py-7 transition-colors hover:bg-foreground/[0.015] md:grid-cols-[180px_1fr_auto] md:items-start md:px-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>{research.meta}</span>
                    </div>
                    <div>
                      <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                        {research.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground">
                        {research.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-foreground/70">
                        {research.description}
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors group-hover:border-foreground/40 group-hover:text-foreground md:mt-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Research;