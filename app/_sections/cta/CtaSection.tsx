import { GREEN } from "@/app/_constants/brand";

export default function CtaSection() {
  return (
    <section>
      <style>{`
        .cta-btn { transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1); }
        .cta-btn:hover { transform: scale(1.06); }
      `}</style>
      <div
        style={{
          background: GREEN,
          padding: "28px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <p
          className="font-medium"
          style={{ fontSize: "clamp(18px, 2.5vw, 26px)", color: "#fff", letterSpacing: "-0.03em", margin: 0 }}
        >
          Abastece tu negocio — cotiza sin compromiso.
        </p>
        <a
          href="#contacto"
          className="cta-btn"
          style={{
            background: "#fff",
            color: GREEN,
            fontWeight: 500,
            fontSize: 15,
            padding: "12px 28px",
            borderRadius: 99,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Solicitar cotización →
        </a>
      </div>
    </section>
  );
}
