"use client";

import Image from "next/image";
import Link from "next/link";
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
const NAV_LINKS = ["Inicio", "Nosotros", "Productos", "Proceso", "Clientes"];

function NavLink({ item, scrolled, isHome, onClick }: { item: string; scrolled: boolean; isHome: boolean; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const href = isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;

  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.();
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
        padding: scrolled ? "5px 14px" : "8px 18px",
        lineHeight: 1,
        transform: hovered ? "scale(1.06)" : "scale(1)",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.10)" : "0 0 0 rgba(0,0,0,0)",
        transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease, padding 0.35s ease, background 0.35s ease",
        textDecoration: "none",
      }}
    >
      {item}
    </a>
  );
}

export default function Navbar({ opaque = false }: { opaque?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [cotizacionHovered, setCotizacionHovered] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { items, open } = useCotizacion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const active = opaque || scrolled;

  return (
    <>
      <style>{`
        @keyframes coti-pulse {
          0%   { transform: scale(1); }
          20%  { transform: scale(1.1); }
          40%  { transform: scale(1); }
          60%  { transform: scale(1.1); }
          80%  { transform: scale(1); }
          100% { transform: scale(1); }
        }
        .coti-btn-hover { animation: coti-pulse 0.55s ease-in-out; }
      `}</style>
      <nav
        className="fixed top-0 left-0 right-0 flex items-center justify-between"
        style={{
          zIndex: 50,
          padding: active ? "7px 24px" : "28px 24px",
          background: active || menuOpen ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: active || menuOpen ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: active || menuOpen ? "blur(20px) saturate(180%)" : "none",
          borderBottom: active && !menuOpen ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0)",
          transition: "padding 0.35s ease, background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
        }}
      >
        <Link
          href="/"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          style={{ display: "flex", flexShrink: 0, transform: logoHovered ? "scale(1.08)" : "scale(1)", transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1)", opacity: logoHovered ? 0.85 : 1 }}
        >
          <Image
            src="/images/logo.png"
            alt="Cereazúcar"
            width={active ? 46 : 80}
            height={active ? 40 : 70}
            className="object-contain"
            style={{ transition: "width 0.35s ease, height 0.35s ease" }}
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-4">
          {NAV_LINKS.map((item) => (
            <NavLink key={item} item={item} scrolled={active} isHome={isHome} />
          ))}
        </div>

        {/* Desktop right buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={open}
            onMouseEnter={() => setCotizacionHovered(true)}
            onMouseLeave={() => setCotizacionHovered(false)}
            className={`relative flex items-center justify-center rounded-full font-normal${cotizacionHovered ? " coti-btn-hover" : ""}`}
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
              textDecoration: "none",
            }}
          >
            Contacto
          </a>
        </div>

        {/* Mobile right: cotización + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={open}
            aria-label="Ver cotización"
            className="relative flex items-center justify-center rounded-full"
            style={{
              background: active || menuOpen ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.48)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              border: "1px solid rgba(80,80,80,0.18)",
              color: DARK,
              width: 40,
              height: 40,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {items.length > 0 && (
              <span style={{ position: "absolute", top: -4, right: -4, background: GREEN, color: "white", borderRadius: "50%", width: 16, height: 16, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>
                {items.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: active || menuOpen ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.48)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              border: "1px solid rgba(80,80,80,0.18)",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: DARK,
              flexShrink: 0,
            }}
            aria-label="Menú"
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className="fixed inset-0 lg:hidden"
        style={{
          zIndex: 49,
          background: GREEN,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px 32px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.38s cubic-bezier(0.32,0.72,0,1)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {[...NAV_LINKS, "Contacto"].map((item) => {
          const href = isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;
          return (
            <a
              key={item}
              href={href}
              onClick={(e) => {
                setMenuOpen(false);
                if (!isHome) return;
                e.preventDefault();
                const el = document.getElementById(item.toLowerCase());
                if (el) smoothScrollTo(el);
              }}
              style={{
                fontSize: "clamp(36px, 8vw, 56px)",
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {item}
            </a>
          );
        })}
      </div>
    </>
  );
}
