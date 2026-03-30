"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { products } from "@/app/_data/products";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";

export default function ProductosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);
  const isDragging = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    isDragging.current = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragStart.current || !scrollRef.current) return;
    const delta = dragStart.current.x - e.clientX;
    if (!isDragging.current && Math.abs(delta) > 5) {
      isDragging.current = true;
      scrollRef.current.setPointerCapture(e.pointerId);
      scrollRef.current.style.cursor = "grabbing";
    }
    if (isDragging.current) {
      scrollRef.current.scrollLeft = dragStart.current.scrollLeft + delta;
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    dragStart.current = null;
    if (isDragging.current) {
      scrollRef.current.releasePointerCapture(e.pointerId);
      scrollRef.current.style.cursor = "grab";
    }
    isDragging.current = false;
  };

  return (
    <div
      ref={scrollRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      style={{
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        cursor: "grab",
      }}
    >
      <div
        className="flex gap-5"
        style={{
          padding: "4px 40px 24px",
          width: "max-content",
          margin: "0 auto",
        }}
      >
        {products.slice(0, 5).map((product, i) => {
          const isBlurred = i === 4;
          return (
            <Link
              key={product.slug}
              href={isBlurred ? "/productos" : `/productos/${product.slug}`}
              scroll={false}
              draggable={false}
              style={{
                flexShrink: 0,
                width: 260,
                textDecoration: "none",
                display: "block",
                userSelect: "none",
                position: "relative",
              }}
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  filter: isBlurred ? "blur(4px)" : "none",
                  opacity: isBlurred ? 0.6 : 1,
                  transition: "filter 0.2s, opacity 0.2s",
                }}
              >
                <div className="relative" style={{ height: 300 }}>
                  <Image
                    src={product.cover}
                    alt={product.name}
                    fill
                    sizes="260px"
                    quality={100}
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <p style={{ fontSize: 11, color: SUBTLE, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                    {product.category}
                  </p>
                  <h3 className="font-medium" style={{ fontSize: 18, color: DARK, letterSpacing: -0.4, marginBottom: 10, lineHeight: 1.2 }}>
                    {product.name}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {product.presentations.map((p) => (
                      <span key={p} style={{ fontSize: 12, color: GREEN, background: `${GREEN}18`, padding: "3px 10px", borderRadius: 99, border: `1px solid ${GREEN}30`, fontWeight: 500 }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* "Ver todos" overlay on blurred card */}
              {isBlurred && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-medium"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: DARK,
                      fontSize: 15,
                      padding: "10px 20px",
                      borderRadius: 99,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                    }}
                  >
                    Ver todos →
                  </span>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
