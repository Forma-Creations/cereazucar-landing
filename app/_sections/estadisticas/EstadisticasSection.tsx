import Image from "next/image";
import { GREEN, SUBTLE } from "@/app/_constants/brand";

const styles = `
  @media (max-width: 768px) {
    .bento-grid {
      display: flex !important;
      flex-direction: column !important;
    }
    .bento-grid > * {
      min-height: 220px !important;
      grid-column: unset !important;
      grid-row: unset !important;
    }
    .bento-text-overlay::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(to top, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.2) 40%, transparent 70%);
      border-radius: inherit;
      pointer-events: none;
    }
    .bento-text {
      z-index: 2;
    }
    .bento-colimense {
      position: absolute !important;
      bottom: 20px !important;
      left: 20px !important;
      top: auto !important;
    }
  }
`;

export default function EstadisticasSection() {
  return (
    <section style={{ padding: "0 40px 80px", background: "#fff" }}>
      <style>{styles}</style>
      <div
        className="bento-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1.92fr",
          gridTemplateRows: "auto auto",
          gap: 12,
        }}
      >
        {/* Card 1 — Nacional */}
        <div
          className="bento-text-overlay relative rounded-3xl overflow-hidden"
          style={{
            background: GREEN,
            minHeight: 300,
            gridColumn: "1",
            gridRow: "1",
            border: `1.5px solid ${GREEN}`,
          }}
        >
          <div className="absolute inset-0" style={{ padding: "24px 20px 0" }}>
            <Image
              src="/images/stat-nacional.jpg"
              alt="Nacional"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain object-left-top"
              style={{ padding: "24px 20px 80px" }}
            />
          </div>
          <div className="bento-text absolute" style={{ bottom: 20, left: 20 }}>
            <p className="font-medium" style={{ fontSize: "clamp(40px, 4vw, 64px)", color: "white", letterSpacing: -2, lineHeight: 1 }}>
              Nacional
            </p>
            <p className="font-normal" style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, letterSpacing: -0.3, marginTop: -4 }}>
              Distribución en Todo México.
            </p>
          </div>
        </div>

        {/* Card 2 — 30+ años */}
        <div
          className="bento-text-overlay relative rounded-3xl overflow-hidden flex flex-col justify-between"
          style={{
            background: "#fff",
            minHeight: 300,
            padding: "32px 32px 20px 20px",
            gridColumn: "2",
            gridRow: "1",
            border: `1.5px solid ${GREEN}`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0" style={{ width: "82%", padding: "11px 11px 11px 0" }}>
            <div className="relative w-full h-full">
              <Image
                src="/images/stat-experiencia.jpg"
                alt="Experiencia"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain object-right-top"
              />
            </div>
          </div>
          <div className="relative" />
          <div className="bento-text relative">
            <p className="font-medium" style={{ fontSize: "clamp(40px, 4vw, 64px)", color: GREEN, letterSpacing: -2, lineHeight: 1 }}>
              30+
            </p>
            <p className="font-normal" style={{ color: GREEN, fontSize: 17, letterSpacing: -0.3, marginTop: -4 }}>
              Años de Experiencia en el Mercado.
            </p>
          </div>
        </div>

        {/* Card 3 — Empaquetado de Calidad */}
        <div
          className="bento-text-overlay relative rounded-3xl overflow-hidden"
          style={{
            gridColumn: "3",
            gridRow: "1 / 3",
            minHeight: 620,
            border: `1.5px solid ${GREEN}`,
          }}
        >
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/products-section.jpg"
              alt="Empaquetado de calidad"
              className="w-full h-full object-cover"
              style={{ objectPosition: "40% center" }}
            />
          </div>
          <div className="bento-text absolute" style={{ bottom: "2%", left: 24 }}>
            <p
              className="font-medium"
              style={{ fontSize: "clamp(24px, 2.8vw, 48px)", color: GREEN, letterSpacing: -1, lineHeight: 0.95, marginBottom: -2 }}
            >
              Empaquetado<br />de Calidad
            </p>
            <p className="font-normal" style={{ color: GREEN, fontSize: 17, letterSpacing: -0.3 }}>
              Listos para comercialización.
            </p>
          </div>
        </div>

        {/* Card 4 — 100% Colimense */}
        <div
          className="bento-text-overlay relative rounded-3xl overflow-hidden flex flex-col justify-start"
          style={{
            gridColumn: "1 / 3",
            gridRow: "2",
            padding: "8px 20px 20px",
            minHeight: 260,
            border: `1.5px solid ${GREEN}`,
          }}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/stat-local.jpg"
              alt="100% Colimense"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="bento-text bento-colimense relative">
            <p className="font-medium" style={{ fontSize: "clamp(40px, 4vw, 64px)", color: GREEN, letterSpacing: -2, lineHeight: 1 }}>
              100%
            </p>
            <p className="font-normal" style={{ color: GREEN, fontSize: 17, letterSpacing: -0.3, marginTop: -4 }}>
              Colimense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
