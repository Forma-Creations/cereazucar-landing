import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import CotizacionDrawer from "./_components/CotizacionDrawer";
import JsonLd from "./_components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE = process.env.SITE_URL ?? "https://cereazucar.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Cereazúcar — Distribuidor de Granos Básicos en México",
    template: "%s | Cereazúcar",
  },
  description:
    "Distribuidor y empaquetador de granos básicos en México con más de 30 años de experiencia. Proveemos frijol, arroz, azúcar, avena y abarrotes a tiendas, supermercados y distribuidores en todo el país. 100% Colimense.",
  keywords: [
    "distribuidor de granos básicos México",
    "proveedor de frijol mayoreo",
    "venta de arroz a granel",
    "distribuidor de azúcar México",
    "proveedor de abarrotes Colima",
    "granos básicos por mayoreo",
    "frijol azufrado distribuidor",
    "frijol bayo mayoreo",
    "arroz super extra delgado",
    "distribución de granos Colima",
    "empaquetado de granos México",
    "proveedor de tiendas de abarrotes",
    "distribuidor para supermercados",
    "venta de frijol peruano",
    "granos básicos para restaurantes",
    "Cereazúcar",
    "Comercializadora Cereazúcar",
  ],
  authors: [{ name: "Comercializadora Cereazúcar" }],
  creator: "Comercializadora Cereazúcar",
  publisher: "Comercializadora Cereazúcar",
  category: "Food & Beverage Distribution",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE,
    languages: { "es-MX": BASE },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE,
    siteName: "Cereazúcar",
    title: "Cereazúcar — Distribuidor de Granos Básicos en México",
    description:
      "Más de 30 años distribuyendo frijol, arroz, azúcar y abarrotes a tiendas, supermercados y distribuidores en todo México. Colima, México.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Cereazúcar — Distribución de granos básicos en México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cereazúcar — Distribuidor de Granos Básicos en México",
    description:
      "Más de 30 años distribuyendo frijol, arroz, azúcar y abarrotes en todo México. 100% Colimense.",
    images: ["/images/hero.png"],
  },
  other: {
    "geo.region": "MX-COL",
    "geo.placename": "Colima, México",
    "geo.position": "19.2433;-103.7241",
    ICBM: "19.2433, -103.7241",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <JsonLd />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {modal}
        <Footer />
        <CotizacionDrawer />
      </body>
    </html>
  );
}
