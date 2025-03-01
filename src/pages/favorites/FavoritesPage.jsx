// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useProductFilter } from '../components/productsFilter/useProductFilter';
// import ProductsFilter from '../components/productsFilter/ProductsFilter';
// import ProductList from '../components/productList/ProductList';
// import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

// const FavoritesPage = () => {
//   const favorites = useSelector(state => state.favorites.items);
//   const initialFilters = {
//     priceFrom: '',
//     priceTo: '',
//     discounted: false,
//     sortOrder: 'by default',
//   };

//   const { filteredProducts, handleFilterChange } = useProductFilter(
//     initialFilters,
//     null,
//     favorites
//   );

//   return (
//     <div style={{ padding: '2rem', color: '#424436' }}>
//       <Breadcrumbs />
//       <h2 style={{ paddingBottom: '2rem' }}>Favorites</h2>
//       <ProductsFilter onFilterChange={handleFilterChange} />
//       <ProductList products={filteredProducts} />
//     </div>
//   );
// };

// export default FavoritesPage;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useProductFilter } from '../../components/productsFilter/useProductFilter';
// import ProductsFilter from '../../components/productsFilter/ProductsFilter';
// import ProductList from '../../components/productList/ProductList';
// import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
// import s from './FavoritesPage.module.css';

// const FavoritesPage = () => {
//   // Получаем ТОЛЬКО избранные товары из Redux
//   const favorites = useSelector(state => state.favorites?.items || []);

//   // Фильтруем ТОЛЬКО избранные товары
//   const initialFilters = {
//     priceFrom: '',
//     priceTo: '',
//     discounted: false,
//     sortOrder: 'by default',
//   };

//   const { filteredProducts, handleFilterChange } = useProductFilter(
//     initialFilters,
//     null,
//     favorites // Передаем только избранные товары
//   );

//   return (
//     <div className={s.container}>
//       <Breadcrumbs />
//       <h1>Избранное</h1>

//       {favorites.length === 0 ? (
//         <div className={s.emptyState}>
//           <p>Вы пока не добавили ни одного товара в избранное</p>
//         </div>
//       ) : (
//         <>
//           <ProductsFilter onFilterChange={handleFilterChange} />
//           <ProductList products={filteredProducts} />
//         </>
//       )}
//     </div>
//   );
// };

// export default FavoritesPage;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useProductFilter } from "../../components/productsFilter/useProductFilter";
import ProductsFilter from "../../components/productsFilter/ProductsFilter";
import ProductList from "../../components/productList/ProductList";
import s from "./FavoritesPage.module.css";
import Skeleton from "../../components/skeleton/Skeleton";

const FavoritesPage = () => {
// Получаем избранные товары
const favorites = useSelector((state) => state.favorites?.items || []);

    const [showSkeleton, setShowSkeleton] = useState(true); // Состояние для скелетона
  const [isLoading, setIsLoading] = useState(true); // Состояние для загрузки

  useEffect(() => {
     
        // Если продукты уже загружены, скрываем скелетон через 2 секунды
        setTimeout(() => {
          setIsLoading(false);
          setShowSkeleton(false);
        }, 500);
      
    }, []);
  

  // Настройки фильтра
  const initialFilters = {
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sortOrder: "by default",
  };

  // Используем кастомный хук для фильтрации ТОЛЬКО избранных товаров
  const { filteredProducts, handleFilterChange } = useProductFilter(
    initialFilters,
    null,
    favorites // Основной источник данных - избранные товары
  );

  return (
    <div style={{ padding: "2rem", color: "#424436" }}>
      <h2 style={{ paddingBottom: "2rem" }}>Favorites</h2>

      {favorites.length === 0 ? (
        <div className={s.emptyState}>
          <p>Вы пока не добавили ни одного товара в избранное</p>
        </div>
      ) : (
        <>
          <ProductsFilter onFilterChange={handleFilterChange} hideDiscountedCheckbox    filterStyle={{
    paddingLeft: "2.25rem",
    borderRadius: "8px",
  }}/>
      {/* Отображаем скелетон, если showSkeleton равно true */}
      {showSkeleton ? (
        <Skeleton />
      ) : (
        <ProductList products={filteredProducts} />
      )}
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
