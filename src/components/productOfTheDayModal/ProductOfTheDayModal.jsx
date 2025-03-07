



import React from "react";
import styles from "./ProductOfTheDayModal.module.css";
import { back } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addToFavorites, removeFromFavorites } from "../../redux/favoritesSlice";
import IconButton from "../iconComponent/IconButton";
import heartIcon from "../../badges/Vector.svg";


// Ты создала модальное окно, которое показывает товар дня со скидкой 50%. Пользователь может добавить этот товар в корзину.
// Как это работает:
// Заголовок: В модальном окне отображается заголовок "50% discount on product of the day!".
// Изображение товара: Ты используешь <img>, чтобы показать изображение товара. Путь к изображению формируется с помощью переменной back (базовый URL сервера).
// Цены: Ты показываешь старую цену и новую цену со скидкой 50%.
// Кнопка "Добавить в корзину": При нажатии на кнопку товар добавляется в корзину через Redux (dispatch(addToCart)), а модальное окно закрывается.
// Зачем это нужно:
// Модальное окно привлекает внимание пользователя к специальному предложению и стимулирует покупки. Это эффективный способ увеличить продажи.


const ProductOfTheDayModal = ({ product, closeModal }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

   // addToCart, addToFavorites, removeFromFavorites:
   // — Импортирую действия (actions) для работы с корзиной и избранным.
  const handleAddToCart = () => {
    dispatch(addToCart({ // — useDispatch нужен для отправки действий в Redux 
      id: product.id,
      title: product.title,
      image: product.image,
      price: `${(product.price / 2).toFixed(2)}`,
      originalPrice: product.price,
      quantity: 1
    }));
    closeModal();
  };

  const handleFavoriteClick = () => {
    const productData = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: (product.price / 2).toFixed(2),
      originalPrice: product.price,
    };
  
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(productData));
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.discountText}>50% discount on <br/> product of the day!</h2>
        <button className={styles.closeButton} onClick={closeModal}>&times;</button>
        
        <div className={styles.modalContent}>
          {/* Иконка избранного */}
          <div className={styles.favoriteButtonContainer}>
            <IconButton
              iconSrc={heartIcon}
              altText={isFavorite ? "Remove from favorites" : "Add to favorites"}
              isActive={isFavorite}
              onClick={handleFavoriteClick}
            />
          </div>

          <div className={styles.discountBadge}>-50%</div>
          <img src={`${back}${product.image}`} alt={product.name} className={styles.productImage} />
      
          <div className={styles.separator}></div>
          <div className={styles.productInfo}>
            <p className={styles.productName}>{product.title}</p>
          </div>

          <div className={styles.priceContainer}>
            <span className={styles.newPrice}>{(product.price / 2).toFixed(2)}$</span>
            <span className={styles.oldPrice}>{product.price}$</span>
          </div>
        </div>

        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductOfTheDayModal;



