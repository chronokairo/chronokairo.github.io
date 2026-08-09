import React from "react";
import {
  Bot,
  Terminal,
  Database,
  Briefcase,
  Headphones,
  Users,
  Coins,
  Target,
  Megaphone,
  Smile,
  GitBranch,
  GraduationCap,
  SquareKanban,
  Building2,
  Network,
  Scale,
  ShieldCheck,
  HelpCircle,
  ShoppingCart,
  Wrench,
  Globe,
  Smartphone,
  BookOpen,
  FileText,
  MessageSquare,
  Settings,
  Layout,
  Mail,
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
  {
    slug: "chatbot-ia",
    title: "Chatbot Inteligente",
    brand: "Kairos",
    category: "IA",
    summary: "Chat inteligente com RAG para responder usando bases proprietárias.",
    description:
      "Sistema de chat inteligente com RAG que consulta bases de dados internas e responde perguntas com apoio de LLM.",
    highlights: [
      "Consulta dados internos em tempo real",
      "Respostas contextualizadas para operação",
      "Base pronta para copilots e assistentes internos",
    ],
    stack: ["React", "Node.js", "Python", "TypeScript"],
    featured: true,
  },
  {
    slug: "agente-ia",
    title: "Agente de IA",
    brand: "Kairos",
    category: "IA",
    summary: "Agent coding com suporte a múltiplos provedores de LLM.",
    description:
      "Plataforma de agentes de IA com suporte a múltiplos provedores para automação de tarefas, geração de código e revisão inteligente.",
    highlights: [
      "Agentes especializados por tarefa",
      "Suporte nativo a múltiplos provedores de LLM",
      "Integração com repositórios e pipelines CI/CD",
    ],
    stack: ["TypeScript", "Node.js", "Python", "OpenAI", "Anthropic"],
    featured: true,
  },

  {
    slug: "cms",
    title: "CMS Headless",
    brand: "Kairos",
    category: "Sistemas",
    summary: "Gerenciador de conteúdo extensível com painel administrativo.",
    description:
      "Sistema de Gerenciamento de Conteúdo moderno e extensível com dashboard administrativo, gestão de usuários e integrações com armazenamento em nuvem.",
    highlights: [
      "Gestão de usuários e permissões",
      "Integração com armazenamento em nuvem",
      "Arquitetura pronta para múltiplos sites",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "crm",
    title: "CRM",
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
    slug: "helpdesk",
    title: "Helpdesk",
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
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
  },

  {
    slug: "rh",
    title: "RH",
    brand: "Kairos",
    category: "Setores",
    summary: "Gestão de RH, recrutamento, avaliações e benefícios.",
    description:
      "Sistema de gestão de pessoas com recrutamento, seleção, avaliações de desempenho, treinamentos e gestão de benefícios.",
    highlights: [
      "Recrutamento e onboarding digital",
      "Avaliações de desempenho",
      "Controle de benefícios e folha",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "financeiro",
    title: "Financeiro",
    brand: "Kairos",
    category: "Setores",
    summary: "Fluxo de caixa, contas a pagar/receber e conciliação bancária.",
    description:
      "Plataforma financeira com controle de contas a pagar e receber, fluxo de caixa, cobrança automatizada e conciliação bancária.",
    highlights: [
      "Fluxo de caixa em tempo real",
      "Cobrança e régua automática",
      "Conciliação bancária integrada",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "vendas",
    title: "Vendas",
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
    slug: "marketing",
    title: "Marketing",
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
    slug: "customer-success",
    title: "Customer Success",
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

  {
    slug: "git-tool",
    title: "Git Tool",
    brand: "Kairos",
    category: "DevTools",
    summary: "Ferramenta desktop para gestão de repositórios Git.",
    description:
      "Ferramenta desktop de gestão de repositórios Git com interface visual, simplificando o fluxo de desenvolvimento em equipe.",
    highlights: [
      "Interface visual para Git",
      "Integração com pipelines CI/CD",
      "Fluxo de trabalho otimizado",
    ],
    stack: ["TypeScript", "Electron", "React"],
    featured: true,
  },

  {
    slug: "portal-educacional",
    title: "Portal Educacional",
    brand: "Kairos",
    category: "Web",
    summary: "Portal educacional com integrações acadêmicas e comunicação.",
    description:
      "Portal educacional omnichannel com integrações acadêmicas para gestão de matrículas, notas, boletos e comunicação.",
    highlights: [
      "Experiência institucional completa",
      "Integração com processos acadêmicos",
      "Estrutura para campanhas e conversão",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    slug: "gestao-projetos",
    title: "Gestão de Projetos",
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

  {
    slug: "erp",
    title: "ERP",
    brand: "Chronos",
    category: "Sistemas",
    summary: "ERP completo para operação, financeiro e gestão integrada.",
    description:
      "Sistema ERP enterprise com módulos de financeiro, estoque, compras, RH e relatórios gerenciais, com implantação assistida.",
    highlights: [
      "Módulos integrados de toda a operação",
      "Implantação e suporte dedicado",
      "Escalável para crescimento",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "gestao-rede",
    title: "Gestão de Rede",
    brand: "Chronos",
    category: "Sistemas",
    summary: "Gestão de rede com monitoramento em tempo real.",
    description:
      "Sistema de Gestão de Rede com monitoramento em tempo real e integrações com dispositivos de infraestrutura.",
    highlights: [
      "Monitoramento em tempo real",
      "Visão operacional de dispositivos",
      "Painéis para suporte e NOC",
    ],
    stack: ["Flutter", "Firebase", "Dart"],
  },
  {
    slug: "app-agro",
    title: "App Agro",
    brand: "Chronos",
    category: "Mobile",
    summary: "Aplicativo agropecuário com gestão de lotes e pesagem.",
    description:
      "Sistema mobile para pesagem e gestão de lotes, com coleta de dados em campo e operação offline.",
    highlights: [
      "Coleta de dados em campo",
      "Operação offline-friendly",
      "Interface otimizada para uso rápido",
    ],
    stack: ["Flutter", "Dart", "SQLite"],
  },
  {
    slug: "seguranca",
    title: "Segurança",
    brand: "Chronos",
    category: "Sistemas",
    summary: "Segurança da informação, gestão de acessos e auditoria.",
    description:
      "Suite de segurança com gestão de acessos, auditoria de sistemas e conformidade.",
    highlights: [
      "Gestão de acessos e identidades",
      "Auditoria e relatórios de conformidade",
      "Proteção de dados sensíveis",
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
  "chatbot-ia": Bot,
  "agente-ia": Terminal,
  "cms": Database,
  "crm": Briefcase,
  "helpdesk": Headphones,
  "rh": Users,
  "financeiro": Coins,
  "vendas": Target,
  "marketing": Megaphone,
  "customer-success": Smile,
  "git-tool": GitBranch,
  "portal-educacional": GraduationCap,
  "gestao-projetos": SquareKanban,
  "erp": Building2,
  "gestao-rede": Network,
  "app-agro": Scale,
  "seguranca": ShieldCheck,
};

export function getProductIcon(slug: string): React.ComponentType<any> {
  return productIconMap[slug] || HelpCircle;
}
