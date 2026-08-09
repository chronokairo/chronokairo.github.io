export interface PriceOption {
  label: string;
  price: string;
  period?: string;
  highlight?: boolean;
  details?: string[];
}

export interface PricingModel {
  productSlug: string;
  model: "saas" | "monthly" | "project" | "enterprise";
  options: PriceOption[];
  notes?: string;
}

export const pricingModels: PricingModel[] = [
  {
    productSlug: "chatbot-ia",
    model: "saas",
    options: [
      {
        label: "Starter",
        price: "R$ 89,90",
        period: "/mês",
        details: [
          "1 usuário admin",
          "Até 1.000 mensagens/mês",
          "Base de conhecimento até 100 páginas",
          "Suporte por email",
        ],
      },
      {
        label: "Pro",
        price: "R$ 249,90",
        period: "/mês",
        highlight: true,
        details: [
          "5 usuários",
          "Até 10.000 mensagens/mês",
          "Base ilimitada",
          "Integração com WhatsApp",
          "Suporte prioritário",
        ],
      },
      {
        label: "Enterprise",
        price: "Sob consulta",
        details: [
          "Usuários ilimitados",
          "Volume ilimitado",
          "Modelo próprio de IA",
          "SLA garantido",
          "Suporte dedicado",
        ],
      },
    ],
    notes: "Com código fonte incluso a partir do plano Pro.",
  },
  {
    productSlug: "agente-ia",
    model: "saas",
    options: [
      {
        label: "Dev",
        price: "R$ 149,90",
        period: "/mês",
        details: [
          "1 agente ativo",
          "100 execuções/dia",
          "Provedores OpenAI / Anthropic",
          "Logs básicos",
        ],
      },
      {
        label: "Team",
        price: "R$ 399,90",
        period: "/mês",
        highlight: true,
        details: [
          "5 agentes ativos",
          "Execuções ilimitadas",
          "Provedores customizados",
          "Integração com GitHub",
          "Dashboard de métricas",
        ],
      },
      {
        label: "Enterprise",
        price: "Sob consulta",
        details: [
          "Agentes ilimitados",
          "Modelos privados",
          "SSO e audit log",
          "Implantação assistida",
        ],
      },
    ],
    notes: "Sem código fonte no SaaS. Com código fonte disponível sob consulta.",
  },
  {
    productSlug: "cms",
    model: "saas",
    options: [
      {
        label: "Starter",
        price: "R$ 59,90",
        period: "/mês",
        details: [
          "1 site",
          "10 usuários",
          "Storage 10GB",
          "Suporte comunidade",
        ],
      },
      {
        label: "Business",
        price: "R$ 179,90",
        period: "/mês",
        highlight: true,
        details: [
          "5 sites",
          "Usuários ilimitados",
          "Storage 100GB",
          "Integrações premium",
          "Suporte dedicado",
        ],
      },
      {
        label: "Enterprise",
        price: "Sob consulta",
        details: [
          "Sites ilimitados",
          "Cluster dedicado",
          "SSO e audit log",
          "SLA 99,9%",
        ],
      },
    ],
    notes: "Código fonte incluso a partir do plano Business.",
  },
  {
    productSlug: "crm",
    model: "monthly",
    options: [
      {
        label: "Essencial",
        price: "R$ 79,90",
        period: "/mês",
        details: [
          "Pipeline básico",
          "Até 3 usuários",
          "Relatórios simples",
          "App mobile incluso",
        ],
      },
      {
        label: "Avançado",
        price: "R$ 199,90",
        period: "/mês",
        highlight: true,
        details: [
          "Pipeline avançado",
          "Usuários ilimitados",
          "Relatórios customizados",
          "Integrações e webhooks",
        ],
      },
      {
        label: "Custom",
        price: "Sob consulta",
        details: [
          "Fluxos exclusivos",
          "Módulos sob medida",
          "Implantação assistida",
          "Treinamento da equipe",
        ],
      },
    ],
    notes: "Sem código fonte no modelo mensal. Projeto fechado com código fonte sob consulta.",
  },
  {
    productSlug: "helpdesk",
    model: "monthly",
    options: [
      {
        label: "Start",
        price: "R$ 69,90",
        period: "/mês",
        details: [
          "3 agentes",
          "100 tickets/mês",
          "Chat e email",
          "Base de conhecimento",
        ],
      },
      {
        label: "Growth",
        price: "R$ 189,90",
        period: "/mês",
        highlight: true,
        details: [
          "10 agentes",
          "Tickets ilimitados",
          "WhatsApp incluso",
          "SLA e relatórios",
        ],
      },
      {
        label: "Enterprise",
        price: "Sob consulta",
        details: [
          "Agentes ilimitados",
          "Multicanal completo",
          "IA para triagem",
          "Suporte dedicado",
        ],
      },
    ],
    notes: "Código fonte disponível apenas para clientes enterprise.",
  },
  {
    productSlug: "financeiro",
    model: "project",
    options: [
      {
        label: "Projeto padrão",
        price: "Sob consulta",
        details: [
          "Escopo fechado",
          "Entrega sem código fonte",
          "Treinamento incluso",
          "Suporte 30 dias",
        ],
      },
      {
        label: "Projeto + código fonte",
        price: "+30%",
        details: [
          "Código fonte completo",
          "Documentação técnica",
          "Repositório privado",
          "Suporte 90 dias",
        ],
        highlight: true,
      },
      {
        label: "Mensalidade",
        price: "A partir de R$ 99,90",
        period: "/mês",
        details: [
          "Hospedagem",
          "Atualizações",
          "Suporte contínuo",
          "Backup diário",
        ],
      },
    ],
    notes: "Projetos fechados começam a partir de R$ 25.000.",
  },
  {
    productSlug: "vendas",
    model: "project",
    options: [
      {
        label: "Escopo fechado",
        price: "Sob consulta",
        details: [
          "Entrega sem código fonte",
          "Treinamento incluso",
          "Suporte 30 dias",
        ],
      },
      {
        label: "Escopo fechado + código",
        price: "+30%",
        details: [
          "Código fonte completo",
          "Documentação",
          "Suporte 90 dias",
        ],
        highlight: true,
      },
      {
        label: "Mensalidade",
        price: "A partir de R$ 79,90",
        period: "/mês",
        details: [
          "Hospedagem",
          "Atualizações",
          "Suporte contínuo",
        ],
      },
    ],
    notes: "Projetos fechados começam a partir de R$ 20.000.",
  },
  {
    productSlug: "erp",
    model: "enterprise",
    options: [
      {
        label: "Projeto fechado",
        price: "Sob consulta",
        details: [
          "Módulos essenciais",
          "Entrega sem código fonte",
          "Treinamento da equipe",
          "Suporte 60 dias",
        ],
      },
      {
        label: "Projeto + código fonte",
        price: "+30%",
        details: [
          "Código fonte completo",
          "Documentação técnica",
          "Repositório privado",
          "Suporte 120 dias",
        ],
        highlight: true,
      },
      {
        label: "Mensalidade",
        price: "A partir de R$ 149,90",
        period: "/mês",
        details: [
          "Hospedagem",
          "Atualizações",
          "Suporte contínuo",
          "Backup e monitoramento",
        ],
      },
    ],
    notes: "ERP sob medida a partir de R$ 80.000.",
  },
];

export function getPricingForProduct(slug: string) {
  return pricingModels.find((p) => p.productSlug === slug);
}
