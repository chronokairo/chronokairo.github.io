import { Briefcase, Code2, PenTool, Server } from "lucide-react";

const Scope = () => {
  const areas = [
    {
      icon: Code2,
      title: "Atividades principais de desenvolvimento",
      description: "Core business de criação e evolução de software.",
      items: [
        <>
          Desenvolvimento de programas sob encomenda:{" "}
          <strong className="text-foreground font-semibold">
            plataformas personalizadas
          </strong>
          , sistemas internos, e-commerce e portais educacionais/institucionais.
        </>,
        <>
          Desenvolvimento e licenciamento de softwares customizáveis{" "}
          <strong className="text-foreground font-semibold">(SaaS)</strong> para
          assinatura ou licença de uso.
        </>,
        <>
          Aplicativos para{" "}
          <strong className="text-foreground font-semibold">Android e iOS</strong>,
          incluindo soluções corporativas e educacionais.
        </>,
      ],
    },
    {
      icon: PenTool,
      title: "Design de experiência e interface (UX/UI)",
      description: "Aumento de conversão e usabilidade com design moderno.",
      items: [
        <>
          Web design e interface responsiva com foco em{" "}
          <strong className="text-foreground font-semibold">
            experiência do usuário
          </strong>
          .
        </>,
        <>
          <strong className="text-foreground font-semibold">Motion design</strong>{" "}
          e identidade visual digital para interfaces mais claras e intuitivas.
        </>,
      ],
    },
    {
      icon: Server,
      title: "Infraestrutura, integrações e suporte técnico",
      description: "Entrega ponta a ponta com sustentação e escalabilidade.",
      items: [
        <>
          Suporte técnico,{" "}
          <strong className="text-foreground font-semibold">manutenção</strong>,
          correções e otimização de performance.
        </>,
        <>
          Tratamento de dados e{" "}
          <strong className="text-foreground font-semibold">
            hospedagem em nuvem
          </strong>{" "}
          (AWS, Google Cloud, Vercel), com gestão de bancos.
        </>,
      ],
    },
    {
      icon: Briefcase,
      title: "Consultoria e estratégia tecnológica",
      description: "Direcionamento estratégico para modernização.",
      items: [
        <>
          Consultoria em TI para empresas de{" "}
          <strong className="text-foreground font-semibold">Manaus</strong>{" "}
          (comércio, educação e Polo Industrial).
        </>,
        <>
          Mapeamento de processos e recomendação de{" "}
          <strong className="text-foreground font-semibold">
            automações com IA
          </strong>{" "}
          e ferramentas de mercado.
        </>,
      ],
    },
  ];

  return (
    <section id="atuacao" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            Atuação & CNAEs
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Escopo <span className="text-muted-foreground">técnico e legal</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A ChronoKairo, startup/software house em{" "}
            <strong className="text-foreground font-semibold">Manaus</strong>, atua em{" "}
            <strong className="text-foreground font-semibold">
              transformação digital
            </strong>{" "}
            e experiências digitais modernas. No mercado amazonense, entrega
            plataformas institucionais e educacionais — como o{" "}
            <strong className="text-foreground font-semibold">
              Instituto W / WD Educacional
            </strong>
            — com um escopo alinhado aos{" "}
            <strong className="text-foreground font-semibold">CNAEs</strong> e à
            operação do{" "}
            <strong className="text-foreground font-semibold">CNPJ</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 border border-border/50 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <area.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 border border-border/50">
          <p className="text-muted-foreground leading-relaxed">
            Em resumo, a ChronoKairo está habilitada para transformar uma ideia bruta
            em um ecossistema digital completo:{" "}
            <strong className="text-foreground font-semibold">UX/UI</strong>,{" "}
            <strong className="text-foreground font-semibold">front-end</strong> e{" "}
            <strong className="text-foreground font-semibold">back-end</strong>,
            integrações com{" "}
            <strong className="text-foreground font-semibold">APIs</strong> e{" "}
            <strong className="text-foreground font-semibold">automações</strong>,
            publicação em servidores seguros e{" "}
            <strong className="text-foreground font-semibold">
              manutenção contínua
            </strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scope;
