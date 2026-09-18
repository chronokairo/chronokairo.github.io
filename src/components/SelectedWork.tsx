import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    number: "01",
    name: "Audiomed",
    field: "Saúde ocupacional",
    image: "/images/audiomed-showcase-hero.jpg",
    alt: "Interface da plataforma Audiomed para operações clínicas",
    problem: "Unificar o atendimento clínico e manter a operação ativa mesmo com conexão instável.",
    intervention: "Fluxo de triagem guiada, roteamento entre especialidades e operação offline em uma plataforma sob medida.",
    result: "Atendimento e gestão reunidos em um fluxo digital integrado.",
    href: "/lp/audiomed/",
  },
  {
    number: "02",
    name: "Plataforma Educacional",
    field: "Ecossistemas de ensino",
    image: "/images/edu-platform-hero.jpg",
    alt: "Visualização da plataforma de gestão educacional",
    problem: "Conectar jornadas acadêmicas dispersas em uma operação coerente.",
    intervention: "Portais, avaliações, gestão de campus e integrações acadêmicas concebidos como um ecossistema.",
    result: "Uma visão integrada da operação educacional, da captação à gestão.",
    href: "/lp/educacional/",
  },
  {
    number: "03",
    name: "Nimbus",
    field: "Infrastructure R&D · projeto próprio",
    problem: "Gerenciar múltiplos provedores e limites de uso por interfaces e regras diferentes.",
    intervention: "Base desktop com contrato comum de provedores e avaliação de cotas para orientar o roteamento.",
    result: "Fundação de engenharia e prévia de decisões de roteamento no aplicativo desktop.",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-white/10 py-24 md:py-36">
      <div className="container mx-auto px-8">
        <div className="mb-16 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">01 / Projetos selecionados</p>
            <h2 className="text-4xl font-light tracking-tight text-white md:text-6xl">Engenharia em contexto.</h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-white/50">
            Três problemas distintos. A mesma atenção ao funcionamento real de cada operação.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {cases.map((project) => (
            <article key={project.number} className="grid gap-8 border-t border-white/15 pt-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-14">
              {"image" in project && project.image ? (
                <Link href={project.href} className="group block overflow-hidden bg-white/[0.035]" aria-label={`Conhecer o projeto ${project.name}`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1200}
                    height={750}
                    className="aspect-[16/10] w-full object-cover opacity-85 transition-[transform,opacity] duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                  />
                </Link>
              ) : (
                <div role="img" aria-label="Diagrama conceitual da arquitetura multicloud Nimbus" className="flex min-h-[340px] flex-col justify-between border border-white/10 bg-[#111318] p-6 md:aspect-[16/10] md:p-10">
                  <div className="flex items-center justify-between border-b border-white/15 pb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    <span>Nimbus / R&D</span><span>Cloud orchestration</span>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-2 text-center font-mono text-[10px] uppercase tracking-wider text-white/65 md:grid-cols-5 md:gap-4 md:text-xs">
                    <span className="border border-white/20 py-3">AWS</span>
                    <span className="border border-white/20 py-3">Cloudflare</span>
                    <span className="border border-white/20 py-3">Firebase</span>
                    <span className="border border-white/20 py-3">GitHub</span>
                    <span className="border border-white/20 py-3">GCP</span>
                  </div>
                  <div className="mx-auto h-10 w-px bg-white/20" />
                  <div className="mx-auto w-full max-w-sm border border-white/35 px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-white">Provider contract / quota routing</div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">Representação conceitual · protótipo</p>
                </div>
              )}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                    <span>{project.number} / {project.field}</span>
                  </div>
                  <h3 className="mb-8 text-3xl font-light tracking-tight text-white md:text-4xl">{project.name}</h3>
                  <dl className="space-y-5 text-sm leading-relaxed">
                    <div><dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Desafio</dt><dd className="text-white/70">{project.problem}</dd></div>
                    <div><dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Intervenção</dt><dd className="text-white/70">{project.intervention}</dd></div>
                    <div><dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Resultado</dt><dd className="text-white/70">{project.result}</dd></div>
                  </dl>
                </div>
                {"href" in project && project.href ? (
                  <Link href={project.href} className="mt-9 inline-flex w-fit items-center gap-2 border-b border-white/40 pb-1 text-sm text-white transition-colors hover:border-white" aria-label={`Ver projeto ${project.name}`}>
                    Ver projeto <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : <span className="mt-9 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">Pesquisa em desenvolvimento</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
