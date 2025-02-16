import React from "react";
import CategoriesContainer from "../../components/main/categories/CategoriesContainer";
import s from './CategoriesPage.module.css'
export default function CategoriesPage() {
  const style = {
    maxWidth: "100%",
    padding: "2rem",
    paddingBottom: "0",
    color: "#424436",
  };
  return (
    <div>
      <h2 style={style}>Categories</h2>
      <div className={s.cardsContainer}>
        <CategoriesContainer amount={5} />
      </div>
    </div>
  );
}
