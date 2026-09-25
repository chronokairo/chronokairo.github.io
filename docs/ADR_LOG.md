# ADR Log — Architecture Decision Records

Registro centralizado de decisões de arquitetura do site institucional ChronoKairo (`chronokairo.github.io`).
Formato padrão do ecossistema: `docs/ADR_LOG.md` + `docs/adr/NNNN-*.md`.

## Decisões

| ID | Título | Data | Status |
| :--- | :--- | :--- | :---: |
| [0001](./adr/0001-migracao-ui-e-design-system-platform.md) | Migração do UI e Design System de Luxo para `@chronokairo/platform/ui` | 2026-09-24 | Aceito |
| [0002](./adr/0002-ciclo-solar-e-inversao-de-tema-claro-escuro.md) | Ciclo Solar de Temas (Dia = Branco, Noite = Preto) e Inversão de Cores | 2026-09-24 | Aceito |
| [0003](./adr/0003-modernizacao-catalogo-e-detalhes-de-produtos.md) | Modernização do Catálogo e Detalhes de Produtos (`/produtos` e `/produtos/[slug]`) | 2026-09-24 | Aceito |
| [0004](./adr/0004-modernizacao-das-landing-pages-e-showcases.md) | Modernização das Landing Pages e Showcases com Design de Luxo e Ciclo Solar | 2026-09-24 | Aceito |

## Débitos técnicos abertos
- Nenhum débito aberto em UI ou build (zero erros em `tsc --noEmit` e `next build`).
