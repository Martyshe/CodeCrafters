import React from "react";
import SaleSection from "../components/main/saleSection/SaleSection";
import { useProductFilter } from "../components/productsFilter/useProductFilter";
import ProductsFilter from "../components/productsFilter/ProductsFilter";

export default function AllSalesPage() {

  // Инициализация начальных фильтров
  const initialFilters = {
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sortOrder: "by default",
  };

  // Используем кастомный хук для фильтрации и сортировки
  const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters);

  const style = {
    maxWidth: "100%",
    padding: "2rem",
    paddingBottom: "0",
    color: "#424436",
  };
  return (
    <div>
      <h2 style={style}>All sales</h2>
      <ProductsFilter onFilterChange={handleFilterChange} />
      <SaleSection amount={12} />
    </div>
  );
}