import Image from "next/image";

const GREEN = "#41a140";
const DARK = "#1d1d1f";
const OFF_WHITE = "#f5f5f7";
const SUBTLE = "#a2aaad";

const NAV_LINKS = ["Inicio", "Nosotros", "Productos", "Proceso"];

const products = [
  { name: "Arroz", kg: "1kg · 5kg · 25kg" },
  { name: "Frijol Negro", kg: "1kg · 5kg · 25kg" },
  { name: "Frijol Bayo", kg: "1kg · 5kg · 25kg" },
  { name: "Maíz Blanco", kg: "5kg · 25kg · 50kg" },
  { name: "Azúcar Estándar", kg: "1kg · 5kg · 50kg" },
  { name: "Lenteja", kg: "500g · 1kg · 5kg" },
];

export default function Home() {
  return (
    <main style={{ background: "#fff", color: DARK }}>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section id="inicio" className="relative" style={{ minHeight: "100svh", overflow: "hidden" }}>

        {/* Background image – positioned to the right */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="/images/hero.png"
            alt="Cereazúcar"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "right center" }}
          />
        </div>

        {/* ── Navbar ───────────────────────────────────────────────── */}
        <nav
          className="fixed top-0 left-0 right-0 flex items-center justify-between"
          style={{ zIndex: 10, padding: "28px 40px" }}
        >
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Cereazúcar"
            width={80}
            height={70}
            className="object-contain"
          />

          {/* Nav links — centered, liquid glass (solid white base + gradient stroke) */}
          <div
            className="absolute left-1/2 flex items-center gap-6"
            style={{ transform: "translateX(-50%)" }}
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="flex items-center justify-center rounded-full font-normal"
                style={{
                  background: "rgba(255,255,255,0.48)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  border: "1px solid rgba(80,80,80,0.18)",
                  color: DARK,
                  fontSize: 16,
                  padding: "10px 30px",
                  lineHeight: 1,
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contacto CTA — right */}
          <a
            href="#contacto"
            className="flex items-center justify-center rounded-full font-normal"
            style={{
              background: "rgba(65,161,64,0.92)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              color: "white",
              fontSize: 16,
              padding: "10px 30px",
              lineHeight: 1,
            }}
          >
            Contacto
          </a>
        </nav>

        {/* ── Hero content (lower-left) ─────────────────────────────── */}
        <div
          className="absolute"
          style={{ zIndex: 5, left: 40, right: 40, bottom: "calc(clamp(72px, 13.5vw, 200px) * 0.9 + 32px)" }}
        >
          <h1
            className="mb-6"
            style={{
              fontSize: "clamp(26px, 2.8vw, 46px)",
              color: OFF_WHITE,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 400,
            }}
          >
            <span style={{ fontWeight: 500 }}>Empaquetado y<br />distribución de<br /></span>
            <span style={{ fontWeight: 300 }}>granos básicos<br />para México.</span>
          </h1>

          <div className="flex flex-wrap gap-2">
            {/* Ver productos — green, same size as nav */}
            <a
              href="#productos"
              className="flex items-center justify-center rounded-full font-normal"
              style={{
                background: "rgba(65,161,64,0.92)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                color: "white",
                fontSize: 16,
                padding: "10px 18px",
                lineHeight: 1,
              }}
            >
              Ver productos
            </a>
            {/* Solicitar cotización — liquid glass, same as nav links */}
            <a
              href="#contacto"
              className="flex items-center justify-center rounded-full font-normal"
              style={{
                background: "rgba(255,255,255,0.48)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(80,80,80,0.18)",
                color: GREEN,
                fontSize: 16,
                padding: "10px 18px",
                lineHeight: 1,
              }}
            >
              Solicitar cotización
            </a>
          </div>
        </div>

        {/* ── "Cereazúcar" watermark – bottom of hero, no shadow ──── */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ zIndex: 5, pointerEvents: "none" }}
        >
          <span
            className="block font-medium"
            style={{
              fontSize: "clamp(72px, 13.5vw, 200px)",
              color: OFF_WHITE,
              letterSpacing: -4,
              lineHeight: 0.9,
              paddingLeft: 32,
            }}
          >
            Cereazúcar
          </span>
        </div>
      </section>

      {/* ─── NOSOTROS ─────────────────────────────────────────────── */}
      <section id="nosotros" style={{ background: "#fff", padding: "28px 40px 48px" }}>
        <div style={{ maxWidth: 1648 }}>
          {/* Chip */}
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 rounded-full font-normal"
              style={{
                border: "1px solid rgba(0,0,0,0.12)",
                color: DARK,
                fontSize: 15,
                padding: "4px 14px 4px 10px",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: DARK, display: "inline-block", flexShrink: 0 }} />
              Nosotros
            </span>
          </div>

          <p
            style={{
              fontSize: "clamp(22px, 3.5vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: "68ch",
              margin: 0,
            }}
          >
            <span style={{ fontWeight: 500, color: "#1D1D1F" }}>
              Nuestra empresa mantiene tu negocio productivo, bien abastecido y conectado desde el origen hasta tu mostrador.{" "}
            </span>
            <span style={{ fontWeight: 400, color: "#A2AAAD" }}>
              Cuando los comercios necesitan confiabilidad, los clientes esperan calidad y suministro constante, nosotros estamos ahí para hacerlo posible.
            </span>
          </p>
        </div>
      </section>

      {/* ─── STATS BENTO ──────────────────────────────────────────── */}
      <section style={{ padding: "0 40px 80px", background: "#fff" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.92fr",
            gridTemplateRows: "auto auto",
            gap: 12,
          }}
        >
          {/* Card 1 — Nacional (green, top-left) */}
          <div
            className="relative rounded-3xl overflow-hidden flex flex-col justify-between"
            style={{
              background: GREEN,
              minHeight: 300,
              padding: "32px 32px 20px 20px",
              gridColumn: "1",
              gridRow: "1",
              border: `1.5px solid ${GREEN}`,
            }}
          >
            {/* Map image positioned at top of card */}
            <div className="relative w-full" style={{ height: 200, marginBottom: "auto" }}>
              <Image
                src="/images/stat-nacional.jpg"
                alt="Nacional"
                fill
                className="object-contain object-left-top"
              />
            </div>
            <div>
              <p
                className="font-medium"
                style={{ fontSize: "clamp(40px, 4vw, 64px)", color: "white", letterSpacing: -2, lineHeight: 1 }}
              >
                Nacional
              </p>
              <p
                className="font-normal"
                style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, letterSpacing: -0.3, marginTop: -4 }}
              >
                Distribución en Todo México.
              </p>
            </div>
          </div>

          {/* Card 2 — 30+ (white, top-center) */}
          <div
            className="relative rounded-3xl overflow-hidden flex flex-col justify-between"
            style={{
              background: "#fff",
              minHeight: 300,
              padding: "32px 32px 20px 20px",
              gridColumn: "2",
              gridRow: "1",
              border: `1.5px solid ${GREEN}`,
            }}
          >
            {/* Image on the right, absolutely positioned — object-contain to show full image */}
            <div
              className="absolute top-0 right-0 bottom-0"
              style={{ width: "82%", padding: "11px 11px 11px 0" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/stat-experiencia.jpg"
                  alt="Experiencia"
                  fill
                  className="object-contain object-right-top"
                />
              </div>
            </div>
            {/* Text on the left */}
            <div className="relative" />
            <div className="relative">
              <p
                className="font-medium"
                style={{ fontSize: "clamp(40px, 4vw, 64px)", color: GREEN, letterSpacing: -2, lineHeight: 1 }}
              >
                30+
              </p>
              <p
                className="font-normal"
                style={{ color: GREEN, fontSize: 17, letterSpacing: -0.3, marginTop: -4 }}
              >
                Años de Experiencia en el Mercado.
              </p>
            </div>
          </div>

          {/* Card 3 — Empaquetado (large, spans 2 rows, right) */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              gridColumn: "3",
              gridRow: "1 / 3",
              minHeight: 620,
              border: `1.5px solid ${GREEN}`,
            }}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/stat-empaquetado.jpg"
                alt="Empaquetado de calidad"
                fill
                className="object-cover"
                style={{ objectPosition: "center 60%" }}
              />
            </div>
            {/* Text absolutely positioned, independently moveable */}
            <div className="absolute" style={{ bottom: "17%", right: 110 }}>
              <p
                className="font-medium"
                style={{
                  fontSize: "clamp(24px, 2.8vw, 48px)",
                  color: OFF_WHITE,
                  letterSpacing: -1,
                  lineHeight: 0.95,
                  marginBottom: -2,
                }}
              >
                Empaquetado<br />de Calidad
              </p>
              <p
                className="font-normal"
                style={{ color: OFF_WHITE, fontSize: 17, letterSpacing: -0.3 }}
              >
                Listos para comercialización.
              </p>
            </div>
          </div>

          {/* Card 4 — 100% Colimense (image fill, bottom spans cols 1-2) */}
          <div
            className="relative rounded-3xl overflow-hidden flex flex-col justify-start"
            style={{
              gridColumn: "1 / 3",
              gridRow: "2",
              padding: "8px 32px 32px 20px",
              minHeight: 260,
              border: `1.5px solid ${GREEN}`,
            }}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/stat-local.jpg"
                alt="100% Colimense"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative">
              <p
                className="font-medium"
                style={{ fontSize: "clamp(40px, 4vw, 64px)", color: GREEN, letterSpacing: -2, lineHeight: 1 }}
              >
                100%
              </p>
              <p
                className="font-normal"
                style={{ color: GREEN, fontSize: 17, letterSpacing: -0.3, marginTop: -4 }}
              >
                Colimense.
              </p>
              <p
                className="font-normal uppercase tracking-widest mt-1"
                style={{ color: SUBTLE, fontSize: 13 }}
              >
                Orgullosamente Local
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTOS ────────────────────────────────────────────── */}
      <section id="productos" style={{ background: OFF_WHITE, padding: "80px 40px" }}>
        {/* Chip */}
        <div
          className="flex justify-end mb-12"
        >
          <span
            className="inline-flex items-center rounded-full font-normal"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.1)",
              color: DARK,
              fontSize: 17,
              letterSpacing: -0.3,
              padding: "6px 18px",
            }}
          >
            Nuestros Productos
          </span>
        </div>

        <h2
          className="font-medium mb-12"
          style={{
            fontSize: "clamp(28px, 4vw, 60px)",
            color: DARK,
            letterSpacing: -1.5,
            lineHeight: 1.05,
            maxWidth: "16ch",
          }}
        >
          Granos básicos para cada negocio.
        </h2>

        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl flex flex-col justify-between"
              style={{ background: "white", padding: 28, minHeight: 160 }}
            >
              <div
                className="w-3 h-3 rounded-full mb-6"
                style={{ background: GREEN }}
              />
              <div>
                <h3
                  className="font-medium mb-1"
                  style={{ fontSize: 22, color: DARK, letterSpacing: -0.5 }}
                >
                  {product.name}
                </h3>
                <p
                  className="font-normal"
                  style={{ color: SUBTLE, fontSize: 15, letterSpacing: -0.2 }}
                >
                  {product.kg}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
