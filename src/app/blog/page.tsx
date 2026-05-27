import type { Metadata } from "next";
import Blog from "@/pages/Blog";

export const metadata: Metadata = {
  title: "Blog · Tecnologia, IA e Automação em Manaus",
  description:
    "Artigos sobre tecnologia, inteligência artificial, automação e transformação digital para empresas em Manaus e Amazonas. Conteúdo produzido pela equipe ChronoKairo.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <Blog />;
}
