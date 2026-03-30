import { DARK } from "./_constants/brand";
import HeroSection from "./_sections/hero/HeroSection";
import NosotrosSection from "./_sections/nosotros/NosotrosSection";
import EstadisticasSection from "./_sections/estadisticas/EstadisticasSection";
import ProductosSection from "./_sections/productos/ProductosSection";

export default function Home() {
  return (
    <main style={{ background: "#fff", color: DARK }}>
      <HeroSection />
      <NosotrosSection />
      <EstadisticasSection />
      <ProductosSection />
    </main>
  );
}
