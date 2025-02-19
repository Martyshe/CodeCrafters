// /**
//  * Принимает проп onFilterChange, который вызывается при изменении фильтров.
//  * priceFrom и priceTo – для хранения минимальной и максимальной цены.
//  * discounted – флаг, включены ли скидки.
//  * sortOrder – текущее состояние сортировки.
//  * Создает два поля ввода для цен (от и до).
//  * Использует styles.filterGroup для группировки элементов.
//  * Создает чекбокс "Discounted items".
//  * Позволяет выбирать способ сортировки.
//  * 
//  */

import { useState, useEffect } from "react";
import styles from "./ProductsFilter.module.css";

const ProductsFilter = ({ onFilterChange }) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [discounted, setDiscounted] = useState(false);
  const [sortOrder, setSortOrder] = useState("by default");

  // Автоматически применяем фильтры при изменении любого из состояний
  useEffect(() => {
    onFilterChange({ priceFrom, priceTo, discounted, sortOrder });

    // Прокрутка к началу списка товаров
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scroll({ behavior: "smooth" });
    }
  }, [priceFrom, priceTo, discounted, sortOrder]);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterContainerProducts}>
        <div className={styles.filterGroup}>
          <span>Price</span>
          <input
            type="number"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            placeholder="from"
            className={`${styles.input} ${styles.inputFrom}`}
          />
          <input
            type="number"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            placeholder="to"
            className={`${styles.input} ${styles.inputTo}`}
          />
        </div>

        <div className={styles.checkboxContainer}>
          <span>Discounted items</span>
          <input
            type="checkbox"
            checked={discounted}
            onChange={() => setDiscounted(!discounted)}
            className={styles.inputDiscounted}
          />
        </div>

        <div className={styles.filterGroup}>
          <span>Sorted</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={styles.select}
          >
            <option value="by default">by default</option>
            <option value="descending price">descending price</option>
            <option value="ascending price">ascending price</option>
            <option value="alphabetically">alphabetically</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;