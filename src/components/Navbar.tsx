"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WHATSAPP_URL =
  "https://wa.me/5592981244044?text=Ol%C3%A1%20ChronoKairo.%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20meu%20projeto.";

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
    { label: "Trabalhos", href: "/lp/inteligencia/" },
    { label: "Agendar", href: "#contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none group"
            >
              <span className="text-base font-light tracking-[-0.01em] text-foreground group-hover:text-foreground/80 transition-colors">
                Chrono<em className="not-italic text-foreground/60">Kairo</em>
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase mt-0.5">
                Tecnologia no tempo certo
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wide transition-all duration-200 hover:-translate-y-px active:scale-95 shadow-lg shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                WhatsApp
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-foreground rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-light text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-light text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-base transition-all"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            WhatsApp
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
