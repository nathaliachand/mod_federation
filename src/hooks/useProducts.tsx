import { DataProduct } from "../api/data/dataProduct";
import { getProducts } from "../store/getProducts";

import { useQuery } from "react-query";
export const useProducts = () => {
  // const { products, fetchProducts } = getProducts();
  // console.log(products);
  // return { products, fetchProducts };
  const {
    data: dataProduct,
    isLoading,
    error,
  } = useQuery("dataProduct", DataProduct);

  return {
    dataProduct,
    isLoading,
    error,
  };
};
