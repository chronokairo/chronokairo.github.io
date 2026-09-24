"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { ThemeToggle } from "@chronokairo/platform/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WHATSAPP_URL =
  "https://wa.me/5592981244044?text=Ol%C3%A1%20Chronokairo.%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20meu%20projeto.";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--navbar-h",
          `${navRef.current.offsetHeight}px`
        );
      }
    };
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { label: "Projetos", href: "/#work" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Produtos", href: "/produtos" },
    { label: "Design", href: "/design" },
    { label: "Contato", href: "/#contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo — Chronokairo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="text-base font-light tracking-[-0.01em] text-foreground group-hover:text-foreground/80 transition-colors">
                Chrono<em className="not-italic font-extralight text-muted-foreground">kairo</em>
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                Tecnologia no tempo certo
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide font-light"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide font-light"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Theme toggle — Dia (branco) / Noite (preto) */}
              <ThemeToggle />

              {/* CTA — Inverte conforme o tema (branco no dark, preto no light) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground hover:bg-foreground/90 text-background text-xs font-medium tracking-wide transition-all duration-200 hover:-translate-y-px active:scale-95 shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                Solicitar consulta
              </a>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-9 h-9 flex items-center justify-center text-foreground rounded-full hover:bg-foreground/5 transition-colors cursor-pointer"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu — fullscreen */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-light text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-light text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground hover:bg-foreground/90 text-background font-medium text-base transition-all"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Solicitar consulta
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
