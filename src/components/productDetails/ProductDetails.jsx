// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import s from "./ProductDetails.module.css";

// export default function ProductDetails() {
//   const { id } = useParams(); // Получаем ID товара из URL
//   const product = useSelector(state =>
//     state.products.items.find(item => item.id === Number(id))
//   );

//   useEffect(() => {
//     if (!product) {
//       // Если товар не найден, возможно нужно загрузить его
//       console.error('Товар не найден в Redux или еще не загружен');
//     }
//   }, [product]);

//   if (!product) {
//     return <p>Товар не найден</p>;
//   }

//   return (
//     <div className={s.productDetails}>
//       <img src={product.image} alt={product.title} />
//       <h1>{product.title}</h1>
//       <p>Цена: ${product.discont_price || product.price}</p>
//       {product.discont_price && <p>Старая цена: ${product.price}</p>}
//       <p>{product.description}</p>
//     </div>
//   );
// }


// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import s from "./ProductDetails.module.css";

// export default function ProductDetails() {
//   const { id } = useParams(); // Получаем ID товара из URL
//   const product = useSelector(state =>
//     state.products.items.find(item => item.id === Number(id))
//   );

//   useEffect(() => {
//     if (!product) {
//       // Если товар не найден, возможно нужно загрузить его
//       console.error('Товар не найден в Redux или еще не загружен');
//     }
//   }, [product]);

//   // Проверяем, если товар не найден, выводим сообщение
//   if (!product) {
//     return <p>Товар не найден</p>;
//   }

//   // Формируем путь для изображения и логируем его
//   const imageUrl = product.image || "path_to_placeholder_image"; // Заменяем на заглушку, если нет изображения
//   console.log("ProductDetails Image URL:", imageUrl);  // Логирование пути

//   return (
//     <div className={s.productDetails}>
//       <img src={imageUrl} alt={product.title} />
//       <h1>{product.title}</h1>
//       <p>Цена: ${product.discont_price || product.price}</p>
//       {product.discont_price && <p>Старая цена: ${product.price}</p>}
//       <p>{product.description}</p>
//     </div>
//   );
// }



import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./ProductDetails.module.css";
import { back } from "../../constants"; // Ваш базовый URL для изображений

export default function ProductDetails() {
  const { id } = useParams(); // Получаем ID товара из URL
  const product = useSelector(state =>
    state.products.items.find(item => item.id === Number(id))
  );

  useEffect(() => {
    if (!product) {
      // Если товар не найден, возможно нужно загрузить его
      console.error('Товар не найден в Redux или еще не загружен');
    }
  }, [product]);

  // Проверяем, если товар не найден, выводим сообщение
  if (!product) {
    return <p>Товар не найден</p>;
  }

  // Формируем путь для изображения с добавлением базового URL
  const imageUrl = product.image ? `${back}${product.image}` : "path_to_placeholder_image"; // Заменяем на заглушку, если нет изображения
  console.log("ProductDetails Image URL:", imageUrl);  // Логирование пути

  return (
    <div className={s.productDetails}>
      <img style={{height: '300px'}} src={imageUrl} alt={product.title} />
      <h1>{product.title}</h1>
      <p>Цена: ${product.discont_price || product.price}</p>
      {product.discont_price && <p>Старая цена: ${product.price}</p>}
      <p>{product.description}</p>
    </div>
  );
}
