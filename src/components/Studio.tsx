const expertise = [
  { title: "Alfaiataria Digital", description: "Plataformas B2B e SaaS multi-tenant, desenhadas em torno da operação de cada cliente." },
  { title: "Orquestração", description: "Integrações invisíveis entre ERPs, gateways de pagamento e canais de atendimento." },
  { title: "Rigor Fiscal", description: "Domínio profundo dos ecossistemas SEFAZ e SPED." },
  { title: "Inteligência Aplicada", description: "Agentes, RAG e LLMs locais integrados ao produto, com governança e custo sob controle." },
  { title: "Engenharia Avançada", description: "Arquiteturas hexagonais, sistemas distribuídos e aplicações desktop nativas em Rust." },
];

const principles = [
  { title: "Uma fonte única por capacidade", description: "Nada é duplicado. Cada entrega parte de componentes maduros e testados em produção." },
  { title: "Decisões documentadas", description: "Toda escolha arquitetural relevante fica registrada e pode ser auditada." },
  { title: "Dependências mínimas", description: "Reimplementamos o que diferencia o produto e evitamos bibliotecas triviais." },
  { title: "Discrição", description: "Os projetos de nossos clientes permanecem privados." },
];

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-20 border-t border-border py-24 md:py-36 bg-background">
      <div className="container mx-auto px-8">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">02 / Expertise</p>
        <h2 className="mb-16 max-w-3xl text-4xl font-light tracking-tight text-foreground md:text-6xl">Problemas complexos exigem engenharia conectada.</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {expertise.map((item, index) => (
            <div key={item.title} className="border-t border-border pt-6">
              <span className="font-mono text-xs text-muted-foreground/70">0{index + 1}</span>
              <h3 className="mt-8 mb-4 text-2xl font-light text-foreground">{item.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 border-t border-border py-24 md:py-36 bg-background">
      <div className="container mx-auto grid gap-12 px-8 md:grid-cols-2 md:gap-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">05 / Como trabalhamos</p>
        <div>
          <h2 className="text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
            Poucos projetos.<br />Envolvimento técnico direto.<br /><span className="text-muted-foreground">Do diagnóstico à operação.</span>
          </h2>
          <p className="mt-10 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            Trabalhamos com um número limitado de projetos simultâneos, com um time sênior e dedicado a cada entrega.
          </p>
          <dl className="mt-14 space-y-8">
            {principles.map((item) => (
              <div key={item.title} className="border-t border-border pt-5">
                <dt className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{item.title}</dt>
                <dd className="max-w-lg text-sm font-light leading-relaxed text-foreground/80">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section id="studio" className="scroll-mt-20 border-t border-border py-24 md:py-36 bg-background">
      <div className="container mx-auto grid gap-12 px-8 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-14 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">06 / Chronokairo</p>
          <div className="space-y-9">
            <div>
              <div className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">Χρόνος</div>
              <div className="mt-2 text-sm text-muted-foreground">Chronos</div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">Tempo técnico, sequência e continuidade.</p>
            </div>
            <div className="h-px w-16 bg-border" />
            <div>
              <div className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">Καιρός</div>
              <div className="mt-2 text-sm text-muted-foreground">Kairós</div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">O momento certo para uma decisão decisiva.</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">Tecnologia no tempo certo.</h2>
          <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            Assumimos problemas operacionais complexos e projetamos a solução a partir do contexto de quem vai usá-la. Software, IA e automação entram onde tornam o trabalho mais preciso, confiável e sustentável.
          </p>
          <p className="mt-10 font-serif text-xl font-light italic text-foreground/80">
            Não entregamos software. Arquitetamos ativos digitais perenes.
          </p>
        </div>
      </div>
    </section>
  );
}
