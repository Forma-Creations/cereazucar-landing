"use client";

import { useState } from "react";
import Image from "next/image";
import { useCotizacion } from "@/app/_store/cotizacionStore";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";

export default function CotizacionDrawer() {
  const { items, isOpen, close, remove, setCantidad, clear } = useCotizacion();
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/cotizacion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, items }),
    });

    setLoading(false);

    if (!res.ok) {
      setError(true);
      return;
    }

    setSent(true);
    setTimeout(() => {
      setSent(false);
      clear();
      setForm({ nombre: "", email: "", mensaje: "" });
      close();
    }, 3000);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0"
          style={{ zIndex: 200, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
          onClick={close}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full flex flex-col"
        style={{
          zIndex: 201,
          width: "min(100vw, 440px)",
          background: "#fff",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between" style={{ padding: "20px 24px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <div>
            <h2 className="font-medium" style={{ fontSize: 18, color: DARK, letterSpacing: -0.4 }}>Solicitar Cotización</h2>
            <p style={{ fontSize: 13, color: SUBTLE, marginTop: 2 }}>{items.length} {items.length === 1 ? "producto" : "productos"}</p>
          </div>
          <button
            onClick={close}
            aria-label="Cerrar cotización"
            style={{ background: "rgba(0,0,0,0.06)", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: DARK }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {items.length === 0 ? (
            <div style={{ padding: 40, textAlign: "center" }}>
              <p style={{ fontSize: 15, color: SUBTLE }}>Agrega productos para cotizar.</p>
            </div>
          ) : sent ? (
            <div style={{ padding: 40, textAlign: "center" }}>
              <p className="font-medium" style={{ fontSize: 20, color: GREEN, marginBottom: 8 }}>¡Solicitud enviada!</p>
              <p style={{ fontSize: 15, color: SUBTLE }}>Te contactaremos a la brevedad.</p>
            </div>
          ) : (
            <>
              {/* Product list */}
              <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                {items.map(({ product, cantidad }) => (
                  <div key={product.slug} className="flex gap-3 items-center" style={{ background: "rgba(0,0,0,0.02)", borderRadius: 16, padding: "12px 14px", border: `1px solid ${GREEN}30` }}>
                    <div className="relative rounded-xl overflow-hidden" style={{ width: 56, height: 56, flexShrink: 0 }}>
                      <Image src={product.cover} alt={product.name} fill sizes="56px" quality={90} className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium" style={{ fontSize: 14, color: DARK, letterSpacing: -0.3, marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{product.name}</p>
                      <select
                        value={cantidad}
                        onChange={(e) => setCantidad(product.slug, e.target.value)}
                        style={{ fontSize: 12, color: GREEN, background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 99, padding: "2px 8px", cursor: "pointer", outline: "none" }}
                      >
                        <option value="">Presentación</option>
                        {product.presentations.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <button onClick={() => remove(product.slug)} aria-label={`Quitar ${product.name}`} style={{ background: "none", border: "none", color: SUBTLE, cursor: "pointer", fontSize: 16, padding: 4, flexShrink: 0 }}>✕</button>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ padding: "8px 24px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ height: 1, background: "rgba(0,0,0,0.07)", margin: "4px 0 8px" }} />
                <div>
                  <label style={{ fontSize: 12, color: SUBTLE, display: "block", marginBottom: 5 }}>Nombre</label>
                  <input
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                    style={{ width: "100%", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 12, padding: "10px 14px", fontSize: 15, outline: "none", boxSizing: "border-box", color: DARK }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: SUBTLE, display: "block", marginBottom: 5 }}>Correo</label>
                  <input
                    required
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    style={{ width: "100%", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 12, padding: "10px 14px", fontSize: 15, outline: "none", boxSizing: "border-box", color: DARK }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: SUBTLE, display: "block", marginBottom: 5 }}>Mensaje (opcional)</label>
                  <textarea
                    rows={3}
                    placeholder="¿Algún detalle adicional?"
                    value={form.mensaje}
                    onChange={(e) => setForm((f) => ({ ...f, mensaje: e.target.value }))}
                    style={{ width: "100%", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 12, padding: "10px 14px", fontSize: 15, outline: "none", boxSizing: "border-box", resize: "none", color: DARK }}
                  />
                </div>
                {error && (
                  <p style={{ fontSize: 13, color: "#d00", textAlign: "center", margin: 0 }}>
                    Ocurrió un error. Intenta de nuevo.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="font-medium rounded-full"
                  style={{ background: GREEN, color: "white", border: "none", padding: "13px", fontSize: 16, cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, marginTop: 4 }}
                >
                  {loading ? "Enviando..." : "Enviar solicitud"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
