import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/app/_data/products";
import ProductosPageContent from "@/app/_components/ProductosPageContent";
import ProductModalWrapper from "@/app/_components/ProductModalWrapper";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
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
