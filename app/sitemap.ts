import type { MetadataRoute } from "next";
import { products } from "@/app/_data/products";

const BASE = process.env.SITE_URL ?? "https://cereazucar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((p) => ({
    url: `${BASE}/productos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/productos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...productUrls,
  ];
}
