export type ArchitectureProvider = {
  id: string;
  label: string;
  detail: string;
};

export type ArchitectureVisualization = {
  name: string;
  eyebrow: string;
  centerLabel: string;
  centerDetail: string;
  note: string;
  providers: readonly ArchitectureProvider[];
};

export const nimbusVisualization: ArchitectureVisualization = {
  name: "Nimbus",
  eyebrow: "Infrastructure R&D / arquitetura conceitual",
  centerLabel: "Contrato de provedores",
  centerDetail: "Avaliação de cotas e prévia de roteamento entre provedores.",
  note: "Representação conceitual de uma pesquisa em desenvolvimento.",
  providers: [
    { id: "aws", label: "AWS", detail: "Recursos elegíveis ao Always Free, sujeitos a limites mensais." },
    { id: "cloudflare", label: "Cloudflare", detail: "Serviços contemplados pelo plano gratuito." },
    { id: "firebase", label: "Firebase", detail: "Recursos do plano Spark." },
    { id: "github", label: "GitHub", detail: "Integração com recursos do plano gratuito." },
    { id: "gcp", label: "Google Cloud", detail: "Serviços elegíveis ao free tier." },
  ],
};
