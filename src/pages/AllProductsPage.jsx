
import React from "react";
import ProductList from "../components/productList/ProductList";
import ProductsFilter from "../components/productsFilter/ProductsFilter";
import { useProductFilter } from "../components/productsFilter/useProductFilter";

export default function AllProductsPage() {

  const initialFilters = {
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sortOrder: "by default",
  };


  const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters);

  return (
    <div style={{padding: '2rem', color: "#424436"}}>
      <h2 style={{paddingBottom: '2rem'}}>All products</h2>

      <ProductsFilter onFilterChange={handleFilterChange} />
      <div id="products-section">

        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}


