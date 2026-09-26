import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Index from "@/pages/Index";

export const metadata: Metadata = {
  title: {
    absolute: "Chronokairo · Ateliê de Engenharia de Software",
  },
  description:
    "Boutique de engenharia de software e inteligência artificial. Software sob medida, construído sobre uma coleção proprietária de produtos maduros, e pesquisa aberta em inferência eficiente com a Anamnesic Labs.",
  alternates: { canonical: siteUrl },
};

export default function Page() {
  return <Index />;
}
