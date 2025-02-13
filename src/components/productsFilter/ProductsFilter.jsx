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
            productsSection.scrollIntoView({ behavior: "smooth" });
        }
    }, [priceFrom, priceTo, discounted, sortOrder]);

    return (
        <div className={styles.filterContainer}>
            <h2 className={styles.title}>Products Filter</h2>
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


    {/* <ProductsFilter onFilterChange={handleFilterChange} /> */}
    {/* <div>
            <ProductsFilter onFilterChange={handleFilterChange} />
            <div id="products-section">
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price} {product.discounted && "(Discounted)"}
                        </li>
                    ))}
                </ul>
            </div>
        </div> */}

        const [filters, setFilters] = useState({});
const [products, setProducts] = useState([]);

const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
    sortProducts(newFilters.sortOrder);
    console.log("Updated filters:", newFilters);
},[]);  

const sortProducts = (sortOrder) => {
  let sortedProducts = [...products];

  switch (sortOrder) {
      case "descending price":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
      case "ascending price":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
      case "alphabetically":
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
      default:
          // По умолчанию (by default) сортировка не изменяется
          break;
  }

  setProducts(sortedProducts);
};
