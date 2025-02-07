import React, { useEffect, useState } from "react";
import s from "./Categories.module.css";
import CategoryCard from "../../categoryCard/CategoryCard";

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/categories/all")
      .then((response) => response.json())
      .then( data => console.log(data))
      .then((data) => {
        
          const slicedCategories = data.slice(0, 4);

          setCategory(slicedCategories);
      })
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <h2>Categories</h2>
        </div>
        <div className={s.lineButtonCont}>
          {/* Линия, ведущая к кнопке 'All sales' */}
          <div className={s.line}></div> 
          <div>
            <button>All categories </button>
          </div>
        </div>
      </div>
      <div className={s.cardsContainer}>
        {category.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
