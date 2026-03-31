import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/app/_data/products";

interface CartItem {
  product: Product;
  cantidad: string;
}

interface CotizacionStore {
  items: CartItem[];
  isOpen: boolean;
  add: (product: Product) => void;
  remove: (slug: string) => void;
  setCantidad: (slug: string, cantidad: string) => void;
  open: () => void;
  close: () => void;
  clear: () => void;
}

export const useCotizacion = create<CotizacionStore>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      add: (product) =>
        set((state) => {
          if (state.items.find((i) => i.product.slug === product.slug)) {
            return { isOpen: true };
          }
          return { items: [...state.items, { product, cantidad: "" }], isOpen: true };
        }),
      remove: (slug) =>
        set((state) => ({ items: state.items.filter((i) => i.product.slug !== slug) })),
      setCantidad: (slug, cantidad) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.product.slug === slug ? { ...i, cantidad } : i
          ),
        })),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      clear: () => set({ items: [] }),
    }),
    {
      name: "cotizacion",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
