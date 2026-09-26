const collection = [
  { name: "Platform", description: "A fundação comum: autenticação, UI e design system, segurança, observabilidade e SDKs." },
  { name: "AI", description: "Agentes, RAG, MCP, provedores de LLM e um coding agent nativo em Rust." },
  { name: "Payments", description: "Camada única para Stripe, Pix e boleto, Asaas, Mercado Pago e PagBank." },
  { name: "Finance", description: "Contas a pagar e a receber, conciliação, DRE e patrimônio." },
  { name: "CRM · Marketing", description: "Pipeline comercial, automação de marketing, SEO e analytics." },
  { name: "Support", description: "Helpdesk e atendimento omnichannel em tempo real." },
  { name: "People · Projects", description: "Pessoas e acessos; projetos, cronogramas e entregas." },
  { name: "Legal", description: "Contratos, compliance e gestão eletrônica de documentos." },
  { name: "Content", description: "Estúdio criativo e CMS com inteligência artificial." },
  { name: "WorkMed", description: "SaaS multi-tenant de saúde ocupacional." },
  { name: "E-commerce", description: "B2B, marketplace, catálogo digital, WMS e logística de entregas." },
  { name: "Nimbus", description: "Infraestrutura, cloud e DevOps automatizados." },
];

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
          {collection.map((item, index) => (
            <div key={item.name} className="border-t border-border pt-6">
              <span className="font-mono text-xs text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 mb-3 text-2xl font-light text-foreground">{item.name}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
