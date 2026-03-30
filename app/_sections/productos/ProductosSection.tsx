import { GREEN, DARK, OFF_WHITE, SUBTLE } from "@/app/_constants/brand";

const products = [
  { name: "Arroz", kg: "1kg · 5kg · 25kg" },
  { name: "Frijol Negro", kg: "1kg · 5kg · 25kg" },
  { name: "Frijol Bayo", kg: "1kg · 5kg · 25kg" },
  { name: "Maíz Blanco", kg: "5kg · 25kg · 50kg" },
  { name: "Azúcar Estándar", kg: "1kg · 5kg · 50kg" },
  { name: "Lenteja", kg: "500g · 1kg · 5kg" },
];

export default function ProductosSection() {
  return (
    <section id="productos" style={{ background: OFF_WHITE, padding: "80px 40px" }}>
      <div className="flex justify-end mb-12">
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
            <div className="w-3 h-3 rounded-full mb-6" style={{ background: GREEN }} />
            <div>
              <h3 className="font-medium mb-1" style={{ fontSize: 22, color: DARK, letterSpacing: -0.5 }}>
                {product.name}
              </h3>
              <p className="font-normal" style={{ color: SUBTLE, fontSize: 15, letterSpacing: -0.2 }}>
                {product.kg}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
