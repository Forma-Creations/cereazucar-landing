export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  presentations: string[];
  cover: string;
  gallery: string[];
}

export const categories = [
  { slug: "leguminosas", label: "Leguminosas" },
  { slug: "granos", label: "Granos" },
  { slug: "cereales", label: "Cereales" },
  { slug: "endulzantes", label: "Endulzantes" },
  { slug: "abarrotes", label: "Abarrotes" },
];

export const products: Product[] = [
  {
    slug: "arroz",
    name: "Arroz Super Extra Delgado",
    category: "Granos",
    description:
      "Arroz de grano largo super extra delgado, seleccionado y empaquetado con los más altos estándares de calidad para garantizar sabor y textura en cada platillo.",
    presentations: ["1kg", "5kg", "25kg"],
    cover: "/images/productos/arroz/arroz_super_extra_delgado.jpg",
    gallery: [
      "/images/productos/arroz/arroz_super_extra_delgado.jpg",
      "/images/productos/arroz/CEREZACUCAR-023.jpg",
    ],
  },
  {
    slug: "avena",
    name: "Avena",
    category: "Cereales",
    description:
      "Avena de alta calidad, ideal para el desayuno y preparaciones diversas. Rica en fibra y nutrientes esenciales para una alimentación balanceada.",
    presentations: ["500g", "1kg", "5kg"],
    cover: "/images/productos/avena/avena.jpg",
    gallery: [
      "/images/productos/avena/avena.jpg",
      "/images/productos/avena/CEREZACUCAR-022.jpg",
    ],
  },
  {
    slug: "azucar-estandar",
    name: "Azúcar Estándar",
    category: "Endulzantes",
    description:
      "Azúcar estándar de caña, perfecta para uso en hogares, restaurantes y negocios. Garantizamos pureza y consistencia en cada presentación.",
    presentations: ["1kg", "5kg", "50kg"],
    cover: "/images/productos/azucar/azucar_estandar.jpg",
    gallery: [
      "/images/productos/azucar/azucar_estandar.jpg",
      "/images/productos/azucar/azucar_refinada_y_estandar.jpg",
    ],
  },
  {
    slug: "azucar-refinada",
    name: "Azúcar Refinada",
    category: "Endulzantes",
    description:
      "Azúcar refinada de alta pureza, ideal para repostería, confitería y uso industrial. Textura fina y blancura uniforme en cada lote.",
    presentations: ["1kg", "5kg", "50kg"],
    cover: "/images/productos/azucar/azucar_refinada.jpg",
    gallery: [
      "/images/productos/azucar/azucar_refinada.jpg",
      "/images/productos/azucar/azucar_refinada_y_estandar.jpg",
    ],
  },
  {
    slug: "frijol-azufrado",
    name: "Frijol Azufrado",
    category: "Leguminosas",
    description:
      "Frijol azufrado de primera calidad, cultivado en México con técnicas tradicionales. Grano uniforme de color crema con tono amarillento característico.",
    presentations: ["1kg", "5kg", "25kg"],
    cover: "/images/productos/frijoles/frijol_azufrado/CEREAZUCAR B-014.jpg",
    gallery: [
      "/images/productos/frijoles/frijol_azufrado/CEREAZUCAR B-014.jpg",
      "/images/productos/frijoles/frijol_azufrado/2.jpg",
    ],
  },
  {
    slug: "frijol-bayo",
    name: "Frijol Bayo",
    category: "Leguminosas",
    description:
      "Frijol bayo seleccionado, de grano uniforme y textura excepcional. Uno de los más consumidos en México por su sabor cremoso al cocinarse.",
    presentations: ["1kg", "5kg", "25kg"],
    cover: "/images/productos/frijoles/frijol_bayo/CEREAZUCAR B-016.jpg",
    gallery: [
      "/images/productos/frijoles/frijol_bayo/CEREAZUCAR B-016.jpg",
      "/images/productos/frijoles/frijol_bayo/1.jpg",
    ],
  },
  {
    slug: "frijol-flor-de-mayo",
    name: "Frijol Flor de Mayo",
    category: "Leguminosas",
    description:
      "Frijol flor de mayo, uno de los favoritos en la cocina mexicana. Su coloración moteada y sabor suave lo hacen perfecto para caldos y guisados.",
    presentations: ["1kg", "5kg", "25kg"],
    cover: "/images/productos/frijoles/frijol_flor_de_mayo/CEREAZUCAR B-012.jpg",
    gallery: [
      "/images/productos/frijoles/frijol_flor_de_mayo/CEREAZUCAR B-012.jpg",
      "/images/productos/frijoles/frijol_flor_de_mayo/3.jpg",
    ],
  },
  {
    slug: "frijol-peruano",
    name: "Frijol Peruano",
    category: "Leguminosas",
    description:
      "Frijol peruano de grano mantequilloso y textura cremosa, perfecto para guisados, sopas y frijoles fritos. Alta demanda en el mercado nacional.",
    presentations: ["1kg", "5kg", "25kg"],
    cover: "/images/productos/frijoles/frijol_peruano/CEREZACUCAR-017.jpg",
    gallery: [
      "/images/productos/frijoles/frijol_peruano/CEREZACUCAR-017.jpg",
      "/images/productos/frijoles/frijol_peruano/6.jpg",
    ],
  },
  {
    slug: "frijol-texano",
    name: "Frijol Texano",
    category: "Leguminosas",
    description:
      "Frijol texano de coloración rojiza característica, ideal para cocidos, frijoles de olla y guisos. Sabor robusto y consistencia firme tras la cocción.",
    presentations: ["1kg", "5kg", "25kg"],
    cover: "/images/productos/frijoles/frijol_texano/CEREZACUCAR-016.jpg",
    gallery: [
      "/images/productos/frijoles/frijol_texano/CEREZACUCAR-016.jpg",
      "/images/productos/frijoles/frijol_texano/5.jpg",
    ],
  },
  {
    slug: "abarrotes",
    name: "Abarrotes",
    category: "Abarrotes",
    description:
      "Surtido de abarrotes de alta rotación para tiendas y comercios. Incluye Papel Higiénico Hogar, Galletas Marianitas, Galletas Animalitos y Cartera de Huevo.",
    presentations: ["Paquete", "Caja", "Cartera"],
    cover: "/images/productos/abarrotes/abarrotes.jpg",
    gallery: [
      "/images/productos/abarrotes/abarrotes.jpg",
      "/images/productos/abarrotes/abarrotes2.jpg",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
