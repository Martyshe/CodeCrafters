import React from "react";
import s from "./CategoryCard.module.css";
import { back } from "../../constants";
export default function CategoryCard({ image, title }) {
  console.log();
  return (
    <div className={s.categoryCard}>
      <div>
        <img src={`${back}${image}`} alt={title}></img>
      </div>
      <p>{title}</p>
    </div>
  );
}
