
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./ProductCard.module.css";
import { back } from "../../constants"; 
import cartIcon from "../../badges/basketCardEmpty.svg";
import heartIcon from "../../badges/Vector.svg";
import IconButton from "../iconComponent/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

export default function ProductCard({ id, image, title, discont_price, price }) {
    // меняет цвет кнопки при нажатии
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive((prev) => !prev);
    };
  


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart?.items || []);
  const isInCart = cartItems.some(item => item.id === id);

  const handleCartClick = (event) => {
    event.stopPropagation();
    if (isInCart) {
      // Если товар уже в корзине - удаляем
      dispatch(removeFromCart(id));
    } else {
      // Если нет - добавляем
      dispatch(addToCart({
        id,
        title,
        image,
        price: discont_price || price,
        originalPrice: price,
      }));
    }
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = (event) => {
    // event.stopPropagation(); // Предотвращаем переход при клике на иконку избранного
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Переход на страницу товара
  };

  const discountPercentage =
    price && discont_price
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

  // Формируем путь для изображения, добавляем базовый URL
  const imageUrl = `${back}${image}`;
  console.log("ProductCard Image URL:", imageUrl);  // Логирование пути

  return (
    <div className={s.cardsContainer} onClick={handleCardClick}>
      {/* Проверка, если путь неверный */}
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
        <div className={s.discountBadge}>{discountPercentage}%</div>
      )}

      <div className={s.badgesContainer}>
        <IconButton 
          iconSrc={cartIcon} 
          altText="Add to Cart" 
          isActive={isInCart} 
          onClick={(event) => {
            // event.stopPropagation();
            handleCartClick(event);
            handleClick();
          }} 
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

