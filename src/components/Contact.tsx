import { WhatsAppIcon } from "@/components/BrandIcons";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5592981244044?text=Ol%C3%A1%20ChronoKairo.%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20meu%20projeto.";

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-border/50" />

      <div className="container mx-auto px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[11px] font-mono tracking-[0.3em] text-muted-foreground uppercase mb-10">
            Acesso exclusivo
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] mb-6 text-foreground">
            Trabalhos selecionados.<br />
            <em className="not-italic text-foreground/60">Um projeto de cada vez.</em>
          </h2>

          {/* Body */}
          <p className="text-sm md:text-base text-muted-foreground font-light leading-[1.9] mb-14 max-w-md mx-auto">
            Atendemos um número limitado de projetos por ciclo. Se o seu problema é real e o prazo importa, fale conosco antes que a agenda feche.
          </p>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:bg-foreground/90 transition-all duration-300 hover:-translate-y-px active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.06)] group"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            Solicitar consulta
            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-200" />
          </a>

          {/* Availability signal */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <p className="text-xs text-muted-foreground font-mono tracking-wider">
              Agenda aberta — resposta em até 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
