
// useState:products-хранит полный список товаров,
// filteredProducts-хранит отфильтрованный и отсортированный список товаров,
// filters-хранит текущие настройки фильтрации


import { useState, useEffect } from "react";
import { back } from "../../constants";

export function useProductFilter(initialFilters, selectedCategory = null, externalProducts = null) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  // Если передан externalProducts, используем их вместо загрузки с сервера
  useEffect(() => {
    if (externalProducts) {
      setProducts(externalProducts);
      setFilteredProducts(externalProducts);
    } else {
      // Загрузка только если externalProducts не переданы
      fetch(`${back}/products/all`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
        })
        .catch((error) => console.error("Ошибка загрузки:", error));
    }
  }, [externalProducts]); // Зависимость от externalProducts

  // Эффект для применения фильтров
  useEffect(() => {
    const applyFiltersAndSort = () => {
      let filtered = [...products];

      if (selectedCategory) {
        filtered = filtered.filter((product) => product.categoryId === selectedCategory);
      }

      // Фильтрация по цене
      if (filters.priceFrom) {
        filtered = filtered.filter((product) => 
          (product.discont_price || product.price) >= Number(filters.priceFrom)
        );
      }
      if (filters.priceTo) {
        filtered = filtered.filter((product) => 
          (product.discont_price || product.price) <= Number(filters.priceTo)
        );
      }

      // Фильтр распродаж
      if (filters.discounted) {
        filtered = filtered.filter((product) => product.discont_price !== null);
      }

      // Сортировка
      switch (filters.sortOrder) {
        case "descending price":
          filtered.sort((a, b) => 
            (b.discont_price || b.price) - (a.discont_price || a.price)
          );
          break;
        case "ascending price":
          filtered.sort((a, b) => 
            (a.discont_price || a.price) - (b.discont_price || b.price)
          );
          break;
        case "alphabetically":
          filtered.sort((a, b) => a.title?.localeCompare(b.title));
          break;
        default:
          break;
      }

      setFilteredProducts(filtered);
    };

    applyFiltersAndSort();
  }, [filters, products, selectedCategory]);
//Позволяет обновлять фильтры динамически. 
// Она принимает новый объект фильтров и объединяет его с текущими
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    filteredProducts,
    handleFilterChange,
  };
}