"use client";

import { useState } from "react";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";

export default function ContactoSection() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar con backend / servicio de email
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
    <section
      id="contacto"
      style={{ background: DARK, padding: "80px 40px 100px" }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {/* Badge */}
        <div style={{ marginBottom: 24 }}>
          <span
            className="inline-flex items-center gap-2 rounded-full font-normal"
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 14,
              padding: "4px 14px 4px 10px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: GREEN,
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            Contacto
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-medium"
          style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: 8,
          }}
        >
          ¿Listo para abastecer<br />tu negocio?
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", marginBottom: 48, lineHeight: 1.6 }}>
          Déjanos tus datos y un asesor te contactará a la brevedad.
        </p>

        {sent ? (
          <div
            className="rounded-2xl"
            style={{
              background: `${GREEN}18`,
              border: `1px solid ${GREEN}40`,
              padding: "32px 28px",
              textAlign: "center",
            }}
          >
            <p className="font-medium" style={{ fontSize: 20, color: GREEN, marginBottom: 8 }}>
              ¡Mensaje enviado!
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)" }}>
              Nos pondremos en contacto contigo pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label htmlFor="nombre" style={labelStyle}>Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="empresa" style={labelStyle}>Empresa</label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Tu empresa (opcional)"
                  value={form.empresa}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" style={labelStyle}>Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="correo@ejemplo.com"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="mensaje" style={labelStyle}>Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
                value={form.mensaje}
                onChange={handleChange}
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            <button
              type="submit"
              className="font-medium"
              style={{
                background: GREEN,
                color: "white",
                border: "none",
                borderRadius: 99,
                padding: "14px 32px",
                fontSize: 16,
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
