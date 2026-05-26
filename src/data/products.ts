import React from "react";
import { 
  Bot, Terminal, Database, Briefcase, Headphones, Users, 
  Coins, Target, Megaphone, Smile, GitBranch, GraduationCap, 
  SquareKanban, Building2, Network, Scale, ShieldCheck, HelpCircle 
} from "lucide-react";

export type ProductCategory = "IA" | "Sistemas" | "Mobile" | "Web" | "DevTools" | "Setores";
export type ProductBrand = "Kairos" | "Chronos";

export interface Product {
  slug: string;
  title: string;
  brand: ProductBrand;
  category: ProductCategory;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
}

export const productCategories: Array<{
  key: ProductCategory;
  label: string;
  description: string;
}> = [
  {
    key: "IA",
    label: "IA",
    description: "Busca, resposta e automação com dados proprietários.",
  },
  {
    key: "Sistemas",
    label: "Sistemas",
    description: "Plataformas para operação, gestão e integração.",
  },
  {
    key: "Setores",
    label: "Setores",
    description: "Apps verticais para cada área do negócio.",
  },
  {
    key: "DevTools",
    label: "Dev Tools",
    description: "Ferramentas para times de desenvolvimento.",
  },
  {
    key: "Mobile",
    label: "Mobile",
    description: "Apps corporativos e operacionais para campo e equipe.",
  },
  {
    key: "Web",
    label: "Web",
    description: "Portais, produtos digitais e experiências web.",
  },
];

