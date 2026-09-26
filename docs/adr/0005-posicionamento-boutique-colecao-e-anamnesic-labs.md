# ADR 0005 — Posicionamento de boutique: Coleção Proprietária, Anamnesic Labs e discrição com clientes

- **Status:** Aceito
- **Data:** 2026-09-25

## Contexto

O profile da organização no GitHub foi reposicionado como boutique de software (cerca de 70% premium e 30% luxo), apresentando a coleção de produtos internos e a Anamnesic Labs. A home do site ainda não mostrava nenhuma das duas, e o botão flutuante de WhatsApp, assim como o das LPs, não seguia a inversão de cores do Ciclo Solar (ADR-0002).

## Decisão

1. Alinhar a home ao profile:
   - O Hero passa a se apresentar como "Ateliê de Engenharia de Software".
   - A Expertise passa a ter os cinco pilares.
   - Novas seções: `#collection` (Coleção Proprietária, com 12 produtos) e `#labs` (Anamnesic Labs, com links para os repositórios públicos).
   - Os Princípios entram em "Como trabalhamos".
   - A Navbar ganha os links "Coleção" e "Labs".
2. **Discrição:** material público não cita clientes como produtos próprios. Foi removido o `src/data/projects.ts`, que não era usado e listava repositórios de clientes.
3. **CTA de WhatsApp:** todos os botões usam o par `foreground/background` (React) ou `--btn-primary-bg/--btn-primary-text` (LPs, via `boutique.css`), invertendo conforme o tema. Nenhum verde fixo permanece.

## Consequências

- `Studio.tsx` passa a exportar as seções separadas (`Expertise`, `Approach`, `Manifesto`), compostas em `pages/Index.tsx`.
- Os gaps restantes (catálogo `/produtos` desalinhado da coleção, `/pesquisas` com placeholders, LPs de teste) seguem como débito técnico.
