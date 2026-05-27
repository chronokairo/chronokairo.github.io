import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";
import Products from "@/pages/Products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Catalogo de produtos da ChronoKairo em IA, sistemas de gestao, aplicativos mobile e portais web. Solucoes organizadas por dominio e prontas para escalar.",
  alternates: { canonical: `${siteUrl}/produtos` },
};

export default function Page() {
  return <Products />;
}
