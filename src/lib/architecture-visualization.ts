export type ArchitectureProvider = {
  id: string;
  label: string;
  short: string;
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

export type QuotaState = "healthy" | "warning" | "cutover";

export const WARNING_THRESHOLD = 0.6;
export const CUTOVER_THRESHOLD = 0.85;

export const quotaState = (usage: number): QuotaState =>
  usage >= CUTOVER_THRESHOLD ? "cutover" : usage >= WARNING_THRESHOLD ? "warning" : "healthy";

export const quotaStateLabel: Record<QuotaState, string> = {
  healthy: "Saudável",
  warning: "Atenção",
  cutover: "Migração",
};

export const nimbusVisualization: ArchitectureVisualization = {
  name: "Nimbus",
  eyebrow: "Plano de controle multi-cloud",
  centerLabel: "Roteamento por cota",
  centerDetail: "Ao atingir 85% da cota, o tráfego migra para o provedor mais saudável.",
  note: "Simulação ilustrativa. Os valores não representam consumo real.",
  providers: [
    { id: "aws", label: "AWS", short: "AWS", detail: "Always Free, com limites mensais." },
    { id: "cloudflare", label: "Cloudflare", short: "CF", detail: "Plano gratuito, com DNS e domínios via API nativa." },
    { id: "firebase", label: "Firebase", short: "FB", detail: "Plano Spark." },
    { id: "github", label: "GitHub", short: "GH", detail: "Plano gratuito, com Pages e Actions." },
    { id: "gcp", label: "Google Cloud", short: "GCP", detail: "Free tier permanente." },
  ],
};
