import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@chronokairo.com.br",
      link: "mailto:contato@chronokairo.com.br",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (92) 98124-4044",
      link: "tel:+5592981244044",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Brasil",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground">
            Vamos <span className="font-normal italic">conversar</span>
          </h2>
          <p className="text-foreground/80 text-sm">
            Pronto para transformar suas ideias em realidade? Entre em contato pelo canal de sua preferência.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp CTA — destaque principal */}
          <div className="lg:col-span-3">
            <div className="border border-border rounded-lg p-8 bg-card h-full flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Canal principal</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">WhatsApp</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  A forma mais rápida de iniciar uma conversa sobre seu projeto. Respondemos em horário comercial.
                </p>
              </div>
              <a
                href="https://wa.me/5592981244044"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
              >
                Iniciar conversa
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Contact Details */}
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-lg font-serif font-bold mb-6 text-foreground">Informações</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors text-foreground">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{info.title}</div>
                      <div className="font-serif font-bold text-foreground group-hover:underline transition-all">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-3 mb-4 text-foreground">
                <Clock className="w-5 h-5" />
                <h3 className="text-lg font-serif font-bold">Horário</h3>
              </div>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs font-mono uppercase">// Segunda - Sexta</span>
                  <span>9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs font-mono uppercase">// Sábado</span>
                  <span>9h - 13h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs font-mono uppercase">// Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
