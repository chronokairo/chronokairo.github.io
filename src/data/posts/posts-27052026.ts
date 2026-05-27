import type { Post } from ".";

export const posts27052026: Post[] = [
  {
    slug: "openai-websockets-agentes-40percent",
    title: "OpenAI reduziu latência de agentes em 40% com WebSockets",
    excerpt:
      "A OpenAI redesenhou a comunicação com a Responses API usando WebSockets, eliminando o overhead de chamadas síncronas e atingindo até 4.000 tokens por segundo em produção.",
    content:
      "No dia 22 de abril de 2026, a OpenAI publicou um artigo detalhando como conseguiu acelerar em 40% os fluxos agentivos da Codex usando WebSockets na Responses API. O problema era claro: cada ciclo do agente — ler contexto, chamar a API, executar ferramentas, repetir — acumulava latência de rede a cada requisição síncrona. Com a aceleração da inferência (de 65 para quase 1.000 tokens/s), o gargalo migrou dos GPUs para o overhead de API. A solução foi um modo WebSocket persistente, que elimina handshakes repetidos e permite streaming bidirecional contínuo. Os resultados foram imediatos: Vercel integrou no AI SDK com ganho de 40%, Cline reportou 39% de aceleração em fluxos multi-arquivo, e Cursor viu melhorias de até 30%. Para empresas em Manaus que dependem de automação inteligente, essa evolução significa agentes mais rápidos e responsivos, prontos para integração em sistemas locais.",
    date: "2026-05-26",
    author: "Luan Nery",
    tags: ["OpenAI", "WebSockets", "Agentes", "Performance"],
    source: "https://openai.com/index/speeding-up-agentic-workflows-with-websockets/",
  },
  {
    slug: "symphony-orquestrador-agentes",
    title: "Symphony: transformando issues em PRs automáticos com orquestração de agentes",
    excerpt:
      "A OpenAI open-sourceou o Symphony, um orquestrador que transforma quadros Linear em uma fábrica de PRs automatizados — resultando em 500% mais pull requests entregues.",
    content:
      "Em 27 de abril de 2026, a OpenAI revelou o Symphony, um sistema de orquestração de agentes que transforma um project management board como Linear em um control plane para coding agents. Cada tarefa aberta ganha um agente dedicado que trabalha continuamente, enquanto humanos revisam os resultados. O Symphony resolve quatro problemas operacionais: transforma execução de issues em um workflow repetível como daemon, isola agentes em workspaces por issue, versiona a política de workflow num arquivo WORKFLOW.md dentro do repositório, e oferece observabilidade para debug de múltiplas execuções concorrentes. O resultado foi um aumento de 500% nos pull requests entregues em alguns times. O código foi liberado como especificação aberta no GitHub. Para empresas que buscam escalar desenvolvimento de software com IA, o Symphony mostra o caminho: orquestração inteligente com supervisão humana estratégica.",
    date: "2026-05-24",
    author: "Riad Makarem",
    tags: ["OpenAI", "Orquestração", "Automação", "DevOps"],
    source: "https://openai.com/index/open-source-codex-orchestration-symphony/",
  },
  {
    slug: "anthropic-harness-design-agentes-longa-duracao",
    title: "Como construir agentes de IA que rodam por horas sem perder o contexto",
    excerpt:
      "A Anthropic compartilhou as lições de design de harness para agentes autônomos de longa duração — incluindo sprints, contratos entre agente gerador e avaliador, e autoavaliação com Playwright.",
    content:
      "Em março de 2026, a Anthropic publicou um artigo detalhando a evolução do harness design para agentes de codificação autônomos. O desafio era fazer com que Claude construísse aplicações completas sem intervenção humana, em sessões que duravam horas. A solução envolveu uma arquitetura multi-agente com três papéis: um gerador que implementa funcionalidades em sprints, um avaliador que usa Playwright MCP para testar a aplicação como um usuário real, e um revisor que negocia um contrato de sprint antes de cada ciclo — definindo o que significa 'pronto' antes de qualquer código ser escrito. Com Opus 4.6, a Anthropic descobriu que poderia eliminar completamente os context resets, rodando agentes em sessão contínua com compactação automática. A lição principal: à medida que os modelos ficam mais capazes, o harness deve simplificar, não complicar. O mesmo princípio se aplica a qualquer empresa que queira automatizar fluxos de trabalho complexos com IA.",
    date: "2026-05-22",
    author: "Victor Martins",
    tags: ["Anthropic", "Agentes", "Arquitetura", "Automação"],
    source: "https://www.anthropic.com/engineering/harness-design-long-running-apps",
  },
  {
    slug: "google-antigravity-2-0-plataforma-agentes",
    title: "Google Antigravity 2.0: a nova plataforma agent-first para desenvolvimento",
    excerpt:
      "O Google lançou o Antigravity 2.0 no I/O 2026 como um aplicativo desktop standalone para orquestrar múltiplos agentes em paralelo, com CLI, SDK e agentes gerenciados na Gemini API.",
    content:
      "No Google I/O 2026, o Google apresentou o Antigravity 2.0, uma evolução significativa do seu IDE agent-first lançado em novembro de 2025. Agora um aplicativo desktop standalone (disponível para macOS, Linux e Windows), o Antigravity 2.0 permite orquestrar múltiplos agentes em paralelo, com sub-agentes dinâmicos especializados (teste, revisão, refatoração, migração) que rodam em context windows separados. O ecossistema inclui também o Antigravity CLI para terminal, o Antigravity SDK em Python para deploy de agentes customizados em infraestrutura própria, e Managed Agents na Gemini API. A segurança foi priorizada: sandboxing por SO, mascaramento de credenciais e políticas Git hardened (sem force push, sem operações destrutivas). Alimentado pelo Gemini 3.5 Flash, o Antigravity 2.0 representa a visão do Google para o futuro do desenvolvimento: agentes como unidade primária, não como feature.",
    date: "2026-05-20",
    author: "Luan Nery",
    tags: ["Google", "Antigravity", "Agentes", "Ferramentas"],
    source: "https://antigravity.google/blog/introducing-google-antigravity-2-0",
  },
  {
    slug: "copilot-coding-agent-auto-review-seguranca",
    title: "GitHub Copilot coding agent agora revisa e testa segurança do próprio código",
    excerpt:
      "O GitHub Copilot evoluiu de assistente de código para agente autônomo que escreve, revisa, testa segurança e abre PRs — tudo sem supervisão constante.",
    content:
      "Em fevereiro de 2026, o GitHub anunciou atualizações significativas no Copilot coding agent: ele agora revisa as próprias alterações usando o Copilot code review antes de abrir o pull request, executa code scanning, secret scanning e verificação de vulnerabilidades em dependências durante o workflow. Se uma dependência tem um problema conhecido ou algo parece uma chave de API commitada, o problema é sinalizado antes do PR ser aberto. O agente também suporta agentes customizados via arquivos .github/agents/, permitindo que times definam abordagens específicas — como um agente de performance que benchmarkeia antes e depois da mudança. Em uma demonstração, o agente otimizou uma função com 99% de melhoria. Para empresas em Manaus que buscam qualidade e segurança em desenvolvimento de software, essa evolução significa PRs mais confiáveis e menos retrabalho.",
    date: "2026-05-18",
    author: "Riad Makarem",
    tags: ["GitHub", "Copilot", "Segurança", "DevOps"],
    source: "https://github.blog/ai-and-ml/github-copilot/whats-new-with-github-copilot-coding-agent/",
  },
  {
    slug: "google-deepmind-co-scientist-multi-agentes",
    title: "DeepMind Co-Scientist: multi-agentes que aceleram descobertas científicas",
    excerpt:
      "O Google DeepMind publicou na Nature o Co-Scientist, um sistema multi-agente que gerou hipóteses que bloquearam 91% da resposta fibrótica em testes de laboratório.",
    content:
      "Em 19 de maio de 2026, o Google DeepMind publicou na Nature o Co-Scientist, um sistema multi-agente construído com Gemini que gera, debate e evolui hipóteses para problemas científicos complexos. O sistema conta com agentes especializados — um gerador de hipóteses, um revisor que checa consistência com literatura, um debatedor que encontra falhas, e um priorizador que classifica as melhores hipóteses. Em colaboração com pesquisadores de Stanford, o sistema ajudou a identificar candidatos a medicamentos para fibrose hepática, incluindo um que bloqueou 91% da resposta fibrótica em testes de laboratório. Em pesquisa de envelhecimento celular, reduziu o tempo de análise de datasets de screening de meses para dias. O Co-Scientist está sendo disponibilizado para pesquisadores individuais via Gemini for Science. Para empresas de tecnologia em Manaus, a lição é clara: sistemas multi-agente podem acelerar dramaticamente a inovação.",
    date: "2026-05-16",
    author: "Victor Martins",
    tags: ["Google", "DeepMind", "Pesquisa", "Multi-agentes"],
    source: "https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/",
  },
  {
    slug: "microsoft-copilot-agentes-word-excel",
    title: "Microsoft 365 Copilot agora executa tarefas direto no Word, Excel e PowerPoint",
    excerpt:
      "As capacidades agentivas do Copilot no Microsoft 365 estão GA — ele pode formatar, analisar, criar gráficos e editar documentos com múltiplas etapas de forma autônoma.",
    content:
      "Em 22 de abril de 2026, a Microsoft tornou disponíveis as capacidades agentivas do Copilot no Word, Excel e PowerPoint. Diferente da versão anterior que apenas respondia perguntas, o Copilot agora executa ações multi-etapa diretamente nos documentos: no Word, reescreve, reestrutura e aplica tom editorial; no Excel, constrói fórmulas, tabelas dinâmicas e visuais; no PowerPoint, atualiza decks com novos dados respeitando templates corporativos. A Microsoft revelou que o modelo anterior era limitado pela capacidade de instrução dos foundation models — mas com os saltos recentes em raciocínio e qualidade, o Copilot agora entende a riqueza de uma tabela dinâmica ou a precisão de citações. Dados iniciais mostram aumento de engajamento e satisfação. Para empresas, isso significa que a produtividade em ferramentas de escritório está prestes a dar um salto qualitativo.",
    date: "2026-05-14",
    author: "Luan Nery",
    tags: ["Microsoft", "Copilot", "Produtividade", "Office"],
    source: "https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/",
  },
  {
    slug: "deepseek-modelos-brasil-custo-beneficio",
    title: "DeepSeek e o novo cenário de modelos de IA: vale a pena para empresas brasileiras?",
    excerpt:
      "Com modelos como DeepSeek v4 competindo com GPT-5.5 e Claude Opus 4.6, o custo-benefício para empresas brasileiras nunca foi tão favorável — mas é preciso saber escolher.",
    content:
      "O cenário de modelos de linguagem em 2026 está mais competitivo do que nunca. DeepSeek v4, Kimi v2.6, Grok 4.3, GPT-5.5, Claude Opus 4.6 e Gemini 3.5 Flash disputam espaço em benchmarks de código e raciocínio. O AkitaOnRails tem publicado benchmarks mensais comparando esses modelos, e os resultados mostram que modelos como DeepSeek e Qwen oferecem desempenho competitivo a uma fração do custo dos modelos proprietários. Em testes de coding, DeepSeek v4 já se aproxima do GPT-5.5 em tarefas de geração de código, enquanto custa significativamente menos por token. Para empresas brasileiras, especialmente em Manaus, isso significa que é possível implementar soluções de IA com modelos de alta qualidade sem comprometer o orçamento. A chave está em escolher o modelo certo para cada tarefa: modelos rápidos e baratos para tarefas simples, modelos frontier para problemas complexos que exigem raciocínio profundo.",
    date: "2026-05-12",
    author: "Riad Makarem",
    tags: ["DeepSeek", "Modelos", "Custo-benefício", "Brasil"],
    source: "https://akitaonrails.com/",
  },
  {
    slug: "tabnews-ecossistema-conteudo-tecnico-brasil",
    title: "TabNews e o ecossistema de conteúdo técnico no Brasil: o que mudou em 2026",
    excerpt:
      "O TabNews cresceu 45% na produção de artigos em português, mas enfrenta o desafio de equilibrar conteúdo técnico de qualidade com a enxurrada de lançamentos de micro-SaaS.",
    content:
      "O TabNews se consolidou como o principal hub de conteúdo técnico em português do Brasil, registrando 45% de crescimento na produção de artigos em fevereiro de 2026. No entanto, a plataforma enfrenta uma transformação: estima-se que 70% dos posts estejam relacionados a lançamentos de micro-SaaS ou promoção de ferramentas. Isso gerou um declínio de 40% no engajamento em threads técnicas complexas entre 2023 e 2025. Em contrapartida, o tempo médio de leitura subiu 28%, indicando que o conteúdo de qualidade ainda encontra audiência. Para empresas de tecnologia em Manaus, o TabNews representa uma vitrine valiosa — mas é preciso produzir conteúdo que realmente agregue valor técnico, não apenas pitches comerciais. A ChronoKairo acompanha de perto esse ecossistema, contribuindo com artigos sobre IA aplicada, automação e desenvolvimento de software na região amazônica.",
    date: "2026-05-10",
    author: "Victor Martins",
    tags: ["TabNews", "Comunidade", "Conteúdo", "Brasil"],
    source: "https://overcentral.com/tabnews-registra-crescimento-de-45-em-conteudo-brasileiro-em-fevereiro/",
  },
  {
    slug: "claude-code-ciberseguranca-clue",
    title: "Como a Anthropic usou Claude Code para construir uma plataforma de cibersegurança",
    excerpt:
      "O time de segurança da Anthropic construiu o CLUE, uma plataforma de detecção de ameaças com Claude Code, reduzindo o tempo de triagem de alertas de horas para minutos.",
    content:
      "Em maio de 2026, a Anthropic revelou como seu time de cibersegurança usou Claude Code para construir o CLUE (Claude Looks Up Evidence), uma plataforma de detecção e resposta a ameaças. O CLUE conecta-se via ferramentas aos sistemas internos da Anthropic — Slack, documentação, repositórios de código, data warehouses — e permite que analistas consultem logs de segurança em linguagem natural. Por exemplo: 'Quais foram todas as tentativas de login falhas neste sistema no último dia?' O CLUE também faz triagem automática de alertas, atribuindo disposições (falso positivo, verdadeiro positivo, malicioso, comportamento esperado) com pontuação de confiança. O proof of concept ficou pronto em um dia; o sistema completo em uma semana. O case mostra que agentes de IA podem transformar operações de segurança — um insight valioso para qualquer empresa que lida com dados sensíveis, incluindo as da Zona Franca de Manaus.",
    date: "2026-05-08",
    author: "Luan Nery",
    tags: ["Anthropic", "Claude", "Cibersegurança", "IA"],
    source: "https://claude.com/blog/how-anthropic-uses-claude-cybersecurity",
  },
  {
    slug: "openai-modelo-disprova-conjectura-matematica",
    title: "IA provou um teorema que matemáticos tentavam resolver há 80 anos",
    excerpt:
      "Um modelo da OpenAI resolveu autonomamente a conjectura central do problema das distâncias unitárias de Erdős, marcando a primeira vez que IA resolve um problema aberto importante.",
    content:
      "Em 20 de maio de 2026, a OpenAI anunciou que um de seus modelos de raciocínio geral — não treinado especificamente para matemática — resolveu a conjectura central do problema das distâncias unitárias de Paul Erdős, um problema em aberto há cerca de 80 anos. O modelo demonstrou que construções baseadas em 'grade quadrada' não são ótimas para maximizar pares de distância unitária, provando a existência de uma família infinita de exemplos que melhoram polinomialmente o limite inferior. Para isso, trouxe ideias da teoria algébrica dos números — um ramo surpreendentemente distante da geometria discreta. A prova foi verificada por matemáticos externos, que publicaram um artigo complementar explicando o argumento. É a primeira vez que um sistema de IA resolve autonomamente um problema em aberto central para uma subárea da matemática. O feito demonstra que modelos de raciocínio já podem contribuir para pesquisa de fronteira — um marco para a ciência.",
    date: "2026-05-06",
    author: "Victor Martins",
    tags: ["OpenAI", "Matemática", "Pesquisa", "Descoberta"],
    source: "https://openai.com/index/model-disproves-discrete-geometry-conjecture/",
  },
  {
    slug: "anthropic-claude-pequenos-negocios",
    title: "Claude para pequenos negócios: IA que realmente funciona no dia a dia",
    excerpt:
      "A Anthropic lançou o Claude for Small Business, com integrações a QuickBooks, HubSpot, PayPal e Google Workspace para automatizar payroll, vendas e marketing.",
    content:
      "Em 13 de maio de 2026, a Anthropic lançou o Claude for Small Business, um pacote de conectores e workflows prontos que colocam Claude dentro das ferramentas que pequenas empresas já usam: QuickBooks, PayPal, HubSpot, Canva, Docusign, Google Workspace e Microsoft 365. São 15 workflows agentivos prontos para finanças, operações, vendas, marketing, RH e atendimento ao cliente. O Claude pode planear payroll, fechar o mês, executar campanhas de vendas e cobrar faturas — sempre com aprovação humana antes de enviar, pagar ou publicar. A iniciativa inclui também um curso gratuito de AI Fluency for Small Business em parceria com o PayPal. Para pequenas empresas em Manaus, essa é uma oportunidade de acessar tecnologia que antes estava restrita a grandes corporações. A ChronoKairo pode ajudar negócios locais a integrar essas soluções com seus sistemas existentes.",
    date: "2026-05-04",
    author: "Riad Makarem",
    tags: ["Anthropic", "Claude", "Pequenos Negócios", "Automação"],
    source: "https://www.anthropic.com/news/claude-for-small-business",
  },
];
