# ADR 0006 — Coleção como catálogo único, Labs, WorkMed e contato por avaliação

- **Status:** Aceito
- **Data:** 2026-09-25
- **Complementa:** ADR-0003, ADR-0004, ADR-0005

## Contexto

Depois do ADR-0005, a home e o profile da organização estavam coerentes com o posicionamento de boutique, mas o restante do site não estava. Havia nove lacunas:

1. `/pesquisas` exibia conteúdo placeholder.
2. Não havia uma página da Anamnesic Labs.
3. `/produtos` usava um catálogo próprio, desalinhado da Coleção Proprietária.
4. Os produtos exibiam preço B2C para pessoa física e jurídica.
5. Sete LPs `teste-lp-*` estavam publicadas.
6. A LP de saúde ocupacional apresentava "Audiomed", quando o produto é o **WorkMed**, SaaS próprio da Chronokairo.
7. O blog tinha apenas curadoria de notícias, sem textos autorais.
8. Não havia sinal de exclusividade nem um processo de candidatura no contato.
9. A imagem OG era um SVG, formato que WhatsApp, LinkedIn e Facebook não exibem, com o posicionamento antigo.

## Decisão

1. **Catálogo único.** `src/data/products.ts` passa a ser a única fonte da coleção, com 12 produtos em quatro pilares: Fundação, Operação, Crescimento e Verticais. A seção `#collection` da home, `/produtos` e `/produtos/[slug]` leem desse arquivo.
2. **Sem preço público.** Foram removidos `pricing.ts` e os campos `pricePF`/`pricePJ`. O detalhe do produto mostra "Engajamento sob consulta", e o schema.org não publica mais `offers`.
3. **Anamnesic Labs em `/pesquisas`.** A página apresenta relic, surveyor e anamnesic-labs apenas com fatos dos READMEs públicos. O link "Labs" da Navbar e o CTA da seção levam para ela.
4. **WorkMed.** As pastas `lp/audiomed`, `public/{lp,showcase}/audiomed`, `public/audiomed` e a imagem do showcase foram renomeadas com `git mv` para `workmed`. O texto trata o WorkMed como produto próprio, e a imagem de hero exibe a marca WORKMED.
5. **LPs de teste removidas** (`lp/teste-lp-*` e `public/lp/teste-lp-*`).
6. **Blog autoral.** Entram dois ensaios, "Uma fonte única por capacidade" (Chronokairo) e "Um LLM em uma GPU de 1 GB" (Anamnesic Labs), ao lado da curadoria de notícias.
7. **Contato por avaliação.** Adotados heading em português, três compromissos (poucos projetos simultâneos, seleção por aderência e autoria sênior) e um formulário de solicitação. Como o site é estático, o formulário monta uma mensagem de WhatsApp e não envia dados a nenhum backend.
8. **Nimbus como produto entregue.** Nimbus deixa de aparecer como "base desktop" ou "prévia" e passa a ser descrito pelo que já opera: painel DevOps (servidores, SSH, Docker/Kubernetes, monitoramento, CI/CD, deploy e backup), cinco provedores free tier e failover por cota.
9. **OG em PNG.** A imagem `public/og-image.png` (1200×630) é gerada com sharp a partir de `og-image.svg` e traz o posicionamento de ateliê. As LPs passam a usar `og:image` absoluto.

## Consequências

- Componentes órfãos foram removidos: `About`, `FAQ`, `Games`, `MatrixRain`, `Pricing`, `Projects`, `Scope`, `Services` e `Team`.
- Para regenerar a OG, edite `public/og-image.svg` e rode `NODE_PATH=$PWD/node_modules node -e "require('sharp')('public/og-image.svg').png().toFile('public/og-image.png')"`.
- URLs antigas `/lp/audiomed/` e `/audiomed/` deixam de existir, porque GitHub Pages não oferece redirect server-side.
