import React, { useEffect, useState } from "react";
import s from "./CategoriesContainer.module.css";
import CategoryCard from "../../categoryCard/CategoryCard";
import { back } from "../../../constants";

export default function CategoriesContainer({ amount }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`${back}/categories/all`)
      .then((response) => response.json())
      .then((data) => {
        // Оставляем первые "amount" категории и запихиваем в State
        const slicedCategories = data.slice(0, amount);

        setCategory(slicedCategories);
      })
      .catch(() => alert("Перезагрузите страницу"));
  }, []);

  return (
    <div className={s.mainContainer}>
      <div className={s.categoriesContainer}>
        {category.map((el) => (
          <CategoryCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
