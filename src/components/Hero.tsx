import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass rounded-full animate-fade-in">
            <Sparkles className="w-4 h-4 text-foreground/70" />
            <span className="text-sm font-medium text-muted-foreground">
              IA-first | Integração | Resultado
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight animate-fade-in-up">
            <span className="block">A hora é agora.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Com IA generativa e low-code democratizando o básico, a ChronoKairo foca em
            sistemas agênticos, integração de legados e hiperautomação com governança
            para entregar valor mensurável.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
            <Button
              size="lg"
              onClick={scrollToServices}
              className="group relative px-8 py-6 text-base font-medium overflow-hidden"
            >
              <span className="relative z-10">Ver Pilares</span>
              <ArrowDown className="ml-2 h-4 w-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-6 text-base font-medium glass-hover"
            >
              Fale Conosco
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
          {[
            { value: "25+", label: "Projetos" },
            { value: "98%", label: "Satisfação" },
            { value: "24/7", label: "Suporte" },
            { value: "2+", label: "Anos" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-subtle">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-foreground/40 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
