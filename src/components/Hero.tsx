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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-start justify-center pt-[15vh] pointer-events-none select-none">
        <img
          src="/logo.svg"
          alt=""
          aria-hidden="true"
          className="w-[500px] h-[500px] opacity-[0.07] sm:opacity-[0.1]"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-foreground/20 rounded-full animate-float" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-foreground/10 rounded-full animate-float animation-delay-200" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-foreground/15 rounded-full animate-float animation-delay-400" />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-border bg-card rounded-full animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-foreground">
              IA-FIRST // INTEGRAÇÃO // RESULTADO
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 tracking-tight animate-fade-in-up leading-[1.1] text-foreground">
            <span className="block">Software house em Manaus</span>
            <span className="block font-normal italic">com IA, integracao e automacao.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            A hora e agora para escalar com IA generativa, integracao de legados e
            hiperautomacao com governanca. A <span className="font-serif font-bold text-foreground">Chrono<span className="font-normal italic">Kairo</span></span> desenvolve software sob medida para
            empresas que precisam entregar valor mensuravel com mais velocidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
            <Button
              size="lg"
              onClick={scrollToServices}
              className="group rounded-full bg-foreground text-background hover:opacity-90 transition-all px-8 py-6 h-auto text-base font-medium cursor-pointer border-0"
            >
              <span>Ver Pilares</span>
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-all px-8 py-6 h-auto text-base font-medium cursor-pointer"
            >
              Fale Conosco
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-border pt-12 animate-fade-in-up animation-delay-400">
          {[
            { value: "25+", label: "Projetos" },
            { value: "98%", label: "Satisfação" },
            { value: "24/7", label: "Suporte" },
            { value: "2+", label: "Anos" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold mb-2 text-foreground">{stat.value}</div>
              <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase">{stat.label}</div>
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
