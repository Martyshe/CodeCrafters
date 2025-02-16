import React, { useEffect, useState } from "react";
import ProductCard from "../../productCard/ProductCard";
import s from "./SaleSection.module.css";

export default function SaleSection({ amount }) {
  const [discountItem, setDiscountItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/products/all")
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
    </div>
  );
}
