import React, { useEffect, useState } from 'react';
import ProductList from '../components/productList/ProductList';
import { back } from '../constants';
import { useParams, useLocation } from 'react-router-dom';
import { useProductFilter } from '../components/productsFilter/useProductFilter';
import ProductsFilter from '../components/productsFilter/ProductsFilter';

export default function ProductsByCategory() {
  const { categoryId } = useParams();
  const location = useLocation(); // Хук для доступа к URL
  const numericCat = parseInt(categoryId, 10);
  const [products, setProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('All products'); // Состояние для заголовка

  // Извлечение title из URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title');
    if (title) {
      setCategoryTitle(title); // Устанавливаем заголовок, если он есть в URL
    }
  }, [location.search]);

  // Загрузка продуктов с сервера
  useEffect(() => {
    fetch(`${back}/categories/${numericCat}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from server:', data.data); // Логирование данных с сервера
        setProducts(data.data);
      })
      .catch((error) => alert('Ошибка:', error));
  }, [numericCat]);

  // Инициализация начальных фильтров
  const initialFilters = {
    priceFrom: '',
    priceTo: '',
    discounted: false,
    sortOrder: 'by default',
  };

  // Используем кастомный хук для фильтрации и сортировки
  const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters);

  return (
    <div style={{ padding: '2rem', color: '#424436' }}>
      <h2 style={{ paddingBottom: '2rem' }}>{categoryTitle}</h2> {/* Отображаем заголовок категории */}
      {/* Передаем handleFilterChange в компонент ProductsFilter */}
      <ProductsFilter onFilterChange={handleFilterChange} />
      <div id="products-section">
        {/* Отображаем отфильтрованные продукты */}
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}