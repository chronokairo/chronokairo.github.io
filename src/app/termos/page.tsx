import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Consulte as condicoes de uso do site e dos canais digitais da ChronoKairo.",
  alternates: { canonical: `${siteUrl}/termos` },
};

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
            Legal
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Termos de Uso
          </h1>
          <p className="mb-10 text-base leading-relaxed text-foreground/80 md:text-lg">
            Ao acessar este site, voce concorda em utilizar os conteudos e canais da
            ChronoKairo de forma licita, respeitando a legislacao aplicavel e estes termos.
          </p>
        </div>

        <div className="space-y-10 text-sm leading-7 text-foreground/80 md:text-base">
          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">1. Uso do site</h2>
            <p>
              O conteudo deste site tem finalidade institucional e comercial. Nao e
              permitido utilizar o site para tentativa de fraude, coleta indevida de dados
              ou qualquer atividade que prejudique sua disponibilidade e seguranca.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">2. Propriedade intelectual</h2>
            <p>
              Marcas, textos, elementos visuais, materiais tecnicos e demais ativos do site
              pertencem a ChronoKairo ou a seus respectivos titulares e nao podem ser
              reproduzidos sem autorizacao previa, salvo nas hipoteses legais aplicaveis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">3. Limites de responsabilidade</h2>
            <p>
              A ChronoKairo busca manter informacoes atualizadas e acessiveis, mas nao
              garante ausencia de indisponibilidades temporarias, erros materiais ou
              adequacao do conteudo a finalidades especificas de terceiros.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">4. Alteracoes</h2>
            <p>
              Estes termos podem ser atualizados para refletir evolucoes legais, tecnicas ou
              operacionais. A versao vigente sera sempre a publicada nesta pagina.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">5. Contato</h2>
            <p>
              Em caso de duvidas sobre estes termos, entre em contato pelo email
              contato@chronokairo.com.br.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}