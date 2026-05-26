"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Cpu, Layout, Smartphone, Globe, Code2, Users } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { groupedProducts, featuredProducts, getProductIcon } from "@/data/products";
import type { ProductCategory } from "@/data/products";

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  IA: <Cpu className="h-5 w-5" />,
  Sistemas: <Layout className="h-5 w-5" />,
  Mobile: <Smartphone className="h-5 w-5" />,
  Web: <Globe className="h-5 w-5" />,
  DevTools: <Code2 className="h-5 w-5" />,
  Setores: <Users className="h-5 w-5" />,
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filteredGroups =
    activeCategory === "all"
      ? groupedProducts
      : groupedProducts.filter((g) => g.key === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28">
          {/* ── HERO ── */}
          <section className="border-b border-border/60">
            <div className="container mx-auto px-6 py-20 md:py-28">
              <div className="max-w-4xl">
                <Badge variant="outline" className="mb-5 rounded-full px-3 py-1.5 text-xs font-mono uppercase tracking-widest">
                  Produtos
                </Badge>
                <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.05]">
                  Soluções que a<br />
                  <span className="font-normal italic">ChronoKairo</span> entrega
                </h1>
                <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl">
                  Um portfólio organizado por domínio: IA, sistemas de gestão, aplicativos mobile
                  e portais web. Cada produto nasce de um problema real.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <Button asChild className="rounded-full h-11 px-7 bg-foreground text-background hover:bg-foreground/90 border-0">
                    <Link href="/#contact">Falar com a equipe</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full h-11 px-7">
                    <a href="#catalogo" onClick={(e) => { e.preventDefault(); document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" }); }}>
                      Ver catálogo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* ── FEATURED ── */}
          <section className="border-b border-border/60 bg-foreground/[0.015]">
            <div className="container mx-auto px-6 py-14">
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground mb-6">
                Destaques
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {featuredProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/produtos/${product.slug}`}
                    className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-foreground/25 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/8 text-foreground/60">
                        {(() => {
                          const Icon = getProductIcon(product.slug);
                          return <Icon className="h-5 w-5" />;
                        })()}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{product.title}</h3>
                    <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{product.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] font-mono text-foreground/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── CATALOG ── */}
          <section id="catalogo" className="container mx-auto px-6 py-16">
            {/* category filter tabs */}
            <div className="flex items-center gap-2 mb-12 flex-wrap">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-foreground text-background"
                    : "border border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {groupedProducts.map((group) => (
                <button
                  key={group.key}
                  onClick={() => setActiveCategory(group.key)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeCategory === group.key
                      ? "bg-foreground text-background"
                      : "border border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {categoryIcons[group.key]}
                  {group.label}
                </button>
              ))}
            </div>

            <div className="grid gap-16">
              {filteredGroups.map((group) => (
                <section key={group.key} className="space-y-6">
                  {/* category label */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/8 text-foreground/60">
                      {categoryIcons[group.key]}
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                        {group.key}
                      </p>
                      <h2 className="text-lg font-serif font-bold text-foreground">
                        {group.description}
                      </h2>
                    </div>
                  </div>

                  {/* product cards */}
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/produtos/${product.slug}`}
                        className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/25 hover:shadow-md"
                      >
                        {/* card top stripe */}
                        <div className="h-1 w-full bg-gradient-to-r from-foreground/10 via-foreground/20 to-foreground/10 group-hover:via-foreground/40 transition-all duration-500" />

                        <div className="flex flex-col flex-1 p-6 space-y-4">
                          <div className="flex items-center justify-between gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.04] text-foreground/65 group-hover:bg-foreground/[0.08] group-hover:text-foreground transition-all duration-300">
                              {(() => {
                                const Icon = getProductIcon(product.slug);
                                return <Icon className="h-4 w-4" />;
                              })()}
                            </span>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="rounded-full text-[10px] font-mono uppercase tracking-wider">
                                {product.category}
                              </Badge>
                              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                          </div>

                          <div>
                            <h3 className="font-serif text-xl font-bold text-foreground">
                              {product.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                              {product.summary}
                            </p>
                          </div>

                          <p className="text-xs leading-relaxed text-foreground/50 flex-1">
                            {product.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {product.stack.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] font-mono text-foreground/70"
                              >
                                {item}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground pt-1">
                            Ver produto
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* CTA bottom card */}
            <div className="mt-20 rounded-2xl border border-border bg-foreground/[0.02] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Quer algo sob medida?
                </h2>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed max-w-lg">
                  Podemos montar um produto novo ou adaptar um existente ao seu cenário.
                  Conte o problema e a gente desenha a solução.
                </p>
              </div>
              <Button asChild className="shrink-0 rounded-full h-11 px-7 bg-foreground text-background hover:bg-foreground/90 border-0">
                <Link href="/#contact">Falar com a equipe</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
