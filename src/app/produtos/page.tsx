import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Products from "@/pages/Products";

export const metadata: Metadata = {
  title: "Produtos · Soluções em IA e Automação em Manaus",
  description:
    "Catálogo de produtos da ChronoKairo em IA, sistemas de gestão, aplicativos mobile e portais web. Soluções em Manaus organizadas por domínio e prontas para escalar.",
  alternates: { canonical: `${siteUrl}/produtos` },
};

export default function Page() {
  return <Products />;
}
