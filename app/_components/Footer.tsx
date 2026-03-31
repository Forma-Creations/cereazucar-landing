import Image from "next/image";
import { GREEN, DARK, SUBTLE } from "@/app/_constants/brand";

const footerStyles = `
  @media (max-width: 640px) {
    .footer-grid {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
    }
    .footer-bottom {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 4px !important;
    }
  }
`;

export default function Footer() {
  return (
    <footer style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 24px 32px" }}>
      <style>{footerStyles}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="footer-grid"
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
              <a href="tel:+523123135100" style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>312 313 5100</a>
              <a href="tel:+523123309270" style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>312 330 9270</a>
              <a href="mailto:cereazucar@outlook.com" style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>cereazucar@outlook.com</a>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", margin: 0 }}>Lucío Blanco #163, El Moralete, Colima</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
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
            © {new Date().getFullYear()} Comercializadora Cereazúcar. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
            100% Colimense
          </p>
        </div>
      </div>
    </footer>
  );
}
