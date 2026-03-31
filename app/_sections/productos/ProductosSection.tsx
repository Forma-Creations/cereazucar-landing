import Link from "next/link";
import { DARK, GREEN, OFF_WHITE } from "@/app/_constants/brand";
import ProductosCarousel from "./ProductosCarousel";

export default function ProductosSection() {
  return (
    <section id="productos" style={{ background: OFF_WHITE, padding: "16px 0 100px" }}>
      {/* Header */}
      <div style={{ padding: "0 40px 20px" }}>
          <span
            className="inline-flex items-center gap-2 rounded-full font-normal"
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              color: DARK,
              fontSize: 15,
              padding: "4px 14px 4px 10px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.07)",
            }}
          >
            <span className="relative inline-flex" style={{ width: 7, height: 7, flexShrink: 0 }}>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-25" style={{ background: GREEN, animationDuration: "2s" }} />
              <span className="relative inline-flex rounded-full" style={{ width: 7, height: 7, background: GREEN }} />
            </span>
            Nuestros Productos
          </span>
      </div>

      <ProductosCarousel />

      <style>{`@media (min-width: 1240px) { .productos-ver-todos { display: none !important; } }`}</style>
      <div className="productos-ver-todos" style={{ padding: "24px 40px 0", display: "flex", justifyContent: "center" }}>
        <Link
          href="/productos"
          className="inline-flex items-center justify-center rounded-full font-normal"
          style={{ background: GREEN, color: "white", fontSize: 15, padding: "11px 28px", textDecoration: "none" }}
        >
          Ver todos los productos
        </Link>
      </div>
    </section>
  );
}
