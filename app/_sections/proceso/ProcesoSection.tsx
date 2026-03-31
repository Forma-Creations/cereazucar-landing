"use client";

import { useState } from "react";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";

const STEPS = [
  {
    number: "01",
    title: "Selección",
    description: "Elegimos granos de primera calidad, revisando cada lote para garantizar el estándar que tus clientes esperan.",
  },
  {
    number: "02",
    title: "Cribado",
    description: "Separamos impurezas y granos defectuosos mediante un proceso de cribado que asegura uniformidad en cada presentación.",
  },
  {
    number: "03",
    title: "Empaquetado",
    description: "Empacamos en distintas presentaciones — desde bolsas de 1 kg hasta costales de 50 kg — listas para anaquel o distribución.",
  },
  {
    number: "04",
    title: "Distribución",
    description: "Llevamos el producto a comercios, distribuidores y supermercados en diferentes regiones del país.",
  },
];

export default function ProcesoSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="proceso"
      style={{ background: "#fff", padding: "80px 40px 100px", scrollMarginTop: 72 }}
    >
      {/* Badge */}
      <div style={{ marginBottom: 24 }}>
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
          Proceso
        </span>
      </div>

      {/* Heading */}
      <div style={{ maxWidth: 720, marginBottom: 64 }}>
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
          Calidad desde el{" "}
          <span style={{ color: GREEN }}>origen</span>
        </h2>
        <p style={{ fontSize: 17, color: SUBTLE, lineHeight: 1.65, margin: 0 }}>
          Cada producto que llega a tu negocio pasa por un proceso riguroso de cuatro etapas que garantizan frescura, limpieza y presentación impecable.
        </p>
      </div>

      {/* Steps */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 2,
        }}
      >
        {STEPS.map((step, i) => {
          const active = (hovered ?? 0) === i;

          return (
            <div
              key={step.number}
              className="rounded-3xl"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: active ? GREEN : "#f5f5f7",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                border: `1.5px solid ${GREEN}`,
                transition: "background 0.25s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                transform: active ? "scale(1.03)" : "scale(1)",
                cursor: "default",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  color: active ? "rgba(255,255,255,0.6)" : SUBTLE,
                  transition: "color 0.25s ease",
                }}
              >
                {step.number}
              </span>
              <div>
                <h3
                  className="font-medium"
                  style={{
                    fontSize: "clamp(24px, 2.5vw, 36px)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.05,
                    marginBottom: 12,
                    color: active ? "#fff" : DARK,
                    transition: "color 0.25s ease",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                    color: active ? "rgba(255,255,255,0.75)" : SUBTLE,
                    transition: "color 0.25s ease",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
