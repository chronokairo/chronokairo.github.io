# ADR-0001: Migração do UI e Design System de Luxo para `@chronokairo/platform/ui`

- **Data:** 2026-09-24
- **Status:** Aceito

## Contexto

O site institucional da ChronoKairo (`chronokairo.github.io`) consolidou a identidade visual e o posicionamento de boutique de engenharia no commit `591a3c2`, estabelecendo a paleta monocromática de luxo (Deep Black `#0a0a0a`, Pantone White `#fafafa`/`#ffffff`, `#C8CACB`, `#141f1a`), tipografia Inter/Newsreader leve, superfícies glass/acrylic, animações suaves e componentes sem bordas agressivas.

Para seguir a regra arquitetural fundamental do ecossistema ChronoKairo (ADR-016 do `@chronokairo/platform`: **fonte única de UI**, sem duplicação de componentes nem bibliotecas paralelas), a UI do site precisava ser integrada ao pacote compartilhado `@chronokairo/platform`.

## Decisão

1. **Estilos Canônicos**: O arquivo local `src/theme/theme.css` foi reduzido para importar diretamente `@chronokairo/platform/styles.css`, herdando todo o sistema de temas, utilitários (`.glass`, `.acrylic`, `.text-gradient`), animações e reset de luxo da plataforma.
2. **Provedores e Hooks**:
   - `src/app/providers.tsx` consome `ThemeProvider`, `TooltipProvider`, `Toaster` e `SonnerToaster` de `@chronokairo/platform/ui`.
   - `src/components/ThemeProvider.tsx` e `src/components/ThemeToggle.tsx` foram simplificados para reexportar as implementações da plataforma.
3. **Primitivas shadcn**: Todas as primitivas (`Button`, `Badge`, `Card`, `Accordion`, `Carousel`, `Input`, `Textarea`, `Toast`, `Tooltip`) são consumidas exclusivamente de `@chronokairo/platform/ui`.
4. **Tokens de Marca na página de Design**: `src/pages/Design.tsx` consome `brandColors`, `brandTypography` e `brandSpacing` de `@chronokairo/platform/ui`, garantindo que o showcase de marca reflita exatamente os tokens do pacote.

## Consequências

- Eliminação de mais de 560 linhas de código duplicado e artefatos de UI locais.
- Garantia de paridade visual exata entre o site e os outros produtos do ecossistema.
- Verificação automatizada com `npm run check` (`tsc --noEmit`) e `npm run build` gerando todas as 48 rotas SSG sem advertências ou erros.
