# ADR-0004: Modernização das Landing Pages e Showcases com Design de Luxo e Ciclo Solar

## Status
Aceito (2026-09-24)

## Contexto
As Landing Pages e páginas de showcase (`/lp/audiomed`, `/lp/educacional`, `/lp/inteligencia`, `/lp/marketing`, `/lp/missao-critica`, `/lp/automacao-processos`, etc.) utilizavam uma folha de estilos `boutique.css` com bordas duras (`border-radius: 2px !important`), cores escuras forçadas (`#0a0a0a !important`) sem sincronização com o ciclo solar de temas da ChronoKairo, e sombras duras. Isso causava discrepância visual com o portal principal, o novo catálogo de produtos e as diretrizes do design system.

## Decisão
1. **Unificação Visual no `boutique.css`**:
   - Modernização das variáveis de cor com suporte a `:root, .dark` e `:root.light, .light`.
   - Cantos arredondados orgânicos e elegantes: `border-radius: 18px !important` para cartões e containers (`.metric-card`, `.feature-card`, `.card`, `.client-box`, `.wizard-strip`, etc.).
   - Botões em formato de pílula (`border-radius: 9999px !important`) com transições suaves e elevações sutis.
   - Tipografia harmonizada com `Inter` em pesos leves (300/400) e entrelinhas amplas.
   - Texturas acrílicas com `backdrop-filter: blur(16px)` nos cabeçalhos e superfícies.
2. **Sincronização com o Ciclo Solar de Temas**:
   - Injeção automática via `scripts/align-lps.ts` do script `themeBootstrap` no `<head>` de todas as LPs, garantindo que o tema acompanhe o ciclo solar do visitante (dia = branco, noite = preto) ou a sua preferência salva no `localStorage` sem causar FOUC.
   - Injeção do botão flutuante de alternância solar (`lp-theme-toggle`) no canto inferior das LPs com ícones SVG de sol e lua.
3. **Pipeline de Alinhamento**:
   - Atualização do `scripts/align-lps.ts` e compilação estática de todas as páginas em `public/`, `lp/` e `./out`.

## Consequências
- Todas as Landing Pages e showcases apresentam coerência visual absoluta com o portal ChronoKairo.
- Suporte imediato à inversão clara/escura acompanhando o ciclo solar ou alternância manual.
- Zero erros de build ou typecheck.
