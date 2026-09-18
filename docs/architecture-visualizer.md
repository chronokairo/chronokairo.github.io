# Ferramenta de visualização de arquitetura

`ArchitectureVisualizer` mostra uma arquitetura conceitual com provedores, conexões e um núcleo de decisão. A cena 3D é feita em Three.js e carregada apenas quando entra na área visível da página. Botões HTML permitem selecionar um provedor, inclusive por teclado; o texto permanece disponível quando WebGL não funciona.

## Uso

Crie uma configuração do tipo `ArchitectureVisualization` em `src/lib/architecture-visualization.ts` e passe-a ao componente:

```tsx
import ArchitectureVisualizer from "@/components/visualizations/ArchitectureVisualizer";
import { nimbusVisualization } from "@/lib/architecture-visualization";

<ArchitectureVisualizer visualization={nimbusVisualization} />
```

Cada provedor precisa de `id`, `label` e `detail`. O componente distribui os provedores na cena, destaca o caminho selecionado e mostra o detalhe em texto. `centerLabel`, `centerDetail` e `note` explicam o núcleo e os limites da representação.

## Instância Nimbus

O case Nimbus usa cinco provedores listados no README do projeto privado: AWS, Cloudflare, Firebase, GitHub e Google Cloud. A cena representa o contrato comum de provedores e a prévia de roteamento por cotas. Ela é identificada como **arquitetura conceitual de uma pesquisa em desenvolvimento**; não mostra dados de operação nem afirma resultados de produção.

## Operação

- O modelo está no módulo `architectureScene.ts`, carregado sob demanda pelo componente.
- O desenho usa preto, branco e cinza, com movimento discreto desativado pela preferência `prefers-reduced-motion`.
- O componente libera geometrias, materiais e contexto WebGL ao sair da tela.
- Para outra campanha ou case, mantenha nomes e descrições verificáveis; a visualização deve explicar uma decisão técnica, não servir apenas de ornamento.
