import { DARK, GREEN, SUBTLE } from "@/app/_constants/brand";

export default function NosotrosSection() {
  return (
    <section id="nosotros" style={{ background: "#fff", padding: "28px 40px 48px", scrollMarginTop: 72 }}>
      <div style={{ maxWidth: 1648 }}>
        <div className="mb-6">
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
            Nosotros
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(22px, 3.5vw, 52px)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            maxWidth: "68ch",
            margin: 0,
          }}
        >
          <span style={{ fontWeight: 500, color: DARK }}>
            Nuestra empresa mantiene tu negocio productivo, bien abastecido y conectado desde el origen hasta tu mostrador.{" "}
          </span>
          <span style={{ fontWeight: 400, color: SUBTLE }}>
            Cuando los comercios necesitan confiabilidad, los clientes esperan calidad y suministro constante, nosotros estamos ahí para hacerlo posible.
          </span>
        </h2>
      </div>
    </section>
  );
}
