import type { Metadata, Viewport } from "next";

import "@/theme/theme.css";
import { ogImage, siteUrl } from "@/lib/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ChronoKairo",
    template: "%s · ChronoKairo",
  },
  description:
    "Software house em Manaus com inteligência artificial, automação de processos e integração de sistemas legados. Fale com o time e acelere seu produto digital.",
  applicationName: "ChronoKairo",
  authors: [{ name: "ChronoKairo" }],
  keywords: [
    "software house em Manaus",
    "software house Manaus",
    "software house com inteligência artificial",
    "desenvolvimento de software com IA",
    "automação de processos empresariais",
    "integração de sistemas legados",
    "micro-saas",
    "observabilidade",
    "ChronoKairo",
    "software house Manaus",
    "desenvolvimento de software Amazonas",
    "software house Brasil",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName: "ChronoKairo",
    locale: "pt_BR",
    url: siteUrl,
    title: "ChronoKairo · Software house em Manaus com IA, integração e automação",
    description:
      "Software house em Manaus: desenvolvimento de software com IA, automação de processos e integração de sistemas. Conheça produtos, pesquisas e a equipe da ChronoKairo.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "ChronoKairo — Tecnologia no tempo certo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@chronokairo",
    title: "ChronoKairo · Software house em Manaus com IA, integração e automação",
    description:
      "Software house em Manaus: desenvolvimento de software com IA, automação de processos e integração de sistemas. Conheça produtos, pesquisas e a equipe da ChronoKairo.",
    images: [ogImage],
  },
  icons: { icon: "/CHRONOKAIRO.ico" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const themeBootstrap = `(function(){try{var t=localStorage.getItem('chronokairo-theme')||'light';var c=document.documentElement.classList;c.remove('light','dark');c.add(t==='dark'?'dark':'light');}catch(e){}})();`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ChronoKairo",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/CHRONOKAIRO.ico`,
  image: ogImage,
  description:
    "Software house em Manaus focada em desenvolvimento com IA, automação de processos e integração de sistemas legados.",
  slogan: "Tecnologia no tempo certo",
  address: { "@type": "PostalAddress", addressCountry: "BR" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contato@chronokairo.com.br",
      telephone: "+55-92-98124-4044",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],
  sameAs: [
    "https://github.com/chronokairo",
    "https://www.linkedin.com/company/chronokairo",
    "https://www.instagram.com/chronokairo",
    "https://x.com/chronokairo",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ChronoKairo",
  url: `${siteUrl}/`,
  image: ogImage,
  description:
    "Software house em Manaus especializada em IA, automacao de processos, integracao de sistemas e produtos digitais sob medida.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Manaus" },
    { "@type": "Country", name: "Brasil" },
  ],
  email: "contato@chronokairo.com.br",
  telephone: "+55-92-98124-4044",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ChronoKairo",
  url: `${siteUrl}/`,
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/produtos?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
