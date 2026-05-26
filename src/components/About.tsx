import { Brain, GitMerge, ShieldCheck, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "IA-First",
      description:
        "Orquestração de agentes com guardrails e integração a dados proprietários.",
    },
    {
      icon: GitMerge,
      title: "Integração de Legados",
      description:
        "APIs e microsserviços para modernizar ERPs/CRMs sem refazer do zero.",
    },
    {
      icon: ShieldCheck,
      title: "Governança e Segurança",
      description:
        "Automação com auditoria, LGPD e observabilidade preditiva.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            Sobre Nós
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Quem <span className="text-muted-foreground">somos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Em 2026, o desenvolvimento básico virou commodity. A ChronoKairo atua onde o
            valor real está: arquitetura complexa, integração de sistemas e inteligência
            operacional orientada a resultados.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl glass transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Etymology Section */}
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              O significado de <span className="text-foreground">ChronoKairo</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif mb-3">Χρόνος</div>
                <div className="text-2xl font-semibold mb-2">Chronos</div>
                <p className="text-sm text-muted-foreground">Tempo cronológico, sequencial</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-border flex items-center justify-center">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif mb-3">Καιρός</div>
                <div className="text-2xl font-semibold mb-2">Kairós</div>
                <p className="text-sm text-muted-foreground">Momento oportuno, decisivo</p>
              </div>
            </div>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nosso nome representa a fusão entre o tempo técnico e o momento oportuno. 
              Entendemos que a tecnologia deve ser implementada não apenas corretamente, 
              mas no momento certo para maximizar seu impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
