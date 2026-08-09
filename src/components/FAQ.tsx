import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqSchemaLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quanto tempo leva para desenvolver um projeto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende da complexidade. Automações e integrações pontuais podem ser entregues em semanas. Sistemas agênticos, ERPs e plataformas SaaS verticais levam de 2 a 6 meses. Começamos com uma análise de escopo detalhada para definir cronograma e marcos de entrega realistas.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o processo de desenvolvimento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabalhamos em ciclos ágeis com entregas parciais validadas. O fluxo começa com levantamento de requisitos e arquitetura, seguido de sprints com demonstrações reais. Você acompanha o progresso continuamente e participa das decisões técnicas que impactam o resultado.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês oferecem suporte após a entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Oferecemos planos de suporte técnico pós-entrega com SLA definido, monitoramento de sistemas em produção, atualizações de segurança e evolução contínua. Para contratos por resultado, o suporte faz parte do modelo.",
      },
    },
    {
      "@type": "Question",
      name: "Quais tecnologias vocês utilizam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nossa stack principal inclui TypeScript, React, Next.js, Node.js, Python, Flutter, PostgreSQL e Firebase. Em projetos de IA, trabalhamos com LLMs via OpenAI, Anthropic e modelos locais via Ollama. Para hiperautomação, utilizamos n8n e Make com governança e conformidade LGPD. A escolha da stack é orientada pelo problema, não por preferência.",
      },
    },
    {
      "@type": "Question",
      name: "Como é feito o orçamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferecemos dois modelos: escopo fechado (preço fixo por entrega definida) e contrato por resultado (remuneração atrelada ao valor gerado). Após uma reunião de diagnóstico gratuita, apresentamos uma proposta detalhada com arquitetura, cronograma e investimento transparentes.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês trabalham com modernização de sistemas legados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, é um dos nossos pilares. Modernizamos ERPs, CRMs e sistemas proprietários via APIs e microsserviços, sem derrubar o que está em produção. Integramos legados a fluxos modernos de IA e automação, preservando o investimento existente e reduzindo riscos de migração.",
      },
    },
    {
      "@type": "Question",
      name: "O que são Sistemas Agênticos e por que isso importa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sistemas agênticos são plataformas com múltiplos agentes de IA que colaboram para executar tarefas complexas de forma autônoma — com guardrails, orquestração e dados proprietários. Em 2026, eles representam o próximo passo além da automação simples: o sistema pensa, decide e age dentro de limites definidos por você.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês atendem empresas de forma remota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Atendemos clientes de forma remota em todo o Brasil. Operamos projetos de forma totalmente distribuída com comunicação assíncrona estruturada e rituais de acompanhamento regulares.",
      },
    },
  ],
};

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer:
        "Depende da complexidade. Automações e integrações pontuais podem ser entregues em semanas. Sistemas agênticos, ERPs e plataformas SaaS verticais levam de 2 a 6 meses. Começamos com uma análise de escopo detalhada para definir cronograma e marcos de entrega realistas.",
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer:
        "Trabalhamos em ciclos ágeis com entregas parciais validadas. O fluxo começa com levantamento de requisitos e arquitetura, seguido de sprints com demonstrações reais. Você acompanha o progresso continuamente e participa das decisões técnicas que impactam o resultado.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Sim. Oferecemos planos de suporte técnico pós-entrega com SLA definido, monitoramento de sistemas em produção, atualizações de segurança e evolução contínua. Para contratos por resultado, o suporte faz parte do modelo.",
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer:
        "Nossa stack principal inclui TypeScript, React, Next.js, Node.js, Python, Flutter, PostgreSQL e Firebase. Em projetos de IA, trabalhamos com LLMs via OpenAI, Anthropic e modelos locais via Ollama. Para hiperautomação, utilizamos n8n e Make com governança e conformidade LGPD. A escolha da stack é orientada pelo problema, não por preferência.",
    },
    {
      question: "Como é feito o orçamento?",
      answer:
        "Oferecemos dois modelos: escopo fechado (preço fixo por entrega definida) e contrato por resultado (remuneração atrelada ao valor gerado). Após uma reunião de diagnóstico gratuita, apresentamos uma proposta detalhada com arquitetura, cronograma e investimento transparentes.",
    },
    {
      question: "Vocês trabalham com modernização de sistemas legados?",
      answer:
        "Sim, é um dos nossos pilares. Modernizamos ERPs, CRMs e sistemas proprietários via APIs e microsserviços, sem derrubar o que está em produção. Integramos legados a fluxos modernos de IA e automação, preservando o investimento existente e reduzindo riscos de migração.",
    },
    {
      question: "O que são Sistemas Agênticos e por que isso importa?",
      answer:
        "Sistemas agênticos são plataformas com múltiplos agentes de IA que colaboram para executar tarefas complexas de forma autônoma — com guardrails, orquestração e dados proprietários. Em 2026, eles representam o próximo passo além da automação simples: o sistema pensa, decide e age dentro de limites definidos por você.",
    },
    {
      question: "Vocês atendem empresas de forma remota?",
      answer:
        "Sim. Atendemos clientes de forma remota em todo o Brasil. Operamos projetos de forma totalmente distribuída com comunicação assíncrona estruturada e rituais de acompanhamento regulares.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaLd) }}
      />
      <div className="absolute inset-0 bg-dots opacity-[0.15]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight text-foreground">
            Perguntas <span className="font-normal italic">frequentes</span>
          </h2>
          <p className="text-foreground/80 text-sm">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto border-t border-b border-border">
          <Accordion type="single" collapsible className="divide-y divide-border">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none px-2"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-serif font-bold text-foreground hover:text-foreground/80 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/80 text-sm mb-4">
            Ainda tem alguma dúvida ou precisa de um projeto especial?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors text-sm font-medium cursor-pointer"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
