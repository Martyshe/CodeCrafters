
import React, { useState, useEffect } from "react";
import ProductList from "../components/productList/ProductList";
import ProductsFilter from "../components/productsFilter/ProductsFilter";
import { back } from "../constants";



export default function AllProductsPage() {

  const [products, setProducts] = useState([]); // Все продукты
  const [filteredProducts, setFilteredProducts] = useState([]); // Отфильтрованные продукты
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sortOrder: "by default",
  });

  // Загрузка продуктов с сервера
  useEffect(() => {
    fetch(`${back}/products/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from server:", data); // Логирование данных с сервера
        setProducts(data);
        setFilteredProducts(data); // Инициализация отфильтрованных продуктов
      })
      .catch((error) => alert("Ошибка:", error));
  }, []);



  // Применение фильтров и сортировки при изменении фильтров или продуктов
  useEffect(() => {
    console.log("Applying filters and sort:", filters); // Логирование фильтров
    applyFiltersAndSort();
  }, [filters, products]);

  // Функция для применения фильтров и сортировки
  const applyFiltersAndSort = () => {
    let filtered = [...products];

    // Фильтрация по цене
    if (filters.priceFrom) {
      filtered = filtered.filter(
        (product) => product.price >= Number(filters.priceFrom)
      );
    }
    if (filters.priceTo) {
      filtered = filtered.filter(
        (product) => product.price <= Number(filters.priceTo)
      );
    }

    if (filters.discounted) {
      console.log("Filtering by discount"); // Логирование фильтрации по скидке
      filtered = filtered.filter( product => product.discont_price != null)
    }


    // Сортировка
    switch (filters.sortOrder) {
      case "descending price":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "ascending price":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "alphabetically":
        filtered.sort((a, b) => {
          if (a.title && b.title) {
            return a.title.localeCompare(b.title);
          }
          return 0; // Если name отсутствует, не меняем порядок
        });
        break;
      default:
        // По умолчанию сортировка не изменяется
        break;
    }

    console.log("Filtered products:", filtered); // Логирование отфильтрованных продуктов
    setFilteredProducts(filtered);
  };

  // Обработчик изменения фильтров
  const handleFilterChange = (newFilters) => {
    console.log("New filters:", newFilters); // Логирование новых фильтров
    setFilters(newFilters);
  };



  
  return (
    <div style={{padding: '2rem', color: '#424436'}}>
    
      <h2 style={{paddingBottom: '2rem'}}>All products</h2>
      <ProductsFilter onFilterChange={handleFilterChange} />
      <div id="products-section">
       { <ProductList products={filteredProducts} />}
      </div>
    </div>
  );
}



