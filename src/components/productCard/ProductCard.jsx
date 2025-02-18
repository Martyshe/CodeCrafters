import React from "react";
import s from "./ProductCard.module.css";
import { back } from "../../constants";
import basketCardEmpty from "../../badges/basketCardEmpty.svg";
import heart from "../../badges/Vector.svg"
import ProductBreadcrumbs from "../productBreadcrumbs/Breadcrumbs";


export default function ProductCard({ image, title, discont_price, price }) {

  // Если имеется скидка, высчитывается её процент
  const discountPercentage =
    price && discont_price
      ? Math.round(((price - discont_price) / price) * 100)
      : null;
  return (
    <div className={s.cardsContainer}>
       <img src={`${back}${image}`} alt={title}></img>
      {/* <div className={s.divideLine}></div> */}
      <p className={s.itemName}>{title}</p>
      {/* Если есть скидка показываем две цены */}
      {price && discont_price && (
        <p className={s.actualPrice}>
          {`$${discont_price}`}
          <span className={s.oldPrice}>{`$${price}`}</span>
        </p>
      )}
      {/* Если нет скидки показываем одну цену */}

      {!discont_price && <p className={s.actualPrice}>{`$${price}`}</p>}

      {/* Если есть скидка, показываем плашку со скидкой*/}
      {discountPercentage > 0 && (
        <div className={s.discountBadge}>{discountPercentage}%</div>
      )}
      <div className={s.badgesContainer}>
        <img src={basketCardEmpty} alt="" />
        <img src={heart} alt="" />
      </div>
    </div>
  );
}
