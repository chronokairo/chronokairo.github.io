import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Index from "@/pages/Index";

export const metadata: Metadata = {
  title: {
    absolute: "Chronokairo · Engenharia de Software e Inteligência Artificial",
  },
  description:
    "Projetamos sistemas sob medida para operações em que precisão, confiabilidade e tempo importam. Conheça projetos selecionados da Chronokairo.",
  alternates: { canonical: siteUrl },
};

export default function Page() {
  return <Index />;
}
