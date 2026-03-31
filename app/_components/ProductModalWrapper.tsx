"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/app/_data/products";
import ProductModalContent from "./ProductModalContent";

export default function ProductModalWrapper({ product }: { product: Product }) {
  const router = useRouter();
  return <ProductModalContent product={product} onClose={() => router.push("/productos")} />;
}
