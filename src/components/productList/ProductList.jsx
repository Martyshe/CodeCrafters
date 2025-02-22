import React from "react";
import s from "./ProductList.module.css";
import ProductCard from "../productCard/ProductCard";

export default function ProductList({ products }) {
  return (
    <div className={s.cardsContainer}>
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>Продукты не найдены.</p>
      )}
    </div>
  );
}

