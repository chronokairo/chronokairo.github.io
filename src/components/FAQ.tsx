import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer:
        "O prazo varia conforme a complexidade do projeto. Sites institucionais geralmente levam de 2 a 4 semanas, enquanto sistemas mais complexos podem levar de 2 a 6 meses. Fazemos uma análise detalhada antes de iniciar para fornecer um cronograma preciso.",
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer:
        "Nosso processo segue metodologias ágeis: começamos com uma reunião de levantamento de requisitos, seguida pelo design, desenvolvimento em sprints com entregas parciais, testes rigorosos e, por fim, a implantação. Você acompanha cada etapa em tempo real.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Sim! Oferecemos suporte técnico contínuo após a entrega. Temos planos mensais de manutenção que incluem correções de bugs, atualizações de segurança, pequenas melhorias e monitoramento do sistema.",
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer:
        "Trabalhamos com as tecnologias mais modernas do mercado: React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, AWS, entre outras. Escolhemos a stack ideal de acordo com as necessidades específicas de cada projeto.",
    },
    {
      question: "Como é feito o orçamento?",
      answer:
        "O orçamento é calculado com base no escopo do projeto, complexidade técnica, prazo desejado e recursos necessários. Oferecemos uma consultoria gratuita inicial para entender suas necessidades e apresentar uma proposta detalhada e transparente.",
    },
    {
      question: "Vocês trabalham com projetos de qualquer tamanho?",
      answer:
        "Sim! Atendemos desde startups e pequenos negócios até grandes empresas. Cada projeto recebe a mesma atenção e dedicação, independentemente do tamanho. Adaptamos nossa abordagem conforme suas necessidades e orçamento.",
    },
    {
      question: "O que está incluso no desenvolvimento de um site?",
      answer:
        "Nossos projetos incluem: design personalizado, desenvolvimento responsivo, otimização para SEO, integração com analytics, formulários de contato, hospedagem inicial, treinamento básico e documentação. Recursos adicionais podem ser incluídos conforme necessidade.",
    },
    {
      question: "Vocês fazem manutenção em sistemas existentes?",
      answer:
        "Sim! Realizamos manutenção, correções e melhorias em sistemas já existentes, mesmo que não tenham sido desenvolvidos por nós. Fazemos uma análise técnica do código atual antes de propor as soluções.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Perguntas <span className="text-muted-foreground">frequentes</span>
          </h2>
          <p className="text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procurava?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-foreground/5 transition-colors font-medium"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
