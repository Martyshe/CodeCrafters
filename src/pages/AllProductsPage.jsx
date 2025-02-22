// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { setProducts } from '../redux/productsSlice';
// import ProductList from '../components/productList/ProductList';
// import { back } from '../constants';

// const AllProductsPage = () => {
//   const dispatch = useDispatch();
//   const products = useSelector(state => state.products.items);

//   useEffect(() => {
//     if (products.length === 0) {
//       // Если список продуктов пуст, делаем запрос и загружаем их
//       fetchProducts();
//     }
//   }, [products]);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(`${back}/products/all`); // или ваш API
//       const data = await response.json();
//       dispatch(setProducts(data));
//     } catch (error) {
//       console.error("Ошибка загрузки продуктов:", error);
//     }
//   };

//   return (
//     <div>
//       {/* Отображаем список продуктов */}
//       <ProductList products={products} />
//     </div>
//   );
// };
// export default AllProductsPage;


import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setProducts } from '../redux/productsSlice';
import ProductList from '../components/productList/ProductList';
import ProductsFilter from '../components/productsFilter/ProductsFilter';
import { useProductFilter } from '../components/productsFilter/useProductFilter';
import { back } from '../constants';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  // Фильтры по умолчанию
  const initialFilters = {
    priceFrom: '',
    priceTo: '',
    discounted: false,
    sortOrder: 'by default',
  };

  // Используем хук фильтрации, передаем в него `products` из Redux
  const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters, null, products);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${back}/products/all`);
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.error("Ошибка загрузки продуктов:", error);
    }
  };

  return (
    <div style={{ padding: '2rem', color: '#424436' }}>
      <h2 style={{ paddingBottom: '2rem' }}>All Products</h2>
      {/* Фильтр */}
      <ProductsFilter onFilterChange={handleFilterChange} />
      {/* Отображаем фильтрованные товары */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default AllProductsPage;
