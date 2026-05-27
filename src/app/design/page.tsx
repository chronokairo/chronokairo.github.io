import type { Metadata } from "next";
import Design from "@/pages/Design";

export const metadata: Metadata = {
  title: "Design System · Guia de Marca e Interface",
  description:
    "Conheça o sistema de design da ChronoKairo: cores, tipografia, componentes, logotipo e diretrizes de marca para produtos digitais.",
  alternates: { canonical: "/design" },
};

export default function Page() {
  return <Design />;
}
