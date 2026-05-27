import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Index from "@/pages/Index";

export const metadata: Metadata = {
  title: {
    absolute: "ChronoKairo · Software house em Manaus com IA, integração e automação",
  },
  description:
    "Software house em Manaus focada em desenvolvimento com IA, automação de processos e integração de sistemas legados. Conheça nossos produtos, pesquisas e equipe.",
  alternates: { canonical: siteUrl },
};

export default function Page() {
  return <Index />;
}
