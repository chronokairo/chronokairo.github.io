import type { Metadata } from "next";
import Design from "@/pages/Design";

export const metadata: Metadata = {
  title: "Brand System · Chronokairo",
  description:
    "Diretrizes de marca e interface da Chronokairo: engenharia de software, inteligência artificial, automação e luxo silencioso tecnológico.",
  alternates: { canonical: "/design" },
};

export default function Page() {
  return <Design />;
}
