"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import { getProductBySlug } from "@/app/_data/products";
import ProductModalContent from "@/app/_components/ProductModalContent";

export default function ProductModal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const product = getProductBySlug(slug);

  if (!product) return null;

  return <ProductModalContent product={product} onClose={() => router.back()} />;
}
