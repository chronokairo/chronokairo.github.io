import { WhatsAppIcon } from "@/components/BrandIcons";

const WHATSAPP_URL =
  "https://wa.me/5592981244044?text=Ol%C3%A1%20ChronoKairo.%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20meu%20projeto.";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-foreground/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-foreground/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Logo watermark — very faint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="/logo.svg"
          alt=""
          aria-hidden="true"
          className="w-[480px] h-[480px] opacity-[0.04]"
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[11px] font-mono tracking-[0.3em] text-muted-foreground uppercase mb-12 animate-fade-in">
            Software House · Manaus, Brasil
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.08] tracking-[-0.02em] mb-8 text-foreground animate-fade-in-up">
            Tecnologia no<br />
            <em className="not-italic font-extralight text-foreground/70">tempo certo.</em>
          </h1>

          {/* Support line */}
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-16 max-w-md mx-auto animate-fade-in-up">
            Construímos software sob medida para empresas que não toleram desperdício de tempo ou dinheiro.
          </p>

          {/* Single CTA */}
          <div className="animate-fade-in-up">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:bg-foreground/90 transition-all duration-300 hover:-translate-y-px active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              Agendar uma conversa
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint — very minimal */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
        <div className="w-px h-10 bg-foreground/40 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
