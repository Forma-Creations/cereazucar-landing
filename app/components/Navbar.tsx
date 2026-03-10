"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function smoothScrollTo(target: HTMLElement, duration = 480) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
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

function NavLink({ item, scrolled }: { item: string; scrolled: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`#${item.toLowerCase()}`}
      onClick={(e) => {
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center justify-between"
      style={{
        zIndex: 50,
        padding: scrolled ? "7px 40px" : "28px 40px",
        background: scrolled ? "rgba(255,255,255,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0)",
        transition: "padding 0.35s ease, background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
      }}
    >
      <Image
        src="/images/logo.png"
        alt="Cereazúcar"
        width={scrolled ? 46 : 80}
        height={scrolled ? 40 : 70}
        className="object-contain"
        style={{ transition: "width 0.35s ease, height 0.35s ease" }}
      />

      <div
        className="absolute left-1/2 flex items-center gap-6"
        style={{ transform: "translateX(-50%)" }}
      >
        {NAV_LINKS.map((item) => (
          <NavLink key={item} item={item} scrolled={scrolled} />
        ))}
      </div>

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
          padding: scrolled ? "5px 20px" : "10px 30px",
          lineHeight: 1,
          transform: ctaHovered ? "scale(1.06)" : "scale(1)",
          filter: ctaHovered ? "brightness(1.08)" : "brightness(1)",
          boxShadow: ctaHovered ? "0 4px 20px rgba(65,161,64,0.35)" : "0 0 0 rgba(0,0,0,0)",
          transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.22s ease, box-shadow 0.22s ease, padding 0.35s ease",
        }}
      >
        Contacto
      </a>
    </nav>
  );
}
