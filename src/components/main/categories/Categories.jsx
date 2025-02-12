import React, { useEffect, useState } from "react";
import s from "./Categories.module.css";
import CategoryCard from "../../categoryCard/CategoryCard";
import { back } from "../../../constants";

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`${back}/categories/all`)
      .then((response) => response.json())
      // .then( data => console.log(data))
      .then((data) => {
        // Оставляем первые 4 категории и запихиваем в State
          const slicedCategories = data.slice(0, 4);

          setCategory(slicedCategories);
      })
      .catch(() => alert('Перезагрузите страницу'));
  }, []);

  return (
    <div className={s.mainContainer}>
      <div className={s.header}>
        <div>
          <h2>Categories</h2>
        </div>
        <div className={s.lineButtonCont}>
          {/* Линия, ведущая к кнопке 'All categories' */}
          <div className={s.line}></div> 
          <div>
            <button>All categories </button>
          </div>
        </div>
      </div>
      <div className={s.categoriesContainer}>
        {category.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
