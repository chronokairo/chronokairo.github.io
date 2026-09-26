"use client";

import { useState, type FormEvent } from "react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5592981244044";

const commitments = [
  { value: "Poucos", label: "projetos simultâneos, para que cada um tenha a atenção de quem o desenhou." },
  { value: "Seleção", label: "de engajamentos por aderência: aceitamos o que conseguimos entregar com excelência." },
  { value: "Autoria", label: "sênior do diagnóstico à entrega, sem repasse a equipes terceirizadas." },
];

const engagements = [
  "Projeto sob medida",
  "Licença da Coleção Proprietária",
  "IA aplicada à operação",
  "Modernização de sistema existente",
];

const horizons = ["Imediato", "Próximo trimestre", "Ainda em avaliação"];

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    engagement: engagements[0],
    horizon: horizons[0],
    challenge: "",
  });

  const update = (key: keyof typeof form) => (event: { target: { value: string } }) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Olá, Chronokairo. Gostaria de submeter um projeto para avaliação.",
      "",
      `Nome: ${form.name}`,
      `Empresa: ${form.company}`,
      `Tipo de engajamento: ${form.engagement}`,
      `Horizonte: ${form.horizon}`,
      "",
      `Desafio: ${form.challenge}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="container mx-auto px-8 relative">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-mono tracking-[0.3em] text-muted-foreground uppercase mb-10">
              07 / Contato
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] mb-6 text-foreground">
              Tem um problema difícil?<br />
              <em className="not-italic font-extralight text-muted-foreground">Vamos conversar.</em>
            </h2>

            <p className="text-sm md:text-base text-muted-foreground font-light leading-[1.9] mb-14 max-w-md">
              Trabalhamos com uma agenda deliberadamente curta. Cada solicitação é lida por quem vai conduzir o projeto, e respondemos com uma avaliação honesta de aderência.
            </p>

            <dl className="space-y-6">
              {commitments.map((item) => (
                <div key={item.value} className="border-t border-border pt-4">
                  <dt className="text-lg font-light text-foreground">{item.value}</dt>
                  <dd className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 lg:pt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Solicitação de avaliação</p>

            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs text-muted-foreground">Nome</span>
                <input required value={form.name} onChange={update("name")} className={fieldClass} placeholder="Seu nome" />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Empresa</span>
                <input required value={form.company} onChange={update("company")} className={fieldClass} placeholder="Organização" />
              </label>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs text-muted-foreground">Tipo de engajamento</span>
                <select value={form.engagement} onChange={update("engagement")} className={fieldClass}>
                  {engagements.map((option) => (
                    <option key={option} value={option} className="bg-background text-foreground">{option}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">Horizonte</span>
                <select value={form.horizon} onChange={update("horizon")} className={fieldClass}>
                  {horizons.map((option) => (
                    <option key={option} value={option} className="bg-background text-foreground">{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-xs text-muted-foreground">O desafio</span>
              <textarea
                required
                rows={4}
                value={form.challenge}
                onChange={update("challenge")}
                className={`${fieldClass} resize-none`}
                placeholder="A operação, o problema e o que precisa mudar."
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:bg-foreground/90 transition-all duration-300 hover:-translate-y-px active:scale-[0.98] group shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              Submeter para avaliação
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-200" />
            </button>

            <p className="text-xs text-muted-foreground/70 font-mono tracking-wider">
              Agenda de novos projetos sob avaliação
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
