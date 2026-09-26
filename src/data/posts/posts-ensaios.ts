import type { Post } from ".";

export const postsEnsaios: Post[] = [
  {
    slug: "uma-fonte-unica-por-capacidade",
    title: "Uma fonte única por capacidade: como organizamos nossa coleção",
    excerpt:
      "Por que reunimos autenticação, UI, segurança, pagamentos e IA em fundações únicas, e o que isso muda para quem contrata um projeto sob medida.",
    content:
      "Toda casa de software acumula repetição. Um formulário de login copiado para o terceiro projeto, uma integração de pagamento reescrita porque a anterior estava presa a outro código, um componente de interface que existe em quatro versões ligeiramente diferentes. Cada cópia parece barata no dia em que é feita, e cara em todos os dias seguintes.\nNos últimos meses reorganizamos a Chronokairo em torno de uma regra simples: cada capacidade tem uma única fonte. Autenticação, design system, criptografia, observabilidade e clients de serviços externos vivem na Platform. Chat, RAG, MCP e provedores de LLM vivem no AI. Gateways de pagamento vivem no Payments. Os produtos consomem essas fundações e não as duplicam.\nA consolidação foi feita preservando o histórico de cada linha de código. Quando algo muda de lugar, o endereço antigo continua respondendo, para não quebrar quem dependia dele. Cada decisão relevante fica registrada em um documento de arquitetura, com contexto, alternativas e consequências.\nPara quem nos contrata, o efeito é direto. Um projeto sob medida não começa do zero: parte de componentes que já rodam em produção, com testes e decisões documentadas. O tempo do projeto vai para o que é exclusivo da operação do cliente, e não para reconstruir o que qualquer sistema precisa ter.\nHá também uma regra de contenção: evitamos bibliotecas triviais e reimplementamos o que diferencia o produto. Menos dependências significam menos superfície de ataque, menos atualizações forçadas e um sistema que continua compreensível daqui a cinco anos.\nÉ isso que queremos dizer quando falamos em ativos digitais perenes. Não é uma promessa de que o software nunca vai mudar. É a garantia de que ele foi construído para mudar bem.",
    date: "2026-09-25",
    author: "Chronokairo",
    tags: ["Ensaio", "Arquitetura", "Engenharia"],
  },
  {
    slug: "llm-em-gpu-de-1gb-notas-do-laboratorio",
    title: "Um LLM em uma GPU de 1 GB: notas do laboratório",
    excerpt:
      "Por que os motores de inferência convencionais falham em placas antigas, e como o relic contorna os limites de OpenCL 1.2, VRAM e alocação de memória.",
    content:
      "Uma parte relevante das máquinas em uso no Brasil tem GPUs que o mercado de IA considera obsoletas. Nossa referência de estudo no surveyor é uma AMD Caicos XT, da arquitetura Terascale 2: 1 GB de VRAM DDR3, OpenCL 1.2 e no máximo 512 MB por buffer.\nNessa classe de hardware, os motores de inferência populares simplesmente não iniciam. O backend OpenCL padrão exige OpenCL C 2.0 ou superior, e a ausência da extensão de meia precisão (cl_khr_fp16) impede a execução direta de tensores FP16 sem emulação.\nO relic nasceu para ocupar esse espaço. É um runtime GGUF minimalista para OpenCL 1.2 e 3.0, pensado para orçamentos de 1 a 4 GB de VRAM, GPUs integradas e topologias híbridas que combinam GPU dedicada, GPU integrada e memória do host.\nAlgumas escolhas definem o projeto. Os buffers de ativação são planejados estaticamente, de modo que não há alocação de memória no caminho crítico da inferência. Os pesos em FP16, Q8_0 e Q4_0 são reempacotados no carregamento para o formato que cada dispositivo processa melhor. Um escalonador decide, tensor a tensor, onde cada dado rende mais por byte transferido.\nEm topologias heterogêneas, o relic aplica decodificação especulativa distribuída: um modelo pequeno gera o rascunho em uma GPU, e a outra verifica os tokens em lote. Os kernels e os testes numéricos camada a camada passam hoje em uma NVIDIA GTX 1650 e em uma Intel UHD Graphics.\nO próximo passo é um backend de quantização ultrabaixa (2 e 3 bits) para caber em 1 GB de VRAM. Todo o trabalho é aberto e está publicado em github.com/anamnesic.\nO que aprendemos aqui chega aos produtos da Chronokairo: modelos que rodam localmente, com privacidade e sem depender de infraestrutura cara.",
    date: "2026-09-25",
    author: "Anamnesic Labs",
    tags: ["Anamnesic Labs", "Inferência", "OpenCL"],
    source: "https://github.com/anamnesic/relic",
  },
];
