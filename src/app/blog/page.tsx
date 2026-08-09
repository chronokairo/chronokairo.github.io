import type { Metadata } from "next";
import Blog from "@/pages/Blog";

export const metadata: Metadata = {
  title: "Blog · Tecnologia, IA e Automação",
  description:
    "Artigos sobre tecnologia, inteligência artificial, automação e transformação digital. Conteúdo produzido pela equipe ChronoKairo.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <Blog />;
}
