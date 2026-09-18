import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";

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
            <span className="block">Software house de produtos digitais</span>
            <span className="block font-normal italic">com IA, integração e automação.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            A hora é agora para escalar com IA generativa, integração de legados e
            hiperautomação com governança. A <span className="font-serif font-bold text-foreground">Chrono<span className="font-normal italic">Kairo</span></span> desenvolve software sob medida para
            empresas que precisam entregar valor mensurável com mais velocidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
            <a
              href="https://wa.me/5592981244044?text=Ol%C3%A1%20ChronoKairo!%20Gostaria%20de%20conversar%20sobre%20solucoes%20tecnologicas%20para%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-all duration-300 px-8 py-4.5 h-auto text-base font-semibold cursor-pointer shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 hover:-translate-y-0.5 active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
              <span>Falar no WhatsApp</span>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="group rounded-full border border-border bg-card/60 text-foreground hover:bg-secondary transition-all px-8 py-4.5 h-auto text-base font-medium cursor-pointer"
            >
              <span>Ver Pilares</span>
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-border pt-12 animate-fade-in-up animation-delay-400">
          {[
            { value: "17+", label: "Produtos" },
            { value: "2024", label: "Fundação" },
            { value: "Região Norte", label: "Base de Operações" },
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
