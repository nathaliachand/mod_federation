import { create } from "zustand";

export const getProducts = create((set, get) => ({
  products: [],
  fetchProducts: async () => {
    let products = await fetch(`https://fakestoreapi.com/products/`);
    let test = await products.json();
    set(test);
  },
}));
