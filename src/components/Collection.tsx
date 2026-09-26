import Link from "next/link";

import { products } from "@/data/products";

export default function Collection() {
  return (
    <section id="collection" className="scroll-mt-20 border-t border-border py-24 md:py-36 bg-background">
      <div className="container mx-auto px-8">
        <div className="mb-16 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">03 / Coleção Proprietária</p>
            <h2 className="text-4xl font-light tracking-tight text-foreground md:text-6xl">Uma base única.<br /><span className="text-muted-foreground">Doze produtos maduros.</span></h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            Cada projeto sob medida parte de componentes já testados em produção. O cliente recebe o que é exclusivo, sobre uma fundação que não precisa ser reinventada.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <Link key={item.slug} href={`/produtos/${item.slug}/`} className="group block border-t border-border pt-6">
              <span className="font-mono text-xs text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 mb-3 text-2xl font-light text-foreground transition-colors group-hover:text-foreground/80">{item.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
