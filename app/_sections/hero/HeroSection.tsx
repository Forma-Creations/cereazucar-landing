import Navbar from "@/app/components/Navbar";
import { GREEN } from "@/app/_constants/brand";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative" style={{ minHeight: "100svh", overflow: "hidden" }}>

      {/* Background image */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.png"
          alt="Cereazúcar"
          className="w-full h-full object-cover"
          style={{ objectPosition: "right center" }}
        />
      </div>

      <Navbar />

      {/* Hero content (lower-left) */}
      <div
        className="absolute"
        style={{ zIndex: 5, left: 40, right: 40, bottom: "calc(clamp(72px, 13.5vw, 200px) * 0.9 + 32px)" }}
      >
        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(26px, 2.8vw, 46px)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            maxWidth: 400,
            color: "#fff",
            WebkitTextStroke: "1px rgba(0,0,0,0.06)",
            paintOrder: "stroke fill",
          }}
        >
          <span style={{ fontWeight: 500 }}>Empaquetado y<br />distribución de<br /></span>
          <span style={{ fontWeight: 300 }}>granos básicos<br />para México.</span>
        </h1>

        <div className="flex flex-wrap gap-2">
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

      {/* SVG filter for inner shadow */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="inner-shadow" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
            <feComponentTransfer in="SourceAlpha" result="invertedAlpha">
              <feFuncA type="table" tableValues="1 0"/>
            </feComponentTransfer>
            <feOffset dx="0" dy="-2" in="invertedAlpha" result="offset"/>
            <feGaussianBlur in="offset" stdDeviation="1" result="blurred"/>
            <feComposite in="blurred" in2="SourceAlpha" operator="in" result="clipped"/>
            <feFlood floodColor="#000000" floodOpacity="0.08" result="color"/>
            <feComposite in="color" in2="clipped" operator="in" result="innerShadow"/>
            <feMerge>
              <feMergeNode in="SourceGraphic"/>
              <feMergeNode in="innerShadow"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* "Cereazúcar" watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ zIndex: 5, pointerEvents: "none" }}
      >
        <span
          className="block font-medium"
          style={{
            fontSize: "clamp(72px, 13.5vw, 200px)",
            letterSpacing: "-0.06em",
            lineHeight: 0.9,
            paddingLeft: 32,
            color: "#fff",
            WebkitTextStroke: "1px rgba(0,0,0,0.06)",
            paintOrder: "stroke fill",
          }}
        >
          Cereazúcar
        </span>
      </div>
    </section>
  );
}
