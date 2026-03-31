"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Product } from "@/app/_data/products";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";
import { useCotizacion } from "@/app/_store/cotizacionStore";

export default function ProductModalContent({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const dragStart = useRef<number | null>(null);
  const { add, items } = useCotizacion();
  const inCart = items.some((i) => i.product.slug === product.slug);

  const prev = () => setActiveImage((i) => (i - 1 + product.gallery.length) % product.gallery.length);
  const next = () => setActiveImage((i) => (i + 1) % product.gallery.length);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    dragStart.current = null;
  };

  return (
    <div
      className="fixed inset-0"
      style={{ zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          background: "rgba(0,0,0,0.45)",
        }}
        onClick={onClose}
      />

      {/* Card */}
      <div
        className="relative rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: "white",
          width: "min(92vw, 780px)",
          maxHeight: "88vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 10,
            background: "rgba(0,0,0,0.2)", backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)", border: "none", borderRadius: "50%",
            width: 34, height: 34, cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", color: "white",
            fontSize: 16, lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Swipeable gallery */}
        <div
          style={{ position: "relative", height: 420, flexShrink: 0, cursor: "grab", userSelect: "none", background: "#fff" }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            {product.gallery.map((img, i) => (
              <div
                key={img}
                style={{
                  position: "absolute", inset: 0,
                  opacity: i === activeImage ? 1 : 0,
                  transition: "opacity 0.35s ease",
                  pointerEvents: i === activeImage ? "auto" : "none",
                }}
              >
                <Image src={img} alt={`${product.name} ${i + 1}`} fill sizes="780px" quality={100} className="object-contain" priority={i === 0} draggable={false} />
              </div>
            ))}
          </div>

          {/* Dots */}
          {product.gallery.length > 1 && (
            <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 5, pointerEvents: "none" }}>
              {product.gallery.map((_, i) => (
                <span key={i} style={{ width: i === activeImage ? 18 : 6, height: 6, borderRadius: 99, background: "white", opacity: i === activeImage ? 1 : 0.5, transition: "width 0.3s ease, opacity 0.3s ease" }} />
              ))}
            </div>
          )}

          {/* Arrows */}
          {product.gallery.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", zIndex: 5, background: "rgba(0,0,0,0.2)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", border: "none", borderRadius: "50%", width: 34, height: 34, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14 }}>‹</button>
              <button onClick={(e) => { e.stopPropagation(); next(); }} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", zIndex: 5, background: "rgba(0,0,0,0.2)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", border: "none", borderRadius: "50%", width: 34, height: 34, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14 }}>›</button>
            </>
          )}
        </div>

        {/* Thumbnails + CTA row */}
        <div className="flex items-center gap-3" style={{ padding: "12px 16px 0" }}>
          {/* Thumbnails — scrollable if many, hidden on mobile */}
          {product.gallery.length > 1 && (
            <div
              className="hidden sm:flex gap-2"
              style={{ flex: 1, overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {product.gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)} style={{ width: 56, height: 56, borderRadius: 10, overflow: "hidden", border: `2px solid ${i === activeImage ? GREEN : "transparent"}`, padding: 0, cursor: "pointer", flexShrink: 0, opacity: i === activeImage ? 1 : 0.55, transition: "opacity 0.2s, border-color 0.2s", position: "relative" }}>
                  <Image src={img} alt={`${product.name} ${i + 1}`} fill sizes="56px" quality={100} className="object-cover" />
                </button>
              ))}
            </div>
          )}
          {/* CTA — always on the right */}
          <button
            onClick={() => { add(product); onClose(); }}
            className="inline-flex items-center justify-center font-medium rounded-full"
            style={{
              background: inCart ? "rgba(65,161,64,0.12)" : GREEN,
              color: inCart ? GREEN : "white",
              border: inCart ? `1.5px solid ${GREEN}` : "none",
              fontSize: 15,
              padding: "10px 22px",
              flexShrink: 0,
              marginLeft: "auto",
              cursor: "pointer",
            }}
          >
            {inCart ? "En cotización ✓" : "Agregar a cotización"}
          </button>
        </div>

        {/* Info */}
        <div style={{ padding: "24px 32px 40px" }}>
          <p style={{ fontSize: 11, color: SUBTLE, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{product.category}</p>
          <h2 className="font-medium" style={{ fontSize: "clamp(26px, 4vw, 40px)", color: DARK, letterSpacing: -1, lineHeight: 1.05, marginBottom: 14 }}>{product.name}</h2>
          <p style={{ fontSize: 16, color: "#555", lineHeight: 1.65 }}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
