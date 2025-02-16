import React, { useEffect, useState } from "react";
import s from "./ProductList.module.css";
import { back } from "../../constants";
import ProductCard from "../productCard/ProductCard";

export default function ProductList() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`${back}/products/all`)
      .then((response) => response.json())
      // .then( data => console.log(data))
      .then((data) => setItem(data))
      .catch((error) => alert("Ошибка:", error));
  }, []);
  return (
    <div className={s.cardsContainer}>
      {item.map((el) => (
        <ProductCard key={el.id} {...el} />
      ))}
    </div>
  );
}
