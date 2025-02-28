import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./ProductDetails.module.css";
import { back } from "../../constants";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
export default function ProductDetails() {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.discont_price || product.price,
      originalPrice: product.price,
      quantity: quantity // Используем выбранное количество
    }));
  };
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false); // Состояние для отображения полного описания
/**
  * id: Получает параметр id из URL 
product: Хранит данные о товаре.
loading: Указывает, идет ли загрузка данных.
error: Хранит сообщение об ошибке, если она возникла.
quantity: Количество товара для добавления в корзину.
showFullDescription: Управляет отображением полного или сокращенного описания товара.
  *
 */
  useEffect(() => {
    fetch(`${back}/products/${id}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]); // Берем первый элемент массива
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Ошибка загрузки товара:", error);
        setError("Ошибка загрузки данных.");
        setLoading(false);
      });
  }, [id]);

  /**
   * При монтировании компонента (или изменении id) выполняется запрос к API для получения данных о товаре.
Если данные успешно получены, они сохраняются в состоянии product.
Если данные не найдены, product устанавливается в null.
Если возникает ошибка, она сохраняется в состоянии error.
   */

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Товар не найден</p>;

  /**
   * Если данные загружаются, отображается сообщение Загрузка....
Если произошла ошибка, отображается сообщение об ошибке.
Если товар не найден, отображается сообщение Товар не найден.
   */

  const imageUrl = product.image ? `${back}${product.image}` : "placeholder.jpg";

  // Проверяем, нужно ли показывать кнопку "Read more"
  const isDescriptionLong = product.description.length > 300;

  // Обрезаем описание, если оно длинное и не раскрыто
  const truncatedDescription = isDescriptionLong && !showFullDescription
    ? product.description.slice(0, 600) + "..."
    : product.description;

/**
 * imageUrl: Формирует URL изображения товара. Если изображение отсутствует, используется placeholder.jpg.
isDescriptionLong: Проверяет, превышает ли длина описания 300 символов.
truncatedDescription: Если описание длинное и не раскрыто, оно обрезается до 600 символов с добавлением ....
 */

  return (
    // Отображает изображение товара. Если изображение отсутствует, используется placeholder.jpg.
    <div className={s.productDetails}>
      {/* Изображение */}
      <div className={s.imageContainer}>
        <img src={imageUrl} alt={product.title} className={s.productImage} />
      </div>

      {/* Отображает название товара.
          Если есть скидка (discont_price), отображается:
          Цена со скидкой.
          Старая цена (зачеркнутая).
          Бейдж скидки в процентах. */}
      {/* Название товара и цена */}
      <div className={s.titlePriceContainer}>
        <h1 className={s.productTitle}>{product.title}</h1>
        </div>
        <div className={s.priceContainer}>
          <span className={s.discountPrice}>${product.discont_price || product.price}</span>
          {product.discont_price && <span className={s.oldPrice}>${product.price}</span>}
          {product.discont_price && <span className={s.discountBadge}>-{Math.round(100 - (product.discont_price / product.price) * 100)}%</span>}
      </div>

      {/* Позволяет изменять количество товара (увеличивать или уменьшать).  */}
      {/* Кнопки для количества и добавления в корзину */}
      <div className={s.cartContainer}>
        <div className={s.quantityContainer}>
          <button className={s.quantityButton} onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}>-</button>
          <span className={s.quantityNumber}>{quantity}</span>
          <button className={s.quantityButton} onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <div className={s.AddToCartButtonWrapper}>
        <button className={s.addToCartButton} onClick={handleAddToCart}>
      Add to cart
    </button>
        </div>
      </div>

      {/* Если описание длинное, добавляется кнопка "Read more" для раскрытия полного текста. */}
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

