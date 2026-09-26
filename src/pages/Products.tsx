"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers, Briefcase, TrendingUp, Building2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge, Button } from "@chronokairo/platform/ui";
import { groupedProducts, featuredProducts, getProductIcon } from "@/data/products";
import type { ProductCategory } from "@/data/products";

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  Fundação: <Layers className="h-4 w-4" />,
  Operação: <Briefcase className="h-4 w-4" />,
  Crescimento: <TrendingUp className="h-4 w-4" />,
  Verticais: <Building2 className="h-4 w-4" />,
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filteredGroups =
    activeCategory === "all"
      ? groupedProducts
      : groupedProducts.filter((g) => g.key === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-foreground selection:text-background transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-32 pb-24">
          {/* ── HERO ── */}
          <section className="border-b border-border">
            <div className="container mx-auto px-8 py-20 md:py-28">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-[0.25em] text-muted-foreground uppercase">
                    Coleção Proprietária
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-[-0.02em] leading-[1.08] mb-6 text-foreground">
                  Uma base única.<br />
                  <em className="not-italic font-extralight text-muted-foreground">Doze produtos maduros.</em>
                </h1>

                <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Cada projeto sob medida parte de componentes já testados em produção. O cliente recebe o que é exclusivo da
                  sua operação, sobre uma fundação que não precisa ser reinventada. Os produtos são licenciados sob consulta,
                  como parte de um engajamento.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button asChild size="pill" className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 font-medium border-0 shadow-sm">
                    <Link href="/#contact">Solicitar consulta técnica</Link>
                  </Button>
                  <Button asChild variant="outline" size="pill" className="h-12 px-8 border-border hover:bg-foreground/5">
                    <a
                      href="#catalogo"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Explorar a coleção
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* ── FEATURED ── */}
          <section className="border-b border-border bg-muted/20">
            <div className="container mx-auto px-8 py-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-5 rounded-full bg-muted-foreground" />
                <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
                  Pilares da Coleção
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featuredProducts.map((product) => {
                  const Icon = getProductIcon(product.slug);
                  return (
                    <Link
                      key={product.slug}
                      href={`/produtos/${product.slug}`}
                      className="group rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-7 transition-all duration-300 hover:border-foreground/30 hover:bg-card hover:-translate-y-0.5 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-6">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-foreground group-hover:bg-foreground/10 transition-colors">
                            <Icon className="h-5 w-5" />
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <h3 className="text-xl font-light tracking-tight text-foreground group-hover:text-foreground/90 transition-colors">
                          {product.title}
                        </h3>
                        <p className="mt-2.5 text-sm font-light text-muted-foreground leading-relaxed">
                          {product.summary}
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-border/60 flex flex-wrap items-center gap-1.5">
                        {product.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border/80 bg-muted/30 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── CATALOG ── */}
          <section id="catalogo" className="container mx-auto px-8 py-20 scroll-mt-24">
            {/* Category filter tabs */}
            <div className="flex items-center gap-2 mb-16 flex-wrap">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-5 py-2 text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-foreground text-background shadow-sm"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 bg-card/40"
                }`}
              >
                Todos
              </button>
              {groupedProducts.map((group) => (
                <button
                  type="button"
                  key={group.key}
                  onClick={() => setActiveCategory(group.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    activeCategory === group.key
                      ? "bg-foreground text-background shadow-sm"
                      : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 bg-card/40"
                  }`}
                >
                  {categoryIcons[group.key]}
                  {group.label}
                </button>
              ))}
            </div>

            <div className="grid gap-20">
              {filteredGroups.map((group) => (
                <section key={group.key} className="space-y-8">
                  {/* Category label */}
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
                        {categoryIcons[group.key]}
                      </span>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                          {group.key}
                        </p>
                        <h2 className="text-xl font-light tracking-tight text-foreground">
                          {group.description}
                        </h2>
                      </div>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs rounded-full">
                      {group.products.length} {group.products.length === 1 ? "produto" : "produtos"}
                    </Badge>
                  </div>

                  {/* Product cards */}
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.products.map((product) => {
                      const Icon = getProductIcon(product.slug);
                      return (
                        <Link
                          key={product.slug}
                          href={`/produtos/${product.slug}`}
                          className="group flex flex-col justify-between rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-7 transition-all duration-300 hover:border-foreground/30 hover:bg-card hover:-translate-y-0.5 shadow-sm"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/[0.04] text-foreground group-hover:bg-foreground/[0.08] transition-colors">
                                <Icon className="h-4 w-4" />
                              </span>
                              <Badge variant="outline" className="rounded-full text-[10px] font-mono uppercase tracking-wider">
                                {product.category}
                              </Badge>
                            </div>

                            <div>
                              <h3 className="text-lg font-light text-foreground group-hover:text-foreground/90 transition-colors">
                                {product.title}
                              </h3>
                              <p className="mt-2 text-sm font-light text-muted-foreground leading-relaxed">
                                {product.summary}
                              </p>
                            </div>

                            <p className="text-xs font-light text-muted-foreground/80 line-clamp-2 leading-relaxed">
                              {product.description}
                            </p>
                          </div>

                          <div className="mt-6 pt-5 border-t border-border/60 flex flex-col gap-3">
                            <div className="flex flex-wrap gap-1.5">
                              {product.stack.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-border/80 bg-muted/30 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors pt-2">
                              <span>Conhecer arquitetura</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* CTA bottom card */}
            <div className="mt-24 rounded-3xl border border-border bg-card/60 backdrop-blur-xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-xl">
                <span className="text-[11px] font-mono tracking-[0.25em] text-muted-foreground uppercase mb-3 block">
                  Engenharia Sob Medida
                </span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
                  Demanda específica para sua operação?
                </h2>
                <p className="mt-3 text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                  Projetamos sistemas personalizados e adaptamos produtos consolidados para o contexto
                  operacional da sua equipe.
                </p>
              </div>
              <div className="relative z-10">
                <Button asChild size="pill" className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 font-medium border-0 shadow-sm">
                  <Link href="/#contact">Iniciar diagnóstico</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Products;
