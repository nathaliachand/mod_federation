import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Detail from "../pages/Detail";
import Add from "itemsdetail/ModalsShowDataCart";

export default function Cards({ product }) {
  return (
    // <div className="pt-10 p-5 grid grid-cols-3 gap-12">
    <div key={product.id}>
      <Link to={`detail/${product.id}`}>
        <Card className="p-5 h-96 max-w-sm max-h-96 dark:bg-white">
          <div className="flex items-center justify-center pb-5">
            <img src={product.image} className="max-h-36 w-24" />
          </div>
          <a href="/detail">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900">
              {product.title}
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 ">
              ${product.price}
            </span>
          </div>
        </Card>
      </Link>

      {/* <Link to="/detail">
              <a>abfjasbfjasbfbasfhj</a>
            </Link> */}
    </div>
    // </div>
  );
}
