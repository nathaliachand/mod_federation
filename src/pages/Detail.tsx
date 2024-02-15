import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonAddToCart from "itemsdetail/ButtonAddToCart";
import ModalSuccessAddToCart from "itemsdetail/ModalSuccessAddToCart";
import { ModalsAddCart } from "itemsdetail/ModalsAddCart";
console.log(ModalsAddCart);
import { useAtom } from "jotai";

interface Item {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Detail = () => {
  const { id } = useParams();
  const [item, setItems] = useState<Item>();

  const [modal, setModal] = useAtom(ModalsAddCart);
  console.log(modal);

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();

      if (data.id) {
        setItems(data);
      }
    };

    fetchDetail();
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 2500);
  }, []);

  if (!item) {
    return <a></a>;
  }

  return (
    <div>
      {modal && <ModalSuccessAddToCart />}

      <div className="flex p-40">
        <div className="flex justify-left pb-5 pr-20">
          <img src={item.image} className="max-h-64 w-50" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl pt-5">{item.title}</h2>
          <p className="text-lg pt-5">{item.description}</p>
          <p className="pt-8 text-xl">${item.price}</p>
          <div className="pt-10">
            <ButtonAddToCart Data={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
