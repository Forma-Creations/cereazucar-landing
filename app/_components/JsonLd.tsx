export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://cereazucar.com/#organization",
        name: "Comercializadora Cereazúcar",
        alternateName: "Cereazúcar",
        description:
          "Distribuidora y empaquetadora de granos básicos en México con más de 30 años de experiencia. Proveemos frijol, arroz, azúcar, avena y abarrotes a tiendas, supermercados y distribuidores en todo el país.",
        url: "https://cereazucar.com",
        logo: "https://cereazucar.com/images/logo.png",
        image: "https://cereazucar.com/images/hero.png",
        telephone: ["+523123135100", "+523123309270"],
        email: "cereazucar@outlook.com",
        foundingDate: "1994",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lucío Blanco #163",
          addressLocality: "El Moralete",
          addressRegion: "Colima",
          postalCode: "28010",
          addressCountry: "MX",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.2433,
          longitude: -103.7241,
        },
        areaServed: {
          "@type": "Country",
          name: "México",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Catálogo de granos básicos y abarrotes",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Frijol Azufrado", category: "Leguminosas" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Frijol Bayo", category: "Leguminosas" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Frijol Peruano", category: "Leguminosas" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Frijol Flor de Mayo", category: "Leguminosas" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Arroz Super Extra Delgado", category: "Granos" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Azúcar Estándar", category: "Endulzantes" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Azúcar Refinada", category: "Endulzantes" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Avena", category: "Cereales" } },
          ],
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+523123135100",
            contactType: "sales",
            areaServed: "MX",
            availableLanguage: "Spanish",
          },
          {
            "@type": "ContactPoint",
            telephone: "+523123309270",
            contactType: "customer service",
            areaServed: "MX",
            availableLanguage: "Spanish",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://cereazucar.com/#website",
        url: "https://cereazucar.com",
        name: "Cereazúcar",
        publisher: { "@id": "https://cereazucar.com/#organization" },
        inLanguage: "es-MX",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
