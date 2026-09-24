import type { Metadata, Viewport } from "next";

import "@/theme/theme.css";
import { ogImage, siteUrl } from "@/lib/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chronokairo",
    template: "%s · Chronokairo",
  },
  description:
    "Engenharia de software, inteligência artificial e automação para resolver problemas operacionais complexos. Tecnologia no tempo certo.",
  applicationName: "Chronokairo",
  authors: [{ name: "Chronokairo" }],
  keywords: [
    "engenharia de software sob medida",
    "inteligência artificial aplicada",
    "automação de operações",
    "sistemas empresariais",
    "Chronokairo",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName: "Chronokairo",
    locale: "pt_BR",
    url: siteUrl,
    title: "Chronokairo · Engenharia de Software e Inteligência Artificial",
    description:
      "Sistemas sob medida para operações em que precisão, confiabilidade e tempo importam. Conheça projetos selecionados da Chronokairo.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Chronokairo — Tecnologia no tempo certo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@chronokairo",
    title: "Chronokairo · Engenharia de Software e Inteligência Artificial",
    description:
      "Sistemas sob medida para operações em que precisão, confiabilidade e tempo importam. Conheça projetos selecionados da Chronokairo.",
    images: [ogImage],
  },
  icons: { icon: "/CHRONOKAIRO.ico" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const themeBootstrap = `(function(){try{var stored=localStorage.getItem('chronokairo-theme')||localStorage.getItem('chronokairo-pantone-theme');var theme=stored;if(!theme||theme==='auto'||theme==='system'){var h=new Date().getHours();theme=(h>=6&&h<18)?'light':'dark';}var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(theme);root.style.colorScheme=theme;}catch(e){}})();`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chronokairo",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/CHRONOKAIRO.ico`,
  image: ogImage,
  description:
    "Engenharia de software, inteligência artificial e automação para operações complexas.",
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
  name: "Chronokairo",
  url: `${siteUrl}/`,
  image: ogImage,
  description:
    "Engenharia de software e inteligência artificial para sistemas sob medida e operações complexas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brasil",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Brasil" },
    { "@type": "Country", name: "Brasil" },
  ],
  email: "contato@chronokairo.com.br",
  telephone: "+55-92-98124-4044",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Chronokairo",
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
    <html lang="pt-BR" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
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
