"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Layout, Smartphone, Globe, Code2, Users, MessageSquare } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductBySlug, groupedProducts, products } from "@/data/products";
import type { ProductCategory } from "@/data/products";

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  IA: <Cpu className="h-5 w-5" />,
  Sistemas: <Layout className="h-5 w-5" />,
  Mobile: <Smartphone className="h-5 w-5" />,
  Web: <Globe className="h-5 w-5" />,
  DevTools: <Code2 className="h-5 w-5" />,
  Setores: <Users className="h-5 w-5" />,
};

const ProductDetail = ({ slug }: { slug: string }) => {
  const product = getProductBySlug(slug);

  if (!product) {
    return null;
  }

  const related = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  );

  const categoryGroup = groupedProducts.find((group) => group.key === product.category);
  const categoryProductsCount = products.filter((p) => p.category === product.category).length;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28">
          {/* ── BREADCRUMB ── */}
          <div className="border-b border-border/60">
            <div className="container mx-auto px-6 py-4">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/produtos" className="hover:text-foreground transition-colors">
                  Produtos
                </Link>
                <span>/</span>
                <span className="text-[10px] font-mono uppercase tracking-wider">
                  {product.category}
                </span>
                <span>/</span>
                <span className="text-foreground font-medium">{product.title}</span>
              </nav>
            </div>
          </div>

          {/* ── HERO ── */}
          <section className="border-b border-border/60">
            <div className="container mx-auto px-6 py-16 md:py-24">
              <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
                {/* left */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/8 text-foreground/60">
                      {categoryIcons[product.category]}
                    </span>
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
                      {product.category}
                    </Badge>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.05]">
                    {product.title}
                  </h1>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70 max-w-2xl">
                    {product.description}
                  </p>

                  {/* highlights */}
                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {product.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-xl border border-border bg-foreground/[0.02] p-4 transition-colors hover:border-foreground/20"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/60" />
                        <span className="text-sm leading-relaxed text-foreground/75">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* right sidebar card */}
                <div className="lg:pt-2">
                  <div className="rounded-2xl border border-border bg-foreground/[0.015] p-7 space-y-7 sticky top-28">
                    {/* category info */}
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-1">
                        Categoria
                      </p>
                      <p className="text-sm font-medium text-foreground">{categoryGroup?.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{categoryGroup?.description}</p>
                    </div>

                    <div className="border-t border-border" />

                    {/* stack */}
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-mono text-foreground/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border" />

                    {/* products in category */}
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-1">
                        Produtos nesta categoria
                      </p>
                      <p className="text-2xl font-serif font-bold text-foreground">{categoryProductsCount}</p>
                    </div>

                    <div className="border-t border-border" />

                    {/* CTAs */}
                    <div className="space-y-3">
                      <Button asChild className="w-full rounded-full h-11 bg-foreground text-background hover:bg-foreground/90 border-0">
                        <Link href="/#contact">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Solicitar algo parecido
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full rounded-full h-11">
                        <Link href="/produtos">
                          Ver mais produtos
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── RELATED ── */}
          {related.length > 0 && (
            <section className="container mx-auto px-6 py-16">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    Relacionados
                  </p>
                  <h2 className="mt-1 text-2xl md:text-3xl font-serif font-bold text-foreground">
                    Outros produtos de {product.category}
                  </h2>
                </div>
                <Link
                  href="/produtos"
                  className="hidden md:inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Ver todos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {related.slice(0, 3).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/produtos/${item.slug}`}
                    className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/25 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <Badge variant="secondary" className="rounded-full text-[10px] font-mono uppercase tracking-wider">
                        {item.category}
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── BACK LINK ── */}
          <div className="container mx-auto px-6 pb-16">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao catálogo
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
