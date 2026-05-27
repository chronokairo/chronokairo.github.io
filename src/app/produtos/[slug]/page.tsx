import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetail from "@/pages/ProductDetail";
import { getProductBySlug, products } from "@/data/products";
import { ogImage, siteUrl } from "@/lib/site";

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
    alternates: { canonical: `${siteUrl}/produtos/${product.slug}` },
    openGraph: {
      title: `${product.title} · ChronoKairo`,
      description: product.summary,
      url: `${siteUrl}/produtos/${product.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${product.title} - ChronoKairo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} · ChronoKairo`,
      description: product.summary,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Produtos",
        item: `${siteUrl}/produtos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `${siteUrl}/produtos/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetail slug={slug} />
    </>
  );
}
