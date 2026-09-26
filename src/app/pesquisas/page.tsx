import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Research from "@/pages/Research";

export const metadata: Metadata = {
  title: "Anamnesic Labs · Pesquisa aberta em inferência eficiente",
  description:
    "Anamnesic Labs, o braço de pesquisa aberta da Chronokairo: inferência de LLMs em hardware restrito, runtime relic para OpenCL, quantização extrema e decodificação especulativa.",
  alternates: { canonical: `${siteUrl}/pesquisas` },
};

export default function Page() {
  return <Research />;
}
