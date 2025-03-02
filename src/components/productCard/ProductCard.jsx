import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./ProductCard.module.css";
import { back } from "../../constants";
import cartIcon from "../../badges/basketCardEmpty.svg";
import heartIcon from "../../badges/Vector.svg";
import IconButton from "../iconComponent/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesSlice";

export default function ProductCard({
  id,
  image,
  title,
  discont_price,
  price,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Cart logic
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === id);

  // Favorites logic
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === id);

  const handleCartClick = (e) => {
    e.stopPropagation();
    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(
        addToCart({
          id,
          title,
          image,
          price: discont_price || price,
          originalPrice: price,
          quantity: 1,
        })
      );
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();

    const productData = {
      id,
      title,
      image,
      price: discont_price || price,
      originalPrice: price,
    };

    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(productData));
    }
  };


  const discountPercentage =
    price && discont_price
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

  // Формируем путь для изображения, добавляем базовый URL
  const imageUrl = `${back}${image}`;

  return (
    <div
      className={s.cardsContainer}
      onClick={() => navigate(`/${title}/${id}`)}
    >
      <img src={imageUrl} alt={title} />
      <div className={s.darkThemeWrapper}>
        <p className={s.itemName}>{title}</p>
        {price && discont_price && (
          <p className={s.actualPrice}>
            {`$${discont_price}`}
            <span className={s.oldPrice}>{`$${price}`}</span>
          </p>
        )}
        {!discont_price && <p className={s.actualPrice}>{`$${price}`}</p>}
      </div>
    
     
      {discountPercentage > 0 && (
        <div className={s.discountBadge}>-{discountPercentage}%</div>
      )}

      <div className={s.badgesContainer}>
        <IconButton
          iconSrc={cartIcon}
          altText={isInCart ? "Remove from cart" : "Add to cart"}
          isActive={isInCart}
          onClick={handleCartClick}
        />
        <IconButton
          iconSrc={heartIcon}
          altText={isFavorite ? "Remove from favorites" : "Add to favorites"}
          isActive={isFavorite}
          onClick={handleFavoriteClick}
        />
      </div>
    </div>
  );
}



