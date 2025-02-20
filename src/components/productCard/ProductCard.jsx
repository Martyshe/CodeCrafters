import React, { useState } from "react";
import s from "./ProductCard.module.css";
import { back } from "../../constants";
import cartIcon from "../../badges/basketCardEmpty.svg";
import heartIcon from "../../badges/Vector.svg";
import IconButton from "../iconComponent/IconButton";
export default function ProductCard({ image, title, discont_price, price }) {
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleCartClick = () => setIsInCart(!isInCart);
  const handleFavoriteClick = () => setIsFavorite(!isFavorite);
  const discountPercentage =
    price && discont_price
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

      return (
        <div className={s.cardsContainer}>
          <img src={`${back}${image}`} alt={title}></img>
          <p className={s.itemName}>{title}</p>
          {price && discont_price && (
            <p className={s.actualPrice}>
              {`$${discont_price}`}
              <span className={s.oldPrice}>{`$${price}`}</span>
            </p>
          )}
          {!discont_price && <p className={s.actualPrice}>{`$${price}`}</p>}
          {discountPercentage > 0 && (
            <div className={s.discountBadge}>{discountPercentage}%</div>
          )}
          <div className={s.badgesContainer}>
            <IconButton 
              iconSrc={cartIcon} 
              altText="Add to Cart" 
              isActive={isInCart} 
              onClick={handleCartClick} 
            />
            <IconButton 
              iconSrc={heartIcon} 
              altText="Add to Favorites" 
              isActive={isFavorite} 
              onClick={handleFavoriteClick} 
            />
          </div>
        </div>
      );
    }