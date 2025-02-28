import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./ProductDetails.module.css";
import { back } from "../../constants";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Состояние для модального окна

  useEffect(() => {
    fetch(`${back}/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]);
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки товара:", error);
        setError("Ошибка загрузки данных.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Товар не найден</p>;

  const imageUrl = product.image ? `${back}${product.image}` : "placeholder.jpg";
  const isDescriptionLong = product.description.length > 300;
  const truncatedDescription =
    isDescriptionLong && !showFullDescription
      ? product.description.slice(0, 600) + "..."
      : product.description;

  return (
    <div className={s.productDetails}>
      {/* Изображение */}
      <div className={s.imageContainer} onClick={() => setIsImageModalOpen(true)}>
        <img src={imageUrl} alt={product.title} className={s.productImage} />
      </div>

      {/* Модальное окно для увеличенного изображения */}
      {isImageModalOpen && (
        <div className={s.modalOverlay} onClick={() => setIsImageModalOpen(false)}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt={product.title} className={s.enlargedImage} />
          </div>
        </div>
      )}

      {/* Название товара и цена */}
      <div className={s.titlePriceContainer}>
        <h1 className={s.productTitle}>{product.title}</h1>
      </div>
      <div className={s.priceContainer}>
        <span className={s.discountPrice}>${product.discont_price || product.price}</span>
        {product.discont_price && <span className={s.oldPrice}>${product.price}</span>}
        {product.discont_price && (
          <span className={s.discountBadge}>
            -{Math.round(100 - (product.discont_price / product.price) * 100)}%
          </span>
        )}
      </div>

      {/* Кнопки для количества и добавления в корзину */}
      <div className={s.cartContainer}>
        <div className={s.quantityContainer}>
          <button
            className={s.quantityButton}
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          >
            -
          </button>
          <span className={s.quantityNumber}>{quantity}</span>
          <button
            className={s.quantityButton}
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className={s.AddToCartButtonWrapper}>
          <button className={s.addToCartButton}>Add to cart</button>
        </div>
      </div>

      {/* Описание товара */}
      <div className={s.descriptionContainer}>
        <h3>Description</h3>
        <p className={s.productDescription}>
          {truncatedDescription}
          {isDescriptionLong && (
            <button
              className={s.readMoreButton}
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
