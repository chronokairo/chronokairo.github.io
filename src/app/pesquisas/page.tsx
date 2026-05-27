import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Research from "@/pages/Research";

export const metadata: Metadata = {
  title: "Pesquisas · IA e Tecnologia em Manaus e Amazônia",
  description:
    "Pesquisas conduzidas por membros da ChronoKairo em Manaus sobre IA aplicada, sistemas inteligentes e governança, com foco em impacto social positivo na região amazônica.",
  alternates: { canonical: `${siteUrl}/pesquisas` },
};

export default function Page() {
  return <Research />;
}
