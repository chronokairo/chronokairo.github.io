import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetail from "@/pages/ProductDetail";
import { getProductBySlug, products } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto não encontrado",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: product.title,
    description: `${product.summary} Conheça ${product.title}, da linha ${product.brand}, no catálogo de produtos da ChronoKairo.`,
    alternates: { canonical: `/produtos/${product.slug}` },
    openGraph: {
      title: `${product.title} · ChronoKairo`,
      description: product.summary,
      url: `/produtos/${product.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail slug={slug} />;
}
