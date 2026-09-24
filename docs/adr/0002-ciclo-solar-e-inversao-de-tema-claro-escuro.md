# ADR-0002: Ciclo Solar de Temas (Dia = Branco, Noite = Preto) e Inversão de Cores

## Status
Aceito (2026-09-24)

## Contexto
O posicionamento de boutique de engenharia da ChronoKairo é fundamentado no conceito grego de *Chronos* (tempo quantitativo e contínuo) e *Kairós* (o momento oportuno para decisão crítica). A interface institucional deve refletir o ciclo do tempo e proporcionar legibilidade ideal ao usuário em qualquer momento do dia, permitindo a inversão completa e coerente das cores da paleta monocromática de luxo:
- **De manhã / dia (06:00 às 17:59)**: Tema Claro (*Branco Pantone 2026* / Crisp White `#ffffff`), texto preto profundo (`#09090b`), garantindo luminosidade e leitura arejada.
- **De noite (18:00 às 05:59)**: Tema Escuro (*Preto Profundo* / Deep Black `#0a0a0a`), texto branco suave Pantone (`#fafafa`), reduzindo fadiga visual noturna.
- **Inversão de componentes**: Botões primários, badges, seleções de texto, cartões e bordas finas invertem seus contrastes mantendo a proporção geométrica e a elegância.
- **Alternância manual**: O usuário tem controle imediato através do componente `ThemeToggle` inserido no `Navbar`, persistindo a escolha em `localStorage`.

## Decisão
1. **Detecção Solar Automática sem FOUC**:
   - No `src/app/layout.tsx`, o script pré-renderização `themeBootstrap` calcula o horário local do cliente (`new Date().getHours()`). Se não houver override manual no `localStorage`, aplica imediatamente a classe `light` ou `dark` e o `colorScheme` correspondente antes da montagem do DOM, eliminando qualquer flash de tela.
2. **Ciclo Solar no `ThemeProvider` (`@chronokairo/platform/ui`)**:
   - Suporte nativo ao modo `"auto"` e função `getTimeBasedTheme()`, verificando periodicamente a virada de horário e adaptando suavemente os temas.
3. **Harmonização de Cores Semânticas**:
   - Migração de classes literais (`text-white`, `bg-white`, `border-white/10`) para tokens semânticos do Tailwind/CSS (`text-foreground`, `text-muted-foreground`, `bg-background`, `border-border`, `bg-foreground text-background`), assegurando inversão instantânea em todas as seções (`Navbar`, `Hero`, `SelectedWork`, `Studio`, `Contact`, `Footer` e `/design`).
4. **Página `/design` Atualizada**:
   - Inclusão da seção dedicada "Ciclo Solar · Tempo & Luz" documentando a alternância entre Manhã e Noite, com exibição dos tokens e interatividade via `ThemeToggle`.

## Consequências
- Experiência visual imersiva e sincronizada com a identidade temporal da marca.
- Inversão limpa de alto contraste sem quebras em light mode.
- 48 rotas estáticas pré-compiladas com suporte a ambos os temas e zero erros de tipo ou build.
