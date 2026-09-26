"use client";

import { ArrowUpRight } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const researchLines = [
  {
    title: "FlashAttention em hardware restrito",
    description: "Tiling, softmax fundido e normalização online adaptados a OpenCL e a pipelines com pouca memória.",
  },
  {
    title: "Decodificação especulativa distribuída",
    description: "Uma GPU integrada gera o rascunho com um modelo pequeno, e a GPU dedicada verifica os tokens em lote.",
  },
  {
    title: "Quantização extrema",
    description: "Métodos abaixo de 4 bits (NF4, AWQ, INT2 e INT3) ajustados ao limite de banda de memória de placas antigas.",
  },
  {
    title: "Mixture-of-Experts com pouca VRAM",
    description: "Pré-carregamento dinâmico de especialistas para rodar modelos MoE em uma única GPU de estação de trabalho.",
  },
];

const projects = [
  {
    name: "relic",
    tagline: "Runtime de inferência",
    description:
      "Runtime GGUF minimalista para OpenCL 1.2 e 3.0, feito para extrair o máximo de LLMs locais com 1 a 4 GB de VRAM, GPUs integradas e topologias híbridas.",
    facts: [
      "Llama, SmolLM2 e Qwen 3.5 (Gated DeltaNet)",
      "FP16, Q8_0 e Q4_0 com reempacotamento em tempo de carga",
      "Zero alocações no caminho crítico, com buffers planejados estaticamente",
      "Validado em NVIDIA GTX 1650 e Intel UHD Graphics",
    ],
    href: "https://github.com/anamnesic/relic",
  },
  {
    name: "surveyor",
    tagline: "Perfilamento de hardware",
    description:
      "Notas de pesquisa, perfilamento de dispositivos e estudos de viabilidade para rodar transformers modernos em hardware obsoleto.",
    facts: [
      "Perfil de referência: AMD Caicos XT (Terascale 2), 1 GB DDR3",
      "OpenCL 1.2, sem SVM, com buffer máximo de 512 MB",
      "Análise de por que motores convencionais falham nesse hardware",
    ],
    href: "https://github.com/anamnesic/surveyor",
  },
  {
    name: "anamnesic-labs",
    tagline: "Pesquisa de longo prazo",
    description:
      "Pesquisa aplicada de longo horizonte em arquiteturas de baixa VRAM, otimização de atenção e democratização de hardware.",
    facts: [
      "Kernels de atenção para OpenCL",
      "Especulação heterogênea entre GPUs",
      "Quantização abaixo de 4 bits",
    ],
    href: "https://github.com/anamnesic/anamnesic-labs",
  },
];

const Research = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32">
          <section className="border-b border-border">
            <div className="container mx-auto px-8 py-20 md:py-28">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Anamnesic Labs</p>
                  <h1 className="text-5xl md:text-7xl font-light tracking-[-0.02em] leading-[1.08] text-foreground">
                    IA onde<br />
                    <em className="not-italic font-extralight text-muted-foreground">ninguém espera.</em>
                  </h1>
                </div>
                <div>
                  <p className="max-w-xl text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    A Anamnesic é o braço de pesquisa aberta da Chronokairo. Estudamos como rodar modelos de linguagem modernos
                    sob orçamentos de memória rígidos: GPUs antigas, GPUs integradas e máquinas comuns.
                  </p>
                  <p className="mt-6 max-w-xl text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    O que aprendemos no laboratório chega ao produto: modelos que rodam localmente, com privacidade e sem
                    depender de infraestrutura cara.
                  </p>
                  <a
                    href="https://github.com/anamnesic"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex w-fit items-center gap-2 border-b border-foreground/40 pb-1 text-sm text-foreground transition-colors hover:border-foreground"
                  >
                    github.com/anamnesic <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-8 py-24 md:py-32">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">01 / Projetos abertos</p>
            <h2 className="mb-16 max-w-3xl text-4xl font-light tracking-tight text-foreground md:text-5xl">Código público, resultados verificáveis.</h2>
            <div className="space-y-16">
              {projects.map((project) => (
                <article key={project.name} className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                  <div>
                    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{project.tagline}</p>
                    <h3 className="font-mono text-3xl text-foreground">{project.name}</h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex w-fit items-center gap-2 border-b border-foreground/40 pb-1 text-sm text-foreground transition-colors hover:border-foreground"
                    >
                      Ver repositório <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div>
                    <p className="max-w-2xl text-base font-light leading-relaxed text-foreground/80">{project.description}</p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {project.facts.map((fact) => (
                        <li key={fact} className="border-t border-border pt-3 text-sm font-light leading-relaxed text-muted-foreground">
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-border">
            <div className="container mx-auto px-8 py-24 md:py-32">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">02 / Linhas de pesquisa</p>
              <h2 className="mb-16 max-w-3xl text-4xl font-light tracking-tight text-foreground md:text-5xl">O que estamos investigando.</h2>
              <div className="grid gap-10 md:grid-cols-2 md:gap-x-12">
                {researchLines.map((line, index) => (
                  <div key={line.title} className="border-t border-border pt-6">
                    <span className="font-mono text-xs text-muted-foreground/70">0{index + 1}</span>
                    <h3 className="mt-6 mb-3 text-2xl font-light text-foreground">{line.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{line.description}</p>
                  </div>
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
