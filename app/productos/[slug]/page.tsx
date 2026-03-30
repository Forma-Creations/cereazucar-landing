import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, products } from "@/app/_data/products";
import { GREEN, DARK, OFF_WHITE, SUBTLE } from "@/app/_constants/brand";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
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
    <main style={{ background: OFF_WHITE, minHeight: "100svh" }}>
      {/* Back */}
      <div style={{ padding: "32px 40px 0" }}>
        <Link
          href="/#productos"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 15,
            color: GREEN,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          ← Todos los productos
        </Link>
      </div>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "48px 40px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        {/* Images */}
        <div>
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ aspectRatio: "4/3", marginBottom: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          >
            <Image
              src={product.cover}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              quality={100}
              className="object-cover"
              priority
            />
          </div>
          {product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden"
                  style={{ width: 72, height: 72, border: `1.5px solid ${i === 0 ? GREEN : "rgba(0,0,0,0.1)"}`, flexShrink: 0 }}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    fill
                    sizes="72px"
                    quality={100}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ paddingTop: 8 }}>
          <p
            style={{
              fontSize: 12,
              color: SUBTLE,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            {product.category}
          </p>
          <h1
            className="font-medium"
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              color: DARK,
              letterSpacing: -1,
              lineHeight: 1.05,
              marginBottom: 16,
            }}
          >
            {product.name}
          </h1>
          <p style={{ fontSize: 17, color: "#555", lineHeight: 1.7, marginBottom: 32 }}>
            {product.description}
          </p>

          <p
            style={{
              fontSize: 12,
              color: SUBTLE,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Presentaciones disponibles
          </p>
          <div className="flex flex-wrap gap-2">
            {product.presentations.map((p) => (
              <span
                key={p}
                className="font-medium"
                style={{
                  fontSize: 15,
                  color: GREEN,
                  background: `${GREEN}14`,
                  padding: "8px 20px",
                  borderRadius: 99,
                  border: `1px solid ${GREEN}30`,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