export const products: Product[] = [
  // ── KAIROS IA ──────────────────────────────────────────────
  {
    slug: "kairos-rag",
    title: "Kairos RAG",
    brand: "Kairos",
    category: "IA",
    summary: "Chat inteligente com RAG para responder usando bases proprietárias.",
    description:
      "Sistema de chat inteligente com RAG que consulta APIs TOTVS e responde perguntas com apoio de LLM local via Ollama.",
    highlights: [
      "Consulta dados internos em tempo real",
      "Respostas contextualizadas para operação",
      "Base pronta para copilots e assistentes internos",
    ],
    stack: ["React", "Node.js", "Ollama", "TypeScript"],
    featured: true,
  },
  {
    slug: "kairos-dev",
    title: "Kairos DEV",
    brand: "Kairos",
    category: "IA",
    summary: "Agent coding com suporte a múltiplos provedores de LLM.",
    description:
      "Plataforma de coding assistido por agentes de IA com suporte a múltiplos provedores (OpenAI, Anthropic, Gemini, Ollama) para automação de tarefas de desenvolvimento, geração de código e revisão inteligente.",
    highlights: [
      "Agentes especializados por tarefa de desenvolvimento",
      "Suporte nativo a múltiplos provedores de LLM",
      "Integração com repositórios e pipelines CI/CD",
    ],
    stack: ["TypeScript", "Node.js", "OpenAI", "Anthropic", "Ollama"],
    featured: true,
  },

  // ── KAIROS SISTEMAS ────────────────────────────────────────
  {
    slug: "kairos-cms",
    title: "Kairos CMS",
    brand: "Kairos",
    category: "Sistemas",
    summary: "Gerenciador de conteúdo extensível com painel administrativo.",
    description:
      "Sistema de Gerenciamento de Conteúdo moderno e extensível com dashboard administrativo, gestão de usuários e integrações com TOTVS RM e AWS S3.",
    highlights: [
      "Gestão de usuários e permissões",
      "Integração com armazenamento em nuvem",
      "Arquitetura pronta para múltiplos sites",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "kairos-crm",
    title: "Kairos CRM",
    brand: "Kairos",
    category: "Sistemas",
    summary: "CRM multiplataforma para vendas, relacionamento e relatórios.",
    description:
      "Sistema completo de CRM para gestão de relacionamento com clientes, vendas, produtos e relatórios.",
    highlights: [
      "Fluxo de vendas e relacionamento",
      "Relatórios operacionais",
      "Base sólida para times comerciais",
    ],
    stack: ["Flutter", "Dart", "Riverpod", "Hive"],
  },
  {
    slug: "kairos-support",
    title: "Kairos Support",
    brand: "Kairos",
    category: "Sistemas",
    summary: "Suporte omnichannel com chat, email e helpdesk integrados.",
    description:
      "Plataforma de atendimento ao cliente omnichannel com chat em tempo real, gestão de tickets, base de conhecimento e integração com WhatsApp.",
    highlights: [
      "Atendimento via chat, email e WhatsApp",
      "Gestão de filas e SLA",
      "Base de conhecimento integrada",
    ],
    stack: ["Ruby on Rails", "React", "PostgreSQL", "Redis"],
  },

  // ── KAIROS SETORES ────────────────────────────────────────
  {
    slug: "kairos-people",
    title: "Kairos People",
    brand: "Kairos",
    category: "Setores",
    summary: "Gestão de RH, recrutamento, avaliações e benefícios.",
    description:
      "Sistema de gestão de pessoas para PMEs com recrutamento, seleção, avaliações de desempenho, treinamentos e gestão de benefícios.",
    highlights: [
      "Recrutamento e onboarding digital",
      "Avaliações de desempenho",
      "Controle de benefícios e folha",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "kairos-fin",
    title: "Kairos FIN",
    brand: "Kairos",
    category: "Setores",
    summary: "Fluxo de caixa, contas a pagar/receber e conciliação bancária.",
    description:
      "Plataforma financeira para PMEs com controle de contas a pagar e receber, fluxo de caixa, cobrança automatizada e conciliação bancária.",
    highlights: [
      "Fluxo de caixa em tempo real",
      "Cobrança e régua automática",
      "Conciliação bancária integrada",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "kairos-sales",
    title: "Kairos Sales",
    brand: "Kairos",
    category: "Setores",
    summary: "Gestão de pipeline, SDR e funil de vendas para times comerciais.",
    description:
      "Plataforma comercial com gestão de pipeline de vendas, cadências de prospecção, controle de SDRs e relatórios de conversão.",
    highlights: [
      "Pipeline visual por etapa",
      "Cadências e automações de prospecção",
      "Relatórios de conversão e forecast",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "kairos-mkt",
    title: "Kairos MKT",
    brand: "Kairos",
    category: "Setores",
    summary: "Automação de campanhas, email marketing e gestão de tráfego.",
    description:
      "Plataforma de marketing digital com automação de campanhas, email marketing, gestão de tráfego pago e relatórios de SEO.",
    highlights: [
      "Automação de campanhas e disparos",
      "Gestão de tráfego pago integrada",
      "Analytics de conversão e SEO",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "kairos-cs",
    title: "Kairos CS",
    brand: "Kairos",
    category: "Setores",
    summary: "Customer success com onboarding, retenção e gestão de SLA.",
    description:
      "Plataforma de customer success para times de pós-venda com onboarding guiado, monitoramento de saúde de conta e gestão de SLA.",
    highlights: [
      "Onboarding digitalizado por etapa",
      "Health score por conta",
      "Alertas de churn e oportunidades de upsell",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },

  // ── KAIROS DEV TOOLS ──────────────────────────────────────
  {
    slug: "kairos-git",
    title: "Kairos Git",
    brand: "Kairos",
    category: "DevTools",
    summary: "GitHub Desktop integrado com fluxo Kairos e gestão de repositórios.",
    description:
      "Ferramenta desktop de gestão de repositórios Git com integração nativa ao ecossistema Kairos, simplificando o fluxo de desenvolvimento em equipe.",
    highlights: [
      "Interface visual para Git sem linha de comando",
      "Integração com Kairos DEV e pipelines",
      "10k+ estrelas no GitHub",
    ],
    stack: ["TypeScript", "Electron", "React"],
    featured: true,
  },

  // ── KAIROS WEB & EDU ──────────────────────────────────────
  {
    slug: "kairos-edu",
    title: "Kairos Edu",
    brand: "Kairos",
    category: "Web",
    summary: "Portal educacional com integrações acadêmicas e comunicação.",
    description:
      "Portal educacional omnichannel com middleware de integração RM Edu TOTVS para matrículas, notas, boletos e comunicação acadêmica.",
    highlights: [
      "Experiência institucional completa",
      "Integração com processos acadêmicos",
      "Estrutura para campanhas e conversão",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "TOTVS RM"],
  },
  {
    slug: "kairos-trk",
    title: "Kairos TRK",
    brand: "Kairos",
    category: "Web",
    summary: "Gestão de projetos com Kanban, Gantt e webhooks.",
    description:
      "Sistema de gestão de projetos com integração GitHub, Kanban board, gráfico de Gantt e sincronização automática via webhooks.",
    highlights: [
      "Integração com GitHub e webhooks",
      "Visão de progresso e cronograma",
      "Controle de trabalho em equipe",
    ],
    stack: ["React", "TypeScript", "Firebase", "Material-UI"],
  },

  // ── CHRONOS ───────────────────────────────────────────────
  {
    slug: "chronos-erp",
    title: "Chronos ERP",
    brand: "Chronos",
    category: "Sistemas",
    summary: "ERP completo para operação, financeiro e gestão integrada.",
    description:
      "Sistema ERP enterprise com módulos de financeiro, estoque, compras, RH e relatórios gerenciais, com integração TOTVS e implantação assistida.",
    highlights: [
      "Módulos integrados de toda a operação",
      "Integração nativa com TOTVS",
      "Implantação e suporte dedicado",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "chronos-sgr",
    title: "Chronos SGR",
    brand: "Chronos",
    category: "Sistemas",
    summary: "Gestão de rede para provedores com monitoramento em tempo real.",
    description:
      "Sistema de Gestão de Rede para provedores de internet com integração MikroTik, OLT e monitoramento em tempo real.",
    highlights: [
      "Integração com infraestrutura de rede",
      "Visão operacional de dispositivos",
      "Painéis para suporte e NOC",
    ],
    stack: ["Flutter", "Firebase", "Dart", "SSH"],
  },
  {
    slug: "chronos-agp",
    title: "Chronos AGP",
    brand: "Chronos",
    category: "Mobile",
    summary: "Pesagem agropecuária com integração serial e gestão de lotes.",
    description:
      "Sistema de pesagem agropecuária com integração com balanças via comunicação serial e gestão de lotes de animais.",
    highlights: [
      "Coleta de dados em campo",
      "Operação offline-friendly",
      "Interface otimizada para uso rápido",
    ],
    stack: ["Flutter", "Dart", "SQLite"],
  },
  {
    slug: "chronos-sec",
    title: "Chronos SEC",
    brand: "Chronos",
    category: "Sistemas",
    summary: "Segurança da informação, LGPD, gestão de acessos e auditoria.",
    description:
      "Suite de segurança enterprise com gestão de acessos, adequação LGPD, auditoria de sistemas, pentest e criptografia de dados sensíveis.",
    highlights: [
      "Adequação LGPD e ISO 27001",
      "Gestão de acessos e identidades",
      "Auditoria e relatórios de conformidade",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
  },
];

export const groupedProducts = productCategories.map((category) => ({
  ...category,
  products: products.filter((product) => product.category === category.key),
}));

export const kairosProducts = products.filter((p) => p.brand === "Kairos");
export const chronosProducts = products.filter((p) => p.brand === "Chronos");

export const featuredProducts = products.filter((product) => product.featured);
export const featuredKairos = kairosProducts.filter((p) => p.featured);
export const featuredChronos = chronosProducts.filter((p) => p.featured);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const productIconMap: Record<string, React.ComponentType<any>> = {
  "kairos-rag": Bot,
  "kairos-dev": Terminal,
  "kairos-cms": Database,
  "kairos-crm": Briefcase,
  "kairos-support": Headphones,
  "kairos-people": Users,
  "kairos-fin": Coins,
  "kairos-sales": Target,
  "kairos-mkt": Megaphone,
  "kairos-cs": Smile,
  "kairos-git": GitBranch,
  "kairos-edu": GraduationCap,
  "kairos-trk": SquareKanban,
  "chronos-erp": Building2,
  "chronos-sgr": Network,
  "chronos-agp": Scale,
  "chronos-sec": ShieldCheck,
};

export function getProductIcon(slug: string): React.ComponentType<any> {
  return productIconMap[slug] || HelpCircle;
}
