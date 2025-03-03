import React from "react";
import styles from "./ProductOfTheDayModal.module.css";
import { back } from "../../constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductOfTheDayModal = ({ product, closeModal }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price / 2, // 50% скидка
      originalPrice: product.price,
      quantity: 1
    }));
    closeModal();
  }; 

     
 
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        
        {/* Заголовок "50% discount" в зелёном блоке */}
        <h2 className={styles.discountText}>50% discount on <br/> product of the day!</h2>
        
        {/* Белый блок с товаром */}
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={closeModal}>&times;</button>
           {/* Значок скидки на картинке */}
            {/* {discountPercentage > 0 && (  */}
            <div className={styles.discountBadge}>-50%</div>
          {/* )} */}
          <img src={`${back}${product.image}`} alt={product.name} className={styles.productImage} />

          {/* Разделительная линия */}
          <div className={styles.separator}></div>
          {/* Контейнер для названия */}
          <div className={styles.productInfo}>
          
            <p className={styles.productName}>{product.title}</p>
          </div>

          {/* Цены */}
          <div className={styles.priceContainer}>
            <span className={styles.newPrice}>{(product.price / 2).toFixed(2)}$</span>
            <span className={styles.oldPrice}>{product.price}$</span>
          </div>
        </div>

        {/* Кнопка "Добавить в корзину" */}
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
      Add to cart
    </button>
      </div>
    </div>
  );
};

export default ProductOfTheDayModal;



