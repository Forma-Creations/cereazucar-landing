import type { Metadata } from "next";
import ProductosPageContent from "@/app/_components/ProductosPageContent";

export const metadata: Metadata = {
  title: "Catálogo de Productos — Granos Básicos y Abarrotes",
  description:
    "Catálogo completo de frijol, arroz, azúcar, avena y abarrotes en distintas presentaciones. Distribución mayorista para tiendas, supermercados y distribuidores en todo México.",
  alternates: { canonical: `${process.env.SITE_URL}/productos` },
  openGraph: {
    title: "Catálogo de Granos Básicos — Cereazúcar",
    description:
      "Frijol azufrado, bayo, peruano, arroz super extra delgado, azúcar estándar y refinada, avena y más. Presentaciones desde 500g hasta 50kg.",
    url: `${process.env.SITE_URL}/productos`,
    images: [{ url: "/images/products-section.jpg", width: 1200, height: 630 }],
  },
};

export default function ProductosPage() {
  return <ProductosPageContent />;
}
