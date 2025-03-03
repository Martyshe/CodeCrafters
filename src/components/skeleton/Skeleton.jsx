// components/Skeleton.js
import React from "react";
import s from "./Skeleton.module.css"; 

export default function Skeleton() {
  return (
    <div className={s.skeletonContainer}>
      {/* Заглушка для фильтров */}
      <div className={s.skeletonFilter}></div>

      {/* Заглушки для карточек товаров */}
      <div className={s.skeletonGrid}>
        {Array.from({ length: 11 }).map((_, index) => (
          <div key={index} className={s.skeletonCard}>
            <div className={s.skeletonImage}></div>
          </div>
        ))}
      </div>
    </div>
  );
}