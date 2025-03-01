// import { useState, useEffect } from "react";
// import { back } from "../../constants";

// export function useProductFilter(initialFilters, selectedCategory = null) {
//   const [products, setProducts] = useState([]); 
//   const [filteredProducts, setFilteredProducts] = useState([]); 
//   const [filters, setFilters] = useState(initialFilters);

//   useEffect(() => {
//     fetch(`${back}/products/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Data from server:", data); 
//         setProducts(data);
//         setFilteredProducts(data); 
//       })
//       .catch((error) => alert("Ошибка:", error));
//   }, []);

//   useEffect(() => {
//     console.log("Applying filters and sort:", filters, "Selected category:", selectedCategory);
//     applyFiltersAndSort();
//   }, [filters, products, selectedCategory]); // Добавили зависимость от selectedCategory

//   const applyFiltersAndSort = () => {
//     let filtered = [...products];

//     // Фильтрация по категории, если она выбрана
//     if (selectedCategory) {
//       filtered = filtered.filter((product) => product.categoryId === selectedCategory);
//     }

//     if (filters.priceFrom) {
//       filtered = filtered.filter((product) => product.price >= Number(filters.priceFrom));
//     }
//     if (filters.priceTo) {
//       filtered = filtered.filter((product) => product.price <= Number(filters.priceTo));
//     }

//     if (filters.discounted) {
//       console.log("Filtering by discount"); 
//       filtered = filtered.filter((product) => product.discont_price != null);
//     }

//     switch (filters.sortOrder) {
//       case "descending price":
//         filtered.sort((a, b) => b.price - a.price);
//         break;
//       case "ascending price":
//         filtered.sort((a, b) => a.price - b.price);
//         break;
//       case "alphabetically":
//         filtered.sort((a, b) => (a.title && b.title ? a.title.localeCompare(b.title) : 0));
//         break;
//       default:
//         break;
//     }

//     console.log("Filtered products:", filtered); 
//     setFilteredProducts(filtered);
//   };

//   const handleFilterChange = (newFilters) => {
//     console.log("New filters:", newFilters);
//     setFilters(newFilters);
//   };

//   return {
//     filteredProducts,
//     handleFilterChange,
//   };
// }


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

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    filteredProducts,
    handleFilterChange,
  };
}