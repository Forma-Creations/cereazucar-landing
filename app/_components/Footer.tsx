import Image from "next/image";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";

export default function Footer() {
  return (
    <footer style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 40px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Cereazúcar"
              width={56}
              height={48}
              className="object-contain"
              style={{ marginBottom: 16, filter: "brightness(0) invert(1)" }}
            />
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, maxWidth: 240 }}>
              Empaquetado y distribución de granos básicos para México. 100% Colimense.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-medium" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Navegación
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Inicio", href: "/#inicio" },
                { label: "Nosotros", href: "/#nosotros" },
                { label: "Productos", href: "/productos" },
                { label: "Contacto", href: "/#contacto" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-medium" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Contacto
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href="tel:+523121234567"
                style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
              >
                +52 312 123 4567
              </a>
              <a
                href="mailto:contacto@cereazucar.mx"
                style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
              >
                contacto@cereazucar.mx
              </a>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)" }}>
                Colima, México
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Cereazúcar. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            100% Colimense
          </p>
        </div>
      </div>
    </footer>
  );
}
