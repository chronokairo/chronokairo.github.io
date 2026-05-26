import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página que você buscou não existe ou foi movida. Volte para a home da ChronoKairo.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Página não encontrada</p>
        <Link
          href="/"
          className="text-primary underline hover:text-primary/80"
        >
          Voltar para a home
        </Link>
      </div>
    </div>
  );
}
