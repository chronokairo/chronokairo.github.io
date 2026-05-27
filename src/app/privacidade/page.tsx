import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a ChronoKairo coleta, usa e protege dados pessoais em seus canais digitais.",
  alternates: { canonical: `${siteUrl}/privacidade` },
};

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Legal
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Politica de Privacidade
          </h1>
          <p className="mb-10 text-base leading-relaxed text-foreground/80 md:text-lg">
            Esta politica descreve como a ChronoKairo trata informacoes pessoais coletadas
            por meio do site, formularios de contato e interacoes comerciais.
          </p>
        </div>

        <div className="space-y-10 text-sm leading-7 text-foreground/80 md:text-base">
          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">1. Dados coletados</h2>
            <p>
              Podemos coletar dados fornecidos diretamente por voce, como nome, email,
              telefone, empresa e informacoes enviadas em mensagens de contato ou durante
              conversas comerciais.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">2. Finalidade de uso</h2>
            <p>
              Usamos esses dados para responder solicitacoes, apresentar propostas,
              prestar atendimento, melhorar nossos servicos e manter a seguranca das
              interacoes digitais da ChronoKairo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">3. Compartilhamento</h2>
            <p>
              Nao comercializamos dados pessoais. Informacoes podem ser compartilhadas com
              fornecedores essenciais para operacao do site e atendimento, sempre dentro de
              obrigacoes contratuais e legais adequadas.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">4. Seus direitos</h2>
            <p>
              Voce pode solicitar confirmacao de tratamento, correcao, atualizacao ou
              exclusao de dados pessoais, observadas as obrigacoes legais aplicaveis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">5. Contato</h2>
            <p>
              Para assuntos relacionados a privacidade e protecao de dados, entre em contato
              pelo email contato@chronokairo.com.br.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}