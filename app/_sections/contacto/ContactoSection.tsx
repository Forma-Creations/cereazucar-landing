"use client";

import { useState } from "react";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";

const CONTACT_INFO = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: "Teléfonos",
    value: "312 313 5100 / 312 330 9270",
    href: "tel:+523123135100",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.882a.5.5 0 00.61.61l6.02-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.726.913.932-3.626-.234-.374A9.818 9.818 0 1112 21.818z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "312 313 5100",
    href: "https://wa.me/523123135100",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Correo",
    value: "cereazucar@outlook.com",
    href: "mailto:cereazucar@outlook.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Dirección",
    value: "Lucío Blanco #163, El Moralete, Colima",
    href: "https://maps.google.com/?q=Lucio+Blanco+163+El+Moralete+Colima+Mexico",
  },
];

export default function ContactoSection() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      setError(true);
      return;
    }

    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 14,
    padding: "14px 18px",
    fontSize: 16,
    color: "#fff",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.04em",
    marginBottom: 6,
    display: "block",
  };

  return (
    <section id="contacto" style={{ background: DARK, padding: "80px 40px 100px" }}>
      <style>{`
        @media (max-width: 580px) {
          .contact-grid {
            display: flex !important;
            flex-direction: column;
            gap: 40px !important;
          }
          .contact-heading { order: 1; }
          .contact-form    { order: 2; }
          .contact-links   { order: 3; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/*
          Desktop: 2-col grid — left col has heading (row 1) + links (row 2), right col has form (spans both rows)
          Mobile (<580px): flex column — heading, form, links
        */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Heading — col 1, row 1 */}
          <div className="contact-heading" style={{ gridColumn: 1, gridRow: 1 }}>
            <h2
              className="font-medium"
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                color: "#fff",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: 12,
              }}
            >
              ¿Listo para abastecer<br />tu negocio?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>
              Déjanos tus datos y un asesor te contactará a la brevedad. También puedes comunicarte directamente con nosotros.
            </p>
          </div>

          {/* Form — col 2, rows 1–2 */}
          <div className="contact-form" style={{ gridColumn: 2, gridRow: "1 / 3" }}>
            {sent ? (
              <div
                className="rounded-2xl"
                style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}40`, padding: "40px 32px", textAlign: "center" }}
              >
                <p className="font-medium" style={{ fontSize: 22, color: GREEN, marginBottom: 8 }}>¡Mensaje enviado!</p>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)" }}>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="nombre" style={labelStyle}>Nombre</label>
                    <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" value={form.nombre} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="empresa" style={labelStyle}>Empresa</label>
                    <input id="empresa" name="empresa" type="text" placeholder="Tu empresa (opcional)" value={form.empresa} onChange={handleChange} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Correo electrónico</label>
                  <input id="email" name="email" type="email" required placeholder="correo@ejemplo.com" value={form.email} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="mensaje" style={labelStyle}>Mensaje</label>
                  <textarea id="mensaje" name="mensaje" required rows={4} placeholder="¿En qué podemos ayudarte?" value={form.mensaje} onChange={handleChange} style={{ ...inputStyle, resize: "none" }} />
                </div>
                {error && <p style={{ fontSize: 13, color: "#ff4444", margin: 0 }}>Ocurrió un error. Intenta de nuevo.</p>}
                <button
                  type="submit"
                  disabled={loading}
                  onMouseEnter={() => setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                  className="font-medium"
                  style={{
                    background: GREEN, color: "white", border: "none", borderRadius: 99,
                    padding: "14px 32px", fontSize: 16,
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    alignSelf: "flex-start",
                    transform: btnHovered && !loading ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease",
                  }}
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>

          {/* Contact links — col 1, row 2 */}
          <div className="contact-links" style={{ gridColumn: 1, gridRow: 2, display: "flex", flexDirection: "column", gap: 16 }}>
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14 }}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 14,
                    background: `${GREEN}18`, border: `1px solid ${GREEN}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: GREEN, flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 2px" }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", margin: 0 }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
