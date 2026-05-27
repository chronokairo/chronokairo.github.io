import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Research from "@/pages/Research";

export const metadata: Metadata = {
  title: "Pesquisas",
  description:
    "Pesquisas conduzidas por membros da ChronoKairo sobre IA aplicada, sistemas inteligentes e governanca, com foco em impacto social positivo.",
  alternates: { canonical: `${siteUrl}/pesquisas` },
};

export default function Page() {
  return <Research />;
}
