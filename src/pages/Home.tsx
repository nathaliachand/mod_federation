import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.scss";
import Header from "itemsdetail/Header";
import Footer from "itemsdetail/Footer";
import SearchBar from "itemsdetail/SearchBar";
import ModalsShowDataCart from "itemsdetail/ModalsShowDataCart";
import { ModalStoreDataCart } from "itemsdetail/ModalStoreDataCart";
import useDataCart from "itemsdetail/useDataCart";

import SideBarFilter from "itemsdetail/SideBarFilter";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import { useProducts } from "../hooks/useProducts";
import { useFilterAndSearch } from "itemsdetail/useFilterAndSearch";
import { useAtom } from "jotai";

export const Home = () => {
  const { dataProduct, isLoading, error } = useProducts();

  const { Data } = useFilterAndSearch(dataProduct);
  const [boolShowDataCart] = useAtom(ModalStoreDataCart);

  return (
    <div>
      {boolShowDataCart && <ModalsShowDataCart />}
      <Header />
      <div className="px-20 pt-10">
        <Banner />
        <div className="pt-10">
          <SearchBar />
        </div>

        <div className="flex">
          <div className="mt-10">
            <SideBarFilter />
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10 pl-8">
            {Data &&
              Data.map((el: any) => {
                return <Cards product={el} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
