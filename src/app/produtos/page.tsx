import type { Metadata } from "next";

import Products from "@/pages/Products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Catálogo de produtos da ChronoKairo em IA, sistemas de gestão, aplicativos mobile e portais web. Soluções organizadas por domínio e prontas para escalar.",
  alternates: { canonical: "/produtos" },
};

export default function Page() {
  return <Products />;
}
