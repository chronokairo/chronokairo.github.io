import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "Sobre", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Atuação", href: "#atuacao" },
      { label: "Projetos", href: "#projects" },
      { label: "Equipe", href: "#team" },
    ],
    legal: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
    ],
  };

  const social = [
    { icon: Github, href: "https://github.com/chronokairo", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/chronokairo", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/chronokairo", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/chronokairo", label: "X (Twitter)" },
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground">
                  CHRONO<span className="text-foreground">KAIRO</span>
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Arquitetura, integração e inteligência para gerar valor mensurável no seu negócio.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground/5 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ChronoKairo. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com precisão e dedicação.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
