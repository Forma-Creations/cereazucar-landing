import { DARK, OFF_WHITE } from "@/app/_constants/brand";
import ProductosCarousel from "./ProductosCarousel";

export default function ProductosSection() {
  return (
    <section id="productos" style={{ background: OFF_WHITE, padding: "16px 0 100px" }}>
      {/* Header */}
      <div style={{ padding: "0 40px 48px" }}>
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
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-25" style={{ background: DARK, animationDuration: "2s" }} />
            <span className="relative inline-flex rounded-full" style={{ width: 7, height: 7, background: DARK }} />
          </span>
          Nuestros Productos
        </span>
      </div>

      <ProductosCarousel />
    </section>
  );
}
