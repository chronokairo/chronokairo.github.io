import type { Metadata } from "next";

import Research from "@/pages/Research";

export const metadata: Metadata = {
  title: "Pesquisas",
  description:
    "Pesquisas conduzidas por membros da ChronoKairo sobre IA aplicada, sistemas inteligentes e governança, com foco em impacto social positivo.",
  alternates: { canonical: "/pesquisas" },
};

export default function Page() {
  return <Research />;
}
