# ADR-0003: Modernização do Catálogo e Detalhes de Produtos (`/produtos` e `/produtos/[slug]`)

## Status
Aceito (2026-09-24)

## Contexto
A seção e as páginas de produtos (`src/pages/Products.tsx`, `src/pages/ProductDetail.tsx` e `src/components/Pricing.tsx`) ainda carregavam resquícios da linguagem visual anterior (títulos em serifa negrito genérica, faixas de gradiente decorativas no topo de cartões, botões e tabs com estilos antigos). Com a consolidação do design system de luxo monocromático da ChronoKairo e a sincronização com o ciclo solar de temas, a experiência do catálogo necessitava de alinhamento com a identidade de boutique de engenharia.

## Decisão
1. **Tipografia e Hierarquia Visual**:
   - Transição para a família tipográfica canônica Inter em pesos leves (300/400) com tracking comprimido (`tracking-[-0.02em]`), em harmonia com o Hero e o restante do portal.
   - Destaque sutil para termos de marca (`ChronoKairo`).
2. **Eliminação de Tacky Decoratives e Adoção do Luxo Silencioso**:
   - Remoção de faixas de gradientes artificiais sobre cartões.
   - Adoção de cartões com cantos arredondados contidos (`rounded-2xl`), bordas finas (`border-border`), fundo em acrílico/glass atenuado (`bg-card/60 backdrop-blur-sm`) e hover suave com elevação discreta (`hover:-translate-y-0.5`).
3. **Filtros e Badges em Pílula**:
   - Barra de categorias modernizada com botões em formato de pílula (`rounded-full px-5 py-2`), contrastes nítidos e transições suaves ao alternar entre categorias.
   - Badges de tecnologia e stack técnica com estilo monospaced padronizado.
4. **Card de Preços e Conversão**:
   - Em `Pricing.tsx`, atualização dos cartões de precificação com integração de botão direto de contato ("Solicitar proposta"), abrindo canal direto no WhatsApp com contextualização do produto.
5. **Inversão Simétrica Dia/Noite**:
   - Uso de tokens semânticos (`text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`) garantindo que as páginas de produtos invertam com precisão entre o tema claro e escuro.

## Consequências
- Catálogo de produtos uniforme com a assinatura visual da ChronoKairo.
- 48 rotas SSG pré-compiladas com sucesso em `./out`.
