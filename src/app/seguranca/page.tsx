import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Segurança & Conformidade Enterprise",
  description:
    "Conheça os padrões de segurança de dados, criptografia, infraestrutura isolada e conformidade LGPD/GDPR da ChronoKairo.",
  alternates: { canonical: `${siteUrl}/seguranca` },
};

export default function SegurancaPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Trust &amp; Security
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Segurança de Nível Enterprise
          </h1>
          <p className="mb-10 text-base leading-relaxed text-foreground/80 md:text-lg">
            A proteção de ativos digitais, propriedade intelectual e confidencialidade operacional é o pilar central de toda a arquitetura de software e sistemas da ChronoKairo.
          </p>
        </div>

        <div className="space-y-12 text-sm leading-7 text-foreground/80 md:text-base">
          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              1. Criptografia de Ponta a Ponta
            </h2>
            <p className="mb-4">
              Todos os fluxos de informação trafegam por canais criptografados com TLS 1.3 (em trânsito) e criptografia AES-256 (em repouso). Chaves criptográficas são gerenciadas sob envelope de rotação estrita e políticas de segregação de segredos via ChronoKairo Vault.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs font-mono">
              <div className="p-4 rounded-xl bg-background border border-border/40">
                <span className="font-bold text-foreground block mb-1">DADOS EM TRÂNSITO</span>
                TLS 1.3 obrigatório com HSTS e PFS (Perfect Forward Secrecy).
              </div>
              <div className="p-4 rounded-xl bg-background border border-border/40">
                <span className="font-bold text-foreground block mb-1">DADOS EM REPOUSO</span>
                AES-256 em bancos de dados, snapshots e storages.
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              2. Isolamento Multi-Tenant e RLS
            </h2>
            <p className="mb-4">
              Nossos sistemas aplicam Row Level Security (RLS) mandatário em nível de banco de dados com Dual-JWT (Service Role vs User Role). Nenhum tenant tem acesso cruzado a informações, logs operacionais ou chaves de terceiros.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              3. Governança, LGPD e Privacidade
            </h2>
            <p className="mb-4">
              Aderência rigorosa à Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Manutenção ativa de registros de operações de tratamento, canal oficial de atendimento DPO/Encarregado e relatórios de conformidade.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              4. Infraestrutura e Redundância
            </h2>
            <p>
              Ambientes distribuídos com failover automático, backups incrementais contínuos e testes periódicos de restauração de desastre (Disaster Recovery).
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
