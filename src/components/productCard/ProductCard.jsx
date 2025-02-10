import React from "react";
import s from "./ProductCard.module.css";
import vector from "../../badges/Basket.png";
import basket from "../../badges/Vector.png";

export default function ProductCard({ image, title, discont_price, price }) {
  // Если имеется скидка, высчитывается её процент
  const discountPercentage =
    price && discont_price
      ? Math.round(((price - discont_price) / price) * 100)
      : null;
  return (
    <div className={s.cardsContainer}>
      <img src={`http://localhost:3333${image}`} alt={title}></img>
      <p className={s.itemName}>{title}</p>
      <p className={s.actualPrice}>
        {`$${discont_price}`}
        <span className={s.oldPrice}>{`$${price}`}</span>
      </p>
      {/* Если есть скидка, показываем плашку со скидкой*/}
      {discountPercentage > 0 && (
        <div className={s.discountBadge}>{discountPercentage}%</div>
      )}
      <div className={s.badgesContainer}>
        <img src={vector} alt="" />
        <img src={basket} alt="" />
      </div>
    </div>
  );
}
