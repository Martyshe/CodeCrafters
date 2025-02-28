
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setProducts } from '../redux/productsSlice';
import ProductList from '../components/productList/ProductList';
import ProductsFilter from '../components/productsFilter/ProductsFilter';
import { useProductFilter } from '../components/productsFilter/useProductFilter';
import { back } from '../constants';
import Skeleton from '../components/skeleton/Skeleton';


const AllProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const [isLoading, setIsLoading] = useState(true); // Состояние для загрузки
  const [showSkeleton, setShowSkeleton] = useState(true); // Состояние для скелетона

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
    } else {
      // Если продукты уже загружены, скрываем скелетон через 2 секунды
      setTimeout(() => {
        setIsLoading(false);
        setShowSkeleton(false);
      }, 500);
    }
  }, [products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${back}/products/all`);
      const data = await response.json();
      dispatch(setProducts(data));

      // Скрываем скелетон через 2 секунды после загрузки данных
      setTimeout(() => {
        setIsLoading(false);
        setShowSkeleton(false);
      }, 2000);
    } catch (error) {
      console.error("Ошибка загрузки продуктов:", error);
      setIsLoading(false);
      setShowSkeleton(false);
    }
  };

  return (
    <div style={{ padding: '2rem', color: '#424436' }}>
      <h2 style={{ paddingBottom: '2rem' }}>All Products</h2>
      {/* Фильтр */}
      <ProductsFilter onFilterChange={handleFilterChange} />
      {/* Отображаем скелетон, если showSkeleton равно true */}
      {showSkeleton ? (
        <Skeleton />
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default AllProductsPage;