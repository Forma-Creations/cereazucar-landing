import { DARK } from "./_constants/brand";
import HeroSection from "./_sections/hero/HeroSection";
import NosotrosSection from "./_sections/nosotros/NosotrosSection";
import EstadisticasSection from "./_sections/estadisticas/EstadisticasSection";
import ProductosSection from "./_sections/productos/ProductosSection";
import ProcesoSection from "./_sections/proceso/ProcesoSection";
import ClientesSection from "./_sections/clientes/ClientesSection";
import ContactoSection from "./_sections/contacto/ContactoSection";

export default function Home() {
  return (
    <main style={{ background: "#fff", color: DARK }}>
      <HeroSection />
      <NosotrosSection />
      <EstadisticasSection />
      <ProductosSection />
      <ProcesoSection />
      <ClientesSection />
      <ContactoSection />
    </main>
  );
}
