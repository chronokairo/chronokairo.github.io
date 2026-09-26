import React from "react";
import {
  Layers,
  Sparkles,
  CreditCard,
  Cloud,
  Coins,
  Users,
  Scale,
  Headphones,
  Briefcase,
  PenTool,
  ShoppingBag,
  Stethoscope,
  HelpCircle,
} from "lucide-react";

export type ProductCategory = "Fundação" | "Operação" | "Crescimento" | "Verticais";

export interface Product {
  slug: string;
  title: string;
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
    key: "Fundação",
    label: "Fundação",
    description: "A base comum sobre a qual todo projeto é construído.",
  },
  {
    key: "Operação",
    label: "Operação",
    description: "Finanças, pessoas, jurídico e atendimento sob um mesmo padrão.",
  },
  {
    key: "Crescimento",
    label: "Crescimento",
    description: "Vendas, marketing, conteúdo e comércio.",
  },
  {
    key: "Verticais",
    label: "Verticais",
    description: "Produtos completos para setores específicos.",
  },
];

export const products: Product[] = [
  {
    slug: "platform",
    title: "Platform",
    category: "Fundação",
    summary: "A fundação comum: autenticação, UI e design system, segurança, observabilidade e SDKs.",
    description:
      "Pacote único que concentra as capacidades compartilhadas de todos os produtos: autenticação, configuração, contratos, banco de dados, eventos, observabilidade, SDKs de serviços externos, segurança e o design system. Cada capacidade tem uma única fonte, sem cópias entre projetos.",
    highlights: [
      "Design system único para todos os produtos",
      "Criptografia, políticas e cofre de segredos centralizados",
      "Clients de serviços externos em um só SDK",
      "Testes de isolamento multi-tenant (RLS) incluídos",
    ],
    stack: ["TypeScript", "React", "PostgreSQL", "Supabase"],
    featured: true,
  },
  {
    slug: "ai",
    title: "AI",
    category: "Fundação",
    summary: "Agentes, RAG, MCP, provedores de LLM e um coding agent nativo em Rust.",
    description:
      "O centro de inteligência da coleção. Reúne chat, recuperação aumentada (RAG), servidores MCP, múltiplos provedores de LLM, governança de agentes e um coding agent nativo em Rust com interface desktop. Os demais produtos importam essas capacidades em vez de reimplementá-las.",
    highlights: [
      "Múltiplos provedores de LLM, inclusive modelos locais",
      "RAG e MCP sobre dados proprietários",
      "Painel de governança de agentes",
      "Coding agent nativo em Rust, com app desktop Tauri",
    ],
    stack: ["TypeScript", "Next.js", "Rust", "Tauri"],
    featured: true,
  },
  {
    slug: "payments",
    title: "Payments",
    category: "Fundação",
    summary: "Camada única para Stripe, Pix e boleto, Asaas, Mercado Pago e PagBank.",
    description:
      "Abstração unificada de gateways de pagamento, em arquitetura de portas e adaptadores. Um único contrato para cobranças, assinaturas e webhooks, independentemente do provedor escolhido.",
    highlights: [
      "Stripe, Banco Inter (Pix e boleto), Asaas, Mercado Pago e PagBank",
      "Webhooks normalizados em um único formato",
      "Troca de gateway sem reescrever o produto",
    ],
    stack: ["TypeScript", "Ports & Adapters"],
    featured: true,
  },
  {
    slug: "nimbus",
    title: "Nimbus",
    category: "Fundação",
    summary: "Painel DevOps e gestão multi-cloud de free tier, com roteamento por cota.",
    description:
      "Painel DevOps completo para servidores, redes, SSH, Docker e Kubernetes, monitoramento, CI/CD, deploy e backup, combinado à gestão multi-cloud de serviços com uso gratuito permanente em AWS, Cloudflare, Firebase, GitHub e Google Cloud. Um rastreador de cotas classifica o consumo de cada provedor e recomenda a migração para outro antes que o limite seja atingido. Toda a lógica de infraestrutura vive em um núcleo em Rust.",
    highlights: [
      "Servidores, SSH, Docker, Kubernetes e monitoramento em um só painel",
      "CI/CD com GitHub, deploy e backup",
      "AWS, Cloudflare, Firebase, GitHub e Google Cloud sob um contrato único",
      "Rastreamento de cotas com failover entre provedores",
      "Domínios personalizados via API nativa da Cloudflare",
    ],
    stack: ["Next.js", "TypeScript", "Rust"],
  },
  {
    slug: "finance",
    title: "Finance",
    category: "Operação",
    summary: "Contas a pagar e a receber, conciliação, DRE e patrimônio.",
    description:
      "Gestão financeira completa: contas a pagar e a receber, conciliação bancária, DRE e controle patrimonial, integrada à camada de pagamentos.",
    highlights: [
      "Conciliação bancária",
      "DRE e visão consolidada",
      "Controle de patrimônio",
    ],
    stack: ["Next.js", "Rust", "PostgreSQL"],
  },
  {
    slug: "people-projects",
    title: "People · Projects",
    category: "Operação",
    summary: "Pessoas e acessos; projetos, cronogramas e entregas.",
    description:
      "Gestão de colaboradores, equipes, cargos e acessos, integrada à gestão de projetos, cronogramas, timesheet e ao portal de acompanhamento de entregas para o cliente.",
    highlights: [
      "Organização, cargos e controle de acesso",
      "Cronogramas, timesheet e PMO",
      "Portal do cliente com linha do tempo das entregas",
    ],
    stack: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    slug: "legal",
    title: "Legal",
    category: "Operação",
    summary: "Contratos, compliance e gestão eletrônica de documentos.",
    description:
      "Gestão jurídica e de compliance com geração automatizada de contratos a partir de modelos, gestão eletrônica de documentos e OCR.",
    highlights: [
      "Geração de contratos a partir de modelos",
      "Gestão eletrônica de documentos",
      "Trilha de compliance",
    ],
    stack: ["Next.js", "TypeScript"],
  },
  {
    slug: "support",
    title: "Support",
    category: "Operação",
    summary: "Helpdesk e atendimento omnichannel em tempo real.",
    description:
      "Helpdesk, tickets e atendimento omnichannel em tempo real, com WhatsApp e demais canais reunidos em uma única caixa de entrada.",
    highlights: [
      "Tickets e SLA",
      "WhatsApp e canais em uma só caixa de entrada",
      "Atendimento em tempo real",
    ],
    stack: ["Next.js", "TypeScript"],
  },
  {
    slug: "crm-marketing",
    title: "CRM · Marketing",
    category: "Crescimento",
    summary: "Pipeline comercial, automação de marketing, SEO e analytics.",
    description:
      "Gestão de leads, clientes e oportunidades, integrada à automação de marketing, rastreamento de conversões, SEO e analytics.",
    highlights: [
      "Pipeline comercial e oportunidades",
      "Automação de marketing",
      "Rastreamento de conversões e analytics",
    ],
    stack: ["Next.js", "TypeScript"],
  },
  {
    slug: "content",
    title: "Content",
    category: "Crescimento",
    summary: "Estúdio criativo e CMS com inteligência artificial.",
    description:
      "Estúdio de criação de conteúdo com IA e CMS headless, com armazenamento agnóstico (S3 ou local) e otimização automática de mídia.",
    highlights: [
      "Criação de conteúdo assistida por IA",
      "CMS headless",
      "Otimização automática de imagens",
    ],
    stack: ["Next.js", "TypeScript"],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    category: "Crescimento",
    summary: "B2B, marketplace, catálogo digital, WMS e logística de entregas.",
    description:
      "Solução integrada de comércio B2B e marketplace, com catálogo digital, gestão de armazém (WMS), logística de distribuição e entregas.",
    highlights: [
      "B2B e marketplace",
      "Catálogo digital",
      "WMS, logística e entregas",
    ],
    stack: ["Next.js", "React", "Turborepo"],
  },
  {
    slug: "workmed",
    title: "WorkMed",
    category: "Verticais",
    summary: "SaaS multi-tenant de saúde ocupacional.",
    description:
      "Plataforma multi-tenant de saúde ocupacional: triagem guiada, roteamento entre especialidades e salas, gestão de ASOs e operação offline, com cada clínica isolada em seu próprio ambiente.",
    highlights: [
      "Triagem guiada e roteamento entre salas",
      "Gestão de ASOs e conformidade",
      "Operação mesmo com conexão instável",
      "Isolamento completo entre clínicas",
    ],
    stack: ["Next.js", "Supabase", "TypeScript"],
    featured: true,
  },
];

export const groupedProducts = productCategories.map((category) => ({
  ...category,
  products: products.filter((product) => product.category === category.key),
}));

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const productIconMap: Record<string, React.ComponentType<any>> = {
  platform: Layers,
  ai: Sparkles,
  payments: CreditCard,
  nimbus: Cloud,
  finance: Coins,
  "people-projects": Users,
  legal: Scale,
  support: Headphones,
  "crm-marketing": Briefcase,
  content: PenTool,
  "e-commerce": ShoppingBag,
  workmed: Stethoscope,
};

export function getProductIcon(slug: string): React.ComponentType<any> {
  return productIconMap[slug] || HelpCircle;
}
