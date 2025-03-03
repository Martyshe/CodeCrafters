import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useProductFilter } from "../../components/productsFilter/useProductFilter";
import ProductsFilter from "../../components/productsFilter/ProductsFilter";
import ProductList from "../../components/productList/ProductList";
import s from "./FavoritesPage.module.css";
import Skeleton from "../../components/skeleton/Skeleton";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites?.items || []);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setShowSkeleton(false);
    }, 500);
  }, []);

  const initialFilters = {
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sortOrder: "by default",
  };

  const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters, null, favorites);

  return (
    <div style={{ padding: "2rem", color: "#424436" }}>
      <h2 style={{ paddingBottom: "2rem", paddingLeft:'2rem', paddingTop: '2rem' }}>Favorites</h2>

      {favorites.length === 0 ? (
        <div className={s.emptyState}>
          <p>Вы пока не добавили ни одного товара в избранное</p>
        </div>
      ) : (
        <>
          <ProductsFilter onFilterChange={handleFilterChange} hideDiscountedCheckbox />
          {showSkeleton ? <Skeleton /> : <ProductList products={filteredProducts} />}
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
