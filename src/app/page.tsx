import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Index from "@/pages/Index";

export const metadata: Metadata = {
  title: {
    absolute: "ChronoKairo · Software house de produtos digitais com IA e automação",
  },
  description:
    "Software house focada em desenvolvimento com IA, automação de processos e integração de sistemas legados. Conheça nossos produtos, pesquisas e equipe.",
  alternates: { canonical: siteUrl },
};

export default function Page() {
  return <Index />;
}
