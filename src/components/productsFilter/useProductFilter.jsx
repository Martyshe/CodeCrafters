import { useState, useEffect } from "react";
import { back } from "../../constants";


export function useProductFilter(initialFilters) {
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
    console.log("Applying filters and sort:", filters); 
    applyFiltersAndSort();
  }, [filters, products]);


  const applyFiltersAndSort = () => {
    let filtered = [...products];

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
        filtered.sort((a, b) => {
          if (a.title && b.title) {
            return a.title.localeCompare(b.title);
          }
          return 0; 
        });
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