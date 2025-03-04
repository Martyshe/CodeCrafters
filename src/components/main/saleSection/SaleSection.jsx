import React, { useEffect, useState } from "react";
import ProductCard from "../../productCard/ProductCard";
import s from "./SaleSection.module.css";
import { back } from "../../../constants";

export default function SaleSection({ amount ,products = []}) {
  const [discountItem, setDiscountItem] = useState([]);

  const displayedProducts = Array.isArray(products) ? products.slice(0, amount) : [];

  useEffect(() => {
    fetch(`${back}/products/all`)
      .then((response) => response.json())
      // .then( data => console.log(data))
      .then((data) => {
        // Фильтруем только товары со скидкой
        const discountedItems = data.filter((el) => el.discont_price);

        // Перемешиваем массив и берем 4 случайных элемента
        const randomItems = discountedItems
          .sort(() => Math.random() - 0.5)
          .slice(0, amount);

        setDiscountItem(randomItems);
      })
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  return (
    <div className={s.container}>
      <div className={s.cardsContainer}>
        {discountItem.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
         <div className={s.cardsContainer}>
         {displayedProducts.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}




