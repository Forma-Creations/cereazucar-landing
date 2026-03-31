"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Product } from "@/app/_data/products";

interface CartItem {
  product: Product;
  cantidad: string;
}

interface CotizacionContextType {
  items: CartItem[];
  isOpen: boolean;
  add: (product: Product) => void;
  remove: (slug: string) => void;
  setCantidad: (slug: string, cantidad: string) => void;
  open: () => void;
  close: () => void;
  clear: () => void;
}

const CotizacionContext = createContext<CotizacionContextType | null>(null);

export function CotizacionProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add = useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.find((i) => i.product.slug === product.slug)) return prev;
      return [...prev, { product, cantidad: "" }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }, []);

  const setCantidad = useCallback((slug: string, cantidad: string) => {
    setItems((prev) => prev.map((i) => i.product.slug === slug ? { ...i, cantidad } : i));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  return (
    <CotizacionContext.Provider value={{ items, isOpen, add, remove, setCantidad, open: () => setIsOpen(true), close: () => setIsOpen(false), clear }}>
      {children}
    </CotizacionContext.Provider>
  );
}

export function useCotizacion() {
  const ctx = useContext(CotizacionContext);
  if (!ctx) throw new Error("useCotizacion must be used within CotizacionProvider");
  return ctx;
}
