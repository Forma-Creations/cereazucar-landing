import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { products, categories } from "@/app/_data/products";
import { GREEN, DARK, OFF_WHITE, SUBTLE } from "@/app/_constants/brand";

export const metadata = {
  title: "Productos — Cereazúcar",
  description: "Catálogo completo de granos básicos, cereales, endulzantes y abarrotes.",
};

export default function ProductosPage() {
  return (
    <main style={{ background: OFF_WHITE, minHeight: "100svh" }}>
      <Navbar opaque />

      {/* Spacer for fixed navbar */}
      <div style={{ height: 72 }} />

      {/* Sections by category */}
      <div style={{ padding: "24px 40px 100px" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 14,
            color: SUBTLE,
            textDecoration: "none",
            marginBottom: 12,
          }}
        >
          ← Volver
        </Link>
        <h1
          className="font-medium"
          style={{ fontSize: "clamp(32px, 6vw, 80px)", color: GREEN, letterSpacing: "-0.06em", lineHeight: 0.9, marginBottom: 0 }}
        >
          Nuestros Productos
        </h1>
        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.category.toLowerCase() === cat.slug);
          if (catProducts.length === 0) return null;

          return (
            <div key={cat.slug} style={{ paddingTop: 64 }}>
              {/* Category label */}
              <div style={{ marginBottom: 28 }}>
                <span
                  className="inline-flex items-center gap-2 rounded-full font-normal"
                  style={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    color: DARK,
                    fontSize: 14,
                    padding: "3px 12px 3px 9px",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  }}
                >
                  <span
                    style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, flexShrink: 0, display: "inline-block" }}
                  />
                  {cat.label}
                </span>
              </div>

              {/* Grid */}
              <div
                className="grid gap-4"
                style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
              >
                {catProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/productos/${product.slug}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div
                      className="rounded-3xl overflow-hidden"
                      style={{
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.07)",
                        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div className="relative" style={{ height: 260 }}>
                        <Image
                          src={product.cover}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                          quality={100}
                          className="object-cover"
                        />
                      </div>
                      <div style={{ padding: "16px 18px 20px" }}>
                        <h3
                          className="font-medium"
                          style={{ fontSize: 17, color: DARK, letterSpacing: -0.4, marginBottom: 8, lineHeight: 1.2 }}
                        >
                          {product.name}
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {product.presentations.map((p) => (
                            <span
                              key={p}
                              style={{
                                fontSize: 12,
                                color: GREEN,
                                background: `${GREEN}18`,
                                padding: "2px 9px",
                                borderRadius: 99,
                                border: `1px solid ${GREEN}30`,
                                fontWeight: 500,
                              }}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
