import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, Cpu, Layout, Smartphone, Globe, Code2, Users, Shield, Clock, Hourglass } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { kairosProducts, chronosProducts, featuredKairos, featuredChronos, groupedProducts } from "@/data/products";
import type { ProductCategory } from "@/data/products";

/* icon map per category */
const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  IA: <Cpu className="h-4 w-4" />,
  Sistemas: <Layout className="h-4 w-4" />,
  Mobile: <Smartphone className="h-4 w-4" />,
  Web: <Globe className="h-4 w-4" />,
  DevTools: <Code2 className="h-4 w-4" />,
  Setores: <Users className="h-4 w-4" />,
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [logoText, setLogoText] = useState({ bold: "Chrono", italic: "Kairo" });
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty("--navbar-h", `${height}px`);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      resizeObserver.disconnect();
    };
  }, [logoText]);

  useEffect(() => {
    const targetBold = isScrolled ? "C" : "Chrono";
    const targetItalic = isScrolled ? "K + Artificial Intelligence <3" : "Kairo";

    if (logoText.bold === targetBold && logoText.italic === targetItalic) {
      return;
    }

    const timer = setTimeout(() => {
      setLogoText((current) => {
        const { bold, italic } = current;

        if (italic !== "" && !targetItalic.startsWith(italic)) {
          return { bold, italic: italic.slice(0, -1) };
        }
        if (bold !== "" && !targetBold.startsWith(bold)) {
          return { bold: bold.slice(0, -1), italic };
        }
        if (targetBold.startsWith(bold) && bold !== targetBold) {
          const nextChar = targetBold[bold.length];
          return { bold: bold + nextChar, italic };
        }
        if (targetItalic.startsWith(italic) && italic !== targetItalic) {
          const nextChar = targetItalic[italic.length];
          return { bold, italic: italic + nextChar };
        }

        return current;
      });
    }, isScrolled ? 22 : 18);

    return () => clearTimeout(timer);
  }, [isScrolled, logoText]);

  /* close products panel when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHomePage = location.pathname === "/";

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setProductsOpen(false);
  };

  // scroll-to-section helper (no longer needed for direct refs but kept for group items)
  function scrollToSection(id: string) {
    closeMenus();
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  }

  const goToSection = (id: string) => scrollToSection(id);

  const goToProducts = () => {
    closeMenus();
    navigate("/produtos");
  };

  const goToProduct = (slug: string) => {
    closeMenus();
    navigate(`/produtos/${slug}`);
  };

  interface NavItem {
    label: string;
    kind: "section" | "products" | "group";
    id?: string;
    subItems?: { label: string; id: string }[];
  }

  const navItems: NavItem[] = [
    { label: "Pesquisas", kind: "section", id: "atuacao" },
    { label: "Produtos", kind: "products" },
    {
      label: "Learn",
      kind: "group",
      subItems: [
        { label: "ChronoKairo League", id: "about" },
        { label: "Tutoriais", id: "services" },
        { label: "Casos de Uso", id: "projects" },
        { label: "For VibeCoders", id: "team" },
      ],
    },
    {
      label: "Company",
      kind: "group",
      subItems: [
        { label: "Somos Chronokairo", id: "about" },
        { label: "Carreiras", id: "contact" },
        { label: "Eventos", id: "contact" },
      ],
    },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "acrylic shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col h-11 justify-center w-[220px] md:w-[320px] shrink-0">
              <span
                className={`font-serif font-bold tracking-tight text-foreground select-none transition-all duration-300 ${
                  isScrolled ? "text-xs md:text-base" : "text-xl"
                }`}
              >
                {logoText.bold}
                <span className="font-normal italic">{logoText.italic}</span>
              </span>
              <span
                className={`text-[9px] tracking-[0.25em] text-muted-foreground uppercase transition-all duration-300 mt-0.5 ${
                  isScrolled
                    ? "opacity-0 max-h-0 pointer-events-none scale-90"
                    : "opacity-100 max-h-5 scale-100"
                }`}
              >
                Tecnologia no tempo certo
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              /* ── PRODUCTS MEGA-DROPDOWN ── */
              if (item.kind === "products") {
                return (
                  <div key={index} ref={productsRef}>
                    <button
                      onClick={() => setProductsOpen((o) => !o)}
                      className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 flex items-center gap-1 cursor-pointer"
                      aria-expanded={productsOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 opacity-60 transition-transform duration-300 ${
                          productsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {productsOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[960px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border shadow-xl overflow-hidden animate-scale-in"
                        style={{ background: "var(--background)" }}
                      >
                        {/* thin top accent */}
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

                        <div className="grid grid-cols-[1fr_1fr_260px]">
                          {/* ── CHRONOS COLUMN ── */}
                          <div className="p-7 border-r border-border">
                            <div className="flex items-center gap-2 mb-5">
                              <span className="font-mono text-xs font-bold text-foreground/70 select-none">&lt;/&gt;</span>
                              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
                                Chronos
                              </p>
                            </div>
                            <div className="space-y-0.5 max-h-[380px] overflow-y-auto custom-scrollbar pr-1">
                              {chronosProducts.map((product) => (
                                <Link
                                  key={product.slug}
                                  to={`/produtos/${product.slug}`}
                                  onClick={() => setProductsOpen(false)}
                                  className="flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-foreground/5 group"
                                >
                                  <span className="text-sm font-medium text-foreground">
                                    {product.title}
                                  </span>
                                  <span className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-1">
                                    {product.summary}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-5 border-t border-border">
                              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-1">Enterprise</p>
                              <p className="text-xs text-muted-foreground leading-snug">
                                Venda consultiva · Contrato anual · Implantação assistida
                              </p>
                            </div>
                          </div>

                          {/* ── KAIROS COLUMN ── */}
                          <div className="p-7 border-r border-border">
                            <div className="flex items-center gap-2 mb-5">
                              <Hourglass className="h-3.5 w-3.5 text-foreground/70 animate-pulse-subtle" />
                              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
                                Kairos
                              </p>
                            </div>
                            <div className="space-y-0.5 max-h-[380px] overflow-y-auto custom-scrollbar pr-1">
                              {kairosProducts.map((product) => (
                                <Link
                                  key={product.slug}
                                  to={`/produtos/${product.slug}`}
                                  onClick={() => setProductsOpen(false)}
                                  className="flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-foreground/5 group"
                                >
                                  <span className="text-sm font-medium text-foreground">
                                    {product.title}
                                  </span>
                                  <span className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-1">
                                    {product.summary}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* ── FEATURED PANEL ── */}
                          <div className="bg-foreground/[0.02] p-6 flex flex-col">
                            <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground mb-4">
                              Destaques
                            </p>
                            <div className="flex-1 space-y-2">
                              {[...featuredKairos.slice(0, 2), ...featuredChronos.slice(0, 1)].map((product) => (
                                <button
                                  key={product.slug}
                                  onClick={() => goToProduct(product.slug)}
                                  className="w-full text-left rounded-xl border border-border/60 bg-background p-3.5 transition-all hover:border-foreground/20 hover:shadow-sm group"
                                >
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                                      {product.brand}
                                    </span>
                                    {product.brand === "Kairos" ? (
                                      <Hourglass className="h-3 w-3 text-foreground/60 animate-pulse-subtle" />
                                    ) : (
                                      <span className="font-mono text-[10px] font-bold text-foreground/60 select-none">&lt;/&gt;</span>
                                    )}
                                  </div>
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-medium text-foreground">
                                      {product.title}
                                    </span>
                                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                  </div>
                                  <p className="mt-0.5 text-xs text-muted-foreground leading-snug line-clamp-1">
                                    {product.summary}
                                  </p>
                                </button>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-border">
                              <button
                                onClick={goToProducts}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                              >
                                Ver catálogo completo
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              /* ── GROUP DROPDOWN (Learn / Company) ── */
              if (item.kind === "group" && item.subItems) {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 relative group flex items-center gap-1 cursor-pointer">
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.subItems.map((sub, sIdx) => (
                        <DropdownMenuItem
                          key={sIdx}
                          onSelect={() => goToSection(sub.id)}
                          className="cursor-pointer"
                        >
                          {sub.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              /* ── SIMPLE SECTION LINK ── */
              return (
                <button
                  key={index}
                  onClick={() => goToSection(item.id!)}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-foreground scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="hidden md:inline-flex rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors px-6 h-10 border-0 font-medium cursor-pointer">
                  Fale Conosco
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="mailto:contato@chronokairo.com.br">Email</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="tel:+5592981244044">Telefone</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://wa.me/5592981244044"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => scrollToSection("contact")}>
                  Formulário de contato
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — altura dinâmica = tela disponível após a navbar */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          position: "fixed",
          top: "var(--navbar-h, 72px)",
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          zIndex: 40,
        }}
      >
        <div className="acrylic border-t border-border min-h-full">
          <div className="container mx-auto px-5 py-3 flex flex-col">

            {/* ── NAV ITEMS ── */}
            {navItems.map((item, index) => {
              /* SECTION link */
              if (item.kind === "section") {
                return (
                  <button
                    key={index}
                    onClick={() => goToSection(item.id!)}
                    className="text-left py-3.5 px-2 text-sm font-medium text-foreground border-b border-border/40 last:border-0"
                  >
                    {item.label}
                  </button>
                );
              }

              /* PRODUCTS accordion */
              if (item.kind === "products") {
                return (
                  <div key={index} className="border-b border-border/40">
                    <button
                      onClick={() => setMobileProductsOpen((o) => !o)}
                      className="flex items-center justify-between w-full py-3.5 px-2 text-sm font-medium text-foreground"
                    >
                      <span>Produtos</span>
                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                          mobileProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileProductsOpen && (
                      <div className="pb-3">
                        {/* Chronos */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 px-2 py-2">
                            <span className="font-mono text-[10px] font-bold text-foreground/70 select-none">&lt;/&gt;</span>
                            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                              Chronos
                            </span>
                          </div>
                          {chronosProducts.map((product) => (
                            <button
                              key={product.slug}
                              onClick={() => goToProduct(product.slug)}
                              className="flex flex-col text-left w-full py-2.5 pl-6 pr-3 border-b border-border/20 last:border-0 group"
                            >
                              <span className="text-sm font-medium text-foreground group-active:opacity-70">
                                {product.title}
                              </span>
                              <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                {product.summary}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Kairos */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 px-2 py-2">
                            <Hourglass className="h-3 w-3 text-foreground/70" />
                            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                              Kairos
                            </span>
                          </div>
                          {kairosProducts.map((product) => (
                            <button
                              key={product.slug}
                              onClick={() => goToProduct(product.slug)}
                              className="flex flex-col text-left w-full py-2.5 pl-6 pr-3 border-b border-border/20 last:border-0 group"
                            >
                              <span className="text-sm font-medium text-foreground group-active:opacity-70">
                                {product.title}
                              </span>
                              <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                {product.summary}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* CTA */}
                        <button
                          onClick={goToProducts}
                          className="mx-2 mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-foreground py-2"
                        >
                          Ver catálogo completo
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              /* GROUP dropdown */
              if (item.kind === "group" && item.subItems) {
                return (
                  <div key={index} className="border-b border-border/40">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground px-2 pt-4 pb-1">
                      {item.label}
                    </p>
                    {item.subItems.map((sub, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => goToSection(sub.id)}
                        className="text-left w-full py-2.5 pl-5 pr-3 text-sm text-foreground border-b border-border/20 last:border-0"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                );
              }

              return null;
            })}

            {/* ── CONTACT ── */}
            <div className="pt-5 pb-8 flex flex-col gap-3">
              <a
                href="https://wa.me/5592981244044"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenus}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
              >
                Fale Conosco
              </a>
            </div>

          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
