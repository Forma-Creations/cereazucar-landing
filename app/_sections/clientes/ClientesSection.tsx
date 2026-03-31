import Image from "next/image";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";

const CLIENTS = [
  {
    number: "01",
    title: "Tiendas de abarrotes",
    tag: "Menudeo",
    description: "Surtimos a tiendas locales con productos básicos en presentaciones ideales para venta al menudeo.",
  },
  {
    number: "02",
    title: "Distribuidores",
    tag: "Volumen alto",
    description: "Abastecemos a distribuidores regionales con entregas confiables y volúmenes de gran escala en todo el país.",
  },
  {
    number: "03",
    title: "Supermercados",
    tag: "Listo para anaquel",
    description: "Proveemos producto empaquetado y etiquetado, listo para colocarse directamente en el anaquel.",
  },
  {
    number: "04",
    title: "Empresas de alimentos",
    tag: "Materia prima",
    description: "Suministramos granos a granel como insumo para empresas que los integran en su proceso de producción.",
  },
];

function Badge({ number, title, tag }: { number: string; title: string; tag: string }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1px solid ${GREEN}30`,
        borderRadius: 16,
        padding: "12px 16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
        minWidth: 160,
        maxWidth: 200,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: SUBTLE }}>{number}</span>
        <span style={{ fontSize: 10, color: DARK, background: `${GREEN}18`, borderRadius: 99, padding: "2px 8px", fontWeight: 500 }}>{tag}</span>
      </div>
      <p className="font-medium" style={{ fontSize: 13, color: DARK, letterSpacing: "-0.02em", lineHeight: 1.3, margin: 0 }}>{title}</p>
    </div>
  );
}

export default function ClientesSection() {
  return (
    <section id="clientes" style={{ background: "#f5f5f7", padding: "80px 40px 0", scrollMarginTop: 72 }}>
      <style>{`
        @media (max-width: 1100px) {
          .clientes-badges { display: none !important; }
          .clientes-pills  { display: flex !important; }
        }
      `}</style>
      {/* Badge */}
      <div style={{ marginBottom: 24, textAlign: "center" }}>
        <span
          className="inline-flex items-center gap-2 rounded-full font-normal"
          style={{
            border: "1px solid rgba(0,0,0,0.12)",
            color: DARK,
            fontSize: 15,
            padding: "4px 14px 4px 10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.07)",
            background: "#fff",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN, flexShrink: 0, display: "inline-block" }} />
          Clientes
        </span>
      </div>

      {/* Heading centrado */}
      <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 700, margin: "0 auto 48px" }}>
        <h2
          className="font-medium"
          style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            color: DARK,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: 16,
          }}
        >
          Abastecemos a negocios en{" "}
          <span style={{ color: GREEN }}>todo México</span>
        </h2>
        <p style={{ fontSize: 16, color: SUBTLE, lineHeight: 1.65, margin: 0 }}>
          Desde pequeñas tiendas hasta grandes cadenas — tenemos la escala y la confiabilidad que tu operación necesita.
        </p>
      </div>

      {/* Pills — solo mobile/tablet, encima del carrito */}
      <div className="clientes-pills" style={{ display: "none", flexWrap: "wrap", gap: 8, justifyContent: "center", padding: "0 0 24px" }}>
        {[
          { title: "Tiendas de abarrotes", tag: "Menudeo" },
          { title: "Distribuidores", tag: "Volumen alto" },
          { title: "Supermercados", tag: "Listo para anaquel" },
          { title: "Empresas de alimentos", tag: "Materia prima" },
        ].map((item) => (
          <div key={item.title} style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: `1px solid ${GREEN}30`, borderRadius: 99, padding: "8px 14px 8px 12px" }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: DARK }}>{item.title}</span>
            <span style={{ fontSize: 10, color: DARK, background: `${GREEN}18`, borderRadius: 99, padding: "2px 8px", fontWeight: 500 }}>{item.tag}</span>
          </div>
        ))}
      </div>

      {/* Carrito con badges flotantes */}
      <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>

        {/* Imagen central */}
        <Image
          src="/images/shop-products.png"
          alt="Productos en tienda"
          width={680}
          height={880}
          quality={100}
          style={{ width: "clamp(320px, 42vw, 680px)", height: "auto", display: "block", verticalAlign: "bottom", filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.06)) drop-shadow(0 8px 24px rgba(0,0,0,0.09)) drop-shadow(0 24px 48px rgba(65,161,64,0.10))", position: "relative", zIndex: 1 }}
        />

        {/* Badges flotantes — solo desktop */}
        <div className="clientes-badges" style={{ position: "absolute", top: "12%", left: "14%", zIndex: 2 }}>
          <Badge number="01" title="Tiendas de abarrotes" tag="Menudeo" />
        </div>
        <div className="clientes-badges" style={{ position: "absolute", top: "52%", left: "10%", zIndex: 2 }}>
          <Badge number="02" title="Distribuidores" tag="Volumen alto" />
        </div>
        <div className="clientes-badges" style={{ position: "absolute", top: "12%", right: "14%", zIndex: 2 }}>
          <Badge number="03" title="Supermercados" tag="Listo para anaquel" />
        </div>
        <div className="clientes-badges" style={{ position: "absolute", top: "52%", right: "10%", zIndex: 2 }}>
          <Badge number="04" title="Empresas de alimentos" tag="Materia prima" />
        </div>

      </div>

    </section>
  );
}
