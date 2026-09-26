import { ArrowUpRight } from "lucide-react";

const research = [
  { name: "relic", description: "Runtime GGUF minimalista e de alto desempenho para OpenCL 1.2 e 3.0, feito para GPUs legadas e integradas.", href: "https://github.com/anamnesic/relic" },
  { name: "surveyor", description: "Perfilamento de hardware, índice de capacidade de dispositivos e pesquisa de quantização.", href: "https://github.com/anamnesic/surveyor" },
  { name: "anamnesic-labs", description: "Kernels de FlashAttention, decodificação especulativa e arquiteturas de baixa VRAM.", href: "https://github.com/anamnesic/anamnesic-labs" },
];

export default function Labs() {
  return (
    <section id="labs" className="scroll-mt-20 border-t border-border py-24 md:py-36 bg-background">
      <div className="container mx-auto grid gap-12 px-8 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">04 / Anamnesic Labs</p>
          <h2 className="text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
            Pesquisa aberta.<br /><span className="text-muted-foreground">Inferência onde ninguém espera.</span>
          </h2>
          <p className="mt-10 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            Anamnesic é o braço de pesquisa aberta da Chronokairo, dedicado à inferência de IA eficiente em hardware restrito. O que aprendemos no laboratório chega ao produto: modelos que rodam localmente, com privacidade e sem depender de infraestrutura cara.
          </p>
          <a
            href="https://github.com/anamnesic"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-2 border-b border-foreground/40 pb-1 text-sm text-foreground transition-colors hover:border-foreground"
          >
            Conhecer o laboratório <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="space-y-2">
          {research.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group block border-t border-border py-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-lg text-foreground">{item.name}</h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
