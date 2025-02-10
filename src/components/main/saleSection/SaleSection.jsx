import React, { useEffect, useState } from "react";
import ProductCard from "../../productCard/ProductCard";
import s from "./SaleSection.module.css";

export default function SaleSection() {
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
          .slice(0, 4);

        setDiscountItem(randomItems);
      })
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <h2>Sale</h2>
        </div>
        <div className={s.lineButtonCont}>
          {/* Линия, ведущая к кнопке 'All sales' */}
          <div className={s.line}></div> 
          <div>
            <button>All sales</button>
          </div>
        </div>
      </div>
      <div className={s.cardsContainer}>
        {discountItem.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
