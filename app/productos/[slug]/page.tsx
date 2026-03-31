import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/app/_data/products";
import ProductosPageContent from "@/app/_components/ProductosPageContent";
import ProductModalWrapper from "@/app/_components/ProductModalWrapper";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const title = `${product.name} — ${product.category}`;
  const description = `${product.description} Disponible en: ${product.presentations.join(", ")}. Distribución mayorista en todo México.`;

  return {
    title,
    description,
    alternates: { canonical: `${process.env.SITE_URL}/productos/${slug}` },
    openGraph: {
      title: `${product.name} | Cereazúcar`,
      description,
      url: `${process.env.SITE_URL}/productos/${slug}`,
      images: [{ url: product.cover, width: 800, height: 600, alt: product.name }],
    },
    other: {
      "product:availability": "in stock",
      "product:condition": "new",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <ProductosPageContent />
      <ProductModalWrapper product={product} />
    </>
  );
}
