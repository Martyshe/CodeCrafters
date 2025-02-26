import React, { useEffect, useState } from 'react';
import ProductList from '../components/productList/ProductList';
import { back } from '../constants';
import { useParams, useLocation } from 'react-router-dom';
import { useProductFilter } from '../components/productsFilter/useProductFilter';
import ProductsFilter from '../components/productsFilter/ProductsFilter';
import Skeleton from '../components/skeleton/Skeleton';

export default function Categories() {
  const { categoryId } = useParams();
  const location = useLocation();
  const numericCat = parseInt(categoryId, 10);
  const [products, setProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('All products');
  const [isFiltering, setIsFiltering] = useState(false); // Добавляем флаг фильтрации
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title');
    if (title) {
      setCategoryTitle(title);
    }
  }, [location.search]);

  useEffect(() => {
    fetch(`${back}/categories/${numericCat}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from server:', data.data);
        setProducts(data.data);

    // Устанавливаем задержку в 2 секунды перед скрытием скелетона
          setTimeout(() => {
          setIsLoading(false);
          setShowSkeleton(false);
        },2000);
      })
      .catch((error) => alert('Ошибка:', error));
  }, [numericCat]);

  const initialFilters = {
    priceFrom: '',
    priceTo: '',
    discounted: false,
    sortOrder: 'by default',
  };

  // Передаем products в хук фильтрации
  // const { filteredProducts, handleFilterChange } = useProductFilter(products, initialFilters);
  const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters, numericCat);

  // Функция для обновления состояния фильтрации
  const handleFilters = (filters) => {
    handleFilterChange(filters);
    setIsFiltering(true); // Активируем флаг фильтрации
  };

  return (
    <div style={{ padding: '2rem', color: '#424436' }}>
    <h2 style={{ paddingBottom: '2rem' }}>{categoryTitle}</h2>
    {/* Фильтр */}
    <ProductsFilter onFilterChange={handleFilters} />
    {/* Отображаем скелетон, если showSkeleton равно true */}
    {showSkeleton ? (
      <div> {/* Добавляем padding для скелетона */}
        <Skeleton />
      </div>
    ) : (
      <div id="products-section">
        {/* Показываем products, если фильтры не применены, и filteredProducts, если применены */}
        <ProductList products={isFiltering ? filteredProducts : products} />
      </div>
    )}
  </div>
  );
}
