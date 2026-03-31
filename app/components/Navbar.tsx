"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCotizacion } from "@/app/_store/cotizacionStore";

function smoothScrollTo(target: HTMLElement, duration = 480) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start - 50;
  const startTime = performance.now();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo({ top: start + (end - start) * easeOutCubic(progress), behavior: "instant" });
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const GREEN = "#41a140";
const DARK = "#1d1d1f";
const NAV_LINKS = ["Inicio", "Nosotros", "Productos", "Proceso"];

function NavLink({ item, scrolled, isHome }: { item: string; scrolled: boolean; isHome: boolean }) {
  const [hovered, setHovered] = useState(false);
  const href = isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;

  return (
    <a
      href={href}
      onClick={(e) => {
        if (!isHome) return;
        e.preventDefault();
        const el = document.getElementById(item.toLowerCase());
        if (el) smoothScrollTo(el);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center rounded-full font-normal"
      style={{
        background: scrolled ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.48)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        border: "1px solid rgba(80,80,80,0.18)",
        color: DARK,
        fontSize: 16,
        padding: scrolled ? "5px 20px" : "10px 30px",
        lineHeight: 1,
        transform: hovered ? "scale(1.06)" : "scale(1)",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.10)" : "0 0 0 rgba(0,0,0,0)",
        transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease, padding 0.35s ease, background 0.35s ease",
      }}
    >
      {item}
    </a>
  );
}

export default function Navbar({ opaque = false }: { opaque?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { items, open } = useCotizacion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = opaque || scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center justify-between"
      style={{
        zIndex: 50,
        padding: active ? "7px 40px" : "28px 40px",
        background: active ? "rgba(255,255,255,0.72)" : "transparent",
        backdropFilter: active ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: active ? "blur(20px) saturate(180%)" : "none",
        borderBottom: active ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0)",
        transition: "padding 0.35s ease, background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
      }}
    >
      <Image
        src="/images/logo.png"
        alt="Cereazúcar"
        width={active ? 46 : 80}
        height={active ? 40 : 70}
        className="object-contain"
        style={{ transition: "width 0.35s ease, height 0.35s ease" }}
      />

      <div
        className="absolute left-1/2 flex items-center gap-6"
        style={{ transform: "translateX(-50%)" }}
      >
        {NAV_LINKS.map((item) => (
          <NavLink key={item} item={item} scrolled={active} isHome={isHome} />
        ))}
      </div>

      <div className="flex items-center gap-3">
        {/* Carrito de cotización */}
        <button
          onClick={open}
          className="relative flex items-center justify-center rounded-full font-normal"
          style={{
            background: active ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.48)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(80,80,80,0.18)",
            color: DARK,
            fontSize: 16,
            padding: active ? "5px 14px" : "10px 18px",
            lineHeight: 1,
            cursor: "pointer",
            transition: "padding 0.35s ease, background 0.35s ease",
            gap: 6,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          Cotización
          {items.length > 0 && (
            <span style={{ background: GREEN, color: "white", borderRadius: "50%", width: 18, height: 18, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>
              {items.length}
            </span>
          )}
        </button>

        {/* Contacto */}
        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("contacto");
            if (el) smoothScrollTo(el);
          }}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          className="flex items-center justify-center rounded-full font-normal"
          style={{
            background: "rgba(65,161,64,0.92)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            color: "white",
            fontSize: 16,
            padding: active ? "5px 20px" : "10px 30px",
            lineHeight: 1,
            transform: ctaHovered ? "scale(1.06)" : "scale(1)",
            filter: ctaHovered ? "brightness(1.08)" : "brightness(1)",
            boxShadow: ctaHovered ? "0 4px 20px rgba(65,161,64,0.35)" : "0 0 0 rgba(0,0,0,0)",
            transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.22s ease, box-shadow 0.22s ease, padding 0.35s ease",
          }}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
