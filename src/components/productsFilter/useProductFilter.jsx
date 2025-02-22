import { useState, useEffect } from "react";
import { back } from "../../constants";

export function useProductFilter(initialFilters, selectedCategory = null) {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    fetch(`${back}/products/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from server:", data); 
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch((error) => alert("Ошибка:", error));
  }, []);

  useEffect(() => {
    console.log("Applying filters and sort:", filters, "Selected category:", selectedCategory);
    applyFiltersAndSort();
  }, [filters, products, selectedCategory]); // Добавили зависимость от selectedCategory

  const applyFiltersAndSort = () => {
    let filtered = [...products];

    // Фильтрация по категории, если она выбрана
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.categoryId === selectedCategory);
    }

    if (filters.priceFrom) {
      filtered = filtered.filter((product) => product.price >= Number(filters.priceFrom));
    }
    if (filters.priceTo) {
      filtered = filtered.filter((product) => product.price <= Number(filters.priceTo));
    }

    if (filters.discounted) {
      console.log("Filtering by discount"); 
      filtered = filtered.filter((product) => product.discont_price != null);
    }

    switch (filters.sortOrder) {
      case "descending price":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "ascending price":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "alphabetically":
        filtered.sort((a, b) => (a.title && b.title ? a.title.localeCompare(b.title) : 0));
        break;
      default:
        break;
    }

    console.log("Filtered products:", filtered); 
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (newFilters) => {
    console.log("New filters:", newFilters);
    setFilters(newFilters);
  };

  return {
    filteredProducts,
    handleFilterChange,
  };
}
