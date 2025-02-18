
import React from "react";
import ProductList from "../components/productList/ProductList";
import ProductsFilter from "../components/productsFilter/ProductsFilter";
import { useProductFilter } from "../components/productsFilter/useProductFilter";

export default function AllProductsPage() {
  // Инициализация начальных фильтров
  const initialFilters = {
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sortOrder: "by default",
  };

  // Используем кастомный хук для фильтрации и сортировки
  const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters);

  return (
    <div style={{padding: '2rem', color: "#424436"}}>
      <h2 style={{paddingBottom: '2rem'}}>All products</h2>
      {/* Передаем handleFilterChange в компонент ProductsFilter */}
      <ProductsFilter onFilterChange={handleFilterChange} />
      <div id="products-section">
        {/* Отображаем отфильтрованные продукты */}
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}