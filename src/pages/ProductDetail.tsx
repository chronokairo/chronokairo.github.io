"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Cpu, Layout, Smartphone, Globe, Code2, Users } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge, Button } from "@chronokairo/platform/ui";
import { getProductBySlug, groupedProducts, products, getProductIcon } from "@/data/products";
import PricingCard from "@/components/Pricing";
import type { ProductCategory } from "@/data/products";

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  IA: <Cpu className="h-4 w-4" />,
  Sistemas: <Layout className="h-4 w-4" />,
  Mobile: <Smartphone className="h-4 w-4" />,
  Web: <Globe className="h-4 w-4" />,
  DevTools: <Code2 className="h-4 w-4" />,
  Setores: <Users className="h-4 w-4" />,
};

const ProductDetail = ({ slug }: { slug: string }) => {
  const product = getProductBySlug(slug);

  if (!product) {
    return null;
  }

  const related = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  );

  const productSchemaLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "BRL",
    },
  };

  const Icon = getProductIcon(product.slug);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-foreground selection:text-background transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaLd) }}
      />
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-32 pb-24">
          {/* ── BREADCRUMB ── */}
          <div className="border-b border-border">
            <div className="container mx-auto px-8 py-4">
              <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Link href="/produtos" className="hover:text-foreground transition-colors">
                  Produtos
                </Link>
                <span>/</span>
                <span className="uppercase tracking-wider">
                  {product.category}
                </span>
                <span>/</span>
                <span className="text-foreground">{product.title}</span>
              </nav>
            </div>
          </div>

          {/* ── HERO ── */}
          <section className="border-b border-border">
            <div className="container mx-auto px-8 py-16 md:py-24">
              <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
                      {product.category}
                    </Badge>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-light tracking-[-0.02em] text-foreground leading-[1.08]">
                    {product.title}
                  </h1>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground font-light max-w-2xl">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {product.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4 transition-all duration-300 hover:border-foreground/30 hover:bg-card"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/80" />
                        <span className="text-xs leading-relaxed text-foreground/80 font-light">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground mr-2">Stack:</span>
                    {product.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/80 bg-muted/30 px-3 py-1 text-[11px] font-mono text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right sidebar card */}
                <div className="lg:pt-2">
                  <PricingCard slug={product.slug} />
                </div>
              </div>
            </div>
          </section>

          {/* ── RELATED ── */}
          {related.length > 0 && (
            <section className="container mx-auto px-8 py-20">
              <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    Soluções Relacionadas
                  </p>
                  <h2 className="mt-1 text-2xl font-light tracking-tight text-foreground">
                    Outros sistemas em {product.category}
                  </h2>
                </div>
                <Link
                  href="/produtos"
                  className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ver catálogo completo
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {related.slice(0, 3).map((item) => {
                  const RelatedIcon = getProductIcon(item.slug);
                  return (
                    <Link
                      key={item.slug}
                      href={`/produtos/${item.slug}`}
                      className="group rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-7 transition-all duration-300 hover:border-foreground/30 hover:bg-card hover:-translate-y-0.5 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
                            <RelatedIcon className="h-4 w-4" />
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <h3 className="text-lg font-light tracking-tight text-foreground group-hover:text-foreground/90 transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm font-light text-muted-foreground leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                        <span>Ver detalhes</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* ── BACK LINK ── */}
          <div className="container mx-auto px-8 pt-6">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar ao catálogo de produtos
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
