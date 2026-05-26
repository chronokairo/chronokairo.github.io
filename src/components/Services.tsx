import { Brain, Target, Workflow, Boxes, ShieldCheck, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Sistemas Agênticos (IA-First)",
      description:
        "Plataformas multiagentes com guardrails, orquestração e conexão a dados proprietários.",
    },
    {
      icon: Target,
      title: "Consultoria de Valor & Legados",
      description:
        "Contratos por resultado e modernização de ERPs/CRMs via APIs e microsserviços.",
    },
    {
      icon: Workflow,
      title: "Hiperautomação com Governança",
      description:
        "n8n/Make/IA com auditoria, tratamento de erros e conformidade LGPD.",
    },
    {
      icon: Boxes,
      title: "Micro-SaaS Verticais",
      description:
        "Produtos nichados com dados proprietários e receita recorrente.",
    },
    {
      icon: ShieldCheck,
      title: "Cibersegurança & Observabilidade",
      description:
        "Zero Trust, confidential computing e monitoramento preditivo.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
              Pilares 2026
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Onde <span className="text-muted-foreground">geramos valor</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Arquitetura distribuída, integração e inteligência aplicada ao negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border hover:border-foreground/20 bg-background transition-all duration-500 hover:-translate-y-1"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 rounded-2xl bg-foreground/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon & Arrow */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
          >
            Entre em contato para soluções personalizadas
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
