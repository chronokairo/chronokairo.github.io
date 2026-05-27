import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Index from "@/pages/Index";

export const metadata: Metadata = {
  title: {
    absolute: "ChronoKairo · Software house em Manaus com IA, integracao e automacao",
  },
  description:
    "Software house em Manaus focada em desenvolvimento com IA, automacao de processos e integracao de sistemas legados. Conheca nossos produtos, pesquisas e equipe.",
  alternates: { canonical: siteUrl },
};

export default function Page() {
  return <Index />;
}
