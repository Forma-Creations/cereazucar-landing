"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { products, categories } from "@/app/_data/products";
import { GREEN, DARK, OFF_WHITE, SUBTLE } from "@/app/_constants/brand";
import { useCotizacion } from "@/app/_store/cotizacionStore";

export default function ProductosPageContent() {
  const { add, items } = useCotizacion();

  return (
    <main style={{ background: OFF_WHITE, minHeight: "100svh" }}>
      <Navbar opaque />
      <div style={{ height: 72 }} />
      <div style={{ padding: "24px 40px 100px" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: SUBTLE, textDecoration: "none", marginBottom: 12 }}>
          ← Volver
        </Link>
        <h1 className="font-medium" style={{ fontSize: "clamp(32px, 6vw, 80px)", color: GREEN, letterSpacing: "-0.06em", lineHeight: 0.9, marginBottom: 0 }}>
          Nuestros Productos
        </h1>
        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.category.toLowerCase() === cat.slug);
          if (catProducts.length === 0) return null;
          return (
            <div key={cat.slug} style={{ paddingTop: 64 }}>
              <div style={{ marginBottom: 28 }}>
                <span className="inline-flex items-center gap-2 rounded-full font-normal" style={{ border: "1px solid rgba(0,0,0,0.12)", color: DARK, fontSize: 14, padding: "3px 12px 3px 9px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, flexShrink: 0, display: "inline-block" }} />
                  {cat.label}
                </span>
              </div>
              <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
                {catProducts.map((product) => {
                  const inCart = items.some((i) => i.product.slug === product.slug);
                  return (
                    <Link key={product.slug} href={`/productos/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
                      <div className="rounded-3xl overflow-hidden" style={{ background: "white", border: `1px solid ${GREEN}` }}>
                        <div className="relative" style={{ height: 260 }}>
                          <Image src={product.cover} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px" quality={100} className="object-cover" />
                        </div>
                        <div style={{ padding: "16px 18px 20px" }}>
                          <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
                            <p style={{ fontSize: 11, color: SUBTLE, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                              {product.category}
                            </p>
                            <button
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); add(product); }}
                              title={inCart ? "En cotización" : "Agregar a cotización"}
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                background: inCart ? `${GREEN}18` : GREEN,
                                color: inCart ? GREEN : "white",
                                border: inCart ? `1.5px solid ${GREEN}` : "none",
                                fontSize: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                flexShrink: 0,
                              }}
                            >
                              {inCart ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              ) : (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="12" y1="5" x2="12" y2="19" />
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                              )}
                            </button>
                          </div>
                          <h3 className="font-medium" style={{ fontSize: 17, color: DARK, letterSpacing: -0.4, marginBottom: 8, lineHeight: 1.2 }}>{product.name}</h3>
                          <div className="flex flex-wrap gap-1">
                            {product.presentations.map((p) => (
                              <span key={p} style={{ fontSize: 12, color: GREEN, background: `${GREEN}18`, padding: "2px 9px", borderRadius: 99, border: `1px solid ${GREEN}30`, fontWeight: 500 }}>{p}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
